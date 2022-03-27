<template>
  <div class="web-demo">
    <h2>前端案例</h2>
    <div class="demo-table">
      <template v-for="(item, index) in demos">
        <div class="column col-4 col-1 col-2 space10" :key="index">
          <a class="demo-item link-block" :href="item.link" target="_blank">
            <h4>{{ item.title }} <IcontFont name="icon-link" size="15px" /></h4>

            <p class="tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </p>

            <p class="desc" :title="item.desc">{{ item.desc }}</p>
          </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const webDemoUrl = 'https://jankinwang.github.io/WebWorkbook'
    return {
      demos: [
        {
          title: '百度首页',
          desc: '仿百度首页',
          tags: ['javascript', 'css', 'html'],
          repository: [],
          link: `${webDemoUrl}/仿百度首页/index.html`,
        },
        {
          title: 'ScrollEventMix',
          desc: '为滚动事件添加功能，如：检测子元素是否进入可视区域',
          tags: ['javascript'],
          repository: [],
          link: `${webDemoUrl}/ScrollEventMix/index.html`,
        },
        {
          title: 'SliceUpload',
          desc: '文件切片上传',
          tags: ['javascript'],
          repository: [],
          link: `${webDemoUrl}`,
        },
        {
          title: 'goPageTop',
          desc: '返回顶部',
          tags: ['javascript'],
          repository: [],
          link: `${webDemoUrl}/goPageTop/index.html`,
        },
        {
          title: '下拉刷新',
          desc: '拖拽事件下拉刷新',
          tags: ['javascript'],
          repository: [],
          link: `${webDemoUrl}/下拉刷新/pull-refresh.html`,
        },
        {
          title: '骨架屏',
          desc: '骨架屏',
          tags: ['javascript'],
          repository: [],
          link: `${webDemoUrl}/骨架屏/index.html`,
        },
        {
          title: '地址选择器',
          desc: '地址选择器',
          tags: ['css', 'javascript'],
          repository: [],
          link: `${webDemoUrl}/地址选择器/index.html`,
        },
        {
          title: '网站用户使用引导',
          desc: '网站用户使用引导',
          tags: ['css', 'javascript'],
          repository: [],
          link: `${webDemoUrl}/网站用户使用引导/index.html`,
        },
        {
          title: 'bankCard',
          desc: 'bankCard',
          tags: ['css', 'javascript'],
          repository: [],
          link: `${webDemoUrl}/bankCard/index.html`,
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
.web-demo {
  a.demo-item {
    width: 100%;
    color: #333;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    box-sizing: border-box;

    &:hover {
      h4 {
        color: $accentColor;

        .icon-link {
          visibility: visible;
        }
      }
    }

    h4 {
      font-weight: 400;
      font-size: 1.2rem;

      .icon-link {
        float: right;
        visibility: hidden;
      }
    }

    h4, .tags, .desc {
      margin: 8px 0;
    }

    .tags span {
      color: #8cb3c5;
      font-size: 13px;
      margin-right: 5px;
    }

    .desc {
      font-size: 14px;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* 最多允许两行 */
      -webkit-box-orient: vertical;
    }
  }
}
</style>
