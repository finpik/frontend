'use client'

import { Icon, FormField, Button, RadioGroup, RadioGroupItem } from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface 대출목적입력Props {
  onNext: (purposeOfLoan: string) => void
}

export const 대출목적입력 = ({ onNext }: 대출목적입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const 대출목적옵션 = [
    '생활비',
    '학자금 / 등록금',
    '주거 (전세, 월세, 보증금)',
    '창업 / 사업 운영 자금',
    '의료비 / 비상 상황 대비',
    '기존 대출 상환',
  ]

  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[39px] whitespace-pre">{`어떤 목적으로\n대출을 원하시나요?`}</h1>
        <FormField
          control={control}
          name="purposeOfLoan"
          render={({ field }) => (
            <RadioGroup
              className="flex-column px-[8px] gap-[26px] b2"
              value={field.value}
              onValueChange={field.onChange}
            >
              {대출목적옵션.map((대출목적) => (
                <div className="flex-align space-x-[17px]" key={대출목적}>
                  <RadioGroupItem value={대출목적} id={대출목적} />
                  <label htmlFor={대출목적} className="cursor-pointer">
                    {대출목적}
                  </label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <div className="w-full px-[20px] fixed left-0 bottom-[8px] z-[1000]">
        <Button
          type="button"
          disabled={!watch('purposeOfLoan') || !!errors.purposeOfLoan}
          onClick={() => onNext(watch('purposeOfLoan'))}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
