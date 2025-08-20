import type { Meta } from '@storybook/react'

import { Button, RadioGroup, Form, FormControl, FormField, Checkbox } from '@/components'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta

type FormType = {
  checkbox: Array<string>
}

const schema = z.object({
  checkbox: z.array(z.string()).refine((value) => value.some((item) => item)),
})

export const Default = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: { checkbox: [] },
  })
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  const submitFormHandler: (formData: FormType) => void = (formData) => {
    alert(JSON.stringify(formData, null, 2))
  }

  const items = [{ id: '옵션1', label: '옵션1' }] as const

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(submitFormHandler)} className="flex-column gap-[20px]">
          {items.map((item) => (
            <FormField
              key={item.id}
              control={control}
              name="checkbox"
              render={({ field }) => (
                <RadioGroup className="flex-column px-[8px] gap-[26px] b2 text-gs-2">
                  <div className="flex-align space-x-[17px]" key="checkbox">
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(field.value?.filter((value) => value !== item.id))
                        }}
                      />
                    </FormControl>
                    <label htmlFor="checkbox" className="cursor-pointer">
                      {item.label}
                    </label>
                  </div>
                </RadioGroup>
              )}
            />
          ))}

          <Button type="submit" disabled={!isValid}>
            확인
          </Button>
        </form>
      </Form>
      <DevTool control={control}></DevTool>
    </div>
  )
}
