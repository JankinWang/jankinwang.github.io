<template>
  <div class="home-bookmark">
    <h2>导航</h2>
    <template v-if="ready">
      <template v-for="{ _id, children } of bookmark">
        <TheBookmarkCategory :key="_id" :category="_id" :children="children" />
      </template>
    </template>
  </div>
</template>

<script>
import { getGroup } from '@api/bookmark'
import TheBookmarkCategory from './TheBookmarkCategory.vue'
export default {
  name: 'HomeBookmark',
  components: {
    TheBookmarkCategory,
  },

  data() {
    return {
      bookmark: [],
      ready: false,
    }
  },
  computed: {},

  created() {
    this.getGroup = getGroup
    this.getBookmark()
  },

  methods: {
    async getBookmark() {
      this.bookmark = await this.getGroup()
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
