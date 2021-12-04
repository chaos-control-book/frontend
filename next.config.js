const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfiguration = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
  typescript: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с типизацией, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! WARN !!
    // В production режиме отключает проверку типов и, соответственно, ошибки,
    // связанные с ESLint/Prettier, чтобы сборка происходила быстрее.
    // !! WARN !!
    // С этой опцией обязательна проверка типов и ошибок в development режиме!
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([withBundleAnalyzer, withPWA], nextConfiguration);
