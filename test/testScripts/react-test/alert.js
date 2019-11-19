const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_ALERT_ERROR = '.alert-error .kuc-alert';
const XPATH_ALERT_SUCCESS = '.alert-success .kuc-alert';
const XPATH_ALERT_SET_TEXT_VALUE = '.alert-setText .kuc-alert';
const XPATH_ALERT_SET_TEXT_XSS_VALUE = '.alert-setText-xss .kuc-alert';
const XPATH_ALERT_INVISIBLE_SET_TEXT_VALUE = '.alert-invisible-setText .kuc-alert';
const XPATH_ALERT_SET_TEXT_XSS_BUTTON = '.alert-setText-xss .set-text-xss';
const XPATH_ALERT_INVISIBLE_SET_TEXT_BUTTON = '.alert-invisible-setText .set-text-invisible';
const XPATH_ALERT_INVISIBLE_SHOW_TEXT_BUTTON = '.alert-invisible-setText .show-invisible-alert';
const XPATH_ALERT_SET_TEXT_BUTTON = '.alert-setText .set-text';
const XPATH_ALERT_SET_TEXT_BUTTON_1 = '.alert-setText .set-text-2';
const XPATH_ALERT_SET_ERROR_TYPE_VALUE = '.alert-setErrorType .kuc-alert';
const XPATH_ALERT_SET_ERROR_TYPE_BUTTON = '.alert-setErrorType .set-type';
const XPATH_ALERT_SET_SUCCESS_TYPE_VALUE = '.alert-setSuccessType .kuc-alert';
const XPATH_ALERT_SET_SUCCESS_TYPE_BUTTON = '.alert-setSuccessType .set-type';
const XPATH_ALERT_INVISIBLE_SET_TYPE_VALUE = '.alert-invisible-setType .kuc-alert';
const XPATH_ALERT_INVISIBLE_SET_TYPE_BUTTON = '.alert-invisible-setType .set-type-invisible';
const XPATH_ALERT_INVISIBLE_SHOW_VALUE = '.alert-show-invisible .kuc-alert';
const XPATH_ALERT_INVISIBLE_SHOW_TYPE_BUTTON = '.alert-invisible-setType .show-invisible-type';
const XPATH_ALERT_VISIBLE_SHOW_VALUE = '.alert-show-visible .kuc-alert';
const XPATH_ALERT_INVISIBLE_SHOW_BUTTON = '.alert-show-invisible .show-alert';
const XPATH_ALERT_VISIBLE_SHOW_BUTTON = '.alert-show-visible .show-alert';
const XPATH_ALERT_VISIBLE_HIDE_VALUE = '.alert-visible-hide .kuc-alert';
const XPATH_ALERT_INVISIBLE_HIDE_VALUE = '.alert-invisible-hide .kuc-alert';
const XPATH_ALERT_VISIBLE_NON_DISPLAY_BUTTON = '.alert-visible-hide .hide-alert-visible';
const XPATH_ALERT_INVISIBLE_NON_DISPLAY_BUTTON = '.alert-invisible-hide .hide-alert-invisible';
const XPATH_ALERT_ENABLE_BUTTON = '.alert-enable .enable-enabled-alert';
const XPATH_ALERT_ENABLE_BUTTON_1 = '.alert-enable .enable-disabled-alert';
const XPATH_ALERT_ENABLE_BUTTON_2 = '.alert-enable .show-enable-alert';
const XPATH_ALERT_NO_OPTION = '.alert-no-option .kuc-alert';
const XPATH_ALERT_ONLY_TEXT = '.alert-only-text .kuc-alert';
const XPATH_ALERT_ONLY_TYPE = '.alert-only-type .kuc-alert';
const XPATH_ALERT_ONLY_VISIBLE_VALUE = '.alert-only-isVisible .kuc-alert';
const XPATH_ALERT_SET_ONLY_TYPE_BUTTON = '.alert-only-type .change-only-type';
const XPATH_ALERT_SET_ONLY_DISABLE_BUTTON = '.alert-only-isDisable .change-only-isDisable-true';
const XPATH_ALERT_SET_ONLY_DISABLE_BUTTON_1 = '.alert-only-isDisable .change-only-isDisable-false';
const XPATH_ALERT_SET_ONLY_DISABLE_BUTTON_2 = '.alert-only-isDisable .get-state';
const XPATH_ALERT_SET_ONLY_VISIBLE_BUTTON = '.alert-only-isVisible .change-only-isVisible';
const XPATH_ALERT_ON_CALL_BUTTON = '.alert-onCall .kuc-alert';
const XPATH_ALERT_TRIGGER_ON_CLICK_BUTTON = '.alert_onTrigger .kuc-alert';

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[Alert-2] Verify that the Error Alert have the UI is the same as Alert on kintone', function () {
        let alertColor = $(XPATH_ALERT_SUCCESS).getCssProperty('background');
        let alertHeight = $(XPATH_ALERT_SUCCESS).getCssProperty('height');
        expect(alertColor.parsed.hex).to.equal('#91c36c');
        expect(alertHeight.value).to.equal('24px');
    });
    
    it('[Alert-3] Verify that the Error Alert have the UI is the same as Alert on kintone', function () {
        let alertColor = $(XPATH_ALERT_ERROR).getCssProperty('background');
        let alertHeight = $(XPATH_ALERT_ERROR).getCssProperty('height');
        expect(alertColor.parsed.hex).to.equal('#e74c3c');
        expect(alertHeight.value).to.equal('24px');
    });

    it('[Alert-4-5] Verify that create alert with no option', function () {
        let alertType = browser.getAttribute(XPATH_ALERT_NO_OPTION, 'class');
        let alertVisible = browser.isVisible(XPATH_ALERT_NO_OPTION);
        let alertDisable = browser.isEnabled(XPATH_ALERT_NO_OPTION);
        expect(alertType).to.include('bg-danger');
        expect(alertVisible).to.equal(true);
        expect(alertDisable).to.equal(true);
    });

    it('[Alert-6] Verify that can create a Alert with full options value', function () {
        let alertText = browser.getText(XPATH_ALERT_ERROR);
        let alertVisible = browser.isVisible(XPATH_ALERT_ERROR);
        let alertType = browser.getAttribute(XPATH_ALERT_ERROR, 'class');
        expect(alertText).to.equal('Network error');
        expect(alertVisible).to.equal(true);
        expect(alertType).to.include('bg-danger');
    });

    it('[Alert-7] Verify that create a Alert only with options.text is valid string value', function () {
        let alertText = browser.getText(XPATH_ALERT_ONLY_TEXT);
        let alertVisible = browser.isVisible(XPATH_ALERT_ONLY_TEXT);
        let alertType = browser.getAttribute(XPATH_ALERT_ONLY_TEXT, 'class');
        let alertDisable = browser.isEnabled(XPATH_ALERT_ONLY_TEXT);
        expect(alertText).to.equal('Alert with only text');
        expect(alertVisible).to.equal(true);
        expect(alertType).to.include('bg-danger');
        expect(alertDisable).to.equal(true);
    });

    it('[Alert-10-11] Verify that create a Alert with only option.type are error and success', function () {
        let alertTypeBefore = browser.getAttribute(XPATH_ALERT_ONLY_TYPE, 'class');
        expect(alertTypeBefore).to.include('bg-danger');
        $(XPATH_ALERT_SET_ONLY_TYPE_BUTTON).click();
        let alertTypeAfter = browser.getAttribute(XPATH_ALERT_ONLY_TYPE, 'class');
        expect(alertTypeAfter).to.include('bg-success');
    });

    it('[Alert-12-13] Verify that create a Alert with only option.isDisable are true and false', function () {
        $(XPATH_ALERT_SET_ONLY_DISABLE_BUTTON).click();
        $(XPATH_ALERT_SET_ONLY_DISABLE_BUTTON_2).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();
        $(XPATH_ALERT_SET_ONLY_DISABLE_BUTTON_1).click();
        $(XPATH_ALERT_SET_ONLY_DISABLE_BUTTON_2).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Alert-14-15] Verify that create a Alert with only option.isVisible are true and false', function () {
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_ONLY_VISIBLE_VALUE);
        expect(alertVisibleBefore).to.equal(true);
        $(XPATH_ALERT_SET_ONLY_VISIBLE_BUTTON).click();
        let alertVisibleAfter = browser.isVisible(XPATH_ALERT_ONLY_VISIBLE_VALUE);
        expect(alertVisibleAfter).to.equal(false);
    });

    it('[Alert-16-17] Verify can set text for Alert which not contains exisiting text and for Alert which contains existing text', function () {
        let alertTextBefore = browser.getText(XPATH_ALERT_SET_TEXT_VALUE);
        expect(alertTextBefore).to.equal('');
        $(XPATH_ALERT_SET_TEXT_BUTTON).click();
        let alertTextAfter = browser.getText(XPATH_ALERT_SET_TEXT_VALUE);
        expect(alertTextAfter).to.equal('Alert changed text');
        $(XPATH_ALERT_SET_TEXT_BUTTON_1).click();
        alertTextAfter = browser.getText(XPATH_ALERT_SET_TEXT_VALUE);
        expect(alertTextAfter).to.equal('Alert changed text second time');
    });

    it('[Alert-18] Verify that can set text for Alert with XSS value', function (){
        let alertTextBefore = browser.getText(XPATH_ALERT_SET_TEXT_XSS_VALUE);
        expect(alertTextBefore).to.equal('Alert before change');
        $(XPATH_ALERT_SET_TEXT_XSS_BUTTON).click();
        let alertTextAfter = browser.getText(XPATH_ALERT_SET_TEXT_XSS_VALUE);
        expect(alertTextAfter).to.equal("alert('Alert after change');");
    })

    it('[Alert-20] Verify that can set text for invisible alert', function (){
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_INVISIBLE_SET_TEXT_VALUE);
        expect(alertVisibleBefore).to.equal(false);
        $(XPATH_ALERT_INVISIBLE_SET_TEXT_BUTTON).click();
        $(XPATH_ALERT_INVISIBLE_SHOW_TEXT_BUTTON).click();
        let alertTextAfter = browser.getText(XPATH_ALERT_INVISIBLE_SET_TEXT_VALUE);
        expect(alertTextAfter).to.equal("Alert after change");
    })

    it('[Alert-22] Verify can set error type for Alert', function () {
        let alertTypeBefore = browser.getAttribute(XPATH_ALERT_SET_ERROR_TYPE_VALUE, 'class');
        expect(alertTypeBefore).to.include('bg-success');
        $(XPATH_ALERT_SET_ERROR_TYPE_BUTTON).click();
        let alertTypeAfter = browser.getAttribute(XPATH_ALERT_SET_ERROR_TYPE_VALUE, 'class');
        expect(alertTypeAfter).to.include('bg-danger');
    });

    it('[Alert-23] Verify can set success type for Alert', function () {
        let alertTypeBefore = browser.getAttribute(XPATH_ALERT_SET_SUCCESS_TYPE_VALUE, 'class');
        expect(alertTypeBefore).to.include('bg-danger');
        $(XPATH_ALERT_SET_SUCCESS_TYPE_BUTTON).click();
        let alertTypeAfter = browser.getAttribute(XPATH_ALERT_SET_SUCCESS_TYPE_VALUE, 'class');
        expect(alertTypeAfter).to.include('bg-success');
    });

    it('[Alert-24] Verify can set type for invisible Alert', function () {
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_INVISIBLE_SET_TYPE_VALUE);
        expect(alertVisibleBefore).to.equal(false);
        $(XPATH_ALERT_INVISIBLE_SET_TYPE_BUTTON).click();
        $(XPATH_ALERT_INVISIBLE_SHOW_TYPE_BUTTON).click();
        let alertTextAfter = browser.getAttribute(XPATH_ALERT_INVISIBLE_SET_TYPE_VALUE,'class');
        expect(alertTextAfter).to.include('bg-success');
    });

    it('[Alert-27] Verify that can show the invisible alert on UI', function () {
        let alertInisibleBefore = browser.isVisible(XPATH_ALERT_INVISIBLE_SHOW_VALUE);
        expect(alertInisibleBefore).to.equal(false);
        $(XPATH_ALERT_INVISIBLE_SHOW_BUTTON).click();
        let alertInisibleAfter = browser.isVisible(XPATH_ALERT_INVISIBLE_SHOW_VALUE);
        expect(alertInisibleAfter).to.equal(true);
    });

    it('[Alert-28] Verify that can show the visible alert on UI', function () {
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_VISIBLE_SHOW_VALUE);
        expect(alertVisibleBefore).to.equal(true);
        $(XPATH_ALERT_VISIBLE_SHOW_BUTTON).click();
        let alertVisibleAfter = browser.isVisible(XPATH_ALERT_VISIBLE_SHOW_VALUE);
        expect(alertVisibleAfter).to.equal(true);
    });

    it('[Alert-29] Verify that can hide the visible Button on UI', function () {
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_VISIBLE_HIDE_VALUE);
        expect(alertVisibleBefore).to.equal(true);
        $(XPATH_ALERT_VISIBLE_NON_DISPLAY_BUTTON).click();
        let alertVisibleAfter = browser.isVisible(XPATH_ALERT_VISIBLE_HIDE_VALUE);
        expect(alertVisibleAfter).to.equal(false);
    });

    it('[Alert-30] Verify that can hide the invisible Button on UI', function () {
        let alertVisibleBefore = browser.isVisible(XPATH_ALERT_INVISIBLE_HIDE_VALUE);
        expect(alertVisibleBefore).to.equal(false);
        $(XPATH_ALERT_INVISIBLE_NON_DISPLAY_BUTTON).click();
        let alertVisibleAfter = browser.isVisible(XPATH_ALERT_INVISIBLE_HIDE_VALUE);
        expect(alertVisibleAfter).to.equal(false);
    });

    // it('[Alert-33] Verify that can enable the disabled Button on UI', function () {
    //     $(XPATH_ALERT_ENABLE_BUTTON).click();
    //     let alertEnable = browser.isEnabled(XPATH_ALERT_ENABLE_VALUE);
    //     expect(alertEnable).to.equal(true);
    // });

    it('[Alert-33-34] Verify that can enable the enabled and enable the disabled Button on UI', function () {
        $(XPATH_ALERT_ENABLE_BUTTON).click();
        $(XPATH_ALERT_ENABLE_BUTTON_2).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();
        $(XPATH_ALERT_ENABLE_BUTTON_1).click();
        $(XPATH_ALERT_ENABLE_BUTTON_2).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Alert-35] Verify that can register a callback function for click event successfully', function () {
        $(XPATH_ALERT_ON_CALL_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Alert has been clicked');
        browser.alertAccept();
    });

    it('[Alert-36] Verify that the callback function will be trigger when click on the Alert', function () {
        $(XPATH_ALERT_TRIGGER_ON_CLICK_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('onCallbackTriggerAlert has been clicked');
        browser.alertAccept();
    });
});