import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import CallControlPage from "../PageObjects/CallControlPage";

const callControl = new CallControlPage();
const profile = new ProfilePage();

When("I Click call control button", () => {
  profile.callControllButton().click();
});
And("I click icon trash button on call control page", () => {
  callControl.iconTrashButton().click();
});
Then('I see attention pop-up window',  () => {
  callControl.attentionWindow().should("be.visible");
});
And('I click delete button on popup window',  () => {
  callControl.deleteButtonPopUp().click();
});
Then("I see Create your first Call Control App again", () => {
  callControl.createFirstAppBtn().should("be.visible");
});
