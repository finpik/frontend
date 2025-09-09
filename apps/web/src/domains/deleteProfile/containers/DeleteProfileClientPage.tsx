'use client'

import { DeleteProfileFormProvider } from './DeleteProfileFormProvider'
import { DeleteProfileHeader } from '../components/DeleteProfileHeader'
import { Profiles } from '../components/Profiles'
import { useEffect } from 'react'
import { Profile } from '../../createProfile/types'
import { useGetProfilesByUserQuery } from '../../../gql/graphql'
import Cookies from 'js-cookie'

export const DeleteProfileClientPage = () => {
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

  const profiles = data?.getProfilesByUser as unknown as Profile[]

  return (
    profiles && (
      <div className="flex-column w-full">
        <DeleteProfileFormProvider>
          <DeleteProfileHeader profileIds={profiles.map((p) => p.profileId)} />
          <Profiles profiles={profiles} />
        </DeleteProfileFormProvider>
      </div>
    )
  )
}
