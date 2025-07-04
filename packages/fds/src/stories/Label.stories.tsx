import { Label } from '@/components'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return <Label>라벨</Label>
}
