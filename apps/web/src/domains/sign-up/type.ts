export interface AuthToken {
  accessToken: string
}

export interface SignUpForm {
  username: string
  dateOfBirth: Date
  gender: string
}

export type SignUpRequest = SignUpForm & {
  provider: 'kakao'
  vendorId: string
}

export interface SignUpResponse extends SignUpForm, AuthToken {
  userId: string
  email: string
}
