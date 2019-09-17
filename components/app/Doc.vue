<template>
  <div>
    <div
      v-for="section in docs"
      class="document"
      :key="section.id"
      :section="section"
    >
      <h2 v-text="section.title"></h2>
      <p v-text="section.body"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    docs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.document {
}
.document h2 {
}
.document p {
}
.document p a {
  &:hover {
  }
}
</style>
