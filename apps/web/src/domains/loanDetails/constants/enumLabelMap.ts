import { RepaymentPeriodUnit } from '../../../gql/graphql'
import { createBiMap } from '../../../utils/createBiMap'

export const { forward: 대출기간단위Map, reverse: 대출기간단위ReverseMap } = createBiMap({
  개월: RepaymentPeriodUnit.Month,
  년: RepaymentPeriodUnit.Year,
} as const)
