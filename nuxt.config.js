export default {
target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'geo-business',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:'msapplication-TileColor', content:'#00aba9'},
      { name:'theme-color', content:'#ffffff' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href:'/site.webmanifest' },
      { rel: 'mask-icon', href:'/safari-pinned-tab.svg', color:'#1fa0e3' }
    ]
  },

  target: 'static',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/global.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~/plugins/vue-flickity.js', mode: 'client', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    { path: '~/components/button/', prefix: 'button' },
    { path: '~/components/cards/', prefix: 'cards' },
    { path: '~/components/carousel/', prefix: 'carousel' },
    { path: '~/components/content/', prefix: 'content' },
    { path: '~/components/logo/', prefix: 'logo' },
    { path: '~/components/layout/', prefix: 'layout' },
    { path: '~/components/icon/', prefix: 'icon' },
    { path: '~/components/nav/', prefix: 'nav' },
    { path: '~/components/page/', prefix: 'page' },
    { path: '~/components/sticky/', prefix: 'sticky' },
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
