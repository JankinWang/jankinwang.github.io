module.exports = {
  title: "JankinWang",
  description: "编程永远不止步",
  dest: "./dist/docs/",

  themeConfig: {
    logo: "/assets/img/logo.gif",
    nav: [
      { text: "Css", link: "/css/css" },
      { text: "Gitee", link: "https://gitee.com/" },
    ],

    sidebar: {
      "/css/": [
        "css",
        "动画",
        "代码片段",
        "变形 transform",
        "媒体查询",

        {
          title: "布局", // 必要的
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: ["栅格布局", "弹性盒子"],
        },

        {
          title: "sassAndscss",
          path: "/sassAndscss/目录结构设计",
          children: ["/sassAndscss/目录结构设计"],
        },
      ],

      "/sassAndscss/": ["目录结构设计"],
    },
  },
};
