import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import "../../support/commands";

Given('The user is in the main page', () =>{
    cy.visit('http://demo-store.seleniumacademy.com/');
    cy.checkLogoVisibility();
})

When('clicks in the account button', () => {
     cy.clickAccountButton();
})

When('clicks the Register button', () => {
    cy.clickRegisterButton();
})

When('fills the fields and clicks register', () => {
    cy.registerNewAccount();
})

Then("the welcome message should contain user's full name", () => {
    cy.checkWelcomeMessage();
})


