export default ({ store }, inject) => {
  // General SEO
  inject('generalSeo', title => {
    return {
      title: title,
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
  // Article SEO
  inject('articleSeo', article => {
    return {
      title: article.title,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: article.description
        },
        { name: 'keywords', hid: 'keywords', content: article.keywords },
        { name: 'og:title', content: article.title },
        { name: 'og:description', content: article.description },
        { name: 'og:type', content: 'website' },
        {
          name: 'og:url',
          content: `${store.state.site.url}/blog/${article.slug}`
        },
        { name: 'og:image', content: article.image },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: store.state.socials.twitter.username },
        { name: 'twitter:title', content: article.title },
        { name: 'twitter:description', content: article.description },
        { name: 'twitter:image', content: article.image },
        { name: 'twitter:image:alt', content: `${article.title} Image` }
      ]
    }
  })
}
