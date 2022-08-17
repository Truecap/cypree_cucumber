class SmsApiPage {
  header = '//h1//span[text() = "SMS API"]';

  headerText() {
    return cy.xpath(this.header);
  }
}
export default SmsApiPage;
