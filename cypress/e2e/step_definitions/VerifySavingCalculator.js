import { Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import SavingCalculatorPage from "../PageObjects/SavingCalculatorPage";

const savingCalculator = new SavingCalculatorPage();
const home = new HomePage();

When("I focus on Resources tab", () => {
  home.resourcesTab().realHover({
    position: "bottomLeft",
  });
});

Then(`I click Saving Calculator button`, () => {
  home.savingCalculatorButton({ timeout: 10000 }).click();
  cy.url().should("include", "/twilio-pricing-calculator");
  home.homePageButton().realHover({ position: "bottomLeft" });
});
Then(`I click Meassaging Api button`, () => {
  savingCalculator.messagingApiButton().click({ force: true });
});
And(`I click Continue button`, () => {
  savingCalculator.continueButton().click();
});
Then(`I Enter "{}" to input local number`, function (local) {
  savingCalculator.localNbrsInput().clear().type(local);
});
And(`I Enter "{}" to input toll free  number`, function (tollFree) {
  savingCalculator.tollFreeNbrsInput().clear().type(tollFree);
});
And(`I again click Continue button`, () => {
  savingCalculator.continueButton().click();
});
Then(`I see possible savings`, () => {
  savingCalculator.possibleImg().should("be.visible");
});
