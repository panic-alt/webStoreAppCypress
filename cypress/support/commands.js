// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("checkLogoVisibility", () => {
    // Checks visibilty of the store logo to validate the page

    cy.fixture("mainPage.json").then((locator) => {
        cy.get(locator.storeLogo).should('be.visible');
    })
})
Cypress.Commands.add('clickLogo', () => {
    // Clicks the store logo
    
    cy.fixture("mainPage.json").then((locator) => {
        cy.get(locator.storeLogo).click();
    })
})