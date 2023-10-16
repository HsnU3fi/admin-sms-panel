// https://nuxt.com/docs/api/configuration/nuxt-config
require('dotenv').config()
export default defineNuxtConfig({
    css: [
        '~/assets/fonts/icon/style.css',
        '~/assets/css/tailwind.css',
        '~/assets/css/Main.scss',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt',
        'nuxt-swiper'
    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    nitro: {
        devServer: {
            // My files are under src, if yours are in the root you can change this to ./
            watch: ['./']
        },
        devProxy: {
            '/api/builder': {
                target: 'https://api.webteamwork.ca',
                changeOrigin: true
            }
        },
    },
    runtimeConfig: {
        public: {
            builder_address: process.env.BuilderAddress,
        }
    }
})
