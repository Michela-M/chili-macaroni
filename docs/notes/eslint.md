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

There are two primary ways to configure ESLint:

1. Configuration Comments - use JavaScript comments to embed configuration information directly into a file.

2. Configuration Files - use a JavaScript file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an eslint.config.js file which ESLint will look for and read automatically, or you can specify a configuration file on the command line.

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

<hr>
You can configure rules individually by defining a new object with a rules key, as in this example:

```json
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{ files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },

	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
]);
```

The names "no-unused-vars" and "no-undef" are the names of rules in ESLint. The first value is the error level of the rule and can be one of these values:

- “off” or 0 - turn the rule off
- “warn” or 1 - turn the rule on as a warning (doesn’t affect exit code)
- “error” or 2 - turn the rule on as an error (exit code will be 1)

The three error levels allow you fine-grained control over how ESLint applies rules.

## Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [ESLint GitHub Repository](https://github.com/eslint/eslint)
