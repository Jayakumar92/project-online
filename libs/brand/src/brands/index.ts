import type { BrandConfig, BrandId } from '../types';
import { defaultBrand } from './default';
import { exampleBrand } from './example';

export const brands: Record<BrandId, BrandConfig> = {
  default: defaultBrand,
  example: exampleBrand,
};

export { defaultBrand, exampleBrand };
