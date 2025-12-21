/**
 * Prettier configuration for Next.js applications
 *
 * This configuration extends the base prettier config and adds Next.js/React-specific
 * import sorting and formatting rules. The import order follows a layered architecture
 * pattern: external dependencies → monorepo packages → internal modules → relative imports.
 *
 * @see https://prettier.io/docs/configuration
 * @see https://github.com/IanVS/prettier-plugin-sort-imports
 */

import baseConfig from './base.js';

const config = {
  ...baseConfig,

  // =================================================================
  // PLUGIN CONFIGURATION
  // =================================================================

  /**
   * Import Order Configuration
   *
   * Imports are sorted in the following order (from top to bottom):
   * 1. Node.js built-in modules (handled automatically)
   * 2. Framework/Core libraries (React, Next.js, Redux)
   * 3. Third-party npm packages
   * 4. Monorepo cross-package imports (@repo/*)
   * 5. Internal project aliases (@/*) - ordered by architectural layer
   * 6. Relative imports (parent directories first, then siblings)
   * 7. Side-effect imports (CSS, images, etc.) - always last
   *
   * This ordering ensures:
   * - Clear separation between external and internal code
   * - Easy identification of dependencies
   * - Consistent import structure across the codebase
   * - Better code review experience (external changes are obvious)
   */
  importOrder: [
    // Node.js built-in modules are automatically sorted to the top
    // when 'importOrderBuiltinModulesToTop: true' is set

    // ──────────────────────────────────────────────────────────────
    // a. Framework/Core Libraries
    // ──────────────────────────────────────────────────────────────
    // These are the core libraries that the application depends on.
    // Placed first to make framework dependencies immediately visible.
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '^(redux/(.*)$)|^(redux$)',

    '', // Visual separator between framework and third-party

    // ──────────────────────────────────────────────────────────────
    // b. Third-Party Modules
    // ──────────────────────────────────────────────────────────────
    // All npm packages installed from the registry.
    // The <THIRD_PARTY_MODULES> placeholder is replaced by the plugin
    // with all installed packages not matching other patterns.
    '<THIRD_PARTY_MODULES>',

    '', // Visual separator between external and internal code

    // ──────────────────────────────────────────────────────────────
    // c. Monorepo Cross-Package Imports
    // ──────────────────────────────────────────────────────────────
    // Imports from other packages within the monorepo.
    // These are treated as "semi-external" - they're internal to the
    // organization but external to the current package.
    '^@repo/(.*)$',

    '', // Visual separator between monorepo and project code

    // ──────────────────────────────────────────────────────────────
    // d. Absolute Project Aliases (@/)
    // ──────────────────────────────────────────────────────────────
    // Internal project imports, ordered by architectural layer
    // (from low-level utilities to high-level containers).
    // This ordering follows the dependency flow: types → utils → components → containers.
    '^types$', // Bare 'types' import (if used)
    '^@/types/(.*)$', // Type definitions
    '^@/assets/(.*)$', // Static assets (images, fonts, etc.)
    '^@/utils/(.*)$', // Utility functions and helpers
    '^@/contexts/(.*)$', // React contexts
    '^@/hooks$', // Custom React hooks
    '^@/redux/(.*)$', // Redux store, slices, actions
    '^@/services/(.*)$', // API services and external integrations
    '^@/translations$', // i18n translation files
    '^@/components/ui/(.*)$', // Base UI components (design system)
    '^@/components/(.*)$', // Feature-specific components
    '^@/styles/(.*)$', // Style files and theme configurations
    '^@/app/(.*)$', // Next.js app directory structure
    '^@/containers/(.*)$', // Container components (smart components)

    '', // Visual separator between absolute and relative imports

    // ──────────────────────────────────────────────────────────────
    // e. Relative Imports
    // ──────────────────────────────────────────────────────────────
    // Imports from the local file system, split into two groups:
    // 1. Parent directory imports (../) - higher in the file tree
    // 2. Sibling/current directory imports (./) - same level or index
    // This separation improves readability by grouping related local files.
    //
    // Parent Imports (starts with '../', dots must be escaped in regex)
    '^\\.\\.\\/',

    '', // Visual separator between parent and sibling imports

    // Sibling/Index Imports (starts with './', dots must be escaped in regex)
    '^\\.\\/',

    '', // Visual separator before side-effect imports

    // ──────────────────────────────────────────────────────────────
    // f. Side-Effect Imports
    // ──────────────────────────────────────────────────────────────
    // Imports that don't import values but have side effects
    // (e.g., CSS files, global styles, polyfills).
    // These are always placed last as they don't contribute to the
    // module's API but affect the application's behavior.
    '^\\.\\/.+\\.(css|scss|sass|less|styl)$', // CSS and preprocessor files
    '^\\.\\.\\/.+\\.(css|scss|sass|less|styl)$', // CSS from parent directories
  ],

  // ──────────────────────────────────────────────────────────────
  // Plugin Settings (Global)
  // ──────────────────────────────────────────────────────────────
  // These settings control the behavior of the import sorting plugin.
  importOrderSeparation: false, // Don't add blank lines between groups (we use "" separators)
  importOrderSortSpecifiers: true, // Sort named imports alphabetically within each import statement
  importOrderBuiltinModulesToTop: true, // Node.js built-ins (fs, path, etc.) go to the very top
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'], // Enable TS/JSX parsing
  importOrderMergeDuplicateImports: true, // Combine multiple imports from the same module
  importOrderCombineTypeAndValueImports: true, // Merge type and value imports from the same module

  // ──────────────────────────────────────────────────────────────
  // Plugins Array
  // ──────────────────────────────────────────────────────────────
  // Prettier plugins are executed in order. The import sorting plugin
  // must come before Tailwind to ensure imports are sorted before
  // Tailwind classes are formatted.
  plugins: [
    '@ianvs/prettier-plugin-sort-imports', // Import sorting and organization
    'prettier-plugin-tailwindcss', // Tailwind CSS class sorting (must be last)
  ],
};

export default config;
