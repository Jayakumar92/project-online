import type { BrandConfig, BrandId } from './types';
import { brands } from './brands';

function resolveBrandId(): BrandId {
  const envBrand =
    typeof process !== 'undefined'
      ? (process.env['NEXT_PUBLIC_BRAND'] ?? process.env['EXPO_PUBLIC_BRAND'])
      : undefined;

  if (envBrand && envBrand in brands) {
    return envBrand as BrandId;
  }

  return 'default';
}

export const brandId: BrandId = resolveBrandId();
export const brand: BrandConfig = brands[brandId];
