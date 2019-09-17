<template>
  <nav class="col-1-1">
    <n-link to="/">Home</n-link>
    <n-link to="/blog">Blog</n-link>
    <n-link to="/about">About</n-link>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  @include flex(row, nowrap, flex-start, center);
}
nav a {
}
nav a:hover {
}
nav a.nuxt-link-exact-active {
}
</style>
