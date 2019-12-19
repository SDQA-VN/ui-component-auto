const common = require('../../utils/common');
const Helper = require('../../helper/main');

const FULL_OPTIONS_NOTIFY = "//div[@id='full-option-notifypopup']//div[@class='kuc-notify bg-danger']";
const FULL_OPTIONS_NOTIFY_SHOW_BUTTON = "//button[text()='Show Notify Full Option']";
const FULL_OPTIONS_NOTIFY_CLOSE_BUTTON = "//div[@id='full-option-notifypopup']//div[@class='kuc-close-button']//button";

const NO_OPTIONS_NOTIFY_SHOW_BUTTON = "//button[text()='Show Notify Without Options']";
const NO_OPTIONS_NOTIFY_HIDE_BUTTON = "//button[text()='Hide Notify Without Options']";
const NO_OPTIONS_NOTIFY = "//div[@id='no-option-notifypopup']//div[contains(@class,'kuc-notify')]";
const NO_OPTIONS_NOTIFY_SET_TEXT_NULL_BUTTON = "//button[text()='Set Text Null Notify']";
const NO_OPTIONS_NOTIFY_SET_TEXT_BUTTON = "//button[text()='Set Text Notify']";
const NO_OPTIONS_NOTIFY_SET_TYPE_BUTTON = "//button[text()='Set Type Notify']";
const NO_OPTIONS_NOTIFY_TYPE_SUCCESS = "//div[@id='no-option-notifypopup']//div[@class='kuc-notify bg-success']";
const NO_OPTIONS_NOTIFY_TITLE = "//div[@id='no-option-notifypopup']//div[@class='kuc-notify-title']";
const NO_OPTIONS_NOTIFY_CLOSE_BUTTON = "//div[@id='no-option-notifypopup']//div[@class='kuc-close-button']//button";

const ON_TRIGGER_NOTIFY = "//div[@id='on-callback-trigger-notifypopup']//div[contains(@class,'kuc-notify')]";
const ON_TRIGGER_NOTIFY_SHOW_BUTTON = "//button[text()='Show Notify On Trigger']"
const ON_TRIGGER_NOTIFY_CLOSE_BUTTON = "//div[@id='on-callback-trigger-notifypopup']//div[@class='kuc-close-button']//button"

describe('kintoneUIComponent - Notify Popup', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Notify-2] should verify success notify', function () {
        Helper.ElementHandler
            .click(ON_TRIGGER_NOTIFY_SHOW_BUTTON)
            .verifyElementColor(ON_TRIGGER_NOTIFY, 'background', '#91c36c')
            .verifyElementSize(ON_TRIGGER_NOTIFY, 241, 70)
            .click(ON_TRIGGER_NOTIFY_CLOSE_BUTTON)
    });

    it('[Notify-3] should verify error notify', function () {
        Helper.ElementHandler
            .click(FULL_OPTIONS_NOTIFY_SHOW_BUTTON)
            .verifyElementColor(FULL_OPTIONS_NOTIFY, 'background', '#e74c3c')
            .verifyElementSize(FULL_OPTIONS_NOTIFY, 243, 70)
            .click(FULL_OPTIONS_NOTIFY_CLOSE_BUTTON)
    });

    it('[Notify-5] should close notify', function () {
        Helper.ElementHandler
            .click(FULL_OPTIONS_NOTIFY_SHOW_BUTTON)
            .click(FULL_OPTIONS_NOTIFY_CLOSE_BUTTON)
            .verifyElementNotVisible(FULL_OPTIONS_NOTIFY)
    });

    it('[Notify-6] should create a NotifyPopup without any options value', function () {
        Helper.ElementHandler
            .click(NO_OPTIONS_NOTIFY_SHOW_BUTTON)
            .waitForElement(NO_OPTIONS_NOTIFY)
            .verifyElementVisible(NO_OPTIONS_NOTIFY)
            .click(NO_OPTIONS_NOTIFY_CLOSE_BUTTON)
    });

    it('[Notify-17-22-23] should set text for notify', function () {
        Helper.ElementHandler
            .click(NO_OPTIONS_NOTIFY_SHOW_BUTTON)
            .click(NO_OPTIONS_NOTIFY_SET_TEXT_NULL_BUTTON)
            .verifyText(NO_OPTIONS_NOTIFY_TITLE, '')

            .click(NO_OPTIONS_NOTIFY_SHOW_BUTTON)
            .click(NO_OPTIONS_NOTIFY_SET_TEXT_BUTTON)
            .verifyText(NO_OPTIONS_NOTIFY_TITLE, 'New Text')

            .click(NO_OPTIONS_NOTIFY_HIDE_BUTTON)
            .click(NO_OPTIONS_NOTIFY_SET_TEXT_NULL_BUTTON)
            .verifyText(NO_OPTIONS_NOTIFY_TITLE, '')
    });

    it('[Notify-25] should set type for notify popup', function () {
        Helper.ElementHandler
            .click(NO_OPTIONS_NOTIFY_SET_TYPE_BUTTON)
            .click(NO_OPTIONS_NOTIFY_SHOW_BUTTON)
            .waitForElement(NO_OPTIONS_NOTIFY_TYPE_SUCCESS)
            .verifyElementVisible(NO_OPTIONS_NOTIFY_TYPE_SUCCESS)
            .click(NO_OPTIONS_NOTIFY_CLOSE_BUTTON)
    });

    it('[Notify-34] should hide visible notify on UI', function () {
        Helper.ElementHandler
            .click(NO_OPTIONS_NOTIFY_HIDE_BUTTON)
            .verifyElementNotVisible(NO_OPTIONS_NOTIFY)
    });

    it('[Notify-32] should show invisible notify on UI', function () {
        Helper.ElementHandler
            .click(NO_OPTIONS_NOTIFY_SHOW_BUTTON)
            .waitForElement(NO_OPTIONS_NOTIFY)
            .verifyElementVisible(NO_OPTIONS_NOTIFY)
            .click(NO_OPTIONS_NOTIFY_HIDE_BUTTON)
    });

    it('[Notify-40-41] should callback trigger', function () {
        Helper.ElementHandler
            .click(ON_TRIGGER_NOTIFY_SHOW_BUTTON)
            .click(ON_TRIGGER_NOTIFY)
            .verifyAlertText('on_click_trigger has been clicked')
    });
});