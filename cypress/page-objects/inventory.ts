import Login from "./login";

class Inventory {

    static readonly fleeceJacketName: string = 'Sauce Labs Fleece Jacket'
    static readonly fleeceJacketDesc: string = "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    static readonly fleeceJacketPrice: string = '$49.99'

    static readonly inventoryUrl: string = Login.baseUrl + 'inventory.html'
    
    addToCartFleeceJacket(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]');
    
    }

    removeFromCartFleeceJacket(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test=remove-sauce-labs-fleece-jacket]');
    
    }

    shoppingCartCountBadge(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[class="shopping_cart_badge"]');
    
    }

    shoppingCartButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="shopping-cart-link"]');
    
    }

    continueShoppingButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="continue-shopping"]');
    
    }
}

export default Inventory;

export const addToCartFleeceJacket = () => {
    const inventoryPage = new Inventory();
    inventoryPage.addToCartFleeceJacket().should('is.visible')
    inventoryPage.addToCartFleeceJacket().click()
};