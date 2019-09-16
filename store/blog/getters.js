export default {
  getArticles: state => {
    return state.blog.articles
  },
  getArticle: state => id => {
    return state.blog.articles.find(obj => obj.slug === id)
  },
  getTags: state => {
    return state.blog.tags
  }
}
