export default {
  loadBlog: async function({ commit, error }) {
    await this.$fetchBlog()
      .then(res => {
        commit('blog/SET_TAGS', res.tags)
        commit('blog/SET_ARTICLES', res.articles)
      })
      .catch(err => {
        error({ statusCode: 400, message: err })
      })
  }
}
