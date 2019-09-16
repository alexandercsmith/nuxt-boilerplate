<template>
  <section>
    <ArticleHeader :article="article" />
    <ArticleShare :article="article" />
    <article v-text="article.body"></article>
  </section>
</template>

<script>
import ArticleHeader from '~/components/blog/ArticleHeader'
import ArticleShare from '~/components/blog/ArticleShare'

export default {
  components: {
    ArticleHeader,
    ArticleShare
  }
  asyncData({ params }) {
    return {
      article: this.$fetchArticle(params.slug)
    }
  },
  head() {
    this.$articleSeo(this.article)
  }
}
</script>

<style lang="scss" scoped></style>
