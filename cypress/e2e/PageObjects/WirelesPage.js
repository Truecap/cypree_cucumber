class WirelessPage {
  countryDrpDwn = '//*[@class="sc-ecffda1a-4 dCDohY"][1]';
  ukraineFromDrpDwn = '[href="/pricing/wireless-pricing/ua"]';
  multiSizeSim = '//div[text() ="Multi-size SIM card"]';
  priceUsd = '//div[text() ="$1.00"]';
  currencyDrpDwn = '//*[@class="sc-ecffda1a-4 dCDohY"][2]';
  euroFromDrpDwnCurrency = '//div[text() ="EUR"]';
  priceEuro = '//div[text() ="€0.8500"]';

  countryDropDown() {
    return cy.xpath(this.countryDrpDwn);
  }
  ukraine() {
    return cy.get(this.ukraineFromDrpDwn);
  }
  multiSizeSimName() {
    return cy.xpath(this.multiSizeSim);
  }
  priceInUsd() {
    return cy.xpath(this.priceUsd);
  }
  currencyDropDown() {
    return cy.xpath(this.currencyDrpDwn);
  }
  euro() {
    return cy.xpath(this.euroFromDrpDwnCurrency);
  }
  priceInEuro() {
    return cy.xpath(this.priceEuro);
  }
}
export default WirelessPage;
