'use client'

import { Icon } from '@repo/fds/components'
import { useRouter } from 'next/navigation'

export const LoanDetailsHeader = () => {
  const router = useRouter()

  return (
    <header className="b3  text-gs-1 flex-between-align w-full px-[20px] pt-[5px]">
      <button type="button" onClick={() => router.back()} className="cursor-pointer">
        <Icon name="arrow-back-ios" color="#2E2E2E" />
      </button>
      상품 상세보기
      <button type="button" onClick={() => alert('즐겨찾기 mutation')} className="cursor-pointer">
        <Icon name="star-default" />
      </button>
    </header>
  )
}
