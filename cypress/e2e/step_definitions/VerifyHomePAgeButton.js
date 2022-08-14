import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I scroll to buttom page and click About us button`, () => {
  cy.scrollTo("bottom");
  cy.get('[href="/company/about"]').click();
  cy.get('[class*="htgUhI"]').should("be.visible");
});

Then("I click Home Page button", () => {
  cy.get('[id*="Logo"]').click();
});

Then(`I see Home Page`, () => {
  cy.get('[class="sc-62badcbb-1 kNFjZ"]', { timeout: 10000 }).should(
    "be.visible"
  );
});
