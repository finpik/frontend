import {
  DrawerTrigger,
  Button,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Drawer,
} from '@/components'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Drawer>
        <DrawerTrigger>
          <Button>시트1 열기</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[248px]">
          <DrawerHeader>
            <DrawerTitle>시트1 제목</DrawerTitle>
          </DrawerHeader>
          <div>내용 2</div>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger>
          <Button>시트2 열기</Button>
        </DrawerTrigger>
        <DrawerContent overlayBg="bg-gs-1/80" className="h-[281px]">
          <DrawerHeader>
            <DrawerTitle>시트2 제목</DrawerTitle>
          </DrawerHeader>
          <div>내용 2</div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
