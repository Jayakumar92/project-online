import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAppStore } from '@repo/store/useAppStore';
import { generateNavTheme } from '@repo/brand/generators';
import { brand } from '@repo/brand/loader';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';

// Compute the React Navigation theme once from the current brand config.
const navTheme = generateNavTheme(brand);

export default function RootLayout() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';
  const navigationTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: isDark ? navTheme.dark : navTheme.light,
  };

  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: brand.meta.displayName }} />
      </Stack>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
