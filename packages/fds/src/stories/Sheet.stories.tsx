import { SheetTrigger, Button, SheetContent, SheetHeader, SheetTitle, Sheet } from '@/components'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Sheet> = {
  title: 'Sheet',
  component: Sheet,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Sheet>
        <SheetTrigger>
          <Button>시트1 열기</Button>
        </SheetTrigger>
        <SheetContent className="h-[248px]">
          <SheetHeader>
            <SheetTitle>시트1 제목</SheetTitle>
          </SheetHeader>
          <div>내용 2</div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger>
          <Button>시트2 열기</Button>
        </SheetTrigger>
        <SheetContent overlayBg="bg-gs-1/80" className="h-[281px]">
          <SheetHeader>
            <SheetTitle>시트2 제목</SheetTitle>
          </SheetHeader>
          <div>내용 2</div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
