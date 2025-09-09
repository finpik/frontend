import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { ProfileForm } from '../types'

const schema = z.object({
  occupation: z.string(),
  purposeOfLoan: z.string(),
  annualIncome: z.string(),
  desiredLoanAmount: z.string(),
  loanProductUsageStatus: z.string(),
  totalLoanUsageAmount: z.string(),
  profileName: z.string(),
  profileColor: z.string(),
  // 추가
  employmentForm: z.string().optional(),
  BusinessType: z.string().optional(),
  businessStartDate: z.date().optional(),
  employmentDate: z.date().optional(),
  creditScore: z.string().optional(),
  loanProductUsageCount: z.string(),
  creditGradeStatus: z.string().optional(),
})

export const useCreateProfileForm = () => {
  const form = useForm<ProfileForm>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      occupation: '',
      annualIncome: '',
      purposeOfLoan: '',
      desiredLoanAmount: '',
      loanProductUsageCount: '',
      creditScore: '',
      loanProductUsageStatus: '',
      totalLoanUsageAmount: '',
      profileName: '',
      profileColor: '',
    },
  })

  return form
}
