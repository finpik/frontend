import {
  BusinessType,
  CreditGradeStatus,
  EmploymentForm,
  LoanProductBadge,
  LoanProductUsageStatus,
  Occupation,
  ProfileColor,
  PurposeOfLoan,
  SortDirection,
} from '../../../gql/graphql'
import { createBiMap } from '../../../utils/createBiMap'

// enum <-> label 양방향 매핑

export const { forward: 직업군Map, reverse: 직업군ReverseMap } = createBiMap({
  직장인: Occupation.Employee,
  사업자: Occupation.SelfEmployed,
  '공무원(경찰, 교사, 군인 등)': Occupation.PublicServant,
  프리랜서: Occupation.Other,
  '기타(무직, 주부, 학생 등)': Occupation.Unemployed,
} as const)

export const { forward: 대출목적Map, reverse: 대출목적ReverseMap } = createBiMap({
  생활비: PurposeOfLoan.LivingExpenses,
  '학자금 / 등록금': PurposeOfLoan.Tuition,
  '주거 (전세, 월세, 보증금)': PurposeOfLoan.Housing,
  '창업 / 사업 운영 자금': PurposeOfLoan.BusinessFunds,
  '의료비 / 비상 상황 대비': PurposeOfLoan.MedicalOrEmergency,
  '기존 대출 상환': PurposeOfLoan.LoanRepayment,
} as const)

export const { forward: 신용상태Map, reverse: 신용상태ReverseMap } = createBiMap({
  '아주 안정적이에요': CreditGradeStatus.Excellent,
  '꽤 괜찮아요': CreditGradeStatus.Good,
  '조금 불안정해요': CreditGradeStatus.Fair,
  '가끔 어려워요': CreditGradeStatus.Poor,
  '관리가 필요해요': CreditGradeStatus.VeryPoor,
} as const)

export const { forward: 고용형태Map, reverse: 고용형태ReverseMap } = createBiMap({
  정규직: EmploymentForm.FullTime,
  계약직: EmploymentForm.Contract,
  기타: EmploymentForm.Other,
} as const)

export const { forward: 업종형태Map, reverse: 업종형태ReverseMap } = createBiMap({
  소매업: BusinessType.Retail,
  의료업: BusinessType.Medical,
  '프랜차이즈 가맹점': BusinessType.Franchise,
  음식점: BusinessType.Restaurant,
  '온라인 쇼핑몰': BusinessType.OnlineShop,
  기타: BusinessType.Etc,
} as const)

export const { forward: 이용대출Map, reverse: 이용대출ReverseMap } = createBiMap({
  없다: LoanProductUsageStatus.NotUsing,
  있다: LoanProductUsageStatus.Using,
} as const)

export const { forward: 프로필색깔Map, reverse: 프로필색깔ReverseMap } = createBiMap({
  blue: ProfileColor.Blue,
  orange: ProfileColor.Orange,
  yellow: ProfileColor.Yellow,
  green: ProfileColor.Green,
  red: ProfileColor.Red,
  pink: ProfileColor.Pink,
  purple: ProfileColor.Purple,
  gray: ProfileColor.Gray,
} as const)

// 정렬 기준 (enum이 아닌 객체 value이므로 biMap 사용 X)
export const 정렬기준Map = {
  '프로필 추천순': {
    sortDirection: SortDirection.Desc,
    sortProperty: 'similarity',
  },
  '금리 낮은순': {
    sortDirection: SortDirection.Asc,
    sortProperty: 'minInterestRate',
  },
  '최대한도 높은순': {
    sortDirection: SortDirection.Desc,
    sortProperty: 'maxLoanLimitAmount',
  },
} as const
