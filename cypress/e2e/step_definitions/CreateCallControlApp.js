import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I Click call control button", () => {
  cy.xpath('(//ul[@class="list-unstyled"])[3]//li[5]').click();
});

Then("I click Create your first application button", () => {
  cy.xpath("(//react-call-control//button)[4]").click();
});
Then('I type "{}" to App name input', function (appName) {
  cy.get('[name="application_name"]').type(appName);
});
And('I type "{}" to url input', function (myUrl) {
  cy.get('[name="webhook_event_url"]').type(myUrl);
});
And("I press save button", () => {
  cy.get('[class="mr-2"]').click();
});
Then("I see green succesful message", () => {
  cy.get('[class="Message__MessageContainer-dAUGde iLVAjP"]').should(
    "be.visible"
  );
});
