import { Carousel, Icon } from '@repo/fds/components'
import { Profile } from '../../createProfile/types'
import { LoanResultsHeader } from '../components/LoanResultsHeader'
import { ProfileLoanResults } from '../components/profile/ProfileLoanResults'
import { useState, useEffect } from 'react'
import { useScrollTrigger } from '../../../hooks/useScrollTrigger'
import { 프로필색깔ReverseMap } from '../../createProfile/constants/enumLabelMap'
import { useRouter } from 'next/navigation'
import { SortBottomSheet } from '../../loan/components/SortBottomSheet'
import { useAtomValue } from 'jotai'
import { selectedIndexAtom } from '../../loan/store/selectedIndex'
import { ProfileCarouselProvider } from '../../loan/containers/ProfileCarouselProvider'
import { UnifiedCarouselView } from '../components/profile/UnifiedCarouselView'

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

  const colorKey = 프로필색깔ReverseMap[selectedProfile?.profileColor]
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

    const onScroll = () => {
      // window 스크롤이 최상단에 도달했을 때만 compact → expanded 전환
      if (window.scrollY === 0) {
        setIsCompact(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCompact])

  const bgStyle = isCompact ? 'bg-bg-2' : 'bg-bg-1'
  const positionStyle = isCompact && 'sticky top-0 z-[1000]'

  return (
    <div className="flex-column w-full">
      {!isCompact && <LoanResultsHeader />}

      <div className={`${positionStyle}`}>
        <Carousel
          className={`w-full flex-column ${bgStyle} ${positionStyle}`}
          opts={{ align: 'start', loop: true }}
        >
          <ProfileCarouselProvider profiles={sortedProfiles}>
            <UnifiedCarouselView profiles={sortedProfiles} isCompact={isCompact} />
          </ProfileCarouselProvider>
        </Carousel>

        <div className="w-full h-[8px] bg-bg-2 shrink-0" ref={triggerRef} />
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
            onClick={() => router.push('/loan/comparison')}
          >
            <span className="b7 text-bg-1">상품 비교하기</span>
            <Icon name="compare" color="#ffffff" />
          </button>
        </>
      )}
    </div>
  )
}
