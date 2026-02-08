# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nx monorepo (v22.3) with pnpm workspaces containing four apps and shared libraries. All TypeScript with strict mode.

**Apps:**

- `apps/admin` — Next.js 16 admin dashboard (React 19, App Router)
- `apps/web` — Next.js 16 public web app (React 19, App Router)
- `apps/api` — NestJS 11 backend (Express, Jest for testing)
- `apps/native` — React Native 0.81 + Expo 54 mobile app (Expo Router)

**Shared Libraries (`libs/`):**

- `@repo/core` — Constants, types, Zod validation schemas
- `@repo/utils` — Shared utilities (dayjs, Zod)
- `@repo/store` — Zustand state management (theme persistence via `useAppStore`)
- `@repo/services` — API clients (Axios and Fetch implementations)
- `@repo/features` — Feature modules with platform-specific code (`auth/`, `components/`, `hooks/`, `web/`, `native/`)
- `@repo/ui-shadcn` — Centralized shadcn/ui component library (Tailwind CSS v4, CSS variable theming)
- `@repo/config-eslint` — Shared ESLint configs (`base`, `next`, `nest`, `react`, `react-native`)
- `@repo/config-prettier` — Shared Prettier configs

## Commands

```bash
# Development
pnpm dev                              # Run all dev servers in parallel
pnpm nx run <app>:dev                 # Run single app (admin, web, api, native)

# Build
pnpm build                            # Build all projects
pnpm nx run <app>:build               # Build single app

# Lint & Format
pnpm lint                             # Lint all projects
pnpm format                           # Format all files with Prettier
pnpm format:check                     # Check formatting

# Type Checking
pnpm check-types                      # Typecheck all projects

# API Testing (NestJS)
pnpm nx run api:test                  # Run unit tests
pnpm nx run api:test:watch            # Watch mode
pnpm nx run api:test:cov              # Coverage
pnpm nx run api:test:e2e              # End-to-end tests

# Native (Expo)
pnpm nx run native:start              # Expo CLI
pnpm nx run native:android            # Android
pnpm nx run native:ios                # iOS

# Nx Utilities
pnpm nx graph                         # Visual dependency graph
pnpm nx affected:build                # Build only changed projects
pnpm nx reset                         # Clear Nx cache
```

## Architecture

### Import Paths

All shared libraries use `@repo/` prefix. Path mappings defined in `tsconfig.base.json`:

```
@repo/core/*        → libs/core/src/*
@repo/utils/*       → libs/utils/src/*
@repo/store/*       → libs/store/src/*
@repo/services/*    → libs/services/src/*
@repo/features/*    → libs/features/src/*
@repo/ui-shadcn/*   → libs/ui/shadcn/src/*
```

Next.js apps must list shared packages in `transpilePackages` in their `next.config.ts`.

### Styling

Tailwind CSS v4 with CSS-first configuration. Dark mode via `.dark` class on root element, persisted through Zustand store. Apps import shared styles: `@repo/ui-shadcn/styles` in their globals.css.

### API Response Pattern

Defined in `@repo/core` validations:

- Success: `{ success: true, status: "Request processed successfully", message, details }`
- Error: `{ success: false, status: "Bad Request", error_message }`

### Pre-commit Hooks

Husky + lint-staged runs on commit:

- Prettier on `**/*.{js,ts,tsx,json,md}`
- ESLint with `--fix --max-warnings=0` on `**/*.{js,ts,tsx}`
