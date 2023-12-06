class loginPage {
    visit(){
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
    }

    clickSignIn() {
        cy.get('.panel>.header>.authorization-link>a').click();
    }

    inputEmail(){
        cy.fixture('../../fixtures/data.json').then((loginData) => {
            cy.get('#email').type(loginData.email);
        })
    }

    inputPassword(){
        cy.fixture('../../fixtures/data.json').then((loginData) => {
            cy.get('#email').type(loginData.pass);
        })
    }

    inputInvalidFormatEmail(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
            const InvalidFormat = Cypress._.sample(loginData.InvalidCredential);
            cy.get('#email').type(InvalidFormat['invalid-format-email']);
        })
    }

    expectedInvalidFormatEmail(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
        const InvalidFormat = Cypress._.sample(loginData.InvalidCredential);
        cy.get('#email-error').should('be.visible').should('contain', InvalidFormat['invalid-format-email-msg']);
        })
    }

    clickSignInButton(){
        cy.wait(3000);
        cy.get('#send2').click();
    }

}

export default new loginPage();