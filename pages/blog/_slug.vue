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
  },
  async asyncData({ store, params, payload }) {
    if (payload) return { article: payload }
    else return { article: await store.getters.getArticle(params.slug) }
  },
  head() {
    this.$articleSeo(this.article)
  },
  validate({ store, params, error }) {
    if (store.getters.getArticles.find(obj => obj.slug === params.slug))
      return true
    else {
      error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss" scoped></style>
