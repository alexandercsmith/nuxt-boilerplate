<template>
  <div>
    <n-link :to="'/blog/' + article.slug">{{ article.title }}</n-link>
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

<style lang="scss" scoped></style>
