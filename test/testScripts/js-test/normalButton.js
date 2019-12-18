const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../utils/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/normalButton.xpath');

describe('kintoneUIComponent - Normal Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Normal button-1]Normal button should has white for background color and blue for text color', function () {
        let btnBgColor = $(xpath.XPATH_BUTTON_NORMAL).getCssProperty('background-color');
        let btnTextColor = $(xpath.XPATH_BUTTON_NORMAL).getCssProperty('color');
        expect(btnBgColor.parsed.hex).to.equal('#dddddd');
        expect(btnTextColor.parsed.hex).to.equal('#333333');
    });

    it('[Normal button-6] should create a button without any options value', function () {
        $(xpath.XPATH_BTN_CONSTRUCTOR).execute(() => {
            normalButton_constructor.setText('Constructor normal button()');
        });
        expect($(xpath.XPATH_BTN_CONSTRUCTOR).getText()).to.equal('Constructor normal button()');
    });

    it('[Normal button-16] should changed text by function setText which not contains existing text', function () {
        $(xpath.XPATH_BUTTON_NONETEXT).execute(() => {
            normalButton_NoneText.setText('Normal button has been changed');
        });
        expect($(xpath.XPATH_BUTTON_NONETEXT).getText()).to.equal('Normal button has been changed');
    });

    it('[Normal button-19] should set the text for Button when using function without parameter', function () {
        $(xpath.XPATH_BUTTON_NONEPARAMETER).execute(() => {
            normalButton_NoneParameter.setText('');
        });
        console.log($(xpath.XPATH_BUTTON_NONEPARAMETER).getText())
        expect($(xpath.XPATH_BUTTON_NONEPARAMETER).getText()).to.equal('');
    });

    it('[Normal button-20] should normal type for button', function () {
        $(xpath.XPATH_BUTTON_SETTYPE).execute(() => {
            normalButton_setType.setType('normal');
        });
        let btnClassAttribute = browser.getAttribute(xpath.XPATH_BUTTON_SETTYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn normal');
    });

    it('[Normal button-25] should show invisible Button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            normalButton_showInvisible.show();
        });
        let btnIsVisibled = isVisibled(xpath.XPATH_BUTTON_SHOW, true);
        expect(btnIsVisibled).to.equal(true);
    });

    it('[Normal button-27] should hide the visible Button on UI', function () {
        $(xpath.XPATH_BUTTON_HIDE).execute(() => {
            normalButton_hideVisible.hide();
        });
        let btnIsVisibled = browser.isVisible(xpath.XPATH_BUTTON_HIDE);
        browser.waitUntil(function () {
            return btnIsVisibled === false
          }, 5000, 'Button is still displayed after 5s');
        expect(btnIsVisibled).to.equal(false);
    });

    it('[Normal button-29] should disable the current enable Button on UI', function () {
        $(xpath.XPATH_BUTTON_DISABLE).execute(() => {
            normalButton_disable.disable();
        });
        let btnIsEnabled = browser.isEnabled(xpath.XPATH_BUTTON_DISABLE);
        browser.waitUntil(function () {
            return btnIsEnabled === false
          }, 5000, 'Button is still enabled after 5s');
        expect(btnIsEnabled).to.equal(false);
    });

    it('[Normal button-31] should enable the disabled Button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            normalButton_enable.enable();
        });
        let btnIsEnabled = browser.isEnabled(xpath.XPATH_BUTTON_ENABLE);
        browser.waitUntil(function () {
            return btnIsEnabled === true
          }, 5000, 'Button is still disabled after 5s');
        expect(btnIsEnabled).to.equal(true);
    });

    it('[Normal button-33] Normal button can be clicked', function () {
        $(xpath.XPATH_BUTTON_NORMAL).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('buttonNormal has been clicked');
        browser.alertAccept();
    });

    it('[Normal button-34] Normal button can be clicked and call trigger', function () {
        $(xpath.XPATH_BUTTON_ONCALLTRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('normalButton_onTrigger has been clicked');
        browser.alertAccept();
    });
});