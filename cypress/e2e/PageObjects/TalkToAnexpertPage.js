class TalkToAnExpertrPage {
  reasonDrpDwnForm = '[id="Reason_for_Contact__c"]';
  firstNameInput = "#FirstName";
  lastNameInput = "#LastName";
  emailInput = "#Email";
  countryNbrDrpDwn = "#Phone_Number_Extension__c";
  phoneNbrInput = "#Phone_Number_Base__c";
  webSiteInput = "#Website";
  additionalInfoInput = "#Form_Additional_Information__c";
  submitBtn = '[type="submit"]';
  successfulHeader = '[class$="cgMQXX"]';

  reasonDropDown() {
    return cy.get(this.reasonDrpDwnForm);
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
  countryNumberDrpDwn() {
    return cy.get(this.countryNbrDrpDwn);
  }
  phoneNumberInput() {
    return cy.get(this.phoneNbrInput);
  }
  companyWebSiteInput() {
    return cy.get(this.webSiteInput);
  }
  additionalInformationInput() {
    return cy.get(this.additionalInfoInput);
  }
  submitButton() {
    return cy.get(this.submitBtn);
  }
  successfulHeaderText() {
    return cy.get(this.successfulHeader);
  }
}
export default TalkToAnExpertrPage;
