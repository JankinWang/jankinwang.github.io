# webpack 创建一个Vue项目

## 配置清单

-   webpack
-   vue
    -   vue-loader
    -   vue-template-compiler
-   sass
-   PostCss
-   Babel
-   Jest
-   vue router
-   vuex
-   TypeScript
-   分离开发和生产环境

## 应用实例

-   webpack-vue-mpa  基于webpack vue2 的多页面应用

-   webpack-vue-spa  基于webpack vue2 的单页面应用

##  webpack 安装与配置

### 安装 webpack

```shell
# 创建项目目录 如：project-dir

# 初始化目录
npm init

# 安装 webpack 和 webpack-cli
npm install webpack webpack-cli --save-dev

# 安装 webpack 插件
npm install --save-dev html-webpack-plugin
npm install --save-dev webpack-bundle-analyzer

# 安装 loader
npm install --save-dev style-loader css-loader

# 开发环境 webpack-dev-server
npm install --save-dev webpack-dev-server

```



###  基础配置

```js
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;


module.exports = {
  // mode: 'development', // production
  // target: 'web',
  entry: {
    main: './src/main.js',
  },

  output: {
    filename: 'assets/js/[name]-bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist/'),
    clean: true,
    environment: {
      arrowFunction: false,
      destructuring: false,
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // 后面会用 vue-style-loader 替换
          'css-loader'
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name]-[hash][ext]',
        },
      },
        
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'main',
      chunks: ['main'],
      publicPath: '/',
      template: './public/index.html',
    }),
      
     // 分析 bundle
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),

  ],
};

```



### 设置 scripts

```json
// package.json

"scripts": {
    "build": "webpack --mode production --progress",
    "dev": "webpack serve --mode development --progress --open",
    "watch": "webpack --watch --mode development",
     // bundle 分析
    "bundle-report": "webpack --mode production && webpack-bundle-analyzer --port 8123 dist/stats.json"
  },
```



### .browserslistrc

```
last 2 version
> 1%
ie >= 10
not dead
```



### jsconfig.json

>   https://segmentfault.com/a/1190000018013282###

```json
{ 
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```



### 分离开发、生产环境配置文件

```shell
# 安装 webpack-merge 用于合并配置
npm install webpack-merge --save-dev

# 在脚本中设置环境变量
npm install cross-evn --save-dev 
```

 

webpack.common.js 通用配置

```js
module.exports = {
  target: 'web',
  entry: {
    main: './src/main.js',
  },
    
    // 其他配置...

}
```



webpack.dev.js 开发环境

```js
const { merge } = require('wepack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'devlopment',
    devtool: "eval",
})
```



webpack.prod.js 生产环境

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    // 分析 bundle
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});

```



修改 scripts

```js
"scripts": {
    "build": "cross-evn NODE_ENV=production webpack --progress --config ./webpack.prod.js",
    "dev": "cross-evn NODE_ENV=devlopment webpack serve --config ./webpack.dev.js",
    "watch": "webpack --watch --config ./webpack.dev.js",
    "bundle-report": "webpack && webpack-bundle-analyzer --port 8123 dist/stats.json --config ./webpack.prod.js"
  }
```



## 创建目录结构和文件

创建 public 目录，并添加 index.html 文件, 内容如下

```html
<!-- 此文件用作 htmlWebpackPlugin插件的模板文件(template) -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```



创建 src 目录， 并添加 main.js 和 App.vue 内容分别如下

```js
// main.js
import Vue from 'vue';
import App from './App.vue'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

```vue
// App.vue
<template>
  <div id="app">
    <h1>Hello webpack-vue-spa</h1>
  </div>
</template>

<style>
h1 {
  color: rgb(92, 181, 255);
}
</style>
```



## 安装 vue

```shell
# 安装 vue 2.0 版本
npm install vue@2.*

# 安装 vue-loader vue-template-compiler
npm install -D vue-loader vue-template-compiler

```

配置如下：

```js
// webpack.config.js

// 这是必须的
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      
      {
        test: /\.css$/,
        use: [
          'vue-style-loader', // 将默认的 style-loader 换成 vue-style-loader
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin()
  ]
}
```

执行 npm run build 和 npm run dev 测试运行



## 路由和状态管理

### vue Router

```shell
npm install vue-router
```

```js
// src/router/routerConfig.js
// 根据实际情况配置路由，自行创建 Hello.vue About.vue。
import Hello from '@/pages/Hello.vue';
export default [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },
];
```

```js
// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './routerConfig';

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: routerConfig
})
```

```js
// src/main.js

import Vue from 'vue';
import App from './App.vue';
// 导入路由实例
import { router } from './router/index.js';

new Vue({
  router, // 注入路由
  render: (h) => h(App),
}).$mount('#app');
```

```vue
// 修改 App.vue
<template>
  <div id="app">
    <p>
      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// 定义一个变量
$base-text-color: rgb(92, 181, 255);

h1 {
  color: $base-text-color;
}
</style>
```



### Vuex

```shell
npm install vuex --save
```

```js
// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },

  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export default store;
```

```js
// src/main.js

import Vue from 'vue';
import App from './App.vue';
import store from './store'

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
```



## CSS 预处理器

### sass&scss

```shell
npm install -D sass-loader node-sass

# 另一种方式（待测试）
npm install -D sass-loader sass
```

安装过程出现类似 `gyp ERR! find Python` 报错 可参考[文章](https://www.cnblogs.com/maigy/p/13321553.html)



配置

>   vue-cli 创建的项目已经默认添加了相关配置，无需重复配置。

```js
// webpack.config.js -> module.rules
{
  test: /\.(scss|sass)$/,
  use: [
    'vue-style-loader',
    {
		loader: 'css-loader',
        options: { importLoaders: 1 },
    },
    {
      loader: 'sass-loader',
      options: {
          
        // 全局共享变量，不需要可删除  
        // 你也可以从一个文件读取，例如 `variables.scss`
        // 如果 sass-loader 版本 = 8，这里使用 `prependData` 字段
        // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
        additionalData: `
			@import "@styles/scss/variables.scss";
			$base-color: #333;
		`
      }
    }
  ]
}
```



为 App.vue 的 style 模块添加 lang="scss", 测试效果

```vue
<template>
  <div id="app">
    <h1>Hello webpack-vue-spa</h1>
  </div>
</template>

<style lang="scss">
// 定义一个变量
$base-text-color: rgb(92, 181, 255);

h1 {
  color: $base-text-color;
}
</style>

```

[Vue项目 Sass 目录结构设计](/CSS/预处理器)

### PostCss

```shell
npm install -D postcss-loader postcss-preset-env autoprefixer
```

配置

```js
// webpack.config.js -> module.rules
{
  test: /\.css$/,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader'
  ]
}

// 补充 scss 配置
{
	test: /\.(scss|sass)$/,
    use: [
    	'vue-style-loader',
		{
            loader: 'css-loader',
            options: { importLoaders: 2 },
        },

        'postcss-loader',

        {
            loader: 'sass-loader',
            options: {
              // 你也可以从一个文件读取，例如 `variables.scss`
              // 如果 sass-loader 版本 = 8，这里使用 `prependData` 字段
              // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
              additionalData: `$color: red;`,
            },
		},
	],
},
```



添加 postcss.config.js

```js
module.exports = {
  plugins: [
    "postcss-preset-env",
    require('autoprefixer')
  ],
};
```



### Babel

```shell
npm install -D babel-loader @babel/core @babel/preset-env
```

```js
// webpack.config.js -> module.rules

{
	test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
    },
},
```

```js
// babel.config.js

module.exports = {
  return {
    presets: ["@babel/preset-env"],
  };
};
```

详情配置可查看 【webpack 创建项目】一节



### TypeScript

```bash
npm install --save-dev typescript ts-loader
```

## 测试

### Jest
