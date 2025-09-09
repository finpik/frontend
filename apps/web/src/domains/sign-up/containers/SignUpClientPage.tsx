'use client'

import { useMount } from '../../../hooks/useMount'
import { useSignUpFunnel } from '../hooks/useSignUpFunnel'
import { SignUpFormProvider } from './SignUpFormProvider'
import { 가입완료 } from './가입완료'
import { 생년월일입력 } from './생년월일입력'
import { 성별입력 } from './성별입력'
import { 이름입력 } from './이름입력'

export const SignUpClientPage = () => {
  const { isMounted } = useMount()
  const funnel = useSignUpFunnel()

  if (!isMounted) return null

  return (
    <SignUpFormProvider>
      <funnel.Render
        이름입력={({ history }) => (
          <이름입력 onNext={(username) => history.push('생년월일입력', { username })} />
        )}
        생년월일입력={({ history }) => (
          <생년월일입력 onNext={(dateOfBirth) => history.push('성별입력', { dateOfBirth })} />
        )}
        성별입력={({ history }) => <성별입력 />}
        // 가입완료={() => <가입완료 onStart={() => router.replace('/loan/results')} />}
      />
    </SignUpFormProvider>
  )
}
