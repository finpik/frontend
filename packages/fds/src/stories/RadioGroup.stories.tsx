import type { Meta } from '@storybook/react'

import { Button, RadioGroup, RadioGroupItem, Form, FormControl, FormField } from '@/components'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}

export default meta

type FormType = {
  radio1: string
  radio2: string
  radio3: string
  radio4: string
}

const 옵션리스트 = ['옵션1', '옵션2']

export const Default = () => {
  const form = useForm<FormType>({})
  const { control, handleSubmit } = form

  const submitFormHandler: (formData: FormType) => void = (formData) =>
    alert(JSON.stringify(formData, null, 2))

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormHandler)} className="flex-column gap-[20px]">
          <FormField
            control={form.control}
            name="radio1"
            render={({ field }) => (
              <RadioGroup className="b2" onValueChange={field.onChange}>
                {옵션리스트.map((옵션) => (
                  <div className="flex-align space-x-[17px]">
                    <RadioGroupItem value={옵션} id={옵션} />
                    <label htmlFor={옵션}>{옵션}</label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />

          <FormField
            control={form.control}
            name="radio2"
            render={({ field }) => (
              <FormControl>
                <RadioGroup className="s2" onValueChange={field.onChange}>
                  <div className="flex space-x-[17px]">
                    <RadioGroupItem value="옵션1" id="옵션1" />
                    <label htmlFor="옵션1" className="flex-column gap-[8px]">
                      옵션1
                      <div className="b8 text-gs-6">옵션 설명1</div>
                    </label>
                  </div>
                  <div className="flex space-x-[17px]">
                    <RadioGroupItem value="옵션2" id="옵션2" />
                    <label htmlFor="옵션2" className="flex-column gap-[8px]">
                      옵션2
                      <div className="b8 text-gs-6">옵션 설명2</div>
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
            )}
          />

          <FormField
            control={form.control}
            name="radio3"
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange}>
                {옵션리스트.map((옵션) => (
                  <div>
                    <RadioGroupItem value={옵션} id={옵션} className="peer hidden" />
                    <label
                      htmlFor={옵션}
                      className="w-fit flex flex-col items-center justify-center whitespace-nowrap rounded-sm disabled:pointer-events-none cursor-pointer s4 h-[54px] px-[56px] py-[18px] border-[1.5px] bg-bg-1 text-gs-2 peer-data-[state=checked]:border-pm-1 peer-data-[state=checked]:border-[1.7px] peer-data-[state=checked]:bg-pm-3 peer-data-[state=checked]:text-pm-1 peer-data-[state=checked]:s2"
                    >
                      {옵션}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />

          <FormField
            control={form.control}
            name="radio4"
            render={({ field }) => (
              <RadioGroup onValueChange={field.onChange}>
                {옵션리스트.map((옵션) => (
                  <div>
                    <RadioGroupItem value={옵션} id={옵션} className="peer hidden" />
                    <label
                      htmlFor={옵션}
                      className="w-fit flex flex-col items-center justify-center whitespace-nowrap rounded-sm disabled:pointer-events-none cursor-pointer b3 h-[48px] px-[48px] py-[16px] border-[1.5px] bg-bg-1 text-gs-2 peer-data-[state=checked]:border-pm-1 peer-data-[state=checked]:border-[1.7px] peer-data-[state=checked]:bg-pm-3 peer-data-[state=checked]:text-pm-1 peer-data-[state=checked]:b1"
                    >
                      {옵션}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            확인
          </Button>
        </form>
      </Form>
      <DevTool control={control}></DevTool>
    </div>
  )
}
