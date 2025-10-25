import { libraryConfig } from "@repo/eslint-config/library";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["apps/**", "packages/**", "dist/**", "node_modules/**"],
  },
  ...libraryConfig,
  {
    parser: tsParser,
    parserOptions: {
      project: true,
    },
  },
  {
    rules: {
      // we generally use this in isFunction, not via calling
      "@typescript-eslint/unbound-method": "off",
    },
  },
];
