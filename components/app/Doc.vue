<template>
  <div class="doc-ctnr col-1-1">
    <div
      v-for="section in docs"
      :key="section.id"
      class="doc"
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
.doc-cntr {
  @include flex(column, nowrap, flex-start, center);
}
.doc {
}
.doc h2 {
}
.doc p {
}
.doc p a {
  &:hover {
  }
}
</style>
