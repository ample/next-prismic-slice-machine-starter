// ---------------------------------------------------------

const path = require('path')

// ---------------------------------------------------------

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: {
          options: {
            configureJSX: true,
          },
        },
      },
    },
    '@whitespace/storybook-addon-html',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../../next.config.js'),
      },
    },
    'storybook-dark-mode',
    'storybook-mobile',
  ],
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
    disableTelemetry: true,
  },
  staticDirs: ['../../public'],
  stories: [
    '../../(components|layout|slices)/**/*stories.js',
    './stories/**/*stories.js',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      alias: {
        assert: false,
        crypto: false,
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, '../../components'),
        '@layout': path.resolve(__dirname, '../../layout'),
        '@root': path.resolve(__dirname, '../../'),
        '@slices': path.resolve(__dirname, '../../slices'),
        '@templates': path.resolve(__dirname, '../../templates'),
        '@utilities': path.resolve(__dirname, '../../utilities/'),
      },
      fallback: {
        util: false,
      },
    }

    return config
  },
}
