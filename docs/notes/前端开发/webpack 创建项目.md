# webpack 创建项目

## 开始

### 初始化一个webpack项目

```shell
# 创建项目目录 如：project-dir

# 初始化目录
npm init

# 安装 webpack 和 webpack-cli
npm install webpack webpack-cli --save-dev
```

### 添加 webpack.config.js 文件

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
    
  // 输出
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
```

### 添加 npm scripts

```json
 "scripts": {
    "build": "webpack --mode production --progress",
    "watch": "webpack --watch --mode development"
 },
```

### 目录结构(基础)

```
|-- projectDir
   |- dist
   |-- public
  	  |-- index.html
  	 
   |-- src
      |--index.js
     
   |-- webpack.config.js
   |-- package.json
```



## 管理资源

### 加载 CSS 

#### 安装loader: 

>    [style-loader](https://webpack.docschina.org/loaders/style-loader): 把 CSS 插入到 DOM 中
>
>    [css-loader](https://webpack.docschina.org/loaders/css-loader): 实现 CSS 模块化

```shell
npm install --save-dev style-loader css-loader
```

```js
// webpack.config.js 

module.exports = {
     
  ......
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
```



### 加载图片

```js
// webpack.config.js

module.exports = {
    ......
    
    module: {
        rules: [
          {
        	  test: /\.(png|svg|jpg|jpeg|gif)$/i,
        	  type: "asset/resource",
        	  generator: {
          	    filename: "static/images/[name]-[hash][ext]",
        	  },
          },
       ]
    }
}
```



## Babel+Polyfill

### Babel

```bash
npm install -D babel-loader @babel/core @babel/preset-env
```

```js
// webpack.config.js

// 添加 loader
 {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
       loader: "babel-loader",
    },
 },

```

```js
// babel.config.js

module.exports = {
   presets: ["@babel/preset-env"],
};
```



.browserslistrc

```
last 2 version
> 1%
ie >= 10
not dead
```



### Polyfill

>   阐述 corejs2 corejs3 区别的文章》
>
>   [文章1](https://blog.csdn.net/hbiao68/article/details/104100731) [文章2](https://segmentfault.com/q/1010000018937075)
>
>   [Babel7 系列文章](https://segmentfault.com/a/1190000020237738)

#### corejs2

```shell
npm install @babel/runtime-corejs2
```

```js
// babel.config.js 修改如下

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '2',
      },
    ],
  ],
};

```

#### corejs3

>   https://segmentfault.com/a/1190000020237817

```shell
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
npm install @babel/runtime-corejs3
```

```js
// babel.config.js 修改如下

module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        },
        "useESModules": true
      }
    ]
  ]
}
```



## Loader

-   css-loader
-   style-loader
-   babel-loader
-   file-loader
-   url-loader



## Plugin

-   HtmlWebpackPlugin
-   BundleAnalyzerPlugin *分析 bundle*

