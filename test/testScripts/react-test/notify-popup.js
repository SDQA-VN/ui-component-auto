const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

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
const XPATH_NOTIFY_DISABLE_VALUE = '.notify-disable .kuc-notify';
const XPATH_NOTIFY_DISABLE_SHOW = '.notify-disable .notify-show';
const XPATH_NOTIFY_DISABLE_BUTTON = '.notify-disable .notify-disable';
const XPATH_NOTIFY_DISABLE_CLOSE = '.notify-disable .kuc-close-button';
const XPATH_NOTIFY_ENABLE_VALUE = '.notify-enable .kuc-notify';
const XPATH_NOTIFY_ENABLE_SHOW = '.notify-enable .notify-show';
const XPATH_NOTIFY_ENABLE_BUTTON = '.notify-enable .notify-enable';
const XPATH_NOTIFY_ENABLE_CLOSE = '.notify-enable .kuc-close-button';
const XPATH_ENABLE_NOTIFY_ENABLE_VALUE = '.enableNotify-enable .kuc-notify';
const XPATH_ENABLE_NOTIFY_ENABLE_SHOW = '.enableNotify-enable .notify-show';
const XPATH_ENABLE_NOTIFY_ENABLE_BUTTON = '.enableNotify-enable .notify-enable';
const XPATH_ENABLE_NOTIFY_ENABLE_CLOSE = '.enableNotify-enable .kuc-close-button';
const XPATH_NOTIFY_ON_CALL = '.notify-onCall .kuc-notify';
const XPATH_NOTIFY_ON_CALL_SHOW = '.notify-onCall .notify-show';
const XPATH_NOTIFY_ON_CALL_CLOSE = '.notify-onCall .kuc-close-button';


describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[Notify-2] Verify that the Success NotifyPopup have the  UI is the same as NotifyPopup on kintone', function () {
        $(XPATH_NOTIFY_SUCCESS_SHOW).click()
        let notifyColor = $(XPATH_NOTIFY_SUCCESS).getCssProperty('background');
        let notifyPosition = $(XPATH_NOTIFY_SUCCESS).getCssProperty('position');
        let notifyHeight = $(XPATH_NOTIFY_SUCCESS).getCssProperty('height');
        expect(notifyColor.parsed.hex).to.equal('#91c36c');
        expect(notifyHeight.value).to.equal('70px');
        expect(notifyPosition.value).to.equal('fixed');
        $(XPATH_NOTIFY_SUCCESS_CLOSE).click()
    });
    it('[Notify-3] Verify that the Error NotifyPopup have the UI is the same as NotifyPopup on kintone', function () {
        $(XPATH_NOTIFY_ERROR_SHOW).click()
        let notifyColor = $(XPATH_NOTIFY_ERROR).getCssProperty('background');
        let notifyPosition = $(XPATH_NOTIFY_ERROR).getCssProperty('position');
        let notifyHeight = $(XPATH_NOTIFY_ERROR).getCssProperty('height');
        expect(notifyColor.parsed.hex).to.equal('#e74c3c');
        expect(notifyHeight.value).to.equal('70px');
        expect(notifyPosition.value).to.equal('fixed');
        $(XPATH_NOTIFY_ERROR_CLOSE).click()
    });
    it('[Notify-5] Verify that when user click on the close icon, the popup will disappear', function () {
        $(XPATH_NOTIFY_ERROR_SHOW).click()
        let notifyVisibleBefore = browser.isVisible(XPATH_NOTIFY_ERROR);
        expect(notifyVisibleBefore).to.equal(true)
        $(XPATH_NOTIFY_ERROR_CLOSE).click()
        let notifyVisibleAfter = browser.isVisible(XPATH_NOTIFY_ERROR);
        expect(notifyVisibleAfter).to.equal(false);
    });
    it('[Notify-6-16] Verify that the Error NotifyPopup have the UI is the same as NotifyPopup on kintone', function () {
        $(XPATH_NOTIFY_WITHOUT_OPTION_SHOW).click()
        let notifyVisible = browser.isVisible(XPATH_NOTIFY_WITHOUT_OPTION)
        let notifyValue = browser.getAttribute(XPATH_NOTIFY_WITHOUT_OPTION, 'class');
        expect(notifyVisible).to.equal(true);
        expect(notifyValue).to.include('bg-danger');
        $(XPATH_NOTIFY_WITHOUT_OPTION_CLOSE).click()
    });
    it('[Notify-17] Verify can set text for NotifyPopup which not contains existing text', function () {
        $(XPATH_NOTIFY_SET_TEXT_SHOW).click();
        let notifyTextBefore = browser.getText(XPATH_NOTIFY_SET_TEXT_VALUE)
        expect(notifyTextBefore).to.equal('');
        $(XPATH_NOTIFY_SET_TEXT_BUTTON).click()
        let notifyTextAfter = browser.getText(XPATH_NOTIFY_SET_TEXT_VALUE)
        expect(notifyTextAfter).to.equal('Error change text');
        $(XPATH_NOTIFY_SET_TEXT_CLOSE).click()
    });
    it('[Notify-22] Verify that can set text for invisible NotifyPopup', function () {
        $(XPATH_NOTIFY_SET_TEXT_BUTTON).click();
        $(XPATH_NOTIFY_SET_TEXT_SHOW).click();
        let notifyTextAfter = browser.getText(XPATH_NOTIFY_SET_TEXT_VALUE)
        expect(notifyTextAfter).to.equal('Error change text');
        $(XPATH_NOTIFY_SET_TEXT_CLOSE).click()
    });
    it('[Notify-23] Verify that can set the current text to blank', function () {
        $(XPATH_NOTIFY_SET_TEXT_BLANK_SHOW).click();
        let notifyTextBefore = browser.getText(XPATH_NOTIFY_SET_TEXT_BLANK_VALUE)
        expect(notifyTextBefore).to.equal('Error text');
        $(XPATH_NOTIFY_SET_TEXT_BLANK_BUTTON).click()
        let notifyTextAfter = browser.getText(XPATH_NOTIFY_SET_TEXT_BLANK_VALUE)
        expect(notifyTextAfter).to.equal('');
        $(XPATH_NOTIFY_SET_TEXT_BLANK_CLOSE).click()
    });
    it('[Notify-25-32] Verify can set error type for NotifyPopup', function () {
        $(XPATH_NOTIFY_SET_TYPE_SHOW).click();
        let notifyVisible = browser.isVisible(XPATH_NOTIFY_SET_TYPE_VALUE)
        let notifyTypeBefore = browser.getAttribute(XPATH_NOTIFY_SET_TYPE_VALUE, 'class');
        expect(notifyVisible).to.equal(true);
        expect(notifyTypeBefore).to.include('bg-success');
        $(XPATH_NOTIFY_SET_TYPE_BUTTON).click()
        let notifyTypeAfter = browser.getAttribute(XPATH_NOTIFY_SET_TYPE_VALUE, 'class');
        expect(notifyTypeAfter).to.include('bg-danger');
        $(XPATH_NOTIFY_SET_TYPE_CLOSE).click()
    });
    it('[Notify-34] Verify that can hide the visible NotifyPopup on UI', function () {
        $(XPATH_NOTIFY_SET_HIDE_SHOW).click();
        let notifyVisibleBefore = browser.isVisible(XPATH_NOTIFY_SET_HIDE_VALUE);
        expect(notifyVisibleBefore).to.equal(true);
        $(XPATH_NOTIFY_SET_HIDE_BUTTON).click()
        let notifyVisibleAfter = browser.isVisible(XPATH_NOTIFY_SET_HIDE_VALUE);
        expect(notifyVisibleAfter).to.equal(false);
    });
    it('[Notify-36] Verify that can disable the current enable NotifyPopup on UI', function () {
        $(XPATH_NOTIFY_DISABLE_SHOW).click();
        let notifyDisableBefore = browser.isVisible(XPATH_NOTIFY_DISABLE_VALUE);
        expect(notifyDisableBefore).to.equal(true);
        $(XPATH_NOTIFY_DISABLE_BUTTON).click()
        $(XPATH_NOTIFY_DISABLE_CLOSE).click()
        let notifyDisableAfter = browser.isVisible(XPATH_NOTIFY_DISABLE_VALUE);
        expect(notifyDisableAfter).to.equal(true);
    });
    it('[Notify-38] Verify that can enable the disabled NotifyPopup on UI', function () {
        $(XPATH_NOTIFY_ENABLE_SHOW).click();
        $(XPATH_NOTIFY_ENABLE_CLOSE).click();
        let notifyEnableBefore = browser.isVisible(XPATH_NOTIFY_ENABLE_VALUE);
        expect(notifyEnableBefore).to.equal(true);
        $(XPATH_NOTIFY_ENABLE_BUTTON).click();
        $(XPATH_NOTIFY_ENABLE_CLOSE).click();
        let notifyEnableAfter = browser.isVisible(XPATH_NOTIFY_ENABLE_VALUE);
        expect(notifyEnableAfter).to.equal(false);
    });
    it('[Notify-39] Verify that can enable the enable NotifyPopup on UI', function () {
        $(XPATH_ENABLE_NOTIFY_ENABLE_SHOW).click();
        $(XPATH_ENABLE_NOTIFY_ENABLE_BUTTON).click();
        $(XPATH_ENABLE_NOTIFY_ENABLE_CLOSE).click();
        let notifyEnableAfter = browser.isVisible(XPATH_ENABLE_NOTIFY_ENABLE_VALUE);
        expect(notifyEnableAfter).to.equal(false);
    });
    it('[Notify-40-41] Verify that the callback function will be triggered when clicking on that NotifyPopup', function () {
        $(XPATH_NOTIFY_ON_CALL_SHOW).click();
        $(XPATH_NOTIFY_ON_CALL).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('Notify popup has been clicked');
        browser.alertAccept();
        $(XPATH_NOTIFY_ON_CALL_CLOSE).click();
    });
});