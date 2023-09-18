import { NuxtConfig } from 'nuxt/config';

const nuxtConfig: NuxtConfig = {
  devtools: { enabled: true },
  buildModules: ['@nuxt/typescript-build'],
  build: {
    // @ts-ignore
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  pinia: {
    autoImports: ['defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  },
  vite: {
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  runtimeConfig: {
    public: {
      API_URL: 'https://petstore.swagger.io/v2'
    }
  },
  nitro: {
    compressPublicAssets: true
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Awesome pet store for Nsign.' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineNuxtConfig(nuxtConfig);
