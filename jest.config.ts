import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest', // Use ts-jest preset for TypeScript compatibility
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Map @/ to the root directory for imports
    '\\.(css|scss)$': 'identity-obj-proxy', // Mock CSS imports for component testing
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
