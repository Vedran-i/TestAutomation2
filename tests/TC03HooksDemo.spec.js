import {test, expect} from '@playwright/test';

test.describe('Hooks Demo', () => {
//beforeEach hook will run before each test in this describe block meaning that before each test 
// it will navigate to the baseURL which is defined in the playwright.config.js file

    
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('login to OrangeHRM with valid credentials', async ({ page }) => {
       
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com');
    })

    test('validate the page title', async ({ page }) => {
        await expect(page).toHaveTitle('OrangeHRM');
    })

    test('validate the logo of the page', async ({ page }) => {
        await expect(page.getByAltText('company-branding')).toBeVisible();
    });

    test('validate admin tab', async ({ page }) => {
        await expect(page.getByText('Admin')).toBeVisible();
    });

    //test after all
});

//beforeEach - it will excecute before each test case (test case means test block. anything starting with test(test.(login etc)) is a test case)
//afterEach - it will execute after each test case
//beforeAll - it will execute before all tests in this describe block
//afterAll - it will execute after all tests in this describe block
