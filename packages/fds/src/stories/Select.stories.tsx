'use client'

import {
  FormField,
  Form,
  FormLabel,
  Button,
  FormControl,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components'
import { cn } from '@/lib/utils'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta

type FormType = {
  option: string
}

const schema = z.object({
  option: z.string({
    required_error: '필수 입력 항목입니다.',
  }),
})

export const Default = () => {
  const form = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  const [open, setOpen] = useState(false)

  const submitFormHandler = (formData: FormType) => {
    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormHandler)} className="flex-column gap-[20px]">
          <FormField
            control={form.control}
            name="option"
            render={({ field }) => (
              <div className="group select-none">
                <FormLabel
                  htmlFor="option"
                  onClick={() => setOpen(true)}
                  className={cn('mx-[6px] mt-[11px] mb-[2px] cursor-pointer', open && 'text-pm-1')}
                >
                  라벨
                </FormLabel>
                <Select open={open} onOpenChange={setOpen} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn('group s3 px-[6px] py-[11px]', !field.value && 'text-gs-7')}
                      id="option"
                    >
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    align="end"
                    className="data-[side=bottom]:translate-y-[9px] data-[side=top]:-translate-y-[9px]"
                  >
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            확인
          </Button>
        </form>
      </Form>
      <DevTool control={control} />
    </div>
  )
}
