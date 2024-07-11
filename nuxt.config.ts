// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      title: 'EYS-air',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'viewport', content: 'width=375' },
        { hid: 'description', name: 'description', content: 'EYSのオンラインアカデミー' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", 'nuxt-swiper'],
  css: ['~/assets/css/main.css']
})