// ---------------------------------------------------------

const { defineConfig } = require('cypress')

// ---------------------------------------------------------

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.PERCY_DEPLOY_URL,
    specPattern: '.config/.cypress/**/*.cy.js',
    supportFile: '.config/.cypress/support/e2e.js',
  },
  video: false,
  viewportWidth: 1440,
})
