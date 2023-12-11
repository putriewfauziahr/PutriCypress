class registerPage{
    clickSignup () {
        cy.get('a:nth-child(1)').eq(2).should('be.visible').click();
    }

    pageSignup () {
        cy.get('span.base').should('be.visible').should('contain', 'Create New Customer Account');
    }

    inputFirstname () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const validRegis = Cypress._.sample(regisData.validCredential);
            cy.get('#firstname').should('be.visible').type(validRegis.firstName);
        })
    }

    inputLastname () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const validCredential = Cypress._.sample(regisData.validCredential);
            cy.get('#lastname').should('be.visible').type(validCredential.lastName);
        })
    }

    inputEmail () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const validCredential = Cypress._.sample(regisData.validCredential);
            cy.get('#email_address').should('be.visible').type(validCredential.email);
        })
    }

    inputPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const validCredential = Cypress._.sample(regisData.validCredential);
            cy.get('#password').should('be.visible').type(validCredential.password);
        })
    }

    inputConfirmPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const validCredential = Cypress._.sample(regisData.validCredential);
            cy.get('#password-confirmation').should('be.visible').type(validCredential.confirmPass);
        })
    }

    clickRegisterBtn () {
        cy.get('span:nth-child(1)').eq(47).should('be.visible').click();
    }

    successRegist (){
        cy.get('div.messages div.message-success.success.message>div:nth-child(1)').should('contain', 'Thank you for registering with Main Website Store.');
    }

    // WEAK PASSWORD
    inputWeakPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const weakPassword = Cypress._.sample(regisData.weakPassword);
            cy.get('#password').should('be.visible').type(weakPassword.weakPass);
        })
    }

    passwordWeak (){
        cy.get('#password-strength-meter-label').should('be.visible').should('contain', 'Weak')
    }

    // MEDIUM PASSWORD
    inputMediumPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const mediumPassword = Cypress._.sample(regisData.mediumPassword);
            cy.get('#password').should('be.visible').type(mediumPassword.mediumPass);
        })
    }

    inputConfirmMediumPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const mediumPassword = Cypress._.sample(regisData.mediumPassword);
            cy.get('#password-confirmation').should('be.visible').type(mediumPassword.mediumConfirmPass);
        })
    }

    passwordMedium (){
        cy.get('#password-strength-meter-label').should('be.visible').should('contain', 'Medium')
    }

    // STRONG PASSWORD
    inputStrongPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const strongPassword = Cypress._.sample(regisData.strongPassword);
            cy.get('#password').should('be.visible').type(strongPassword.strongPass);
        })
    }

    inputConfirmStrongPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const strongPassword = Cypress._.sample(regisData.strongPassword);
            cy.get('#password-confirmation').should('be.visible').type(strongPassword.strongConfirmPass);
        })
    }

    passwordStrong (){
        cy.get('#password-strength-meter-label').should('be.visible').should('contain', 'Strong')
    }

    //VERY STRONG PASSWORD
    inputVeryStrongPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const veryStrongPass = Cypress._.sample(regisData.veryStrongPass);
            cy.get('#password').should('be.visible').type(veryStrongPass.veryStrongPass);
        })
    }

    inputConfirmVeryStrongPassword () {
        cy.fixture('../fixtures/register.json').then((regisData) => {
            const veryStrongPass = Cypress._.sample(regisData.veryStrongPass);
            cy.get('#password-confirmation').should('be.visible').type(veryStrongPass.veryStrongConfirmPass);
        })
    }

    passwordVeryStrong (){
        cy.get('#password-strength-meter-label').should('be.visible').should('contain', 'Very Strong')
    }

}

export default new registerPage();