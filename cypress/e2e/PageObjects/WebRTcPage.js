class WebRTCPage {
  header = '//*[text() = "WebRTC for real-time, contextual communications"]';

  headerText() {
    return cy.xpath(this.header);
  }
}
export default WebRTCPage;
