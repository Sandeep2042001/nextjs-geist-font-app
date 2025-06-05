import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  allowedDevOrigins: ['4ctsw7-8000.csb.app'],
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
