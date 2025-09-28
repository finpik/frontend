'use client'

import { profile } from 'console'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useGetProfileByIdQuery } from '../../../gql/graphql'
import { 프로필색깔ReverseMap } from '../../createProfile/constants/enumLabelMap'
import { Profile } from '../../createProfile/types'
import { ProfileDetailsHeader } from '../components/ProfileDetailsHeader'
import Cookies from 'js-cookie'

export const ProfileDetailsClientPage = () => {
  const { profileId } = useParams<{ profileId: string }>()
  const { data } = useGetProfileByIdQuery({
    variables: { profileId: profileId },
  })

  const profile = data?.getProfileById as unknown as Profile

  const colorKey = 프로필색깔ReverseMap[profile.profileColor]

  const textStyle = `text-[var(--color-${colorKey}-3)]`
  const bgStyle = `bg-[var(--color-${colorKey}-1)]`

  return (
    <div className={`flex-column-align h-[100dvh] w-full ${bgStyle}`}>
      <ProfileDetailsHeader />
      <div className="flex-column-align w-full pt-[14px] pb-[35px] px-[20px]">
        <div className="flex-column w-full gap-y-[2px] mb-[21px]">
          <h1 className={`h1 ${textStyle}`}>{profile.profileName}</h1>
          {/* <small>생성일자</small> */}
        </div>
        <div className="flex-column w-full gap-[12px]">
          <ul className="bg-bg-1 rounded-lg">
            <li></li>
          </ul>
          <ul className="flex-bg-bg-2 rounded-lg"></ul>
        </div>
      </div>
    </div>
  )
}
