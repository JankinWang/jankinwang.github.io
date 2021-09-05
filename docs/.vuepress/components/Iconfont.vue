<script>
export default {
  functional: true,

  render(h, { props }) {
    const { name, size = '16px', color = 'inherit' } = props

    return h('i', {
      class: ['iconfont', name],
      style: {
        color: color,
        fontSize: size,
      },
    })
  },
}
</script>