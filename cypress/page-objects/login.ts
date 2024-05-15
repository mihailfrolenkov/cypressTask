
class Login {
    static readonly baseUrl: string = 'https://www.saucedemo.com/'
    static readonly errorUsernameBlank: string = 'Epic sadface: Username is required'
    static readonly errorPasswordBlank: string = 'Epic sadface: Password is required'
    static readonly errorWrongCredentials: string = 'Epic sadface: Username and password do not match any user in this service'
    static readonly pageExpectedTitle: string = 'Swag Labs'

    pageTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class=login_logo]');
    }

    usernameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=username]');
    }

    passwordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=password]');
    }

    loginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=login-button]');
    }

    errorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=error]');
    }
}

export default Login;

export const login = (username: string, password: string) => {
    const loginPage = new Login();
    loginPage.usernameInput().clear();
    loginPage.passwordInput().clear();
    loginPage.usernameInput().type(username);
    loginPage.passwordInput().type(password);
    loginPage.loginButton().click();
};