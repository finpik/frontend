import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>제목1</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[18px] text-balance">
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀1</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀2</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>제목2</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[18px] text-balance">
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀1</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀2</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>제목3</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-[18px] text-balance">
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀1</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
          <div className="flex-column gap-[8px]">
            <h1 className="b4 text-gs-2">서브 타이틀2</h1>
            <p className="b10 text-gs-4">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
