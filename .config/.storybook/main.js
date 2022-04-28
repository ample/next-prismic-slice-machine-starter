const path = require('path');

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
    builder: 'webpack5',
  },
  staticDirs: ['../../public'],
  stories: [
    '../../(components|layout)**/*.stories.mdx',
    '../../(components|layout)/**/*stories.js',
    './stories/**/*stories.js',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      alias: {
        assert: false,
        crypto: false,
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, '../../components'),
        '@content': path.resolve(__dirname, '../../content'),
        '@layout': path.resolve(__dirname, '../../layout'),
        '@root': path.resolve(__dirname, '../../'),
        '@styles': path.resolve(__dirname, '../../styles'),
        '@templates': path.resolve(__dirname, '../../templates'),
        '@utilities': path.resolve(__dirname, '../../utilities/'),
      },
    };

    return config;
  },
};
