import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { DeleteProfile } from '../types'

const schema = z.object({
  deletedIdList: z.array(z.string()).refine((value) => value.some((item) => item)),
})

export const useDeleteProfileForm = () => {
  const form = useForm<DeleteProfile>({
    mode: 'onChange',
    // resolver: zodResolver(schema),
    defaultValues: { deletedIdList: [] },
  })

  return form
}
