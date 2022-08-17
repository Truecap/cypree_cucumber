import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import MessagingPage from "../PageObjects/MessagingPage";

const messaging = new MessagingPage();
const profile = new ProfilePage();

When("I Click Measaging button", () => {
  profile.messagingButton().click();
});
Then("I Click icon trash button", () => {
  messaging.iconTrashButton().click();
  messaging.attentionWindow().should("be.visible");
});
And("I click delete button on pop-up window", () => {
  messaging.deleteButtonPopUp().click();
});
Then("I see create your first profile button", () => {
  messaging.createFirstAccountButton().should("be.visible");
});
