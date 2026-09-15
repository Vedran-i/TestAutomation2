import { test, expect } from '@playwright/test';

test.describe('Playwright Locator Scenario', () => {

    test('Test Case 01 - do not fill any data on UI and click register.', async ({ page }) => {

        await page.goto('/https://parabank.parasoft.com/parabank/register.htm');

        await page.locator('[value="register"]').click();

        //assertion for negative test

        await expect(page.locator("[id='customer.firstName.errors']")).toBeVisible();

        await expect(page.locator("[id='customer.lastName.errors']")).toBevisible();

    })

    
})