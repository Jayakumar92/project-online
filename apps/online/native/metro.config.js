/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../../..');

const config = getDefaultConfig(projectRoot);

// Watch shared libs and hoisted node_modules so Metro can resolve monorepo packages.
config.watchFolders = [
  path.resolve(monorepoRoot, 'libs'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Resolve local node_modules first, then hoisted root node_modules.
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Force singleton react/react-native to prevent duplicate copies from libs/.
config.resolver.extraNodeModules = {
  react: path.dirname(require.resolve('react', { paths: [projectRoot] })),
  'react-native': path.dirname(require.resolve('react-native', { paths: [projectRoot] })),
};

module.exports = withNativeWind(config, { input: './global.css', inlineRem: 16 });
