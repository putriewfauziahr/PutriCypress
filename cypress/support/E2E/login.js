require('@cypress/xpath');
import "../commands";

describe('Login', () => {
    it('Login', () => {
        cy.visit('/');
        cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
        cy.get('.panel>.header>.authorization-link>a').click();
        cy.get('#email').should('be.visible').type('putri.tester@mailinator.com');       
        cy.get('#pass').should('be.visible').type('@123Testing');
        cy.wait(3000);
        cy.get('#send2').click();
        cy.get('.logged-in', {timeout:5000}).should('be.visible').should('contain','Welcome,');
        cy.get('button.action.switch').should('be.visible').eq(0).click();
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').should('be.visible').click();
        cy.get('.panel > .header > .authorization-link > a').should('contain', 'Sign In ');
        cy.wait(3000);
    })

    it('Login Using Invalid Credential', () => {
        cy.loginWithInvalidCredentials();
        cy.wait(3000);
    })

    it('Login Using Valid Credential', () => {
        cy.loginWithValidCredentials();
        cy.wait(3000);
        
    })

    it.only('Login Without Input Credentail', () => {
        cy.LoginWithoutInputCredential();
    })
})