export default ({ $axios }, inject) => {
  inject('fetchArticles', () => {
    return $axios.$get(`${process.env.apiUrl}/articles`)
  })
  inject('fetchArticle', (id) => {
    return $axios.$get(`${process.env.apiUrl}/articles/${id}`)
  })
}
