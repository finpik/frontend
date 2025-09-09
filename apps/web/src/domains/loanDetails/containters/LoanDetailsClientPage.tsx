'use client'

import { useParams, useRouter } from 'next/navigation'
import { BankImage } from '../../../components/BankImage'
import { useGetLoanProductQuery, useGetRelatedLoanProductListQuery } from '../../../gql/graphql'
import { LoanDetailsHeader } from '../components/LoanDetailsHeader'
import { 대출기간단위ReverseMap } from '../constants/enumLabelMap'
import { formatKoreanCurrency } from '../../../utils/formatKoreanCurrency'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Icon,
} from '@repo/fds/components'
import { LoanItem } from '../../../components/LoanItem'
import Link from 'next/link'
import { useAtomValue } from 'jotai'
import { selectedProfileIdAtom } from '../../loan/store/selectedProfileId'

export const LoanDetailsClientPage = () => {
  const selectedProfileId = useAtomValue(selectedProfileIdAtom)
  const router = useRouter()
  const { loanProductId } = useParams<{ loanProductId: string }>()

  const { data } = useGetLoanProductQuery({
    variables: {
      loanProductId: loanProductId,
      profileId: 1, // selectedProfileId로 변경 필요
    },
  })

  const { data: relatedData } = useGetRelatedLoanProductListQuery({
    variables: {
      loanProductId: loanProductId,
    },
  })

  const noInterestRate =
    data?.getLoanProduct.minInterestRate === null && data?.getLoanProduct.maxInterestRate === null
  const fixedInterestRate =
    data?.getLoanProduct.minInterestRate === data?.getLoanProduct.maxInterestRate

  return (
    data?.getLoanProduct && (
      <div className="flex-column w-full overflow-y-hidden">
        <LoanDetailsHeader />
        <div className="w-full px-[20px] py-[18px] flex-column-align">
          <div className="flex w-full gap-[17px] px-[8px] mb-[27px]">
            <BankImage name={data?.getLoanProduct?.bankName} size="default" />
            <div className="flex-column gap-[6px]">
              <h1 className="h4 text-gs-1">{data?.getLoanProduct?.productName}</h1>
              <div className="b9 text-gs-5">{data?.getLoanProduct?.bankName}</div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex-column gap-[17px] h4 text-gs-2">
              <div className="flex-align gap-[21px]">
                <div className="pl-[10px] w-[150px] flex-column gap-[6px] border-r-[1.3px] border-gs-9">
                  <span className="b9 text-gs-6">최대 한도</span>
                  <div>
                    {formatKoreanCurrency(Number(data?.getLoanProduct.maxLoanLimitAmount))}원
                  </div>
                </div>
                <div className="pl-[10px] flex-column gap-[6px]">
                  <span className="b9 text-gs-6">대출 기간</span>
                  <div>
                    {Number(data?.getLoanProduct?.repaymentPeriod).toLocaleString('ko-KR')}
                    {data?.getLoanProduct?.repaymentPeriodUnit &&
                      대출기간단위ReverseMap[data?.getLoanProduct?.repaymentPeriodUnit]}
                  </div>
                </div>
              </div>
              <div className="pl-[10px] flex-column gap-[6px]">
                <span className="b9 text-gs-6">연 금리</span>
                <div>
                  {noInterestRate ? (
                    <span className="text-gs-5">심사 필요</span>
                  ) : (
                    <>
                      {fixedInterestRate ? (
                        <span className="text-pm-1">{data?.getLoanProduct.minInterestRate}</span>
                      ) : (
                        <>
                          {data?.getLoanProduct.minInterestRate !== null && (
                            <span className="text-pm-1">
                              {data?.getLoanProduct.minInterestRate}
                            </span>
                          )}
                          <span className="mx-[2px]">~</span>
                          {data?.getLoanProduct.maxInterestRate !== null && (
                            <span>{data?.getLoanProduct.maxInterestRate}</span>
                          )}
                        </>
                      )}
                      <span>%</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[8px] bg-bg-2" />
        <div className="flex-column px-[20px] mt-[24px] gap-[20px] mb-[36px]">
          <h2 className="s1 text-gs-2">대출 필수 조건</h2>
          <ul className="flex-column gap-[17px]">
            {data?.getLoanProduct?.descriptionResult.loanPrerequisite
              ?.split(',')
              .map((condition, index) => (
                <li key={index} className="flex gap-[14px] b2 text-gs-1 px-[4px]">
                  <span className="shrink-0">
                    <Icon name="check" />
                  </span>
                  <span>{condition}</span>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="s1 text-gs-2 px-[20px]">상품 설명</h2>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="대상 안내">
              <AccordionTrigger>대상 안내</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px] ">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.loanTargetGuide}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="금리 안내">
              <AccordionTrigger>금리 안내</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px]">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.interestRateGuide}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="한도 안내">
              <AccordionTrigger>한도 안내</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px]">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.maxLoanLimitGuide}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="대출 기간">
              <AccordionTrigger>대출 기간</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px]">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.repaymentPeriodGuide}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="상환 수수료">
              <AccordionTrigger>상환 수수료</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px] text-balance">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.repaymentFeeGuide}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="대출 신청 전 확인">
              <AccordionTrigger>대출 신청 전 확인</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[18px]">
                <div className="flex-column gap-[8px]">
                  <p className="b10 text-gs-4">
                    {data?.getLoanProduct.descriptionResult.preLoanChecklist}
                    {data?.getLoanProduct.descriptionResult.notesOnLoan}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex-column gap-[3px] mt-[16px] mb-[24px] px-[20px]">
            <div className="flex-align gap-[5px]">
              <Icon name="error" />
              <span className="c1 text-gs-7">유의 사항</span>
            </div>
            <span className="c1 text-gs-7">{`예상 금리와 한도입니다. 서류 제출 과정에서 신용 및 개인 정보가\n변동 되면 금리와 한도가 변경될 수 있습니다.`}</span>
          </div>
        </div>
        <div className="w-full h-[8px] bg-bg-2" />
        <div className="flex-column pb-[96px]">
          <h1 className="px-[20px] mt-[24px] mb-[20px] s1 text-gs-2 whitespace-pre-line">
            해당 상품을 본 유저들이 확인했어요
          </h1>
          <div className="h-[42px] px-[25px] py-[3px] flex-between-align c4 text-gs-4 bg-[#F7FAFC]">
            <div className="w-[73px]">상품명</div>
            <div>금리 / 최대한도</div>
          </div>
          <div className="flex-column w-full px-[20px] py-[18px] bg-bg-1">
            <ul className="flex-column w-full px-[4px] gap-[26px]">
              {relatedData?.getRelatedLoanProductList.map(
                (loan, index) =>
                  loan && (
                    <LoanItem
                      key={index}
                      {...loan}
                      minInterestRate={loan?.minInterestRate?.toString()}
                      maxInterestRate={loan?.maxInterestRate?.toString()}
                      maxLoanLimitAmount={loan?.maxLoanLimitAmount?.toString() ?? ''}
                    />
                  ),
              )}
            </ul>
          </div>
          <div className="fixed bottom-0 w-full px-[20px] pt-[34px] pb-[6px] flex-align gap-[8px] bg-gradient-to-b from-white/0 to-white to-[26.79%]">
            <Button onClick={() => router.push('/loan/comparison')} variant="tonal" size="md">
              다른 상품과 비교하기
            </Button>
            <Button size="md">
              {data?.getLoanProduct.url && (
                <Link href={data?.getLoanProduct.url}>신청하러 가기</Link>
              )}
            </Button>
          </div>
        </div>
      </div>
    )
  )
}
