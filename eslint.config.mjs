import nx from '@nx/eslint-plugin';
import { tsBaseConfig } from '@repo/eslint-config/ts-base';

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
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
];
