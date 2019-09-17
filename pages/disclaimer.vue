<template>
  <section>
    <h1>Disclaimer</h1>
    <div
      class="document"
      v-for="section in disclaimer"
      :key="section.id"
      :section="section">
        <TextBody
          :title="section.title"
          :body="section.body"
        />
    </div>
  </section>
</template>

<script>
import TextBody from '~/components/app/TextBody'

export default {
  asyncData({ store }) {
    return {
      disclaimer: store.getters.getDisclaimer
    }
  },
  components: {
    TextBody
  },
  head() {
    this.$generalSeo('Disclaimer')
  }
}
</script>

<style lang="scss" scoped></style>
