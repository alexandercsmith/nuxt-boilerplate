<template>
  <div class="search-bar col-1-1">
    <input v-model="search" type="text" placeholder="Search..." />
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
.search-bar {
}
</style>
