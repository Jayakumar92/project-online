import type { BrandConfig } from '../types';
import { onlineDefaultBrand } from './online-default';

/**
 * White-label brand for SaaS tenant "Client B".
 * Extends the online-default brand and overrides only the differentiating tokens.
 *
 * Build with: NEXT_PUBLIC_BRAND=online-client-b pnpm nx run online-admin:build
 */
export const onlineClientBBrand: BrandConfig = {
  ...onlineDefaultBrand,
  id: 'online-client-b',
  project: 'online',
  meta: {
    name: 'online-client-b',
    displayName: 'Beta Industries',
    description: 'White-label brand for Beta Industries',
  },
  colors: {
    ...onlineDefaultBrand.colors,
    // Violet/purple primary palette for Beta Industries
    primary: {
      light: { oklch: 'oklch(0.55 0.22 290)', hsl: '270 75% 50%' },
      dark: { oklch: 'oklch(0.65 0.22 290)', hsl: '270 75% 60%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    ring: {
      light: { oklch: 'oklch(0.55 0.22 290)', hsl: '270 75% 50%' },
      dark: { oklch: 'oklch(0.65 0.22 290)', hsl: '270 75% 60%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.55 0.22 290)', hsl: '270 75% 50%' },
      dark: { oklch: 'oklch(0.65 0.22 290)', hsl: '270 75% 60%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarRing: {
      light: { oklch: 'oklch(0.55 0.22 290)', hsl: '270 75% 50%' },
      dark: { oklch: 'oklch(0.65 0.22 290)', hsl: '270 75% 60%' },
    },
  },
  flags: {
    enableChat: true,
    enableAnalytics: false, // Beta Industries uses their own analytics stack
    enableNotifications: true,
  },
  radius: '0.75rem',
};
