export default {
  nuxtServerInit: async function({ dispatch }) {
    await dispatch('blog/loadArticles')
  }
}
