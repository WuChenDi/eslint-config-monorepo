import tsConfig from '@cdlab996/eslint-config-ts'
import { isPackageExists } from 'local-pkg'
import pluginReact from '@eslint-react/eslint-plugin'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReactRefresh from 'eslint-plugin-react-refresh'

// 检测项目中的包来决定配置
const ReactRefreshAllowConstantExportPackages = ['vite']
const NextJsPackages = ['next']
const RemixPackages = ['@remix-run/node', '@remix-run/react', '@remix-run/serve', '@remix-run/dev']
const ReactRouterPackages = ['@react-router/node', '@react-router/react', '@react-router/serve', '@react-router/dev']

// 获取 @eslint-react 的所有子插件
const eslintReactPlugins = pluginReact.configs.all.plugins

// 检测项目环境
const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(pkg => isPackageExists(pkg))
const isUsingNext = NextJsPackages.some(pkg => isPackageExists(pkg))
const isUsingRemix = RemixPackages.some(pkg => isPackageExists(pkg))
const isUsingReactRouter = ReactRouterPackages.some(pkg => isPackageExists(pkg))

export default [
  ...tsConfig,

  {
    name: 'cdlab996/react/setup',
    plugins: {
      '@eslint-react': eslintReactPlugins['@eslint-react'],
      '@eslint-react/dom': eslintReactPlugins['@eslint-react/dom'],
      '@eslint-react/hooks-extra': eslintReactPlugins['@eslint-react/hooks-extra'],
      '@eslint-react/naming-convention': eslintReactPlugins['@eslint-react/naming-convention'],
      '@eslint-react/web-api': eslintReactPlugins['@eslint-react/web-api'],
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh
    }
  },

  // 主要规则配置
  {
    name: 'cdlab996/react/rules',
    files: ['**/*.?([cm])[jt]s?(x)'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      sourceType: 'module'
    },
    settings: {
      // 为 @eslint-react/eslint-plugin 设置
      'react-x': {
        version: 'detect'
      }
    },
    rules: {
      // recommended rules from @eslint-react/eslint-plugin https://eslint-react.xyz/docs/rules/overview#core-rules
      '@eslint-react/jsx-no-duplicate-props': 'warn',
      '@eslint-react/jsx-uses-vars': 'warn',
      '@eslint-react/no-access-state-in-setstate': 'error',
      '@eslint-react/no-array-index-key': 'warn',
      '@eslint-react/no-children-count': 'warn',
      '@eslint-react/no-children-for-each': 'warn',
      '@eslint-react/no-children-map': 'warn',
      '@eslint-react/no-children-only': 'warn',
      '@eslint-react/no-children-to-array': 'warn',
      '@eslint-react/no-clone-element': 'warn',
      '@eslint-react/no-comment-textnodes': 'warn',
      '@eslint-react/no-component-will-mount': 'error',
      '@eslint-react/no-component-will-receive-props': 'error',
      '@eslint-react/no-component-will-update': 'error',
      '@eslint-react/no-context-provider': 'warn',
      '@eslint-react/no-create-ref': 'error',
      '@eslint-react/no-default-props': 'error',
      '@eslint-react/no-direct-mutation-state': 'error',
      '@eslint-react/no-duplicate-key': 'warn',
      '@eslint-react/no-forward-ref': 'warn',
      '@eslint-react/no-implicit-key': 'warn',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-nested-component-definitions': 'error',
      '@eslint-react/no-prop-types': 'error',
      '@eslint-react/no-redundant-should-component-update': 'error',
      '@eslint-react/no-set-state-in-component-did-mount': 'warn',
      '@eslint-react/no-set-state-in-component-did-update': 'warn',
      '@eslint-react/no-set-state-in-component-will-update': 'warn',
      '@eslint-react/no-string-refs': 'error',
      '@eslint-react/no-unsafe-component-will-mount': 'warn',
      '@eslint-react/no-unsafe-component-will-receive-props': 'warn',
      '@eslint-react/no-unsafe-component-will-update': 'warn',
      '@eslint-react/no-unstable-context-value': 'warn',
      '@eslint-react/no-unstable-default-props': 'warn',
      '@eslint-react/no-unused-class-component-members': 'warn',
      '@eslint-react/no-unused-state': 'warn',
      '@eslint-react/no-use-context': 'warn',
      '@eslint-react/no-useless-forward-ref': 'warn',

      // recommended rules from @eslint-react/dom https://eslint-react.xyz/docs/rules/overview#dom-rules
      '@eslint-react/dom/no-dangerously-set-innerhtml': 'warn',
      '@eslint-react/dom/no-dangerously-set-innerhtml-with-children': 'error',
      '@eslint-react/dom/no-find-dom-node': 'error',
      '@eslint-react/dom/no-flush-sync': 'error',
      '@eslint-react/dom/no-hydrate': 'error',
      '@eslint-react/dom/no-missing-button-type': 'warn',
      '@eslint-react/dom/no-missing-iframe-sandbox': 'warn',
      '@eslint-react/dom/no-namespace': 'error',
      '@eslint-react/dom/no-render': 'error',
      '@eslint-react/dom/no-render-return-value': 'error',
      '@eslint-react/dom/no-script-url': 'warn',
      '@eslint-react/dom/no-unsafe-iframe-sandbox': 'warn',
      '@eslint-react/dom/no-unsafe-target-blank': 'warn',
      '@eslint-react/dom/no-use-form-state': 'error',
      '@eslint-react/dom/no-void-elements-with-children': 'error',

      // recommended rules from eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

      // recommended rules from @eslint-react/hooks-extra https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'warn',
      '@eslint-react/hooks-extra/no-unnecessary-use-prefix': 'warn',
      '@eslint-react/hooks-extra/prefer-use-state-lazy-initialization': 'warn',

      // recommended rules from @eslint-react/web-api https://eslint-react.xyz/docs/rules/overview#web-api-rules
      '@eslint-react/web-api/no-leaked-event-listener': 'warn',
      '@eslint-react/web-api/no-leaked-interval': 'warn',
      '@eslint-react/web-api/no-leaked-resize-observer': 'warn',
      '@eslint-react/web-api/no-leaked-timeout': 'warn',

      // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: isAllowConstantExport,
          allowExportNames: [
            ...(isUsingNext
              ? [
                  'dynamic',
                  'dynamicParams',
                  'revalidate',
                  'fetchCache',
                  'runtime',
                  'preferredRegion',
                  'maxDuration',
                  'config',
                  'generateStaticParams',
                  'metadata',
                  'generateMetadata',
                  'viewport',
                  'generateViewport',
                ]
              : []),
            ...(isUsingRemix || isUsingReactRouter
              ? [
                  'meta',
                  'links',
                  'headers',
                  'loader',
                  'action',
                  'clientLoader',
                  'clientAction',
                  'handle',
                  'shouldRevalidate',
                ]
              : []),
          ],
        },
      ]
    }
  },

  // JSX/TSX 特定规则
  {
    name: 'cdlab996/react/jsx-typescript',
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      '@typescript-eslint/no-use-before-define': 'off',
      // JSX 相关的额外规则
      '@eslint-react/jsx-no-leaked-render': 'warn',
      '@eslint-react/jsx-no-useless-fragment': 'warn'
    }
  },
]
