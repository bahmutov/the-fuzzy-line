it.skip('Timer shows 15 minutes', () => {
  cy.visit('/')
  cy.contains('.status__time', '15:00', {
    timeout: 900_000,
  })
})

// confirm the timer shows "00:30" after 30 seconds
// confirm the timer shows "11:40" after 700 seconds
it.skip('Timer shows minutes and seconds since the game started', () => {
  cy.clock()
  cy.visit('/')
  cy.contains('.status__time', '00:00')
  cy.tick(30_000)
  cy.contains('.status__time', '00:30')
  cy.tick(30_000)
  cy.contains('.status__time', '01:00')
  cy.tick(640_000)
  cy.contains('.status__time', '11:40')
})
