'use client'

import {
  Icon,
  FormField,
  Button,
  FormControl,
  FormLabel,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  DateWheelPicker,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/fds/components'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { cn } from '@repo/fds/lib'
import { format } from 'date-fns'
import { 소득입력Props } from '../소득입력'
import { useRouter } from 'next/navigation'

export const 사업자소득입력 = ({ onNext }: 소득입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const [open, setOpen] = useState(false)

  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[24px] whitespace-pre">{`사업자 정보와 소득을\n입력해주세요.`}</h1>
        <div className="flex-column gap-[20px]">
          <FormField
            control={control}
            name="businessType"
            render={({ field }) => (
              <div className="group select-none">
                <FormLabel
                  htmlFor="businessType"
                  onClick={() => setOpen(true)}
                  className={cn('mx-[6px] mt-[11px] mb-[2px] cursor-pointer', open && 'text-pm-1')}
                >
                  업종 형태
                </FormLabel>
                <Select open={open} onOpenChange={setOpen} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger
                      className={cn('group s3 px-[6px] py-[11px]', !field.value && 'text-gs-7')}
                      id="businessType"
                    >
                      <SelectValue placeholder="업종 형태" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent
                    align="end"
                    className="data-[side=bottom]:translate-y-[9px] data-[side=top]:-translate-y-[9px]"
                  >
                    <SelectItem value="소매업">소매업</SelectItem>
                    <SelectItem value="의료업">의료업</SelectItem>
                    <SelectItem value="프랜차이즈 가맹점">프랜차이즈 가맹점</SelectItem>
                    <SelectItem value="음식점">음식점</SelectItem>
                    <SelectItem value="온라인 쇼핑몰">온라인 쇼핑몰</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

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

          <FormField
            control={control}
            name="businessStartDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <div className="group">
                    <FormLabel htmlFor="businessStartDate" className="mx-[6px] mt-[11px] mb-[2px]">
                      개업일 (사업자등록일)
                    </FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          readOnly
                          id="businessStartDate"
                          placeholder="개업일 (사업자등록일)"
                          type="text"
                          className={cn('s3 px-[6px] py-[11px] pl-[40px] cursor-pointer')}
                          value={field.value ? format(field.value, 'yyyy.MM.dd') : ''}
                        />
                      </FormControl>
                      <span className="absolute left-[10px] top-1/2 -translate-y-1/2">
                        <Icon name="calendar" size={24} />
                      </span>
                    </div>
                    <PopoverContent align="start" className="group">
                      <DateWheelPicker value={field.value} onChange={field.onChange} />
                    </PopoverContent>
                  </div>
                </PopoverTrigger>
              </Popover>
            )}
          />
        </div>
      </div>
      <Button
        type="button"
        disabled={!watch('businessType') || !watch('annualIncome') || !watch('businessStartDate')}
        onClick={() =>
          onNext({
            businessType: watch('businessType'),
            annualIncome: watch('annualIncome'),
            businessStartDate: watch('businessStartDate'),
          })
        }
      >
        다음
      </Button>
    </div>
  )
}
