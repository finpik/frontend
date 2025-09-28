import { LoanResultsHeader } from '../components/LoanResultsHeader'
import { NoProfileCard } from '../components/no-profile/NoProfileCard'
import { NoProfileLoanResults } from '../components/no-profile/NoProfileLoanResults'

export const NoProfileLoanResultsPage = () => {
  return (
    <div className="flex-column-align h-[100dvh] w-full pt-[7px] overflow-y-hidden">
      <LoanResultsHeader />
      <div className="w-full pt-[11px] pb-[18px] px-[20px]">
        <NoProfileCard />
      </div>
      <div className="w-full h-[8px] bg-bg-2 shrink-0" />
      <NoProfileLoanResults />
    </div>
  )
}
