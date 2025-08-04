import { isPackageExists } from 'local-pkg'
import basicConfig from '@cdlab996/eslint-config-basic'
import tsConfig from '@cdlab996/eslint-config-ts'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

const TS = isPackageExists('typescript')

if (!TS) {
  console.warn(
    '[@cdlab996/eslint-config-vue2] TypeScript is not installed, fallback to JS only.'
  )
}

export default [
  ...(TS ? tsConfig : basicConfig),

  // Vue 2 配置
  ...pluginVue.configs['flat/vue2-essential'],
  ...pluginVue.configs['flat/vue2-strongly-recommended'],
  ...pluginVue.configs['flat/vue2-recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: TS ? '@typescript-eslint/parser' : null,
        extraFileExtensions: ['.vue']
      }
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      ...(TS ? { '@typescript-eslint/no-unused-vars': 'off' } : {}),

      // Vue 2 基础规则（与 Vue 3 基本相同，但有些差异）
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/require-prop-types': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/prefer-import-from-vue': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-dupe-keys': 'off',
      'vue/no-setup-props-reactivity-loss': 'off',

      // Vue 2 特有规则（不支持 Vue 3 的一些特性）
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style']
        }
      ],
      'vue/block-tag-newline': [
        'error',
        {
          singleline: 'always',
          multiline: 'always'
        }
      ],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/custom-event-name-casing': ['error', 'camelCase'],

      // Vue 2 不支持 defineXXX 宏
      // 'vue/define-macros-order': 'off',

      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: ['-']
        }
      ],
      'vue/no-restricted-v-bind': ['error', '/^v-/'],
      'vue/no-useless-v-bind': 'error',
      'vue/no-unused-refs': 'error',
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/prefer-separate-static-class': 'error',

      // 其他规则与 Vue 3 保持一致
      'vue/array-bracket-spacing': ['error', 'never'],
      'vue/arrow-spacing': ['error', { before: true, after: true }],
      'vue/block-spacing': ['error', 'always'],
      'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'vue/comma-dangle': ['error', 'always-multiline'],
      'vue/comma-spacing': ['error', { before: false, after: true }],
      'vue/comma-style': ['error', 'last'],
      'vue/dot-location': ['error', 'property'],
      'vue/dot-notation': ['error', { allowKeywords: true }],
      'vue/eqeqeq': ['error', 'smart'],
      'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'vue/keyword-spacing': ['error', { before: true, after: true }],
      'vue/no-constant-condition': 'warn',
      'vue/no-empty-pattern': 'error',
      'vue/no-extra-parens': ['error', 'functions'],
      'vue/no-irregular-whitespace': 'error',
      'vue/no-loss-of-precision': 'error',
      'vue/no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement'
      ],
      'vue/no-sparse-arrays': 'error',
      'vue/object-curly-newline': ['error', { multiline: true, consistent: true }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      'vue/object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true
        }
      ],
      'vue/operator-linebreak': ['error', 'before'],
      'vue/prefer-template': 'error',
      'vue/quote-props': ['error', 'consistent-as-needed'],
      'vue/space-in-parens': ['error', 'never'],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': ['error', { words: true, nonwords: false }],
      'vue/template-curly-spacing': 'error'
    }
  }
]
