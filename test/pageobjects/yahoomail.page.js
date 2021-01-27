import locator from '../common/locators.js'
import setup from '../common/common.js'

var waitforselectorarray = [ locator.titlelocator ];

class YahooMail  {

  get username()   { return $(locator.usernamelocator); }
  get nextButton()  { return $(locator.nextbtnlocator); }
  get resultsList()   { return $(locator.resultsListlocator); }
  get errorText()	{ return $(locator.errorTxtlocator); } 	


  enterUsername (item) {
    this.username.clearValue();
    this.username.setValue(item);
    browser.pause(1000);
  }

  clickNextBtn () {
    this.nextButton.click();
  }
  isSearched () {
    this.resultsList.waitForDisplayed(1000);
    return this.resultsList.isDisplayed();
  }

  isErrorDisplayed() {
	  this.errorText.waitForDisplayed(1000);
	  return this.errorText.isDisplayed();
	}

  getErrorText() {
    return this.errorText.getText();
  }

   	
}

export default new YahooMail();
