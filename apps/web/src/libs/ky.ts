import Cookies from 'js-cookie'
import ky from 'ky'
import { RefreshDocument } from '../gql/graphql'
import { client } from './client'

const UNAUTHORIZED_CODE = 401

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = Cookies.get('accessToken')
        if (accessToken) {
          request.headers.set('Authorization', `Bearer ${accessToken}`)
          request.headers.set('Connection', 'keep-alive')
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        const accessToken = Cookies.get('accessToken')
        const oldRefreshToken = Cookies.get('refreshToken')

        if (response.status === UNAUTHORIZED_CODE || !accessToken) {
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

            if (!res.errors) {
              const newAccessToken = res.data?.refresh.accessToken
              const newRefreshToken = Cookies.get('refreshToken')

              Cookies.set('accessToken', newAccessToken)
              newRefreshToken && Cookies.set('refreshToken', newRefreshToken)

              return api(request, options)
            } else {
              return response
            }
          } catch (error) {
            return response
          }
        }

        return response
      },
    ],
  },
})
