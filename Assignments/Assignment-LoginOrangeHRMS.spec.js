import { test, expect } from '@playwright/test';

test('Login and check dashboard elements', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

    //ASSERTIONS
+
  await expect(page.getByText('Time at Work')).toBeVisible();

  await expect(page.getByText('My Actions')).toBeVisible();

  await expect(page.getByText('Quick Launch')).toBeVisible();

  await expect(page.getByText('Buzz Latest Posts')).toBeVisible();

  await expect(page.getByText('Employees on Leave Today')).toBeVisible();

  await expect(page.getByText('Employee Distribution by Sub Unit')).toBeVisible();

});

