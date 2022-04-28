module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['**/storybook-static/*.js'],
  overrides: [
    {
      files: ['./pages/**/*.js', './templates/**/*.js'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['./**/fixtures.js', './**/stories.js'],
      rules: {
        'import/no-anonymous-default-export': 0,
        'jsx-a11y/alt-text': [0, { img: ['Image'] }],
      },
    },
    {
      extends: ['plugin:testing-library/react'],
      files: ['./**/test.spec.js'],
    },
  ],
  plugins: ['jest', 'jsx-a11y', 'prettier', 'react', 'sort-keys-fix'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'react/no-unescaped-entities': [2, { forbid: ['<', '>', '{', '}'] }],
    'react/prop-types': [
      2,
      {
        ignore: [
          'activeClassName',
          'backgroundImageClassName',
          'className',
          'contentClassName',
          'key',
          'size',
        ],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: true },
    ],
    'sort-keys-fix/sort-keys-fix': 1,
  },
};
