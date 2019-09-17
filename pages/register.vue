<template>
  <section>
    <h1>Register</h1>
    <form v-model="user">
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="password" name="password" />
      <input type="password" name="confirmPassword" />
      <input type="submit">Submit</input>
    </form>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  head() {
    this.$generalSeo('Register')
  },
  methods: {
    register: function() {}
  }
}
</script>

<style lang="scss" scoped></style>
