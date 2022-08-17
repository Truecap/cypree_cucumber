import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import StoragePage from "../PageObjects/StoragePage";

const storage = new StoragePage();
const home = new HomePage();

When(`I focus on Products tab`, () => {
  home.productsTab().realHover({ position: "bottomLeft" });
});
And(`I click Storage button`, () => {
  home.productsDrpDwnStorageBtn().click();
  home.homePageButton().realHover({ position: "bottomLeft" });
});
And(`I click Join the waitlist button`, () => {
  storage.joinWaitListButton().click();
});
Then("I fill the form", () => {
  storage.frstNameInput({ timeout: 10000 }).type("Test");
  storage.lstNameInput().type("Test");
  storage.userInput().type("test@gmail.con");
});
And(`I click Apply now button`, () => {
  storage.applyButton().click();
});
Then("I see: You're on the waitlist! text", () => {
  storage.youreOnTheWaitlistText().should("be.visible");
});
