const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../util/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/submitButton.xpath');

describe('kintoneUIComponent - Submit Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Submit button-3]Submit button should has white for background color and blue for text color', function () {
        let btnBgColor = $(xpath.XPATH_BUTTON_SUBMIT).getCssProperty('background-color');
        let btnTextColor = $(xpath.XPATH_BUTTON_SUBMIT).getCssProperty('color');
        expect(btnBgColor.parsed.hex).to.equal('#dddddd');
        expect(btnTextColor.parsed.hex).to.equal('#333333');
    });

    it('[Submit button-5] should create a button without any options value', function () {
        $(xpath.XPATH_BTN_CONSTRUCTOR).execute(() => {
            submitButton_constructor.setText('Constructor Submit button()');
        });
        expect($(xpath.XPATH_BTN_CONSTRUCTOR).getText()).to.equal('Constructor Submit button()');
    });

    it('[Submit button-6] should create a button with full options value', function () {
        let isVisibleItem = isVisibled(xpath.XPATH_BTN_FULL_VALUE_CONSTRUCTOR, true);
        expect(isVisibleItem).to.equal(true);
    });    

    it('[Submit button-16] should changed text by function setText which not contains existing text', function () {
        $(xpath.XPATH_BUTTON_NONETEXT).execute(() => {
            submitButton_NoneText.setText('Submit button has been changed');
        });
        expect($(xpath.XPATH_BUTTON_NONETEXT).getText()).to.equal('Submit button has been changed');
    });

    it('[Submit button-19] should set the text for Button when using function without parameter', function () {
        $(xpath.XPATH_BUTTON_NONEPARAMETER).execute(() => {
            submitButton_NoneParameter.setText('');
        });
        expect($(xpath.XPATH_BUTTON_NONEPARAMETER).getText()).to.equal('');
    });

    it('[Submit button-20] should set normal type for button', function () {
        $(xpath.XPATH_BUTTON_SETTYPE).execute(() => {
            submitButton_setType.setType('normal');
        });
        let btnClassAttribute = browser.getAttribute(xpath.XPATH_BUTTON_SETTYPE, 'class');
        expect(btnClassAttribute).to.include('normal');
    });

    it('[Submit button-21] should Submit type for button', function () {
        $(xpath.XPATH_BUTTON_SETTYPE).execute(() => {
            submitButton_setType.setType('submit');
        });
        let btnClassAttribute = browser.getAttribute(xpath.XPATH_BUTTON_SETTYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn submit');
    });

    it('[Submit button-25] should show invisible Button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            submitButton_showInvisible.show();
        });
        let btnIsVisibled = browser.isVisible(xpath.XPATH_BUTTON_SHOW);
        browser.waitUntil(function () {
            return btnIsVisibled === true
          }, 5000, 'Button is not displayed after 5s');
        expect(btnIsVisibled).to.equal(true);
    });

    it('[Submit button-27] should hide the visible Button on UI', function () {
        $(xpath.XPATH_BUTTON_HIDE).execute(() => {
            submitButton_hideVisible.hide();
        });
        let btnIsVisibled = browser.isVisible(xpath.XPATH_BUTTON_HIDE);
        browser.waitUntil(function () {
            return btnIsVisibled === false
          }, 5000, 'Button is still displayed after 5s');
        expect(btnIsVisibled).to.equal(false);
    });

    it('[Submit button-29] should disable the current enable Button on UI', function () {
        $(xpath.XPATH_BUTTON_DISABLE).execute(() => {
            submitButton_disable.disable();
        });
        let btnIsEnabled = browser.isEnabled(xpath.XPATH_BUTTON_DISABLE);
        browser.waitUntil(function () {
            return btnIsEnabled === false
          }, 5000, 'Button is still enabled after 5s');
        expect(btnIsEnabled).to.equal(false);
    });

    it('[Submit button-31] should enable the disabled Button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            submitButton_enable.enable();
        });
        let btnIsEnabled = browser.isEnabled(xpath.XPATH_BUTTON_ENABLE);
        browser.waitUntil(function () {
            return btnIsEnabled === true
          }, 5000, 'Button is still disabled after 5s');
        expect(btnIsEnabled).to.equal(true);
    });

    it('[Submit button-33] Submit button can be clicked', function () {
        $(xpath.XPATH_BUTTON_SUBMIT).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('buttonSubmit has been clicked');
        browser.alertAccept();
    });

    it('[Submit button-34] Submit button can be clicked and call trigger', function () {
        $(xpath.XPATH_BUTTON_ONCALLTRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('submitButton_onTrigger has been clicked');
        browser.alertAccept();
    });


});