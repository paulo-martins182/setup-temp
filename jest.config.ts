import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.app.json'
      }
    ]
  },

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*test.tsx',
    '!src/**/*.d.ts',
    '!src/**/index.ts'
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  modulePaths: ['<rootDir>/src/'],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],

  testMatch: ['<rootDir>/src/**/*test.tsx'],
  testTimeout: 30000,
  watchman: true
}

export default config
