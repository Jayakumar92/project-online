import globals from 'globals';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import tseslint from 'typescript-eslint';
import { config as baseConfig } from './base.js';
import { tsRules } from './shared-rules.js';

/**
 * A custom ESLint configuration for Nest.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nestJsConfig = [
  // 1. Base Configuration (Should be loaded first)
  ...baseConfig,
  // 2. Core ESLint Recommended Rules
  js.configs.recommended,

  // 3. TypeScript Recommended Rules
  ...tseslint.configs.recommended,

  // 4. Prettier Base Configs (Must come before the final rules block)
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ignores: ['**/*.config.mjs', 'prettier.config.mjs'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      ...tsRules,
    },
  },
];
