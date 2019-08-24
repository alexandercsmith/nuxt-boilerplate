<template>
  <div>
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/app/Nav'
import Footer from '~/components/app/Footer'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
