const Helper = require('../../helper/main.js')

const XPATH_BUTTON_SUBMIT = '#submitButton .kuc-btn';
const XPATH_BUTTON_SET_TEXT = '#submitButton_setText .kuc-btn';
const XPATH_BUTTON_CHANGE_TEXT = '#submitButton_setText #change-text';
const XPATH_BUTTON_SUBMIT_TYPE = '#submitButton_setSubmitType .kuc-btn';
const XPATH_BUTTON_CHANGE_SUBMIT_TYPE = '#submitButton_setSubmitType #change-type';
const XPATH_BUTTON_NORMAL_TYPE = '#submitButton_setNormalType .kuc-btn';
const XPATH_BUTTON_CHANGE_NORMAL_TYPE = '#submitButton_setNormalType #change-type';
const XPATH_INVISIBLE_BUTTON_SHOW = '#submitButton_showInvisible #show-button';
const XPATH_INVISIBLE_BUTTON_DISPLAYED = '#submitButton_showInvisible .kuc-btn';
const XPATH_VISIBLE_BUTTON_HIDE = '#submitButton_hideVisible #hide-button';
const XPATH_VISIBLE_BUTTON_NON_DISLAYED = '#submitButton_hideVisible .kuc-btn';
const XPATH_ENABLE_BUTTON_DISABLE = '#submitButton_disable #disable-button';
const XPATH_ENABLE_BUTTON_UNCLICKABLE = '#submitButton_disable .kuc-btn';
const XPATH_DISABLE_BUTTON_ENABLE = '#submitButton_enable #enable-button';
const XPATH_DISABLE_BUTTON_CLICKABLE = '#submitButton_enable .kuc-btn';
const XPATH_BUTTON_ON_CALL_CLICK = '#submitButton_onCall .kuc-btn';
const XPATH_BUTTON_ON_TRIGGER = '#submitButton_onTrigger .kuc-btn';

describe('kintoneUIComponent - Button', function () {
    it('[Submit button-3] Verify that the Submit button have the UI is the same as button on kintone', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_BUTTON_SUBMIT)
            .verifyElementColor(XPATH_BUTTON_SUBMIT, 'background-color', '#3498db')
            .verifyElementColor(XPATH_BUTTON_SUBMIT, 'color', '#ffffff')
    });

    it('[Submit button-6] Verify that can create a button with full options value contains default value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_BUTTON_SUBMIT, 'submitButton')
            .verifyAttribute(XPATH_BUTTON_SUBMIT, 'class', 'kuc-btn submit')
            .verifyElementDisplayed(XPATH_BUTTON_SUBMIT)
            .verifyElementEnabled(XPATH_BUTTON_SUBMIT)
    });

    it('[Submit button-16] Verify can set text for button which contains existing text', function () {
        Helper.ElementHandler
            .verifyText(XPATH_BUTTON_SET_TEXT, 'submitButton_setText')
            .click(XPATH_BUTTON_CHANGE_TEXT)
            .verifyText(XPATH_BUTTON_SET_TEXT, 'Button changed text')
            .verifyAttribute(XPATH_BUTTON_SET_TEXT, 'class', 'kuc-btn submit')
            .verifyElementDisplayed(XPATH_BUTTON_SET_TEXT)
            .verifyElementEnabled(XPATH_BUTTON_SET_TEXT)
    });

    it('[Submit button-20] Verify can set normal type for button', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_BUTTON_NORMAL_TYPE, 'class', 'kuc-btn submit')
            .click(XPATH_BUTTON_CHANGE_NORMAL_TYPE)
            .verifyAttribute(XPATH_BUTTON_NORMAL_TYPE, 'class', 'kuc-btn normal')
    });

    it('[Submit button-21] Verify can set submit type for button', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_BUTTON_SUBMIT_TYPE, 'class', 'kuc-btn submit')
            .click(XPATH_BUTTON_CHANGE_SUBMIT_TYPE)
            .verifyAttribute(XPATH_BUTTON_SUBMIT_TYPE, 'class', 'kuc-btn submit')
    });

    it('[Submit button-25] Verify that can show invisible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_INVISIBLE_BUTTON_DISPLAYED)
            .click(XPATH_INVISIBLE_BUTTON_SHOW)
            .verifyElementDisplayed(XPATH_INVISIBLE_BUTTON_DISPLAYED)
    });

    it('[Submit button-27] Verify that can hide the visible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_VISIBLE_BUTTON_NON_DISLAYED)
            .click(XPATH_VISIBLE_BUTTON_HIDE)
            .verifyElementNotDisplayed(XPATH_VISIBLE_BUTTON_NON_DISLAYED)
    });

    it('[Submit button-29] Verify that can disable the current enable Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_ENABLE_BUTTON_DISABLE)
            .verifyElementDisabled(XPATH_ENABLE_BUTTON_UNCLICKABLE)
    });

    it('[Submit button-31] Verify that can enable the disabled Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DISABLE_BUTTON_ENABLE)
            .verifyElementEnabled(XPATH_DISABLE_BUTTON_CLICKABLE)
    });

    it('[Submit button-33] Verify that can register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_ON_CALL_CLICK)
            .verifyAlertText('submitButton_onCall has been clicked')
    });

    it('[Submit button-34] Verify that the callback function will be trigger when click on the button', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_ON_TRIGGER)
            .verifyAlertText('submitButton_onTrigger has been clicked')
    });
});