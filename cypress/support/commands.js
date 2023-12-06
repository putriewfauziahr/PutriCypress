Cypress.Commands.add('loginWithValidCredentials', () => {
  cy.fixture('../fixtures/data.json').then((loginData) => {
    const ValidCredential = Cypress._.sample(loginData.ValidCredential);
    cy.visit('/');
    cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
    cy.get('.panel>.header>.authorization-link>a').click();
    cy.get('#email').type(ValidCredential.email);
    cy.get('#pass').type(ValidCredential.pass);
    cy.get('#send2').should('be.visible').click();
    cy.get('.logged-in', {timeout:5000}).should('be.visible').should('contain', ValidCredential['success-msg-login']);
  });
});


 Cypress.Commands.add('loginWithInvalidCredentials', () => {
    cy.fixture('../fixtures/data.json').then((loginData) => {
      const InvalidCredential = Cypress._.sample(loginData.InvalidCredential);
      cy.visit('/');
      cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
      cy.get('.panel>.header>.authorization-link>a').click();
      cy.get('#email').type(InvalidCredential.email);
      cy.get('#pass').type(InvalidCredential.pass);
      cy.get('#send2').should('be.visible').click();
      cy.get('.message-error>div').should('be.visible').should('contain', InvalidCredential['error-msg-login']);
    });
  });


  Cypress.Commands.add('LoginWithoutInputCredential', () => {
    cy.fixture('../fixtures/data.json').then((loginData) => {
      const WithoutCredential = Cypress._.sample(loginData.ValidCredential);
      cy.visit('/');
      cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
      cy.get('.panel>.header>.authorization-link>a').click();
      cy.wait(3000);
      cy.get('#send2').click();
      cy.get('#email-error').should('be.visible').should('contain', WithoutCredential['error-email']);
      cy.get('#pass-error').should('be.visible').should('contain', WithoutCredential['error-pass']);
    })
  })
