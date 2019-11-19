const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_BUTTON_NORMAL = '.normalButton .kuc-btn';
const XPATH_BUTTON_SET_TEXT = '.normalButton_setText .kuc-btn';
const XPATH_BUTTON_CHANGE_TEXT = '.normalButton_setText .change-text';
const XPATH_BUTTON_NORMAL_TYPE = '.normalButton_setNormalType .kuc-btn';
const XPATH_BUTTON_CHANGE_NORMAL_TYPE = '.normalButton_setNormalType .change-type';
const XPATH_BUTTON_SUBMIT_TYPE = '.normalButton_setSubmitType .kuc-btn';
const XPATH_BUTTON_CHANGE_SUBMIT_TYPE = '.normalButton_setSubmitType .change-type';
const XPATH_INVISIBLE_BUTTON_SHOW = '.normalButton_showInvisible .show-button';
const XPATH_INVISIBLE_BUTTON_DISPLAYED = '.normalButton_showInvisible .kuc-btn';
const XPATH_VISIBLE_BUTTON_HIDE = '.normalButton_hideVisible .hide-button';
const XPATH_VISIBLE_BUTTON_NON_DISLAYED = '.normalButton_hideVisible .kuc-btn';
const XPATH_ENABLE_BUTTON_DISABLE = '.normalButton_disable .disable-button';
const XPATH_ENABLE_BUTTON_UNCLICKABLE = '.normalButton_disable .kuc-btn';
const XPATH_DISABLE_BUTTON_ENABLE = '.normalButton_enable .enable-button';
const XPATH_DISABLE_BUTTON_CLICKABLE = '.normalButton_enable .kuc-btn';
const XPATH_BUTTON_ON_CALL_CLICK = '.normalButton_onCall .kuc-btn';
const XPATH_BUTTON_ON_TRIGGER = '.normalButton_onTrigger .kuc-btn';

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Normal button-2] Normal button should has white for background color and blue for text color', function () {
        let btnBgColor = $(XPATH_BUTTON_NORMAL).getCssProperty('background-color');
        let btnTextColor = $(XPATH_BUTTON_NORMAL).getCssProperty('color');
        expect(btnBgColor.parsed.hex).to.equal('#f7f9fa');
        expect(btnTextColor.parsed.hex).to.equal('#3498db');
    });

    it('[Normal button-6] Verify that can create a button with full options value contains default value', function () {
        let btnText = $(XPATH_BUTTON_NORMAL).getText();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_NORMAL, 'class');
        let btnIsVisibled = browser.isVisible(XPATH_BUTTON_NORMAL);
        let btnIsEnabled = browser.isEnabled(XPATH_BUTTON_NORMAL);
        expect(btnIsEnabled).to.equal(true);
        expect(btnIsVisibled).to.equal(true);
        expect(btnClassAttribute).to.equal('kuc-btn normal');
        expect(btnText).to.equal('normalButton');
    });

    it('[Normal button-16] Verify can set text for button which contains existing text', function () {
        $(XPATH_BUTTON_CHANGE_TEXT).click();
        let btnText = $(XPATH_BUTTON_SET_TEXT).getText();
        expect(btnText).to.equal('Button changed text');
    });

    it('[Normal button-20] Verify can set normal type for button', function () {
        $(XPATH_BUTTON_CHANGE_NORMAL_TYPE).click();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_NORMAL_TYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn normal');
    });

    it('[Normal button-21] Verify can set submit type for button', function () {
        $(XPATH_BUTTON_CHANGE_SUBMIT_TYPE).click();
        let btnClassAttribute = browser.getAttribute(XPATH_BUTTON_SUBMIT_TYPE, 'class');
        expect(btnClassAttribute).to.equal('kuc-btn submit');
    });

    it('[Normal button-25] Verify that can show invisible Button on UI', function () {
        $(XPATH_INVISIBLE_BUTTON_SHOW).click();
        let btnIsVisibled = browser.isVisible(XPATH_INVISIBLE_BUTTON_DISPLAYED);
        expect(btnIsVisibled).to.equal(true);
    });

    it('[Normal button-27] Verify that can hide the visible Button on UI', function () {
        $(XPATH_VISIBLE_BUTTON_HIDE).click();
        let btnIsVisibled = browser.isVisible(XPATH_VISIBLE_BUTTON_NON_DISLAYED);
        expect(btnIsVisibled).to.equal(false);
    });

    it('[Normal button-29] Verify that can disable the current enable Button on UI', function () {
        $(XPATH_ENABLE_BUTTON_DISABLE).click();
        let btnIsEnabled = browser.isEnabled(XPATH_ENABLE_BUTTON_UNCLICKABLE);
        expect(btnIsEnabled).to.equal(false);
    });

    it('[Normal button-31] Verify that can enable the disabled Button on UI', function () {
        $(XPATH_DISABLE_BUTTON_ENABLE).click();
        let btnIsEnabled = browser.isEnabled(XPATH_DISABLE_BUTTON_CLICKABLE);
        expect(btnIsEnabled).to.equal(true);
    });

    it('[Normal button-33] Verify that can register a callback function for click event successfully', function () {
        $(XPATH_BUTTON_ON_CALL_CLICK).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('normalButton_onCall has been clicked');
        browser.alertAccept();
    });

    it('[Normal button-34] Verify that the callback function will be trigger when click on the button', function () {
        $(XPATH_BUTTON_ON_TRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('normalButton_onTrigger has been clicked');
        browser.alertAccept();
    });
});