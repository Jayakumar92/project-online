import type { BrandConfig } from '../types';

export const onlineDefaultBrand: BrandConfig = {
  id: 'online-default',
  project: 'online',
  meta: {
    name: 'online-default',
    displayName: 'Online Platform',
    description: 'Default brand for the online product',
  },
  colors: {
    background: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.145 0 0)', hsl: '240 10% 3.9%' },
    },
    foreground: {
      light: { oklch: 'oklch(0.145 0 0)', hsl: '240 10% 3.9%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    card: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.205 0 0)', hsl: '240 10% 3.9%' },
    },
    cardForeground: {
      light: { oklch: 'oklch(0.145 0 0)', hsl: '240 10% 3.9%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    popover: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.205 0 0)', hsl: '240 10% 3.9%' },
    },
    popoverForeground: {
      light: { oklch: 'oklch(0.145 0 0)', hsl: '240 10% 3.9%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    primary: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    secondary: {
      light: { oklch: 'oklch(0.97 0 0)', hsl: '240 4.8% 95.9%' },
      dark: { oklch: 'oklch(0.269 0 0)', hsl: '240 3.7% 15.9%' },
    },
    secondaryForeground: {
      light: { oklch: 'oklch(0.205 0 0)', hsl: '240 5.9% 10%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    muted: {
      light: { oklch: 'oklch(0.97 0 0)', hsl: '240 4.8% 95.9%' },
      dark: { oklch: 'oklch(0.269 0 0)', hsl: '240 3.7% 15.9%' },
    },
    mutedForeground: {
      light: { oklch: 'oklch(0.556 0 0)', hsl: '240 3.8% 46.1%' },
      dark: { oklch: 'oklch(0.708 0 0)', hsl: '240 5% 64.9%' },
    },
    accent: {
      light: { oklch: 'oklch(0.97 0 0)', hsl: '240 4.8% 95.9%' },
      dark: { oklch: 'oklch(0.371 0 0)', hsl: '240 3.7% 15.9%' },
    },
    accentForeground: {
      light: { oklch: 'oklch(0.205 0 0)', hsl: '240 5.9% 10%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    destructive: {
      light: { oklch: 'oklch(0.58 0.22 27)', hsl: '0 84.2% 60.2%' },
      dark: { oklch: 'oklch(0.704 0.191 22.216)', hsl: '0 62.8% 30.6%' },
    },
    destructiveForeground: {
      light: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    border: {
      light: { oklch: 'oklch(0.922 0 0)', hsl: '240 5.9% 90%' },
      dark: { oklch: 'oklch(1 0 0 / 10%)', hsl: '240 3.7% 15.9%' },
    },
    input: {
      light: { oklch: 'oklch(0.922 0 0)', hsl: '240 5.9% 90%' },
      dark: { oklch: 'oklch(1 0 0 / 15%)', hsl: '240 3.7% 15.9%' },
    },
    ring: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    chart1: {
      light: { oklch: 'oklch(0.809 0.105 251.813)', hsl: '220 70% 50%' },
      dark: { oklch: 'oklch(0.809 0.105 251.813)', hsl: '220 70% 50%' },
    },
    chart2: {
      light: { oklch: 'oklch(0.623 0.214 259.815)', hsl: '240 60% 45%' },
      dark: { oklch: 'oklch(0.623 0.214 259.815)', hsl: '240 60% 45%' },
    },
    chart3: {
      light: { oklch: 'oklch(0.546 0.245 262.881)', hsl: '250 55% 40%' },
      dark: { oklch: 'oklch(0.546 0.245 262.881)', hsl: '250 55% 40%' },
    },
    chart4: {
      light: { oklch: 'oklch(0.488 0.243 264.376)', hsl: '255 50% 35%' },
      dark: { oklch: 'oklch(0.488 0.243 264.376)', hsl: '255 50% 35%' },
    },
    chart5: {
      light: { oklch: 'oklch(0.424 0.199 265.638)', hsl: '260 45% 30%' },
      dark: { oklch: 'oklch(0.424 0.199 265.638)', hsl: '260 45% 30%' },
    },
    sidebar: {
      light: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.205 0 0)', hsl: '240 5.9% 10%' },
    },
    sidebarForeground: {
      light: { oklch: 'oklch(0.145 0 0)', hsl: '240 10% 3.9%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.55 0.18 175)', hsl: '168 72% 42%' },
      dark: { oklch: 'oklch(0.65 0.18 175)', hsl: '168 72% 52%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarAccent: {
      light: { oklch: 'oklch(0.97 0 0)', hsl: '240 4.8% 95.9%' },
      dark: { oklch: 'oklch(0.269 0 0)', hsl: '240 3.7% 15.9%' },
    },
    sidebarAccentForeground: {
      light: { oklch: 'oklch(0.205 0 0)', hsl: '240 5.9% 10%' },
      dark: { oklch: 'oklch(0.985 0 0)', hsl: '0 0% 98%' },
    },
    sidebarBorder: {
      light: { oklch: 'oklch(0.922 0 0)', hsl: '240 5.9% 90%' },
      dark: { oklch: 'oklch(1 0 0 / 10%)', hsl: '240 3.7% 15.9%' },
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
