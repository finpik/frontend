import { useCarousel } from '@repo/fds/components'
import { useState, useEffect } from 'react'
import { Profile } from '../../createProfile/types'
import { selectedIndexAtom } from '../store/selectedIndex'
import { useAtom } from 'jotai'

export const useCarouselProfile = (profiles: Profile[]) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useAtom(selectedIndexAtom)

  useEffect(() => {
    if (!api) return

    api.scrollTo(selectedIndex, true)

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
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
