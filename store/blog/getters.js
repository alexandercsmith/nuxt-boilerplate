export default {
  getArticles: state => {
    return state.blog.articles
  },
  getTags: state => {
    return state.blog.tags
  }
}
