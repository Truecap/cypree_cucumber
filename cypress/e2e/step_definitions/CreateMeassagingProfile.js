import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import MessagingPage from "../PageObjects/MessagingPage";

const messaging = new MessagingPage();
const profile = new ProfilePage();

When("I Click Measaging button", () => {
  profile.messagingButton().click();
});
Then("I click Create your first account button", () => {
  messaging.createFirstAccountButton().click();
});
Then('I enter "{}" to input field Profile Name', function (name) {
  messaging.nameInput().clear().type(name);
});
And("I click Save button", () => {
  messaging.saveButton().click();
});
Then("I see my created profile", () => {
  messaging.myCreatedProfile().should("be.visible");
});
