import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,

  component: {
    // setupNodeEvents (on, config) {},
    viewportHeight: 500,
    viewportWidth: 1000,
    specPattern: 'src/**/*.e2e.{js,ts}*',

    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },

  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
})
