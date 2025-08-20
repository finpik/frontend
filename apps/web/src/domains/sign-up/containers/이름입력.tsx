'use client'

import { useFormContext } from 'react-hook-form'
import { FormField, FormControl, Icon, FormMessage, Input, Button } from '@repo/fds/components'
import { ProgressBarStep1 } from '../components/ProgressBar'

interface 이름입력Props {
  onNext: (username: string) => void
}

export const 이름입력 = ({ onNext }: 이름입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[67px] mb-[47px]">
          <ProgressBarStep1 />
        </header>
        <h1 className="h2 text-gs-1 mb-[58px] whitespace-pre">{`만나서 반가워요!\n사용자님의 이름을 알려주세요.`}</h1>
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <div className="flex-column gap-[5px]">
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="사용자님의 이름"
                    type="text"
                    className={errors.username && 'pr-[44px]'}
                    {...field}
                  />
                </FormControl>
                {errors.username && (
                  <span className="absolute right-[10px] top-1/2 -translate-y-1/2">
                    <Icon name="error" color="#ff2e2e" size={24} />
                  </span>
                )}
              </div>
              <FormMessage />
            </div>
          )}
        />
      </div>
      <Button
        type="button"
        disabled={!!errors.username || !watch('username')}
        onClick={() => onNext(watch('username'))}
      >
        다음
      </Button>
    </div>
  )
}
