export default ({ $axios }, inject) => {
  // Documents
  inject('fetchDocuments', () => {
    return $axios.$get(`${process.env.cdnUrl}/data/documents.json`)
  })
  // Articles
  inject('fetchArticles', () => {
    return $axios.$get(`${process.env.apiUrl}/articles`)
  })
}
