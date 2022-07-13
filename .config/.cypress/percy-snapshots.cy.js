// ---------------------------------------------------------

import '@percy/cypress'
const scrollToBottom = require('scroll-to-bottomjs')

// ---------------------------------------------------------

describe('Homepage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/')
    cy.reload()
    cy.window().then((cyWindow) =>
      scrollToBottom({ remoteWindow: cyWindow, timing: 50 })
    )
    cy.percySnapshot()
  })
})

// ---------------------------------------------------------

describe('Flexpage', () => {
  it('should match previous Percy Snapshot', () => {
    cy.visit('/flexpage')
    cy.reload()
    cy.window().then((cyWindow) =>
      scrollToBottom({ remoteWindow: cyWindow, timing: 50 })
    )
    cy.percySnapshot()
  })
})
