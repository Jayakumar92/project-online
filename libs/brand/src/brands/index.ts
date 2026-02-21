import type { BrandConfig, BrandId } from '../types';
import { onlineDefaultBrand } from './online-default';
import { onlineClientABrand } from './online-client-a';

export const brands: Record<BrandId, BrandConfig> = {
  'online-default': onlineDefaultBrand,
  'online-client-a': onlineClientABrand,
};

export { onlineDefaultBrand, onlineClientABrand };
