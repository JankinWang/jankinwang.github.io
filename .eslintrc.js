module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
}
