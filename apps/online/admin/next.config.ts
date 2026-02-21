import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // All @repo/* packages must be transpiled (source-direct, no build step).
  // Keep this list in sync with package.json dependencies.
  transpilePackages: [
    '@repo/core',
    '@repo/utils',
    '@repo/store',
    '@repo/services',
    '@repo/brand',
    '@repo/ui-shadcn',
  ],
  // Bake the project namespace into the build.
  // Brand loader resolves: NEXT_PUBLIC_BRAND > NEXT_PUBLIC_PROJECT > 'default'
  // Override NEXT_PUBLIC_BRAND in CI/CD for white-label tenant builds.
  env: {
    NEXT_PUBLIC_PROJECT: 'online',
  },
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
