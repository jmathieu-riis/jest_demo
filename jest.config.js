const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    roots: ['<rootDir>'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' } ),
    testMatch: ['**/test/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
    transform: {
        '^.+\\.(ts|js)$': 'ts-jest',
    }
};
