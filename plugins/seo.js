export default ({ store }, inject) => {
  // General SEO
  inject('generalSeo', () => {
    return {
      title: store.state.site.title,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: store.state.site.description
        },
        {
          name: 'keywords',
          hid: 'keywords',
          content: store.state.site.keywords
        },
        { name: 'og:title', content: store.state.site.title },
        { name: 'og:description', content: store.state.site.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: store.state.site.url },
        { name: 'og:image', content: store.state.site.image },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.state.socials.twitter.username },
        { name: 'twitter:title', content: store.state.site.title },
        { name: 'twitter:description', content: store.state.site.description },
        { name: 'twitter:image', content: store.state.site.image },
        { name: 'twitter:image:alt', content: 'Twitter Image Alt' }
      ]
    }
  })
}
