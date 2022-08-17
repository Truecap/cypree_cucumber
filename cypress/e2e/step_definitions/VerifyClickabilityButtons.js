import { Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import ContactCenterPage from "../PageObjects/ContactCenterPage";
import SIPTrankingPage from "../PageObjects/SIPTrankingPage";
import SmsApiPage from "../PageObjects/SmsApiPAge";
import WebRTCPage from "../PageObjects/WebRTcPage";

const webRtc = new WebRTCPage();
const smsApi = new SmsApiPage();
const sipPage = new SIPTrankingPage();
const contactCenter = new ContactCenterPage();
const home = new HomePage();

When("I focus on Solutions", () => {
  home.solutionsTab().realHover({
    position: "bottomLeft",
  });
});
Then(`I click Contact Cener button`, () => {
  home.solutionsDrpDwnContactCenerBtn({ timeout: 30000 }).click();
  cy.url().should("include", "/use-cases/contact-center");
  home.homePageButton().realHover({ position: "bottomLeft" });
});
Then("I click Explore Elastic SIP Trunking button and click back", () => {
  contactCenter.SIPtrunkingBtn().click({
    force: true,
  });
  sipPage.headerText().should("be.visible");
  cy.go("back");
  cy.url().should("include", "/use-cases/contact-center");
});
And("I click Explore SMS Api button and click back", () => {
  contactCenter.smsApiButton().click();
  smsApi.headerText().should("be.visible");
  cy.go("back");
});
And("I click Explore WebRTC button", () => {
  cy.xpath('//*[text()= "Explore WebRTC"]').click();
  webRtc.headerText().should("be.visible");
});
