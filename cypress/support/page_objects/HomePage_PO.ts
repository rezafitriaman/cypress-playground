/// <reference types="cypress" />

import Base_PO from "./Base_PO";
const SELECTORS = {
    CONTACT_US: '#contact-us',
    LOGIN_PORTAL: '#login-portal',
};
class Homepage_PO extends Base_PO {
    navigateToHomepage() {
        super.navigate("");
    }

    clickOn_ContactUs_Button() {
        cy.clickAndOpenLink_InSameTab(SELECTORS.CONTACT_US);
    }

    clickOn_Login_Button() {
        cy.clickAndOpenLink_InSameTab(SELECTORS.LOGIN_PORTAL);
    }
}
export default Homepage_PO;