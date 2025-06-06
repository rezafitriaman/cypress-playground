/// <reference types="cypress" />
import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import HomePage_PO from "../page_objects/HomePage_PO";

//const basePage = new Base_PO();
const homePage = new HomePage_PO();

Before(() => {
    cy.log("Executing commands inside Homepage Steps");
})

Given(`I navigate to the webdriveruniversity homepage`, () => {
    //cy.visit(url);
    //basePage.navigate("");
    homePage.navigate("");
})

When(`I click on the contact us button`, () => {
    //cy.get("#contact-us").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#contact-us");
    homePage.clickOn_ContactUs_Button();
})

When(`I click on the login portal button`, () => {
    //cy.get("#login-portal").invoke("removeAttr", "target").click();
    //cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOn_Login_Button();
})