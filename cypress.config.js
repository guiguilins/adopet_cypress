const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "e8wb7c",
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss" },
})