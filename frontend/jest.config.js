module.exports = {
    modulePathIgnorePatterns: ['__utils__'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/__utils__/setup-tests.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
