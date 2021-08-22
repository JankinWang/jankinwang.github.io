# ESLint 配置使用

>   [中文文档](https://cn.eslint.org/)



安装&初始化

```shell
npm install eslint --save-dev

eslint --init
```



.eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
    
  plugins: ['eslint-plugin-prettier'],
    
  extends: [
    'airbnb-base', // 第三方规则
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



## eslint 与 prettier 兼容

>   [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#options)

安装

```shell
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier

npm install --save-dev eslint-config-prettier
```

.eslintrc

```json
{
  "extends": ["plugin:prettier/recommended"],
    
  rules: {
      // 以这种方式 覆盖 prettier 默认配置
      "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}],
      
      // 或者
      
      // 直接启用 .prettier 来配置
      "prettier/prettier": ["error", {}, {
  		"usePrettierrc": false
	  }]
  }
}
```

