import '@applitools/eyes-cypress/commands'
import 'cypress-xpath'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

// Alternatively you can use CommonJS syntax:
// require('./commands')