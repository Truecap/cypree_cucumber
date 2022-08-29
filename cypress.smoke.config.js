const { defineConfig } = require('cypress');
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allureResultsPath: 'allure-results',
  },
  component: {
    excludeSpecPattern: 'cypress/e2e/Features/*.{feature,features}'
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      //return config;
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    supportFile: false,
    specPattern: 'cypress/e2e/Features/[04]LogInTelnyx.feature',
  },
})
