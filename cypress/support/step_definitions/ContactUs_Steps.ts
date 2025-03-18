/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I type a first name', () => {
    cy.get('[name="first_name"]').type("Joe");
})

When('I type a last name', () => {
    cy.get('[name="last_name"]').type("Blogs");
})

When('I enter an email address', () => {
    cy.get('[name="email"]').type("joe_blogs123@mail.com")
})

When('I type a comment', () => {
    cy.get('textarea[name="message"]').type("Hello world!");
})

When('I click on the submit button', () => {
    cy.get('[type="submit"]').click();
})

Then('I should be presented with a successful contact us submission message', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then('I should be presented with a unsuccessful contact us submission message', () => {
    cy.get('body').contains('Error: Invalid email address');
})

When('I type a specific first name {string}', (firstName) => {
    if (typeof firstName === "string") {
        cy.get('[name="first_name"]').type(firstName);
    }
})

When('I type a specific last name {string}', (lastName) => {
    if (typeof lastName === "string") {
        cy.get('[name="last_name"]').type(lastName);
    }
})

When('I type a specific email address {string}', (email) => {
    if (typeof email === "string") {
        cy.get('[name="email"]').type(email);
    }
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    cy.get('textarea[name="message"]').type(word + " " + number);
})

When('I type a first name {word} and a last name {string}', (firstName, lastName) => {
    if (typeof firstName === "string") {
        cy.get('[name="first_name"]').type(firstName);
    }
    if (typeof lastName === "string") {
        cy.get('[name="last_name"]').type(lastName);
    }
})

When('I type a {string} and a comment {string}', (email, comment) => {
    if (typeof email === "string") {
        cy.get('[name="email"]').type(email);
    }
    if (typeof comment === "string") {
        cy.get('textarea[name="message"]').type(comment);
    }
})

Then('I should be presented with header text {string}', (message) => {

})
