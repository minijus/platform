module.exports = {
    displayName: 'ngrx-universal-rehydrate-demo',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            stringifyContentPathRegex: '\\.(html|svg)$',

            tsconfig: '<rootDir>/tsconfig.spec.json',
        },
    },
    coverageDirectory: '../../coverage/apps/ngrx-universal-rehydrate-demo',
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
    transform: {
        '^.+.(ts|mjs|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
};
