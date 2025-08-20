import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { SignUpForm } from '../type'

const schema = z.object({
  username: z
    .string()
    .min(2, { message: '2자 이상 입력해야 해요.' })
    .max(10, { message: '10자 이내로만 입력 가능해요.' })
    .regex(/^[가-힣]+$/, { message: '한글만 입력 가능해요.' }),
  dateOfBirth: z.date(),
  gender: z.string(),
})

export const useSignUpForm = () => {
  const form = useForm<SignUpForm>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      gender: '',
    },
  })

  return form
}
