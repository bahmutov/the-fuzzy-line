it('changes the number of filled cells', () => {
  cy.visit('/')
  cy.get('select[name=status__difficulty-select]').should(
    'have.value',
    'Easy',
  )
  cy.get('.game__cell--filled').should('have.length', 45)

  cy.get('select[name=status__difficulty-select]').select(
    'Medium',
  )
  cy.get('.game__cell--filled').should('have.length', 40)

  cy.get('select[name=status__difficulty-select]').select(
    'Hard',
  )
  cy.get('.game__cell--filled').should('have.length', 30)
})
