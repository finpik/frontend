'use client'

import Link from 'next/link'
import Image from 'next/image'
import KaKaoLogin from '../../../../public/sign-in/kakao_login.png'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const SignInClientPage = () => {
  const router = useRouter()

  const getParams = () => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has('id')) {
      const id = urlParams.get('id')
      id && Cookies.set('id', id)
      router.replace('/sign-up?sign-up=이름입력')
    } else if (urlParams.has('accessToken')) {
      const accessToken = urlParams.get('accessToken')
      accessToken && Cookies.set('accessToken', accessToken)
      router.replace('/loan/results')
    }
  }

  useEffect(() => {
    getParams()
  }, [router])

  return (
    <main className="flex-column-between">
      <div className="absolute flex-column-align left-1/2 top-[27.62%] -translate-x-1/2">
        <Image
          src="/sign-in/logo_symbol.svg"
          alt="logo_symbol"
          width={77}
          height={92}
          className="mb-[19px]"
        />
        <Image src="/sign-in/logo_typo.svg" alt="logo_typo" width={124} height={44} />
      </div>
      <div className="absolute flex-column-align top-[68.95%] mx-[20px] gap-[22px]">
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`}>
          <Image src={KaKaoLogin} alt="kakao_login" />
        </Link>
        <footer className="c1 text-gs-7 text-center whitespace-pre">
          {`해당 서비스에 로그인하시면\n`}
          <span className="underline decoration-skip-ink-none">이용약관</span> 및{' '}
          <span className="underline decoration-skip-ink-none">개인정보처리방침</span>에 동의하게
          됩니다.
        </footer>
      </div>
      <span className="c3 text-gs-8 absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        v0.1.0-alpha
      </span>
    </main>
  )
}
