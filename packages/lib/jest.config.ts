import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
};

export default config;
