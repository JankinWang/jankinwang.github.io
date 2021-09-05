const {sidebarConfig, notesNav} = require('./sidebarConfig.js');

module.exports = {
  title: 'Jankin',
  description: '永远不止步',
  dest: './dist/docs/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

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
        items: notesNav
      },

      { text: 'Github', link: 'https://github.com/JankinWang' },
    ],
    sidebar: sidebarConfig,
  },

  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],
};
