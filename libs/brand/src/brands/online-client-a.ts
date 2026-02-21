import type { BrandConfig } from '../types';

/**
 * White-label brand for SaaS tenant "Client A" (Acme Corp).
 * Full warm amber/orange palette — visually distinct from online-default's teal theme.
 *
 * Build with: NEXT_PUBLIC_BRAND=online-client-a pnpm nx run online-admin:build
 */
export const onlineClientABrand: BrandConfig = {
  id: 'online-client-a',
  project: 'online',
  meta: {
    name: 'online-client-a',
    displayName: 'Acme Corp',
    description: 'White-label brand for Acme Corp',
  },
  colors: {
    background: {
      light: { oklch: 'oklch(0.99 0.005 70)', hsl: '40 30% 98%' },
      dark: { oklch: 'oklch(0.16 0.01 50)', hsl: '30 20% 6%' },
    },
    foreground: {
      light: { oklch: 'oklch(0.18 0.02 50)', hsl: '30 30% 8%' },
      dark: { oklch: 'oklch(0.97 0.005 70)', hsl: '40 20% 96%' },
    },
    card: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.20 0.01 50)', hsl: '30 15% 9%' },
    },
    cardForeground: {
      light: { oklch: 'oklch(0.18 0.02 50)', hsl: '30 30% 8%' },
      dark: { oklch: 'oklch(0.97 0.005 70)', hsl: '40 20% 96%' },
    },
    popover: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.20 0.01 50)', hsl: '30 15% 9%' },
    },
    popoverForeground: {
      light: { oklch: 'oklch(0.18 0.02 50)', hsl: '30 30% 8%' },
      dark: { oklch: 'oklch(0.97 0.005 70)', hsl: '40 20% 96%' },
    },
    primary: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    secondary: {
      light: { oklch: 'oklch(0.96 0.015 60)', hsl: '35 40% 93%' },
      dark: { oklch: 'oklch(0.27 0.02 50)', hsl: '30 20% 16%' },
    },
    secondaryForeground: {
      light: { oklch: 'oklch(0.25 0.03 50)', hsl: '30 40% 12%' },
      dark: { oklch: 'oklch(0.96 0.015 60)', hsl: '35 30% 93%' },
    },
    muted: {
      light: { oklch: 'oklch(0.96 0.01 55)', hsl: '35 25% 94%' },
      dark: { oklch: 'oklch(0.27 0.015 50)', hsl: '30 15% 16%' },
    },
    mutedForeground: {
      light: { oklch: 'oklch(0.55 0.03 50)', hsl: '25 15% 46%' },
      dark: { oklch: 'oklch(0.70 0.03 55)', hsl: '30 15% 63%' },
    },
    accent: {
      light: { oklch: 'oklch(0.94 0.03 55)', hsl: '35 50% 92%' },
      dark: { oklch: 'oklch(0.32 0.03 50)', hsl: '30 25% 18%' },
    },
    accentForeground: {
      light: { oklch: 'oklch(0.25 0.03 50)', hsl: '30 40% 12%' },
      dark: { oklch: 'oklch(0.96 0.015 60)', hsl: '35 30% 93%' },
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
      light: { oklch: 'oklch(0.91 0.02 55)', hsl: '35 25% 87%' },
      dark: { oklch: 'oklch(0.30 0.02 50)', hsl: '30 15% 20%' },
    },
    input: {
      light: { oklch: 'oklch(0.91 0.02 55)', hsl: '35 25% 87%' },
      dark: { oklch: 'oklch(0.30 0.02 50)', hsl: '30 15% 20%' },
    },
    ring: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    chart1: {
      light: { oklch: 'oklch(0.70 0.16 50)', hsl: '25 75% 55%' },
      dark: { oklch: 'oklch(0.70 0.16 50)', hsl: '25 75% 55%' },
    },
    chart2: {
      light: { oklch: 'oklch(0.65 0.14 70)', hsl: '40 65% 50%' },
      dark: { oklch: 'oklch(0.65 0.14 70)', hsl: '40 65% 50%' },
    },
    chart3: {
      light: { oklch: 'oklch(0.60 0.12 90)', hsl: '50 55% 45%' },
      dark: { oklch: 'oklch(0.60 0.12 90)', hsl: '50 55% 45%' },
    },
    chart4: {
      light: { oklch: 'oklch(0.55 0.10 30)', hsl: '15 50% 42%' },
      dark: { oklch: 'oklch(0.55 0.10 30)', hsl: '15 50% 42%' },
    },
    chart5: {
      light: { oklch: 'oklch(0.50 0.08 10)', hsl: '5 45% 38%' },
      dark: { oklch: 'oklch(0.50 0.08 10)', hsl: '5 45% 38%' },
    },
    sidebar: {
      light: { oklch: 'oklch(0.97 0.01 55)', hsl: '35 30% 96%' },
      dark: { oklch: 'oklch(0.19 0.015 50)', hsl: '30 20% 8%' },
    },
    sidebarForeground: {
      light: { oklch: 'oklch(0.18 0.02 50)', hsl: '30 30% 8%' },
      dark: { oklch: 'oklch(0.97 0.005 70)', hsl: '40 20% 96%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarAccent: {
      light: { oklch: 'oklch(0.94 0.03 55)', hsl: '35 50% 92%' },
      dark: { oklch: 'oklch(0.27 0.02 50)', hsl: '30 20% 16%' },
    },
    sidebarAccentForeground: {
      light: { oklch: 'oklch(0.25 0.03 50)', hsl: '30 40% 12%' },
      dark: { oklch: 'oklch(0.96 0.015 60)', hsl: '35 30% 93%' },
    },
    sidebarBorder: {
      light: { oklch: 'oklch(0.91 0.02 55)', hsl: '35 25% 87%' },
      dark: { oklch: 'oklch(0.30 0.02 50)', hsl: '30 15% 20%' },
    },
    sidebarRing: {
      light: { oklch: 'oklch(0.65 0.18 50)', hsl: '25 85% 55%' },
      dark: { oklch: 'oklch(0.72 0.18 50)', hsl: '25 85% 62%' },
    },
  },
  flags: {
    enableChat: false,
    enableAnalytics: true,
    enableNotifications: true,
  },
  radius: '0.25rem',
};
