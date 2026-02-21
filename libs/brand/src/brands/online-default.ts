import type { BrandConfig } from '../types';
import { defaultBrand } from './default';

export const onlineDefaultBrand: BrandConfig = {
  ...defaultBrand,
  id: 'online-default',
  project: 'online',
  meta: {
    name: 'online-default',
    displayName: 'Online Platform',
    description: 'Default brand for the online product',
  },
  colors: {
    ...defaultBrand.colors,
    // Teal/green primary palette for the online product
    primary: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    ring: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarRing: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
  },
  flags: {
    enableChat: true,
    enableAnalytics: true,
    enableNotifications: true,
  },
  radius: '0.5rem',
};
