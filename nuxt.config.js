import pkg from './package'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: "くぁwせdrftgyふじこlp；＠：「」ボタン",
    meta: [{
        charset: 'utf-8'
      },
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }, {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:site",
        content: "@de_teiu_tkg"
      },
      {
        name: "twitter:title",
        content: "くぁwせdrftgyふじこlp；＠：「」ボタン"
      },
      {
        name: "twitter:description",
        content: "くぁwせdrftgyふじこlp；＠：「」をツイートまたはクリップボードにコピーするアプリです."
      },
      {
        name: "twitter:image",
        content: "https://hujiko.netlify.com/hujiko.png"
      }

    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
  ],
  manifest: {
    name: 'hujiko',
    lang: 'ja',
    short_name: 'hujiko',
    title: 'くぁwせdrftgyふじこlp；＠：「」ボタン',
    'og:title': 'くぁwせdrftgyふじこlp；＠：「」ボタン',
    description: 'くぁwせdrftgyふじこlp；＠：「」をツイートまたはクリップボードにコピーするアプリです.',
    'og:description': 'くぁwせdrftgyふじこlp；＠：「」をツイートまたはクリップボードにコピーするアプリです.'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
