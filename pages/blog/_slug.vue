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
  },
  validate({ store, params, error }) {
    if (store.state.blog.articles.find(obj => obj.slug === params.slug)) return true
    else {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped></style>
