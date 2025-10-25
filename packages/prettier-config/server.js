import baseConfig from "./base.js";

const config = {
  ...baseConfig,

  // =================================================================
  // PLUGIN CONFIGURATION
  // =================================================================

  // 1. Sort Imports Plugin Configuration
  importOrder: [
    // Node.js Built-in modules are automatically sorted to the top by 'importOrderBuiltinModulesToTop: true'

    // a. Framework/Core Libraries
    "^(nest(.*)$)|^(@nestjs/(.*)$)|^(nestjs$)",

    "",

    // b. Third-Party Modules (The plugin placeholder for installed packages)
    "<THIRD_PARTY_MODULES>",

    "", // Separator

    // c. Monorepo Cross-Package Imports
    "^@repo/(.*)$",

    "", // Separator

    // d. Absolute Project Aliases (@/) - Grouped by Layer (Low to High)
    "^types$",
    "^@/types/(.*)$",

    "", // Separator

    // e. Relative Imports - Split for better visual grouping (Parent > Sibling)
    // Parent Imports (starts with '../', must escape the dot)
    "^\\.\\.\\/",

    "", // Separator

    // Sibling/Index Imports (starts with './', must escape the dot)
    "^\\.\\/",
  ],

  // 2. Plugin Settings (Global)
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true, // Ensures Node built-ins are first
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,

  // 3. Plugins Array
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};

export default config;
