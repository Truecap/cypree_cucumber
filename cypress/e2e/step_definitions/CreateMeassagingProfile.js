import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I Click Measaging button", () => {
  cy.xpath('(//ul[@class="list-unstyled"])[3]//li[3]').click();
});

Then("I click Create your first account button", () => {
  cy.get('[class="Button_content-tx-1n4VDd"]').click();
});
Then('I enter "{}" to input field Profile Name', function (name) {
  cy.get('[name="name"]').type(name);
});
And("I click Save button", () => {
  cy.get('[class="mr-2"]').click();
});
Then("I see my created profile", () => {
  cy.get('[class="tx-2jo5gH tx-2tY6qe tx-FwKkh"]').should("be.visible");
});
