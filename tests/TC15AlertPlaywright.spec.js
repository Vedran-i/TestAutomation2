import { test } from '@playwright/test';

test.describe('Alert Handling', () => {
    test('Alert 1 - clikc for JS alert', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        
        await page.click('text=Click for JS Alert');
        await page.waitForTimeout(2000);
        
        expect(await page.locator('#result').textContent()).toBe('You successfully clicked an alert');

    });

    test('Alert 2 - click for JS confirm', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.dismiss();
        });
        await page.click('text=Click for JS Confirm');
    });
    
    

});
