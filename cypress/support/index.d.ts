declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Clicks an element (typically a link) and opens it in the same tab by removing the `target` attribute.
         * @param selector - The selector for the element to click.
         * @example
         * cy.clickAndOpenLink_InSameTab('#contact-us');
         */
        clickAndOpenLink_InSameTab(selector: string): Chainable<Subject>;
    }
}