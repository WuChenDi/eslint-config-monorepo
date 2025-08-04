import pluginNextJS from '@next/eslint-plugin-next'

function normalizeRules(rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) =>
      [key, typeof value === 'string' ? [value] : value],
    ),
  )
}

export default [
  {
    name: 'cdlab996/nextjs/setup',
    plugins: {
      next: pluginNextJS,
    }
  },

  {
    files: ['**/*.?([cm])[jt]s?(x)'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
    },
    name: 'cdlab996/nextjs/rules',
    rules: {
      ...normalizeRules(pluginNextJS.configs.recommended.rules),
      ...normalizeRules(pluginNextJS.configs['core-web-vitals'].rules),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
