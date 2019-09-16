export default {
  loadArticles: async function({ commit, error }) {
    await this.$fetchArticles()
      .then(res => {
        commit('blog/SET_ARTICLES')
      })
      .catch(err => {
        error({ statusCode: 400, message: err })
      })
  }
}
