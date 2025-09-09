'use client'

import { Icon, FormField, Button, FormControl, FormLabel, Input } from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface 이용대출금액입력Props {
  onNext: ({
    loanProductUsageStatus,
    loanProductUsageCount,
    totalLoanUsageAmount,
  }: {
    loanProductUsageStatus: string
    loanProductUsageCount: number
    totalLoanUsageAmount: string
  }) => void
}

export const 이용대출금액입력 = ({ onNext }: 이용대출금액입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[38px] whitespace-pre">{`이용하고 계시는\n대출의 금액과 갯수를 알려주세요.`}</h1>
        <div className="flex-column gap-[32px]">
          <FormField
            control={control}
            name="loanProductUsageCount"
            render={({ field }) => (
              <div className="group">
                <FormLabel htmlFor="loanProductUsageCount" className="mx-[6px] mt-[11px] mb-[2px]">
                  대출 갯수
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="loanProductUsageCount"
                      placeholder="0"
                      type="text"
                      className="h5 px-[6px] py-[11px] no-spinner"
                      {...field}
                      value={field.value === '' ? '' : Number(field.value).toLocaleString('ko-KR')}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/[^\d]/g, '')
                        field.onChange(onlyDigits)
                      }}
                    />
                  </FormControl>
                  <span className="b3 text-gs-2 absolute right-[10px] top-1/2 -translate-y-1/2">
                    개
                  </span>
                </div>
              </div>
            )}
          />

          <FormField
            control={control}
            name="totalLoanUsageAmount"
            render={({ field }) => (
              <div className="group">
                <FormLabel htmlFor="totalLoanUsageAmount" className="mx-[6px] mt-[11px] mb-[2px]">
                  총 금액
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="totalLoanUsageAmount"
                      placeholder="0"
                      type="text"
                      className="h5 px-[6px] py-[11px] no-spinner"
                      {...field}
                      value={field.value === '' ? '' : Number(field.value).toLocaleString('ko-KR')}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/[^\d]/g, '')
                        field.onChange(onlyDigits)
                      }}
                    />
                  </FormControl>
                  <span className="b3 text-gs-2 absolute right-[10px] top-1/2 -translate-y-1/2">
                    원
                  </span>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <Button
        type="button"
        disabled={!watch('loanProductUsageCount') || !watch('totalLoanUsageAmount')}
        onClick={() =>
          onNext({
            loanProductUsageStatus: watch('loanProductUsageStatus'),
            loanProductUsageCount: watch('loanProductUsageCount'),
            totalLoanUsageAmount: watch('totalLoanUsageAmount'),
          })
        }
      >
        다음
      </Button>
    </div>
  )
}
