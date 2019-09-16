<template>
  <section>
    <h1>Dashboard</h1>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',
  head() {
    this.$generalSeo()
  }
}
</script>

<style lang="scss" scoped></style>
