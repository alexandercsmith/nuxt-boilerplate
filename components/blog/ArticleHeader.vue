<template>
  <div class="header">
    <h1>Article Header</h1>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
}
</style>
