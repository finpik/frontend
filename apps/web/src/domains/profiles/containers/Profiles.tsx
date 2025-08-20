import { CarouselItem } from '@repo/fds/components'
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

  const profiles = (data?.getProfilesByUser as unknown as Profile[]) ?? mockProfiles

  const router = useRouter()
  return (
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
                  {`${profile.loanProductUsageCount}개 / ${(Number(profile.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                </p>
              </li>
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                <p className="truncate">
                  {getCreditInfo(profile.creditScore, profile.creditGradeStatus)}
                </p>
              </li>
              <li className="truncate flex-align b5 text-gs-2">
                <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                <p className="truncate">
                  {`${직업군ReverseMap[profile.occupation]} / 연 ${(Number(profile.annualIncome) / 10000).toLocaleString('ko')}만원`}
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
  )
}

// mock data for testing
export const mockProfiles: Profile[] = [
  {
    profileId: 'p1',
    profileSeq: 1,
    profileName: '프로필 카드 이름1',
    profileColor: 'BLUE',
    occupation: '무직(주부)',
    employmentForm: undefined,
    businessType: undefined,
    businessStartDate: undefined,
    annualIncome: '0',
    employmentDate: undefined,
    purposeOfLoan: '생활비',
    desiredLoanAmount: '130000000',
    loanProductUsageStatus: '없음',
    loanProductUsageCount: 0,
    totalLoanUsageAmount: '0',
    creditScore: 750,
    creditGradeStatus: '중',
  },
  {
    profileId: 'p2',
    profileSeq: 2,
    profileName: '프로필 카드 이름2',
    profileColor: 'GREEN',
    occupation: '회사원',
    employmentForm: '정규직',
    businessType: undefined,
    businessStartDate: undefined,
    annualIncome: '40000000',
    employmentDate: new Date('2020-03-01'),
    purposeOfLoan: '주택 구입',
    desiredLoanAmount: '85000000',
    loanProductUsageStatus: '있음',
    loanProductUsageCount: 1,
    totalLoanUsageAmount: '2500000',
    creditScore: 690,
    creditGradeStatus: '중',
  },
  {
    profileId: 'p3',
    profileSeq: 3,
    profileName: '프로필 카드 이름3',
    profileColor: 'RED',
    occupation: '자영업',
    employmentForm: undefined,
    businessType: '도소매업',
    businessStartDate: new Date('2015-07-15'),
    annualIncome: '65000000',
    employmentDate: undefined,
    purposeOfLoan: '사업 운영',
    desiredLoanAmount: '150000000',
    loanProductUsageStatus: '없음',
    loanProductUsageCount: 0,
    totalLoanUsageAmount: '0',
    creditScore: 800,
    creditGradeStatus: '상',
  },
  {
    profileId: 'p4',
    profileSeq: 4,
    profileName: '프로필 카드 이름4',
    profileColor: 'YELLOW',
    occupation: '학생',
    employmentForm: undefined,
    businessType: undefined,
    businessStartDate: undefined,
    annualIncome: '0',
    employmentDate: undefined,
    purposeOfLoan: '학자금',
    desiredLoanAmount: '25000000',
    loanProductUsageStatus: '있음',
    loanProductUsageCount: 1,
    totalLoanUsageAmount: '1000000',
    creditScore: 580,
    creditGradeStatus: '하',
  },
]
