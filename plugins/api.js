export default ({ $axios }, inject) => {
  // Articles
  inject('fetchArticles', () => {
    return $axios.$get(`${process.env.apiUrl}/articles`)
  })
}
