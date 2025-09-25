'use client'

import {
  Icon,
  FormField,
  Button,
  RadioGroup,
  RadioGroupItem,
  FormControl,
} from '@repo/fds/components'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface 신용상태입력Props {
  onNext: (creditGradeStatus: string) => void
}

export const 신용상태입력 = ({ onNext }: 신용상태입력Props) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext()

  const 신용상태타입 = [
    {
      title: '아주 안정적이에요',
      description: `연체 없이 안정적으로 월급을 받고 있어요.\n(870점~1,000점)`,
    },
    {
      title: '꽤 괜찮아요',
      description: `카드나 대출을 잘 사용해왔고, 연체도 거의 없어요.\n(805점~869점)`,
    },
    {
      title: '조금 불안정해요',
      description: `직업은 있지만 수입이 일정하지 않아요.\n(665점~804점)`,
    },
    {
      title: '가끔 어려워요',
      description: `연체한 적이 꽤 있고, 신용카드나 대출을\n자주 사용하지 않아요.\n(515점~664점)`,
    },
    {
      title: '관리가 필요해요',
      description: `연체가 자주 있었고, 신용 사용에 어려움이 있어요.\n(0점~514점)`,
    },
  ]

  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <header className="mt-[5px] mb-[40px]" onClick={() => router.back()}>
          <Icon name="arrow-back-ios" />
        </header>
        <h1 className="h2 text-gs-1 mb-[39px] whitespace-pre">{`신용점수를 모르셔도 괜찮아요!\n사용자님의 상태를 선택해주세요.`}</h1>
        <FormField
          control={control}
          name="creditGradeStatus"
          render={({ field }) => (
            <FormControl>
              <RadioGroup
                className="s2 flex-column px-[6px] gap-[32px]"
                value={field.value}
                onValueChange={field.onChange}
              >
                {신용상태타입.map((옵션, index) => (
                  <div className="flex space-x-[17px]" key={index}>
                    <RadioGroupItem value={옵션.title} id={옵션.title} />
                    <label htmlFor={옵션.title} className="flex-column gap-[8px] cursor-pointer">
                      {옵션.title}
                      <div className="b8 text-gs-6 whitespace-pre">{옵션.description}</div>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />
      </div>
      <div className="w-full px-[20px] fixed left-0 bottom-[8px] z-[1000]">
        <Button
          type="button"
          disabled={!watch('creditGradeStatus') || !!errors.creditGradeStatus}
          onClick={() => onNext(watch('purposcreditGradeStatuseOfLoan'))}
        >
          다음
        </Button>
      </div>
    </div>
  )
}
