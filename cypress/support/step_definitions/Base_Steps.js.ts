/// <reference types="cypress" />
import { When, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes before each Scenario/Test.");
    cy.clearLocalStorage();
})

Before({ tags: "@smoke"}, () => {
    cy.log("Executing Smoke Pack");
})

After(() => {
    cy.log("Executes after each Scenario/Test.");
})

When("I wait for {int} seconds", (seconds: number) => {
    cy.wait(1000 * seconds);
})