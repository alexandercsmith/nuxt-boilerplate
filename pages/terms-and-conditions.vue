<template>
  <section>
    <h1>Terms & Conditions</h1>
    <Doc :docs="termsConditions" />
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
      termsConditions: store.getters.getTermsConditions
    }
  },
  head() {
    this.$generalSeo('Terms & Conditions')
  }
}
</script>

<style lang="scss" scoped></style>
