// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/global.css'],
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"]
})