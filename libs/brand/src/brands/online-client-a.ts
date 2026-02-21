import type { BrandConfig } from '../types';
import { onlineDefaultBrand } from './online-default';

/**
 * White-label brand for SaaS tenant "Client A".
 * Extends the online-default brand and overrides only the differentiating tokens.
 *
 * Build with: NEXT_PUBLIC_BRAND=online-client-a pnpm nx run online-admin:build
 */
export const onlineClientABrand: BrandConfig = {
  ...onlineDefaultBrand,
  id: 'online-client-a',
  project: 'online',
  meta: {
    name: 'online-client-a',
    displayName: 'Acme Corp',
    description: 'White-label brand for Acme Corp',
  },
  colors: {
    ...onlineDefaultBrand.colors,
    // Orange/amber primary palette for Acme Corp
    primary: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    ring: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarRing: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
  },
  flags: {
    enableChat: false, // Acme Corp does not require chat support
    enableAnalytics: true,
    enableNotifications: true,
  },
  radius: '0.25rem', // Acme Corp prefers sharper corners
};
