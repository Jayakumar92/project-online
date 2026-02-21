import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/core', '@repo/store', '@repo/brand', '@repo/ui-shadcn'],
  env: {
    NEXT_PUBLIC_PROJECT: 'online',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
