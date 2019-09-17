require('dotenv').config()
import pkg from './package'
import webpack from 'webpack'
import axios from 'axios'

export default {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    apiUrl: process.env.API_URL || '',
    cdnUrl: process.env.CDN_URL || ''
  },

  loading: { color: '#fff' },

  // // SPA: Initial Loading Launch
  // loadingIndicator: {
  //   name: 'pulse',
  //   color: '#fff',
  //   background: '#00f'
  // },

  css: [ '~/assets/app.css' ],

  styleResources: {
    scss: './assets/*.scss'
  },

  plugins: [
    '~/plugins/api.js',
    '~/plugins/icons.js',
    '~/plugins/seo.js',
    '~/plugins/users.js'
  ],

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: process.env.ANALYTICS_ID,
      dev: false
    }]
  ],

  // auth: {
  //
  // },

  // generate: {
  //   routes: function() {
  //     return axios.get(`${process.env.API_URL}/articles`)
  //       .then((res) => {
  //         return res.data.map((item) => {
  //           return `/blog/${item.slug}`
  //         })
  //       })
  //       .catch((err) => {
  //         console.log('Error: ' + err)
  //       })
  //   }
  // },

  sitemap: {
    hostname: 'https://www._.com',
    gzip: true,
    cacheTime: 1000 * 60 * 15,
    routes () {
      return axios.get('')
        .then(res => res.data.map(article =>
          `/blog/${article.slug}`)
        )
    }
  },

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
