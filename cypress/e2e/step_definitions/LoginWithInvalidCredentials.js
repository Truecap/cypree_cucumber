import { Then, When, And, Given } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import LoginPage from "../PageObjects/LogInPage";

const login = new LoginPage();
const home = new HomePage();

Given("Im on home page", () => {
  home.navigate();
});
When(`I click on Log In button`, () => {
  home.logInButton();
});
Then('I type email "{}", and password "{}"', function (username, pswd) {
  login.enterEmail().clear().type(username);
  login.enterPassword().clear().type(pswd);
});
And(`I click on LogIn button`, () => {
  login.submit().click();
});
Then(`I see error message`, () => {
  cy.get('[class*="ilxvtf"]', { timeout: 10000 }).should("be.visible");
});
