import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import WirelessPage from "../PageObjects/WirelesPage";

const home = new HomePage();
const wireless = new WirelessPage();

When(`I focus on Pricing`, () => {
  home.pricingTab().realHover({
    position: "bottomLeft",
  });
});
And(`I click Wireless button`, () => {
  home.pricingDrpDwnWirelessBtn().click();
  home.homePageButton().realHover({ position: "bottomLeft" });
});
Then("I select Ukraine", () => {
  wireless.countryDropDown().click();
  wireless.ukraine().click();
});
And(`I see price for Multi-size SIM card`, () => {
  wireless.multiSizeSimName().should("be.visible");
  wireless.priceInUsd().should("be.visible");
});
