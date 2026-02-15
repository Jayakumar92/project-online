import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@repo/core',
    '@repo/utils',
    '@repo/store',
    '@repo/services',
    '@repo/features',
    '@repo/brand',
    '@repo/ui-shadcn',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

export default nextConfig;
