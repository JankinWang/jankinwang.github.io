<template>
  <div class="home-xin-guan" v-show="isShow">
    <div class="tag">
      <el-tag size="mini" type="pain">全国</el-tag>
      <time>截至 {{ china.lastUpdateTime }}</time>
    </div>

    <div class="china">
      <div class="item">
        <p class="label">现有确诊</p>
        <p class="number" style="color: #ff4c4c">
          {{ realChina.existConfirm }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrExistConfirm }}
        </p>
      </div>

      <div class="item">
        <p class="label">累计确诊</p>
        <p class="number" style="color: #ce0000">
          {{ realChina.totalConfirm }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrConfirm }}
        </p>
      </div>

      <div class="item">
        <p class="label">累计死亡</p>
        <p class="number" style="color: #5d5d5d">
          {{ realChina.totalDead }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrTotalDead }}
        </p>
      </div>

      <div class="item">
        <p class="label">累计治愈</p>
        <p class="number" style="color: #339d0e">
          {{ realChina.totalHeal }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrTotalHeal }}
        </p>
      </div>

      <div class="item">
        <p class="label">境外输入</p>
        <p class="number" style="color: #f7751f">
          {{ realChina.totalInput }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrTotalInput }}
        </p>
      </div>

      <div class="item">
        <p class="label">无症状感染者</p>
        <p class="number" style="color: #843700">
          {{ realChina.noSymptom }}
        </p>
        <p class="incr-number">
          <i class="el-icon-top"></i>{{ realChina.incrNoSymptom }}
        </p>
      </div>
    </div>

    <el-divider></el-divider>

    <div class="tag">
      <div>
        <el-tag size="mini" type="pain">本地</el-tag>
        {{ area.province }} {{ area.city }}
      </div>
      <time>截至 {{ area.lastUpdateTime }}</time>
    </div>

    <div class="area">
      <div class="item">
        <p>新增确诊</p>
        <span style="color: #ff4c4c">{{ realArea.todayConfirm }}</span>
      </div>
      <div class="item">
        <p>新增无症状</p>
        <span style="color: #843700">{{ realArea.incrNoSymptom || 0 }}</span>
      </div>
      <div class="item">
        <p>现有确诊</p>
        <span style="color: #ff4c4c">{{ realArea.existConfirm }}</span>
      </div>
      <div class="item">
        <p>累计治愈</p>
        <span style="color: #339d0e">{{ realArea.totalHeal }}</span>
      </div>
    </div>

    <VueEcharts :option="areaLine" style="padding: 0 15px"></VueEcharts>
  </div>
</template>

<script>
import { getChina, getChinaArea } from '../api/xinGuan.js'
import { Tag, Divider } from 'element-ui'
export default {
  name: '',
  components: {
    [Tag.name]: Tag,
    [Divider.name]: Divider,
  },

  data() {
    return {
      china: {},
      area: {},
      chinaLoading: true,
      isShow: false,
    }
  },
  computed: {
    realChina() {
      if (!this.china.lastUpdateTime) return {}
      const { total, today, extData } = this.china
      return {
        // 现有确诊
        existConfirm: total.confirm - total.heal - total.dead,

        // 累计确诊
        totalConfirm: total.confirm,

        // 累计死亡
        totalDead: total.dead,

        // 累计治愈
        totalHeal: total.heal,

        // 累计境外输入
        totalInput: total.input,

        // 无症状感染者
        noSymptom: extData.noSymptom,

        // 新增现有
        incrExistConfirm: today.storeConfirm,

        // 新增累计确诊
        incrConfirm: today.confirm,

        // 新增死亡
        incrTotalDead: today.dead,

        // 新增治愈
        incrTotalHeal: today.heal,

        // 新增输入
        incrTotalInput: today.input,

        // 新增无症状
        incrNoSymptom: extData.incrNoSymptom,
      }
    },

    realArea() {
      if (!this.area.today) return {}
      const { today, total, extData } = this.area

      return {
        totalHeal: total.heal,
        todayConfirm: today.confirm,
        incrNoSymptom: extData.incrNoSymptom,
        existConfirm: total.confirm - total.dead - total.heal,
      }
    },

    // 区域数据折线图
    areaLine() {
      if (!this.china.chinaDayList) return {}
      const chinaDayList = this.china.chinaDayList
      const length = chinaDayList.length
      let xAxisData = []
      let existConfirmData = []
      let confirmData = []

      // 取出最后7天数据
      const last7Days = chinaDayList.slice(-7)

      last7Days.forEach((oneDay) => {
        let {
          date,
          total: { confirm: totalConfirm, heal, dead },
          today: { confirm },
        } = oneDay

        const dateParse = date.split('-')
        xAxisData.push(`${dateParse[1]}/${dateParse[2]}`)
        confirmData.push(confirm)
        existConfirmData.push(totalConfirm - heal - dead)
      })

      const option = {
        title: {
          text: '增长态势 (全国)',
          textStyle: {
            fontSize: 15,
            fontFamily: 'Microsoft YaHei',
            fontWeight: 'normal',
          },
          padding: [5, 5, 5, 0],
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          left: 'right',
          data: ['现有确诊', '新增确诊'],
        },
        grid: {
          left: '0px',
          right: '4%',
          bottom: '3%',
          top: '40px',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '现有确诊',
            data: existConfirmData,
            type: 'line',
            smooth: true,
            label: true,
            color: 'rgb(206, 0, 0)',
          },
          {
            name: '新增确诊',
            data: confirmData,
            type: 'line',
            smooth: true,
            label: true,
            color: '#f00',
          },
        ],
      }
      return option
    },
  },

  created() {
    getChina()
      .then((data) => {
        this.$emit('loadover', true)
        this.isShow = true

        this.china = data
      })
      .then((res) => {
        getChinaArea().then((data) => {
          this.area = data
        })
      })
  },

  methods: {},
}
</script>

<style lang="stylus">
.home-xin-guan {
  .tag {
    padding: 1em;
    display: flex;
    justify-content: space-between;

    .el-tag {
      color: #8f8f8f;
      background-color: #f3f3f3;
      border: 0;
    }

    time {
      font-size: 0.8em;
    }
  }

  .china {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5em 1em;

    .item {
      margin: 0 auto;
      display: inline-block;

      p {
        text-align: center;
        margin: 0px 0;
      }

      .label {
        color: #333;
        font-weight: bold;
      }

      .number {
        font-size: 1.5em;
        font-weight: bold;
      }

      .incr-number {
        color: red;
        text-align: right;
      }
    }
  }

  .area {
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-radius: 3px;
    padding: 10px 0;
    margin: 0 1em;
    margin-bottom: 1em;

    .item {
      min-width: 20%;
      text-align: center;

      p {
        margin: 0;
        color: #707070;
        font-size: 0.8em;
      }

      span {
        font-size: 1.8em;
      }
    }
  }

  .el-divider--horizontal {
    margin: 10px 1em;
    width: auto;
  }
}
</style>
