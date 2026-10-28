import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/dashboard/projects',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
