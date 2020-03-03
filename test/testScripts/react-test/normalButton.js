const Helper = require('../../helper/main.js')

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
    it('[Normal button-2] Normal button should has white for background color and blue for text color', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_BUTTON_NORMAL)
            .verifyElementColor(XPATH_BUTTON_NORMAL, 'background-color', '#f7f9fa')
            .verifyElementColor(XPATH_BUTTON_NORMAL, 'color', '#3498db')
    });

    it('[Normal button-6] Verify that can create a button with full options value contains default value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_BUTTON_NORMAL, 'normalButton')
            .verifyAttribute(XPATH_BUTTON_NORMAL, 'class', 'kuc-btn normal')
            .verifyElementEnabled(XPATH_BUTTON_NORMAL)
            .verifyElementDisplayed(XPATH_BUTTON_NORMAL)
    });

    it('[Normal button-16] Verify can set text for button which contains existing text', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_CHANGE_TEXT)
            .verifyText(XPATH_BUTTON_SET_TEXT, 'Button changed text')
    });

    it('[Normal button-20] Verify can set normal type for button', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_CHANGE_NORMAL_TYPE)
            .verifyAttribute(XPATH_BUTTON_NORMAL_TYPE, 'class', 'kuc-btn normal')
    });

    it('[Normal button-21] Verify can set submit type for button', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_CHANGE_SUBMIT_TYPE)
            .verifyAttribute(XPATH_BUTTON_SUBMIT_TYPE, 'class', 'kuc-btn submit')
    });

    it('[Normal button-25] Verify that can show invisible Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_INVISIBLE_BUTTON_SHOW)
            .verifyElementDisplayed(XPATH_INVISIBLE_BUTTON_DISPLAYED)
    });

    it('[Normal button-27] Verify that can hide the visible Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_VISIBLE_BUTTON_HIDE)
            .verifyElementNotDisplayed(XPATH_VISIBLE_BUTTON_NON_DISLAYED)
    });

    it('[Normal button-29] Verify that can disable the current enable Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_ENABLE_BUTTON_DISABLE)
            .verifyElementDisabled(XPATH_ENABLE_BUTTON_UNCLICKABLE)
    });

    it('[Normal button-31] Verify that can enable the disabled Button on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DISABLE_BUTTON_ENABLE)
            .verifyElementEnabled(XPATH_DISABLE_BUTTON_CLICKABLE)
    });

    it('[Normal button-33] Verify that can register a callback function for click event successfully', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_ON_CALL_CLICK)
            .verifyAlertText('normalButton_onCall has been clicked')
    });

    it('[Normal button-34] Verify that the callback function will be trigger when click on the button', function () {
        Helper.ElementHandler
            .click(XPATH_BUTTON_ON_TRIGGER)
            .verifyAlertText('normalButton_onTrigger has been clicked')
    });
});