'use client'

import { CarouselContent, CarouselItem, CarouselDots } from '@repo/fds/components'
import { useAtomValue } from 'jotai'
import {
  프로필색깔ReverseMap,
  대출목적ReverseMap,
  직업군ReverseMap,
} from '../../../createProfile/constants/enumLabelMap'
import { Profile } from '../../../createProfile/types'
import { getCreditInfo } from '../../../createProfile/utils/getCreditInfo'
import { selectedIndexAtom } from '../../../loan/store/selectedIndex'

interface UnifiedCarouselViewProps {
  profiles: Profile[]
  isCompact: boolean
}

/* 하나의 캐러셀 + 아이템 내부에서 Expanded/Compact 두 레이어를 겹쳐서 페이드 전환 */
export const UnifiedCarouselView = ({ profiles, isCompact }: UnifiedCarouselViewProps) => {
  const selectedIndex = useAtomValue(selectedIndexAtom)
  // 2개일 때는 강제로 배열을 복제해서 4개로 만듦
  const displayProfiles = profiles.length === 2 ? [...profiles, ...profiles] : profiles

  const outerWrapClass = isCompact ? 'bg-bg-1 pt-[21px] rounded-b-lg' : 'pt-[11px]'
  const innerWrapClass = isCompact ? 'mx-[20px]' : 'ml-[20px]'
  const contentClass = isCompact ? '-ml-[20px]' : 'ml-0 pr-[12px]'
  const itemClass = isCompact ? 'shrink-0 pl-[20px]' : 'shrink-0 pl-0 pr-[8px]'
  const dotsClass = isCompact ? 'mt-[23px] mb-[16px]' : 'mt-[15px] mb-[21px]'

  return (
    <>
      <div className={outerWrapClass}>
        <div className={innerWrapClass}>
          <CarouselContent className={contentClass}>
            {displayProfiles.map((p, index) => {
              const colorKey = 프로필색깔ReverseMap[p.profileColor]

              const textStyle = `text-[var(--color-${colorKey}-3)]`
              const bgStyle = `bg-[var(--color-${colorKey}-1)]`
              const borderStyle = `border-[var(--color-${colorKey}-2)]`

              return (
                <CarouselItem key={index} className={itemClass}>
                  {/* relative 컨테이너 안에서 두 레이어를 겹침 */}
                  <div className="relative">
                    {/* Expanded 레이어 */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-250 ${
                        isCompact ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                    >
                      <div
                        className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
                      >
                        <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
                          {p.profileName}
                        </h1>
                        <ul className="flex-column gap-[6px] mt-[12px]">
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                            <p className="truncate">{대출목적ReverseMap[p.purposeOfLoan]}</p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                            <p className="truncate">
                              {`${p.loanProductUsageCount}개 / ${Number(p.totalLoanUsageAmount).toLocaleString('ko')}원`}
                            </p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                            <p className="truncate">
                              {getCreditInfo(
                                Number(String(p.creditScore)?.replace(/[^\d]/g, '')),
                                p.creditGradeStatus,
                              )}
                            </p>
                          </li>
                          <li className="truncate flex-align b5 text-gs-2">
                            <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                            <p className="truncate">
                              {`${직업군ReverseMap[p.occupation]} / 연 ${Number(p.annualIncome).toLocaleString('ko')}원`}
                            </p>
                          </li>
                        </ul>
                        <hr
                          className={`h-[2px] mt-[19.7px] mb-[13.3px] border-dashed ${borderStyle}`}
                        />
                        <div className="flex-between-align">
                          <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
                          <div className="h4 flex-align gap-[1px]">
                            <span>{Number(p.desiredLoanAmount).toLocaleString('ko')}</span>
                            <span>원</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Compact 레이어 */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-250 ${
                        isCompact ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <div>
                        <h1 className={`s1 ${textStyle} text-center mb-[12px]`}>{p.profileName}</h1>
                        <ul
                          className={`b9 ${textStyle} flex-align gap-[8px] no-scrollbar overflow-x-scroll`}
                        >
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {대출목적ReverseMap[p.purposeOfLoan]}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {`${p.loanProductUsageCount}개 / ${Number(p.totalLoanUsageAmount).toLocaleString('ko')}원`}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {getCreditInfo(
                              Number(String(p.creditScore)?.replace(/[^\d]/g, '')),
                              p.creditGradeStatus,
                            )}
                          </li>
                          <li
                            className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                          >
                            {`${직업군ReverseMap[p.occupation]} / 연 ${Number(p.annualIncome).toLocaleString('ko')}원`}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* 높이 유지를 위한 사이저(보이는 레이아웃과 동일한 DOM을 투명하게 렌더) */}
                    <div className="opacity-0 pointer-events-none">
                      {isCompact ? (
                        <div>
                          <h1 className={`s1 ${textStyle} text-center mb-[12px]`}>
                            {p.profileName}
                          </h1>
                          <ul
                            className={`b9 ${textStyle} flex-align gap-[8px] no-scrollbar overflow-x-scroll`}
                          >
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {대출목적ReverseMap[p.purposeOfLoan]}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {`${p.loanProductUsageCount}개 / ${Number(p.totalLoanUsageAmount).toLocaleString('ko')}원`}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {getCreditInfo(
                                Number(String(p.creditScore)?.replace(/[^\d]/g, '')),
                                p.creditGradeStatus,
                              )}
                            </li>
                            <li
                              className={`px-[16px] py-[8px] rounded-xs ${bgStyle} whitespace-nowrap`}
                            >
                              {`${직업군ReverseMap[p.occupation]} / 연 ${Number(p.annualIncome).toLocaleString('ko')}원`}
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <div
                          className={`select-none w-full ${bgStyle} rounded-md px-[20px] pt-[16px] pb-[14px]`}
                        >
                          <h1 className={`truncate h3 flex-align h-[36px] ${textStyle}`}>
                            {p.profileName}
                          </h1>
                          <ul className="flex-column gap-[6px] mt-[12px]">
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                              <p className="truncate">{대출목적ReverseMap[p.purposeOfLoan]}</p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                              <p className="truncate">
                                {`${p.loanProductUsageCount}개 / ${Number(p.totalLoanUsageAmount).toLocaleString('ko')}원`}
                              </p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                              <p className="truncate">
                                {getCreditInfo(
                                  Number(String(p.creditScore)?.replace(/[^\d]/g, '')),
                                  p.creditGradeStatus,
                                )}
                              </p>
                            </li>
                            <li className="truncate flex-align b5 text-gs-2">
                              <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                              <p className="truncate">
                                {`${직업군ReverseMap[p.occupation]} / 연 ${Number(p.annualIncome).toLocaleString('ko')}원`}
                              </p>
                            </li>
                          </ul>
                          <hr
                            className={`h-[2px] mt-[19.7px] mb-[13.3px] border-dashed ${borderStyle}`}
                          />
                          <div className="flex-between-align">
                            <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
                            <div className="h4 flex-align gap-[1px]">
                              <span>{Number(p.desiredLoanAmount).toLocaleString('ko')}</span>
                              <span>원</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </div>

        <div className={dotsClass}>
          <CarouselDots length={profiles.length} index={selectedIndex} />
        </div>
      </div>
    </>
  )
}
