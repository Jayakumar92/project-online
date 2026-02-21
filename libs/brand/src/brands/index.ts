import type { BrandConfig, BrandId } from '../types';
import { defaultBrand } from './default';
import { exampleBrand } from './example';
import { onlineDefaultBrand } from './online-default';
import { onlineClientABrand } from './online-client-a';
import { onlineClientBBrand } from './online-client-b';

export const brands: Record<BrandId, BrandConfig> = {
  // Base brands (backward compat)
  default: defaultBrand,
  example: exampleBrand,
  // Online project brands
  'online-default': onlineDefaultBrand,
  'online-client-a': onlineClientABrand,
  'online-client-b': onlineClientBBrand,
  // Education project brands — add education-default.ts when that project is created
  'education-default': defaultBrand, // placeholder until libs/brand/src/brands/education-default.ts is created
  // Commerce project brands — add commerce-default.ts when that project is created
  'commerce-default': defaultBrand, // placeholder until libs/brand/src/brands/commerce-default.ts is created
};

export { defaultBrand, exampleBrand, onlineDefaultBrand, onlineClientABrand, onlineClientBBrand };
