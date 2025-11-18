describe('e2e: Complete Cycle Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should start and stop new cycle', () => {
    // type task and duration (minutes)
    cy.get('[name="task"]')
      .should('be.enabled')
      .type('Aprender Cypress')
      .should('have.value', 'Aprender Cypress')

    cy.get('[name="minutesAmount"]')
      .should('be.enabled')
      .clear()
      .type('5')
      .should('have.value', '5')

    // start cycle
    cy.contains('Começar').should('be.enabled').click()

    cy.contains('Começar').should('not.exist')
    cy.get('[name="task"]').should('not.have.value').should('be.disabled')
    cy.get('[name="minutesAmount"]')
      .should('not.have.value')
      .should('be.disabled')

    // stop cycle
    cy.contains('Interromper').should('be.visible').should('be.enabled').click()

    cy.get('[name="task"]').should('not.have.value')
    cy.get('[name="minutesAmount"]').should('not.have.value')
  })

  it('should navigate from home to history page to check if cycle finishes', () => {
    cy.get('[name="task"]').type('Aprender Cypress')
    cy.get('[name="minutesAmount"]').clear().type('5')
    cy.contains('Começar').should('be.enabled').click()

    cy.get('[title="History"]').click()

    cy.url().should('include', 'history')
    cy.contains('Meu histórico').should('be.visible')

    cy.contains('Aprender Cypress')
    cy.contains('5 minutos')
    cy.contains('Em andamento')

    // back to home
    cy.get('[title="Home"]').click()

    // stop cycle
    cy.contains('Interromper').click()

    // verify if cycle finishes
    cy.get('[title="History"]').click()
    cy.contains('Aprender Cypress')
    cy.contains('Interrompido')
  })
})
