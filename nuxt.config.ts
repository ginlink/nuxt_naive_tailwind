import { createResolver } from '@nuxt/kit'
import { availableLocales } from './constants/index'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
  ],

  css: [resolve('./assets/scss/app.scss')],

  experimental: {
    renderJsonPayloads: true,
  },

  components: [
    {
      path: resolve('./components'),
      global: true,
    },
  ],

  imports: {},

  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
          ]
        : ['@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },

  // @nuxtjs/i18n@v8还不稳定
  // TODO 可能存在上下文冲突问题
  // https://github.com/nuxt-modules/i18n/issues/1984
  i18n: {
    locales: Object.values(availableLocales),
    detectBrowserLanguage: false,
    langDir: 'locales/',
    defaultLocale: 'en',
  },

  devServer: {
    port: 3009,
  },
})
