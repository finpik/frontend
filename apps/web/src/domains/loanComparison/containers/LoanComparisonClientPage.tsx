'use client'

import { useGetProfilesByUserQuery } from '../../../gql/graphql'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Profile } from '../../createProfile/types'
import { LoanResultsComparePage } from './LoanResultsComparePage'
import { useMount } from '../../../hooks/useMount'

export const LoanComparisonClientPage = () => {
  const { isMounted } = useMount()

  const { data, loading, error } = useGetProfilesByUserQuery({})

  useEffect(() => {
    if (loading) {
      console.log('로딩 중...')
    } else if (error) {
      console.error('프로필 조회 실패:', error)
    } else if (data) {
      console.log('리프레시토큰', Cookies.get('refreshToken'))
      console.log('프로필 조회 성공:', data.getProfilesByUser)
    }
  }, [data, loading, error])

  if (!isMounted) return null

  return (
    data?.getProfilesByUser &&
    data?.getProfilesByUser.length > 0 && (
      <LoanResultsComparePage profiles={data?.getProfilesByUser as unknown as Profile[]} />
    )
  )
}
