import { atom } from 'jotai'

export const sortTypeAtom = atom<'프로필 추천순' | '금리 낮은순' | '최대한도 높은순'>(
  '프로필 추천순',
)
