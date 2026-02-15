import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/core', '@repo/store', '@repo/brand', '@repo/ui-shadcn'],
};

export default nextConfig;
