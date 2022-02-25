<template>
  <div class="home-search-bar">
    <!-- 搜索引擎选择框 -->
    <select
      v-model="selected"
      class="search-engine-select clear-default custom-select"
      name="search-engine-select"
    >
      <template v-for="({ name }, index) in searchEngines">
        <option :value="index" :key="name" :selected="selected === index">
          {{ name }}
        </option>
      </template>
    </select>

    <!-- 分割线 -->
    <i class="cut-line--vertical"></i>

    <!-- 关键字输入框 -->
    <input
      v-model="keyWord"
      class="keyword-input clear-default"
      type="text"
      placeholder="输入关键字"
      autocomplete="on"
    />
    <input
      @click="onSearch"
      class="search-button clear-default"
      type="submit"
      value="搜索"
    />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},

  data() {
    return {
      keyWord: '',
      selected: 0,
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

  methods: {
    onSearch() {
      let url = this.searchEngines[this.selected].url
      url = url.replace(/%s/, this.keyWord)
      window.open(url)
    },
  },
}
</script>

<style lang="stylus">
.home-search-bar {
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: 40vw;
  margin: 0 auto;
  border: #e7e7e7 1px solid;
  border-radius: 1em;
  background-color: #fff;

  select, input {
    line-height: 2.1em;
    border: 0;
  }

  // 搜索引擎选择器
  .search-engine-select {
    margin: 0 0.5em;
  }

  .search-engine-select option+option {
    border-bottom: 1px red solid;
  }

  .custom-select {
    display: inline-block;
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center / 8px 10px no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  // 关键字输入框
  .keyword-input {
    flex: 1;
    padding: 0 1em;
  }

  // 搜索按钮
  .search-button {
    color: #fff;
    min-width: 6em;
    font-size: 1.2em;
    background-color: $accentColor;
    cursor: pointer;
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
    max-width: 90%;
    display: block;

    select, input {
      width: 100%;
      height: 48px;
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
