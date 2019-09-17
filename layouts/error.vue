<template>
  <section>
    <h1 v-text="error.statusCode"></h1>
    <h2 v-if="error.statusCode === 404">Page Not Found</h2>
    <h2 v-else>An Error Occurred</h2>
    <n-link to="/">Back to Home</n-link>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  head() {
    return {
      title: 'Something went wrong',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Sorry, something went wrong. Please refresh or return to the Home page.' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Codystar&display=swap'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Codystar', cursive;
  font-size: 4rem;
}
h2 {
}
a {
}
a:hover {
}
</style>
