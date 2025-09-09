'use client'

import { useFormContext } from 'react-hook-form'
import { FormField, Button, RadioGroup, RadioGroupItem } from '@repo/fds/components'
import { ProgressBarStep3 } from '../components/ProgressBar'

// interface 성별입력Props {
//   onNext: () => void
// }

export const 성별입력 = () => {
  const {
    control,
    formState: { isValid },
  } = useFormContext()

  const 성별 = ['남자', '여자']

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[67px] mb-[47px]">
          <ProgressBarStep3 />
        </header>
        <h1 className="h2 text-gs-1 mb-[56px] whitespace-pre">{`사용자님의 성별을\n알려주세요.`}</h1>
        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <RadioGroup onValueChange={field.onChange} className="flex-align gap-[9px]">
              {성별.map((gender) => (
                <div key={gender} className="w-full">
                  <RadioGroupItem value={gender} id={gender} className="peer hidden" />
                  <label
                    htmlFor={gender}
                    className="w-full flex flex-col items-center justify-center whitespace-nowrap rounded-sm disabled:pointer-events-none cursor-pointer s4 h-[54px] px-[56px] py-[18px] border-[1.5px] bg-bg-1 text-gs-2 peer-data-[state=checked]:border-pm-1 peer-data-[state=checked]:border-[1.7px] peer-data-[state=checked]:bg-pm-3 peer-data-[state=checked]:text-pm-1 peer-data-[state=checked]:s2"
                  >
                    {gender}
                  </label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>
      <Button type="submit" disabled={!isValid}>
        다음
      </Button>
    </div>
  )
}
