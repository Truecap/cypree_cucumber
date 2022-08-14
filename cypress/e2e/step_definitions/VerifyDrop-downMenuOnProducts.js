import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(`I focus on Products`, () => {
  cy.get('[class*="khahzD"]:first-child').realHover({ position: "bottomLeft" });
});
Then("I see eight elements from products tab", () => {
  cy.get('header .mchNoDecorate[href*="/products/"]').should("be.visible");
});
