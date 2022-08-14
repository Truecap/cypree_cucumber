import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When("I click Talk to us button", () => {
  cy.get('header ul>li [href="/contact-us"]').click();
});
Then(`I fill the form`, () => {
  cy.get('[id="Reason_for_Contact__c"]', { timeot: 30000 })
    .select("Support")
    .should("have.value", "Support");
  cy.get("#FirstName").type("Test");
  cy.get("#LastName").type("Test");
  cy.get("#Email").type("test@gmail.com");
  cy.get("#Phone_Number_Extension__c")
    .select("+380")
    .should("have.value", "+380");
  cy.get("#Phone_Number_Base__c").type("977777777");
  cy.get("#Website").type("https://test.com");
  cy.get("#Form_Additional_Information__c").type("It is only test");
});

And("I click submit button", () => {
  cy.get('[type="submit"]').click();
});

Then(`I see Thanks for Reaching Out! text`, () => {
  cy.get('[class$="cgMQXX"]', { timeot: 30000 }).should("be.visible");
});
