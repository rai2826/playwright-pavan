import { test } from "@playwright/test";
import { HomePage, SearchResultsPage } from "../pages/automationPractice.page";

test("Search for T-shirts and verify product", async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  // Step 1: Navigate to the site
  await home.goto();

  // Step 2: Search for 'T-shirts'
  await home.searchFor("T-shirts");

  // Step 3: Verify the product is in the list
  await results.expectProductVisible("Faded Short Sleeve T-shirts");
});
