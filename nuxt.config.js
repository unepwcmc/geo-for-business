export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'geo-business',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~/plugins/vue-flickity.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components/cards/', prefix: 'cards' },
    { path: '~/components/carousel/', prefix: 'carousel' },
    { path: '~/components/content/', prefix: 'content' },
    { path: '~/components/layout/', prefix: 'layout' },
    { path: '~/components/icon/', prefix: 'icon' },
    { path: '~/components/nav/', prefix: 'nav' },
    { path: '~/components/page/', prefix: 'page' },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [ // use underscore "_" & also file extension ".scss"
      '~/assets/css/abstracts.scss' 
    ]
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
