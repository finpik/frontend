import Cookies from 'js-cookie'
import { onError } from '@apollo/client/link/error'
import { fromPromise } from '@apollo/client'
import { RefreshDocument } from '../gql/graphql'
import { client } from './client'
import { Observable } from '@apollo/client/utilities'

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  const is401 =
    (networkError && 'statusCode' in networkError && networkError.statusCode === 401) ||
    graphQLErrors?.some((e) => e.extensions?.httpStatusErrorCode === 'UNAUTHORIZED')

  if (!is401) return

  return fromPromise(
    (async () => {
      const oldRefreshToken = Cookies.get('refreshToken')

      if (!oldRefreshToken) {
        throw new Error('No refresh token')
      }

      try {
        const res = await client.mutate({
          mutation: RefreshDocument,
          context: {
            fetchOptions: {
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${oldRefreshToken}`,
              },
            },
          },
        })

        const newAccessToken = res.data?.refresh.accessToken
        const newRefreshToken = Cookies.get('refreshToken')

        Cookies.set('accessToken', newAccessToken)
        newRefreshToken && Cookies.set('refreshToken', newRefreshToken)

        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        }))

        return true
      } catch (err) {
        console.error('Refresh mutation failed', err)
        return false
      }
    })(),
  ).flatMap((success) => {
    if (success) {
      return forward(operation) // ✅ 재시도
    } else {
      return new Observable(() => {
        // 실패하면 아무 것도 안함 (혹은 logout 처리)
      })
    }
  })
})
