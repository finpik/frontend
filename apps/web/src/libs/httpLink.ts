import { createHttpLink } from '@apollo/client'

export const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql`,
  credentials: 'include',
})
