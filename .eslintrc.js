/* stylelint-disable-next-line название-правила */
module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': 0,
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'i18next/no-literal-string': ['error', {
            markupOnly: true
        }],
        '@typescript-eslint/ban-ts-comment': [2],
        'react/display-name': [0]
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    },
    {
        files: ['**/scripts/**/*'],
        rules: {
            '@typescript-eslint/no-var-requires': 'off'
        }
    },
    ]
};