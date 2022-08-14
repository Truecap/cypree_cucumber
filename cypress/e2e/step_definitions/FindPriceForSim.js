import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When(`I focus on Pricing`, () => {
  cy.get('[class*="khahzD"]:nth-child(10)').realHover({
    position: "bottomLeft",
  });
});

And(`I click Wireless button`, () => {
  cy.get('header [href="/pricing/wireless-pricing"]').click();
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

Then("I select Ukraine", () => {
  cy.xpath('//*[@class="sc-ecffda1a-4 dCDohY"][1]').click();
  cy.get('[href="/pricing/wireless-pricing/ua"]').click();
});

And(`I see price for Multi-size SIM card`, () => {
  cy.xpath('//div[text() ="Multi-size SIM card"]').should("be.visible");
  cy.xpath('//div[text() ="$1.00"]').should("be.visible");
});
