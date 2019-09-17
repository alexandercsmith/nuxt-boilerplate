<template>
  <section>
    <h1>Home</h1>

    <h1>H1 Heading</h1>

    <h2>H2 Heading</h2>

    <h3>H3 Heading</h3>

    <p>
      Paragraph text for general purpose areas. <a href="#">Paragraph Link</a>
    </p>

    <ul>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>

    <ol>
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ol>

    <form>
      <input type="text" placeholder="Text Input..." /><br />
      <select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
      <br />
      <textarea></textarea>
      <br />
      <input type="radio" /> Radio <br />
      <input type="checkbox" /> Checkbox <br />
      <input type="submit" />
    </form>
  </section>
</template>

<script>
export default {
  head() {
    this.$generalSeo('Title')
  }
}
</script>

<style lang="scss" scoped></style>
