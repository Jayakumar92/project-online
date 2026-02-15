// eslint.config.mjs (or the file where nextJsConfig is defined)

import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import pluginNext from '@next/eslint-plugin-next';
import { config as baseConfig } from './base.js';
import pluginImport from 'eslint-plugin-import';

import { sharedRules } from './shared-rules.js';

/**
 * A custom ESLint configuration for Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
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
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },

  // 7. 🎯 Final Consolidated Rules (Next.js + React + Custom)
  // This object includes all necessary plugins and applies all rules and overrides.
  {
    plugins: {
      '@next/next': pluginNext,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // 1. Load Next.js rule sets first
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,

      // 2. Load your custom rules/overrides last to ensure precedence
      ...sharedRules,
    },
  },
];
