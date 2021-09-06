<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- S header -->
    <div class="header">
      <h1>川流不息, code不止</h1>

      <!-- 快速链接 -->
      <div class="quick-link">
        <template v-for="item of technologyStack">
          <a :href="item.link" :key="item.title" target="_blank">
            <img :src="item.img" :alt="item.title" :title="item.title" />
          </a>
        </template>
      </div>
    </div>
    <!-- E header -->

    <!-- S body -->
    <div class="body">
      <HomeDemo />
      <HomeProject />
    </div>
    <!-- E body -->

    <!-- S footer -->
    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
    <!-- S footer -->
  </main>
</template>

<script>
import HomeDemo from './HomeDemo.vue'
import HomeProject from './HomeProject.vue'

export default {
  name: 'Home',
  components: { HomeDemo, HomeProject },

  data() {
    const imgDir = '/assets/img/'

    return {
      technologyStack: [
        {
          img: `${imgDir}js.png`,
          title: 'javascript',
          link: 'https://zh.javascript.info/',
        },
        {
          img: `${imgDir}html5.png`,
          title: 'html5',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
        },
        {
          img: `${imgDir}css3.png`,
          title: 'css3',
          link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E9%80%89%E6%8B%A9%E5%99%A8',
        },
        {
          img: `${imgDir}vue.png`,
          title: 'vue',
          link: 'https://cn.vuejs.org/',
        },
        {
          img: `${imgDir}js_es6.png`,
          title: 'ES6 入门教程',
          link: 'https://es6.ruanyifeng.com/',
        },
        {
          img: `${imgDir}webpack.png`,
          title: 'webpack',
          link: 'https://www.webpackjs.com/',
        },
      ],
    }
  },

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      }
    },
  },
}
</script>

<style lang="stylus">
.home {
  display: block;
  margin: 0px auto;
  padding: $navbarHeight 0;

  .header {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
    background-image: url('/assets/img/back.jpeg');
    background-size: auto;
    background-repeat: no-repeat;
    background: #f9f9f9;

    h1 {
      position: relative;
      top: 125px;
      z-index: 0;
      margin: 0;
      color: #f9f9f9;
      font-size: 50px;
      text-align: center;
      text-shadow: 0 -2px 0px #fff, 0 3px 6px #00000042;
    }

    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: block;
      width: 100%;
    }

    // 快速链接
    .quick-link {
      z-index: 2;
      width: 100%;
      bottom: 100px;
      text-align: center;
      position: absolute;

      a {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 0 15px;
        background: #fff;
        line-height: 50px;
        border-radius: 8px;
        box-shadow: 0 0 2px 0 #4646462e;
        transition: all 0.2s ease-out;
        transition-delay: 0.1s;

        &:hover {
          transform: translate(0, -6px);
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

  .body {
    width: 960px;
    margin: 0 auto;
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    margin-top: 100px;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
