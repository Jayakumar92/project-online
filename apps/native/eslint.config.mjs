// eslint.config.mjs
import { reactNativeConfig } from '@repo/config-eslint/react-native';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...reactNativeConfig,
  { ignores: ['metro.config.js', 'babel.config.js', 'expo-env.d.ts', '.expo/'] },
  { files: ['tailwind.config.ts'], rules: { '@typescript-eslint/no-require-imports': 'off' } },
];
