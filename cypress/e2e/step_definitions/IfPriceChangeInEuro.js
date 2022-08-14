import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When(`I focus on Pricing tab`, () => {
  cy.get('[class*="khahzD"]:nth-child(10)').realHover({
    position: "bottomLeft",
  });
});

And(`I click Wireless button in tab`, () => {
  cy.get('header [href="/pricing/wireless-pricing"]', {
    timeout: 5000,
  }).click();
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

Then("I select Ukraine from drop-down", () => {
  cy.xpath('//*[@class="sc-ecffda1a-4 dCDohY"][1]').scrollIntoView().click();
  cy.get('[href="/pricing/wireless-pricing/ua"]').click();
});

And(`I see price for Multi-size SIM card in USD`, () => {
  cy.xpath('//div[text() ="Multi-size SIM card"]').should("be.visible");
  cy.xpath('//div[text() ="$1.00"]').should("be.visible");
});
Then("I change the currency for Euro", () => {
  cy.xpath('//*[@class="sc-ecffda1a-4 dCDohY"][2]').scrollIntoView().click({force: true});
  cy.xpath('//div[text() ="EUR"]', { timeout: 30000 }).click({force: true});
});
And(`I see price for Multi-size SIM card in EUR`, () => {
  cy.xpath('//div[text() ="Multi-size SIM card"]').should("be.visible");
  cy.xpath('//div[text() ="€0.8500"]').should("be.visible");
});

