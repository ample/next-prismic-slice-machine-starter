// ---------------------------------------------------------

import '@percy/cypress'
const scrollToBottom = require('scroll-to-bottomjs')

// ---------------------------------------------------------

describe('Homepage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/')
    cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
    cy.reload()
    cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot()
  })
})

// ---------------------------------------------------------

describe('Flexpage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/flexpage')
    cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
    cy.reload()
    cy.window().then((cyWindow) => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot()
  })
})
