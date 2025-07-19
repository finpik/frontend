import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An RFC-3339 compliant Full Date Scalar */
  Date: { input: any; output: any; }
  /** A slightly refined version of RFC-3339 compliant DateTime Scalar */
  DateTime: { input: any; output: any; }
  /** 24-hour clock time value string in the format `hh:mm:ss` or `hh:mm:ss.sss`. */
  LocalTime: { input: any; output: any; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
};

export type AuthResult = {
  __typename?: 'AuthResult';
  accessToken: Scalars['String']['output'];
};

export type CreateProfileInput = {
  annualIncome?: InputMaybe<Scalars['Int']['input']>;
  creditGradeStatus?: InputMaybe<CreditGradeStatus>;
  creditScore?: InputMaybe<Scalars['Int']['input']>;
  desiredLoanAmount: Scalars['Int']['input'];
  employmentDate?: InputMaybe<Scalars['Date']['input']>;
  employmentForm?: InputMaybe<EmploymentForm>;
  loanProductUsageCount: Scalars['Int']['input'];
  loanProductUsageStatus: LoanProductUsageStatus;
  occupation: Occupation;
  profileColor: ProfileColor;
  profileName: Scalars['String']['input'];
  purposeOfLoan: PurposeOfLoan;
  totalLoanUsageAmount: Scalars['Int']['input'];
};

export enum CreditGradeStatus {
  Excellent = 'EXCELLENT',
  Fair = 'FAIR',
  Good = 'GOOD',
  Poor = 'POOR',
  VeryPoor = 'VERY_POOR'
}

export enum EmploymentForm {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type LoanProductDescriptionResult = {
  __typename?: 'LoanProductDescriptionResult';
  interestRateGuide: Scalars['String']['output'];
  loanPrerequisite: Scalars['String']['output'];
  loanTargetGuide: Scalars['String']['output'];
  maxLoanLimitGuide: Scalars['String']['output'];
  notesOnLoan: Scalars['String']['output'];
  preLoanChecklist: Scalars['String']['output'];
  repaymentPeriodGuide: Scalars['String']['output'];
};

export type LoanProductResult = {
  __typename?: 'LoanProductResult';
  bankName: Scalars['String']['output'];
  descriptionResult: LoanProductDescriptionResult;
  maxInterestRate?: Maybe<Scalars['Float']['output']>;
  maxLoanLimitAmount?: Maybe<Scalars['Int']['output']>;
  minInterestRate?: Maybe<Scalars['Float']['output']>;
  productName: Scalars['String']['output'];
  repaymentPeriod?: Maybe<Scalars['Int']['output']>;
  repaymentPeriodUnit?: Maybe<RepaymentPeriodUnit>;
};

export enum LoanProductUsageStatus {
  NotUsing = 'NOT_USING',
  Using = 'USING'
}

export enum LoanUsageStatus {
  NotUsing = 'NOT_USING',
  Using = 'USING'
}

export type Mutation = {
  __typename?: 'Mutation';
  createProfile: ProfileResult;
  deleteProfile: Array<Maybe<ProfileResult>>;
  refresh: AuthResult;
  signUp: SignUpResult;
  updateProfile: ProfileResult;
  updateProfileColor: ProfileResult;
  updateProfileSequence: Array<Maybe<ProfileResult>>;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationDeleteProfileArgs = {
  deletedId?: InputMaybe<Scalars['Long']['input']>;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateProfileColorArgs = {
  input: UpdateProfileColorInput;
};


export type MutationUpdateProfileSequenceArgs = {
  input: Array<InputMaybe<UpdateProfileSequenceInput>>;
};

export enum Occupation {
  Employee = 'EMPLOYEE',
  Other = 'OTHER',
  PublicServant = 'PUBLIC_SERVANT',
  SelfEmployed = 'SELF_EMPLOYED',
  Unemployed = 'UNEMPLOYED'
}

export enum ProfileColor {
  BlueTwo = 'BLUE_TWO',
  GrayTwo = 'GRAY_TWO',
  GreenTwo = 'GREEN_TWO',
  OrangeThree = 'ORANGE_THREE',
  PinkTwo = 'PINK_TWO',
  PurpleTwo = 'PURPLE_TWO',
  RedTwo = 'RED_TWO',
  YellowTwo = 'YELLOW_TWO'
}

export type ProfileResult = {
  __typename?: 'ProfileResult';
  creditGradeStatus: CreditGradeStatus;
  desiredLoanAmount: Scalars['Int']['output'];
  loanProductUsageCount: Scalars['Int']['output'];
  occupation: Occupation;
  profileColor: ProfileColor;
  profileId: Scalars['Long']['output'];
  profileName: Scalars['String']['output'];
  profileSeq: Scalars['Int']['output'];
  purposeOfLoan: PurposeOfLoan;
  totalLoanUsageAmount: Scalars['Int']['output'];
};

export enum PurposeOfLoan {
  BusinessFunds = 'BUSINESS_FUNDS',
  Housing = 'HOUSING',
  LivingExpenses = 'LIVING_EXPENSES',
  LoanRepayment = 'LOAN_REPAYMENT',
  MedicalOrEmergency = 'MEDICAL_OR_EMERGENCY',
  Tuition = 'TUITION'
}

export type Query = {
  __typename?: 'Query';
  getLoanProduct: LoanProductResult;
  getLoanProducts: Array<Maybe<RecommendedLoanProductResult>>;
  getProfileById: ProfileResult;
  getProfilesByUser: Array<Maybe<ProfileResult>>;
  getRelatedLoanProductList: Array<Maybe<RelatedLoanProductResult>>;
};


export type QueryGetLoanProductArgs = {
  loanProductId: Scalars['Long']['input'];
};


export type QueryGetLoanProductsArgs = {
  profileId: Scalars['Long']['input'];
};


export type QueryGetProfileByIdArgs = {
  profileId?: InputMaybe<Scalars['Long']['input']>;
};


export type QueryGetRelatedLoanProductListArgs = {
  loanProductId: Scalars['Long']['input'];
};

export type RecommendedLoanProductResult = {
  __typename?: 'RecommendedLoanProductResult';
  bankName: Scalars['String']['output'];
  loanProductId: Scalars['Long']['output'];
  maxInterestRate?: Maybe<Scalars['Float']['output']>;
  maxLoanLimitAmount?: Maybe<Scalars['Long']['output']>;
  minInterestRate?: Maybe<Scalars['Float']['output']>;
  productName: Scalars['String']['output'];
  profileId: Scalars['Long']['output'];
  recommendedLoanProductId: Scalars['Long']['output'];
};

export type RelatedLoanProductResult = {
  __typename?: 'RelatedLoanProductResult';
  loanProductId: Scalars['Long']['output'];
  maxInterestRate?: Maybe<Scalars['Float']['output']>;
  maxLoanLimitAmount?: Maybe<Scalars['Int']['output']>;
  minInterestRate?: Maybe<Scalars['Float']['output']>;
  productName: Scalars['String']['output'];
};

export enum RepaymentPeriodUnit {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type SignUpInput = {
  dateOfBirth: Scalars['Date']['input'];
  gender?: InputMaybe<Gender>;
  provider: Scalars['String']['input'];
  username: Scalars['String']['input'];
  vendorId: Scalars['String']['input'];
};

export type SignUpResult = {
  __typename?: 'SignUpResult';
  accessToken: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gender: Gender;
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UpdateProfileColorInput = {
  id: Scalars['Long']['input'];
  profileColor: ProfileColor;
};

export type UpdateProfileInput = {
  annualIncome: Scalars['Int']['input'];
  businessStartDate?: InputMaybe<Scalars['Date']['input']>;
  creditGradeStatus?: InputMaybe<CreditGradeStatus>;
  creditScore?: InputMaybe<Scalars['Int']['input']>;
  desiredLoanAmount?: InputMaybe<Scalars['Int']['input']>;
  employmentDate?: InputMaybe<Scalars['Date']['input']>;
  employmentForm: EmploymentForm;
  loanProductUsageCount?: InputMaybe<Scalars['Int']['input']>;
  loanProductUsageStatus?: InputMaybe<LoanProductUsageStatus>;
  occupation: Occupation;
  profileId: Scalars['Long']['input'];
  profileName?: InputMaybe<Scalars['String']['input']>;
  purposeOfLoan?: InputMaybe<PurposeOfLoan>;
  totalLoanUsageAmount?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateProfileSequenceInput = {
  id: Scalars['Long']['input'];
  seq: Scalars['Int']['input'];
};

export type CreateProfileMutationVariables = Exact<{
  input: CreateProfileInput;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'ProfileResult', profileId: any, profileName: string, profileColor: ProfileColor, occupation: Occupation, creditGradeStatus: CreditGradeStatus, desiredLoanAmount: number, loanProductUsageCount: number, purposeOfLoan: PurposeOfLoan, totalLoanUsageAmount: number, profileSeq: number } };

export type DeleteProfileMutationVariables = Exact<{
  deletedId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteProfileMutation = { __typename?: 'Mutation', deleteProfile: Array<{ __typename?: 'ProfileResult', profileId: any, profileName: string, profileColor: ProfileColor, occupation: Occupation, creditGradeStatus: CreditGradeStatus, desiredLoanAmount: number, loanProductUsageCount: number, purposeOfLoan: PurposeOfLoan, totalLoanUsageAmount: number, profileSeq: number } | null> };

export type GetLoanProductQueryVariables = Exact<{
  loanProductId: Scalars['Long']['input'];
}>;


export type GetLoanProductQuery = { __typename?: 'Query', getLoanProduct: { __typename?: 'LoanProductResult', bankName: string, maxInterestRate?: number | null, maxLoanLimitAmount?: number | null, minInterestRate?: number | null, productName: string, repaymentPeriod?: number | null, repaymentPeriodUnit?: RepaymentPeriodUnit | null, descriptionResult: { __typename?: 'LoanProductDescriptionResult', interestRateGuide: string, loanPrerequisite: string, loanTargetGuide: string, maxLoanLimitGuide: string, notesOnLoan: string, preLoanChecklist: string, repaymentPeriodGuide: string } } };

export type GetLoanProductsQueryVariables = Exact<{
  profileId: Scalars['Long']['input'];
}>;


export type GetLoanProductsQuery = { __typename?: 'Query', getLoanProducts: Array<{ __typename?: 'RecommendedLoanProductResult', recommendedLoanProductId: any, profileId: any, bankName: string, loanProductId: any, productName: string, minInterestRate?: number | null, maxInterestRate?: number | null, maxLoanLimitAmount?: any | null } | null> };

export type GetProfileByIdQueryVariables = Exact<{
  profileId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', getProfileById: { __typename?: 'ProfileResult', profileId: any, profileName: string, profileColor: ProfileColor, occupation: Occupation, creditGradeStatus: CreditGradeStatus, desiredLoanAmount: number, loanProductUsageCount: number, purposeOfLoan: PurposeOfLoan, totalLoanUsageAmount: number, profileSeq: number } };

export type GetProfilesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilesByUserQuery = { __typename?: 'Query', getProfilesByUser: Array<{ __typename?: 'ProfileResult', profileId: any, profileName: string, profileColor: ProfileColor, occupation: Occupation, creditGradeStatus: CreditGradeStatus, desiredLoanAmount: number, loanProductUsageCount: number, purposeOfLoan: PurposeOfLoan, totalLoanUsageAmount: number, profileSeq: number } | null> };

export type GetRelatedLoanProductListQueryVariables = Exact<{
  loanProductId: Scalars['Long']['input'];
}>;


export type GetRelatedLoanProductListQuery = { __typename?: 'Query', getRelatedLoanProductList: Array<{ __typename?: 'RelatedLoanProductResult', loanProductId: any, productName: string, minInterestRate?: number | null, maxInterestRate?: number | null, maxLoanLimitAmount?: number | null } | null> };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthResult', accessToken: string } };

export type SignUpMutationVariables = Exact<{
  input: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'SignUpResult', accessToken: string, dateOfBirth: string, email: string, gender: Gender, userId: string, username: string } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'ProfileResult', profileId: any, profileName: string, profileColor: ProfileColor, occupation: Occupation, creditGradeStatus: CreditGradeStatus, desiredLoanAmount: number, loanProductUsageCount: number, purposeOfLoan: PurposeOfLoan, totalLoanUsageAmount: number, profileSeq: number } };

export type UpdateProfileColorMutationVariables = Exact<{
  input: UpdateProfileColorInput;
}>;


export type UpdateProfileColorMutation = { __typename?: 'Mutation', updateProfileColor: { __typename?: 'ProfileResult', profileId: any, profileColor: ProfileColor } };

export type UpdateProfileSequenceMutationVariables = Exact<{
  input: Array<InputMaybe<UpdateProfileSequenceInput>> | InputMaybe<UpdateProfileSequenceInput>;
}>;


export type UpdateProfileSequenceMutation = { __typename?: 'Mutation', updateProfileSequence: Array<{ __typename?: 'ProfileResult', profileId: any, profileSeq: number } | null> };


export const CreateProfileDocument = gql`
    mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
    profileId
    profileName
    profileColor
    occupation
    creditGradeStatus
    desiredLoanAmount
    loanProductUsageCount
    purposeOfLoan
    totalLoanUsageAmount
    profileSeq
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const DeleteProfileDocument = gql`
    mutation DeleteProfile($deletedId: Long) {
  deleteProfile(deletedId: $deletedId) {
    profileId
    profileName
    profileColor
    occupation
    creditGradeStatus
    desiredLoanAmount
    loanProductUsageCount
    purposeOfLoan
    totalLoanUsageAmount
    profileSeq
  }
}
    `;
export type DeleteProfileMutationFn = Apollo.MutationFunction<DeleteProfileMutation, DeleteProfileMutationVariables>;

/**
 * __useDeleteProfileMutation__
 *
 * To run a mutation, you first call `useDeleteProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileMutation, { data, loading, error }] = useDeleteProfileMutation({
 *   variables: {
 *      deletedId: // value for 'deletedId'
 *   },
 * });
 */
export function useDeleteProfileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileMutation, DeleteProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProfileMutation, DeleteProfileMutationVariables>(DeleteProfileDocument, options);
      }
export type DeleteProfileMutationHookResult = ReturnType<typeof useDeleteProfileMutation>;
export type DeleteProfileMutationResult = Apollo.MutationResult<DeleteProfileMutation>;
export type DeleteProfileMutationOptions = Apollo.BaseMutationOptions<DeleteProfileMutation, DeleteProfileMutationVariables>;
export const GetLoanProductDocument = gql`
    query GetLoanProduct($loanProductId: Long!) {
  getLoanProduct(loanProductId: $loanProductId) {
    bankName
    descriptionResult {
      interestRateGuide
      loanPrerequisite
      loanTargetGuide
      maxLoanLimitGuide
      notesOnLoan
      preLoanChecklist
      repaymentPeriodGuide
    }
    maxInterestRate
    maxLoanLimitAmount
    minInterestRate
    productName
    repaymentPeriod
    repaymentPeriodUnit
  }
}
    `;

/**
 * __useGetLoanProductQuery__
 *
 * To run a query within a React component, call `useGetLoanProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoanProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoanProductQuery({
 *   variables: {
 *      loanProductId: // value for 'loanProductId'
 *   },
 * });
 */
export function useGetLoanProductQuery(baseOptions: Apollo.QueryHookOptions<GetLoanProductQuery, GetLoanProductQueryVariables> & ({ variables: GetLoanProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoanProductQuery, GetLoanProductQueryVariables>(GetLoanProductDocument, options);
      }
export function useGetLoanProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoanProductQuery, GetLoanProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoanProductQuery, GetLoanProductQueryVariables>(GetLoanProductDocument, options);
        }
export function useGetLoanProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLoanProductQuery, GetLoanProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLoanProductQuery, GetLoanProductQueryVariables>(GetLoanProductDocument, options);
        }
export type GetLoanProductQueryHookResult = ReturnType<typeof useGetLoanProductQuery>;
export type GetLoanProductLazyQueryHookResult = ReturnType<typeof useGetLoanProductLazyQuery>;
export type GetLoanProductSuspenseQueryHookResult = ReturnType<typeof useGetLoanProductSuspenseQuery>;
export type GetLoanProductQueryResult = Apollo.QueryResult<GetLoanProductQuery, GetLoanProductQueryVariables>;
export const GetLoanProductsDocument = gql`
    query GetLoanProducts($profileId: Long!) {
  getLoanProducts(profileId: $profileId) {
    recommendedLoanProductId
    profileId
    bankName
    loanProductId
    productName
    minInterestRate
    maxInterestRate
    maxLoanLimitAmount
  }
}
    `;

/**
 * __useGetLoanProductsQuery__
 *
 * To run a query within a React component, call `useGetLoanProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLoanProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLoanProductsQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useGetLoanProductsQuery(baseOptions: Apollo.QueryHookOptions<GetLoanProductsQuery, GetLoanProductsQueryVariables> & ({ variables: GetLoanProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLoanProductsQuery, GetLoanProductsQueryVariables>(GetLoanProductsDocument, options);
      }
export function useGetLoanProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLoanProductsQuery, GetLoanProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLoanProductsQuery, GetLoanProductsQueryVariables>(GetLoanProductsDocument, options);
        }
export function useGetLoanProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLoanProductsQuery, GetLoanProductsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLoanProductsQuery, GetLoanProductsQueryVariables>(GetLoanProductsDocument, options);
        }
export type GetLoanProductsQueryHookResult = ReturnType<typeof useGetLoanProductsQuery>;
export type GetLoanProductsLazyQueryHookResult = ReturnType<typeof useGetLoanProductsLazyQuery>;
export type GetLoanProductsSuspenseQueryHookResult = ReturnType<typeof useGetLoanProductsSuspenseQuery>;
export type GetLoanProductsQueryResult = Apollo.QueryResult<GetLoanProductsQuery, GetLoanProductsQueryVariables>;
export const GetProfileByIdDocument = gql`
    query GetProfileById($profileId: Long) {
  getProfileById(profileId: $profileId) {
    profileId
    profileName
    profileColor
    occupation
    creditGradeStatus
    desiredLoanAmount
    loanProductUsageCount
    purposeOfLoan
    totalLoanUsageAmount
    profileSeq
  }
}
    `;

/**
 * __useGetProfileByIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByIdQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useGetProfileByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
      }
export function useGetProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export function useGetProfileByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export type GetProfileByIdQueryHookResult = ReturnType<typeof useGetProfileByIdQuery>;
export type GetProfileByIdLazyQueryHookResult = ReturnType<typeof useGetProfileByIdLazyQuery>;
export type GetProfileByIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByIdSuspenseQuery>;
export type GetProfileByIdQueryResult = Apollo.QueryResult<GetProfileByIdQuery, GetProfileByIdQueryVariables>;
export const GetProfilesByUserDocument = gql`
    query GetProfilesByUser {
  getProfilesByUser {
    profileId
    profileName
    profileColor
    occupation
    creditGradeStatus
    desiredLoanAmount
    loanProductUsageCount
    purposeOfLoan
    totalLoanUsageAmount
    profileSeq
  }
}
    `;

/**
 * __useGetProfilesByUserQuery__
 *
 * To run a query within a React component, call `useGetProfilesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilesByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilesByUserQuery(baseOptions?: Apollo.QueryHookOptions<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>(GetProfilesByUserDocument, options);
      }
export function useGetProfilesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>(GetProfilesByUserDocument, options);
        }
export function useGetProfilesByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>(GetProfilesByUserDocument, options);
        }
export type GetProfilesByUserQueryHookResult = ReturnType<typeof useGetProfilesByUserQuery>;
export type GetProfilesByUserLazyQueryHookResult = ReturnType<typeof useGetProfilesByUserLazyQuery>;
export type GetProfilesByUserSuspenseQueryHookResult = ReturnType<typeof useGetProfilesByUserSuspenseQuery>;
export type GetProfilesByUserQueryResult = Apollo.QueryResult<GetProfilesByUserQuery, GetProfilesByUserQueryVariables>;
export const GetRelatedLoanProductListDocument = gql`
    query GetRelatedLoanProductList($loanProductId: Long!) {
  getRelatedLoanProductList(loanProductId: $loanProductId) {
    loanProductId
    productName
    minInterestRate
    maxInterestRate
    maxLoanLimitAmount
  }
}
    `;

/**
 * __useGetRelatedLoanProductListQuery__
 *
 * To run a query within a React component, call `useGetRelatedLoanProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRelatedLoanProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRelatedLoanProductListQuery({
 *   variables: {
 *      loanProductId: // value for 'loanProductId'
 *   },
 * });
 */
export function useGetRelatedLoanProductListQuery(baseOptions: Apollo.QueryHookOptions<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables> & ({ variables: GetRelatedLoanProductListQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>(GetRelatedLoanProductListDocument, options);
      }
export function useGetRelatedLoanProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>(GetRelatedLoanProductListDocument, options);
        }
export function useGetRelatedLoanProductListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>(GetRelatedLoanProductListDocument, options);
        }
export type GetRelatedLoanProductListQueryHookResult = ReturnType<typeof useGetRelatedLoanProductListQuery>;
export type GetRelatedLoanProductListLazyQueryHookResult = ReturnType<typeof useGetRelatedLoanProductListLazyQuery>;
export type GetRelatedLoanProductListSuspenseQueryHookResult = ReturnType<typeof useGetRelatedLoanProductListSuspenseQuery>;
export type GetRelatedLoanProductListQueryResult = Apollo.QueryResult<GetRelatedLoanProductListQuery, GetRelatedLoanProductListQueryVariables>;
export const RefreshDocument = gql`
    mutation Refresh {
  refresh {
    accessToken
  }
}
    `;
export type RefreshMutationFn = Apollo.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: Apollo.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input) {
    accessToken
    dateOfBirth
    email
    gender
    userId
    username
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    profileId
    profileName
    profileColor
    occupation
    creditGradeStatus
    desiredLoanAmount
    loanProductUsageCount
    purposeOfLoan
    totalLoanUsageAmount
    profileSeq
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateProfileColorDocument = gql`
    mutation UpdateProfileColor($input: UpdateProfileColorInput!) {
  updateProfileColor(input: $input) {
    profileId
    profileColor
  }
}
    `;
export type UpdateProfileColorMutationFn = Apollo.MutationFunction<UpdateProfileColorMutation, UpdateProfileColorMutationVariables>;

/**
 * __useUpdateProfileColorMutation__
 *
 * To run a mutation, you first call `useUpdateProfileColorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileColorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileColorMutation, { data, loading, error }] = useUpdateProfileColorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileColorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileColorMutation, UpdateProfileColorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileColorMutation, UpdateProfileColorMutationVariables>(UpdateProfileColorDocument, options);
      }
export type UpdateProfileColorMutationHookResult = ReturnType<typeof useUpdateProfileColorMutation>;
export type UpdateProfileColorMutationResult = Apollo.MutationResult<UpdateProfileColorMutation>;
export type UpdateProfileColorMutationOptions = Apollo.BaseMutationOptions<UpdateProfileColorMutation, UpdateProfileColorMutationVariables>;
export const UpdateProfileSequenceDocument = gql`
    mutation UpdateProfileSequence($input: [UpdateProfileSequenceInput]!) {
  updateProfileSequence(input: $input) {
    profileId
    profileSeq
  }
}
    `;
export type UpdateProfileSequenceMutationFn = Apollo.MutationFunction<UpdateProfileSequenceMutation, UpdateProfileSequenceMutationVariables>;

/**
 * __useUpdateProfileSequenceMutation__
 *
 * To run a mutation, you first call `useUpdateProfileSequenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileSequenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileSequenceMutation, { data, loading, error }] = useUpdateProfileSequenceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileSequenceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileSequenceMutation, UpdateProfileSequenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileSequenceMutation, UpdateProfileSequenceMutationVariables>(UpdateProfileSequenceDocument, options);
      }
export type UpdateProfileSequenceMutationHookResult = ReturnType<typeof useUpdateProfileSequenceMutation>;
export type UpdateProfileSequenceMutationResult = Apollo.MutationResult<UpdateProfileSequenceMutation>;
export type UpdateProfileSequenceMutationOptions = Apollo.BaseMutationOptions<UpdateProfileSequenceMutation, UpdateProfileSequenceMutationVariables>;