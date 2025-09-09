'use client'

import {
  Icon,
  FormField,
  Button,
  FormLabel,
  RadioGroup,
  RadioGroupItem,
} from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface 이용대출입력Props {
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

export const 이용대출입력 = ({ onNext }: 이용대출입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const router = useRouter()

  const handleClickNoLoanProducts = () => {
    setValue('loanProductUsageCount', '0')
    setValue('totalLoanUsageAmount', '0')
  }

  const 옵션리스트 = ['없다', '있다']
  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[24px] whitespace-pre">{`현재 이용하고 계시는\n서비스가 있으신가요?`}</h1>
        <div className="flex-column gap-[25x]">
          <FormField
            control={control}
            name="loanProductUsageStatus"
            render={({ field }) => (
              <div className="flex-column gap-[16px] px-[11px] py-[8px]">
                <FormLabel htmlFor="loanProductUsageStatus">대출</FormLabel>
                <RadioGroup
                  className="b2 flex-align gap-[52px]"
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value)
                    if (value === '없다') {
                      handleClickNoLoanProducts()
                    }
                  }}
                >
                  {옵션리스트.map((옵션) => (
                    <div className="flex-align space-x-[17px]" key={옵션}>
                      <RadioGroupItem value={옵션} id={옵션} />
                      <label htmlFor={옵션} className="cursor-pointer">
                        {옵션}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}
          />
        </div>
      </div>
      <Button
        type="button"
        disabled={!watch('loanProductUsageStatus')}
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
