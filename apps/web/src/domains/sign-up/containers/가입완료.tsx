'use client'

import { Button } from '@repo/fds/components'
import { 가입완료배경1, 가입완료배경2 } from '../components/가입완료배경'
import { useRouter } from 'next/navigation'

// interface 가입완료Props {
//   onStart: () => void
// }

export const 가입완료 = () => {
  const router = useRouter()

  return (
    <div className="flex-column-between h-screen pb-[8px]">
      <div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <가입완료배경1 />
        </div>
        <h1 className="h2 text-gs-1 mt-[138px] whitespace-pre">{`가입을 진심으로 환영해요!\n지금부터 핀픽을 시작할 수 있어요.`}</h1>
        <div className="absolute top-[40.33%] left-1/2 -translate-x-1/2">
          <가입완료배경2 />
        </div>
      </div>
      <Button type="button" onClick={() => router.replace('/loan/results')}>
        핀픽 시작하기
      </Button>
    </div>
  )
}
