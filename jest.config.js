/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/mock/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/src/mock/styleMock.ts',
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/src/mock/fileMock.ts',
  },
  // to obtain access to the matchers.
  setupFilesAfterEnv: ['./src/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};
