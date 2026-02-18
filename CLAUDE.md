# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nx monorepo (v22.3) with pnpm workspaces containing four apps and shared libraries. All TypeScript with strict mode.

**Apps:**

- `apps/admin` — Next.js 16 admin dashboard (React 19, App Router)
- `apps/web` — Next.js 16 public web app (React 19, App Router)
- `apps/api` — NestJS 11 backend (Express, Jest for testing)
- `apps/native` — React Native 0.81 + Expo 54 mobile app (Expo Router, NativeWind 4.x)

**Shared Libraries (`libs/`):**

- `@repo/core` — Constants, types, Zod validation schemas
- `@repo/utils` — Shared utilities (dayjs, Zod)
- `@repo/store` — Zustand state management (theme persistence via `useAppStore`)
- `@repo/services` — API clients (Axios and Fetch implementations)
- `@repo/features` — Feature modules with platform-specific code via `web/` and `native/` subdirectories
- `@repo/brand` — Brand configs, color tokens (oklch for web, hsl for native), metadata, feature flags
- `@repo/ui-shadcn` — shadcn/ui component library (Tailwind CSS v4, CSS variable theming)
- `@repo/ui-rnr` — React Native Reusables component library (NativeWind/Tailwind CSS v3, 34 components)
- `@repo/config-eslint` — Shared ESLint configs (`base`, `next`, `nest`, `react`, `react-native`)
- `@repo/config-prettier` — Shared Prettier configs
- `@repo/config-typescript` — Shared TypeScript configs (`base`, `library`, `react-library`, `nextjs`, `nestjs`)

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
pnpm nx run <app>:typecheck           # Typecheck single project

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
@repo/brand/*       → libs/brand/src/*
@repo/ui-shadcn/*   → libs/ui/shadcn/src/*
@repo/ui-rnr/*      → libs/ui/rnr/src/*
```

Next.js apps must list shared packages in `transpilePackages` in their `next.config.ts`.

**Note:** The native app's `tsconfig.json` has `baseUrl: "."` (for the `@/*` local alias), which overrides base path resolution — so it must duplicate all `@repo/*` paths with `../../` prefixes.

### Styling & Brand System

**Brand library** (`@repo/brand`) is the single source of truth for color tokens:

- Two brands: `default` and `example` — selected via `NEXT_PUBLIC_BRAND` (web) or `EXPO_PUBLIC_BRAND` (native) env var
- Each `BrandConfig` has 30 semantic `ThemedColor` tokens with `light`/`dark` × `oklch`/`hsl` values
- Generators: `generateWebTokensCss()` (oklch), `generateNativeTokensCss()` (hsl), `generateNavTheme()` (React Navigation)
- Generated CSS committed at `libs/brand/src/styles/web-tokens.css` and `native-tokens.css`

**CSS token flow — Web apps (Tailwind v4):**

```
app/globals.css
  → @import '@repo/brand/styles/web-tokens.css'    (brand color tokens)
  → @import '@repo/ui-shadcn/styles'               (theme mappings: CSS vars → Tailwind theme)
```

**CSS token flow — Native app (Tailwind v3 / NativeWind):**

```
global.css
  → @import '../../libs/brand/src/styles/native-tokens.css'  (brand color tokens, @layer base wrapped)
```

Dark mode: `.dark` class on root element, persisted through Zustand store.

### Platform-Specific Code in Features

`@repo/features` uses **directory separation** (not `.native.ts` file extensions):

```
libs/features/src/auth/
  api/         # shared API calls
  types/       # shared TypeScript types
  hooks/       # shared hooks
  web/         # web-only components and containers
  native/      # native-only components and containers
```

Web apps import from `@repo/features/auth/web/...`; native imports from `@repo/features/auth/native/...`.

### Native App Config

- `metro.config.js` — wraps with `withNativeWind`, sets `watchFolders` to monorepo root, forces singleton resolution for `react`/`react-native` via `extraNodeModules`
- `tailwind.config.ts` — Tailwind v3 with `nativewind/preset`, `darkMode: 'class'`, content scans `libs/ui/rnr/`
- NativeWind requires Tailwind CSS v3 (not v4)

### API Response Pattern

Defined in `@repo/core` validations:

- Success: `{ success: true, status: "Request processed successfully", message, details }`
- Error: `{ success: false, status: "Bad Request", error_message }`

### Pre-commit Hooks

Husky + lint-staged runs on commit:

- Prettier on `**/*.{js,ts,tsx,json,md}`
- ESLint with `--fix --max-warnings=0` on `**/*.{js,ts,tsx}`

### React Version Pinning

pnpm overrides in root `package.json` force consistent React versions monorepo-wide (`react@19.1.0`, `react-dom@19.1.0`) to prevent duplicate module issues.
