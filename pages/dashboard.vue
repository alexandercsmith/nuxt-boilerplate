<template>
  <section>
    <h1>Dashboard</h1>
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    this.$generalSeo('Dashboard')
  }
}
</script>

<style lang="scss" scoped></style>
