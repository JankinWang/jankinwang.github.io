const {sidebarConfig, notesNav} = require('./sidebarConfig.js');

module.exports = {
  title: 'JankinWang',
  description: '编程永远不止步',
  dest: './dist/docs/',

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
};
