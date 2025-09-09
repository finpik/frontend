'use client'

import {
  FormField,
  FormControl,
  Icon,
  Input,
  Button,
  DateWheelPicker,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/fds/components'
import { ProgressBarStep2 } from '../components/ProgressBar'
import { useFormContext } from 'react-hook-form'
import { format } from 'date-fns'

interface 생년월일입력Props {
  onNext: (dateOfBirth: string) => void
}

export const 생년월일입력 = ({ onNext }: 생년월일입력Props) => {
  const { control, watch } = useFormContext()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[67px] mb-[47px]">
          <ProgressBarStep2 />
        </header>
        <h1 className="h2 text-gs-1 mb-[58px] whitespace-pre">{`사용자님의 생년월일을\n알려주세요.`}</h1>
        <FormField
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <div className="group">
                  <div className="relative mt-[34px]">
                    <FormControl>
                      <Input
                        readOnly
                        id="dateOfBirth"
                        placeholder="사용자님의 생년월일"
                        type="text"
                        className="s3 px-[6px] py-[11px] pl-[40px] cursor-pointer"
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
      <Button
        type="button"
        disabled={!watch('dateOfBirth')}
        onClick={() => onNext(watch('dateOfBirth'))}
      >
        확인
      </Button>
    </div>
  )
}
