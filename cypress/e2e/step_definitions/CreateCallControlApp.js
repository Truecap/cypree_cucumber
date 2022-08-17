import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import CallControlPage from "../PageObjects/CallControlPage";

const callControl = new CallControlPage();
const profile = new ProfilePage();

When("I Click call control button", () => {
  profile.callControllButton().click();
});
Then("I click Create your first application button", () => {
  callControl.createFirstAppBtn().click();
});
Then('I type "{}" to App name input', function (appName) {
  callControl.appNameInput().clear().type(appName);
});
And('I type "{}" to url input', function (myUrl) {
  callControl.urlInput().clear().type(myUrl);
});
And("I press save button", () => {
  callControl.saveButton().click();
});
Then("I see green succesful message", () => {
  callControl.successfulMessage().should("be.visible");
});
