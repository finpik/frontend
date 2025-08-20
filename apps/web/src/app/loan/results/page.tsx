import { LoanResultsClientPage } from '../../../domains/loanResults/containers/LoanResultsClientPage'
import { cookies } from 'next/headers'

const LoanResults = async () => {
  const cookieStore = await cookies()
  const refreshToken = cookieStore.get('refreshToken')
  console.log(cookieStore)
  refreshToken && cookieStore.set('refreshToken', refreshToken.value)

  return <LoanResultsClientPage />
}

export default LoanResults
