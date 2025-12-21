# Turborepo to Nx Migration - Detailed Changes

This document explains all the changes made during the migration from Turborepo to Nx.

---

## 📁 Files Created

### 1. `nx.json` (Root Configuration)

**Purpose**: Main Nx workspace configuration file (replaces `turbo.json`)

**Key Changes**:

- **`targetDefaults`**: Defines default behavior for common targets (build, lint, typecheck, dev)
  - `build`: Depends on `^build` (builds dependencies first), uses production inputs, enables caching
  - `lint`: Caches lint results, depends on ESLint config files
  - `typecheck`: Type checks with dependency awareness
  - `dev`: No caching, persistent (runs continuously)

- **`namedInputs`**: Defines input patterns for caching
  - `default`: All files in project root
  - `production`: Excludes test files and config files

- **`plugins`**: Auto-discovers Next.js projects and configures them automatically
  - `@nx/next/plugin`: Automatically detects Next.js apps and sets up targets

- **`tasksRunnerOptions`**: Configures which operations are cacheable

**Why**: Nx uses this file instead of `turbo.json` to configure the monorepo behavior.

---

### 2. `tsconfig.base.json` (Root TypeScript Config)

**Purpose**: Base TypeScript configuration for path mappings

**Key Changes**:

- **`paths`**: Maps workspace package imports to their source locations
  - `@repo/core/*` → `packages/core/src/*`
  - `@repo/utils/*` → `packages/utils/src/*`
  - Similar mappings for all packages

**Why**: Nx requires a base tsconfig for proper TypeScript path resolution across the monorepo.

---

### 3. `project.json` Files (One per App/Package)

#### Apps:

- `apps/admin/project.json`
- `apps/web/project.json`
- `apps/api/project.json`
- `apps/native/project.json`

#### Packages:

- `packages/core/project.json`
- `packages/utils/project.json`
- `packages/store/project.json`
- `packages/services/project.json`
- `packages/features/project.json`

**Purpose**: Defines project-specific targets and configuration

**Structure for Each Project**:

```json
{
  "name": "project-name",
  "sourceRoot": "path/to/source",
  "projectType": "application" | "library",
  "tags": ["type:app", "framework:next"],
  "targets": {
    "build": { ... },
    "dev": { ... },
    "lint": { ... },
    "typecheck": { ... }
  }
}
```

**Why**: Nx uses `project.json` files to understand each project's structure and available commands. This replaces the need for individual `turbo.json` files in each package.

---

## 📝 Files Modified

### 1. `package.json` (Root)

**Changes**:

- **Scripts Updated**:

  ```json
  // BEFORE (Turborepo)
  "build": "turbo run build"
  "dev": "turbo run dev"

  // AFTER (Nx)
  "build": "nx run-many --target=build --all"
  "dev": "nx run-many --target=dev --all --parallel"
  ```

- **Dependencies Changed**:
  - ❌ **Removed**: `turbo: "^2.5.8"`
  - ✅ **Added**:
    - `nx: "^22.3.3"`
    - `@nx/workspace: "^22.3.3"`
    - `@nx/next: "^22.3.3"`
    - `@nx/node: "^22.3.3"`
    - `@nx/js: "^22.3.3"`
    - `@nx/eslint: "^22.3.3"`

**Why**: Replaced Turborepo with Nx and its plugins for Next.js, Node.js, and JavaScript support.

---

### 2. `apps/admin/tsconfig.json`

**Changes**:

- **Added**: Extends `tsconfig.base.json`
- **Added**: Path mappings for workspace packages:
  ```json
  "paths": {
    "@repo/core/*": ["../../packages/core/dist/*"]
  }
  ```

**Why**: Enables TypeScript to resolve workspace package imports correctly.

---

### 3. `apps/admin/next.config.ts`

**Changes**:

- **Added**: `transpilePackages` configuration:
  ```typescript
  transpilePackages: [
    "@repo/core",
    "@repo/utils",
    "@repo/store",
    "@repo/services",
    "@repo/features",
  ];
  ```

**Why**: Next.js needs to transpile workspace packages since they're not in `node_modules`. This tells Next.js to process these packages during build.

---

### 4. `apps/admin/project.json` (Typecheck target)

**Changes**:

- **Added**: `main` property to typecheck target:
  ```json
  "typecheck": {
    "options": {
      "tsConfig": "apps/admin/tsconfig.json",
      "main": "apps/admin/app/page.tsx"
    }
  }
  ```

**Why**: Nx requires a main entry point for type checking Next.js apps.

---

## 🗑️ Files Deleted

### 1. `turbo.json` (Root)

**Why**: Replaced by `nx.json`. Nx uses its own configuration format.

### 2. Individual `turbo.json` Files

Deleted from:

- `packages/core/turbo.json`
- `packages/utils/turbo.json`
- `packages/store/turbo.json`
- `packages/services/turbo.json`
- `packages/features/turbo.json`

**Why**: Nx uses `project.json` files instead of individual `turbo.json` files. The configuration is now centralized in `nx.json` with project-specific settings in `project.json`.

---

## 🔄 Migration Mapping

### Command Changes

| Turborepo Command                | Nx Equivalent                               |
| -------------------------------- | ------------------------------------------- |
| `turbo run build`                | `nx run-many --target=build --all`          |
| `turbo run dev`                  | `nx run-many --target=dev --all --parallel` |
| `turbo run lint`                 | `nx run-many --target=lint --all`           |
| `turbo run build --filter=admin` | `nx run admin:build`                        |
| `turbo run dev --filter=admin`   | `nx run admin:dev`                          |

### Configuration Changes

| Turborepo                  | Nx                            |
| -------------------------- | ----------------------------- |
| `turbo.json` (root)        | `nx.json` (root)              |
| `turbo.json` (per package) | `project.json` (per project)  |
| `pipeline` config          | `targetDefaults` in `nx.json` |
| `dependsOn` in tasks       | `dependsOn` in targets        |

---

## 🎯 Key Differences

### 1. **Project Discovery**

- **Turborepo**: Scans `package.json` files in workspace directories
- **Nx**: Uses `project.json` files or `nx.json` plugins for auto-discovery

### 2. **Caching**

- **Turborepo**: Uses `.turbo` directory
- **Nx**: Uses `.nx/cache` directory with more granular caching

### 3. **Task Execution**

- **Turborepo**: `turbo run <task>`
- **Nx**: `nx run <project>:<target>` or `nx run-many --target=<target> --all`

### 4. **Dependency Graph**

- **Turborepo**: Basic dependency tracking
- **Nx**: Advanced dependency graph with `nx graph` command

### 5. **Plugins**

- **Turborepo**: Limited plugin ecosystem
- **Nx**: Rich plugin ecosystem (`@nx/next`, `@nx/node`, etc.) with auto-configuration

---

## ✅ Benefits of Migration

1. **Better Developer Experience**:
   - `nx graph` for visualizing dependencies
   - `nx affected` for running only changed projects
   - Better IDE integration

2. **More Features**:
   - Code generators
   - Better caching strategies
   - More plugins and integrations

3. **Better TypeScript Support**:
   - Improved path resolution
   - Better type checking across projects

4. **Scalability**:
   - Better performance with large monorepos
   - More efficient caching

---

## 📋 Verification Checklist

- ✅ All `turbo.json` files removed
- ✅ `nx.json` created with proper configuration
- ✅ `project.json` files created for all apps and packages
- ✅ Root `package.json` scripts updated
- ✅ Nx dependencies installed
- ✅ Turborepo dependency removed
- ✅ `tsconfig.base.json` created for path mappings
- ✅ Next.js configs updated with `transpilePackages`
- ✅ All projects discoverable via `nx show projects`

---

## 🚀 Next Steps

1. Test all commands: `pnpm build`, `pnpm dev`, `pnpm lint`
2. Verify caching works: Run build twice, second should be cached
3. Explore Nx features: `nx graph`, `nx affected:build`
4. Update CI/CD pipelines if they reference Turborepo commands
