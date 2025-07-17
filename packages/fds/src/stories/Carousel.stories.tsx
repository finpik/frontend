import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/components'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
  tags: ['autodocs'],
}

export default meta

export const Default = () => {
  return (
    <div className="flex-column gap-[50px]">
      <Carousel
        className="w-full flex-column gap-[15px] pt-[11px] pb-[21px]"
        opts={{ align: 'start', loop: true }}
      >
        <div className="ml-[20px]">
          <CarouselContent className="-ml-[8px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="basis-[calc(100%-28px)] shrink-0 pl-[8px]">
                <div className="select-none w-full bg-blue-1 rounded-md px-[20px] pt-[16px] pb-[14px]">
                  <h1 className="truncate h3 flex-align h-[36px] text-blue-3">
                    프로필 카드 이름{index + 1}
                  </h1>
                  <ul className="flex-column gap-[6px] mt-[12px]">
                    <li className="truncate flex-align b5 text-gs-2">
                      <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 목적</h2>
                      <p className="truncate">최대17자이내마지막은...으로부탁...</p>
                    </li>
                    <li className="truncate flex-align b5 text-gs-2">
                      <h2 className="shrink-0 c3 text-gs-4 w-[60px]">대출 유무</h2>
                      <p className="truncate">최대17자이내마지막은...으로부탁...</p>
                    </li>
                    <li className="truncate flex-align b5 text-gs-2">
                      <h2 className="shrink-0 c3 text-gs-4 w-[60px]">신용 상태</h2>
                      <p className="truncate">최대17자이내마지막은...으로부탁...</p>
                    </li>
                    <li className="truncate flex-align b5 text-gs-2">
                      <h2 className="shrink-0 c3 text-gs-4 w-[60px]">직업/소득</h2>
                      <p className="truncate">최대17자이내마지막은...으로부탁...</p>
                    </li>
                  </ul>
                  <hr className="h-[2px] mt-[19.7px] mb-[13.3px] border-dashed border-blue-2" />
                  <div className="flex-between-align">
                    <h2 className="shrink-0 b7 text-gs-4">대출 희망 금액</h2>
                    <div className="h4 flex-align gap-[1px]">
                      <span>130,000,000</span>
                      <span>원</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselDots length={4} />
      </Carousel>

      <Carousel
        className="w-full flex-column gap-[23px] px-[20px] pt-[21px] pb-[16px]"
        opts={{ align: 'start', loop: true }}
      >
        <CarouselContent className="-ml-[20px]">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="shrink-0 pl-[20px]">
              <h1 className="s1 text-blue-3 text-center mb-[12px]">프로필 카드 이름{index + 1}</h1>
              <ul className="b9 text-blue-3 flex-align gap-[8px] overflow-hidden">
                <li className="px-[16px] py-[8px] rounded-xs bg-blue-1 whitespace-nowrap">
                  생활비 및 취업 장려금
                </li>
                <li className="px-[16px] py-[8px] rounded-xs bg-blue-1 whitespace-nowrap">
                  2개 / 4,700,000원
                </li>
                <li className="px-[16px] py-[8px] rounded-xs bg-blue-1 whitespace-nowrap">
                  750점 / 중
                </li>
                <li className="px-[16px] py-[8px] rounded-xs bg-blue-1 whitespace-nowrap">
                  무직(주부)
                </li>
              </ul>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots length={4} />
      </Carousel>
    </div>
  )
}
