const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/shared/styles/3-helpers')],
  },
};

module.exports = withPlugins([[withBundleAnalyzer]], nextConfiguration);
