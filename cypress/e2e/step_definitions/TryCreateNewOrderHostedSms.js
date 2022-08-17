import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import ProfilePage from "../PageObjects/ProfilePage";
import NumbersPage from "../PageObjects/NumbersPage";

const numbers = new NumbersPage();
const profile = new ProfilePage();

When("I Click Numbers button", () => {
  profile.numbersButton().click();
});
Then("I Click Hosted SMS button", () => {
  numbers.hostedSmsTab().click();
});
And("I Click Create new order button", () => {
  numbers.hostedSmsTabNewOrderButton().click();
});
Then("I enter '{}' to order data input", function (number) {
  numbers.hostedSmsTabOrderDataInput().clear().type(number);
});
And("I select my messaging profile", () => {
  numbers.hostedSmsTabMessagingProfileSelect().click();
  numbers.messagingProfile().click();
});
And("I click Create Order button", () => {
  numbers.createOrderButton().click();
});
Then("I see error message Hosted Sms", () => {
  numbers.errorMessagePhoneNumber().should("be.visible");
});
