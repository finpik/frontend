'use client'

import { useCallback, useState } from 'react'
import { useGetLoanProductListQuery } from '../../../../gql/graphql'
import { LoanItem } from '../../../../components/LoanItem'
import { useIntersection } from '../../../../hooks/useIntersection'
import { 정렬기준Map } from '../../../createProfile/constants/enumLabelMap'
import { Loan } from '../../type'
import { useAtomValue } from 'jotai'
import { sortTypeAtom } from '../../../loan/store/sort'

interface ProfileLoanResultsProps {
  profileId: string // props 대신, profileIdAtom에서 갖다쓰도록 추후 변경
}

export const ProfileLoanResults = ({ profileId }: ProfileLoanResultsProps) => {
  // 정렬 조건
  const sortType = useAtomValue(sortTypeAtom)

  // 대출 상품 뿌리기
  const [items, setItems] = useState<Loan[]>([])
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState<boolean>(true)

  const { fetchMore, loading } = useGetLoanProductListQuery({
    variables: {
      profileId,
      page: 1,
      size: 12,
      sortDirection: 정렬기준Map[sortType].sortDirection,
      sortProperty: 정렬기준Map[sortType].sortProperty,
    },
    onCompleted: (data) => {
      setItems(data.getLoanProductList.content as Loan[])
      data.getLoanProductList.hasNext && setHasNext(data.getLoanProductList.hasNext)
    },
    notifyOnNetworkStatusChange: true,
  })

  // ✅ Intersection 감지 시 실행할 콜백
  const onIntersect = useCallback(async () => {
    if (loading || !hasNext) return

    // const nextPage = page + 1
    const res = await fetchMore({
      variables: {
        profileId,
        page: page,
        size: 12,
        sortDirection: 정렬기준Map[sortType].sortDirection,
        sortProperty: 정렬기준Map[sortType].sortProperty,
      },
    })

    setItems((prev) => [...prev, ...(res.data.getLoanProductList.content as Loan[])])
    res.data.getLoanProductList.hasNext && setHasNext(res.data.getLoanProductList.hasNext)
    setPage((prevPage) => prevPage + 1)
  }, [loading, hasNext, page, profileId, fetchMore, sortType])

  // ✅ Intersection 감지용 ref 연결
  const intersectionRef = useIntersection(onIntersect, {
    threshold: 1.0,
  })

  return (
    <div className="flex-column w-full">
      <div className="flex-column w-full px-[20px] py-[18px] bg-bg-1">
        <ul className="flex-column w-full px-[4px] gap-[26px]">
          {items.map((loan, index) => (
            <LoanItem key={index} {...loan} />
          ))}
        </ul>
        <div ref={intersectionRef} />
        {loading && <p className="text-center py-4">불러오는 중...</p>}
      </div>
    </div>
  )
}

// Mock data for testing
export const mockLoanProductsData = {
  getLoanProducts: Array.from({ length: 20 }, (_, i) => ({
    productId: `loan${(i + 1).toString().padStart(3, '0')}`,
    productName: `${['직장인', '프리랜서', '개인사업자', '주부', '학생'][i % 5]} 맞춤 대출`,
    interestRate: `${(3.5 + (i % 5) * 0.3).toFixed(1)}%`,
    maxLimit: `${(500 + i * 100).toLocaleString()}원`,
    bankName: ['신한은행', '카카오뱅크', '우리은행', '하나은행', '국민은행'][i % 5],
    loanType: ['직장인', '프리랜서', '개인사업자', '주부', '학생'][i % 5],
  })),
}
