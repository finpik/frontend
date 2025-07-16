import { Toaster, Button, Icon } from '@/components'
import { Meta } from '@storybook/react'
import { toast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'Toaster',
  component: Toaster,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Button
        onClick={() =>
          toast('내용내용내용', {
            action: {
              label: '액션',
              onClick: () => console.log('액션'),
            },
            icon: <Icon name="delete" />,
            className:
              '!px-[18px] !py-[17px] !bg-gs-2 !gap-[8px] !b10 !text-bg-1 !rounded-xs !shadow-6 [&>button]:!flex-center [&>button]:!p-0 [&>button]:!bg-transparent [&>button]:!b8 [&>button]:!w-[52px] [&>button]:!text-pm-2',
          })
        }
      >
        아이콘 포함 토스트
      </Button>

      <Button
        onClick={() =>
          toast('내용내용내용', {
            action: {
              label: '액션',
              onClick: () => console.log('액션'),
            },
            className:
              '!px-[18px] !py-[17px] !bg-gs-2 !gap-[8px] !b10 !text-bg-1 !rounded-xs !shadow-6 [&>button]:!flex-center [&>button]:!p-0 [&>button]:!bg-transparent [&>button]:!b8 [&>button]:!w-[52px] [&>button]:!text-pm-2',
          })
        }
      >
        텍스트 토스트
      </Button>
    </div>
  )
}
