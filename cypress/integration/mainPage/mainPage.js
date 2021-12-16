import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import "../../support/commands";

Given('the user visits the main page', () => {
    cy.visit('http://demo-store.seleniumacademy.com/');
})
Then('the store logo should be displayed', () => {
    cy.checkLogoVisibility();
})