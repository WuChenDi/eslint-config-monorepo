## ⚙️ eslint-config-monorepo

### 🔧 Installation

```shell
# @cdlab996/eslint-config-vue

pnpm add -D @cdlab996/eslint-config eslint

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
// settings.json

{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    // "source.organizeImports": false
  },
  "eslint.validate": ["vue", "ts", "tsx"],
}
```

## ⚡ Credits

This project is inspired by:

- https://github.com/zolplay-cn/config-monorepo
- https://github.com/antfu/eslint-config

## 📜 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [wudi](https://github.com/WuChenDi)
