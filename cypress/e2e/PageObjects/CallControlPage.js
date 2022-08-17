class CallControlPage {
  createYourApplicationBtn = "(//react-call-control//button)[4]";
  appNameInpt = '[name="application_name"]';
  urlInpt = '[name="webhook_event_url"]';
  saveBtn = '[class="mr-2"]';
  successfulMsg = '[class="Message__MessageContainer-dAUGde iLVAjP"]';
  iconTrashBtn = '//*[contains(@class, "telnyx-icon-trash")]';
  attentionPopupWindow = '[class*="11kwDe"]';
  deleteBtnPopUpWindow = '[style*="flex-end;"]>button:nth-child(2)';

  createFirstAppBtn() {
    return cy.xpath(this.createYourApplicationBtn);
  }
  appNameInput() {
    return cy.get(this.appNameInpt);
  }
  urlInput() {
    return cy.get(this.urlInpt);
  }
  saveButton() {
    return cy.get(this.saveBtn);
  }
  successfulMessage() {
    return cy.get(this.successfulMsg);
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
export default CallControlPage;
