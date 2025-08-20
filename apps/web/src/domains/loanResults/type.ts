export interface Loan {
  loanProductId: string // 대출 상품 ID
  productName: string // 대출 상품명
  bankName: string // 은행 기관명
  minInterestRate?: string // 최소 금리
  maxInterestRate?: string // 최대 금리
  maxLoanLimitAmount: string // 최대 한도
}
