import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

When(`I Log In`, () => {
  cy.get('[id="dialogAudio"] +a +a').click({ force: true });
  cy.get("body").then((body) => {
    if (body.find('[class*="tx-27OtCC"]').length > 0) {
      cy.get('[class*="tx-27OtCC"]').should("be.visible");
    } else {
      cy.get('form>div>div input[name="email"]').type("testsne13@gmail.com");
      cy.get('form>div>div input[name="password"]').type("Test1234test!");
      cy.get('button[class*="LoginForm__LoginButton"]').click();
      cy.get('[class*="tx-27OtCC"]', { timeout: 30000 }).should("be.visible");
    }
  });
});
