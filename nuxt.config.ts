import { defineNuxtConfig } from 'nuxt'
import { uno } from './unocss/index'
 
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@enab/ui',
    '@enab/core',
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  components: {
    global: true,
    dirs: ['~/components']
  },
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },

  core: {
    isCore: false
  },

  Ui: {
    isCore: false
  },

  // UnoCSS Configurations
  unocss: uno,

  content: {
    highlight: {
      // preload
       theme: 'material-palenight'
    },
    markdown: {
      tags: {
        h1: 'H1',
        h2: 'H2',
        h3: 'H3',
        h4: 'H4',
        h5: 'H5',
        h6: 'H6',
        p: 'P',
        a: 'Anchor',
        hr: 'Hr'
      }
    }
  },
})
