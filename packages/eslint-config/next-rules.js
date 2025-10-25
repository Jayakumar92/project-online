export const sharedRules = {
  // Next.js Overrides
  "@next/next/no-img-element": "off",

  // Core JS/TS Rules
  "no-duplicate-imports": "error",
  "no-var": "error",
  "max-lines": [
    "error",
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  "no-unused-vars": "off", // handled by @typescript-eslint/no-unused-vars
  "no-console": [
    "error",
    {
      allow: ["warn", "error", "info"],
    },
  ],
  "no-debugger": "error",
  eqeqeq: ["error", "always"],
  "no-else-return": ["error", { allowElseIf: false }],
  "no-loop-func": "error",

  // React Rules
  "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
  "react/function-component-definition": [
    "error",
    { namedComponents: "function-declaration" },
  ],
  "react/jsx-boolean-value": ["error", "never"],
  "react/destructuring-assignment": ["error", "always"],
  "react/boolean-prop-naming": [
    "error",
    {
      rule: "^(is|has|show|have|allow)[A-Z][A-Za-z0-9]+",
    },
  ],
  "react/forbid-component-props": ["error", { forbid: ["class"] }],
  "react/forbid-dom-props": ["error", { forbid: ["class"] }],
  "react/forbid-elements": [
    "error",
    { forbid: ["br", "select", "a", "b", "img"] },
  ],
  "react/no-access-state-in-setstate": "error",
  "react/no-unused-prop-types": "error",
  "react/jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "always", propElementValues: "always" },
  ],
  "react/jsx-fragments": ["error", "element"],
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: false,
      allowNamespace: false,
      allowLeadingUnderscore: false,
    },
  ],
  "react/self-closing-comp": ["error", { component: true, html: true }],
  "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
  "react-hooks/exhaustive-deps": "off",
  "react/prop-types": "off", // redundant with TypeScript

  // TypeScript Rules
  "@typescript-eslint/no-shadow": "error",
  "no-shadow": "off",
  "no-undef": "off",
  "no-useless-computed-key": "error",
  "no-useless-rename": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
  "prefer-const": "error",
  "prefer-numeric-literals": "warn",
  "prefer-rest-params": "warn",
  "react/no-array-index-key": "error",
  "no-return-await": "error",
  "require-await": "error",
  "no-unused-expressions": "error",
  curly: "error",

  "@typescript-eslint/array-type": ["warn", { default: "array" }],
  "@typescript-eslint/consistent-type-assertions": [
    "warn",
    { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
  ],
  "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      vars: "all",
      args: "none",
      ignoreRestSiblings: false,
      varsIgnorePattern: "^_",
    },
  ],

  // Import Rules
  "import/order": [
    "error",
    {
      alphabetize: { order: "asc", caseInsensitive: true },
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      pathGroupsExcludedImportTypes: ["builtin"],
    },
  ],

  // Prettier Integration
  "prettier/prettier": "warn",
};
