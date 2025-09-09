import { cache, type PropsWithChildren } from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  type QueryFunction,
  type QueryKey,
} from '@tanstack/react-query'

interface QueryProps {
  queryKey: QueryKey
  queryFn: QueryFunction
}

export const Hydration = async ({ queryKey, queryFn, children }: PropsWithChildren<QueryProps>) => {
  const getQueryClient = cache(() => new QueryClient())
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({ queryKey, queryFn })

  const dehydratedState = dehydrate(queryClient)

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
}
