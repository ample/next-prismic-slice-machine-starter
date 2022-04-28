const path = require('path');

// ---------------------------------------------------------

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  publicRuntimeConfig: {
    DEBUG_MEDIA_QUERIES: process.env.DEBUG_MEDIA_QUERIES,
  },
  requireConfigFile: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use 'global' as *;`,
  },
};
