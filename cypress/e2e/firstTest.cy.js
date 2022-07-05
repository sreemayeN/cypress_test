describe('Open portal login page', () => {
  it('login page', () => {

    cy.visit('https://customer.idwalmarine.com/')

    cy.contains('Login').click()
})
it('Give login details and enter the portal', () => {

  cy.get('input[name=Email]').type('asims_customer_test_1@outlook.com')

  cy.get('input[name=Password]').type('l0lEKHPK91#!igVzo*Rp')

  cy.contains('LOG IN').click()

  cy.contains('New Quotation').click()

  cy.get('span[id=select2-ship-name-container]').click().type('BRIGHT CORAL{enter}')

  cy.get('span[class=select2-results]').contains("BRIGHT CORAL").click()

  cy.get('span[id=select2-InspectionTypeId-container]').click()

  cy.contains('li', 'CI (Condition Inspection)').click()

  cy.get('span[id=select2-location-container]').click().type('Test Cardiff{enter}')

  cy.contains('li', 'Test Cardiff Port').click()

  cy.get('input[name="SingleDate"]').click()

  cy.get('td[class=available]').contains('7').click()

  cy.contains('button', 'REQUEST QUOTATION').click()

  cy.contains('button', 'CONTINUE').click()

  cy.get('a').contains('Details').click()

})

})