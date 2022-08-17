import { Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import BlogPage from "../PageObjects/BlogPage";

const blog = new BlogPage();
const home = new HomePage();

When("I focus on Resources tab", () => {
  home.resourcesTab().realHover({
    position: "bottomLeft",
  });
});
Then(`I click Blog button from resources tab`, () => {
  home.resourcesDrpDwnBlogBtn().click();
  home.homePageButton().realHover({ position: "bottomLeft" });
});
Then('I type "{}" to search input', function (search) {
  blog.searchInput().clear().type(search).type("{enter}");
});
Then(`I see search result`, () => {
  blog.numberPoolResults().should("be.visible");
});
