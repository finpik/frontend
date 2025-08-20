import {
  FormField,
  Input,
  Form,
  FormLabel,
  FormMessage,
  Button,
  FormControl,
  Icon,
} from '@/components'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta

type FormType = {
  input1: string
  input2: string
  input3: string
}

const schema = z.object({
  input1: z
    .string()
    .min(2, { message: '2자 이상 입력해야 해요.' })
    .max(10, { message: '10자 이내로만 입력 가능해요.' })
    .regex(/^[가-힣]+$/, { message: '한글만 입력 가능해요.' }),
  input2: z.string().min(2),
  input3: z.string(),
})

export const Default = () => {
  const form = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form

  const submitFormHandler: (formData: FormType) => void = (formData) => {
    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormHandler)} className="flex-column gap-[20px]">
          <FormField
            control={form.control}
            name="input1"
            render={({ field }) => (
              <div className="flex-column gap-[5px]">
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="플레이스홀더"
                      type="text"
                      className={errors.input1 && 'pr-[44px]'}
                      {...field}
                    />
                  </FormControl>
                  {errors.input1 && (
                    <span className="absolute right-[10px] top-1/2 -translate-y-1/2">
                      <Icon name="error" color="#ff2e2e" size={24} />
                    </span>
                  )}
                </div>
                <FormMessage />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="input2"
            render={({ field }) => (
              <div className="group">
                <FormLabel htmlFor="input2" className="mx-[6px] mt-[11px] mb-[2px]">
                  라벨
                </FormLabel>
                <FormControl>
                  <Input
                    id="input2"
                    placeholder="플레이스홀더"
                    type="text"
                    className="s3 px-[6px] py-[11px]"
                    {...field}
                  />
                </FormControl>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="input3"
            render={({ field }) => (
              <div className="group">
                <FormLabel htmlFor="input3" className="mx-[6px] mt-[11px] mb-[2px]">
                  라벨
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="input3"
                      placeholder="플레이스홀더"
                      type="text"
                      className="h5 px-[6px] py-[11px] no-spinner"
                      {...field}
                      value={field.value === '' ? '' : Number(field.value).toLocaleString('ko-KR')}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/[^\d]/g, '')
                        field.onChange(onlyDigits)
                      }}
                    />
                  </FormControl>
                  <span className="b3 text-gs-2 absolute right-[10px] top-1/2 -translate-y-1/2">
                    문자
                  </span>
                </div>
              </div>
            )}
          />
          <Button type="submit" disabled={!isValid}>
            확인
          </Button>
        </form>
      </Form>
      <DevTool control={control}></DevTool>
    </div>
  )
}
