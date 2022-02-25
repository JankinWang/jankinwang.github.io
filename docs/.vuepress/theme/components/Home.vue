<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- Header S -->
    <div class="header">
      <!-- 搜索栏 search bar -->
      <home-search-bar></home-search-bar>

      <!-- 常用文档 -->
      <home-doc></home-doc>
    </div>
    <!-- Header E -->

    <!-- Body S -->
    <div class="body">
      <HomeDemo />
      <HomeProject />
    </div>
    <!-- Body E -->

    <!-- Footer S -->
    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
    <!-- Footer E -->
  </main>
</template>

<script>
import HomeSearchBar from './HomeSearchBar.vue'
import HomeDoc from './HomeDoc.vue'
import HomeDemo from './HomeDemo.vue'
import HomeProject from './HomeProject.vue'
export default {
  name: 'Home',
  components: { HomeSearchBar, HomeDoc, HomeDemo, HomeProject },

  data() {
    return {}
  },

  created() {},

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
