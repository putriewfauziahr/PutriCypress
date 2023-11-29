// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.fixture('../fixtures/data.json').then((loginData) => {
      const InvalidCredential = Cypress._.sample(loginData.InvalidCredential);
      cy.visit('/');
      cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
      cy.get('.panel>.header>.authorization-link>a').click();
      cy.get('#email').type(InvalidCredential.email);
      cy.get('#pass').type(InvalidCredential.pass);
      cy.get('#send2').click();
      cy.wait(2000);
      cy.xpath('//div[contains(text(),"The account sign-in was incorrect or your account")]').should('contain', 'The account sign-in was incorrect or your account');
  });
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })