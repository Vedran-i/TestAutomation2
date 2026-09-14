import {test, expect} from '@playwright/test';

test.describe('Playwright form filling scenario', () => {

    test('Test Case 01', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@example.com');
        await page.getByRole('radio', { name: 'Submit' }).click();
    });
});