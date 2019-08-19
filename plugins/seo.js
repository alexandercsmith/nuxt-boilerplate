export default ({ store }, inject) => {
  // General SEO
  inject('generalSeo', () => {
    return {
      title: store.site.title,
      meta: [
        { name: 'description', hid: 'description', content: store.site.description },
        { name: 'keywords', hid: 'keywords', content: store.site.keywords },
        { name: 'og:title', content: store.site.title },
        { name: 'og:description', content: store.site.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: store.site.url },
        { name: 'og:image', content: store.site.image },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.socials.twitter.username },
        { name: 'twitter:title', content: store.site.title },
        { name: 'twitter:description', content: store.site.description },
        { name: 'twitter:image', content: store.site.image },
        { name: 'twitter:image:alt', content: 'Twitter Image Alt' }
      ]
    }
  })
}
