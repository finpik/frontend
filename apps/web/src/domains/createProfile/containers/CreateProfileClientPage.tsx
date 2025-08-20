'use client'

import { useMount } from '../../../hooks/useMount'
import { useCreateProfileFunnel } from '../hooks/useCreateProfileFunnel'
import { CreateProfileFormProvider } from './CreateProfileFormProvider'
import { 대출목적입력 } from './대출목적입력'
import { 소득입력 } from './소득입력'
import { 신용상태입력 } from './신용상태입력'
import { 신용점수입력 } from './신용점수입력'
import { 이용대출금액입력 } from './이용대출금액입력'
import { 이용대출입력 } from './이용대출입력'
import { 직업입력 } from './직업입력'
import { 프로필카드명입력 } from './프로필카드명입력'
import { 희망대출금액입력 } from './희망대출금액입력'

export const CreateProfileClientPage = () => {
  const { isMounted } = useMount()
  const funnel = useCreateProfileFunnel()

  if (!isMounted) return null

  return (
    <CreateProfileFormProvider>
      <funnel.Render
        직업입력={({ history }) => (
          <직업입력 onNext={(occupation) => history.push('소득입력', { occupation })} />
        )}
        소득입력={({ history }) => (
          <소득입력
            onNext={({
              annualIncome,
              employmentForm,
              employmentDate,
              businessType,
              businessStartDate,
            }: {
              annualIncome: string
              employmentForm?: string
              employmentDate?: string
              businessType?: string
              businessStartDate?: string
            }) =>
              history.push('대출목적입력', {
                employmentForm,
                annualIncome,
                employmentDate,
                businessType,
                businessStartDate,
              })
            }
          />
        )}
        대출목적입력={({ history }) => (
          <대출목적입력
            onNext={(purposeOfLoan) => history.push('희망대출금액입력', { purposeOfLoan })}
          />
        )}
        희망대출금액입력={({ history }) => (
          <희망대출금액입력
            onNext={(desiredLoanAmount) => history.push('이용대출입력', { desiredLoanAmount })}
          />
        )}
        이용대출입력={({ history }) => (
          <이용대출입력
            onNext={({
              loanProductUsageStatus,
              loanProductUsageCount,
              totalLoanUsageAmount,
            }: {
              loanProductUsageStatus: string
              loanProductUsageCount: number
              totalLoanUsageAmount: string
            }) =>
              loanProductUsageStatus === '없다'
                ? history.push('신용점수입력', {
                    loanProductUsageStatus,
                    loanProductUsageCount: 0,
                    totalLoanUsageAmount: '0',
                  })
                : history.push('이용대출금액입력', {
                    loanProductUsageStatus,
                    loanProductUsageCount,
                    totalLoanUsageAmount,
                  })
            }
          />
        )}
        이용대출금액입력={({ history }) => (
          <이용대출금액입력
            onNext={({
              loanProductUsageStatus,
              loanProductUsageCount,
              totalLoanUsageAmount,
            }: {
              loanProductUsageStatus: string
              loanProductUsageCount: number
              totalLoanUsageAmount: string
            }) =>
              history.push('신용점수입력', {
                loanProductUsageStatus,
                loanProductUsageCount,
                totalLoanUsageAmount,
              })
            }
          />
        )}
        신용점수입력={({ history }) => (
          <신용점수입력
            onCreditStatus={(creditScore) => history.push('신용상태입력', { creditScore: 0 })}
            onNext={(creditScore) => history.push('프로필카드명입력', { creditScore })}
          />
        )}
        신용상태입력={({ history }) => (
          <신용상태입력
            onNext={(creditGradeStatus) => history.push('프로필카드명입력', { creditGradeStatus })}
          />
        )}
        프로필카드명입력={({ history }) => <프로필카드명입력 />}
      />
    </CreateProfileFormProvider>
  )
}
