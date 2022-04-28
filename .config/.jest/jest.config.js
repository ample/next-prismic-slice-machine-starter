const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    '\\@components\\/(.*)$': `<rootDir>/components/$1`,
    '\\@content\\/(.*)$': `<rootDir>/content/$1`,
    '\\@layout\\/(.*)$': `<rootDir>/layout/$1`,
    '\\@root\\/(.*)$': `<rootDir>/$1`,
    '\\@templates\\/(.*)$': `<rootDir>/templates/$1`,
    '\\@utilities\\/(.*)$': `<rootDir>/utilities/$1`,
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  rootDir: '../../',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/.config/.jest/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
