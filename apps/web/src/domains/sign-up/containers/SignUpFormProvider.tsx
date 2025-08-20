'use client'

import { Form } from '@repo/fds/components'
import { SignUpForm } from '../type'
import { PropsWithChildren } from 'react'
import { useSignUpForm } from '../hooks/useSignUpForm'
import { DevTool } from '../../../components/DevTool'
import { FormProvider } from 'react-hook-form'
import { useSignUpFunnel } from '../hooks/useSignUpFunnel'
import { Gender, useSignUpMutation } from '../../../gql/graphql'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import Cookies from 'js-cookie'

export const SignUpFormProvider = ({ children }: PropsWithChildren) => {
  const form = useSignUpForm()
  const { control, handleSubmit } = form

  const router = useRouter()

  const [signUp, { data, loading, error }] = useSignUpMutation()
  const submitFormHandler = async (formData: SignUpForm) => {
    try {
      const res = await signUp({
        variables: {
          input: {
            provider: 'kakao',
            vendorId: Cookies.get('id') || '',
            ...formData,
            dateOfBirth: format(formData.dateOfBirth, 'yyyy-MM-dd'),
            gender: formData.gender === '남자' ? Gender.Male : Gender.Female,
          },
        },
      })
      console.log('회원가입 성공:', res.data)
      Cookies.remove('id')
      res.data && Cookies.set('accessToken', res.data?.signUp.accessToken)
    } catch (e) {
      console.error('회원가입 실패:', e)
    } finally {
      router.replace('/loan/results')
    }
  }

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
