# @repo/ui

Shared UI component library built with shadcn/ui, Tailwind CSS, and React.

## Overview

This library encapsulates all shadcn/ui configuration, components, utilities, and styles. Consuming apps should not need to manage any shadcn or Tailwind configuration themselves.

## Features

- ✅ All shadcn/ui components in one place
- ✅ Tailwind CSS v4 configuration encapsulated
- ✅ Tree-shakable exports
- ✅ Next.js App Router compatible
- ✅ RSC (React Server Components) support
- ✅ TypeScript support
- ✅ Zero configuration needed in consuming apps

## Installation

The library is already set up in the monorepo. For consuming apps:

1. Add `@repo/ui` to your app's `package.json`:
```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

2. Import UI library styles in your app's `globals.css`:
```css
/* Import UI library styles - all shadcn config is encapsulated here */
@import "@repo/ui/styles";
```

3. Import components:
```tsx
import { Button, Card, Input } from "@repo/ui";
```

## Usage

### Basic Component Import

```tsx
import { Button, Card, Input } from "@repo/ui";

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Click me</Button>
    </Card>
  );
}
```

### Tree-shaking

All exports are individual, so unused components are automatically tree-shaken:

```tsx
// Only Button is included in the bundle
import { Button } from "@repo/ui";
```

### Available Components

- `Button` - Button component with variants
- `Card` - Card container with header, content, footer
- `Input` - Text input field
- `Textarea` - Multi-line text input
- `Label` - Form label
- `Badge` - Badge component
- `Separator` - Visual separator
- `Select` - Select dropdown
- `DropdownMenu` - Dropdown menu component
- `AlertDialog` - Alert dialog modal
- `Combobox` - Combobox/autocomplete
- `Field` - Form field wrapper
- `InputGroup` - Input with addons

See `src/index.ts` for the complete list of exports.

## Tailwind Configuration

The library uses Tailwind CSS v4 with CSS-first configuration. All theme values are defined via CSS variables in `src/styles/globals.css`.

### For Consuming Apps

**Important**: With Tailwind v4, you don't need a `tailwind.config.ts` file. The configuration is handled via CSS imports.

Your app's `globals.css` should import the library styles:

```css
@import "@repo/ui/styles";
```

The library styles include:
- Tailwind base styles
- shadcn/ui theme variables
- Dark mode support
- Custom CSS variables for theming

## TypeScript

TypeScript path mappings are configured in `tsconfig.base.json`:

```json
{
  "paths": {
    "@repo/ui": ["libs/ui/src/index.ts"],
    "@repo/ui/*": ["libs/ui/src/*"]
  }
}
```

## Project Structure

```
libs/ui/
├── src/
│   ├── components/
│   │   └── ui/          # All shadcn/ui components
│   ├── styles/
│   │   └── globals.css  # Tailwind + shadcn styles
│   ├── utils.ts         # cn() utility function
│   └── index.ts         # Main exports
├── tailwind.config.ts   # Tailwind config (for reference)
├── package.json
└── tsconfig.json
```

## Adding New Components

1. Add the component to `libs/ui/src/components/ui/`
2. Export it from `libs/ui/src/index.ts`
3. Components are automatically available to all consuming apps

## Limitations & Solutions

### Next.js App Router

✅ **Supported**: The library works with Next.js App Router and RSC. Components that need client-side interactivity are marked with `"use client"`.

### Tailwind CSS v4

✅ **Supported**: The library uses Tailwind CSS v4 with CSS-first configuration. All styles are imported via CSS, not JavaScript config.

### Tree-shaking

✅ **Supported**: All components are exported individually, enabling proper tree-shaking. Only imported components are included in the bundle.

### Dark Mode

✅ **Supported**: Dark mode is configured via CSS variables. Add the `dark` class to your root element to enable dark mode.

## Development

```bash
# Type check
nx typecheck ui

# Lint
nx lint ui
```

## Best Practices

1. **Don't duplicate shadcn config**: All configuration lives in the library
2. **Import styles once**: Import `@repo/ui/styles` in your app's `globals.css`
3. **Use individual imports**: Import only what you need for better tree-shaking
4. **Don't modify library components directly**: Create wrapper components in your app if you need customizations
