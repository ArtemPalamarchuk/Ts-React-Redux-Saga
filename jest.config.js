module.exports = {
  verbose: true,
  clearMocks: true,
  roots: ['<rootDir>'],
  snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./setupTest.js'],
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@src(.*)$': '<rootDir>/src/$1',
  },
};