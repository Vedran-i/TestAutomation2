// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Simple gett request', async ({ page, request }) => {

await request.get('https://conduit-api.bomdarcademy.com/api/tags')

const response = await request.get('https://conduit-api.bondarcademy.com/api/tags')
const responseObject = await response.json()
console.log(responseObject);
expect(responseObject.tags[0]).toEqual('Test')
expect(responseObject.tags).toHaveLength(9)

});
