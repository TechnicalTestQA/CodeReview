import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

Given('I am on the login page', async () => {
  await LoginPage.open();
});

When('I click on the username input field', async () => {
  await LoginPage.clickUsername();
});

When(/^enter username '(.+)'$/, async (username) => {
  await LoginPage.enterUsername(username);
});

When('I click on the password input field', async () => {
  await LoginPage.clickPassword();
});

When(/^enter password '(.+)'$/, async (password) => {
  await LoginPage.enterPassword(password);
});

When('I click on login button', async () => {
  await LoginPage.clickLogin();
});

Then('I should see a hotel search section', async () => {
  await expect(LoginPage.hotelSearchIsDisplayed()).toBeTrue();
});
