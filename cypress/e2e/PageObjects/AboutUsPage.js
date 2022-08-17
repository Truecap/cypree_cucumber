class AboutUsPage {
  header = '[class*="clUAcO"]';

  headerText() {
    return cy.get(this.header);
  }
}
export default AboutUsPage;
