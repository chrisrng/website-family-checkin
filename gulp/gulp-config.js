import path from 'path';

const tempDirectory = 'tmp';
const sourceDirectory = 'src';
const libDirectory = 'lib';
const testFiles = [
  'test/**/*.spec.js'
];
const scriptSourceFiles = [
  'src/**/*.js',
];
const styleSourceFiles = [
  'src/**/*.{scss,css}',
];
const lintFiles = [
  'test/**/*.js',
  'src/**/*.js',
];
const scriptsToConcat = [
  'tmp/src-bundle.js',
];
const stylesToConcat = [...styleSourceFiles];

export {
  tempDirectory,
  sourceDirectory,
  libDirectory,
  testFiles,
  scriptSourceFiles,
  styleSourceFiles,
  lintFiles,
  stylesToConcat,
  scriptsToConcat,
};
