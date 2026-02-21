/**
 * Token Generator Script
 *
 * Generates per-project CSS token files from TypeScript brand configs.
 * - Web tokens → libs/brand/src/styles/{project}/web-tokens.css
 *
 * Native apps no longer need pre-built CSS — tokens are injected at runtime
 * via NativeWind vars() in _layout.tsx (same pattern as web's dynamic injection).
 *
 * Run:  pnpm generate-tokens
 *   or: pnpm tsx libs/brand/scripts/generate-tokens.ts
 *
 * Add a new entry to PROJECT_BRAND_MAP when creating a new project namespace.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { brands } from '../src/brands/index';
import { generateWebTokensCss } from '../src/generators';
import type { BrandId } from '../src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const STYLES_DIR = join(__dirname, '../src/styles');

// Add a new entry here when you create a new project namespace.
const PROJECT_BRAND_MAP: { project: string; brandId: BrandId }[] = [
  { project: 'online', brandId: 'online-default' },
];

for (const { project, brandId } of PROJECT_BRAND_MAP) {
  const config = brands[brandId];

  const webDir = join(STYLES_DIR, project);
  mkdirSync(webDir, { recursive: true });
  writeFileSync(join(webDir, 'web-tokens.css'), generateWebTokensCss(config));

  console.info(`✓ ${project}: web-tokens.css`);
}
