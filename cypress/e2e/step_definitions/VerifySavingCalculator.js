import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I focus on Resources tab", () => {
  cy.get('[class*="khahzD"]:nth-child(6)').realHover({
    position: "bottomLeft",
  });
});

Then(`I click Saving Calculator button`, () => {
  cy.xpath('//*[text() = "Savings Calculator"]', { timeout: 10000 }).click();
  cy.url().should("include", "/twilio-pricing-calculator");
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

Then(`I click Meassaging Api button`, () => {
  cy.xpath("//*[text() ='Messaging API']").click({ force: true });
});
And(`I click Continue button`, () => {
  cy.get("main div>button.hBNXWZ").click();
});
Then(`I Enter "{}" to input local number`, function (local) {
  cy.get("#local-numbers").clear().type(local);
});
And(`I Enter "{}" to input toll free  number`, function (tollFree) {
  cy.get("#toll-free-numbers").clear().type(tollFree);
});
And(`I again click Continue button`, () => {
  cy.get("main div>button.hBNXWZ").click();
});
Then(`I see possible savings`, () => {
  cy.get("[class='sc-1d1c658f-0 iHDmXz']").should("be.visible");
});
