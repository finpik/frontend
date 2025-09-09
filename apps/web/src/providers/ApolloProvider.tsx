'use client'

import { ApolloClient, from, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import { PropsWithChildren } from 'react'
import { authLink } from '../libs/authLink'
import { errorLink } from '../libs/errorLink'
import { httpLink } from '../libs/httpLink'

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
})

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return <Provider client={client}>{children}</Provider>
}
