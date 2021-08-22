# ESLint 配置使用

>   [中文文档](https://cn.eslint.org/)

.eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
    
  plugins: ['eslint-plugin-prettier'],
    
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  // 解析器选项
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    "var1": "writable",
    "var2": "readonly"
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
  },
};
```

