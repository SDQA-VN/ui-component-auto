const Helper = require('../../helper/main.js');

const SUCCESS_ALERT = "//div[contains(text(),'successAlert')]";
const ERROR_ALERT = "//div[contains(text(),'errorAlert')]";
const NO_OPTION_ALERT = "//div[@id='no-option-alert']//div";
const FULL_OPTION_ALERT = "//div[@id='full-option-alert']//div";
const ONLY_TEXT_ALERT = "//div[@id='only-text-alert']//div";
const ONLY_TYPE_ALERT = "//div[@id='only-type-alert']//div";
const ONLY_TYPE_BUTTON_ALERT = "//html//button[text()='Change Only Type To Success']";
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
const ON_CALLBACK_FUNCTION_ALERT = "//div[@id='on-callback-function-alert']";
const ON_CALLBACK_TRIGGER_ALERT = "//div[@id='on-callback-trigger-alert']";

describe('kintoneUIComponent - Alert', function () {
    it('[Alert-2] Verify that the Success Alert have the  UI is the same as Alert on kintone', function () {
        Helper.ElementHandler
            .waitForElement(SUCCESS_ALERT)
            .verifyElementColor(SUCCESS_ALERT, 'background-color', '#91c36c')
            .verifyElementSize(SUCCESS_ALERT, 299, 32)
            .verifyElementPosition(SUCCESS_ALERT, 'position', 'relative')
    });

    it('[Alert-3] Verify that the Error Alert have the UI is the same as Alert on kintone', function () {
        Helper.ElementHandler
            .waitForElement(ERROR_ALERT)
            .verifyElementColor(ERROR_ALERT, 'background-color', '#e74c3c')
            .verifyElementSize(ERROR_ALERT, 299, 32)
            .verifyElementPosition(ERROR_ALERT, 'position', 'relative')
    });

    it('[Alert-5] Verify that can create a Alert without any options value', function () {
        Helper.ElementHandler
            .waitForElement(NO_OPTION_ALERT)
            .verifyAttribute(NO_OPTION_ALERT, 'class', 'kuc-alert bg-danger')
            .verifyElementEnabled(NO_OPTION_ALERT)
            .verifyElementDisplayed(NO_OPTION_ALERT)
    });

    it('[Alert-6] Verify that can create a Alert with full options value', function () {
        Helper.ElementHandler
            .waitForElement(FULL_OPTION_ALERT)
            .verifyAttribute(FULL_OPTION_ALERT, 'class', 'kuc-alert bg-danger')
            .verifyText(FULL_OPTION_ALERT, 'full option Alert')
            .verifyElementDisplayed(FULL_OPTION_ALERT)
            .verifyElementEnabled(FULL_OPTION_ALERT)
    });

    it('[Alert-7] Verify that can create a Alert only with options.text is valid string value', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_TEXT_ALERT)
            .verifyElementDisplayed(ONLY_TEXT_ALERT)
            .verifyText(ONLY_TEXT_ALERT, 'Alert with only text')
    });

    it('[Alert-10] Verify that can create a Alert with only option.type is error', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_TYPE_ALERT)
            .verifyAttribute(ONLY_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
            .waitForElement(ONLY_TYPE_BUTTON_ALERT)
            .click(ONLY_TYPE_BUTTON_ALERT)
            .verifyAttribute(ONLY_TYPE_ALERT, 'class', 'kuc-alert bg-success')
    });

    it('[Alert-14] Verify that can create a Alert with only option.isVisible is true', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(ONLY_VISIBLE_ALERT);
    });

    it('[Alert-15] Verify that can create a Alert with only option.isVisibled is false', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(ONLY_INVISIBLE_ALERT);
    });

    it('[Alert-17] Verify can set text for Alert which contains existing text', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_ALERT, '')
            .click(SET_WITHOUT_TEXT_BUTTON_ALERT)
            .verifyText(SET_TEXT_ALERT, 'Set text for alert not contain existing text')
            .click(SET_TEXT_BUTTON_ALERT)
            .verifyText(SET_TEXT_ALERT, 'Set text for alert contain existing text')
    });

    it('[Alert-18] Verify that can set text for Alert with XSS value', function () {
        Helper.ElementHandler
            .verifyText(SET_XSS_VALUE_ALERT, 'Set XSS Value for Alert')
            .click(SET_XSS_VALUE_BUTTON_ALERT)
            .verifyText(SET_XSS_VALUE_ALERT, "alert('123');")
    });

    it('[Alert-20] Verify can set text for invisible Alert', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SET_TEXT_INVISIBLE_ALERT)
            .click(SET_TEXT_INVISIBLE_BUTTON_ALERT)
            .click(SHOW_TEXT_INVISIBLE_BUTTON_ALERT)
            .verifyElementDisplayed(SET_TEXT_INVISIBLE_ALERT)
            .verifyText(SET_TEXT_INVISIBLE_ALERT, 'Alert after set text')
    });

    it('[Alert-23] Verify can set success type for Alert', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
            .click(SET_SUCCESS_TYPE_BUTTON_ALERT)
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-success')
            .click(SET_ERROR_TYPE_BUTTON_ALERT)
            .verifyAttribute(SET_TYPE_ALERT, 'class', 'kuc-alert bg-danger')
    });

    it('[Alert-24] Verify can set type for invisible Alert', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SET_TYPE_INVISIBLE_ALERT)
            .click(SET_TYPE_INVISIBLE_BUTTON_ALERT)
            .click(SHOW_TYPE_INVISIBLE_BUTTON_ALERT)
            .verifyElementDisplayed(SET_TYPE_INVISIBLE_ALERT)
            .verifyAttribute(SET_TYPE_INVISIBLE_ALERT, 'class', 'kuc-alert bg-success')
    });

    it('[Alert-27] Verify that can show invisible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(INVISIBLE_SHOW_ALERT)
            .verifyElementDisplayed(VISIBLE_SHOW_ALERT)
            .click(SHOW_BUTTON_ALERT)
            .verifyElementDisplayed(INVISIBLE_SHOW_ALERT)
            .verifyElementDisplayed(VISIBLE_SHOW_ALERT)
    });

    it('[Alert-29] Verify that can hide the visible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(VISIBLE_HIDE_ALERT)
            .verifyElementNotDisplayed(INVISIBLE_HIDE_ALERT)
            .click(HIDE_BUTTON_ALERT)
            .verifyElementNotDisplayed(VISIBLE_HIDE_ALERT)
            .verifyElementNotDisplayed(INVISIBLE_HIDE_ALERT)
    });

    it('[Alert-35] Verify that can register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_FUNCTION_ALERT)
            .verifyAlertText('onCallBackFunctionAlert has been clicked')
    });

    it('[Alert-36] Verify that the callback function will be trigger when click on the Alert', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_TRIGGER_ALERT)
            .verifyAlertText('onCallBackTriggerAlert has been clicked')
    });
});