import { test, expect } from '@playwright/test';

test('should display the correct page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('OrangeHRM');
});

test('enter valid credentials and login to home page', async({ page}) => {

    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})


//String = "dfjhfdjh"\"dfjhfd"
//methods to locate elements
//1. getByRole
//2. getByText
//3. getByLabel   
//4. getByPlaceholder
//5. getByAltText
//6. getByTitle
//7. getByTestId

//HTML
// tagname (attribute and value)  - CSS selector