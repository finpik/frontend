'use client'

import { Button } from '@repo/fds/components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const NoProfileCard = () => {
  const router = useRouter()
  return (
    <div className="flex-column-align w-full bg-[#F9F9F9] rounded-md border-[1.5px] border-dashed border-[#D7D7D7]">
      <Image
        src="/profile/no_profile_card.svg"
        alt="no_profile_card"
        width={68}
        height={57}
        className="mb-[12px] mt-[55px]"
      />
      <div className="b4 text-gs-6 text-center mb-[26px] whitespace-pre">{`아직 프로필 카드가 없어요!\n지금 만들어서 꼭 맞는 대출을 추천받아요.`}</div>
      <Button onClick={() => router.push('/profile/create')} size="sm" className="mb-[36px]">
        프로필 카드 만들기
      </Button>
    </div>
  )
}
