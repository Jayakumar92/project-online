/**
 * Token Generator Script
 *
 * Generates per-project CSS token files from TypeScript brand configs.
 * Committed output lives in libs/brand/src/styles/{project}/
 *
 * Run:  pnpm generate-tokens
 *   or: pnpm tsx libs/brand/scripts/generate-tokens.ts
 *
 * Add a new entry to PROJECT_BRAND_MAP when creating a new project.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { brands } from '../src/brands/index';
import { generateWebTokensCss, generateNativeTokensCss } from '../src/generators';
import type { BrandId } from '../src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const STYLES_DIR = join(__dirname, '../src/styles');

// ─── Root-level files (backward compat for base apps that use web-tokens.css) ───
writeFileSync(join(STYLES_DIR, 'web-tokens.css'), generateWebTokensCss(brands['default']));
writeFileSync(join(STYLES_DIR, 'native-tokens.css'), generateNativeTokensCss(brands['default']));

// ─── Per-project brand files ───────────────────────────────────────────────────
// Add a new entry here when you create a new project namespace.
const PROJECT_BRAND_MAP: { project: string; brandId: BrandId }[] = [
  { project: 'online', brandId: 'online-default' },
  { project: 'education', brandId: 'education-default' },
  { project: 'commerce', brandId: 'commerce-default' },
];

for (const { project, brandId } of PROJECT_BRAND_MAP) {
  const dir = join(STYLES_DIR, project);
  mkdirSync(dir, { recursive: true });

  const config = brands[brandId];
  writeFileSync(join(dir, 'web-tokens.css'), generateWebTokensCss(config));
  writeFileSync(join(dir, 'native-tokens.css'), generateNativeTokensCss(config));
}
