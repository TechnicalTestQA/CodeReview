import { $, browser } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
  public get inputUsername () { return $('#credentials-section .username-input'); }
  public get inputPassword () { return $('#credentials-section .password-input'); }
  public get btnSubmit () { return $('#credentials-section button[type="submit"]'); }
  public get hotelSearchSection () { return $('//div[contains(@class, "home-container")]/following-sibling::div[@id="hotel-search-container"]'); }

  open () {
    return browser.url(`https://example.com/login`);
  }

  async enterUsername(username) {
    await this.inputUsername.setValue(username);
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
