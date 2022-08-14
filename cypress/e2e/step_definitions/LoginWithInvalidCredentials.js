import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When(`I click on Log In button`, () => {
  cy.get('[id="dialogAudio"] +a +a').click({ force: true });
});

Then(
  'I type invalid email "{}", and password "{}"',
  function (email, password) {
    cy.get('form>div>div input[name="email"]').type(email);
    cy.get('form>div>div input[name="password"]').type(password);
  }
);

And(`I click on LogIn button`, () => {
  cy.get('button[class*="LoginForm__LoginButton"]').click();
});
Then(`I see error message`, () => {
  cy.get('[class*="ilxvtf"]', { timeout: 10000 }).should("be.visible");
});
