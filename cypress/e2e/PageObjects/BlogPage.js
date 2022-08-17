class BlogPage {
  srchhIpnut = '[type="search"]';
  nmbrPoolResults = '[href="/resources/telnyx-number-pool"]';

  searchInput() {
    return cy.get(this.srchhIpnut);
  }
  numberPoolResults() {
    return cy.get(this.nmbrPoolResults);
  }
}
export default BlogPage;
