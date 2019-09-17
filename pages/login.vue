<template>
  <section>
    <h1>Login</h1>
    <form v-model="user">
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  head() {
    this.$generalSeo('Login')
  },
  methods: {
    login: function() {}
  }
}
</script>

<style lang="scss" scoped></style>
