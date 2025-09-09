'use client'

import { Form } from '@repo/fds/components'
import { PropsWithChildren } from 'react'
import { DevTool } from '../../../components/DevTool'
import { FormProvider } from 'react-hook-form'
import {
  BusinessType,
  CreditGradeStatus,
  EmploymentForm,
  LoanProductUsageStatus,
  Occupation,
  ProfileColor,
  PurposeOfLoan,
  useCreateProfileMutation,
} from '../../../gql/graphql'
import { useRouter } from 'next/navigation'
import { useCreateProfileForm } from '../hooks/useCreateProfileForm'
import { ProfileForm } from '../types'
import { useMount } from '../../../hooks/useMount'
import {
  고용형태Map,
  대출목적Map,
  신용상태Map,
  업종형태Map,
  이용대출Map,
  직업군Map,
  프로필색깔Map,
} from '../constants/enumLabelMap'
import { format, isValid } from 'date-fns'

export const CreateProfileFormProvider = ({ children }: PropsWithChildren) => {
  const form = useCreateProfileForm()
  const { control, handleSubmit, getValues } = form

  const router = useRouter()

  const [CreateProfile, { data, loading, error }] = useCreateProfileMutation()
  const { isMounted } = useMount()

  const submitFormHandler = async (formData: ProfileForm) => {
    console.log('제출된 폼 데이터:', formData, getValues()) // test

    // 안전하게 날짜 포맷하는 함수
    const safeFormat = (date: any) =>
      date instanceof Date && isValid(date) ? format(date, 'yyyy-MM-dd') : undefined

    try {
      const res = await CreateProfile({
        variables: {
          input: {
            ...getValues(),
            employmentForm: 고용형태Map[getValues('employmentForm') as string] as EmploymentForm,
            employmentDate: safeFormat(getValues('employmentDate')),
            businessType: 업종형태Map[getValues('businessType') as string] as BusinessType,
            businessStartDate: safeFormat(getValues('businessStartDate')),
            occupation: 직업군Map[formData.occupation as string] as Occupation,
            annualIncome: Number(getValues('annualIncome')),
            desiredLoanAmount: Number(formData.desiredLoanAmount),
            totalLoanUsageAmount: Number(formData.totalLoanUsageAmount),
            purposeOfLoan: 대출목적Map[formData.purposeOfLoan] as PurposeOfLoan,
            loanProductUsageStatus: 이용대출Map[
              formData.loanProductUsageStatus
            ] as LoanProductUsageStatus,
            loanProductUsageCount: Number(getValues('loanProductUsageCount')),
            creditScore: Number(getValues('creditScore')),
            creditGradeStatus: 신용상태Map[
              getValues('creditGradeStatus') as string
            ] as CreditGradeStatus,
            profileColor: 프로필색깔Map[formData.profileColor as string] as ProfileColor,
          },
        },
      })
      console.log('프로필 생성 성공:', res.data)
      router.replace('/loan/results')
    } catch (e) {
      console.error('프로필 생성 실패:', e)
    }
  }

  if (!isMounted) return null

  return (
    <>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={handleSubmit(submitFormHandler)} className="h-full px-[20px]">
            {children}
          </form>
        </Form>
      </FormProvider>
      {/* {process.env.NODE_ENV === 'development' && <DevTool control={control}></DevTool>} */}
    </>
  )
}
