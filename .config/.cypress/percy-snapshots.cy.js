// ---------------------------------------------------------

import '@percy/cypress'

// ---------------------------------------------------------

describe('Homepage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/')
    cy.reload()
    cy.get('footer').scrollIntoView({ duration: 2000 })
    cy.percySnapshot()
  })
})

// ---------------------------------------------------------

describe('Flexpage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/flexpage')
    cy.reload()
    cy.get('footer').scrollIntoView({ duration: 2000 })
    cy.percySnapshot()
  })
})
