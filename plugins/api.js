export default ({ $axios }, inject) => {
  // Documents
  inject('fetchDocuments', () => {
    return $axios.$get(`${process.env.cdnUrl}/data/docs.json`)
  })
  // Blog
  inject('fetchArticles', () => {
    return $axios.$get(`${process.env.cdnUrl}/data/blog.json`)
  })
}
