<template>
  <!-- 常用文档链接 -->
  <div class="home-doc">
    <div class="home-doc__links">
      <template v-for="{ link, title, img } of linkList">
        <a :href="link" :key="title" target="_blank">
          <img :src="`${localImgDir}${img}`" :alt="title" :title="title" />
        </a>
      </template>
      <a href="javascript:void;"> 添加 </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},

  data() {
    return {
      localImgDir: '/assets/img/',
      linkList: [
        {
          img: `js.png`,
          title: 'javascript',
          link: 'https://zh.javascript.info/',
        },
        {
          img: `html5.png`,
          title: 'html5',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
        },
        {
          img: `css3.png`,
          title: 'css3',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E9%80%89%E6%8B%A9%E5%99%A8',
        },
        {
          img: `vue.png`,
          title: 'vue',
          link: 'https://cn.vuejs.org/',
        },
        {
          img: `js_es6.png`,
          title: 'ES6 入门教程',
          link: 'https://es6.ruanyifeng.com/',
        },
        {
          img: `webpack.png`,
          title: 'webpack',
          link: 'https://www.webpackjs.com/',
        },
      ],
    }
  },
  computed: {},
  watch: {},

  // created () {},
  // mounted () {},

  methods: {},
}
</script>

<style lang="stylus">
// 
.home-doc {
  z-index: 2;
  margin-top: 2em;

  .home-doc__links {
    max-width: 24em;
    overflow: hidden;
    margin: 0 auto;
    text-align: center;

    a {
      display: block;
      float: left;
      width: 3em;
      height: 3em;
      line-height: 3em;
      margin: 0.5em 0.5em;
      background: #fff;
      border-radius: 0.5em;
      box-shadow: 0 0 2px 0 #4646462e;
      transition: all 0.2s ease-out;
      transition-delay: 0.2s;

      &:hover {
        transform: translate(0, -5px);
        box-shadow: 0 3px 2px 0 #00000042, 0 0 2px 0 #4646462e;
      }
    }

    img {
      width: 30px;
      margin-top: 50%;
      border-radius: 3px;
      display: inline-block;
      transform: translate(0, -50%) rotateZ(0);
    }
  }
}
</style>
