import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import tseslint from "typescript-eslint";
import { config as baseConfig } from "./base.js";
import pluginImport from "eslint-plugin-import";

import { tsRules } from "./shared-rules.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const tsBaseConfig = [
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
    plugins: {
      import: pluginImport,
    },
    rules: {
      // 2. Load your custom rules/overrides last to ensure precedence
      ...tsRules,
    },
  },
];
