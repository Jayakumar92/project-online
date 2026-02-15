import type { BrandConfig } from '../types';

export const exampleBrand: BrandConfig = {
  id: 'example',
  meta: {
    name: 'example',
    displayName: 'Example',
    description: 'Example brand with blue/indigo palette',
  },
  colors: {
    background: {
      light: { oklch: 'oklch(0.99 0.005 250)', hsl: '220 33% 98%' },
      dark: { oklch: 'oklch(0.17 0.02 260)', hsl: '222 47% 11%' },
    },
    foreground: {
      light: { oklch: 'oklch(0.17 0.02 260)', hsl: '222 47% 11%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    card: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.22 0.025 260)', hsl: '222 47% 15%' },
    },
    cardForeground: {
      light: { oklch: 'oklch(0.17 0.02 260)', hsl: '222 47% 11%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    popover: {
      light: { oklch: 'oklch(1 0 0)', hsl: '0 0% 100%' },
      dark: { oklch: 'oklch(0.22 0.025 260)', hsl: '222 47% 15%' },
    },
    popoverForeground: {
      light: { oklch: 'oklch(0.17 0.02 260)', hsl: '222 47% 11%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    primary: {
      light: { oklch: 'oklch(0.55 0.2 260)', hsl: '221 83% 53%' },
      dark: { oklch: 'oklch(0.65 0.2 260)', hsl: '217 91% 60%' },
    },
    primaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '210 40% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '210 40% 98%' },
    },
    secondary: {
      light: { oklch: 'oklch(0.95 0.01 250)', hsl: '210 40% 96%' },
      dark: { oklch: 'oklch(0.27 0.025 260)', hsl: '217 33% 17%' },
    },
    secondaryForeground: {
      light: { oklch: 'oklch(0.25 0.02 260)', hsl: '222 47% 14%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    muted: {
      light: { oklch: 'oklch(0.95 0.01 250)', hsl: '210 40% 96%' },
      dark: { oklch: 'oklch(0.27 0.025 260)', hsl: '217 33% 17%' },
    },
    mutedForeground: {
      light: { oklch: 'oklch(0.55 0.02 250)', hsl: '215 16% 47%' },
      dark: { oklch: 'oklch(0.7 0.02 250)', hsl: '215 20% 65%' },
    },
    accent: {
      light: { oklch: 'oklch(0.93 0.02 250)', hsl: '210 40% 93%' },
      dark: { oklch: 'oklch(0.3 0.03 260)', hsl: '217 33% 20%' },
    },
    accentForeground: {
      light: { oklch: 'oklch(0.25 0.02 260)', hsl: '222 47% 14%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
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
      light: { oklch: 'oklch(0.9 0.01 250)', hsl: '214 32% 91%' },
      dark: { oklch: 'oklch(0.3 0.025 260)', hsl: '217 33% 20%' },
    },
    input: {
      light: { oklch: 'oklch(0.9 0.01 250)', hsl: '214 32% 91%' },
      dark: { oklch: 'oklch(0.3 0.025 260)', hsl: '217 33% 20%' },
    },
    ring: {
      light: { oklch: 'oklch(0.55 0.2 260)', hsl: '221 83% 53%' },
      dark: { oklch: 'oklch(0.65 0.2 260)', hsl: '217 91% 60%' },
    },
    chart1: {
      light: { oklch: 'oklch(0.6 0.2 250)', hsl: '220 70% 50%' },
      dark: { oklch: 'oklch(0.6 0.2 250)', hsl: '220 70% 50%' },
    },
    chart2: {
      light: { oklch: 'oklch(0.55 0.22 270)', hsl: '250 65% 48%' },
      dark: { oklch: 'oklch(0.55 0.22 270)', hsl: '250 65% 48%' },
    },
    chart3: {
      light: { oklch: 'oklch(0.65 0.18 230)', hsl: '200 60% 50%' },
      dark: { oklch: 'oklch(0.65 0.18 230)', hsl: '200 60% 50%' },
    },
    chart4: {
      light: { oklch: 'oklch(0.5 0.2 280)', hsl: '270 55% 45%' },
      dark: { oklch: 'oklch(0.5 0.2 280)', hsl: '270 55% 45%' },
    },
    chart5: {
      light: { oklch: 'oklch(0.7 0.15 240)', hsl: '210 50% 55%' },
      dark: { oklch: 'oklch(0.7 0.15 240)', hsl: '210 50% 55%' },
    },
    sidebar: {
      light: { oklch: 'oklch(0.98 0.005 250)', hsl: '220 33% 97%' },
      dark: { oklch: 'oklch(0.2 0.025 260)', hsl: '222 47% 13%' },
    },
    sidebarForeground: {
      light: { oklch: 'oklch(0.17 0.02 260)', hsl: '222 47% 11%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    sidebarPrimary: {
      light: { oklch: 'oklch(0.55 0.2 260)', hsl: '221 83% 53%' },
      dark: { oklch: 'oklch(0.65 0.2 260)', hsl: '217 91% 60%' },
    },
    sidebarPrimaryForeground: {
      light: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
      dark: { oklch: 'oklch(0.98 0 0)', hsl: '0 0% 98%' },
    },
    sidebarAccent: {
      light: { oklch: 'oklch(0.93 0.02 250)', hsl: '210 40% 93%' },
      dark: { oklch: 'oklch(0.3 0.03 260)', hsl: '217 33% 20%' },
    },
    sidebarAccentForeground: {
      light: { oklch: 'oklch(0.25 0.02 260)', hsl: '222 47% 14%' },
      dark: { oklch: 'oklch(0.97 0.005 250)', hsl: '210 40% 98%' },
    },
    sidebarBorder: {
      light: { oklch: 'oklch(0.9 0.01 250)', hsl: '214 32% 91%' },
      dark: { oklch: 'oklch(0.3 0.025 260)', hsl: '217 33% 20%' },
    },
    sidebarRing: {
      light: { oklch: 'oklch(0.55 0.2 260)', hsl: '221 83% 53%' },
      dark: { oklch: 'oklch(0.65 0.2 260)', hsl: '217 91% 60%' },
    },
  },
  flags: {
    enableChat: true,
    enableAnalytics: false,
    enableNotifications: true,
  },
  radius: '0.5rem',
};
