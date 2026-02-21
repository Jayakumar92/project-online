import nx from '@nx/eslint-plugin';
import { tsBaseConfig } from '@repo/config-eslint/ts-base';

export default [
  // 1. Nx base configurations
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // 2. Shared TypeScript base config with Prettier integration
  // (includes base config, TypeScript rules, and Prettier integration)
  ...tsBaseConfig,

  // 3. Nx module boundaries enforcement
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            // Shared libs (scope:shared) may only depend on other shared libs.
            // Prevents shared libs from importing project-specific code.
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            // Online project — can import shared libs or other online-scoped items only.
            // Cross-project imports (online → education) are forbidden.
            {
              sourceTag: 'scope:online',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:online'],
            },
            // Education project — same isolation pattern.
            {
              sourceTag: 'scope:education',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:education'],
            },
            // Commerce project — same isolation pattern.
            {
              sourceTag: 'scope:commerce',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:commerce'],
            },
            // Libraries (type:lib) cannot import applications (type:app).
            {
              sourceTag: 'type:lib',
              onlyDependOnLibsWithTags: ['type:lib'],
            },
          ],
        },
      ],
    },
  },
];
