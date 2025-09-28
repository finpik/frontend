'use client'

import {
  Form,
  FormControl,
  FormField,
  Icon,
  Select,
  SelectContent,
  SelectItem,
  SelectPrimitive,
} from '@repo/fds/components'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelectOptionForm } from '../../myData/hooks/useSelectOptionForm'

export const ProfileDetailsHeader = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const form = useSelectOptionForm()
  const { control } = form

  // 프로필 카드 삭제
  const handleDelete = () => {
    // 삭제 후 리다이렉트
  }

  // 프로필 카드 내용 수정
  const handleEdit = () => {
    // 수정 페이지로 이동
  }

  // 프로필 카드 색상 바꾸기
  const handleChangeColor = () => {
    // 색상 변경 페이지로 이동
  }

  return (
    <header className="flex-between-align w-full px-[20px] pt-[5px]">
      <button type="button" onClick={() => router.back()} className="cursor-pointer">
        <Icon name="arrow-back-ios" color="#2E2E2E" />
      </button>

      <div className="flex-align">
        <button type="button" onClick={handleDelete} className="cursor-pointer">
          <Icon name="trash" color="#2E2E2E" />
        </button>
        <Form {...form}>
          <FormField
            control={control}
            name="option"
            render={({ field }) => (
              <Select open={open} onOpenChange={setOpen} onValueChange={field.onChange}>
                <FormControl>
                  <SelectPrimitive.Trigger id="option" className="all-unset">
                    <span onClick={() => setOpen(true)} className="cursor-pointer">
                      <Icon name="more" color="#2E2E2E" />
                    </span>
                  </SelectPrimitive.Trigger>
                </FormControl>
                <SelectContent
                  align="end"
                  className="data-[side=bottom]:translate-y-[9px] data-[side=top]:-translate-y-[9px]"
                >
                  <SelectItem value="카드 내용 수정" onClick={handleEdit}>
                    카드 내용 수정
                  </SelectItem>
                  <SelectItem value="색상 바꾸기" onClick={handleChangeColor}>
                    색상 바꾸기
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Form>
      </div>
    </header>
  )
}
