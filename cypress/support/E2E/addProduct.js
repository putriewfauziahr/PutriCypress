import "../commands";

describe ('Add Product to Cart', () => {
    it('Add Product to Cart', () => {
        cy.loginWithValidCredentials();
        cy.get('#ui-id-4').should('be.visible').trigger('mouseover');
        cy.get('#ui-id-10').should('be.visible').trigger('mouseover');
        cy.get('#ui-id-15').should('be.visible').click();
        cy.get('.product-item-info').eq(0).should('be.visible').click();
        cy.get('#option-label-size-143-item-171').should('be.visible').click();
        cy.get('#option-label-color-93-item-53').should('be.visible').click();
        cy.get('#product-addtocart-button').should('be.visible').click();
        cy.wait(5000);
        cy.get('.message-success>div', {timeout: 50000}).should('contain', 'You added');
    })
})