import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: reactPlugin,
        },
        rules: {
            'react/jsx-uses-react': 'warn',
            'react/jsx-uses-vars': 'warn',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
];
