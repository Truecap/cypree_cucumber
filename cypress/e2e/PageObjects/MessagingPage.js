class MessagingPage {
  createFrstAccountBtn = '[class="Button_content-tx-1n4VDd"]';
  nameInpt = '[name="name"]';
  saveBtn = '[class="mr-2"]';
  createdProfile = '[class="tx-2jo5gH tx-2tY6qe tx-FwKkh"]';
  iconTrashBtn = '//*[contains(@class, "telnyx-icon-trash")]';
  attentionPopupWindow = '[class*="11kwDe"]';
  deleteBtnPopUpWindow = '[style*="flex-end;"]>button:nth-child(2)';

  createFirstAccountButton() {
    return cy.get(this.createFrstAccountBtn);
  }
  nameInput() {
    return cy.get(this.nameInpt);
  }
  saveButton() {
    return cy.get(this.saveBtn);
  }
  myCreatedProfile() {
    return cy.get(this.createdProfile);
  }
  iconTrashButton() {
    return cy.xpath(this.iconTrashBtn);
  }
  attentionWindow() {
    return cy.get(this.attentionPopupWindow);
  }
  deleteButtonPopUp() {
    return cy.get(this.deleteBtnPopUpWindow);
  }
}
export default MessagingPage;
