# shadcn/ui Library Setup Guide

This guide explains how the shadcn/ui components have been refactored into a reusable library (`@repo/ui`) in an Nx monorepo.

## 📁 Folder Structure

```
libs/ui/
├── src/
│   ├── components/
│   │   └── ui/              # All shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ... (all other components)
│   ├── styles/
│   │   └── globals.css      # Tailwind + shadcn styles (CSS variables, theme)
│   ├── utils.ts              # cn() utility function
│   └── index.ts              # Main exports (tree-shakable)
├── tailwind.config.ts        # Reference config (not used with Tailwind v4)
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Key Principles

1. **All shadcn config lives in the library** - No duplication in consuming apps
2. **Clean imports** - `import { Button } from "@repo/ui"`
3. **Tree-shaking** - Individual exports ensure unused code is removed
4. **Zero config in apps** - Just import styles and use components

## 📦 Setup for Consuming Apps

### 1. Add Dependency

In your app's `package.json`:

```json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
```

### 2. Import Styles

In your app's `globals.css` (or main CSS file):

```css
/* Import UI library styles - all shadcn config is encapsulated here */
@import "@repo/ui/styles";
```

**Note**: With Tailwind CSS v4, this single import includes:
- Tailwind base styles
- shadcn/ui theme variables
- Dark mode CSS variables
- All custom theme tokens

### 3. Use Components

```tsx
import { Button, Card, Input } from "@repo/ui";

export function MyPage() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Click me</Button>
    </Card>
  );
}
```

## ⚙️ Tailwind Configuration

### Tailwind CSS v4 (Current Setup)

With Tailwind v4, configuration is **CSS-first**. No `tailwind.config.ts` needed in consuming apps.

The library's `globals.css` contains:
- `@import "tailwindcss"` - Base Tailwind
- `@import "tw-animate-css"` - Animations
- `@import "shadcn/tailwind.css"` - shadcn styles
- CSS variables for theming
- Dark mode variables

**Your app only needs to import the library styles** - that's it!

### If You Need Custom Tailwind Config

If your app needs additional Tailwind configuration, you can still use `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Include library components for Tailwind to scan
    "../../libs/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  // Your custom theme extensions
  theme: {
    extend: {
      // Your customizations
    },
  },
} satisfies Config;
```

However, with Tailwind v4, most configuration should be done via CSS variables in your app's CSS file.

## 📤 Exports & Tree-shaking

All components are exported individually from `libs/ui/src/index.ts`:

```ts
export { Button } from "./components/ui/button";
export { Card } from "./components/ui/card";
// ... etc
```

This enables tree-shaking - only imported components are included in your bundle.

### Example

```tsx
// Only Button is bundled
import { Button } from "@repo/ui";

// Both Button and Card are bundled
import { Button, Card } from "@repo/ui";
```

## 🔧 TypeScript Configuration

Path mappings are configured in `tsconfig.base.json`:

```json
{
  "paths": {
    "@repo/ui": ["libs/ui/src/index.ts"],
    "@repo/ui/*": ["libs/ui/src/*"]
  }
}
```

This enables:
- `import { Button } from "@repo/ui"`
- `import { cn } from "@repo/ui/utils"` (if needed)

## 🎨 Theming & CSS Variables

All theme values are defined via CSS variables in `libs/ui/src/styles/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... etc */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... etc */
}
```

### Customizing Theme

To customize colors, you can override CSS variables in your app's CSS:

```css
/* In your app's globals.css, after @import "@repo/ui/styles" */
:root {
  --primary: oklch(0.5 0.2 250); /* Your custom primary color */
}
```

## 🌙 Dark Mode

Dark mode is configured via the `.dark` class. Add it to your root element:

```tsx
// In your layout.tsx
<html lang="en" className="dark">
  {/* ... */}
</html>
```

Or use a theme provider to toggle it dynamically.

## 🚀 Next.js App Router

The library is fully compatible with Next.js App Router:

- ✅ Server Components - Components without `"use client"` work in RSC
- ✅ Client Components - Interactive components are marked with `"use client"`
- ✅ No configuration needed - Just import and use

### Example

```tsx
// app/page.tsx (Server Component)
import { Card } from "@repo/ui";

export default function Page() {
  return <Card>Hello from server</Card>;
}
```

```tsx
// app/interactive.tsx (Client Component)
"use client";

import { Button } from "@repo/ui";

export function InteractiveButton() {
  return <Button onClick={() => alert("Clicked!")}>Click me</Button>;
}
```

## ⚠️ Limitations & Solutions

### 1. CSS Import Path Resolution

**Issue**: Some bundlers might not resolve `@repo/ui/styles` correctly.

**Solution**: If the CSS import doesn't work, use a relative path:

```css
/* Instead of */
@import "@repo/ui/styles";

/* Use */
@import "../../libs/ui/src/styles/globals.css";
```

Or configure your bundler to resolve the package alias for CSS files.

### 2. Tailwind Content Scanning

**Issue**: Tailwind needs to scan component files to generate CSS.

**Solution**: With Tailwind v4, this is handled automatically via CSS imports. If you're using Tailwind v3, ensure your `tailwind.config.ts` includes:

```ts
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "../../libs/ui/src/**/*.{js,ts,jsx,tsx}", // Include library
],
```

### 3. PostCSS Configuration

Your app's `postcss.config.mjs` should include `@tailwindcss/postcss`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

## 📝 Adding New Components

1. Add component to `libs/ui/src/components/ui/`
2. Export from `libs/ui/src/index.ts`
3. Component is immediately available to all apps

## 🔍 Example: Complete App Setup

### `apps/my-app/package.json`
```json
{
  "dependencies": {
    "@repo/ui": "workspace:*",
    "next": "16.1.1",
    "react": "19.2.3"
  }
}
```

### `apps/my-app/app/globals.css`
```css
@import "@repo/ui/styles";
```

### `apps/my-app/app/page.tsx`
```tsx
import { Button, Card, Input } from "@repo/ui";

export default function Page() {
  return (
    <Card>
      <Input placeholder="Name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

That's it! No other configuration needed.

## ✅ Checklist for New Apps

- [ ] Add `@repo/ui` to `package.json` dependencies
- [ ] Import `@repo/ui/styles` in `globals.css`
- [ ] Use components: `import { Button } from "@repo/ui"`
- [ ] (Optional) Configure PostCSS with `@tailwindcss/postcss`
- [ ] (Optional) Add dark mode toggle if needed

## 🎉 Benefits

1. **Single source of truth** - All UI components in one place
2. **No duplication** - No copying shadcn config to each app
3. **Easy updates** - Update library, all apps benefit
4. **Tree-shaking** - Only used components in bundle
5. **Type safety** - Full TypeScript support
6. **Consistent theming** - Shared CSS variables
