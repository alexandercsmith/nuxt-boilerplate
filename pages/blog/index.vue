<template>
  <section>
    <h1>Blog</h1>
  </section>
</template>

<script>
export default {
  asyncData({ store }) {
    return {
      articles: store.getters.getArticles,
      tags: store.getters.getTags
    }
  },
  head() {
    this.$generalSeo('Blog')
  }
}
</script>

<style lang="scss" scoped></style>
