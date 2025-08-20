export interface Loan {
  loanProductId: string // 대출 상품 ID
  productName: string // 대출 상품명
  bankName: string // 은행 기관명
  minInterestRate?: string // 최소 금리
  maxInterestRate?: string // 최대 금리
  maxLoanLimitAmount: string // 최대 한도
}

export type LoanDetails = Loan & {
  loanProductBadgeList?: string[] // 대출 상품 배지 리스트
  repaymentPeriod: string // 대출 기간
  repaymentPeriodUnit: string // 대출 기간 단위
  descriptionResults: LoanDescription[]
  url?: string // 대출 상품 URL
}

export interface LoanDescription {
  loanPrerequisite: string // 필수 조건
  loanTargetGuide: string // 대상 안내
  interestRateGuide: string // 금리 안내
  maxLoanLimitGuide: string // 한도 안내
  repaymentPeriodGuide: string // 대출 기간
  repaymentFeeGuide: string // 상환 수수료
  notesOnLoan: string // 유의사항
  preLoanChecklist: string // 대출 신청 전 확인
}
