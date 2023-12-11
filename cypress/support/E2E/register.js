import registerPage from '../../support/pageObjects/registerPage';

describe('Register', () => {
    it('register', () => {
        cy.visit('/');
        registerPage.clickSignup();
        registerPage.pageSignup();
        registerPage.inputFirstname();
        registerPage.inputLastname();
        registerPage.inputEmail();
        registerPage.inputPassword();
        registerPage.inputConfirmPassword();
        registerPage.clickRegisterBtn();
        registerPage.successRegist();
    })

    it('register password weak', () => {
        cy.visit('/');
        registerPage.clickSignup();
        registerPage.pageSignup();
        registerPage.inputFirstname();
        registerPage.inputLastname();
        registerPage.inputEmail();
        registerPage.inputWeakPassword();
        registerPage.passwordWeak();
    })

    it('register password medium', () => {
        cy.visit('/');
        registerPage.clickSignup();
        registerPage.pageSignup();
        registerPage.inputFirstname();
        registerPage.inputLastname();
        registerPage.inputEmail();
        registerPage.inputMediumPassword();
        registerPage.inputConfirmMediumPassword();
        registerPage.passwordMedium();
        registerPage.clickRegisterBtn();
        registerPage.successRegist();
    })

    it('register password strong', () => {
        cy.visit('/');
        registerPage.clickSignup();
        registerPage.pageSignup();
        registerPage.inputFirstname();
        registerPage.inputLastname();
        registerPage.inputEmail();
        registerPage.inputStrongPassword();
        registerPage.inputConfirmStrongPassword();
        registerPage.passwordStrong();
        registerPage.clickRegisterBtn();
        registerPage.successRegist();
    })

    it.only('register password Very Strong', () => {
        cy.visit('/');
        registerPage.clickSignup();
        registerPage.pageSignup();
        registerPage.inputFirstname();
        registerPage.inputLastname();
        registerPage.inputEmail();
        registerPage.inputVeryStrongPassword();
        registerPage.inputConfirmVeryStrongPassword();
        registerPage.passwordVeryStrong();
        registerPage.clickRegisterBtn();
        registerPage.successRegist();
    })


})