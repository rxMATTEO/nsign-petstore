import { NuxtConfig } from 'nuxt/config';

const nuxtConfig: NuxtConfig = {
  devtools: { enabled: true },
  buildModules: ['@nuxt/typescript-build'],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    watch: ['./'],
  },
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
    server: {
      hmr: {
        clientPort: 44383,
        port: 44383,
      }
    },
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
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
