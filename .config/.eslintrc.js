module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:unicorn/recommended',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['**/slices/index.js', '**/storybook-static/*.js'],
  overrides: [
    {
      files: ['./pages/**/*.js', './templates/**/*.js'],
      rules: {
        'react/prop-types': 0,
      },
    },
    {
      files: ['./pages/api/exit-preview.js', './pages/api/preview.js'],
      rules: {
        'unicorn/prevent-abbreviations': 0,
      },
    },
    {
      files: ['./**/fixtures.js', './**/stories.js', './pages/api/preview.js'],
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
  plugins: [
    'jest',
    'jsx-a11y',
    'prettier',
    'react',
    'sort-destructure-keys',
    'sort-imports-es6-autofix',
    'sort-keys-fix',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        shorthandLast: true,
        multiline: 'ignore',
        ignoreCase: true,
        reservedFirst: ['key'],
      },
    ],
    'react/no-unescaped-entities': [2, { forbid: ['<', '>', '{', '}'] }],
    'react/prop-types': [
      'error',
      {
        ignore: [
          'activeClassName',
          'backgroundImageClassName',
          'className',
          'contentClassName',
          'key',
          'size',
          'slice',
        ],
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'none', 'single', 'multiple'],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'unicorn/prefer-module': 'off',
  },
}
