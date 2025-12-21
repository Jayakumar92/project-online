# Nx Monorepo

This is an Nx-powered monorepo for a full-stack application with multiple apps and shared packages.

## What's inside?

This monorepo includes the following apps and libraries:

### Apps

- `admin`: A [Next.js](https://nextjs.org/) admin application
- `web`: A [Next.js](https://nextjs.org/) web application
- `api`: A [NestJS](https://nestjs.com/) backend API
- `native`: A [React Native/Expo](https://expo.dev/) mobile application

### Libraries

- `@repo/core`: Shared constants, types, and validations
- `@repo/utils`: Utility functions and helpers
- `@repo/store`: State management (Zustand)
- `@repo/services`: API client services
- `@repo/features`: Feature modules and components
- `@repo/eslint-config`: Shared ESLint configurations
- `@repo/typescript-config`: Shared TypeScript configurations
- `@repo/prettier-config`: Shared Prettier configurations

Each app/library is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This monorepo has the following tools configured:

- [Nx](https://nx.dev/) for monorepo management and task orchestration
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [pnpm](https://pnpm.io/) as the package manager

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Installation

```bash
# Install dependencies
pnpm install
```

### Build

To build all apps and packages:

```bash
pnpm build
# or
pnpm nx run-many --target=build --all
```

To build a specific project:

```bash
pnpm nx run admin:build
pnpm nx run web:build
pnpm nx run api:build
pnpm nx run core:build
```

### Develop

To run all dev servers in parallel:

```bash
pnpm dev
# or
pnpm nx run-many --target=dev --all --parallel
```

To run a specific app:

```bash
pnpm nx run admin:dev
pnpm nx run web:dev
pnpm nx run api:dev
pnpm nx run native:dev
```

### Lint

To lint all projects:

```bash
pnpm lint
# or
pnpm nx run-many --target=lint --all
```

### Type Check

To type check all projects:

```bash
pnpm check-types
# or
pnpm nx run-many --target=typecheck --all
```

## Useful Nx Commands

```bash
# Show all projects
pnpm nx show projects

# Show project graph (visual)
pnpm nx graph

# Run commands for affected projects only
pnpm nx affected:build
pnpm nx affected:lint
pnpm nx affected:test

# Clear Nx cache
pnpm nx reset
```

## Documentation

- [COMMANDS.md](./COMMANDS.md) - Complete command reference
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - Turborepo to Nx migration details

## Useful Links

Learn more about Nx:

- [Nx Documentation](https://nx.dev)
- [Nx Cloud](https://nx.app) - Distributed caching and task execution
- [Nx Console](https://nx.dev/nx-console) - VS Code extension
- [Nx Recipes](https://nx.dev/recipes) - Common patterns and solutions
