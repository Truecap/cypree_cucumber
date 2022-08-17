class NumbersPage {
  hostedSmsTabBtn = '[href="#/app/numbers/hosted-sms"]';
  hostedSmsTabNewOrderBtn = '[class*="kgCFcR"]';
  hostedSmsTabOrderDataInp = '[name="numbers"]';
  hostedSmsTabMessagingProfileInp = '[class=" css-o8iqki"]';
  myCreatedMessagingProfileName = '//*[text()= "test"]';
  createOrderBtn = '//*[text()= "Create Order"]';
  errorMessage = '[class="Message__MessageContainer-dAUGde ebWDHB"]';

  hostedSmsTab() {
    return cy.get(this.hostedSmsTabBtn);
  }
  hostedSmsTabNewOrderButton() {
    return cy.get(this.hostedSmsTabNewOrderBtn);
  }
  hostedSmsTabOrderDataInput() {
    return cy.get(this.hostedSmsTabOrderDataInp);
  }
  hostedSmsTabMessagingProfileSelect() {
    return cy.get(this.hostedSmsTabMessagingProfileInp);
  }
  messagingProfile() {
    return cy.xpath(this.myCreatedMessagingProfileName);
  }
  createOrderButton() {
    return cy.xpath(this.createOrderBtn);
  }
  errorMessagePhoneNumber() {
    return cy.get(this.errorMessage);
  }
}
export default NumbersPage;
