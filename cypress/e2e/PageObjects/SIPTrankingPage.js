class SIPTrankingPage {
  header = '//*[text() = "SIP Trunking for "]';

  headerText() {
    return cy.xpath(this.header);
  }
}
export default SIPTrankingPage;
