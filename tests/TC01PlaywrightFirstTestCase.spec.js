import {test, expect} from '@playwright/test';

var baseURL = "https://parabank.parasoft.com/parabank/register.htm";
var expectedTitle = "ParaBank | Register for Free Online Account Access";

test('I am validating the title of the page', async ({page}) => { //arrow is called call back function.


    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    await page.waitForTimeout(4000);

    //ASSERTION

    await expect(page).toHaveTitle(expectedTitle);

    await expect(page).toHaveURL(baseURL);

    await console.log(getFirstName());
    // chai + jasmine
    // Browser -- Context -- Page -- ElementHandle -- Locators


    //await page.goto('https://playwright.dev/');
    //await expect(page).toHaveTitle(/Playwright/);
    //await expect(page).toHaveURL(/playwright.dev/);
});   

//asynch is a keyword that is used to declare an asynchronous function. It allows you to use the await keyword inside the function, which pauses the execution of the function until a Promise is resolved. 
//This is useful for handling asynchronous operations, such as network requests or file I/O, in a more readable and manageable way.

//asynch
//await
//=>

function getFirstName(){
    return "Sita";
}