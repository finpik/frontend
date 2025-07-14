import { FixedSizeList as List } from 'react-window'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface WheelPickerProps {
  items: (string | number)[]
  value: string | number
  onChange: (val: string | number) => void
}

const VISIBLE_ITEMS = 7
const ITEM_HEIGHT = 30.428571
const CONTAINER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS
const CENTER_OFFSET = Math.floor(VISIBLE_ITEMS / 2)
const REPEAT_COUNT = 100

export function WheelPicker({ items, value, onChange }: WheelPickerProps) {
  const listRef = useRef<List>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const totalItems = useMemo(
    () =>
      Array(REPEAT_COUNT * items.length)
        .fill(null)
        .map((_, i) => items[i % items.length]),
    [items],
  )

  const middleIndex = Math.floor(totalItems.length / 2)
  const [centeredIndex, setCenteredIndex] = useState(middleIndex)

  const getItem = (index: number) => totalItems[index % totalItems.length]

  useEffect(() => {
    const itemIndex = items.findIndex((item) => item === value)
    if (itemIndex < 0) return

    const baseIndex = Math.floor(totalItems.length / 2)
    const targetIndex = baseIndex - (baseIndex % items.length) + itemIndex

    listRef.current?.scrollToItem(targetIndex, 'center')
    setCenteredIndex(targetIndex)
  }, [value, items])

  const smoothScrollTo = (index: number) => {
    const offset = index * ITEM_HEIGHT - (CONTAINER_HEIGHT / 2 - ITEM_HEIGHT / 2)
    outerRef.current?.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }

  const handleScroll = ({ scrollOffset }: { scrollOffset: number }) => {
    const centerIndex = Math.round(scrollOffset / ITEM_HEIGHT) + CENTER_OFFSET
    const clampedIndex = Math.max(0, Math.min(centerIndex, totalItems.length - 1))

    if (clampedIndex !== centeredIndex) {
      setCenteredIndex(clampedIndex)
      const item = getItem(clampedIndex)
      item && onChange(item)
    }

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      smoothScrollTo(clampedIndex)
    }, 100)

    // Reset scroll bounds
    const boundary = items.length * 2
    if (centerIndex < boundary || centerIndex > totalItems.length - boundary) {
      const newIndex = middleIndex + (centerIndex % items.length)
      listRef.current?.scrollToItem(newIndex, 'center')
      setCenteredIndex(newIndex)
      const item = getItem(newIndex)
      item && onChange(item)
    }
  }

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const distance = index - centeredIndex
    const rotateX = distance * 12
    const scale = 1 - Math.min(Math.abs(distance) * 0.05, 0.3)
    const opacity = 1 - Math.min(Math.abs(distance) * 0.15, 0.7)

    return (
      <div
        style={{
          ...style,
          height: ITEM_HEIGHT,
          transform: `rotateX(${rotateX}deg) scale(${scale})`,
          opacity,
          transformOrigin: 'center center',
          backfaceVisibility: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className={cn(
          'transition-all duration-300 ease-out font-pretendard',
          index === centeredIndex
            ? 'text-black text-[16px] tracking-tight'
            : 'text-gray-400 text-[14px] tracking-tighter',
        )}
      >
        {getItem(index)}
      </div>
    )
  }

  return (
    <div className="relative w-[100px] overflow-hidden" style={{ height: CONTAINER_HEIGHT }}>
      <div className="absolute top-1/2 left-0 right-0 h-[30.4px] -translate-y-1/2 z-10" />
      <List
        height={CONTAINER_HEIGHT}
        itemCount={totalItems.length}
        itemSize={ITEM_HEIGHT}
        width={100}
        onScroll={handleScroll}
        ref={listRef}
        outerRef={outerRef}
        style={{ perspective: '1000px' }}
        className="no-scrollbar"
      >
        {Row}
      </List>
    </div>
  )
}
