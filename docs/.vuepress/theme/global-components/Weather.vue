<template>
  <div class="global-components__weather">
    <div class="plain-text" :title="today.city.join(' ')" v-if="ready">
      <!-- <big :class="today.big[1]"></big> -->
      <strong>{{ today.wea }}</strong>
      <span v-html="today.tem"></span>
      {{ today.win[0].title }}
      {{ today.win[1] }}
    </div>
    <i class="el-icon-refresh-right refresh" @click="refresh(true)"></i>
  </div>
</template>

<script>
// import mapElementUI from '@utils/element-ui'
import weather from '@api/weather.js'
export default {
  name: 'Weather',
  components: {},

  data() {
    return {
      data7d: [],
      ready: false,
    }
  },
  computed: {
    today() {
      return this.data7d[0]
    },
  },

  methods: {
    async refresh(refresh = false) {
      this.data7d = await this.weather(refresh)
      this.ready = true
    },
  },

  // hook
  created() {
    this.weather = weather
    this.refresh()
  },

  beforeDestroy() {
    this.weather = null
  },
}
</script>

<style lang="stylus">
.global-components__weather {
  display: inline-block;
  cursor: pointer;

  &::after {
    content: '';
    height: 100%;
    vertical-align: middle;
  }

  .plain-text {
    color: $textColorInverse;
    font-size: 14px;
    font-weight: 500;
    display: inline-block;
    vertical-align: middle;

    big.n00 {
      background-position: 1px -258px;
    }

    big.png40 {
      background-image: url('https://i.tq121.com.cn/i/weather2015/png/blue30.png');
      height: 25px;
      width: 25px;
      display: inline-block;
      vertical-align: middle;
      background-size: 770px;
    }
  }

  .refresh {
    font-size: 18px;
    display: none;
    vertical-align: middle;
  }

  &:hover .refresh {
    display: inline-block;
  }
}
</style>
