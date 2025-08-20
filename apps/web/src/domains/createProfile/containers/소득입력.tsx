'use client'

import { useFormContext } from 'react-hook-form'
import { 직장인소득입력 } from './소득입력/직장인소득입력'
import { 공무원소득입력 } from './소득입력/공무원소득입력'
import { 기타소득입력 } from './소득입력/기타소득입력'
import { 사업자소득입력 } from './소득입력/사업자소득입력'
import { 프리랜서소득입력 } from './소득입력/프리랜서소득입력'

export interface 소득입력Props {
  onNext: ({
    annualIncome,
    employmentForm,
    employmentDate,
    businessType,
    businessStartDate,
  }: {
    annualIncome: string
    employmentForm?: string
    employmentDate?: string
    businessType?: string
    businessStartDate?: string
  }) => void
}

export const 소득입력 = ({ onNext }: 소득입력Props) => {
  const { watch } = useFormContext()

  switch (watch('occupation')) {
    case '직장인':
      return <직장인소득입력 onNext={onNext} />
    case '사업자':
      return <사업자소득입력 onNext={onNext} />
    case '공무원(경찰, 교사, 군인 등)':
      return <공무원소득입력 onNext={onNext} />
    case '프리랜서':
      return <프리랜서소득입력 onNext={onNext} />
    case '기타(무직, 주부, 학생 등)':
      return <기타소득입력 onNext={onNext} />
  }
}
