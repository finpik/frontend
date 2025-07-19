'use client'

import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client'
import { PropsWithChildren } from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const client = new ApolloClient({
  uri: `${BASE_URL}/graphql`,
  cache: new InMemoryCache(),
})

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  return <Provider client={client}>{children}</Provider>
}
