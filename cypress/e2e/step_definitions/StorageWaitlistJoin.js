import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When(`I focus on Products tab`, () => {
  cy.get('[class*="khahzD"]:first-child').realHover({ position: "bottomLeft" });
});

And(`I click Storage button`, () => {
  cy.xpath('(//*[text()="Storage"])[1]', { timeout: 5000 }).click();
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

And(`I click Join the waitlist button`, () => {
  cy.xpath('(//*[@href="#form"])[1]').click();
});

Then("I fill the form", () => {
  cy.get("#FirstName").type("Test");
  cy.get("#LastName").type("Test");
  cy.get("#Email").type("test@gmail.con");
});
And(`I click Apply now button`, () => {
  cy.get('[type="submit"]').click();
});
Then("I see: You're on the waitlist! text", () => {
  cy.get('[class="sc-a7a16c36-6 bZeRhp"]').should("be.visible");
});
