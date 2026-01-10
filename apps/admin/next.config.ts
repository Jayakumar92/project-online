import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@repo/core',
    '@repo/utils',
    '@repo/store',
    '@repo/services',
    '@repo/features',
    '@repo/ui/shadcn',
  ],
};

export default nextConfig;
