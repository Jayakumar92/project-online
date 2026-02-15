import { reactNativeConfig } from '@repo/config-eslint/react-native';

export default [
  ...reactNativeConfig,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];
