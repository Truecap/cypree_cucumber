import HomePage from "../PageObjects/HomePage";
const home = new HomePage();

beforeEach(() => {
  cy.viewport(1920, 1080);
  home.navigate();
  home.cookieAcceptButton();
});
