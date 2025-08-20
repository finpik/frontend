'use client'

import { useRouter } from 'next/navigation'
import { Loan } from '../domains/loanResults/type'
import { formatKoreanCurrency } from '../utils/formatKoreanCurrency'
import { BankImage } from './BankImage'
import { formatInterestRate } from '../utils/formatInterestRate'

type LoanItemProps = Omit<Loan, 'loanProductId'> & Partial<Pick<Loan, 'loanProductId'>>

export const LoanItem = ({
  loanProductId,
  productName,
  bankName,
  minInterestRate,
  maxInterestRate,
  maxLoanLimitAmount,
}: LoanItemProps) => {
  const noInterestRate = minInterestRate === null && maxInterestRate === null
  const fixedInterestRate = minInterestRate === maxInterestRate

  // 비교하기에서는 클릭 안되도록 수정
  const router = useRouter()

  return (
    <li
      className="flex-between-align w-full"
      onClick={() => loanProductId && router.push(`/loan/details/${loanProductId}`)}
    >
      <div className="flex-column gap-[8px]">
        <div className="min-w-[140px] max-w-[190px] b2 text-gs-2 line-clamp-2">{productName}</div>
        <div className="flex-align gap-[6px]">
          <BankImage name={bankName} />
          <span className="min-w-[116px] max-w-[166px] c1 text-gs-6">{bankName}</span>
        </div>
      </div>
      <div className="flex-column gap-[10px] text-right">
        <div className="flex justify-end w-[130px]">
          <div className="flex-align b1 gap-[1px] text-gs-2">
            {noInterestRate ? (
              <span className="text-gs-5">심사 필요</span>
            ) : (
              <>
                {fixedInterestRate ? (
                  <span className="text-pm-1">{formatInterestRate(Number(minInterestRate))}</span>
                ) : (
                  <>
                    {minInterestRate !== null && (
                      <span className="text-pm-1">
                        {formatInterestRate(Number(minInterestRate))}
                      </span>
                    )}
                    <span>~</span>
                    {maxInterestRate !== null && (
                      <span>{formatInterestRate(Number(maxInterestRate))}</span>
                    )}
                  </>
                )}
                <span>%</span>
              </>
            )}
          </div>
        </div>
        <div className="w-[130px] b8 text-gs-3">
          {formatKoreanCurrency(Number(maxLoanLimitAmount))}원
        </div>
      </div>
    </li>
  )
}
