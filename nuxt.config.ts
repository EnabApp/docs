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
    highlight: {
      // preload
       theme: 'material-palenight'
    },
    markdown: {
      tags: {
        code: 'Code',
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6',
        p: 'P',
        a: 'Anchor',
      }
    }
  },
})
