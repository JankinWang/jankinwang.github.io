<template>
  <div class="home-search-bar home-search-bar--height">
    <!-- 搜索引擎选择框 -->
    <el-select
      class="search-engine-select clear-default home-search-bar--height"
      v-model="searchEngineSelected"
      placeholder="请选择"
      :title="searchEngineName"
    >
      <template v-for="({ name }, index) in searchEngines">
        <el-option :key="index" :label="name" :value="index"> </el-option>
      </template>
    </el-select>

    <!-- 分割线 -->
    <i class="cut-line--vertical home-search-bar--height"></i>

    <!-- 关键字输入框 -->
    <div class="keyword-input-box home-search-bar--height">
      <el-popover
        placement="bottom"
        trigger="manual"
        :visible-arrow="false"
        :value="historyShow"
        popper-class="home-search-bar__popover"
      >
        <div class="search-history">
          <template v-for="{ text, html } in searchHistoryList">
            <p @click="onClickHistory(text)" v-html="html" :key="text"></p>
          </template>
        </div>

        <input
          v-model="keyWord"
          class="keyword-input clear-default"
          type="text"
          placeholder="输入关键字"
          autocomplete="on"
          slot="reference"
        />
      </el-popover>
      <i
        class="el-icon-error clear-input"
        v-show="inputStatus.context"
        @click="keyWord = ''"
      ></i>
    </div>
    <button
      @click="onSearch"
      class="search-button clear-default el-icon-search home-search-bar--height"
    ></button>
  </div>
</template>

<script>
import mapElementUI from '@utils/element-ui'
import SearchHistory from '@utils/SearchHistory'
export default {
  components: {
    ...mapElementUI(['ElSelect', 'ElOption', 'ElPopover']),
  },

  data() {
    return {
      keyWord: '',
      historyShow: false,
      searchEngineSelected: 0, // 选中的搜索引擎索引
      // 搜索引擎名单
      searchEngines: [
        {
          name: '现代 Js 教程',
          url: 'https://zh.javascript.info/search/?query=%s&type=article',
        },
        {
          name: '掘金',
          url: 'https://juejin.cn/search?query=%s',
        },
        {
          name: '掘金开发者',
          url: 'https://so.juejin.cn/search?query=%s&offset=0',
        },
        {
          name: 'Z-library',
          url: 'https://zh.fr1lib.org/s/%s',
        },
        {
          name: '维基百科',
          url: 'https://www.wikipedia.org/wiki/%s',
        },
      ],
    }
  },

  computed: {
    // 选中的搜索引擎名
    searchEngineName() {
      return this.searchEngines[this.searchEngineSelected].name
    },

    // 匹配到的搜索历史
    searchHistoryList() {
      return this._SearchHistory.filterHistory(this.keyWord)
    },

    inputStatus() {
      const status = {
        context: this.keyWord.length > 0,

        // 命中搜索历史
        historyHit: this.searchHistoryList.length > 0,
      }

      this.historyShow = status.context && status.historyHit

      return status
    },
  },

  created() {
    // 搜索历史实例
    this._SearchHistory = new SearchHistory([
      'javascript',
      'php',
      'java',
      'python',
      'Go',
    ])
  },

  beforeDestroy() {
    this._SearchHistory = null
  },

  methods: {
    onSearch() {
      let url = this.searchEngines[this.searchEngineSelected].url
      url = url.replace(/%s/, this.keyWord)
      window.open(url)
      // 追加搜索记录
      this._SearchHistory.setHistory(this.keyWord)
    },
    onClickHistory(text) {
      this.keyWord = text

      this.$nextTick(() => {
        // 关闭搜索历史列表
        this.historyShow = false
      })
    },
  },
}
</script>

<style lang="stylus">
.home-search-bar__popover {
  min-width: 300px;

  .search-history {
    p {
      margin: 0;
      font-size: 1.2em;
      cursor: pointer;
    }

    em {
      color: #ff5722;
      font-style: normal;
      font-weight: bold;
    }
  }
}

.home-search-bar--height {
  height: 41px;
}

.home-search-bar {
  display: flex;
  justify-content: center;
  overflow: hidden;
  min-width: 500px;
  margin: 0 auto;
  border: #e7e7e7 1px solid;
  border-radius: 1em;
  background-color: #fff;

  // 搜索引擎选择器
  .search-engine-select {
    margin: 0 0.5em;
    min-width: 100px;
    display: block;
    flex: 1;
  }

  // 关键字输入框
  .keyword-input-box {
    flex: 3;
    padding: 0 1em;
    position: relative;

    // input
    .keyword-input {
      height: 100%;
      width: 100%;
    }

    // 清空 input 内容
    .clear-input {
      position: absolute;
      right: 6px;
      top: 10px;
      font-size: 18px;
      color: rgb(38 38 38 / 57%);
    }
  }

  .search-button {
    color: #fff;
    min-width: 5em;
    font-size: 1.2em;
    background-color: $accentColor;
    cursor: pointer;
  }

  // 清除默认样式
  .clear-default, .clear-default input {
    border: 0;
    outline: 0;
  }

  .clear-default:focus-visible {
    border: 0;
    outline: 0;
  }

  // 分割线 垂直
  .cut-line--vertical {
    display: flex;
    align-items: center;
  }

  .cut-line--vertical::after {
    content: '';
    height: 1em;
    border-left: 1px #ccc solid;
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-search-bar {
    min-width: unset;
    display: block;
    height: auto;

    button, .keyword-input {
      width: 100%;
    }

    .search-engine-select {
      margin: 0;
      border-bottom: 1px #e7e7e7 solid;
    }

    .cut-line--vertical {
      display: none;
    }
  }
}
</style>
