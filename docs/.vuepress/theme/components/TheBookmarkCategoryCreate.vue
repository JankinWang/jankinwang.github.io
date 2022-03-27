<template>
  <div class="the-bookmark-category__create">
    <p><b>分类</b> <input type="text" v-model="localCategory" /></p>
    <p><b>名称</b> <input type="text" v-model="name" /></p>
    <p><b>URL</b> <input type="text" v-model="url" /></p>

    <button @click="submit">提交</button>
    <button @click="cancel">取消</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},

  props: ['category'],

  // 本地状态
  data() {
    return {
      name: '',
      url: '',
      localCategory: '',
    }
  },
  computed: {},

  created() {
    this.localCategory = this.category
  },

  // 方法
  methods: {
    submit() {
      this.$emit('submit', {
        name: this.name,
        url: this.url,
        category: this.localCategory,
      })
      this.resetForm()
    },

    // 取消
    cancel() {
      this.$emit('cancel')
      this.resetForm()
    },

    // 重置
    async resetForm() {
      await this.$nextTick()
      this.url = ''
      this.name = ''
      this.localCategory = this.category
    },
  },
}
</script>

<style lang="scss">
</style>
