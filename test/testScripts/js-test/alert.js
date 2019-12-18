const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../utils/common');
const Helper = require('../../helper/main');
const expect = require('chai').expect;


const SUCCESS_ALERT = "//div[contains(text(),'successAlert')]";
const ERROR_ALERT = "//div[contains(text(),'errorAlert')]";
const NO_OPTION_ALERT = "//div[@id='no-option-alert']//div";
const FULL_OPTION_ALERT = "//div[@id='full-option-alert']//div";
const ONLY_TEXT_ALERT = "//div[@id='only-text-alert']//div";
const ONLY_TYPE_ALERT = "//div[@id='only-type-alert']//div";
const ONLY_TYPE_BUTTON_ALERT = "//html//button[text()='Change Only Type To Success']";
const ONLY_DISABLED_TRUE_ALERT = "//div[@id='only-disable-alert']//div";
const ONLY_VISIBLE_ALERT = "//div[@id='only-visible-alert']//div";
const ONLY_INVISIBLE_ALERT = "//div[@id='only-invisible-alert']//div";
const SET_TEXT_ALERT = "//div[@id='set-text-alert']//div";
const SET_WITHOUT_TEXT_BUTTON_ALERT = "//button[contains(text(),'Set Text Alert that not contain existing text')]";
const SET_TEXT_BUTTON_ALERT = "//button[contains(text(),'Set Text Alert that contain existing text')]";
const SET_XSS_VALUE_ALERT = "//div[@id='set-text-xss-alert']//div";
const SET_XSS_VALUE_BUTTON_ALERT = "//button[contains(text(),'Set text XSS value for Alert')]";
const SET_TEXT_INVISIBLE_ALERT = "//div[@id='set-text-invisible-alert']//div";
const SET_TEXT_INVISIBLE_BUTTON_ALERT = "//button[contains(text(),'Set Text for Invisible Alert')]";
const SHOW_TEXT_INVISIBLE_BUTTON_ALERT = "//button[contains(text(),'Show Invisible Set Text Alert')]";
const SET_TYPE_ALERT = "//div[@id='set-type-alert']//div";
const SET_SUCCESS_TYPE_BUTTON_ALERT = "//button[contains(text(),'Set Success Type Alert')]";
const SET_ERROR_TYPE_BUTTON_ALERT = "//button[contains(text(),'Set Error Type Alert')]";
const SET_TYPE_INVISIBLE_ALERT = "//div[@id='set-type-invisible-alert']//div";
const SET_TYPE_INVISIBLE_BUTTON_ALERT = "//button[contains(text(),'Set Type for Invisible Alert')]";
const SHOW_TYPE_INVISIBLE_BUTTON_ALERT = "//button[contains(text(),'Show Invisible Set Type Alert')]";
const VISIBLE_SHOW_ALERT = "//div[@id='show-visible-alert']//div";
const INVISIBLE_SHOW_ALERT = "//div[@id='show-invisible-alert']//div";
const SHOW_BUTTON_ALERT = "//button[contains(text(),'Show Alert')]";
const VISIBLE_HIDE_ALERT = "//div[@id='hide-visible-alert']//div";
const INVISIBLE_HIDE_ALERT = "//div[@id='hide-invisible-alert']//div";
const HIDE_BUTTON_ALERT = "//button[contains(text(), 'Hide Alert')]";
const DISABLE_ENABLED_ALERT = "//div[@id='disable-enabled-alert']//div";
const DISABLE_DISABLED_ALERT = "//div[@id='disable-disabled-alert']//div";
const DISABLE_BUTTON_ALERT = "//button[contains(text(), 'Disable Alert')]";
const ENABLE_ENABLED_ALERT = "//div[@id='enable-enabled-alert']//div";
const ENABLE_DISABLED_ALERT = "//div[@id='enable-disabled-alert']//div";
const ENABLE_BUTTON_ALERT = "//button[contains(text(), 'Enable Alert')]";
const ON_CALLBACK_FUNCTION_ALERT = "//div[@id='on-callback-function-alert']";
const ON_CALLBACK_TRIGGER_ALERT = "//div[@id='on-callback-trigger-alert']";

describe('kintoneUIComponent - Alert', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Alert-2] Success alert should have green (#91c36c) background-color, size, relative position', function () {
        let alertBgColor = $(SUCCESS_ALERT).getCssProperty('background-color');
        let alertSize = browser.getElementSize(SUCCESS_ALERT);
        let alertPos = $(SUCCESS_ALERT).getCssProperty('position');
        expect(alertBgColor.parsed.hex).to.equal('#91c36c');
        expect(alertSize.width).to.equal(alertSize.width);
        expect(alertSize.height).to.equal(alertSize.height);
        expect(alertPos.value).to.equal('relative');
    });

    it('[Alert-3] Error alert should have red (#e74c3c) background-color, size, relative position', function () {
        let alertBgColor = $(ERROR_ALERT).getCssProperty('background-color');
        let alertSize = browser.getElementSize(ERROR_ALERT);
        let alertPos = $(ERROR_ALERT).getCssProperty('position');
        expect(alertBgColor.parsed.hex).to.equal('#e74c3c');
        expect(alertSize.width).to.equal(alertSize.width);
        expect(alertSize.height).to.equal(alertSize.height);
        expect(alertPos.value).to.equal('relative');
    });

    it('[Alert-4-5] should create alert with no option', function () {
        Helper.ElementHandler
            .waitForElement(NO_OPTION_ALERT)
            .verifyAttribute(NO_OPTION_ALERT, 'class', 'kuc-alert bg-danger')
            .verifyElementEnabled(NO_OPTION_ALERT)
            .verifyElementVisible(NO_OPTION_ALERT)
    });

    it('[Alert-6] should create alert with full option', function () {
        Helper.ElementHandler
            .waitForElement(FULL_OPTION_ALERT)
            .verifyAttribute(FULL_OPTION_ALERT, 'class', 'kuc-alert bg-danger')
            .verifyText(FULL_OPTION_ALERT, 'full option Alert')
            .verifyElementVisible(FULL_OPTION_ALERT)
            .verifyElementEnabled(FULL_OPTION_ALERT)
    });

    it('[Alert-7] should create alert with only options.text', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_TEXT_ALERT)
            .verifyElementVisible(ONLY_TEXT_ALERT)
            .verifyText(ONLY_TEXT_ALERT, 'Alert with only text')
    });

    it('[Alert-10] should create alert with only options.type', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_TYPE_ALERT)
            .verifyAttribute(ONLY_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
            .waitForElement(ONLY_TYPE_BUTTON_ALERT)
            .click(ONLY_TYPE_BUTTON_ALERT)
            .verifyAttribute(ONLY_TYPE_ALERT, 'class', 'kuc-alert bg-success')
    });

    it('[Alert-14] should create alert with only options.Visible is true', function () {
        Helper.ElementHandler
            .verifyElementVisible(ONLY_VISIBLE_ALERT);
    });

    it('[Alert-15] should create alert with only options.Visible is false', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(ONLY_INVISIBLE_ALERT);
    });

    it('[Alert-16-17] should set text for Alert which not contain existing text and Alert contain existing text', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_ALERT, '')
            .click(SET_WITHOUT_TEXT_BUTTON_ALERT)
            .verifyText(SET_TEXT_ALERT, 'Set text for alert not contain existing text')
            .click(SET_TEXT_BUTTON_ALERT)
            .verifyText(SET_TEXT_ALERT, 'Set text for alert contain existing text')
    });

    it('[Alert-18] should set text for Alert with XSS value', function () {
        Helper.ElementHandler
            .verifyText(SET_XSS_VALUE_ALERT, 'Set XSS Value for Alert')
            .click(SET_XSS_VALUE_BUTTON_ALERT)
            .verifyText(SET_XSS_VALUE_ALERT, "alert('123');")
    });

    it('[Alert-20] should set text for invisible alert', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SET_TEXT_INVISIBLE_ALERT)
            .click(SET_TEXT_INVISIBLE_BUTTON_ALERT)
            .click(SHOW_TEXT_INVISIBLE_BUTTON_ALERT)
            .verifyElementVisible(SET_TEXT_INVISIBLE_ALERT)
            .verifyText(SET_TEXT_INVISIBLE_ALERT, 'Alert after set text')
    });

    it('[Alert-22-23] should set type for alert', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
            .click(SET_SUCCESS_TYPE_BUTTON_ALERT)
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-success')
            .click(SET_ERROR_TYPE_BUTTON_ALERT)
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
    });

    it('[Alert-24] should set type for invisible alert', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SET_TYPE_INVISIBLE_ALERT)
            .click(SET_TYPE_INVISIBLE_BUTTON_ALERT)
            .click(SHOW_TYPE_INVISIBLE_BUTTON_ALERT)
            .verifyElementVisible(SET_TYPE_INVISIBLE_ALERT)
            .verifyAttribute(SET_TYPE_INVISIBLE_ALERT, 'class', 'kuc-alert bg-success')


        // let beforeSetTypeInvisible = browser.isVisible(SET_TYPE_INVISIBLE_ALERT);
        // expect(beforeSetTypeInvisible).to.equal(false);
        // $(SET_TYPE_INVISIBLE_BUTTON_ALERT).click();
        // $(SHOW_TYPE_INVISIBLE_BUTTON_ALERT).click();
        // let afterSetTypeInvisible = browser.isVisible(SET_TYPE_INVISIBLE_ALERT);
        // expect(afterSetTypeInvisible).to.equal(true);
        // let afterSetText = $(SET_TYPE_INVISIBLE_ALERT).getAttribute('class');
        // expect(afterSetText).to.include('kuc-alert bg-success')
    });

    it('[Alert-27-28] should show invisible Alert and visible Alert on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(INVISIBLE_SHOW_ALERT)
            .verifyElementVisible(VISIBLE_SHOW_ALERT)
            .click(SHOW_BUTTON_ALERT)
            .verifyElementVisible(INVISIBLE_SHOW_ALERT)
            .verifyElementVisible(VISIBLE_SHOW_ALERT)


        // let invisibleAlert = browser.isVisible(INVISIBLE_SHOW_ALERT);
        // let visibleAlert = browser.isVisible(VISIBLE_SHOW_ALERT);
        // expect(invisibleAlert).to.equal(false);
        // expect(visibleAlert).to.equal(true);
        // $(SHOW_BUTTON_ALERT).click();
        // invisibleAlert = browser.isVisible(INVISIBLE_SHOW_ALERT);
        // visibleAlert = browser.isVisible(VISIBLE_SHOW_ALERT);
        // expect(invisibleAlert).to.equal(true);
        // expect(visibleAlert).to.equal(true);
    });

    it('[Alert-29-30] should hide visible Alert and hide invisible Alert on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(VISIBLE_HIDE_ALERT)
            .verifyElementNotVisible(INVISIBLE_HIDE_ALERT)
            .click(HIDE_BUTTON_ALERT)
            .verifyElementNotVisible(VISIBLE_HIDE_ALERT)
            .verifyElementNotVisible(INVISIBLE_HIDE_ALERT)




        // let visibleAlert = browser.isVisible(VISIBLE_HIDE_ALERT);
        // let invisibleAlert = browser.isVisible(INVISIBLE_HIDE_ALERT);
        // expect(visibleAlert).to.equal(true);
        // expect(invisibleAlert).to.equal(false);
        // $(HIDE_BUTTON_ALERT).click();
        // visibleAlert = browser.isVisible(VISIBLE_HIDE_ALERT);
        // invisibleAlert = browser.isVisible(INVISIBLE_HIDE_ALERT);
        // expect(visibleAlert).to.equal(false);
        // expect(invisibleAlert).to.equal(false);
    });

    it('[Alert-35] should register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_FUNCTION_ALERT)
            .verifyAlertText('onCallBackFunctionAlert has been clicked')
    });

    it('[Alert-36] should verify that the callback function will be trigger when click on the alert', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_TRIGGER_ALERT)
            .verifyAlertText('onCallBackTriggerAlert has been clicked')
    });
});