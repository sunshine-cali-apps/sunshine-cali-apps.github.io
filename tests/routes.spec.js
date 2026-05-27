const { test, expect } = require("playwright/test");

test("homepage links to recent-fit routes", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "RecentFit" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open App Page" }),
  ).toHaveAttribute("href", "/recent-fit/");
  await expect(
    page.getByRole("link", { name: "Privacy Policy" }).first(),
  ).toHaveAttribute("href", "/recent-fit/privacy-policy/");
  await expect(
    page.getByRole("link", { name: "Support" }).first(),
  ).toHaveAttribute("href", "/recent-fit/support/");
});

test("recent-fit page renders and links to policy pages", async ({ page }) => {
  await page.goto("/recent-fit/");

  await expect(page.getByRole("heading", { name: "RecentFit" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Privacy Policy" }),
  ).toHaveAttribute("href", "/recent-fit/privacy-policy/");
  await expect(page.getByRole("link", { name: "Support" })).toHaveAttribute(
    "href",
    "/recent-fit/support/",
  );
});

test("privacy policy route renders", async ({ page }) => {
  await page.goto("/recent-fit/privacy-policy/");

  await expect(
    page.getByRole("heading", { name: "Privacy Policy" }),
  ).toBeVisible();
  await expect(page.getByText("sunshine.cali.apps@gmail.com")).toBeVisible();
});

test("support route renders", async ({ page }) => {
  await page.goto("/recent-fit/support/");

  await expect(page.getByRole("heading", { name: "Support" })).toBeVisible();
  await expect(page.getByText("sunshine.cali.apps@gmail.com")).toBeVisible();
});
