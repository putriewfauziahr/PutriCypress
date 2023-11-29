require('@cypress/xpath');
import "../commands";

describe('Login', () => {
    it('Login', () => {

        cy.visit('/');
        cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
        cy.get('.panel>.header>.authorization-link>a').click();
        cy.get('#email').type('putri.tester@mailinator.com');       
        cy.get('#pass').type('@123Testing');
        cy.get('#send2').click();
        cy.wait(2000);
        cy.xpath('//header/div[1]/div[1]/ul[1]/li[1]/span[1]').should('contain','Welcome,')
        cy.wait(3000);
        cy.xpath('//header/div[1]/div[1]/ul[1]/li[2]/span[1]/button[1]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
        cy.get('.panel > .header > .authorization-link > a').should('contain', 'Sign In ');

    })

    it.only('Login Using Custom Commands', () => {
        cy.loginWithInvalidCredentials();
    })
})