import { useFunnel } from '@use-funnel/browser'
import {
  대출목적입력,
  소득입력,
  신용상태입력,
  신용점수입력,
  이용대출입력,
  이용대출금액입력,
  직업입력,
  프로필카드명입력,
  희망대출금액입력,
} from '../context'

export const useCreateProfileFunnel = () => {
  const funnel = useFunnel<{
    직업입력: 직업입력
    소득입력: 소득입력
    대출목적입력: 대출목적입력
    희망대출금액입력: 희망대출금액입력
    이용대출입력: 이용대출입력
    이용대출금액입력: 이용대출금액입력
    신용점수입력: 신용점수입력
    신용상태입력: 신용상태입력
    프로필카드명입력: 프로필카드명입력
  }>({
    id: 'create-profile',
    initial: {
      step: '직업입력',
      context: {},
    },
  })

  return funnel
}
