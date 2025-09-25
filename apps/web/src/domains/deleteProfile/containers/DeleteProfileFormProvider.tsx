'use client'

import { Form } from '@repo/fds/components'
import { PropsWithChildren } from 'react'
import { DevTool } from '../../../components/DevTool'
import { FormProvider } from 'react-hook-form'
import { useDeleteProfileMutation } from '../../../gql/graphql'
import { useMount } from '../../../hooks/useMount'
import { useDeleteProfileForm } from '../hooks/useDeleteProfileForm'
import { DeleteProfile } from '../types'
import { useRouter } from 'next/navigation'

export const DeleteProfileFormProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const form = useDeleteProfileForm()
  const { control, handleSubmit, getValues } = form

  const [DeleteProfile, { data, loading, error }] = useDeleteProfileMutation()
  const { isMounted } = useMount()

  const submitFormHandler = async (formData: DeleteProfile) => {
    try {
      const res = await DeleteProfile({
        variables: {
          deletedIdList: getValues('deletedIdList'),
        },
        refetchQueries: ['GetProfilesByUser'], // invalidate cache
      })
      router.replace('/profile')
      console.log('프로필 삭제 성공:', res.data)
    } catch (e) {
      console.error('프로필 삭제 실패:', e)
    }
  }

  if (!isMounted) return null

  return (
    <>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={handleSubmit(submitFormHandler)}>{children}</form>
        </Form>
      </FormProvider>
      {process.env.NODE_ENV === 'development' && <DevTool control={control}></DevTool>}
    </>
  )
}
