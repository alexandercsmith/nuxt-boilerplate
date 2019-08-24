require('dotenv').config()
import pkg from './package'
import webpack from 'webpack'
// import axios from 'axios'

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

  css: [ '~/assets/app.css' ],

  styleResources: {
    scss: './assets/*.scss'
  },

  plugins: [
    '~/plugins/api.js',
    '~/plugins/seo.js'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: process.env.ANALYTICS_ID,
      dev: false
    }]
  ],

  // // SPA: Generate Dynamic Pages
  // generate: {
  //   routes: function() {
  //     return axios.get(`${process.env.API_URL}/feed`)
  //       .then((res) => {
  //         return res.data.map((item) => {
  //           return '/_/' + item.slug
  //         })
  //       })
  //       .catch((err) => {
  //         console.log('Error: [Generate] - ' + err)
  //       })
  //   }
  // },

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
