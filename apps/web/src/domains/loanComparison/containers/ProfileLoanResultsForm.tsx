'use client'

import { Checkbox, Form, FormControl, FormField, RadioGroup } from '@repo/fds/components'
import { useCallback, useState } from 'react'
import { LoanItem } from '../../../components/LoanItem'
import { useGetLoanProductListQuery } from '../../../gql/graphql'
import { useIntersection } from '../../../hooks/useIntersection'
import { Loan } from '../../loanResults/type'
import { 정렬기준Map } from '../../createProfile/constants/enumLabelMap'
import { useCompareForm } from '../hooks/useCompareForm'
import { DevTool } from '@hookform/devtools'
import { useAtomValue } from 'jotai'
import { sortTypeAtom } from '../../loan/store/sort'

interface ProfileLoanResultsFormProps {
  profileId: string
}

export const ProfileLoanResultsForm = ({ profileId }: ProfileLoanResultsFormProps) => {
  const form = useCompareForm()
  const { control, handleSubmit } = form

  // 대출 상품 뿌리기
  const [items, setItems] = useState<Loan[]>([])
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState<boolean>(true)

  // 정렬 조건
  const sortType = useAtomValue(sortTypeAtom)

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
      <Form {...form}>
        <form>
          <div className="flex-column w-full px-[20px] py-[18px] bg-bg-1">
            <FormField
              control={control}
              name="checkbox"
              render={({ field }) => (
                <RadioGroup onValueChange={field.onChange}>
                  <ul className="flex-column w-full gap-[26px]">
                    {items.map((loan, index) => (
                      <div className="flex-align w-full gap-[11px]" key={index}>
                        <div className="flex-center size-[36px] shrink-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(loan.loanProductId)}
                              onCheckedChange={(checked) => {
                                // 현재 체크된 값의 개수
                                const checkedCount = field.value?.length || 0

                                // 체크한 항목이 6개 이하일 경우에만 변경 허용
                                if (checked && checkedCount < 6) {
                                  field.onChange([...field.value, loan.loanProductId])
                                } else if (!checked) {
                                  field.onChange(
                                    field.value?.filter((value) => value !== loan.loanProductId),
                                  )
                                }
                              }}
                            />
                          </FormControl>
                        </div>
                        <label htmlFor={loan.loanProductId} className="w-full cursor-pointer">
                          <LoanItem key={index} {...loan} />
                        </label>
                      </div>
                    ))}
                  </ul>
                </RadioGroup>
              )}
            />

            <div ref={intersectionRef} />
            {loading && <p className="text-center py-4">불러오는 중...</p>}
          </div>
        </form>
      </Form>
      <DevTool control={control} />
    </div>
  )
}
