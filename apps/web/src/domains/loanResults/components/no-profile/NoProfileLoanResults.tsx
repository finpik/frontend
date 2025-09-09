'use client'

import { Icon } from '@repo/fds/components'
import { LoanItem } from '../../../../components/LoanItem'

export const NoProfileLoanResults = () => {
  const defaultLoanItem = {
    productName: '대출명',
    bankName: '은행 기관',
    minInterestRate: '최소',
    maxInterestRate: '최대',
    maxLoanLimitAmount: '대출한도',
  }

  return (
    <div className="flex-column w-full">
      <h1 className="mt-[28px] ml-[20px] mb-[12px] h4 text-gs-2 whitespace-pre-line">
        {`추천 리스트는 `}
        <span className="text-pm-1">프로필 카드 완성 후</span>
        {`\n확인하실 수 있어요.`}
      </h1>

      <div className="flex-align pl-[12px] py-[8px] b7 text-gs-2 border-b border-gs-9">
        <Icon name="sort" />
        프로필 추천순
        <Icon name="arrow-down" />
      </div>

      <div className="h-[42px] px-[25px] py-[3px] flex-between-align c4 text-gs-4 bg-[#F7FAFC]">
        <div className="w-[73px]">상품명</div>
        <div>금리 / 최대한도</div>
      </div>

      <div className="flex-column w-full px-[20px] py-[18px]">
        <ul className="flex-column w-full px-[4px] gap-[26px]">
          {Array.from({ length: 7 }).map((_, index) => (
            <LoanItem key={index} {...defaultLoanItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}
