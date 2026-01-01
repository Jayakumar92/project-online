import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/core', '@repo/store'],
};

export default nextConfig;
