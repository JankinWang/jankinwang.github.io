const path = require('path')
const { createNavAndSidbar } = require('./myConfig.js')
const { sidebarConfig: notesSidebar, navConfig: notesNav } = createNavAndSidbar(
  'notes'
)

module.exports = {
  title: 'Jankin',
  description: '永远不止步',
  dest: './dist/docs/',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    logo: '/assets/img/logo.gif',
    nav: [
      {
        text: '笔记',
        items: notesNav,
      },

      { text: 'Gitee', link: 'https://gitee.com/JankinWang' },
      { text: 'Github', link: 'https://github.com/JankinWang' },
    ],
    sidebar: notesSidebar,
  },

  plugins: [{ src: '@/plugins/vue-awesome-swiper', mode: 'client' }],

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@utils': path.resolve(__dirname, './theme/utils'),
        '@api': path.resolve(__dirname, './theme/api'),
      },
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  },
}
