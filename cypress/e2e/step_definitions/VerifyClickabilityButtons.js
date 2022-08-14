import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I focus on Solutions", () => {
  cy.get('[class*="khahzD"]:nth-child(3)').realHover({
    position: "bottomLeft",
  });
});
Then(`I click Contact Cener button`, () => {
  cy.xpath('//*[text() = "Contact Center"]', { timeout: 30000 }).click();
  cy.url().should("include", "/use-cases/contact-center");
  cy.get('[id*="Logo"]').realHover({ position: "bottomLeft" });
});

Then("I click Explore Elastic SIP Trunking button and click back", () => {
  cy.get('[class="sc-3e56386e-3 epRMTm"]');
  cy.xpath('//*[text()= "Explore Elastic SIP Trunking"]').click({
    force: true,
  });
  cy.get("span strong em").should("be.visible");
  cy.go("back");
  cy.url().should("include", "/use-cases/contact-center");
});

And("I click Explore SMS Api button and click back", () => {
  cy.xpath('//*[text()= "Explore SMS API"]').click();
  cy.xpath('(//*[text()="SMS API"])[3]').should("be.visible");
  cy.go("back");
});

And("I click Explore WebRTC button", () => {
  cy.xpath('//*[text()= "Explore WebRTC"]').click();
  cy.get("h1 span").should("be.visible");
});
