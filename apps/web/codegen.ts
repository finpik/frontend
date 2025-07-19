import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/gql/schema.graphql', // introspection된 전체 스키마
  documents: './src/**/*.{graphql,gql}', // 모든 쿼리/뮤테이션 경로

  generates: {
    './src/gql/graphql.ts': {
      plugins: [
        'typescript', // Scalar, Object 등 기본 타입
        'typescript-operations', // 쿼리, 뮤테이션 관련 타입
        'typescript-react-apollo', // useQuery, useMutation 등 React 훅
      ],
      config: {
        withHooks: true, // React 훅 생성
        withComponent: false,
        withHOC: false,
      },
    },
  },
}

export default config
