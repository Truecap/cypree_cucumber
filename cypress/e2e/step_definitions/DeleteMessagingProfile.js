import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I Click Measaging button", () => {
  cy.xpath('(//ul[@class="list-unstyled"])[3]//li[3]').click();
});

Then("I Click icon trash button", () => {
  cy.xpath('//*[contains(@class, "telnyx-icon-trash")]').click();
  cy.get('[class*="11kwDe"]').should("be.visible");
});
And("I click delete button on pop-up window", () => {
  cy.get('[style*="flex-end;"]>button:nth-child(2)').click();
});
Then("I see create your first profile button", () => {
  cy.get('[class="Button_content-tx-1n4VDd"]').should("be.visible");
});
