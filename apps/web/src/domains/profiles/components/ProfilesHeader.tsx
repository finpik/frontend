'use client'

import {
  FormControl,
  FormField,
  Icon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Form,
} from '@repo/fds/components'
import { cn } from '@repo/fds/lib'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelectOptionForm } from '../hooks/useSelectOptionForm'

export const ProfilesHeader = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const form = useSelectOptionForm()
  const { control } = form

  return (
    <header className="b3 text-gs-1 bg-bg-1 flex-between-align w-full px-[20px] pt-[5px] sticky top-0">
      <button type="button" onClick={() => router.back()} className="cursor-pointer">
        <Icon name="arrow-back-ios" color="#2E2E2E" />
      </button>
      마이 데이터
      <Form {...form}>
        {/* <form> */}
        <FormField
          control={control}
          name="option"
          render={({ field }) => (
            <Select open={open} onOpenChange={setOpen} onValueChange={field.onChange}>
              <FormControl>
                {/* <SelectTrigger id="option">
                  <button type="button" onClick={() => setOpen(true)} className="cursor-pointer">
                    <Icon name="more" />
                  </button>
                  <SelectValue placeholder="선택해주세요" />
                </SelectTrigger> */}
              </FormControl>
              <SelectContent
                align="end"
                className="data-[side=bottom]:translate-y-[9px] data-[side=top]:-translate-y-[9px]"
              >
                <SelectItem value="새 카드 추가">새 카드 추가</SelectItem>
                <SelectItem value="카드 삭제">카드 삭제</SelectItem>
                <SelectItem value="순서 변경">순서 변경</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {/* </form> */}
      </Form>
      <button type="button" onClick={() => setOpen(true)} className="cursor-pointer">
        <Icon name="more" />
      </button>
    </header>
  )
}
