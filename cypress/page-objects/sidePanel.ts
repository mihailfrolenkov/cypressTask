import Login from "./login";

class SidePanel {


    sidePanelButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[id="react-burger-menu-btn"]');
    
    }

    logoutButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a[id="logout_sidebar_link"]');
    
    }

}

export default SidePanel;