export type ColorToken = {
  oklch: string;
  hsl: string;
};

export type ThemedColor = {
  light: ColorToken;
  dark: ColorToken;
};

export type BrandColors = {
  background: ThemedColor;
  foreground: ThemedColor;
  card: ThemedColor;
  cardForeground: ThemedColor;
  popover: ThemedColor;
  popoverForeground: ThemedColor;
  primary: ThemedColor;
  primaryForeground: ThemedColor;
  secondary: ThemedColor;
  secondaryForeground: ThemedColor;
  muted: ThemedColor;
  mutedForeground: ThemedColor;
  accent: ThemedColor;
  accentForeground: ThemedColor;
  destructive: ThemedColor;
  destructiveForeground: ThemedColor;
  border: ThemedColor;
  input: ThemedColor;
  ring: ThemedColor;
  chart1: ThemedColor;
  chart2: ThemedColor;
  chart3: ThemedColor;
  chart4: ThemedColor;
  chart5: ThemedColor;
  sidebar: ThemedColor;
  sidebarForeground: ThemedColor;
  sidebarPrimary: ThemedColor;
  sidebarPrimaryForeground: ThemedColor;
  sidebarAccent: ThemedColor;
  sidebarAccentForeground: ThemedColor;
  sidebarBorder: ThemedColor;
  sidebarRing: ThemedColor;
};

export type BrandMeta = {
  name: string;
  displayName: string;
  description: string;
};

export type BrandFlags = {
  enableChat: boolean;
  enableAnalytics: boolean;
  enableNotifications: boolean;
};

export type BrandConfig = {
  id: BrandId;
  meta: BrandMeta;
  colors: BrandColors;
  flags: BrandFlags;
  radius: string;
};

export type BrandId = 'default' | 'example';
