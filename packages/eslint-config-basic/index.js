import js from '@eslint/js'
import globals from 'globals'
import pluginAntfu from 'eslint-plugin-antfu'
import pluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments'
import pluginHtml from 'eslint-plugin-html'
import pluginImport from 'eslint-plugin-import'
import pluginJsonc from 'eslint-plugin-jsonc'
import pluginMarkdown from 'eslint-plugin-markdown'
import pluginN from 'eslint-plugin-n'
import pluginNoOnlyTests from 'eslint-plugin-no-only-tests'
import pluginPromise from 'eslint-plugin-promise'
import pluginUnicorn from 'eslint-plugin-unicorn'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import pluginYml from 'eslint-plugin-yml'
import jsoncParser from 'jsonc-eslint-parser'
import yamlParser from 'yaml-eslint-parser'
import standardConfig from './standard.js'

export default [
  // 基础 JavaScript 配置
  js.configs.recommended,

  // Standard Style 规则
  standardConfig,

  // 全局配置
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      }
    },

    plugins: {
      antfu: pluginAntfu,
      'eslint-comments': pluginEslintComments,
      html: pluginHtml,
      import: pluginImport,
      n: pluginN,
      'no-only-tests': pluginNoOnlyTests,
      promise: pluginPromise,
      unicorn: pluginUnicorn,
      'unused-imports': pluginUnusedImports
    },

    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.mjs'] }
      }
    },

    rules: {
      // import 规则
      'import/first': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-unresolved': 'off',
      'import/no-absolute-path': 'off',
      'import/newline-after-import': 'off',
      'import/export': 'error',
      'import/no-duplicates': 'error',
      'import/no-named-default': 'error',
      'import/no-webpack-loader-syntax': 'error',

      // unused-imports 规则
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],

      // 基础规则
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-constant-condition': 'warn',
      'no-debugger': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-cond-assign': ['error', 'always'],
      'func-call-spacing': 'off',
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement'
      ],
      'no-return-await': 'off',
      'no-restricted-globals': [
        'error',
        { name: 'global', message: 'Use `globalThis` instead.' },
        { name: 'self', message: 'Use `globalThis` instead.' }
      ],
      'no-restricted-properties': [
        'error',
        {
          property: '__proto__',
          message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.'
        },
        {
          property: '__defineGetter__',
          message: 'Use `Object.defineProperty` instead.'
        },
        {
          property: '__defineSetter__',
          message: 'Use `Object.defineProperty` instead.'
        },
        {
          property: '__lookupGetter__',
          message: 'Use `Object.getOwnPropertyDescriptor` instead.'
        },
        {
          property: '__lookupSetter__',
          message: 'Use `Object.getOwnPropertyDescriptor` instead.'
        }
      ],

      // ES6 规则
      'no-var': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true
        }
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true
        }
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true
        }
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'off',

      // best-practice 规则
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'off',
      complexity: 'off',
      eqeqeq: ['error', 'smart'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-with': 'error',
      'no-void': 'error',
      'no-useless-escape': 'off',
      'no-invalid-this': 'error',
      'vars-on-top': 'error',
      'require-await': 'off',
      'no-return-assign': 'off',
      'max-statements-per-line': ['error', { max: 1 }],

      // Node.js 规则
      'n/prefer-global/buffer': ['error', 'never'],
      'n/no-callback-literal': 'off',
      'n/handle-callback-err': ['error', '^(err|error)$'],
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/process-exit-as-throw': 'error',

      // Promise 规则
      'promise/param-names': 'error',

      // Unicorn 规则
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-text-content': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/throw-new-error': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',

      'no-use-before-define': [
        'error',
        { functions: false, classes: false, variables: true }
      ],
      'eslint-comments/disable-enable-pair': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      'import/namespace': 'off',

      // antfu 规则
      'antfu/import-dedupe': 'error',
      'antfu/top-level-function': 'off',
      'antfu/if-new-line': 'off'
    }
  },

  // JSON 配置
  {
    files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
    languageOptions: {
      parser: jsoncParser
    },
    plugins: {
      jsonc: pluginJsonc
    },
    rules: {
      ...pluginJsonc.configs['recommended-with-jsonc'].rules,
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/no-octal-escape': 'error',
      'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': [
        'error',
        { allowMultiplePropertiesPerLine: true }
      ]
    }
  },

  // YAML 配置
  {
    files: ['**/*.yaml', '**/*.yml'],
    languageOptions: {
      parser: yamlParser
    },
    plugins: {
      yml: pluginYml
    },
    rules: {
      ...pluginYml.configs.standard.rules,
      'spaced-comment': 'off',
      'yml/no-empty-document': 'off'
    }
  },

  // Package.json 特殊配置
  {
    files: ['**/package.json'],
    languageOptions: {
      parser: jsoncParser
    },
    plugins: {
      jsonc: pluginJsonc
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'publisher', 'name', 'displayName', 'type', 'version', 'private',
            'packageManager', 'description', 'author', 'license', 'funding',
            'homepage', 'repository', 'bugs', 'keywords', 'categories',
            'sideEffects', 'exports', 'main', 'module', 'unpkg', 'jsdelivr',
            'types', 'typesVersions', 'bin', 'icon', 'files', 'engines',
            'activationEvents', 'contributes', 'scripts', 'peerDependencies',
            'peerDependenciesMeta', 'dependencies', 'optionalDependencies',
            'devDependencies', 'pnpm', 'overrides', 'resolutions', 'husky',
            'simple-git-hooks', 'lint-staged', 'eslintConfig'
          ]
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' }
        },
        {
          pathPattern: '^exports.*$',
          order: ['types', 'require', 'import']
        }
      ]
    }
  },

  // Markdown 配置
  {
    files: ['**/*.md'],
    plugins: {
      markdown: pluginMarkdown
    },
    processor: 'markdown/markdown'
  },

  // Markdown 中的代码块
  {
    files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      }
    },
    rules: {
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-unresolved': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'antfu/no-cjs-exports': 'off',
      'antfu/no-ts-export-equal': 'off'
    }
  },

  // TypeScript 文件特殊规则
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
      'no-void': ['error', { allowAsStatement: true }]
    }
  },

  // JavaScript 文件特殊规则
  {
    files: ['**/*.js', '**/*.cjs', '**/*.jsx'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  },

  // 脚本文件
  {
    files: ['**/scripts/**/*.*', '**/cli.*'],
    rules: {
      'no-console': 'off'
    }
  },

  // 测试文件
  {
    files: ['**/*.test.ts', '**/*.test.js', '**/*.spec.ts', '**/*.spec.js'],
    plugins: {
      'no-only-tests': pluginNoOnlyTests
    },
    rules: {
      'no-unused-expressions': 'off',
      'no-only-tests/no-only-tests': 'error'
    }
  },

  // 类型定义文件
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-duplicates': 'off'
    }
  },

  // 忽略文件
  {
    ignores: [
      '*.min.*',
      'CHANGELOG.md',
      'dist',
      'LICENSE*',
      'output',
      'out',
      'coverage',
      'public',
      'temp',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      '__snapshots__',
      '*.css',
      '*.png',
      '*.ico',
      '*.toml',
      '*.patch',
      '*.txt',
      '*.crt',
      '*.key',
      'Dockerfile',
      '.vitepress/cache',
      '.turbo'
    ]
  }
]
