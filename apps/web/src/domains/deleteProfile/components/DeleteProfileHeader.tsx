'use client'

import { Checkbox, Icon } from '@repo/fds/components'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export interface DeleteProfileHeaderProps {
  profileIds: string[]
}

export const DeleteProfileHeader = ({ profileIds }: DeleteProfileHeaderProps) => {
  const router = useRouter()

  const [selectAll, setSelectAll] = useState(false)
  const { setValue } = useFormContext()

  const handleClickAll = () => {
    setSelectAll(!selectAll)
    setValue('deletedIdList', !selectAll ? profileIds : [])
  }

  const handleClickReset = () => {
    setSelectAll(false)
    setValue('deletedIdList', !selectAll ? profileIds : [])
  }

  return (
    <div className="flex-column w-full gap-[6px] bg-bg-1 sticky top-0">
      <header className="b3 text-gs-1 bg-bg-1 flex-between-align w-full px-[20px] pt-[5px]">
        <button type="button" onClick={() => router.back()} className="cursor-pointer">
          <Icon name="arrow-back-ios" color="#2E2E2E" />
        </button>
        마이 데이터
        <button type="submit" className="size-[48px] flex-center b1 text-pm-1 cursor-pointer">
          삭제
        </button>
      </header>
      <div className="flex-between-align w-full py-[12px] px-[20px] border-b border-gs-9">
        <div className="flex-align space-x-[10px] b7 text-gs-2">
          <Checkbox
            id="deletedIdList"
            className="border-[1.5px] size-[20px]"
            checked={selectAll}
            onCheckedChange={handleClickAll}
          />

          <label htmlFor="deletedIdList" className="cursor-pointer">
            전체 선택
          </label>
        </div>
        <button type="button" onClick={handleClickReset} className="b8 text-gs-5 cursor-pointer">
          선택 해제
        </button>
      </div>
    </div>
  )
}
