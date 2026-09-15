import { test, expect } from '@playwright/test';

import { faker } from '@faker-js/faker';

test.describe('Playwright Locator Scenario', () => {

    test('Test Case 01 - Fill any dataand click register.', async ({ page }) => {

        await page.goto('/https://parabank.parasoft.com/parabank/register.htm');

        await page.locator('[value="register"]').click();

        //assertion for negative test

        await expect(page.locator("[id='customer.firstName.errors']")).toBeVisible();

        await expect(page.locator("[id='customer.lastName.errors']")).toBevisible();

    })

    
})
//this creates five users and every one will be unique and random. faker is a library that generates random data for testing purposes. It can be used to create fake names, addresses, phone numbers, and other types of data. In this case, it is being used to create five random users with unique usernames, email addresses, and other details.
export function createRandomUser() {
  return {
    
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    userDerails: faker.music

  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});