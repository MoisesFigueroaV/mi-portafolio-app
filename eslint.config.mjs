import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: ['.next/'],
  },
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
    ],
  }),
  // Add any custom rules or overrides here
  // For example, to add a specific rule:
  // {
  //   rules: {
  //     'react/no-unescaped-entities': 'off',
  //   },
  // },
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];

export default config;
