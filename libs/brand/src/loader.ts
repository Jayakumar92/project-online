import type { BrandConfig, BrandId } from './types';
import { brands } from './brands';

/**
 * Brand resolution priority:
 * 1. NEXT_PUBLIC_BRAND / EXPO_PUBLIC_BRAND  — explicit tenant override (CI/CD white-label builds)
 * 2. 'online-default'                       — fallback
 */
function resolveBrandId(): BrandId {
  if (typeof process === 'undefined') {
    return 'online-default';
  }

  const envBrand = process.env['NEXT_PUBLIC_BRAND'] ?? process.env['EXPO_PUBLIC_BRAND'];

  if (envBrand && envBrand in brands) {
    return envBrand as BrandId;
  }

  return 'online-default';
}

export const brandId: BrandId = resolveBrandId();
export const brand: BrandConfig = brands[brandId];
