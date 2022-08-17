class ProfilePage {
  profieIconButton = '[class*="tx-27OtCC"]';
  logOutButton = '[class="tx-1Iv0kw"]';
  callControlBtn = '(//ul[@class="list-unstyled"])[3]//li[5]';
  messagingBtn = '(//ul[@class="list-unstyled"])[3]//li[3]';
  numbersBtn = '(//*[text()= "Numbers"])[2]';

  profileIcon() {
    return cy.get(this.profieIconButton);
  }
  logOutBtn() {
    return cy.get(this.logOutButton);
  }
  callControllButton() {
    return cy.xpath(this.callControlBtn);
  }
  messagingButton() {
    return cy.xpath(this.messagingBtn);
  }
  numbersButton() {
    return cy.xpath(this.numbersBtn);
  }
}
export default ProfilePage;
