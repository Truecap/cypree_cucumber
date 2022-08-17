import { Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import AboutUsPage from "../PageObjects/AboutUsPage";

const aboutUs = new AboutUsPage();
const home = new HomePage();

Then(`I scroll to buttom page and click About us button`, () => {
  cy.scrollTo("bottom");
  home.footerAboutUsButton().click();
  aboutUs.headerText().should("be.visible");
});
Then("I click Home Page button", () => {
  home.homePageButton().click();
});
Then(`I see Home Page`, () => {
  home.homePicture({ timeout: 10000 }).should("be.visible");
});
