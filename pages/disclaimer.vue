<template>
  <section>
    <h1>Disclaimer</h1>
    <Doc :docs="disclaimer" />
  </section>
</template>

<script>
import Doc from '~/components/app/Doc'

export default {
  components: {
    Doc
  },
  asyncData({ store }) {
    return {
      disclaimer: store.getters.getDisclaimer
    }
  },
  head() {
    this.$generalSeo('Disclaimer')
  }
}
</script>

<style lang="scss" scoped></style>
