class StoragePage {
  joinTheWailistBtn = '(//*[@href="#form"])[1]';
  firstNameInput = "#FirstName";
  lastNameInput = "#LastName";
  emailInput = "#Email";
  applybtn = '[type="submit"]';
  successfulText = '[class="sc-31a8cefb-6 eCGKsC"]';

  joinWaitListButton() {
    return cy.xpath(this.joinTheWailistBtn);
  }
  frstNameInput() {
    return cy.get(this.firstNameInput);
  }
  lstNameInput() {
    return cy.get(this.lastNameInput);
  }
  userInput() {
    return cy.get(this.emailInput);
  }
  applyButton() {
    return cy.get(this.applybtn);
  }
  youreOnTheWaitlistText() {
    return cy.get(this.successfulText);
  }
}
export default StoragePage;
