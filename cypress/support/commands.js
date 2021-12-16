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

// Main Page commands

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

Cypress.Commands.add('clickAccountButton', () => {
    cy.fixture('mainPage.json').then((locator) => {
        cy.get(locator.accountButton).click();
    })
})

Cypress.Commands.add('clickRegisterButton', () => {
    cy.fixture('mainPage.json').then((locator) => {
        cy.get(locator.registerButton).click();
    })
})

Cypress.Commands.add('checkWelcomeMessage',() => {
    cy.fixture('index.json').then((account) => {
        cy.fixture('mainPage.json').then((locator) => {
            cy.get(locator.welcomeMessage).should(
                'contain',
                account.name,
                account.middleName,
                account.lastName
            )
        })
    })
    
})

// Create an account commands

Cypress.Commands.add('registerNewAccount', () => {

    cy.fixture('index.json').then((account) => {
        cy.fixture('createAnAccount.json').then((locator) => {
            cy.get(locator.firstNameField).type(account.name);
            cy.get(locator.middleNameField).type(account.middleName);
            cy.get(locator.lastNameField).type(account.lastName);
            cy.get(locator.emailField).type(account.email);
            cy.get(locator.passwordField).type(account.password);
            cy.get(locator.confirmationField).type(account.password);
            cy.get(locator.newsletterCheckbox).check();
            cy.get(locator.registerButton).click();
            
        })
    })
})
