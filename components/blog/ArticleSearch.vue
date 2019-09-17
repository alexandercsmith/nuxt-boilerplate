<template>
  <div class="search-bar">
    <h1>Article Search</h1>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {}
</style>
