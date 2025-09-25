import { useCarousel } from '@repo/fds/components'
import { useEffect } from 'react'
import { Profile } from '../../createProfile/types'
import { selectedIndexAtom } from '../store/selectedIndex'
import { useAtom, useSetAtom } from 'jotai'
import { selectedProfileIdAtom } from '../store/selectedProfileId'

// 사용 안하는 훅
export const useCarouselProfile = (profiles: Profile[]) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom)
  const setSelectedProfileId = useSetAtom(selectedProfileIdAtom)

  useEffect(() => {
    if (!api) return

    api.scrollTo(selectedIndex, true)

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setSelectedProfileId(profiles[api.selectedScrollSnap()]?.profileId)
    }

    api.on('select', handleSelect)
    handleSelect()

    return () => {
      api.off('select', handleSelect)
    }
  }, [api])

  const selectedProfile = profiles[selectedIndex] as Profile

  return {
    selectedIndex,
    setSelectedIndex,
    selectedProfile,
  }
}
