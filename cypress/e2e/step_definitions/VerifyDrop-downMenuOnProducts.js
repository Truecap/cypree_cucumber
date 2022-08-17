import { When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";

const home = new HomePage();

When(`I focus on Products`, () => {
  home.productsTab().realHover({ position: "bottomLeft" });
});
Then("I see eight elements from products tab", () => {
  home.elementsProductsDrpDwnOpen().should("be.visible");
});
