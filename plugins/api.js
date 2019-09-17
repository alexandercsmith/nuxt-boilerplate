export default ({ $axios }, inject) => {
  // Documents
  inject('fetchDocuments', () => {
    return $axios.$get(`${process.env.cdnUrl}/data/docs.json`)
  })
  // Articles
  inject('fetchArticles', () => {
    return $axios.$get(`${process.env.cdnUrl}/data/articles.json`)
  })
}
