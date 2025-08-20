import { useFunnel } from '@use-funnel/browser'
import { 이름입력, 생년월일입력, 성별입력 } from '../context'

export const useSignUpFunnel = () => {
  const funnel = useFunnel<{
    이름입력: 이름입력
    생년월일입력: 생년월일입력
    성별입력: 성별입력
    // 가입완료: 가입완료
  }>({
    id: 'sign-up',
    initial: {
      step: '이름입력',
      context: {},
    },
  })

  return funnel
}
