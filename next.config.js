// ---------------------------------------------------------

const path = require('path')

// ---------------------------------------------------------

module.exports = {
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.prismic.io', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  publicRuntimeConfig: {
    DEBUG_MEDIA_QUERIES: process.env.DEBUG_MEDIA_QUERIES,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use 'global' as *;`,
  },
  swcMinify: true,
}
