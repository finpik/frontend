import { WheelPicker } from '@/components'
import { Meta } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof WheelPicker> = {
  title: 'WheelPicker',
  component: WheelPicker,
}

export default meta

export const Default = () => {
  const [month, setMonth] = useState('September')
  const [day, setDay] = useState(17)
  const [year, setYear] = useState(2021)

  return (
    <div className="relative w-[297px] flex bg-bg-1 rounded-[1.3rem] overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-white to-transparent z-10" />
      <WheelPicker
        items={[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        value={month}
        onChange={(v) => setMonth(v as string)}
      />
      <WheelPicker
        items={Array.from({ length: 31 }, (_, i) => i + 1)}
        value={day}
        onChange={(v) => setDay(Number(v))}
      />
      <WheelPicker
        items={Array.from({ length: 50 }, (_, i) => 1980 + i)}
        value={year}
        onChange={(v) => setYear(Number(v))}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-white to-transparent z-10" />
      <div
        className="pointer-events-none absolute top-1/2 left-0 right-0 h-[36px]
           -translate-y-1/2 border-y border-gray-300 z-10"
      />
    </div>
  )
}
