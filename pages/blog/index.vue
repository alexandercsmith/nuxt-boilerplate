<template>
  <section>
    <h1>Blog</h1>
    <ArticleSearch
      :search="search"
      :filter="filter"
      :tags="tags"
    />
    <ArticleGrid :articles="articles" />
  </section>
</template>

<script>
import ArticleSearch from '~/components/blog/ArticleSearch'
import ArticleGrid from '~/components/blog/ArticleGrid'

export default {
  components: {
    ArticleSearch,
    ArticleGrid
  },
  asyncData({ store }) {
    return {
      articles: store.getters.getArticles,
      tags: store.getters.getTags,
      search: '',
      filter: ''
    }
  },
  head() {
    this.$generalSeo('Blog')
  }
}
</script>

<style lang="scss" scoped></style>
