import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pages/LoginPage';

Given('I am on the login page', async () => {
  await LoginPage.open();
});

When(/^I enter username '(.+)'$/, async (username) => {
  await LoginPage.enterUsername(username);
});

When(/^I enter password '(.+)'$/, async (password) => {
  await LoginPage.enterPassword(password);
});

When('I click on login button', async () => {
  await LoginPage.clickLogin();
});

Then('I should see Hotel Search section', async () => {
  await expect(LoginPage.hotelSearchIsDisplayed()).toBeTrue();
});
