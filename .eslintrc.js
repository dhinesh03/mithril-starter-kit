module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    globals: {
        'm': true
    },
    extends: 'eslint:recommended',    
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': ['warn'],
        'no-console': 0,
        'rest-spread-spacing': ["error", "never"]
    },
};