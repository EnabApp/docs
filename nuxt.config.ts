import { defineNuxtConfig } from 'nuxt'
import { uno } from './unocss/index'
 
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt'
  ],

  // UnoCSS Configurations
  unocss: uno,

  content: {
    // documentDriven: true
  }
})
