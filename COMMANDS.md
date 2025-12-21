# Nx Project Commands Reference

## 📋 Root Level Commands

```bash
# Build all projects
pnpm build
# or
pnpm nx run-many --target=build --all

# Run all dev servers in parallel
pnpm dev
# or
pnpm nx run-many --target=dev --all --parallel

# Lint all projects
pnpm lint
# or
pnpm nx run-many --target=lint --all

# Type check all projects
pnpm check-types
# or
pnpm nx run-many --target=typecheck --all

# Format all code
pnpm format
```

---

## 🎯 Apps Commands

### Admin App (Next.js)

```bash
# Build
pnpm nx run admin:build

# Development server
pnpm nx run admin:dev

# Start production server
pnpm nx run admin:start

# Lint
pnpm nx run admin:lint

# Type check
pnpm nx run admin:typecheck

# Export static site
pnpm nx run admin:export

# Format code
pnpm nx run admin:format
```

### Web App (Next.js)

```bash
# Build
pnpm nx run web:build

# Development server
pnpm nx run web:dev

# Start production server
pnpm nx run web:start

# Lint
pnpm nx run web:lint

# Type check
pnpm nx run web:typecheck

# Export static site
pnpm nx run web:export

# Format code
pnpm nx run web:format
```

### API App (NestJS)

```bash
# Build
pnpm nx run api:build

# Development server (watch mode)
pnpm nx run api:dev

# Start server
pnpm nx run api:serve

# Start production
pnpm nx run api:start:prod

# Start with debug
pnpm nx run api:start:debug

# Lint
pnpm nx run api:lint

# Type check
pnpm nx run api:typecheck

# Run tests
pnpm nx run api:test

# Run tests in watch mode
pnpm nx run api:test:watch

# Run tests with coverage
pnpm nx run api:test:cov

# Run E2E tests
pnpm nx run api:test:e2e

# Format code
pnpm nx run api:format
```

### Native App (React Native/Expo)

```bash
# Development server (web)
pnpm nx run native:dev

# Start Expo
pnpm nx run native:start

# Run on Android
pnpm nx run native:android

# Run on iOS
pnpm nx run native:ios

# Run on Web
pnpm nx run native:web

# Lint
pnpm nx run native:lint

# Type check
pnpm nx run native:typecheck
```

---

## 📦 Packages Commands

### Core Package

```bash
# Build
pnpm nx run core:build

# Development (watch mode)
pnpm nx run core:dev

# Lint
pnpm nx run core:lint

# Type check
pnpm nx run core:typecheck

# Format code
pnpm nx run core:format
```

### Utils Package

```bash
# Build
pnpm nx run utils:build

# Development (watch mode)
pnpm nx run utils:dev

# Lint
pnpm nx run utils:lint

# Type check
pnpm nx run utils:typecheck

# Format code
pnpm nx run utils:format
```

### Store Package

```bash
# Build
pnpm nx run store:build

# Development (watch mode)
pnpm nx run store:dev

# Lint
pnpm nx run store:lint

# Type check
pnpm nx run store:typecheck

# Format code
pnpm nx run store:format
```

### Services Package

```bash
# Build
pnpm nx run services:build

# Development (watch mode)
pnpm nx run services:dev

# Lint
pnpm nx run services:lint

# Type check
pnpm nx run services:typecheck

# Format code
pnpm nx run services:format
```

### Features Package

```bash
# Build
pnpm nx run features:build

# Development (watch mode)
pnpm nx run features:dev

# Lint
pnpm nx run features:lint

# Type check
pnpm nx run features:typecheck

# Format code
pnpm nx run features:format
```

---

## 🔧 Useful Nx Commands

```bash
# Show all projects
pnpm nx show projects

# Show project details
pnpm nx show project <project-name>

# Show project graph
pnpm nx graph

# Run command for affected projects only
pnpm nx affected:build
pnpm nx affected:lint
pnpm nx affected:test

# Clear Nx cache
pnpm nx reset

# Show project dependencies
pnpm nx graph --file=graph.json
```

---

## 🚀 Quick Start Examples

```bash
# Run admin app in development
pnpm nx run admin:dev

# Build all packages first, then build admin
pnpm nx run admin:build

# Run all dev servers in parallel
pnpm dev

# Build only affected projects
pnpm nx affected:build

# Run tests for affected projects
pnpm nx affected:test
```

---

## 📝 Notes

- All commands use `pnpm` as the package manager
- Use `--parallel` flag to run commands in parallel
- Use `--skip-nx-cache` to bypass Nx cache
- Use `--verbose` for detailed output
