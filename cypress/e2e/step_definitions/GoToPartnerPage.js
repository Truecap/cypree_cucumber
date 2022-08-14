import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I focus on Company tab", () => {
  cy.get('[class*="khahzD"]:nth-child(8)').realHover({
    position: "bottomLeft",
  });
});
Then("I click Partners button", () => {
  cy.get('[href="/company/partnerships"]').click();
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

And("I see Partners page", () => {
  cy.url().should("include", "/company/partnerships");
});
