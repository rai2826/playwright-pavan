import { test, expect, Locator } from "@playwright/test";

test("Demo on Get by Alt Text", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();
});

test("Demo on Get by Role", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const Register: Locator = page.getByRole("link", { name: "Register" });
  //await expect(Register).toBeVisible();
  await Register.click();
});

test("Demo on Get by Text", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const WelcomeText: Locator = page.getByText("Welcome to our store");
  await expect(WelcomeText).toBeVisible();
});
