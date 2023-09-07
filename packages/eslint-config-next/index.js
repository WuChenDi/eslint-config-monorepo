module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  extends: [
    '@cdlab996/eslint-config-react',
    /**
     * TODO: Pending error
     *
     * To run "pnpm run lint" in the next-demo project without errors, disable the plugin:react-hooks/recommended in eslint-config-react.
     *
     * Plugin "react-hooks" was conflicted between ".eslintrc.json » @cdlab996/eslint-config » @cdlab996/eslint-config-next » eslint-config-next » plugin:react-hooks/recommended" and ".eslintrc.json » @cdlab996/eslint-config » @cdlab996/eslint-config-next » @cdlab996/eslint-config-react » plugin:react-hooks/recommended".
     */
    // 'next',
    /**
     * whether it is established
     *
     * 'next' !== 'eslint-config-next',
     */
    'plugin:mdx/recommended',
    'plugin:@next/next/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    '@next/next/no-img-element': 0,
  },
}
