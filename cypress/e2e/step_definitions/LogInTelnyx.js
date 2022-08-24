import { When } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import HomePage from "../PageObjects/HomePage";
import LoginPage from "../PageObjects/LogInPage";

const profile = new ProfilePage();
const home = new HomePage();
const login = new LoginPage();

Given("Im on home page", () => {
  home.navigate();
});
When(`I Log In if needed`, () => {
  home.logInButton();
  cy.get("body").then((body) => {
    if (body.find('[class*="tx-27OtCC"]', {timeout: 30000}).length > 0) {
      profile.profileIcon().should("be.visible");
    } else {
      login.enterEmail().clear().type("testsne13@gmail.com");
      login.enterPassword().clear().type("Test1234test!");
      login.submit().trigger('mouseover').dblclick({force: true});
      cy.get('[class*="tx-27OtCC"]', { timeout: 30000 }).should("be.visible");
    }
  });
});
 