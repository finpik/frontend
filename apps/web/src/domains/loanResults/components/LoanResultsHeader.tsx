'use client'

import { Icon } from '@repo/fds/components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const LoanResultsHeader = () => {
  const router = useRouter()

  return (
    <header className="flex-between-align w-full px-[20px] pt-[7px]">
      <Image src="/loanResults/header_logo.svg" alt="header_logo" width={119} height={46} />
      <div className="flex-align">
        <button type="button" onClick={() => router.push('/profile')} className="cursor-pointer">
          <Icon name="mydata" />
        </button>
        <button type="button" onClick={() => router.push('/search')} className="cursor-pointer">
          <Icon name="search" />
        </button>
      </div>
    </header>
  )
}
