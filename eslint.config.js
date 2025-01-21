import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginQuery from '@tanstack/eslint-plugin-query'
import eslintJs from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import * as importPlugin from 'eslint-plugin-import'

export default tseslint
	.config(
		{ ignores: ['dist'] },
		{
			extends: [
				js.configs.recommended,
				eslintJs.configs.recommended,
				eslintReact.configs.recommended,
				...tseslint.configs.recommended,
				...pluginQuery.configs['flat/recommended']
			],
			files: ['**/*.{ts,tsx}'],
			languageOptions: {
				parser: tseslint.parser,
				parserOptions: {
					projectService: true
				},
				ecmaVersion: 2020,
				globals: globals.browser
			},
			plugins: {
				'react-hooks': reactHooks,
				'react-refresh': reactRefresh,
				import: importPlugin
			},
			rules: {
				...reactHooks.configs.recommended.rules,
				'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'@typescript-eslint/no-throw-literal': 0,
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/no-unused-vars': 'warn',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase']
					}
				],
				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/array-type': 'error',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/method-signature-style': 'error',
				'@typescript-eslint/max-params': 'error',
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/prefer-find': 'warn',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-literal-enum-member': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/prefer-string-starts-ends-with': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						prefer: 'type-imports'
					}
				],
				'@typescript-eslint/member-ordering': [
					'warn',
					{
						default: {
							memberTypes: ['field', 'signature', 'constructor', 'method'],
							order: 'alphabetically-case-insensitive',
							optionalityOrder: 'required-first'
						}
					}
				],
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksVoidReturn: {
							attributes: false
						}
					}
				],
				'react-hooks/exhaustive-deps': 'warn',
				'react-hooks/rules-of-hooks': 'error',
				'object-shorthand': 'error',
				'prefer-spread': 'error',
				'prefer-template': 'warn',
				'prefer-rest-params': 'error',
				'prefer-destructuring': [
					'error',
					{
						array: false,
						object: true
					}
				],
				'no-var': 'error',
				'no-eval': 'error',
				'no-implied-eval': 'error',
				'no-console': 'warn',
				'no-useless-return': 'error',
				'no-nested-ternary': 'error',
				'no-else-return': 'error',
				'array-callback-return': ['error', { allowImplicit: true, checkForEach: false }],
				'default-case': 'error',
				'default-case-last': 'error',
				'default-param-last': 'error',
				'import/newline-after-import': [
					'error',
					{
						count: 1
					}
				],
				'import/order': [
					'error',
					{
						pathGroups: [
							{
								pattern: 'react',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@storybook',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@storybook/*',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@assets/*',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: 'react-dom',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: 'react-dom/client',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: 'react-router-dom',
								group: 'builtin'
							},
							{
								pattern: 'react-*',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@reduxjs/toolkit*',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@tanstack/react-query*',
								group: 'builtin',
								position: 'before'
							},
							{
								pattern: '@react-oauth/google',
								group: 'builtin'
							},
							{
								pattern: 'react-icons',
								group: 'builtin'
							},
							{
								pattern: 'swiper/react',
								group: 'builtin'
							},
							{
								pattern: 'styled-components',
								group: 'builtin',
								position: 'after'
							},
							{
								pattern: 'react-hook-form',
								group: 'internal',
								position: 'after'
							},
							{
								pattern: 'formik',
								group: 'internal',
								position: 'after'
							},
							{
								pattern: '@query*',
								group: 'internal'
							},
							{
								pattern: '@store',
								group: 'internal'
							},
							{
								pattern: '@store/**',
								group: 'internal'
							},
							{
								pattern: '@slices',
								group: 'internal'
							},
							{
								pattern: '@slices/**',
								group: 'internal'
							},
							{
								pattern: '@context/**',
								group: 'internal'
							},
							{
								pattern: '~/components/**',
								group: 'internal'
							},
							{
								pattern: '@components/**',
								group: 'internal'
							},
							{
								pattern: '@pages/**',
								group: 'internal'
							},
							{
								pattern: '~/pages/**',
								group: 'internal'
							},
							{
								pattern: '@helpers/**',
								group: 'internal'
							},
							{
								pattern: '~/helpers/**',
								group: 'internal'
							},
							{
								pattern: '@hooks/**',
								group: 'internal'
							},
							{
								pattern: '~/hooks',
								group: 'internal'
							},
							{
								pattern: '@utils/**',
								group: 'internal'
							},
							{
								pattern: '~/utils/**',
								group: 'internal'
							},
							{
								pattern: '@reducers',
								group: 'internal'
							},
							{
								pattern: '@reducers/**',
								group: 'internal'
							},
							{
								pattern: '@constants/**',
								group: 'internal'
							},
							{
								pattern: '~/constants/**',
								group: 'internal'
							},
							{
								pattern: './context/**',
								group: 'sibling',
								position: 'after'
							},
							{
								pattern: './context',
								group: 'sibling',
								position: 'after'
							},
							{
								pattern: './components',
								group: 'parent'
							},
							{
								pattern: './components/**',
								group: 'parent'
							},
							{
								pattern: './',
								group: 'parent'
							},
							{
								pattern: './components/**.style',
								group: 'external',
								position: 'before'
							},
							{
								pattern: './**.style',
								group: 'external',
								position: 'before'
							},
							{
								pattern: './helpers',
								group: 'external'
							},
							{
								pattern: './helpers/**',
								group: 'external'
							},
							{
								pattern: './hooks',
								group: 'external',
								position: 'after'
							},
							{
								pattern: './hooks/**',
								group: 'external',
								position: 'after'
							},
							{
								pattern: './constants',
								group: 'type',
								position: 'before'
							},
							{
								pattern: './constants/**',
								group: 'type',
								position: 'before'
							},
							{
								pattern: './types',
								group: 'type',
								position: 'after'
							},
							{
								pattern: '@types/**',
								group: 'type'
							},
							{
								pattern: '~/**/**.css',
								group: 'object'
							},
							{
								pattern: './**/**.css',
								group: 'object'
							}
						],
						pathGroupsExcludedImportTypes: ['react'],
						'newlines-between': 'always',
						alphabetize: {
							order: 'asc',
							caseInsensitive: true
						},
						groups: ['builtin', 'internal', 'index', 'sibling', 'parent', 'external', 'type', 'object']
					}
				]
			}
		}
	)
	.concat(eslintPluginPrettier)
