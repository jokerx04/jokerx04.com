import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /*
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard/projects',
        permanent: false,
      },
    ]
  },
  */
  
  // 정적 내보내기(GitHub Pages 배포용)
  output: 'export',
  images: {
    unoptimized: true,
  },

  // Turbopack 루트 경로 명시
  turbopack: {
    root: __dirname,
  },

  // 템플릿 외부 라이브러리 타입 에러 무시
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
