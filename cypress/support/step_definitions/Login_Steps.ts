/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { SinonSpy } from "cypress/types/sinon";

let stub: Cypress.SinonSpyAgent<SinonSpy<any[], any>> | ((text: string) => void);

When(`I type a username {}`, (username) => {
    if (typeof username === "string") {
        cy.get('#text').type(username);
    }
})

When(`I type a password {}`, (password) => {
    if (typeof password === "string") {
        cy.get('#password').type(password);
    }
})

When(`I click on the login button`, () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})

Then('I should be presented with an alert box which contains text {string}', (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})