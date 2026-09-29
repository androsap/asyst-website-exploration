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
        "react/no-unescaped-entities": "off",
        "react/react-in-jsx-scope": "off",
        "no-useless-escape": "off",
        "no-case-declarations": "off",
        "react-hooks/rules-of-hooks": "off",
        "react-hooks/exhaustive-deps": "off",
        "import/no-anonymous-default-export": "off",
        "react/display-name": "off",
        "no-unsafe-optional-chaining": "off",
        "no-constant-condition": "off",
        "no-empty": "off",
        "jsx-a11y/alt-text": "off",
        "no-empty-pattern": "off",
        "react/jsx-no-target-blank": "off",
        "react/jsx-no-undef": "off",
        "no-undef": "off",
        "no-extra-semi": "off",
        "no-extra-boolean-cast": "off",
        "react/jsx-key": "off",
        "@typescript-eslint/no-unused-vars": [
            "error"
        ]
        // "no-unused-vars": "off",
        // "@typescript-eslint/no-unused-vars": "off",
        // "react/prop-types": "off"
    },
}
