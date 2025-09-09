import Cookies from 'js-cookie'
import { setContext } from '@apollo/client/link/context'

export const authLink = setContext((_, { headers }) => {
  const accessToken = typeof window !== 'undefined' ? Cookies.get('accessToken') : null

  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }
})
