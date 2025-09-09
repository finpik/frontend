'use client'

import { Icon, FormField, Button, FormControl, Input } from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useCreateProfileFunnel } from '../hooks/useCreateProfileFunnel'

interface 신용점수입력Props {
  onCreditStatus: (creditScore: number) => void
  onNext: (creditScore: number) => void
}

export const 신용점수입력 = ({ onCreditStatus, onNext }: 신용점수입력Props) => {
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
        <h1 className="h2 text-gs-1 mb-[68px] whitespace-pre">{`현재 사용자님의 신용점수를\n입력해주세요.`}</h1>
        <FormField
          control={control}
          name="creditScore"
          render={({ field }) => (
            <div className="group">
              <div className="relative">
                <FormControl>
                  <Input
                    id="creditScore"
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
                  점
                </span>
              </div>
            </div>
          )}
        />
        <div className="flex-align gap-[5px] mt-[13px]">
          <Icon name="error" />
          <span className="c1 text-gs-7">‘NICE지키미’ 점수를 기준으로 입력해주세요.</span>
        </div>
      </div>
      <div className="flex-column-align gap-[10px]">
        <Button
          type="button"
          variant="secondary"
          onClick={() => onCreditStatus(watch('creditScore'))}
        >
          내 신용점수를 모르겠어요
        </Button>
        <Button
          type="button"
          disabled={!watch('creditScore') || !!errors.creditScore}
          onClick={() => onNext(watch('creditScore'))}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
