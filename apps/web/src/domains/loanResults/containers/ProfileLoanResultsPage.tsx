import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
  Icon,
  useCarousel,
} from '@repo/fds/components'
import { Profile } from '../../createProfile/types'
import { LoanResultsHeader } from '../components/LoanResultsHeader'
import { ProfileLoanResults } from '../components/profile/ProfileLoanResults'
import { useState, useEffect, PropsWithChildren } from 'react'
import { useScrollTrigger } from '../../../hooks/useScrollTrigger'
import {
  대출목적ReverseMap,
  직업군ReverseMap,
  프로필색깔ReverseMap,
} from '../../createProfile/constants/enumLabelMap'
import { getCreditInfo } from '../../createProfile/utils/getCreditInfo'
import { useRouter } from 'next/navigation'
import { SortBottomSheet } from '../../loan/components/SortBottomSheet'
import { useAtom, useAtomValue } from 'jotai'
import { selectedIndexAtom } from '../../loan/store/selectedIndex'

interface ProfileLoanResultsPageProps {
  profiles: Profile[]
}

export const ProfileLoanResultsPage = ({ profiles }: ProfileLoanResultsPageProps) => {
  const router = useRouter()

  const sortedProfiles = [...profiles].sort((a, b) => a.profileSeq - b.profileSeq)
  const [isCompact, setIsCompact] = useState(false)

  const { triggerRef } = useScrollTrigger(159, setIsCompact)

  const selectedIndex = useAtomValue(selectedIndexAtom)
  const selectedProfile = sortedProfiles[selectedIndex] as Profile

  const colorKey = 프로필색깔ReverseMap[selectedProfile.profileColor]
  const textStyle = `text-[var(--color-${colorKey}-3)]`

  const handleBackToTop = () => {
    if (window.scrollY <= 0) {
      setIsCompact(false)
      return
    }
    const onScroll = () => {
      if (window.scrollY <= 0) {
        setIsCompact(false)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (!isCompact) return
    let base = window.scrollY
    let ticking = false
    const UP_DELTA = 120
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (y < base - UP_DELTA) {
          setIsCompact(false)
          ticking = false
          return
        }
        if (y > base) base = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCompact])

  const bgStyle = isCompact ? 'bg-bg-2' : 'bg-bg-1'
  const positionStyle = isCompact && 'sticky top-0'

  return (
    <div className="flex-column w-full">
      {!isCompact && <LoanResultsHeader />}

      <div className={`${positionStyle}`}>
        <Carousel
          className={`w-full flex-column ${bgStyle} ${positionStyle}`}
          opts={{ align: 'start', loop: true }}
        >
          <ProfileCarouselProvider>
            {/* ✅ 한 개의 캐러셀만 유지하고, 내부에서 두 레이아웃을 페이드로 전환 */}
            <UnifiedCarouselView profiles={sortedProfiles} isCompact={isCompact} />
          </ProfileCarouselProvider>
        </Carousel>

        <div className="w-full h-[8px] bg-bg-2" ref={triggerRef} />
        {!isCompact && (
          <h1 className="mt-[23px] ml-[20px] mb-[12px] h4 text-gs-2 whitespace-pre-line">
            <span className={`${textStyle}`}>{selectedProfile?.profileName}</span>의 대출을
            추천받아요
          </h1>
        )}
        <SortBottomSheet />
      </div>

      <ProfileLoanResults profileId={selectedProfile?.profileId} />

      {/* 플로팅 버튼 */}
      {isCompact && (
        <>
          <button
            type="button"
            onClick={handleBackToTop}
            className="size-[46px] flex-center rounded-[50%] backdrop-blur-sm bg-bg-1/80 shadow-[3px_3px_6px_0px_rgba(17,17,17,0.25)] fixed bottom-[102px] right-[19.6px] z-[999] cursor-pointer "
          >
            <Icon name="up" size={20.308} />
          </button>
          <button
            type="button"
            className="flex-align gap-[4px] px-[18px] py-[13px] rounded-xl bg-pm-1 shadow-2 fixed bottom-[42px] right-[19.6px] z-[999] cursor-pointer"
            onClick={() => router.replace('/loan/comparison')}
          >
            <span className="b7 text-bg-1">상품 비교하기</span>{' '}
            <Icon name="compare" color="#ffffff" />
          </button>
        </>
      )}
    </div>
  )
}

/** ✅ 하나의 캐러셀 + 아이템 내부에서 Expanded/Compact 두 레이어를 겹쳐서 페이드 전환 */
function UnifiedCarouselView({ profiles, isCompact }: { profiles: Profile[]; isCompact: boolean }) {
  const selectedIndex = useAtomValue(selectedIndexAtom)

  // 상단 패딩/마진은 기존 레이아웃 그대로
  const outerWrapClass = isCompact ? 'bg-bg-1 pt-[21px] rounded-b-lg' : 'ml-[20px] pt-[11px]'
  const innerWrapClass = isCompact ? 'mx-[20px]' : ''
  const contentClass = isCompact ? '-ml-[20px]' : '-ml-[8px]'
  const itemClass = isCompact ? 'shrink-0 pl-[20px]' : 'basis-[calc(100%-28px)] shrink-0 pl-[8px]'
  const dotsClass = isCompact ? 'mt-[23px] mb-[16px]' : 'mt-[15px] mb-[21px]'

  return (
    <>
      <div className={outerWrapClass}>
        <div className={innerWrapClass}>
          <CarouselContent className={contentClass}>
            {profiles.map((p) => {
              const key = p.profileId ?? p.profileSeq
              const colorKey = 프로필색깔ReverseMap[p.profileColor]
              const textStyle = `text-[var(--color-${colorKey}-3)]`
              const bgStyle = `bg-[var(--color-${colorKey}-1)]`
              const borderStyle = `border-[var(--color-${colorKey}-2)]`

              return (
                <CarouselItem key={key} className={itemClass}>
                  {/* relative 컨테이너 안에서 두 레이어를 겹침 */}
                  <div className="relative">
                    {/* Expanded 레이어 */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-250 ${
                        isCompact ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      <div
                        className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
                      >
                        <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
                          {p.profileName}
                        </h1>
                        <ul className="flex-column gap-[6px] mt-[12px]">
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                            <p className="truncate">{대출목적ReverseMap[p.purposeOfLoan]}</p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                            <p className="truncate">
                              {`${p.loanProductUsageCount}개 / ${(Number(p.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                            </p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                            <p className="truncate">
                              {getCreditInfo(p.creditScore, p.creditGradeStatus)}
                            </p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                            <p className="truncate">
                              {`${직업군ReverseMap[p.occupation]} / 연 ${(Number(p.annualIncome) / 10000).toLocaleString('ko')}만원`}
                            </p>
                          </li>
                        </ul>
                        <hr
                          className={`h-[2px] mt-[19.7px] mb-[13.3px] border-dashed ${borderStyle}`}
                        />
                        <div className="flex-between-align">
                          <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
                          <div className="h4 flex-align gap-[1px]">
                            <span>{Number(p.desiredLoanAmount).toLocaleString('ko')}</span>
                            <span>원</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Compact 레이어 */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-250 ${
                        isCompact ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div>
                        <h1 className={`s1 ${textStyle} text-center mb-[12px]`}>{p.profileName}</h1>
                        <ul
                          className={`b9 ${textStyle} flex-align gap-[8px] no-scrollbar overflow-x-scroll`}
                        >
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {대출목적ReverseMap[p.purposeOfLoan]}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {`${p.loanProductUsageCount}개 / ${(Number(p.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {getCreditInfo(p.creditScore, p.creditGradeStatus)}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {`${직업군ReverseMap[p.occupation]} / 연 ${(Number(p.annualIncome) / 10000).toLocaleString('ko')}만원`}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* 높이 유지를 위한 사이저(보이는 레이아웃과 동일한 DOM을 투명하게 렌더) */}
                    <div className="opacity-0 pointer-events-none">
                      {isCompact ? (
                        <div>
                          <h1 className={`s1 ${textStyle} text-center mb-[12px]`}>
                            {p.profileName}
                          </h1>
                          <ul
                            className={`b9 ${textStyle} flex-align gap-[8px] no-scrollbar overflow-x-scroll`}
                          >
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {대출목적ReverseMap[p.purposeOfLoan]}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {`${p.loanProductUsageCount}개 / ${(Number(p.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {getCreditInfo(p.creditScore, p.creditGradeStatus)}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {`${직업군ReverseMap[p.occupation]} / 연 ${(Number(p.annualIncome) / 10000).toLocaleString('ko')}만원`}
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div
                          className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
                        >
                          <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
                            {p.profileName}
                          </h1>
                          <ul className="flex-column gap-[6px] mt-[12px]">
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                              <p className="truncate">{대출목적ReverseMap[p.purposeOfLoan]}</p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                              <p className="truncate">
                                {`${p.loanProductUsageCount}개 / ${(Number(p.totalLoanUsageAmount) / 10000).toLocaleString('ko')}만원`}
                              </p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                              <p className="truncate">
                                {getCreditInfo(p.creditScore, p.creditGradeStatus)}
                              </p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                              <p className="truncate">
                                {`${직업군ReverseMap[p.occupation]} / 연 ${(Number(p.annualIncome) / 10000).toLocaleString('ko')}만원`}
                              </p>
                            </li>
                          </ul>
                          <hr
                            className={`h-[2px] mt-[19.7px] mb-[13.3px] border-dashed ${borderStyle}`}
                          />
                          <div className="flex-between-align">
                            <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
                            <div className="h4 flex-align gap-[1px]">
                              <span>{Number(p.desiredLoanAmount).toLocaleString('ko')}</span>
                              <span>원</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </div>

        <div className={dotsClass}>
          <CarouselDots length={profiles.length} index={selectedIndex} />
        </div>
      </div>
    </>
  )
}

export const ProfileCarouselProvider = ({ children }: PropsWithChildren) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom)

  useEffect(() => {
    if (!api) return
    api.scrollTo(selectedIndex, true)

    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on('select', handleSelect)
    handleSelect()
    return () => {
      api.off('select', handleSelect)
    }
  }, [api])

  return <>{children}</>
}
