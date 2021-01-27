
import yahooMail    from '../pageobjects/yahoomail.page';
import assert       from 'assert';
import config from '../common/common.js'

describe('Verify error login scenario', function() {

  it('Open Yahoo Mail page', function () {
        browser.url(config.url);
        console.log('getTitle:'+browser.getTitle());
        assert.equal(browser.getTitle(), 'Yahoo');
    });

  it('Click next button without Username', function () {
    yahooMail.clickNextBtn();
    assert.equal(yahooMail.isErrorDisplayed(), true);
  });

  it('Verify the error text', function () {
    assert.equal(yahooMail.getErrorText(), "Sorry, we don't recognise this email address.");
  });
});
