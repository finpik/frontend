'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@repo/fds/components'
import { ProfilesHeader } from '../components/ProfilesHeader'
import { Profiles } from './Profiles'

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
        <TabsContent value="스크랩한 상품">내용2</TabsContent>
      </Tabs>
    </div>
  )
}
