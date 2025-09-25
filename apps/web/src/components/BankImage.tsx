'use client'

import Image from 'next/image'

interface BankImageProps {
  name: string
  size?: 'default' | 'sm'
}

export const BankImage = ({ name, size = 'sm' }: BankImageProps) => {
  const sizeStyle = size === 'default' ? 'size-[42px]' : 'size-[18px]'
  const sizeVariant = size === 'default' ? 42 : 18
  const imgUrl = BANK_NAME_LIST.includes(name) ? `/banks/${name}.svg` : '/banks/etc.svg'

  return (
    <div className={`shrink-0 ${sizeStyle} rounded-[50%] overflow-hidden`}>
      <Image
        className="size-full object-cover"
        alt={name ?? 'etc'}
        src={imgUrl}
        width={sizeVariant}
        height={sizeVariant}
      />
    </div>
  )
}

const BANK_NAME_LIST = [
  'KB국민은행',
  '신한은행',
  '우리은행',
  '하나은행',
  'iM뱅크',
  'BNK부산은행',
  '케이뱅크',
  '카카오뱅크',
  '토스뱅크',
  'NH농협은행',
  '수협은행',
  'KDB산업은행',
  '광주은행',
  '제주은행',
  '전북은행',
  'BNK경남은행',
  'IBK기업은행',
  'SC제일은행',
  '한국씨티은행',
]
