// ---------------------------------------------------------

const { defineConfig } = require('cypress')

// ---------------------------------------------------------

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '.config/.cypress/**/*.cy.js',
    supportFile: '.config/.cypress/support/e2e.js',
  },
  video: false,
  viewportWidth: 1440,
})
