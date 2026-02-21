import type { BrandConfig, BrandColors, ThemedColor } from './types';

const COLOR_CSS_MAP: Record<keyof BrandColors, string> = {
  background: 'background',
  foreground: 'foreground',
  card: 'card',
  cardForeground: 'card-foreground',
  popover: 'popover',
  popoverForeground: 'popover-foreground',
  primary: 'primary',
  primaryForeground: 'primary-foreground',
  secondary: 'secondary',
  secondaryForeground: 'secondary-foreground',
  muted: 'muted',
  mutedForeground: 'muted-foreground',
  accent: 'accent',
  accentForeground: 'accent-foreground',
  destructive: 'destructive',
  destructiveForeground: 'destructive-foreground',
  border: 'border',
  input: 'input',
  ring: 'ring',
  chart1: 'chart-1',
  chart2: 'chart-2',
  chart3: 'chart-3',
  chart4: 'chart-4',
  chart5: 'chart-5',
  sidebar: 'sidebar',
  sidebarForeground: 'sidebar-foreground',
  sidebarPrimary: 'sidebar-primary',
  sidebarPrimaryForeground: 'sidebar-primary-foreground',
  sidebarAccent: 'sidebar-accent',
  sidebarAccentForeground: 'sidebar-accent-foreground',
  sidebarBorder: 'sidebar-border',
  sidebarRing: 'sidebar-ring',
};

function formatColorEntries(
  colors: BrandColors,
  mode: 'light' | 'dark',
  format: 'oklch' | 'hsl',
): string {
  return Object.entries(COLOR_CSS_MAP)
    .map(([key, cssVar]) => {
      const themed = colors[key as keyof BrandColors] as ThemedColor;
      return `  --${cssVar}: ${themed[mode][format]};`;
    })
    .join('\n');
}

export function generateWebTokensCss(config: BrandConfig): string {
  const lightVars = formatColorEntries(config.colors, 'light', 'oklch');
  const darkVars = formatColorEntries(config.colors, 'dark', 'oklch');

  return `:root {
${lightVars}
  --radius: ${config.radius};
}

.dark {
${darkVars}
}
`;
}

export function generateNativeTokensCss(config: BrandConfig): string {
  const lightVars = formatColorEntries(config.colors, 'light', 'hsl');
  const darkVars = formatColorEntries(config.colors, 'dark', 'hsl');

  return `@layer base {
  :root {
${lightVars.replace(/^/gm, '  ')}
  }

  .dark {
${darkVars.replace(/^/gm, '  ')}
  }
}
`;
}

export type NavTheme = {
  light: {
    background: string;
    border: string;
    card: string;
    notification: string;
    primary: string;
    text: string;
  };
  dark: {
    background: string;
    border: string;
    card: string;
    notification: string;
    primary: string;
    text: string;
  };
};

export type NativeVars = {
  light: Record<string, string>;
  dark: Record<string, string>;
};

export function generateNativeVars(config: BrandConfig): NativeVars {
  const toVars = (mode: 'light' | 'dark') => {
    const vars: Record<string, string> = {};
    for (const [key, cssVar] of Object.entries(COLOR_CSS_MAP)) {
      const themed = config.colors[key as keyof BrandColors] as ThemedColor;
      vars[`--${cssVar}`] = themed[mode].hsl;
    }
    vars['--radius'] = config.radius;
    return vars;
  };

  return { light: toVars('light'), dark: toVars('dark') };
}

export function generateNavTheme(config: BrandConfig): NavTheme {
  const { colors } = config;
  return {
    light: {
      background: `hsl(${colors.background.light.hsl})`,
      border: `hsl(${colors.border.light.hsl})`,
      card: `hsl(${colors.card.light.hsl})`,
      notification: `hsl(${colors.destructive.light.hsl})`,
      primary: `hsl(${colors.primary.light.hsl})`,
      text: `hsl(${colors.foreground.light.hsl})`,
    },
    dark: {
      background: `hsl(${colors.background.dark.hsl})`,
      border: `hsl(${colors.border.dark.hsl})`,
      card: `hsl(${colors.card.dark.hsl})`,
      notification: `hsl(${colors.destructive.dark.hsl})`,
      primary: `hsl(${colors.primary.dark.hsl})`,
      text: `hsl(${colors.foreground.dark.hsl})`,
    },
  };
}
