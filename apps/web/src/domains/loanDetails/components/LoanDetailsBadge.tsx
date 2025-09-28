'use client'

import { LoanProductBadge } from '../../../gql/graphql'
import Image from 'next/image'

interface LoanDetailsBadgeProps {
  badgeType: LoanProductBadge
}

export const LoanDetailsBadge = ({ badgeType }: LoanDetailsBadgeProps) => {
  const bgStyle = `bg-[${LoanDetailsBadgeVariants[badgeType].color}]`

  return (
    <div className={`flex-between ${bgStyle} px-[13px] py-[11px] gap-x-[8px] rounded-xs`}>
      <Image
        src={`/loanDetails/${LoanDetailsBadgeVariants[badgeType].name}.svg`}
        alt={badgeType}
        width={24}
        height={24}
      />
      <label className="b9 text-gs-2 tracking-[-0.14px]">
        {LoanDetailsBadgeVariants[badgeType].label}
      </label>
    </div>
  )
}

export const LoanDetailsBadgeVariants: Record<
  LoanProductBadge,
  { label: string; color: string; name: string }
> = {
  [LoanProductBadge.LowestMinInterestRate]: {
    label: '최저금리가 제일 낮은 상품이에요',
    color: '#E6F4FF',
    name: 'badge_lowest_min_interest_rate',
  },
  [LoanProductBadge.BestProfileMatch]: {
    label: '프로필의 조건과 제일 잘 맞아요',
    color: '#FCE7F3',
    name: 'badge_best_profile_match',
  },
  [LoanProductBadge.HighestMaxLoanAmountLimit]: {
    label: '최대한도가 가장 높아요',
    color: '#FFF2D3',
    name: 'badge_highest_max_loan_amount_limit',
  },
  [LoanProductBadge.InstantDeposit]: {
    label: '즉시 입금 가능해요',
    color: '#E5F4E7',
    name: 'badge_instant_deposit',
  },
}
