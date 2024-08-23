/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  locales: ['en'],
  defaultLocale: 'en',
};
