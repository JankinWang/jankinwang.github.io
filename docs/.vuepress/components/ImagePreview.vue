<template>
  <div class="image-preview-component" v-show="isShow">
    <div class="close-preview-button" @click="closePreview">关闭</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(url, index) in urls" :key="index">
          <img :src="url" alt="图片加载失败" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-button-next"></div>
      <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script>
import { Swiper, Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'ImagePreview',
  props: ['urls'],

  data() {
    return {
      isShow: false,
    }
  },

  beforeMount() {
    Swiper.use([Pagination, Navigation])

    this.mySwiper = new Swiper('.swiper-container', {
      init: false,
      observer: true,
      observeParents: true,
      autoplay: false, // 可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },

  mounted() {
    this.mySwiper.init()
  },
  

  methods: {
    // 关闭
    closePreview() {
      this.isShow = false
      document.body.style.overflow = ""
    },

    // 显示
    showPreview() {
      this.isShow = true
      this.mySwiper.init()
      // 禁止滚动
      document.body.style.overflow = "hidden"
    },
  },
}
</script>

<style lang="stylus">
.image-preview-component {
  background: #000000b8;
  position: fixed;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .close-preview-button {
    position: absolute;
    top: 65px;
    right: 10px;
    color: #fff;
    border: 2px #fff solid;
    padding: 3px 5px;
    cursor: pointer;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 80%;
      max-height: 90%;
    }
  }
}
</style>