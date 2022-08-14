import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I Click Numbers button", () => {
  cy.xpath('(//*[text()= "Numbers"])[2]').click();
});

Then("I Click Hosted SMS button", () => {
  cy.get('[href="#/app/numbers/hosted-sms"]').click();
});
And("I Click Create new order button", () => {
  cy.get('[class*="kgCFcR"]').click();
});
Then("I enter '{}' to order data input", function (number) {
  cy.get('[name="numbers"]').type(number);
});
And("I select my messaging profile", () => {
  cy.get('[class=" css-o8iqki"]').click();
  cy.xpath('//*[text()= "test"]').click();
});
And("I click Create Order button", () => {
  cy.xpath('//*[text()= "Create Order"]').click();
});
Then("I see error message Hosted Sms", () => {
  cy.get('[class="Message__MessageContainer-dAUGde ebWDHB"]').should(
    "be.visible"
  );
});
