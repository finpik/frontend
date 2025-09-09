export interface Profile {
  profileId: string
  profileSeq: number
  profileName: string
  profileColor: string
  occupation: string // 직업
  employmentForm?: string // 고용 형태
  businessType?: string // 업종 형태
  businessStartDate?: Date // 개업일 (사업자등록일)
  annualIncome: string // 연소득
  employmentDate?: Date // 입사일
  purposeOfLoan: string // 대출 목적
  desiredLoanAmount: string // 희망 대출 금액
  loanProductUsageStatus: string // 이용 대출 서비스
  loanProductUsageCount: string // 대출 개수
  totalLoanUsageAmount: string // 총 대출 사용 금액
  creditScore?: string // 신용 점수
  creditGradeStatus?: string // 신용 등급
}

export type ProfileForm = Omit<Profile, 'profileId' | 'profileSeq'>
