# ⚙️ eslint-config-monorepo

## 📦 Packages

| Package                                                       | Description          | Latest                                                                                                                                             |
| ------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@cdlab996/eslint-config-ts](packages/eslint-config-ts)       | 🔨 Eslint TypeScript | [![npm version](https://img.shields.io/npm/v/@cdlab996/eslint-config-ts?logo=npm)](https://www.npmjs.com/package/@cdlab996/eslint-config-ts)       |
| [@cdlab996/eslint-config-next](packages/eslint-config-next)   | 🔨 Eslint Nextjs     | [![npm version](https://img.shields.io/npm/v/@cdlab996/eslint-config-next?logo=npm)](https://www.npmjs.com/package/@cdlab996/eslint-config-next)   |
| [@cdlab996/eslint-config-react](packages/eslint-config-react) | 🔨 Eslint React      | [![npm version](https://img.shields.io/npm/v/@cdlab996/eslint-config-react?logo=npm)](https://www.npmjs.com/package/@cdlab996/eslint-config-react) |
| [@cdlab996/eslint-config-vue](packages/eslint-config-vue)     | 🔨 Eslint Vue        | [![npm version](https://img.shields.io/npm/v/@cdlab996/eslint-config-vue?logo=npm)](https://www.npmjs.com/package/@cdlab996/eslint-config-vue)     |
| [@cdlab996/prettier-config](packages/prettier-config)         | 🔨 prettier          | [![npm version](https://img.shields.io/npm/v/@cdlab996/prettier-config?logo=npm)](https://www.npmjs.com/package/@cdlab996/prettier-config)         |

### 🔧 Installation

```shell
# @cdlab996/eslint-config-vue

pnpm add -D @cdlab996/eslint-config eslint@8.57.0

pnpm add -D @cdlab996/prettier-config prettier
```

### 🎨 ESLint

```javascript
// .eslintrc.js/cjs

// Only use if you want a stricter ruleset
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@cdlab996',
}
```

### 🎨 Prettier

To configure Prettier, create a `.prettierrc.js` file in the root of your project and add the following content:

```javascript
// .prettierrc.js/cjs

module.exports = {
  ...require('@cdlab996/prettier-config'),
  // Add your custom configurations here
}
```

## ⚙️ IDE Settings

### Visual Studio Code

To enable automatic code formatting with ESLint in Visual Studio Code, add the following settings to your workspace or user settings:

```json
// .vscode/settings.json

{
  // Disable the default formatter, use eslint instead
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit",
    "source.organizeImports": "never"
  },
  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml"
  ],
  "stylelint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml"
  ]
}
```

## ⚡ Credits

This project is inspired by:

- <https://github.com/zolplay-cn/config-monorepo>
- <https://github.com/antfu/eslint-config>

## 📜 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [wudi](https://github.com/WuChenDi)
