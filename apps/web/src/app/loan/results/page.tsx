import { redirect } from 'next/navigation'
import { LoanResultsClientPage } from '../../../domains/loanResults/containers/LoanResultsClientPage'
import { cookies } from 'next/headers'

const LoanResults = async () => {
  // const cookieStore = await cookies()
  // const refreshToken = cookieStore.get('refreshToken')
  // console.log(cookieStore)
  // refreshToken && cookieStore.set('refreshToken', refreshToken.value)
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value

  if (token) {
    return <LoanResultsClientPage />
  } else {
    redirect('/sign-in')
  }
}

export default LoanResults
