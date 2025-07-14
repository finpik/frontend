import {
  DateWheelPicker,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Icon,
} from '@/components'
import { cn } from '@/lib/utils'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta } from '@storybook/react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const meta: Meta<typeof DateWheelPicker> = {
  title: 'DateWheelPicker',
  component: DateWheelPicker,
  tags: ['autodocs'],
}

export default meta

type FormType = {
  dob: Date
}

const schema = z.object({
  dob: z.date({
    required_error: '날짜를 선택해주세요.',
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

  const submitFormHandler = (formData: FormType) => {
    const submitData = {
      ...formData,
      dob: format(formData.dob, 'yyyy.MM.dd'),
    }
    alert(JSON.stringify(submitData, null, 2))
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormHandler)} className="flex-column-between h-screen">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <div className="group">
                    <FormLabel htmlFor="bod" className="mx-[6px] mt-[11px] mb-[2px]">
                      라벨
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          readOnly
                          id="bod"
                          placeholder="플레이스홀더"
                          type="text"
                          className={cn('s3 px-[6px] py-[11px] pl-[40px] cursor-pointer')}
                          value={field.value ? format(field.value, 'yyyy.MM.dd') : ''}
                        />
                      </FormControl>
                      <span className="absolute left-[10px] top-1/2 -translate-y-1/2">
                        <Icon name="calendar" size={24} />
                      </span>
                    </div>
                    <PopoverContent align="start" className="group">
                      <DateWheelPicker value={field.value} onChange={field.onChange} />
                    </PopoverContent>
                  </div>
                </PopoverTrigger>
              </Popover>
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
