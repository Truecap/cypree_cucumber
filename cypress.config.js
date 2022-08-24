const { defineConfig } = require('cypress');
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allureResultsPath: '../allure-results',
  },
  e2e: {
  },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/Features/*.{feature,features}',
  },
)
