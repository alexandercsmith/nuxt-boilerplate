export default {
  SET_ARTICLES: (state, payload) => {
    state.blog.articles = payload
  },
  SET_TAGS: (state, payload) => {
    state.blog.tags = payload
  }
}
