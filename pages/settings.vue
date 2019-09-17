<template>
  <section>
    <h1>Settings</h1>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    this.$generalSeo('Account')
  }
}
</script>

<style lang="scss" scoped></style>
