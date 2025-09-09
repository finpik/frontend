import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

type FormType = {
  checkbox: Array<string>
}

const schema = z.object({
  checkbox: z.array(z.string()).min(2).max(6),
})

export const useCompareForm = () => {
  const form = useForm<FormType>({
    mode: 'onChange',
    defaultValues: { checkbox: [] },
    resolver: zodResolver(schema),
  })

  return form
}
