import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    defaultBrowser: 'chrome'
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
