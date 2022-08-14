import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I focus on Resources tab", () => {
  cy.get('[class*="khahzD"]:nth-child(6)').realHover({
    position: "bottomLeft",
  });
});
Then(`I click Blog button from resources tab`, () => {
  cy.get('header .mchNoDecorate[href="/resources"]').click();
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

Then('I type "{}" to search input', function (search) {
  cy.get('[type="search"]').type(search).type("{enter}");
});

Then(`I see search result`, () => {
  cy.get('[href="/resources/telnyx-number-pool"]').should("be.visible");
});
