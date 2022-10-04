it('fills each empty cell using Hint', () => {
  cy.visit('/')
  cy.get('.game__cell.game__cell--filled').should(
    'have.length',
    45,
  )
  cy.get('.game__cell')
    .not('.game__cell--filled')
    .each(($cell) => {
      cy.wrap($cell, { log: false }).click()
      cy.get('.status__action-hint').click()
    })

  cy.contains('.overlay__text', 'You solved it').should(
    'be.visible',
  )
})
