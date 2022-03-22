<template>
  <div class="v-chart" :style="{ width: width, height }"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/toolbox'

import { line } from './echartdata'

export default {
  name: 'VueEcharts',

  props: {
    option: {
      type: Object,
      default() {
        return line
      },
    },
    type: { type: [Boolean, String], default: 'line' },
    mapName: { type: [Boolean, String], default: 'china' },
    width: { type: String, default: 'auto' },
    height: { type: String, default: '300px' },
  },

  data() {
    return {
      chart: null,
      isinit: false,
      geoJsonOrigin: {
        china:
          'https://cdn.jsdelivr.net/gh/yezongyang/china-geojson@master/china.json',
      },
    }
  },

  watch: {
    option() {
      if (this.chart) {
        this.setOption()
      } else {
        this.init()
      }
    },
  },

  mounted() {
    if (Object.keys(this.option).length > 0) {
      this.init()
    }
  },

  methods: {
    init() {
      this.$nextTick(() => {
        const main = this.$el
        this.chart = echarts.init(main)

        if (this.type === 'map') {
          this.registerMap()
        } else {
          this.setOption()
        }
      })
    },
    setOption() {
      this.chart.setOption(this.option)
    },

    async registerMap() {
      this.chart.showLoading()
      const res = await fetch(this.geoJsonOrigin[this.mapName])
      this.chart.hideLoading()

      if (res.ok) {
        let geoJson = await res.json()
        echarts.registerMap(this.mapName, geoJson)
        this.setOption()
      }
    },
  },

  beforeDestroy() {
    this.chart = null
  },
}
</script>

<style>
.v-chart {
  height: 400px;
}
</style>