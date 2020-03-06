const Helper = require('../../helper/main.js')

const XPATH_NOTIFY_SUCCESS = '.notifySuccess-render .kuc-notify';
const XPATH_NOTIFY_SUCCESS_SHOW = '.notifySuccess-render .notify-show';
const XPATH_NOTIFY_SUCCESS_CLOSE = '.notifySuccess-render .kuc-close-button';
const XPATH_NOTIFY_ERROR = '.notifyError-render .kuc-notify';
const XPATH_NOTIFY_ERROR_SHOW = '.notifyError-render .notify-show';
const XPATH_NOTIFY_ERROR_CLOSE = '.notifyError-render .kuc-close-button';
const XPATH_NOTIFY_WITHOUT_OPTION = '.notify-withoutOption .kuc-notify';
const XPATH_NOTIFY_WITHOUT_OPTION_SHOW = '.notify-withoutOption .notify-show';
const XPATH_NOTIFY_WITHOUT_OPTION_CLOSE = '.notify-withoutOption .kuc-close-button';
const XPATH_NOTIFY_SET_TEXT_VALUE = '.notify-setText .kuc-notify .kuc-notify-title';
const XPATH_NOTIFY_SET_TEXT_SHOW = '.notify-setText .notify-show';
const XPATH_NOTIFY_SET_TEXT_BUTTON = '.notify-setText .set-text';
const XPATH_NOTIFY_SET_TEXT_CLOSE = '.notify-setText .kuc-close-button';
const XPATH_NOTIFY_SET_TEXT_BLANK_VALUE = '.notify-setTextBlank .kuc-notify .kuc-notify-title';
const XPATH_NOTIFY_SET_TEXT_BLANK_SHOW = '.notify-setTextBlank .notify-show';
const XPATH_NOTIFY_SET_TEXT_BLANK_BUTTON = '.notify-setTextBlank .set-text';
const XPATH_NOTIFY_SET_TEXT_BLANK_CLOSE = '.notify-setTextBlank .kuc-close-button';
const XPATH_NOTIFY_SET_TYPE_VALUE = '.notify-setType .kuc-notify';
const XPATH_NOTIFY_SET_TYPE_SHOW = '.notify-setType .notify-show';
const XPATH_NOTIFY_SET_TYPE_BUTTON = '.notify-setType .set-type';
const XPATH_NOTIFY_SET_TYPE_CLOSE = '.notify-setType .kuc-close-button';
const XPATH_NOTIFY_SET_HIDE_VALUE = '.notify-hide .kuc-notify';
const XPATH_NOTIFY_SET_HIDE_SHOW = '.notify-hide .notify-show';
const XPATH_NOTIFY_SET_HIDE_BUTTON = '.notify-hide .notify-hide';
const XPATH_NOTIFY_ON_CALL = '.notify-onCall .kuc-notify';
const XPATH_NOTIFY_ON_CALL_SHOW = '.notify-onCall .notify-show';
const XPATH_NOTIFY_ON_CALL_CLOSE = '.notify-onCall .kuc-close-button';


describe('kintoneUIComponent - Button', function () {
    it('[Notify-2] Verify that the Success NotifyPopup have the  UI is the same as NotifyPopup on kintone', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SUCCESS_SHOW)
            .verifyElementColor(XPATH_NOTIFY_SUCCESS, 'background', '#91c36c')
            .verifyElementPosition(XPATH_NOTIFY_SUCCESS, 'position', 'fixed')
            .verifyElementSize(XPATH_NOTIFY_SUCCESS, 215, 70)
            .click(XPATH_NOTIFY_SUCCESS_CLOSE)
    });
    it('[Notify-3] Verify that the Error NotifyPopup have the UI is the same as NotifyPopup on kintone', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_ERROR_SHOW)
            .verifyElementColor(XPATH_NOTIFY_ERROR, 'background', '#e74c3c')
            .verifyElementPosition(XPATH_NOTIFY_ERROR, 'position', 'fixed')
            .verifyElementSize(XPATH_NOTIFY_ERROR, 170, 70)
            .click(XPATH_NOTIFY_ERROR_CLOSE)
    });
    it('[Notify-5] Verify that when user click on the close icon, the popup will disappear', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_ERROR_SHOW)
            .verifyElementDisplayed(XPATH_NOTIFY_ERROR)
            .click(XPATH_NOTIFY_ERROR_CLOSE)
            .verifyElementNotDisplayed(XPATH_NOTIFY_ERROR)
            .verifyElementNotExisting(XPATH_NOTIFY_ERROR)
    });
    it('[Notify-6] Verify that can create a NotifyPopup without any options value', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_WITHOUT_OPTION_SHOW)
            .verifyElementDisplayed(XPATH_NOTIFY_WITHOUT_OPTION)
            .verifyAttribute(XPATH_NOTIFY_WITHOUT_OPTION, 'class', 'bg-danger')
            .click(XPATH_NOTIFY_WITHOUT_OPTION_CLOSE)
    });
    it('[Notify-17] Verify can set text for NotifyPopup which not contains existing text', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SET_TEXT_SHOW)
            .verifyText(XPATH_NOTIFY_SET_TEXT_VALUE, '')
            .click(XPATH_NOTIFY_SET_TEXT_BUTTON)
            .verifyText(XPATH_NOTIFY_SET_TEXT_VALUE, 'Error change text')
            .click(XPATH_NOTIFY_SET_TEXT_CLOSE)
    });
    it('[Notify-22] Verify that can set text for invisible NotifyPopup', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SET_TEXT_BUTTON)
            .click(XPATH_NOTIFY_SET_TEXT_SHOW)
            .verifyText(XPATH_NOTIFY_SET_TEXT_VALUE, 'Error change text')
            .click(XPATH_NOTIFY_SET_TEXT_CLOSE)
    });
    it('[Notify-23] Verify that can set the current text to blank', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SET_TEXT_BLANK_SHOW)
            .verifyText(XPATH_NOTIFY_SET_TEXT_BLANK_VALUE, 'Error text')
            .click(XPATH_NOTIFY_SET_TEXT_BLANK_BUTTON)
            .verifyText(XPATH_NOTIFY_SET_TEXT_BLANK_VALUE, '')
            .click(XPATH_NOTIFY_SET_TEXT_BLANK_CLOSE)
    });
    it('[Notify-25] Verify can set error type for NotifyPopup', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SET_TYPE_SHOW)
            .verifyElementDisplayed(XPATH_NOTIFY_SET_TYPE_VALUE)
            .verifyAttribute(XPATH_NOTIFY_SET_TYPE_VALUE, 'class', 'bg-success')
            .click(XPATH_NOTIFY_SET_TYPE_BUTTON)
            .verifyAttribute(XPATH_NOTIFY_SET_TYPE_VALUE, 'class', 'bg-danger')
            .click(XPATH_NOTIFY_SET_TYPE_CLOSE)
    });
    it('[Notify-34] Verify that can hide the visible NotifyPopup on UI', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_SET_HIDE_SHOW)
            .verifyElementDisplayed(XPATH_NOTIFY_SET_HIDE_VALUE)
            .click(XPATH_NOTIFY_SET_HIDE_BUTTON)
            .verifyElementNotDisplayed(XPATH_NOTIFY_SET_HIDE_VALUE)
            .verifyElementNotExisting(XPATH_NOTIFY_SET_HIDE_VALUE)
    });
    it('[Notify-41] Verify that the callback function will be triggered when clicking on that NotifyPopup', function () {
        Helper.ElementHandler
            .click(XPATH_NOTIFY_ON_CALL_SHOW)
            .click(XPATH_NOTIFY_ON_CALL)
            .verifyAlertText('Notify popup has been clicked')
            .click(XPATH_NOTIFY_ON_CALL_CLOSE)
    });
});