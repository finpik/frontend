'use client'

import { useGetProfilesByUserQuery } from '../../../gql/graphql'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { ProfileLoanResultsPage } from './ProfileLoanResultsPage'
import { NoProfileLoanResultsPage } from './NoProfileLoanResultsPage'
import { Profile } from '../../createProfile/types'

export const LoanResultsClientPage = () => {
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

  return data?.getProfilesByUser && data?.getProfilesByUser.length > 0 ? (
    <ProfileLoanResultsPage profiles={data?.getProfilesByUser as unknown as Profile[]} />
  ) : (
    <NoProfileLoanResultsPage />
  )
}
