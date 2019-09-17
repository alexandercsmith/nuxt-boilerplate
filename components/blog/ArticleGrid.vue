<template>
  <div class="grid">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleCard from '~/components/blog/ArticleCard'

export default {
  components: {
    ArticleCard
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  @include grid(1fr 1fr 1fr, $margin, $margin);
}
</style>
