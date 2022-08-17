import { Given, When } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import HomePage from "../PageObjects/HomePage";
import LoginPage from "../PageObjects/LogInPage";

const profile = new ProfilePage();
const home = new HomePage();
const login = new LoginPage();

Given("Im on home page", () => {
  home.navigate();
});
When(`Login out if loginned in`, () => {
  home.logInButton();
  cy.get("body").then((body) => {
    if (body.find('[class*="tx-27OtCC"]', { timeout: 30000 }).length > 0) {
      profile.profileIcon().should("be.visible");
      profile.profileIcon().click();
      profile.logOutBtn().click({ timeout: 10000 });
      login.submit().should("be.visible"); 
    }
  });
});
