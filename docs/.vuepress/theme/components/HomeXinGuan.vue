<template>
  <div class="home-xinguan">
    <el-popover
      popper-class="home-xinguan-popper"
      placement="bottom"
      width="400"
      trigger="click"
    >
      <el-skeleton :loading="!loading" animated>
        <template slot="template">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 15px;
            "
          >
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
          </div>
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 15px;
            "
          >
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
            <el-skeleton-item variant="rect" style="width: 30%; height: 40px" />
          </div>
          <el-skeleton-item variant="text" style="height: 50px" />
        </template>
      </el-skeleton>

      <home-xin-guan-total
        v-if="opened"
        @loadover="(event) => (loading = event)"
      />

      <el-link :underline="false" slot="reference" @click="onOpen"
        >新冠疫情信息
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-link>
    </el-popover>
  </div>
</template>

<script>
import { Popover, Button, Skeleton, SkeletonItem, Link } from 'element-ui'
export default {
  components: {
    [Link.name]: Link,
    [Popover.name]: Popover,
    [Button.name]: Button,
    [Skeleton.name]: Skeleton,
    [SkeletonItem.name]: SkeletonItem,
    HomeXinGuanTotal: () =>
      import(
        /* webpackChunkName: 'HomeXinGuanTotal' */ './HomeXinGuanTotal.vue'
      ),
  },

  data() {
    return {
      opened: false,
      loading: false,
    }
  },
  methods: {
    onOpen() {
      this.opened = true
    },
  },
}
</script>

<style lang="stylus">
.home-xinguan {
  position: absolute;
  top: 10px;
  left: 20px;
}
</style>
