import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/api/index.ts', 'src/axios/index.ts', 'src/fetch/index.ts'],
  clean: true, // clears dist folder before building
  dts: true, // generate type declarations
  format: ['cjs', 'esm'], // support both module systems
  sourcemap: true, // helpful for debugging
  outDir: 'dist',
  target: 'esnext', // modern JS output
});
