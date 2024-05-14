import Login from "./login";

class Checkout {

    static readonly checkoutUrlOne: string = Login.baseUrl + 'checkout-step-one.html'
    static readonly checkoutUrlTwo: string = Login.baseUrl + 'checkout-step-two.html'
    static readonly checkoutUrlComplete: string = Login.baseUrl + 'checkout-complete.html'
    static readonly completeHeader: string = 'Thank you for your order!'
    static readonly completeBody: string = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'

    nameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="firstName"]');
    
    } 

    lastNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="lastName"]');
    
    } 

    postalCodeInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="postalCode"]');
    
    } 

    continueButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="continue"]');
    
    } 

    finishButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="finish"]');
    
    } 

    completeHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="complete-header"]');
    
    } 

    completeBody(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="complete-text"]');
    
    } 

    completeLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="pony-express"]');
    
    } 

    backHomeButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="back-to-products"]');
    
    } 
}

    export default Checkout;