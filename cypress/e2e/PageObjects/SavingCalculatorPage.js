class SavingCalculatorPage {
  messagingApiBtn = "//*[text() ='Messaging API']";
  continueBtn = "main div>button.hBNXWZ";
  localNumbersInput = "#local-numbers";
  tollFreeNumbersInput = "#toll-free-numbers";
  possibleSavingsImg = "[class='sc-1d1c658f-0 iHDmXz']";

  messagingApiButton() {
    return cy.xpath(this.messagingApiBtn);
  }
  continueButton() {
    return cy.get(this.continueBtn);
  }
  localNbrsInput() {
    return cy.get(this.localNumbersInput);
  }
  tollFreeNbrsInput() {
    return cy.get(this.tollFreeNumbersInput);
  }
  possibleImg() {
    return cy.get(this.possibleSavingsImg);
  }
}
export default SavingCalculatorPage;
