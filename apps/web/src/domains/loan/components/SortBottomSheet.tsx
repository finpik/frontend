'use client'

import {
  Drawer,
  DrawerTrigger,
  Icon,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@repo/fds/components'
import { useAtom } from 'jotai'
import { sortTypeAtom } from '../store/sort'

export const SortBottomSheet = () => {
  // 정렬
  const sortTypes = ['프로필 추천순', '금리 낮은순', '최대한도 높은순'] as const
  const [sortType, setSortType] = useAtom(sortTypeAtom)

  return (
    <div className="flex-column w-full">
      <Drawer>
        <DrawerTrigger>
          <div className="flex-align pl-[12px] py-[8px] b7 text-gs-2 rounded-t-[20px] border-b border-gs-9 cursor-pointer bg-bg-1">
            <Icon name="sort" />
            {sortType}
            <Icon name="arrow-down" />
          </div>
        </DrawerTrigger>
        <DrawerContent overlayBg="bg-gs-1/80" className="h-[281px]">
          <DrawerHeader>
            <DrawerTitle>정렬</DrawerTitle>
          </DrawerHeader>
          <ul className="w-full pt-[8px] px-[21px] b2 text-gs-3">
            {sortTypes.map((type) => (
              <DrawerClose asChild key={type}>
                <li
                  className="px-[10px] py-[18px] border-b border-gs-9 last:border-b-0 cursor-pointer"
                  onClick={() => setSortType(type)}
                >
                  {type}
                </li>
              </DrawerClose>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>

      <div className="h-[42px] px-[25px] py-[3px] flex-between-align c4 text-gs-4 bg-[#F7FAFC]">
        <div className="w-[73px]">상품명</div>
        <div>금리 / 최대한도</div>
      </div>
    </div>
  )
}
