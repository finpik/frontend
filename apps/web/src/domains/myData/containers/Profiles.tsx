import { useEffect } from 'react'
import { useGetProfilesByUserQuery } from '../../../gql/graphql'
import {
  프로필색깔ReverseMap,
  대출목적ReverseMap,
  직업군ReverseMap,
} from '../../createProfile/constants/enumLabelMap'
import { getCreditInfo } from '../../createProfile/utils/getCreditInfo'
import Cookies from 'js-cookie'
import { Profile } from '../../createProfile/types'
import { useRouter } from 'next/navigation'
import { Button } from '@repo/fds/components'
import Image from 'next/image'

export const Profiles = () => {
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

  const router = useRouter()
  return profiles ? (
    <div className="flex-column w-full gap-[12px] px-[20px] py-[18px]">
      {profiles?.map((profile, index) => {
        const colorKey = 프로필색깔ReverseMap[profile?.profileColor]
        const bgStyle = `bg-[var(--color-${colorKey}-1)]`
        const borderStyle = `border-[var(--color-${colorKey}-2)]`
        const textStyle = `text-[var(--color-${colorKey}-3)]`

        return (
          <div
            key={index}
            onClick={() => router.push(`/profiles/${profile.profileId}`)}
            className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
          >
            <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
              {profile?.profileName}
            </h1>
            <ul className="flex-column gap-[6px] mt-[12px]">
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                <p className="truncate">{대출목적ReverseMap[profile?.purposeOfLoan]}</p>
              </li>
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                <p className="truncate">
                  {`${profile.loanProductUsageCount}개 / ${Number(profile.totalLoanUsageAmount).toLocaleString('ko')}원`}
                </p>
              </li>
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                <p className="truncate">
                  {getCreditInfo(
                    Number(String(profile.creditScore)?.replace(/[^\d]/g, '')),
                    profile.creditGradeStatus,
                  )}
                </p>
              </li>
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                <p className="truncate">
                  {`${직업군ReverseMap[profile.occupation]} / 연 ${Number(profile.annualIncome).toLocaleString('ko')}원`}
                </p>
              </li>
            </ul>
            <hr className={`h-[2px] mt-[19.7px] mb-[13.3px] border-dashed ${borderStyle}`} />
            <div className="flex-between-align">
              <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
              <div className="h4 flex-align gap-[1px]">
                <span>{Number(profile.desiredLoanAmount).toLocaleString('ko')}</span>
                <span>원</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  ) : (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-column-align w-full">
      <Image
        src="/loanResults/no_profile_card.svg"
        alt="no_profile_card"
        width={68}
        height={57}
        className="mb-[12px] mt-[55px]"
      />
      <div className="b4 text-gs-6 text-center mb-[26px] whitespace-pre">{`아직 프로필 카드가 없어요!\n지금 만들어서 꼭 맞는 대출을 추천받아요.`}</div>
      <Button onClick={() => router.push('/profile/create')} size="sm" className="mb-[36px]">
        프로필 카드 만들기
      </Button>
    </div>
  )
}
