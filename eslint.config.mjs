import nextConfig from 'eslint-config-next';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...nextConfig,
  ...compat.extends('plugin:prettier/recommended'),
  // Next 16 업그레이드로 eslint-plugin-react-hooks v7이 새 규칙을 도입하면서
  // 기존 코드 전반이 위반 상태가 됨 — 별도 리팩토링 전까지 비활성화
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/static-components': 'off',
    },
  },
];

export default eslintConfig;
