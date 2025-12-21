import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import { config as baseConfig } from './base.js';
import pluginImport from 'eslint-plugin-import';
import pluginExpo from 'eslint-plugin-expo';
import pluginReactNative from 'eslint-plugin-react-native';

import { sharedRules } from './shared-rules.js';

/**
 * A custom ESLint configuration for Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const reactJsConfig = [
  // 1. Base Configuration (Should be loaded first)
  ...baseConfig,

  // 2. Core ESLint Recommended Rules
  js.configs.recommended,

  // 3. TypeScript Recommended Rules
  ...tseslint.configs.recommended,

  // 4. Prettier Base Configs (Must come before the final rules block)
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,

  // 5. React Plugin Configuration
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser, // Added browser globals for React components
      },
    },
    plugins: { react: pluginReact },
  },

  // 6. React Hooks Configuration
  {
    plugins: { 'react-hooks': pluginReactHooks },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Generally needed for Next.js
    },
  },

  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'react-native': pluginReactNative,
      expo: pluginExpo,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactNative.configs.all.rules,

      // 1. Load Next.js rule sets first

      // 2. Load your custom rules/overrides last to ensure precedence
      ...sharedRules,
    },
  },
];
