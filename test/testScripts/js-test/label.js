const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const UI = "//span[contains(text(), 'UILabel')]";
const FULL_OPTION_LABEL = "//div[@id='full-option-label']//div[@class='kuc-label']";
const SET_TEXT_LABEL = "//div[@id='set-text-label']//span";
const SET_TEXT_BUTTON_LABEL = "//button[contains(text(),'Set text for label not contain existing text')]";
const SET_TEXT_BUTTON_1_LABEL = "//button[contains(text(),'Set text for label contain existing text')]";
const SET_FALSE_REQUIRED_LABEL = "//div[@id='set-false-required-label']//span[@class='kuc-require']";
const SET_FALSE_REQUIRED_BUTTON_LABEL = "//button[contains(text(),'Set False for the current required Label')]";
const SET_TRUE_REQUIRED_LABEL = "//div[@id='set-true-required-label']//span[@class='kuc-require']";
const SET_TRUE_REQUIRED_BUTTON_LABEL = "//button[contains(text(),'Set True for the current unrequired Label')]";
const VISIBLE_SHOW_LABEL = "//div[@id='show-visible-label']//span";
const INVISIBLE_SHOW_LABEL = "//div[@id='show-invisible-label']//span";
const SHOW_BUTTON_LABEL = "//button[contains(text(),'Show Label')]";
const VISIBLE_HIDE_LABEL = "//div[@id='hide-visible-label']//span";
const INVISIBLE_HIDE_LABEL = "//div[@id='hide-invisible-label']//span";
const HIDE_BUTTON_LABEL = "//button[contains(text(), 'Hide Label')]";
const ON_CALLBACK_FUNCTION_LABEL = "//span[contains(text(), 'onFunctionLabel')]";
const ON_CALLBACK_TRIGGER_LABEL = "//span[contains(text(), 'onTriggerLabel')]";
const NO_OPTION_LABEL = "//div[@id='no-option-label']//div[@class='kuc-label']";
const ONLY_TEXT_LABEL = "//span[contains(text(),'only options.Text Label')]";
const ONLY_REQUIRED_LABEL = "//div[@id='only-isRequired-label-true']//span[@class='kuc-require']";
const ONLY_REQUIRED_LABEL_1 = "//div[@id='only-isRequired-label-false']//span[@class='kuc-require']";
const ONLY_VISIBLE_LABEL = "//div[@id='only-isVisibled-label-true']";
const ONLY_VISIBLE_LABEL_1 = "//div[@id='only-isVisibled-label-false']";
const SET_XSS_VALUE_LABEL = "//div[@id='set-XSS-value-label']//div[@class='kuc-label']";
const SET_XSS_BUTTON_LABEL = "//button[contains(text(),'Set text with XSS value')]";
const SET_TEXT_INVISIBLE_LABEL = "//div[@id='set-text-invisible-label']//div[@class='kuc-label']";
const SET_TEXT_INVISIBLE_BUTTON_LABEL = "//button[contains(text(),'Set text with invisible Label')]";
const SHOW_TEXT_INVISIBLE_BUTTON_LABEL = "//button[contains(text(),'Show text invisible')]";
const SET_TEXT_BLANK_LABEL = "//div[@id='set-text-blank-label']//div[@class='kuc-label']";
const SET_TEXT_BLANK_BUTTON_LABEL = "//button[contains(text(),'Set text to blank')]";
const SET_TEXT_NO_PARAM_LABEL = "//div[@id='set-text-no-param-label']//div[@class='kuc-label']";
const SET_TEXT_NO_PARAM_BUTTON_LABEL = "//button[contains(text(),'Set text with no parameter for Label')]";
const SET_REQUIRED_INVISIBLE_LABEL = "//div[@id='set-required-invisible-label']//span[@class='kuc-require']";
const SET_REQUIRED_BUTTON_INVISIBLE_LABEL = "//button[contains(text(),'Set required for invisible label')]";
const SET_REQUIRED_NO_PARAM_LABEL = "//div[@id='set-required-no-param-label']//span[@class='kuc-require']";
const SET_REQUIRED_NO_PARAM_BUTTON_LABEL = "//button[contains(text(),'Set required without parameter for label')]";

describe('kintoneUIComponent - Label', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Label-2] should Verify that the Label have the UI is the same as Label on kintone - color, - size ( width + height)', function () {
        Helper.ElementHandler
            .verifyElementSize(UI, 45, 17)
            .verifyElementColor(UI, 'color', '#333333')
    });

    it('[Label-4] should verify that can create a label without any options value', function () {
        Helper.ElementHandler
            .verifyElementVisible(NO_OPTION_LABEL)
    });

    it('[Label-3-5] should verify that the Label object contains the the below attibutes and can create a label with full options value', function () {
        Helper.ElementHandler
            .verifyElementVisible(FULL_OPTION_LABEL)
            .verifyElementNotExisting(FULL_OPTION_LABEL + "//span[@class='kuc-require']")
            .verifyElementEnabled(FULL_OPTION_LABEL)
            .verifyText(FULL_OPTION_LABEL, 'full option Label')
    });

    it('[Label-6] should verify that can create a label with only option.Text', function () {
        Helper.ElementHandler
            .verifyElementVisible(ONLY_TEXT_LABEL)
            .verifyText(ONLY_TEXT_LABEL, 'only options.Text Label')
    });

    it('[Label-7] should verify that can create a label with only option.isRequired is True', function () {
        Helper.ElementHandler
            .waitForElementExit(ONLY_REQUIRED_LABEL)
            .verifyText(ONLY_REQUIRED_LABEL, '*')
    });

    it('[Label-8] should verify that can create a label with only option.isRequired is False', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(ONLY_REQUIRED_LABEL_1)
    });

    it('[Label-11] should verify that can create a label with only option.isVisibled is True', function () {
        Helper.ElementHandler
            .verifyElementVisible(ONLY_VISIBLE_LABEL)
    });

    it('[Label-12] should verify that can create a label with only option.isVisibled is False', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(ONLY_VISIBLE_LABEL_1)
    });

    it('[Label-15-16] should set text for label which not contain existing text and contain existing text', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_LABEL, '')
            .click(SET_TEXT_BUTTON_LABEL)
            .verifyText(SET_TEXT_LABEL, 'Set text for label not contain existing text')
            .click(SET_TEXT_BUTTON_1_LABEL)
            .verifyText(SET_TEXT_LABEL, 'Set text for label contain existing text')
    });

    it('[Label-17] should set text for label with XSS value', function () {
        Helper.ElementHandler
            .verifyText(SET_XSS_VALUE_LABEL, 'Set XSS Value for Label')
            .click(SET_XSS_BUTTON_LABEL)
            .verifyText(SET_XSS_VALUE_LABEL, "alert('XSS Attack');")
    });

    it('[Label-18] should set text for invisible label', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SET_TEXT_INVISIBLE_LABEL)
            .click(SET_TEXT_INVISIBLE_BUTTON_LABEL)
            .click(SHOW_TEXT_INVISIBLE_BUTTON_LABEL)
            .verifyElementVisible(SET_TEXT_INVISIBLE_LABEL)
            .verifyText(SET_TEXT_INVISIBLE_LABEL, 'Set text with invisible label')
    });

    it('[Label-19] should set text label to blank ', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_BLANK_LABEL, 'Set text to blank')
            .click(SET_TEXT_BLANK_BUTTON_LABEL)
            .verifyText(SET_TEXT_BLANK_LABEL, '')
    });

    it('[Label-20] should set text without parameter ', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_NO_PARAM_LABEL, 'Set text with no parameter for Label')
            .click(SET_TEXT_NO_PARAM_BUTTON_LABEL)
            .verifyText(SET_TEXT_NO_PARAM_LABEL, '')
    });

    it('[Label-22] should hidden the required icon for exisiting required label when using setRequired(false)', function () {
        Helper.ElementHandler
            .verifyElementExisting(SET_FALSE_REQUIRED_LABEL)
            .click(SET_FALSE_REQUIRED_BUTTON_LABEL)
            .verifyElementNotExisting(SET_FALSE_REQUIRED_LABEL)
    });

    it('[Label-21-23] should set the required label when using setRequired(true) for the existing required label', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_TRUE_REQUIRED_LABEL)
            .click(SET_TRUE_REQUIRED_BUTTON_LABEL)
            .verifyElementExisting(SET_TRUE_REQUIRED_LABEL)
            .verifyText(SET_TRUE_REQUIRED_LABEL, '*')
            .verifyElementColor(SET_TRUE_REQUIRED_LABEL, 'color', '#e74c3c')
    });

    it('[Label-24] should set required for invisible label ', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_REQUIRED_INVISIBLE_LABEL)
            .verifyElementNotVisible(SET_REQUIRED_INVISIBLE_LABEL)
            .click(SET_REQUIRED_BUTTON_INVISIBLE_LABEL)
            .verifyElementExisting(SET_REQUIRED_INVISIBLE_LABEL)
    });

    it('[Label-25] should set required without parameter for label ', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_REQUIRED_NO_PARAM_LABEL)
            .click(SET_REQUIRED_NO_PARAM_BUTTON_LABEL)
            .verifyElementNotExisting(SET_REQUIRED_NO_PARAM_LABEL)
    });

    it('[Label-28] should show invisible Label and visible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(INVISIBLE_SHOW_LABEL)
            .verifyElementVisible(VISIBLE_SHOW_LABEL)
            .click(SHOW_BUTTON_LABEL)
            .verifyElementVisible(INVISIBLE_SHOW_LABEL)
            .verifyElementVisible(VISIBLE_SHOW_LABEL)
    });

    it('[Label-30] should hide the visible Label and invisible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(VISIBLE_HIDE_LABEL)
            .verifyElementNotVisible(INVISIBLE_HIDE_LABEL)
            .click(HIDE_BUTTON_LABEL)
            .verifyElementNotVisible(VISIBLE_HIDE_LABEL)
            .verifyElementNotVisible(INVISIBLE_HIDE_LABEL)
    });

    it('[Label-36] should register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_FUNCTION_LABEL)
            .verifyAlertText('onFunctionLabel has been clicked')
    });

    it('[Label-37] should verify that the callback function will be trigger when click on the textbox', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_TRIGGER_LABEL)
            .verifyAlertText('onTriggerLabel has been clicked')
    });
});