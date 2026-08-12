import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vimm.net/');
  await page.locator('#main').getByRole('link', { name: 'The Vault' }).click();
  await page.getByRole('button', { name: 'AGREE' }).click();
  await page.locator('#main').getByRole('link', { name: 'Nintendo', exact: true }).click();
  await page.locator('form').click();
  await page.getByRole('searchbox', { name: 'Find a game...' }).click();
  await page.getByRole('searchbox', { name: 'Find a game...' }).fill('mario');
  await page.getByRole('searchbox', { name: 'Find a game...' }).press('Enter');
  await page.getByRole('button', { name: '🔍' }).click();
  await page.getByRole('link', { name: 'Dr. Mario' }).first().click();
  await page.getByRole('button', { name: 'Play Online' }).click();
  await page.getByText('Start Game').click();
  await page.getByText('Start Game').click();
});