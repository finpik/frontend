'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@repo/fds/components'
import { ProfilesHeader } from '../components/ProfilesHeader'
import { Profiles } from './Profiles'
import Image from 'next/image'

export const ProfilesClientPage = () => {
  return (
    <div className="flex-column w-full">
      <ProfilesHeader />
      <Tabs defaultValue="내 프로필 카드">
        <TabsList className="sticky top-[53px]">
          <TabsTrigger value="내 프로필 카드">내 프로필 카드</TabsTrigger>
          <TabsTrigger value="스크랩한 상품">스크랩한 상품</TabsTrigger>
        </TabsList>
        <TabsContent value="내 프로필 카드">
          <Profiles />
        </TabsContent>
        {/* 북마크 페이지 수정 */}
        <TabsContent value="스크랩한 상품">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-column-align w-full">
            <Image
              src="/bookmarks/noscrap-badge.svg"
              alt="noscrap-badge"
              width={68}
              height={57}
              className="mb-[18px]"
            />
            <div className="b4 text-gs-6 text-center whitespace-pre">{`스크랩한 상품이 없어요!\n관심있는 상품을 스크랩해 모아보세요.`}</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
