import { test, expect } from '@playwright/test'

test('open page and check title', async ({ page }) => {
  await page.goto('https://example.com')

  await expect(page).toHaveTitle(/Example/)
})

test('check heading visible', async ({ page }) => {
  await page.goto('https://example.com')

  const heading = page.locator('h1')
  await expect(heading).toBeVisible()
})