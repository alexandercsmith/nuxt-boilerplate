<template>
  <section>
    <h1>Privacy Policy</h1>
    <Doc :docs="privacyPolicy" />
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
      privacyPolicy: store.getters.getPrivacyPolicy
    }
  },
  head() {
    this.$generalSeo('Privacy Policy')
  }
}
</script>

<style lang="scss" scoped></style>
