import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole("textbox", { name: "Search" });
  }

  async goto() {
    await this.page.goto("http://www.automationpractice.pl/index.php");
  }

  async searchFor(text: string) {
    await this.searchBox.fill(text);
    await this.searchBox.press("Enter");
  }
}

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productLink(productName: string) {
    return this.page.locator("#center_column a.product-name", {
      hasText: productName,
    });
  }

  async expectProductVisible(productName: string) {
    await expect(this.productLink(productName)).toBeVisible();
  }
}
