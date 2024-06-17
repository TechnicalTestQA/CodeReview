import { $ } from '@wdio/globals'
import Page from './page';
import HomePage from './HomePage';

class LoginPage extends Page {
  public get inputUsername () { return $('#credentials-section .wide-input-03'); }
  public get inputPassword () { return $('#credentials-section .wide-input-07'); }
  public get btnSubmit () { return $('#credentials-section button[type="submit"]'); }
  public get hotelSearchSection () { return $('//div[contains(@class, "home-container")]/following-sibling::div[@id="hotel-search-container"]'); }

  open () {
    return super.open('login');
  }

  async clickUsername() {
    await this.inputUsername.click();
  }

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
  }

  async clickPassword() {
    await this.inputPassword.click();
  }

  async enterPassword(password) {
    await this.inputPassword.setValue(password);
  }

  async clickLogin() {
    return await this.btnSubmit.click();
  }

  async hotelSearchIsDisplayed() {
    await this.hotelSearchSection.isDisplayed();
  }
}

export default new LoginPage();
