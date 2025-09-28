'use client'

import { useCarousel } from '@repo/fds/components'
import { useAtom, useSetAtom } from 'jotai'
import { PropsWithChildren, useEffect } from 'react'
import { Profile } from '../../createProfile/types'
import { selectedIndexAtom } from '../store/selectedIndex'
import { selectedProfileIdAtom } from '../store/selectedProfileId'

export const ProfileCarouselProvider = ({
  children,
  profiles,
}: PropsWithChildren<{ profiles: Profile[] }>) => {
  const { api } = useCarousel()

  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom)
  const setSelectedProfileId = useSetAtom(selectedProfileIdAtom)

  useEffect(() => {
    if (!api) return

    // ✅ selectedIndex(원본 index) → raw index로 스크롤 맞추기
    // 복제된 슬라이드가 있다면, 가장 가까운 위치로 점프
    api.scrollTo(selectedIndex, true)

    const handleSelect = () => {
      const rawIndex = api.selectedScrollSnap()
      // ✅ raw index → 원본 index 매핑
      const mappedIndex = rawIndex % profiles.length
      setSelectedIndex(mappedIndex)
      setSelectedProfileId(profiles[mappedIndex]?.profileId)
    }

    api.on('select', handleSelect)
    handleSelect()

    return () => {
      api.off('select', handleSelect)
    }
  }, [api])

  return <>{children}</>
}
