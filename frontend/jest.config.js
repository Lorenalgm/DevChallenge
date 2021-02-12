module.exports = {
    modulePathIgnorePatterns: ['__utils__'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/__utils__/setup-tests.js'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__tests__/__utils__/file-mock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
};
