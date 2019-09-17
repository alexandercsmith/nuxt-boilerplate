require('dotenv').config()
import pkg from './package'
import webpack from 'webpack'
import axios from 'axios'

export default {
  mode: 'spa',

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

  loadingIndicator: {
    name: 'pulse',
    color: '#000000',
    background: '#ffffff'
  },

  css: [ '~/assets/app.css' ],

  styleResources: {
    scss: [
      './assets/articles.scss',
      './assets/colors.scss',
      './assets/columns.scss',
      './assets/mixins.scss',
      './assets/vars.scss'
    ]
  },

  plugins: [
    '~/plugins/api.js',
    '~/plugins/icons.js',
    '~/plugins/init.js',
    '~/plugins/seo.js'
  ],

  modules: [
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

  generate: {
    routes: function() {
      return axios.get(`${process.env.API_URL}/articles`)
      .then((res) => {
        return res.data.map((item) => {
          return {
            route: `/blog/${item.slug}`,
            payload: item
          }
        })
      })
    }
  },

  sitemap: {
    hostname: 'https://www._.com',
    gzip: true,
    cacheTime: 1000 * 60 * 15
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
