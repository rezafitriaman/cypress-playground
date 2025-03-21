/// <reference types="cypress" />

class Base_PO {
    navigate(path: any) {
        cy.fixture("global-config.json").then((data) => {
            cy.visit(data.baseUrl + path)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default Base_PO;