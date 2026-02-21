import '../global.css';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { vars } from 'nativewind';
import { useAppStore } from '@repo/store/useAppStore';
import { generateNavTheme, generateNativeVars } from '@repo/brand/generators';
import { brand } from '@repo/brand/loader';
import { ThemeProvider, DefaultTheme, DarkTheme } from '@react-navigation/native';

// Compute themes once from the current brand config (resolved via EXPO_PUBLIC_BRAND).
const navTheme = generateNavTheme(brand);
const brandVars = generateNativeVars(brand);

export default function RootLayout() {
  const { theme } = useAppStore();
  const isDark = theme === 'dark';
  const navigationTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: isDark ? navTheme.dark : navTheme.light,
  };

  return (
    <View style={[{ flex: 1 }, vars(isDark ? brandVars.dark : brandVars.light)]}>
      <ThemeProvider value={navigationTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ title: brand.meta.displayName }} />
        </Stack>
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </ThemeProvider>
    </View>
  );
}
