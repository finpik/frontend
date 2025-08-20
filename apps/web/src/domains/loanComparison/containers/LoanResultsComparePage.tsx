'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselDots, Icon } from '@repo/fds/components'
import { Profile } from '../../createProfile/types'
import { useState, useEffect } from 'react'
import { useScrollTrigger } from '../../../hooks/useScrollTrigger' // ✅ 여기 변경
import {
  대출목적ReverseMap,
  직업군ReverseMap,
  프로필색깔ReverseMap,
} from '../../createProfile/constants/enumLabelMap'
import { getCreditInfo } from '../../createProfile/utils/getCreditInfo'
import { LoanResultsHeader } from '../../loanResults/components/LoanResultsHeader'
import { ProfileLoanResultsForm } from './ProfileLoanResultsForm'
import { useCompareForm } from '../hooks/useCompareForm'
import { SortBottomSheet } from '../../loan/components/SortBottomSheet'
import { useCarouselProfile } from '../../loan/hooks/useCarouselProfile'

interface LoanResultsComparePage {
  profiles: Profile[]
}

export const LoanResultsComparePage = ({ profiles }: LoanResultsComparePage) => {
  const sortedProfiles = [...profiles].sort((a, b) => a.profileSeq - b.profileSeq)
  const [isCompact, setIsCompact] = useState(false)

  // ✅ 캐러셀 전환 시 맨 위로 스크롤
  useEffect(() => {
    if (isCompact) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isCompact])

  const handleBackToTop = () => {
    setIsCompact(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50) // 애니메이션 반영 후 scroll
  }

  // 렌더링 최적화 및 수정
  const { watch } = useCompareForm()
  const compareDisabled = watch('checkbox').length < 2
  const bgStyle = watch('checkbox').length < 2 ? 'bg-gs-8' : 'bg-pm-1'

  return (
    <div className="flex-column-align w-full">
      {!isCompact && <LoanResultsHeader />}
      {isCompact ? (
        <Carousel className="w-full flex-column bg-bg-2" opts={{ align: 'start', loop: true }}>
          <CompactCarouselWithSync profiles={sortedProfiles} onTriggerPassedChange={setIsCompact} />
        </Carousel>
      ) : (
        <Carousel className="w-full flex-column" opts={{ align: 'start', loop: true }}>
          <CarouselWithSync profiles={sortedProfiles} onTriggerPassedChange={setIsCompact} />
        </Carousel>
      )}
      {/* {selectedProfile && <ProfileLoanResultsForm {...selectedProfile} />} */}
      <button
        type="button"
        onClick={handleBackToTop}
        className="size-[46px] flex-center rounded-[50%] backdrop-blur-sm bg-bg-1/80 shadow-[3px_3px_6px_0px_rgba(17,17,17,0.25)] fixed bottom-[102px] right-[19.6px] z-[999] cursor-pointer "
      >
        <Icon name="up" size={20.308} />
      </button>
      <button
        type="button"
        className={`flex-align gap-[4px] px-[18px] py-[13px] rounded-xl ${bgStyle} shadow-2 fixed bottom-[42px] right-[19.6px] z-[999] cursor-pointer`}
        disabled={compareDisabled}
      >
        <span className="b7 text-bg-1">비교 결과</span> <Icon name="go" color="#ffffff" />
      </button>
    </div>
  )
}

const CarouselWithSync = ({
  profiles,
  onTriggerPassedChange,
}: {
  profiles: Profile[]
  onTriggerPassedChange: (v: boolean) => void
}) => {
  const { triggerRef } = useScrollTrigger(159, onTriggerPassedChange) // ✅ 여기 변경

  const { selectedProfile } = useCarouselProfile(profiles)
  const colorKey = 프로필색깔ReverseMap[selectedProfile?.profileColor]

  const textStyle = `text-[var(--color-${colorKey}-3)]`

  return (
    <>
      <div className="ml-[20px] pt-[11px]">
        <CarouselContent className="-ml-[8px]">
          {profiles.map((profile, index) => {
            const borderStyle = `border-[var(--color-${colorKey}-2)]`
            const bgStyle = `bg-[var(--color-${프로필색깔ReverseMap[profile?.profileColor]}-1)]`

            return (
              <CarouselItem key={index} className="basis-[calc(100%-28px)] shrink-0 pl-[8px]">
                <div
                  className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
                >
                  <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
                    {profile.profileName}
                  </h1>
                  <ul className="flex-column gap-[6px] mt-[12px]">
                    <li className="truncate flex-align b5 text-gs-2">
                      <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                      <p className="truncate">{대출목적ReverseMap[profile.purposeOfLoan]}</p>
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
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </div>
      <div className="mt-[15px] mb-[21px]">
        <CarouselDots length={profiles.length} />
      </div>
      <div ref={triggerRef} className="w-full h-[8px] bg-bg-2" /> {/* ← 기준 ref */}
      <h1 className="mt-[23px] ml-[20px] mb-[12px] h4 text-gs-2 whitespace-pre-line">
        <span className={`${textStyle}`}>{selectedProfile?.profileName}</span>의 대출을 추천받아요
      </h1>
      <SortBottomSheet />
      {selectedProfile && <ProfileLoanResultsForm {...selectedProfile} />}
    </>
  )
}

const CompactCarouselWithSync = ({
  profiles,
  onTriggerPassedChange,
}: {
  profiles: Profile[]
  onTriggerPassedChange: (v: boolean) => void
}) => {
  const { selectedProfile } = useCarouselProfile(profiles)

  return (
    <>
      <div className="flex-column sticky top-0">
        <div className="bg-bg-1 pt-[21px] rounded-b-lg">
          <div className="mx-[20px]">
            <CarouselContent className="-ml-[20px]">
              {profiles.map((profile, index) => {
                const colorKey = 프로필색깔ReverseMap[profile.profileColor]
                const bgStyle = `bg-[var(--color-${colorKey}-1)]`
                const textStyle = `text-[var(--color-${colorKey}-3)]`

                return (
                  <CarouselItem key={index} className="shrink-0 pl-[20px]">
                    <h1 className={`s1 ${textStyle} text-center mb-[12px]`}>
                      {profile.profileName}
                    </h1>
                    <ul
                      className={`b9 ${textStyle} flex-align gap-[8px] no-scrollbar overflow-x-scroll`}
                    >
                      <li className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}>
                        {대출목적ReverseMap[profile.purposeOfLoan]}
                      </li>
                      <li className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}>
                        {`${profile.loanProductUsageCount}개 / ${(Number(profile.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                      </li>
                      <li className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}>
                        {getCreditInfo(profile.creditScore, profile.creditGradeStatus)}
                      </li>
                      <li className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}>
                        {`${직업군ReverseMap[profile.occupation]} / 연 ${(Number(profile.annualIncome) / 10000).toLocaleString('ko')}만원`}
                      </li>
                    </ul>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </div>
          <div className="mt-[23px] mb-[16px]">
            <CarouselDots length={profiles.length} />
          </div>
        </div>
        <div className="w-full h-[8px] bg-bg-2" />
        <SortBottomSheet />
      </div>
      {selectedProfile && <ProfileLoanResultsForm {...selectedProfile} />}
    </>
  )
}
