import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import pluginNext from '@next/eslint-plugin-next'
import { config as baseConfig } from './base.js'

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig, // 기본 설정을 상속
  js.configs.recommended, // ESLint의 기본 권장 설정
  eslintConfigPrettier, // Prettier와의 통합
  ...tseslint.configs.recommended, // TypeScript 권장 설정
  {
    ...pluginReact.configs.flat.recommended, // React 관련 권장 설정
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker, // 서비스워커 글로벌 설정
      },
    },
  },
  {
    plugins: {
      '@next/next': pluginNext, // Next.js 플러그인
    },
    rules: {
      ...pluginNext.configs.recommended.rules, // Next.js 권장 규칙
      ...pluginNext.configs['core-web-vitals'].rules, // Core Web Vitals 규칙
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks, // React hooks 플러그인
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules, // React Hooks 규칙
      'react/react-in-jsx-scope': 'off', // 새로운 JSX 변환에서는 `React`가 스코프에 있을 필요 없음
    },
  },
  {
    parser: '@typescript-eslint/parser', // TypeScript 파서 사용
    plugins: ['@typescript-eslint', 'unused-imports', 'simple-import-sort'], // TypeScript와 기타 플러그인
    extends: [
      'next/core-web-vitals', // Next.js 기본 규칙
      'plugin:@typescript-eslint/recommended', // TypeScript 권장 규칙
      'plugin:jsx-a11y/recommended', // 접근성 관련 규칙
      'plugin:prettier/recommended', // Prettier와의 통합
      'plugin:storybook/recommended', // Storybook 규칙
      'plugin:tailwindcss/recommended', // TailwindCSS 관련 규칙
    ],
    rules: {
      'unused-imports/no-unused-imports': 'error', // 사용되지 않는 import 오류
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_', // `_`로 시작하는 변수는 무시
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'no-duplicate-imports': 'off', // 중복된 import 허용
      'import/newline-after-import': 'warn', // import 후 줄바꿈 경고
      '@typescript-eslint/consistent-type-imports': 'error', // 일관된 타입 import 규칙
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '_',
          varsIgnorePattern: '_',
        },
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react', '^next', '^@?\\w'], // 외부 라이브러리 및 패키지
            ['@/(.*)'], // 애플리케이션 내에서 절대 경로 import
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // 부모 디렉터리로의 상대 경로
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // 동일 디렉터리 내의 상대 경로
          ],
        },
      ],
      'simple-import-sort/exports': 'warn', // export 정렬 경고
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto', // 줄 끝 문자가 자동으로 설정되도록
        },
      ],
    },
  },
]
