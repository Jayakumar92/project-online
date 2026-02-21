/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
// apps/online/native is 3 levels deep — go up 3 levels to reach monorepo root.
const monorepoRoot = path.resolve(projectRoot, '../../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// 3. Add additional source extensions
const { resolver } = config;
config.resolver = {
  ...resolver,
  sourceExts: [...resolver.sourceExts, 'mjs', 'cjs'],
};

// 4. Force singleton resolution for react/react-dom/react-native in monorepo.
// Prevents duplicate copies from libs/ causing useMemoCache errors.
const singletonPackages = {
  react: require.resolve('react', { paths: [projectRoot] }),
  'react/jsx-runtime': require.resolve('react/jsx-runtime', { paths: [projectRoot] }),
  'react/jsx-dev-runtime': require.resolve('react/jsx-dev-runtime', { paths: [projectRoot] }),
  'react-dom': require.resolve('react-dom', { paths: [projectRoot] }),
  'react-native': require.resolve('react-native', { paths: [projectRoot] }),
};
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  react: path.dirname(singletonPackages.react),
  'react-dom': path.dirname(singletonPackages['react-dom']),
  'react-native': path.dirname(singletonPackages['react-native']),
};

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });
