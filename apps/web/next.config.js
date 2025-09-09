/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/', // 루트 URL로 접근 시
        destination: '/loan/results', // /results로 리디렉트
        permanent: false, // 302 임시 리다이렉트 (true면 308 permanent)
      },
    ]
  },
}

export default nextConfig
