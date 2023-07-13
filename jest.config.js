const nextJest = require('next/jest');
process.env.TZ = 'UTC';
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components-v2/(.*)$': '<rootDir>/src/components/$1',
    '^@/views/(.*)$': '<rootDir>/src/views/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  rootDir: './',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.tsx'],
  resetMocks: false,
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  nextJestConfig.transformIgnorePatterns = nextJestConfig.transformIgnorePatterns.map(pattern => {
    return pattern;
  });
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Workaround to put our SVG stub first
      '\\.svg': '<rootDir>/src/common/tests/svgStub.js',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
