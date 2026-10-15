module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        "no-useless-escape": "off",
        "no-case-declarations": "off",
        "react-hooks/rules-of-hooks": "off",
        "react-hooks/exhaustive-deps": "off",
        "no-unsafe-optional-chaining": "off",
        "no-constant-condition": "off",
        "no-empty": "off",
        "no-empty-pattern": "off",
        "no-undef": "off",
        "no-extra-semi": "off",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/no-unused-vars": [
            "error"
        ]
    },
}
