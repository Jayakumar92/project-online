import type { BrandConfig, BrandId } from './types';
import { brands } from './brands';

/**
 * Maps product namespace → default brand for that project.
 * Set NEXT_PUBLIC_PROJECT (web) or EXPO_PUBLIC_PROJECT (native) to pick a project default.
 * Add a new entry here when a new project is created.
 */
const PROJECT_DEFAULT_BRAND: Record<string, BrandId> = {
  online: 'online-default',
  education: 'education-default',
  commerce: 'commerce-default',
};

/**
 * Brand resolution priority:
 * 1. NEXT_PUBLIC_BRAND / EXPO_PUBLIC_BRAND  — explicit tenant override (CI/CD white-label builds)
 * 2. NEXT_PUBLIC_PROJECT / EXPO_PUBLIC_PROJECT — project namespace default brand
 * 3. 'default' — fallback (standalone usage / legacy)
 */
function resolveBrandId(): BrandId {
  if (typeof process === 'undefined') {
    return 'default';
  }

  const envBrand = process.env['NEXT_PUBLIC_BRAND'] ?? process.env['EXPO_PUBLIC_BRAND'];

  if (envBrand && envBrand in brands) {
    return envBrand as BrandId;
  }

  const envProject = process.env['NEXT_PUBLIC_PROJECT'] ?? process.env['EXPO_PUBLIC_PROJECT'];

  if (envProject && envProject in PROJECT_DEFAULT_BRAND) {
    return PROJECT_DEFAULT_BRAND[envProject] ?? 'default';
  }

  return 'default';
}

export const brandId: BrandId = resolveBrandId();
export const brand: BrandConfig = brands[brandId];
