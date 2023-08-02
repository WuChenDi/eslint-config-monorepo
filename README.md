## ⚙️ eslint-config-monorepo

### 🔧 Installation

```shell
pnpm add -D @cdlab996/eslint-config @cdlab996/prettier-config
```

### ESLint

```javascript
// .eslintrc.js

// Only use if you want a stricter ruleset
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@cdlab996',
}
```

### 🎨 Prettier

To configure Prettier, create a `.prettierrc.js` file in the root of your project and add the following content:

```javascript
// .prettierrc.js

module.exports = {
  ...require('@cdlab996/prettier-config'),
  // Add your custom configurations here
}
```

## ⚙️ IDE Settings

### Visual Studio Code

To enable automatic code formatting with ESLint in Visual Studio Code, add the following settings to your workspace or user settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## ⚡ Credits

This project is inspired by:

- https://github.com/zolplay-cn/config-monorepo
- https://github.com/antfu/eslint-config

## 📜 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [WuChenDi](https://github.com/WuChenDi)
