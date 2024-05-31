module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    'node_modules/(?!string-width|strip-ansi|cliui)'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  }
};
