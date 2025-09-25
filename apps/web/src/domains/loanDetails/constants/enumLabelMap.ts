import { LoanProductBadge, RepaymentPeriodUnit } from '../../../gql/graphql'
import { createBiMap } from '../../../utils/createBiMap'

export const { forward: 대출기간단위Map, reverse: 대출기간단위ReverseMap } = createBiMap({
  개월: RepaymentPeriodUnit.Month,
  년: RepaymentPeriodUnit.Year,
} as const)

export const { forward: 대출상품뱃지Map, reverse: 대출상품뱃지ReverseMap } = createBiMap({
  '최저금리가 제일 낮은 상품이에요': LoanProductBadge.LowestMinInterestRate,
  '프로필의 조건과 제일 잘맞아요': LoanProductBadge.BestProfileMatch,
  '최대한도가 가장 높아요': LoanProductBadge.HighestMaxLoanAmountLimit,
  '즉시 입금 가능해요': LoanProductBadge.InstantDeposit,
} as const)
