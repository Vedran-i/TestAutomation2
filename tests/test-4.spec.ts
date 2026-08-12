import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('link', { name: 'Blijf op Amazon.com' }).click();
  await page.getByRole('link', { name: 'Get your game on Shop gaming' }).click();
  await page.locator('.a-link-normal').first().click();
});