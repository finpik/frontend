'use client'

import {
  Icon,
  FormField,
  Button,
  RadioGroup,
  RadioGroupItem,
  FormControl,
  Input,
} from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface 희망대출금액입력Props {
  onNext: (desiredLoanAmount: string) => void
}

export const 희망대출금액입력 = ({ onNext }: 희망대출금액입력Props) => {
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
        <h1 className="h2 text-gs-1 mb-[67px] whitespace-pre">{`희망 대출 금액을 알려주세요.`}</h1>
        <FormField
          control={control}
          name="desiredLoanAmount"
          render={({ field }) => (
            <div className="group">
              <div className="relative mt-[34px]">
                <FormControl>
                  <Input
                    id="desiredLoanAmount"
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
                  만원
                </span>
              </div>
            </div>
          )}
        />
      </div>
      <Button
        type="button"
        disabled={!watch('desiredLoanAmount')}
        onClick={() => onNext(watch('desiredLoanAmount'))}
      >
        다음
      </Button>
    </div>
  )
}
