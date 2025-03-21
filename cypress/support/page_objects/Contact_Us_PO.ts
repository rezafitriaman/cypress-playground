/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO{
    elements = {
        comment_TextField : () => cy.get('textarea[name="message"]'),
        submit_Button : () => cy.get('[type="submit"]'),
    }

    navigateTo_ContactUs_Page() {
        super.navigate("/Contact-Us/contactus.html");
    }

    type_FirstName(firstName: unknown) {
        if (typeof firstName === "string") {
            cy.get('[name="first_name"]').type(firstName);
        }
    }

    type_LastName(lastName: unknown) {
        if (typeof lastName === "string") {
            cy.get('[name="last_name"]').type(lastName);
        }
    }

    type_EmailAddress(email: unknown) {
        if (typeof email === "string") {
            cy.get('[name="email"]').type(email);
        }
    }

    type_Comment(comment: unknown) {
        if (typeof comment === "string") {
            this.elements.comment_TextField().type(comment);
        }
    }

    clickOn_Submit_Button() {
        this.elements.submit_Button().click();
    }

    validate_Submission_Header(expectedText: unknown) {
        cy.get('h1, body').should(($elements) => {
            // Use jQuery's :contains selector to check for the message
            const found = $elements.filter(`:contains('${expectedText}')`).length > 0;
            expect(found).to.be.true;
        });
    }
}
export default Contact_Us_PO;