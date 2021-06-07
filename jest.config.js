module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/theme/**/*.ts(x)?',
    '!src/**/mock.ts',
    '!src/utils/test-utils.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest/'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/.jest/mock-css.ts'
  }
}
