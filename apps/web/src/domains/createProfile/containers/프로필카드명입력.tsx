'use client'

import { Icon, FormField, Button, FormControl, FormMessage, Input } from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { 신용상태Map, 프로필색깔Map } from '../constants/enumLabelMap'
import { getCreditInfo } from '../utils/getCreditInfo'

export const 프로필카드명입력 = () => {
  const {
    control,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useFormContext()

  const router = useRouter()

  const getRandomProfileColor = () => {
    const colorKeys = Object.keys(프로필색깔Map)

    const randomIndex = Math.floor(Math.random() * colorKeys.length)
    const selectedKey = colorKeys[randomIndex]
    setValue('profileColor', selectedKey)
    return selectedKey
  }
  const profileBgColor = `bg-${getRandomProfileColor()}-1`

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[43px] whitespace-pre">{`거의 다 끝났어요!\n카드의 이름을 지어주세요.`}</h1>
        <div
          className={`select-none w-full ${profileBgColor} rounded-md px-[20px] pt-[16px] pb-[14px] mb-[43px]`}
        >
          <ul className="flex-column gap-[6px] mt-[12px]">
            <li className="truncate flex-align b5 text-gs-2">
              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
              <p className="truncate">{getValues('purposeOfLoan')}</p>
            </li>
            <li className="truncate flex-align b5 text-gs-2">
              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
              <p className="truncate">
                {getValues('loanProductUsageCount')}개 /{' '}
                {Number(getValues('totalLoanUsageAmount')).toLocaleString('ko')}만원
              </p>
            </li>
            <li className="truncate flex-align b5 text-gs-2">
              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
              <p className="truncate">
                {getCreditInfo(
                  getValues('creditScore'),
                  신용상태Map[getValues('creditGradeStatus')],
                )}
              </p>
            </li>
            <li className="truncate flex-align b5 text-gs-2">
              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
              <p className="truncate">
                {getValues('occupation')} / 연{' '}
                {Number(getValues('annualIncome')).toLocaleString('ko')}만원
              </p>
            </li>
          </ul>
          <hr className="h-[2px] mt-[19.7px] mb-[13.3px] border-dashed border-blue-2" />
          <div className="flex-between-align">
            <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
            <div className="h4 flex-align gap-[1px]">
              <span>{(Number(getValues('desiredLoanAmount')) * 10000).toLocaleString('ko')}</span>
              <span>원</span>
            </div>
          </div>
        </div>
        <FormField
          control={control}
          name="profileName"
          render={({ field }) => (
            <div className="flex-column gap-[5px]">
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="프로필 카드 이름"
                    type="text"
                    className={errors.profileName && 'pr-[44px]'}
                    {...field}
                  />
                </FormControl>
                {errors.profileName && (
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

      <Button type="submit" disabled={!watch('profileName') || !!errors.profileName}>
        완성하기
      </Button>
    </div>
  )
}
