const config = {
  verbose: true,
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  collectCoverage: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json'],
  setupFiles: ['<rootDir>/test/_setup.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/test/_setup.ts',
  ],
  projects: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

};

module.exports = config;
