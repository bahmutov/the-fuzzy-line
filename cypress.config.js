const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    experimentalSingleTabRunMode: true,
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    viewportHeight: 1000,
    viewportWidth: 1000,
  },
})
