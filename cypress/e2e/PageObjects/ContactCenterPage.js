class ContactCenterPage {
  exploreElasticSIPTrunkingBtn = '//*[text()= "Explore Elastic SIP Trunking"]';
  smsApibtn = '//*[text()= "Explore SMS API"]';
  WebRtcBtn = '//*[text()= "Explore WebRTC"]';

  SIPtrunkingBtn() {
    return cy.xpath(this.exploreElasticSIPTrunkingBtn);
  }
  smsApiButton() {
    return cy.xpath(this.smsApibtn);
  }
  webRtcButton() {
    return cy.xpath(this.WebRtcBtn);
  }
}
export default ContactCenterPage;
