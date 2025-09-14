import { test, expect } from "@playwright/test";

const testcasename = "TestCase1";

test(testcasename, { tag: ["@regression"] }, async ({ page }) => {
  // Navigate to SwagLabs demo site
  await page.goto("https://www.saucedemo.com/");

  // Enter wrong username and password
  await page.fill('[data-test="username"]', "wrong_user");
  await page.fill('[data-test="password"]', "wrong_pass");

  // Click login button
  await page.click('[data-test="login-button"]');

  // Wait for error message to appear
  await expect(page.locator('[data-test="error"]')).toBeVisible();

  const timestamp = Date.now();

  // Take screenshot after login attempt
  await page.screenshot({
    path: `screenshot/${testcasename}-swaglabs-wrong-login-${timestamp}.png`,
    fullPage: true,
  });
});
test("TestCase2", { tag: ["@regression"] }, async ({ page }) => {
  // Navigate to SwagLabs demo site
  await page.goto("https://www.saucedemo.com/");

  // Enter correct username and password
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");

  // Click login button
  await page.click('[data-test="login-button"]');

  // Wait for inventory page to appear
  await expect(page.locator(".inventory_list")).toBeVisible();

  const timestamp = Date.now();

  // Take screenshot after successful login
  await page.screenshot({
    path: `screenshot/TestCase2-swaglabs-correct-login-${timestamp}.png`,
    fullPage: true,
  });
});
