<template>
  <section>
    <h1>Terms & Conditions</h1>
    <div
      class="document"
      v-for="section in termsConditions"
      :key="section.id"
      :section="section"
    >
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
  components: {
    TextBody
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
