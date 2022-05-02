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
    deviceSizes: [
      320, 400, 480, 600, 720, 840, 960, 1040, 1140, 1280, 1440, 1600, 1920,
      2560, 3360,
    ],
    domains: ['images.prismic.io', 'images.unsplash.com'],
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
