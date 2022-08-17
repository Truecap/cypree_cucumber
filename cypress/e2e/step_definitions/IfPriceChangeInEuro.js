import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import WirelessPage from "../PageObjects/WirelesPage";

const home = new HomePage();
const wireless = new WirelessPage();

When(`I focus on Pricing tab`, () => {
  home.pricingTab().realHover({
    position: "bottomLeft",
  });
});
And(`I click Wireless button in tab`, () => {
  home.pricingDrpDwnWirelessBtn().click();
  home.homePageButton().realHover({ position: "bottomLeft" });
});
Then("I select Ukraine from drop-down", () => {
  wireless.countryDropDown().click();
  wireless.ukraine().click();
});
And(`I see price for Multi-size SIM card in USD`, () => {
  wireless.multiSizeSimName().should("be.visible");
  wireless.priceInUsd().should("be.visible");
});
Then("I change the currency for Euro", () => {
  wireless.countryDropDown().scrollIntoView().click({ force: true });
  wireless.euro().click({ force: true });
});
And(`I see price for Multi-size SIM card in EUR`, () => {
  wireless.multiSizeSimName().should("be.visible");
  wireless.priceInEuro().should("be.visible");
});
