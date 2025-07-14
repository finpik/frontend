import { useEffect } from 'react'
import { WheelPicker } from '../WheelPicker/WheelPicker'

const currentDate = new Date()
const years = Array.from({ length: 125 }, (_, i) => currentDate.getFullYear() - i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)
const days = Array.from({ length: 31 }, (_, i) => i + 1)

interface DateWheelPickerProps {
  value?: Date
  onChange: (date: Date) => void
}

export const DateWheelPicker = ({ value, onChange }: DateWheelPickerProps) => {
  const year = value?.getFullYear() ?? currentDate.getFullYear()
  const month = (value?.getMonth() ?? currentDate.getMonth()) + 1
  const day = value?.getDate() ?? currentDate.getDate()

  useEffect(() => {
    onChange(new Date(year, month - 1, day))
  }, [])

  const handleChange = (type: 'year' | 'month' | 'day', val: number) => {
    const newDate = new Date(
      type === 'year' ? val : year,
      type === 'month' ? val - 1 : month - 1,
      type === 'day' ? val : day,
    )
    onChange(newDate)
  }

  return (
    <div className="relative flex bg-bg-1 rounded-[1.3rem] overflow-hidden px-2 w-[297px]">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-white to-transparent z-10" />
      <WheelPicker items={years} value={year} onChange={(v) => handleChange('year', Number(v))} />
      <WheelPicker
        items={months}
        value={month}
        onChange={(v) => handleChange('month', Number(v))}
      />
      <WheelPicker items={days} value={day} onChange={(v) => handleChange('day', Number(v))} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-white to-transparent z-10" />
      <div
        className="pointer-events-none absolute top-1/2 left-0 right-0 h-[36px]
           -translate-y-1/2 border-y border-gray-300 z-10"
      />
    </div>
  )
}
