import "../commands";

describe ('Add Product to Cart', () => {
    it('Add Product to Cart', () => {
        cy.loginWithValidCredentials();
        cy.get('#ui-id-4').should('be.visible').trigger('mouseover');
        cy.get('#ui-id-10').should('be.visible').trigger('mouseover');
        cy.get('#ui-id-15').should('be.visible').click();
        cy.get('.product-item-info').eq(0).should('be.visible').trigger('mouseover');
    })
})