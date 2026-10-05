import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('John Doe');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('John Doe');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('e');
  await page.getByText('Peter Mac Anderson').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('re123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('admin123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('admin123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Disabled' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
});

//must add assertions to verify the changes made in the test case.