<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- Header S -->
    <div class="header Banner_effect__1L7Jk">
      <div class="center">
        <!-- 新冠疫情信息 -->
        <home-xin-guan />

        <!-- 搜索栏 search bar -->
        <home-search-bar />

        <!-- 常用文档 -->
        <home-doc />
      </div>
    </div>
    <!-- Header E -->

    <!-- Body S -->
    <div class="body">
      <HomeBookmark />
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
import HomeXinGuan from './HomeXinGuan.vue'
import HomeBookmark from './HomeBookmark.vue'

export default {
  name: 'Home',
  components: {
    HomeSearchBar,
    HomeDoc,
    HomeDemo,
    HomeProject,
    HomeXinGuan,
    HomeBookmark,
  },

  data() {
    return {}
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

  mounted() {},
}
</script>

<style lang="stylus">
.home {
  display: block;
  margin: 0px auto;
  padding: $navbarHeight 0;

  .header {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 5em 0;
    background-image: linear-gradient(45deg, rgb(90, 54, 148) 0%, rgb(19, 189, 206) 33%, rgb(0, 148, 217) 66%, rgb(111, 199, 181) 100%);

    .center {
      max-width: 720px;
      margin: 0 auto;
      position: relative;
      padding: 0 20px;
    }
  }

  .body {
    max-width: 960px;
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

.Banner_effect__1L7Jk {
  background-size: 400%;
  background-position: 0 100%;
  -webkit-animation: Banner_gradient__1iGeC 7.5s ease-in-out infinite;
  animation: Banner_gradient__1iGeC 7.5s ease-in-out infinite;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: absolute;
  width: 100%;
  z-index: 1;
}

@keyframes Banner_gradient__1iGeC {
  50% {
    background-position: 100% 0;
  }
}
</style>
