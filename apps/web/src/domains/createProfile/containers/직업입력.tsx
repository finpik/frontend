'use client'

import { Icon, FormField, RadioGroup, RadioGroupItem, Button } from '@repo/fds/components'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

interface 직업입력Props {
  onNext: (occupation: string) => void
}

export const 직업입력 = ({ onNext }: 직업입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const 직업군 = [
    '직장인',
    '사업자',
    '공무원(경찰, 교사, 군인 등)',
    '프리랜서',
    '기타(무직, 주부, 학생 등)',
  ]

  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[47px] whitespace-pre">{`직업을 선택해주세요.`}</h1>
        <FormField
          control={control}
          name="occupation"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex-column gap-[20px]"
            >
              {직업군.map((직업) => (
                <div key={직업}>
                  <RadioGroupItem value={직업} id={직업} className="peer hidden" />
                  <label
                    htmlFor={직업}
                    className="w-fit flex items-center justify-center whitespace-nowrap rounded-sm disabled:pointer-events-none cursor-pointer b3 h-[48px] px-[48px] py-[16px] border-[1.5px] bg-bg-1 text-gs-2 peer-data-[state=checked]:border-pm-1 peer-data-[state=checked]:border-[1.7px] peer-data-[state=checked]:bg-pm-3 peer-data-[state=checked]:text-pm-1 peer-data-[state=checked]:b1"
                  >
                    {직업}
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
          disabled={!!errors.occupation || !watch('occupation')}
          onClick={() => onNext(watch('occupation'))}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
