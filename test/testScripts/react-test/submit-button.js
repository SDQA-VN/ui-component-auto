const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_BUTTON_SUBMIT = '.submitButton .kuc-btn';
const XPATH_BUTTON_SET_TEXT = '.submitButton_setText .kuc-btn';
const XPATH_BUTTON_CHANGE_TEXT = '.submitButton_setText .change-text';
const XPATH_BUTTON_SUBMIT_TYPE = '.submitButton_setSubmitType .kuc-btn';
const XPATH_BUTTON_CHANGE_SUBMIT_TYPE = '.submitButton_setSubmitType .change-type';
const XPATH_BUTTON_NORMAL_TYPE = '.submitButton_setNormalType .kuc-btn';
const XPATH_BUTTON_CHANGE_NORMAL_TYPE = '.submitButton_setNormalType .change-type';
const XPATH_INVISIBLE_BUTTON_SHOW = '.submitButton_showInvisible .show-button';
const XPATH_INVISIBLE_BUTTON_DISPLAYED = '.submitButton_showInvisible .kuc-btn';
const XPATH_VISIBLE_BUTTON_HIDE = '.submitButton_hideVisible .hide-button';
const XPATH_VISIBLE_BUTTON_NON_DISLAYED = '.submitButton_hideVisible .kuc-btn';
const XPATH_ENABLE_BUTTON_DISABLE = '.submitButton_disable .disable-button';
const XPATH_ENABLE_BUTTON_UNCLICKABLE = '.submitButton_disable .kuc-btn';
const XPATH_DISABLE_BUTTON_ENABLE = '.submitButton_enable .enable-button';
const XPATH_DISABLE_BUTTON_CLICKABLE = '.submitButton_enable .kuc-btn';
const XPATH_BUTTON_ON_CALL_CLICK = '.submitButton_onCall .kuc-btn';
const XPATH_BUTTON_ON_TRIGGER = '.submitButton_onTrigger .kuc-btn';

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Submit button-3] Verify that the Submit button have the UI is the same as button on kintone', function () {
        let btnBgColor = $(XPATH_BUTTON_SUBMIT).getCssProperty('background-color');
        let btnTextColor = $(XPATH_BUTTON_SUBMIT).getCssProperty('color');
        expect(btnBgColor.parsed.hex).to.equal('#3498db');
        expect(btnTextColor.parsed.hex).to.equal('#ffffff');
    });

    it('[Submit button-6] Verify that can create a button with full options value contains default value', function () {
        let btnText = $(XPATH_BUTTON_SUBMIT).getText();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_SUBMIT, 'class');
        let btnIsVisibled = browser.isVisible(XPATH_BUTTON_SUBMIT);
        let btnIsEnabled = browser.isEnabled(XPATH_BUTTON_SUBMIT);
        expect(btnIsEnabled).to.equal(true);
        expect(btnIsVisibled).to.equal(true);
        expect(btnClassAttribute).to.equal('kuc-btn submit');
        expect(btnText).to.equal('submitButton');
    });

    it('[Submit button-16] Verify can set text for button which contains existing text', function () {
        $(XPATH_BUTTON_CHANGE_TEXT).click();
        let btnText = $(XPATH_BUTTON_SET_TEXT).getText();
        expect(btnText).to.equal('Button changed text');
    });

    it('[Submit button-20] Verify can set normal type for button', function () {
        $(XPATH_BUTTON_CHANGE_NORMAL_TYPE).click();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_NORMAL_TYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn normal');
    });

    it('[Submit button-21] Verify can set submit type for button', function () {
        $(XPATH_BUTTON_CHANGE_SUBMIT_TYPE).click();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_SUBMIT_TYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn submit');
    });

    it('[Submit button-25] Verify that can show invisible Button on UI', function () {
        $(XPATH_INVISIBLE_BUTTON_SHOW).click();
        let btnIsVisibled = browser.isVisible(XPATH_INVISIBLE_BUTTON_DISPLAYED);
        expect(btnIsVisibled).to.equal(true);
    });

    it('[Submit button-27] Verify that can hide the visible Button on UI', function () {
        $(XPATH_VISIBLE_BUTTON_HIDE).click();
        let btnIsVisibled = browser.isVisible(XPATH_VISIBLE_BUTTON_NON_DISLAYED);
        expect(btnIsVisibled).to.equal(false);
    });

    it('[Submit button-29] Verify that can disable the current enable Button on UI', function () {
        $(XPATH_ENABLE_BUTTON_DISABLE).click();
        let btnIsEnabled = browser.isEnabled(XPATH_ENABLE_BUTTON_UNCLICKABLE);
        expect(btnIsEnabled).to.equal(false);
    });

    it('[Submit button-31] Verify that can enable the disabled Button on UI', function () {
        $(XPATH_DISABLE_BUTTON_ENABLE).click();
        let btnIsEnabled = browser.isEnabled(XPATH_DISABLE_BUTTON_CLICKABLE);
        expect(btnIsEnabled).to.equal(true);
    });

    it('[Submit button-33] Verify that can register a callback function for click event successfully', function () {
        $(XPATH_BUTTON_ON_CALL_CLICK).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('submitButton_onCall has been clicked');
        browser.alertAccept();
    });

    it('[Submit button-34] Verify that the callback function will be trigger when click on the button', function () {
        $(XPATH_BUTTON_ON_TRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('submitButton_onTrigger has been clicked');
        browser.alertAccept();
    });
});