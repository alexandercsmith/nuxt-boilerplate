<template>
  <div>
    <h2 v-text="title"></h2>
    <p v-text="body"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
