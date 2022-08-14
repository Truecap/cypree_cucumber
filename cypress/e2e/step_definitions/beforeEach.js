beforeEach(() => {
  cy.viewport(1920, 1080);
  cy.visit("https://telnyx.com");
  cy.get("body").then((body) => {
    if (body.find('[aria-label="close and deny"]~div>div>button').length > 0) {
      cy.get('[aria-label="close and deny"]~div>div>button').click();
    }
  });
});
