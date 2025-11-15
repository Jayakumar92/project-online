import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/constants/index.ts', 'src/types/index.ts', 'src/validations/index.ts'],
  clean: true, // clears dist folder before building
  dts: true, // generate type declarations
  format: ['cjs', 'esm'], // support both module systems
  sourcemap: true, // helpful for debugging
  outDir: 'dist',
  target: 'esnext', // modern JS output
});
