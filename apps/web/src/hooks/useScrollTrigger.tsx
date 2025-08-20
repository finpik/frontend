// hooks/useScrollTrigger.ts
import { useRef, useEffect } from 'react'

export const useScrollTrigger = (
  offsetPx: number,
  onTriggerPassedChange: (isPassed: boolean) => void,
) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkPosition = () => {
      const top = ref.current?.getBoundingClientRect().top ?? Infinity
      const isPassed = top <= offsetPx
      onTriggerPassedChange(isPassed)
    }

    // 초기 체크
    checkPosition()

    // 스크롤 감지
    window.addEventListener('scroll', checkPosition, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkPosition)
    }
  }, [offsetPx, onTriggerPassedChange])

  return { triggerRef: ref }
}
