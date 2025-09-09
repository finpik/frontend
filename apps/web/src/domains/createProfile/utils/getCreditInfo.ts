import { CreditGradeStatus } from '../../../gql/graphql'

export const getCreditInfo = (creditScore?: number, creditGradeStatus?: string): string | null => {
  const found =
    creditScore !== 0 && creditScore !== undefined
      ? creditMapping.find(({ min, max }) => creditScore >= min && creditScore <= max)
      : creditMapping.find(({ status }) => status === creditGradeStatus)

  if (!found) return null

  const scoreText =
    creditScore !== 0 && creditScore !== undefined
      ? `${creditScore.toLocaleString('ko')}점`
      : `${found.min.toLocaleString('ko')}~${found.max.toLocaleString('ko')}점`

  return `${scoreText} / ${found.label}`
}

const creditMapping = [
  { label: '아주 안정적이에요', min: 870, max: 1000, status: CreditGradeStatus.Excellent },
  { label: '꽤 괜찮아요', min: 805, max: 869, status: CreditGradeStatus.Good },
  { label: '조금 불안정해요', min: 665, max: 804, status: CreditGradeStatus.Fair },
  { label: '가끔 어려워요', min: 515, max: 664, status: CreditGradeStatus.Poor },
  { label: '관리가 필요해요', min: 0, max: 514, status: CreditGradeStatus.VeryPoor },
]
