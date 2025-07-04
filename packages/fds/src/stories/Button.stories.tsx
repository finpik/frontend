import type { Meta } from '@storybook/react'

import { Button } from '@/components'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Button onClick={() => alert('클릭')}>버튼</Button>
      <Button onClick={() => alert('클릭')} disabled variant="disabled">
        버튼
      </Button>
      <Button onClick={() => alert('클릭')} variant="secondary">
        버튼
      </Button>
      <div className="flex-align gap-[8px]">
        <Button onClick={() => alert('클릭')} size="md">
          버튼
        </Button>
        <Button onClick={() => alert('클릭')} variant="tonal" size="md">
          버튼
        </Button>
      </div>
      <Button onClick={() => alert('클릭')} size="sm">
        프로필 카드 만들기
      </Button>
    </div>
  )
}
