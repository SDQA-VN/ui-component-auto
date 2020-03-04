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
    it('[Label-2] Verify that the Label have the UI is the same as Label on kintone', function () {
        Helper.ElementHandler
            .verifyElementSize(UI, 45, 17)
            .verifyElementColor(UI, 'color', '#333333')
    });

    it('[Label-4] Verify that can create a label without any options value', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(NO_OPTION_LABEL)
    });

    it('[Label-5] Verify that can create a label with full options value', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(FULL_OPTION_LABEL)
            .verifyElementNotExisting(FULL_OPTION_LABEL + "//span[@class='kuc-require']")
            .verifyElementEnabled(FULL_OPTION_LABEL)
            .verifyText(FULL_OPTION_LABEL, 'full option Label')
    });

    it('[Label-6] Verify that can create a label with only option.Text', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(ONLY_TEXT_LABEL)
            .verifyText(ONLY_TEXT_LABEL, 'only options.Text Label')
    });

    it('[Label-9] Verify that can create a label with only option.isRequired is True', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_REQUIRED_LABEL)
            .verifyText(ONLY_REQUIRED_LABEL, '*')
    });

    it('[Label-10] Verify that can create a label with only option.isRequired is False', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(ONLY_REQUIRED_LABEL_1)
    });

    it('[Label-13] Verify that can create a label with only option.isVisibled is True', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(ONLY_VISIBLE_LABEL)
    });

    it('[Label-14] Verify that can create a label with only option.isVisibled is False', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(ONLY_VISIBLE_LABEL_1)
    });

    it('[Label-22] Verify can set text for label which contains existing text', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_LABEL, '')
            .click(SET_TEXT_BUTTON_LABEL)
            .verifyText(SET_TEXT_LABEL, 'Set text for label not contain existing text')
            .click(SET_TEXT_BUTTON_1_LABEL)
            .verifyText(SET_TEXT_LABEL, 'Set text for label contain existing text')
    });

    it('[Label-23] Verify that can set text with XSS value', function () {
        Helper.ElementHandler
            .verifyText(SET_XSS_VALUE_LABEL, 'Set XSS Value for Label')
            .click(SET_XSS_BUTTON_LABEL)
            .verifyText(SET_XSS_VALUE_LABEL, "alert('XSS Attack');")
    });

    it('[Label-24] Verify that can set text for for invisible Label', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SET_TEXT_INVISIBLE_LABEL)
            .click(SET_TEXT_INVISIBLE_BUTTON_LABEL)
            .click(SHOW_TEXT_INVISIBLE_BUTTON_LABEL)
            .verifyElementDisplayed(SET_TEXT_INVISIBLE_LABEL)
            .verifyText(SET_TEXT_INVISIBLE_LABEL, 'Set text with invisible label')
    });

    it('[Label-25] Verify that can set the current text to blank', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_BLANK_LABEL, 'Set text to blank')
            .click(SET_TEXT_BLANK_BUTTON_LABEL)
            .verifyText(SET_TEXT_BLANK_LABEL, '')
    });

    it('[Label-26] Verify can set the value when using function without parameter', function () {
        Helper.ElementHandler
            .verifyText(SET_TEXT_NO_PARAM_LABEL, 'Set text with no parameter for Label')
            .click(SET_TEXT_NO_PARAM_BUTTON_LABEL)
            .verifyText(SET_TEXT_NO_PARAM_LABEL, '')
    });

    it('[Label-28] Verity can hidden the required icon for exisiting required label when using setRequired(false)', function () {
        Helper.ElementHandler
            .verifyElementExisting(SET_FALSE_REQUIRED_LABEL)
            .click(SET_FALSE_REQUIRED_BUTTON_LABEL)
            .verifyElementNotExisting(SET_FALSE_REQUIRED_LABEL)
    });

    it('[Label-27] Verify can set the required icon for label with require is true', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_TRUE_REQUIRED_LABEL)
            .click(SET_TRUE_REQUIRED_BUTTON_LABEL)
            .verifyElementExisting(SET_TRUE_REQUIRED_LABEL)
            .verifyText(SET_TRUE_REQUIRED_LABEL, '*')
            .verifyElementColor(SET_TRUE_REQUIRED_LABEL, 'color', '#e74c3c')
    });

    it('[Label-30] Verify can set required lable for invisible label', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_REQUIRED_INVISIBLE_LABEL)
            .verifyElementNotDisplayed(SET_REQUIRED_INVISIBLE_LABEL)
            .click(SET_REQUIRED_BUTTON_INVISIBLE_LABEL)
            .verifyElementExisting(SET_REQUIRED_INVISIBLE_LABEL)
    });

    it('[Label-31] Verify can set the required label when using function without parameter', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(SET_REQUIRED_NO_PARAM_LABEL)
            .click(SET_REQUIRED_NO_PARAM_BUTTON_LABEL)
            .verifyElementNotExisting(SET_REQUIRED_NO_PARAM_LABEL)
    });

    it('[Label-33] Verify that can show invisible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(INVISIBLE_SHOW_LABEL)
            .verifyElementDisplayed(VISIBLE_SHOW_LABEL)
            .click(SHOW_BUTTON_LABEL)
            .verifyElementDisplayed(INVISIBLE_SHOW_LABEL)
            .verifyElementDisplayed(VISIBLE_SHOW_LABEL)
    });

    it('[Label-35] Verify that can hide the visible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(VISIBLE_HIDE_LABEL)
            .verifyElementNotDisplayed(INVISIBLE_HIDE_LABEL)
            .click(HIDE_BUTTON_LABEL)
            .verifyElementNotDisplayed(VISIBLE_HIDE_LABEL)
            .verifyElementNotDisplayed(INVISIBLE_HIDE_LABEL)
    });

    it('[Label-41] Verify that can register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_FUNCTION_LABEL)
            .verifyAlertText('onFunctionLabel has been clicked')
    });

    it('[Label-42] Verify that the callback function will be trigger when click on the label', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_TRIGGER_LABEL)
            .verifyAlertText('onTriggerLabel has been clicked')
    });
});