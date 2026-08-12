import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Alles accepteren' }).click();
  await page.getByRole('combobox', { name: 'Zoek' }).click();
  await page.getByRole('combobox', { name: 'Zoek' }).fill('sitadev');
  await page.locator('iframe[name="a-3jaolun4m9cq"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-3jaolun4m9cq"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-3jaolun4m9cq"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-3jaolun4m9cq"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});