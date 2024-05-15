import Inventory from '../page-objects/inventory';
import Login from '../page-objects/login'
import Cart from '../page-objects/cart'
import Checkout from '../page-objects/checkout';
import SidePanel from '../page-objects/sidePanel';
const loginPage = new Login();
const inventoryPage = new Inventory();
const cartPage = new Cart();
const checkoutPage = new Checkout();
const sidePanel = new SidePanel();

describe('e2e task test', () => {

  it('e2e task test"', () => {
    //open saucedemo.com

    cy.visit(Login.baseUrl)
    //check that page loaded

    loginPage.pageTitle().should('have.text', Login.pageExpectedTitle)
    cy.url().should('eq', Login.baseUrl)
    loginPage.loginButton().should('is.visible')
    loginPage.loginButton().should('have.value', 'Login')
    //check error messages

    loginPage.loginButton().click()
    loginPage.errorMessage().should('have.text', Login.errorUsernameBlank)
    loginPage.usernameInput().clear()
    loginPage.usernameInput().type('abc')
    loginPage.loginButton().click()
    loginPage.errorMessage().should('have.text', Login.errorPasswordBlank)
    loginPage.passwordInput().clear()
    loginPage.passwordInput().type('abc')
    loginPage.loginButton().click()
    loginPage.errorMessage().should('have.text', Login.errorWrongCredentials)
    //successful login

    loginPage.usernameInput().clear()
    loginPage.passwordInput().clear()
    loginPage.usernameInput().type('standard_user')
    loginPage.passwordInput().type('secret_sauce')
    loginPage.loginButton().click()
    cy.url().should('eq', Inventory.inventoryUrl)
    //add fleece jacket to a cart and chech UI

    inventoryPage.addToCartFleeceJacket().should('is.visible')
    inventoryPage.addToCartFleeceJacket().click()
    inventoryPage.shoppingCartCountBadge().should('is.visible')
    inventoryPage.shoppingCartCountBadge().should('have.text', '1')
    inventoryPage.removeFromCartFleeceJacket().should('is.visible')
    //remove fleece jacket from cart and check UI

    inventoryPage.removeFromCartFleeceJacket().click()
    inventoryPage.shoppingCartCountBadge().should('not.exist')
    inventoryPage.shoppingCartButton().click()
    cartPage.cartItem().should('not.exist')
    inventoryPage.continueShoppingButton().click()
    //re-add item and open cart page
    inventoryPage.addToCartFleeceJacket().click()
    inventoryPage.shoppingCartButton().click()

    //check that item is in a cart
    cartPage.cartItem().should('is.visible')
    cartPage.cartItemName().should('have.text', Inventory.fleeceJacketName)
    cartPage.cartItemDesc().should('have.text', Inventory.fleeceJacketDesc)
    cartPage.cartItemPrice().should('have.text', Inventory.fleeceJacketPrice)
    inventoryPage.removeFromCartFleeceJacket().should('is.visible')
    //proceed and complete checkout

    cartPage.checkoutButton().click()
    cy.url().should('eq', Checkout.checkoutUrlOne)
    checkoutPage.nameInput().clear()
    checkoutPage.nameInput().type('Tester')
    checkoutPage.lastNameInput().clear()
    checkoutPage.lastNameInput().type('Testington')
    checkoutPage.postalCodeInput().clear()
    checkoutPage.postalCodeInput().type('LV1016')
    checkoutPage.continueButton().click()
    cy.url().should('eq', Checkout.checkoutUrlTwo)
    checkoutPage.finishButton().click()
    cy.url().should('eq', Checkout.checkoutUrlComplete)
    checkoutPage.completeLogo().should('is.visible')
    checkoutPage.completeHeader().should('have.text', Checkout.completeHeader)
    checkoutPage.completeBody().should('have.text', Checkout.completeBody)
    //logout and verify login page

    checkoutPage.backHomeButton().click()
    sidePanel.sidePanelButton().click()
    sidePanel.logoutButton().click()
    cy.url().should('eq', Login.baseUrl)
    loginPage.loginButton().should('is.visible')
    loginPage.loginButton().should('have.value', 'Login')
  })
})