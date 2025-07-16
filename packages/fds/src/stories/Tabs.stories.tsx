import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[20px]">
      <Tabs defaultValue="menu1">
        <TabsList>
          <TabsTrigger value="menu1">탭메뉴1</TabsTrigger>
          <TabsTrigger value="menu2">탭메뉴2</TabsTrigger>
        </TabsList>
        <TabsContent value="menu1">내용1</TabsContent>
        <TabsContent value="menu2">내용2</TabsContent>
      </Tabs>
    </div>
  )
}
