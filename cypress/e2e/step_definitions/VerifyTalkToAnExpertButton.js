import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import TalkToAnExpertrPage from "../PageObjects/TalkToAnexpertPage";

const talkToanExpert = new TalkToAnExpertrPage();
const home = new HomePage();

When("I click Talk to us button", () => {
  home.talkToAnExpertBtn().click();
});
Then(`I fill the need form`, () => {
  talkToanExpert
    .reasonDropDown({ timeot: 30000 })
    .select("Support")
    .should("have.value", "Support");
  talkToanExpert.frstNameInput().clear().type("Test");
  talkToanExpert.lstNameInput().clear().type("Test");
  talkToanExpert.userInput().clear().type("test@gmail.com");
  talkToanExpert
    .countryNumberDrpDwn()
    .select("+380")
    .should("have.value", "+380");
  talkToanExpert.phoneNumberInput().type("977777777");
  talkToanExpert.companyWebSiteInput().type("https://test.com");
  talkToanExpert.additionalInformationInput().type("It is only test");
});
And("I click submit button", () => {
  talkToanExpert.submitButton().click();
});
Then(`I see Thanks for Reaching Out! text`, () => {
  talkToanExpert.successfulHeaderText({ timeot: 30000 }).should("be.visible");
});
