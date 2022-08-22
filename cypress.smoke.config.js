const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    allureResultsPath: 'allure-results',
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/Features/[04]LogInTelnyx.feature',
  },
})
