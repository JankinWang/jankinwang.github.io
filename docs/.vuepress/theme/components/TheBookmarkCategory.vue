<template>
  <div class="home-bookmark__category" v-if="children.length > 0">
    <!-- 分类名称 -->
    <div class="category__name">
      <span>{{ relCategory }}</span>

      <!-- 操作区 -->
      <div v-editable class="right">
        <el-popover
          placement="bottom"
          width="300"
          trigger="manual"
          v-model="showCreateForm"
        >
          <TheBookmarkCategoryCreate
            :category="category"
            @submit="createBookmark"
            @cancel="showCreateForm = false"
          />
          <el-link
            slot="reference"
            :underline="false"
            class="control-btn"
            @click="showCreateForm = !showCreateForm"
            >添加</el-link
          >
        </el-popover>

        <el-link v-editable :underline="false" class="control-btn"
          >编辑</el-link
        >
      </div>
    </div>

    <!-- 标签表 -->
    <div class="category__children">
      <template v-for="(child, index) of children">
        <a
          :href="child.url"
          :key="child.id"
          target="_blank"
          class="category__children__item link-block"
        >
          <!-- favicon -->
          <el-image class="favicon" :src="child.favicon[0].href" fit="cover">
            <div slot="error" class="image-slot image-slot--error">
              {{ child.name | imgErrText }}
            </div>
          </el-image>

          <!-- 文本信息 -->
          <div class="text-info">
            <p class="name text-overflow-1line">
              {{ child.name || child.title }}
            </p>

            <p
              class="description text-overflow-1line"
              :title="child.description"
            >
              {{ child.description }}
            </p>
          </div>

          <!-- 操控区 -->
          <div v-editable class="control-area">
            <el-link :underline="false" class="control-btn"> 编辑 </el-link>
            <small>|</small>
            <el-link
              :underline="false"
              class="control-btn"
              @click.prevent="deleteBookmark(child.id, index)"
            >
              删除
            </el-link>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import mapElementUI from '@utils/element-ui'
import { deleteById, create } from '@api/bookmark'
import TheBookmarkCategoryCreate from './TheBookmarkCategoryCreate'
export default {
  name: 'TheBookmarkCategory',

  components: {
    ...mapElementUI(['ElLink', 'ElPopover', 'ElImage']),
    TheBookmarkCategoryCreate,
  },
  directives: {
    editable: {
      // 指令的定义
      inserted: function (el) {
        const editable = localStorage.getItem('editable')
        if (editable === null) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      },
    },
  },

  filters: {
    imgErrText: function (value) {
      const text = String(value)[0]
      return text.toUpperCase()
    },
  },

  props: {
    category: { type: String, default: 'default' },
    children: { type: Array, default: () => [] },
  },

  data() {
    return {
      showCreateForm: false,
    }
  },
  computed: {
    relCategory() {
      return this.category === 'default' ? '其他' : this.category
    },
  },

  // 方法
  methods: {
    // 删除书签
    async deleteBookmark(id, index) {
      const res = await deleteById(id)
      this.children.splice(index, 1)
    },

    // 创建并添加书签
    async createBookmark(param) {
      console.log(param)
      const data = await create(param)
      console.log(data)
      this.showCreateForm = false
    },
  },
}
</script>

<style lang="stylus">
.home-bookmark__category + .home-bookmark__category {
  margin-top: 15px;
}

.home-bookmark__category {
  .category__name {
    font-size: 1.2rem;
    font-weight: 500;

    &::after {
      content: '';
      height: 100%;
      vertical-align: middle;
    }

    .right {
      display: inline;
      float: right;
      vertical-align: middle;
    }
  }

  .control-btn {
    font-size: 0.8rem;
    display: block;
    display: inline-block;
  }

  .category__children {
    margin: 0 -5px;
  }

  .category__children__item {
    width: 200px;
    color: #333;
    font-size: 0.5rem;
    border: 1px #eee solid;
    border-radius: 5px;
    margin: 5px;
    padding: 8px 5px;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    position: relative;

    .favicon {
      width: 2rem;
      height: 2rem;
      flex: 0 0 2rem;
      margin-right: 5px;

      .image-slot--error {
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
        background-color: #ddd;
      }
    }

    .name {
      font-size: 0.8rem;
      font-weight: bold;
    }

    p {
      margin: 0;
    }

    &:hover .control-area {
      display: block;
    }

    .control-area {
      color: $textColorInverse;
      border-radius: 0 0 0 5px;
      background-color: rgba(0, 0, 0, 58%);
      position: absolute;
      top: 0;
      right: 0;
      padding: 2px 5px;
      display: none;

      .control-btn {
        color: $textColorInverse;
        font-size: 0.5rem;

        &:hover {
          color: #409EFF;
        }
      }
    }
  }
}
</style>
