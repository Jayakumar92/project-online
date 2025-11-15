import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/auth/components/index.ts',
    'src/auth/hooks/index.ts',
    'src/auth/api/index.ts',
    'src/auth/types/index.ts',
    'src/auth/native/components/index.ts',
    'src/auth/native/containers/index.ts',
    'src/auth/web/components/index.ts',
    'src/auth/web/containers/index.ts',
  ],
  clean: true, // clears dist folder before building
  dts: true, // generate type declarations
  format: ['cjs', 'esm'], // support both module systems
  sourcemap: true, // helpful for debugging
  outDir: 'dist',
  target: 'esnext', // modern JS output
});
