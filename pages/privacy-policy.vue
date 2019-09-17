<template>
  <section>
    <h1>Privacy Policy</h1>
    <div
      class="document"
      v-for="section in privacyPolicy"
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
      privacyPolicy: store.getters.getPrivacyPolicy
    }
  },
  head() {
    this.$generalSeo('Privacy Policy')
  }
}
</script>

<style lang="scss" scoped></style>
