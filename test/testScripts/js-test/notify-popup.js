const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/notify-popup.xpath');

describe('kintoneUIComponent - Notify Popup', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Notify-2] should verify success notify', function () {
        let notifyBgColor = $(xpath.XPATH_FULL_OPTIONS_VALUE).getCssProperty('color');
        let notifySize = browser.getElementSize(xpath.XPATH_FULL_OPTIONS_VALUE);
        expect(notifyBgColor.parsed.hex).to.equal('#333333');
        expect(notifySize.width).to.equal(notifySize.width);
        expect(notifySize.height).to.equal(notifySize.height);
    });

    it('[Notify-5] should close notify', function () {
        $(xpath.XPATH_FULL_OPTIONS_VALUE_CLOSE_BTN).click();
        let isVisibleItem = isVisibled(xpath.XPATH_FULL_OPTIONS_VALUE, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Notify-6] should create a NotifyPopup without any options value', function () {
        $(xpath.XPATH_BODY).execute(() => {
            testgrid.getCell(posConfig.Notify.x, 3).appendChild(cons_notify_without_value_El);
        });
        let isVisibleItem = isVisibled(xpath.XPATH_CONS_WITHOUT_VALUE, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Notify-17-22-23] should set text for notify', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.setText('');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"text":""');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.setText('New Text');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"text":"New Text"');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.hide();
        });

        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.setText('Invisible Text');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"text":"Invisible Text"');
        expect(alertText).to.include('"isVisible":false');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.show();
        });
    });

    it('[Notify-25] should set type for notify popup', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.setType('error');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"type":"error"');
        browser.alertAccept();
    });

    it('[Notify-34] should hide visible notify on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.hide();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_CONS_WITHOUT_VALUE, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Notify-32] should show invisible notify on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.show();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_CONS_WITHOUT_VALUE, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Notify-36] should disable notify on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.disable();
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[Notify-38-39] should enable notify on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.enable();
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"isDisabled":false');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            cons_notify_without_value.enable();
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"isDisabled":false');
        browser.alertAccept();
    });

    it('[Notify-40] should callback function', function () {
        $(xpath.XPATH_CONS_WITHOUT_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('on_click has been clicked');
        browser.alertAccept();
    });

    it('[Notify-41] should callback trigger', function () {
        $(xpath.XPATH_CONS_WITHOUT_VALUE_CLOSE_BTN).click();
        $(xpath.XPATH_BODY).execute(() => {
            testgrid.getCell(posConfig.Notify.x, 2).appendChild(on_trigger_notify_El);
        });
        $(xpath.XPATH_ON_TRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('on_click_trigger has been clicked');
        browser.alertAccept();
    });

    it('[Notify-3] should verify error notify', function () {
        let notifyBgColor = $(xpath.XPATH_ON_TRIGGER).getCssProperty('color');
        let notifySize = browser.getElementSize(xpath.XPATH_ON_TRIGGER);
        expect(notifyBgColor.parsed.hex).to.equal('#ffffff');
        expect(notifySize.width).to.equal(notifySize.width);
        expect(notifySize.height).to.equal(notifySize.height);
    });
    
});