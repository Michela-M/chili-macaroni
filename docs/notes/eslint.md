# ESLint Notes

## Introduction

ESLint is a tool for identifying and fixing problems in JavaScript code. It helps maintain code quality and consistency.

## Installation

To install ESLint, use the following command:

```bash
npm install eslint --save-dev
```

## Basic Usage

1. Initialize ESLint in your project:

```bash
npx eslint --init
```

2. Run ESLint on your files:

```bash
npx eslint yourfile.js
```

## Configuration

ESLint can be configured using a `.eslintrc` file. Example:

```json
{
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

## Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [ESLint GitHub Repository](https://github.com/eslint/eslint)
