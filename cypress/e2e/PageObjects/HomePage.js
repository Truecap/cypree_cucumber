class HomePage {
  logInBtn = '[id="dialogAudio"] +a +a';
  companyTabBtn = '[class*="khahzD"]:nth-child(8)';
  cookieAcceptBtn = '[aria-label="close and deny"]~div>div>button';
  partnerBtnCompanyDrpDwn = '[href="/company/partnerships"]';
  homePageBtn = '[id*="Logo"]';
  pricingTabBtn = '[class*="khahzD"]:nth-child(10)';
  wirelessBtnPricingDrpDwn = 'header [href="/pricing/wireless-pricing"]';
  productsTabBtn = '[class*="khahzD"]:first-child';
  storageBtnProductsDrpDwn = '(//*[text()="Storage"])[1]';
  solutionsTabBtn = '[class*="khahzD"]:nth-child(3)';
  contactCenerBtnSolutionsDrpDwn = '//*[text() = "Contact Center"]';
  eightElementsProductsDrpDwn = 'header .mchNoDecorate[href*="/products/"]';
  footerAboutUsBtn = '[href="/company/about"]';
  homePagePctr = '[class="sc-62badcbb-1 kNFjZ"]';
  resourcesTabBtn = '[class*="khahzD"]:nth-child(6)';
  blogBtnResorcesDrpDwn = 'header .mchNoDecorate[href="/resources"]';
  savingCalculatorBtnResourcesDrpDwn = '//*[text() = "Savings Calculator"]';
  expertBtn = 'header ul>li [href="/contact-us"]';

  navigate() {
    cy.visit("https://telnyx.com");
  }
  logInButton() {
    return cy.get(this.logInBtn).click();
  }
  cookieAcceptButton() {
    cy.get("body").then((body) => {
      if (
        body.find('[aria-label="close and deny"]~div>div>button', {timeout: 30000}).length > 0
      ) {
        cy.get('[aria-label="close and deny"]~div>div>button').click({
          timeout: 10000,
        });
      }
    });
  }
  companyTab() {
    return cy.get(this.companyTabBtn);
  }
  companyDrpDwnPatnerBtn() {
    return cy.get(this.partnerBtnCompanyDrpDwn);
  }
  pricingTab() {
    return cy.get(this.pricingTabBtn);
  }
  pricingDrpDwnWirelessBtn() {
    return cy.get(this.wirelessBtnPricingDrpDwn);
  }
  productsTab() {
    return cy.get(this.productsTabBtn);
  }
  productsDrpDwnStorageBtn() {
    return cy.xpath(this.storageBtnProductsDrpDwn);
  }
  elementsProductsDrpDwnOpen() {
    return cy.get(this.eightElementsProductsDrpDwn);
  }
  solutionsTab() {
    return cy.get(this.solutionsTabBtn);
  }
  solutionsDrpDwnContactCenerBtn() {
    return cy.xpath(this.contactCenerBtnSolutionsDrpDwn);
  }
  resourcesTab() {
    return cy.get(this.resourcesTabBtn);
  }
  resourcesDrpDwnBlogBtn() {
    return cy.get(this.blogBtnResorcesDrpDwn);
  }
  savingCalculatorButton() {
    return cy.xpath(this.savingCalculatorBtnResourcesDrpDwn);
  }
  talkToAnExpertBtn() {
    return cy.get(this.expertBtn);
  }
  homePageButton() {
    return cy.get(this.homePageBtn);
  }
  homePicture() {
    return cy.get(this.homePagePctr);
  }
  footerAboutUsButton() {
    return cy.get(this.footerAboutUsBtn);
  }
}
export default HomePage;
