import Login from "./login";

class Cart {

    static readonly cartUrl: string = Login.baseUrl + 'cart.html'

    cartItem(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="inventory-item"]');
    
    }

    cartItemName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="inventory-item-name"]');
    
    }

    cartItemDesc(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="inventory-item-desc"]');
    
    }

    cartItemPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="inventory-item-price"]');
    
    }

    checkoutButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="checkout"]');
    
    }

}

export default Cart;