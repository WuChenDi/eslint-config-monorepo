import fs from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import basicConfig from '@cdlab996/eslint-config-basic'
import tseslint from 'typescript-eslint'
import pluginJest from 'eslint-plugin-jest'

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'

export default tseslint.config(
  ...basicConfig,

  // TypeScript 基础配置
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts']
        }
      }
    },
    rules: {
      // import 规则
      'import/named': 'off',

      // TypeScript 规则
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-ignore': 'allow-with-description' }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', disallowTypeAnnotations: false }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-require-imports': 'error',

      // 覆盖 JS 规则
      'no-useless-constructor': 'off',
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: false, variables: true }
      ],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',
      semi: 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      quotes: 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': ['error', 'functions'],

      // antfu 规则
      'antfu/no-cjs-exports': 'error',
      'antfu/no-ts-export-equal': 'error',

      // 关闭的规则
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },

  // 类型检查配置（如果存在 tsconfig）
  ...(fs.existsSync(join(process.cwd(), tsconfig)) ? [
    {
      files: ['**/*.{ts,tsx,mts,cts}'],
      languageOptions: {
        parserOptions: {
          project: [tsconfig],
          tsconfigRootDir: process.cwd()
        }
      },
      rules: {
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error'
      }
    }
  ] : []),

  // Jest 测试文件配置
  {
    files: ['**/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
    plugins: {
      jest: pluginJest
    },
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error'
    }
  }
)
