## ⚙️ eslint-config-monorepo

### 🔧 Installation

```shell
pnpm add -D @cdlab996/eslint-config(TODO) @cdlab996/prettier-config
```

<!-- ### ESLint

TODO -->

### 🎨 Prettier

To configure Prettier, create a `.prettierrc.js` file in the root of your project and add the following content:

```javascript
// .prettierrc.js

module.exports = {
  ...require('@cdlab996/prettier-config'),
  // Add your custom configurations here
}
```

<!-- ## ⚙️ IDE Settings

### Visual Studio Code

To enable automatic code formatting with ESLint in Visual Studio Code, add the following settings to your workspace or user settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
``` -->

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
