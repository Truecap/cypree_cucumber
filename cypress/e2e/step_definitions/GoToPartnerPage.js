import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
const home = new HomePage();

When("I focus on Company tab", () => {
  home.companyTab().realHover({
    position: "bottomLeft",
  });
});
Then("I click Partners button", () => {
  home.companyDrpDwnPatnerBtn().click();
  home.homePageButton().realHover({ position: "bottomLeft" });
});
And("I see Partners page", () => {
  cy.url().should("include", "/company/partnerships");
});
