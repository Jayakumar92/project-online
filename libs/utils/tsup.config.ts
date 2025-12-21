import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/collections/index.ts',
    'src/dates/index.ts',
    'src/helpers/index.ts',
    'src/strings/index.ts',
    'src/validations/index.ts',
  ],
  clean: true, // clears dist folder before building
  dts: true, // generate type declarations
  format: ['cjs', 'esm'], // support both module systems
  sourcemap: true, // helpful for debugging
  outDir: 'dist',
  target: 'esnext', // modern JS output
});
