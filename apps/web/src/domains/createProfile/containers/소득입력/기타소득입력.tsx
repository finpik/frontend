'use client'

import {
  Icon,
  FormField,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
} from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { 소득입력Props } from '../소득입력'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const 기타소득입력 = ({ onNext }: 소득입력Props) => {
  const { control, watch, setValue } = useFormContext()

  const [noIncome, setNoIncome] = useState<boolean>(false)

  const router = useRouter()

  const handleClickNoIncome = () => {
    setNoIncome(!noIncome)
    setValue('annualIncome', 0)
  }

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[38px] whitespace-pre">{`소득 정보를 입력해주세요.`}</h1>
        <div className="flex-column gap-[26px]">
          <FormField
            control={control}
            name="annualIncome"
            render={({ field }) => (
              <div className="group">
                <FormLabel htmlFor="annualIncome" className="mx-[6px] mt-[11px] mb-[2px]">
                  연 소득
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      id="annualIncome"
                      placeholder="0"
                      type="text"
                      className="h5 px-[6px] py-[11px] no-spinner"
                      {...field}
                      value={field.value === '' ? '' : Number(field.value).toLocaleString('ko-KR')}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/[^\d]/g, '')
                        field.onChange(onlyDigits)
                        setNoIncome(onlyDigits === '0')
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

          <div className="flex-align space-x-[17px] b2 text-gs-2">
            <Checkbox
              id="checkbox"
              checked={noIncome || watch('annualIncome') === '0'}
              onCheckedChange={handleClickNoIncome}
            />
            <label htmlFor="checkbox" className="cursor-pointer">
              현재 소득이 없어요.
            </label>
          </div>
        </div>
      </div>
      <Button
        type="button"
        disabled={watch('annualIncome') === ''}
        onClick={() =>
          onNext({
            employmentForm: watch('employmentForm'),
            annualIncome: watch('annualIncome'),
            employmentDate: watch('employmentDate'),
          })
        }
      >
        다음
      </Button>
    </div>
  )
}
