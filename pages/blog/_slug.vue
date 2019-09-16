<template>
  <section>
    <h1 v-text="article.title"></h1>
  </section>
</template>

<script>
export default {
  asyncData({ params }) {
    let article = this.$fetchArticle(params.slug)
    return {
      article: article
    }
  },
  head() {
    this.$articleSeo(this.article)
  }
}
</script>

<style lang="scss" scoped></style>
