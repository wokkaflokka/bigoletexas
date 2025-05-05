import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Remove unused exports
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@next/bundle-analyzer'],
  },
  // Disable features we don't need
  poweredByHeader: false,
  compress: true,
  // Optimize images
  images: {
    domains: [],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { dev, isServer }) => {
    // Add resolveLoader configuration
    config.resolveLoader = {
      ...config.resolveLoader,
      modules: ['node_modules', path.resolve(__dirname, '.')],
    };

    // Only apply optimizations in production
    if (!dev && !isServer) {
      // Remove unused modules
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: true,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
                pure_funcs: ['console.log'],
                unused: true,
                dead_code: true,
              },
              mangle: true,
              format: {
                comments: false,
              },
            },
          }),
        ],
      };

      // Add JavaScript Obfuscator
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'post',
        use: {
          loader: './obfuscator-loader.js',
          options: {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            rotateStringArray: true,
            selfDefending: true,
            shuffleStringArray: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
          },
        },
      });
    }

    return config;
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
