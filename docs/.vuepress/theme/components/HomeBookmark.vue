<template>
  <div class="home-bookmark">
    <h2>导航</h2>
    <el-skeleton
      :loading="!ready"
      :rows="6"
      :count="2"
      :throttle="100"
      animated
    >
      <template slot="template">
        <div style="padding: 14px">
          <el-skeleton-item variant="h1" style="width: 10%; height: 26px" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
            "
          >
            <el-skeleton-item
              variant="text"
              style="width: 25%; height: 60px; margin-right: 16px"
            />
            <el-skeleton-item
              variant="text"
              style="width: 25%; height: 60px; margin-right: 16px"
            />
            <el-skeleton-item
              variant="text"
              style="width: 25%; height: 60px; margin-right: 16px"
            />
            <el-skeleton-item
              variant="text"
              style="width: 25%; height: 60px; margin-right: 16px"
            />
            <el-skeleton-item variant="text" style="width: 25%; height: 60px" />
          </div>
        </div>
      </template>
      <template v-for="{ _id, children } of bookmark">
        <TheBookmarkCategory :key="_id" :category="_id" :children="children" />
      </template>
    </el-skeleton>
  </div>
</template>

<script>
import { getGroup } from '@api/bookmark'
import mapElementUI from '@utils/element-ui'
import TheBookmarkCategory from './TheBookmarkCategory.vue'
export default {
  name: 'HomeBookmark',
  components: {
    TheBookmarkCategory,
    ...mapElementUI(['ElSkeleton', 'ElSkeletonItem']),
  },

  data() {
    return {
      bookmark: [],
      ready: false,
    }
  },
  computed: {},

  mounted() {
    this.getGroup = getGroup
    this.getBookmark()
  },

  methods: {
    async getBookmark() {
      this.bookmark = await this.getGroup()
      await this.$nextTick()
      this.ready = true
    },
  },

  beforeDestroy() {
    this.getGroup = null
  },
}
</script>

<style lang="scss">
</style>
