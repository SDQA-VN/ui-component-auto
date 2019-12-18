const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/icon-button.xpath');

describe('kintoneUIComponent - Icon button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Icon-Button-2] should verify UI', function () {
        let iconButtonBgColor = $(xpath.XPATH_FULL_OPTIONS_VALUE).getCssProperty('color');
        let iconButtonSize = browser.getElementSize(xpath.XPATH_FULL_OPTIONS_VALUE);
        expect(iconButtonBgColor.parsed.hex).to.equal('#333333');
        expect(iconButtonSize.width).to.equal(iconButtonSize.width);
        expect(iconButtonSize.height).to.equal(iconButtonSize.height);
    });

    it('[Icon-Button-3-5-6-14-15] should create a Icon Button', function () {
        let isVisibleItem = isVisibled(xpath.XPATH_FULL_OPTIONS_VALUE, true);
        let isVisibleOnlyType = isVisibled(xpath.XPATH_ONLY_TYPE, true);
        let isVisibleOnlyColor = isVisibled(xpath.XPATH_ONLY_COLOR, true);
        let isVisibleDisabled = isVisibled(xpath.XPATH_DISABLED, true);
        expect(isVisibleItem).to.equal(true);
        expect(isVisibleOnlyType).to.equal(true);
        expect(isVisibleOnlyColor).to.equal(true);
        expect(isVisibleDisabled).to.equal(true);
    });

    it('[Icon-Button-20-21-22-26] should set type for icon button', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setType('insert');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"type":"insert"');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setType('remove');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"type":"remove"');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setType('close');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"type":"close"');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.hide();
        });

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setType('insert');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"type":"insert"');
        expect(alertText).to.include('"isVisible":false');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.show();
        });
    });

    it('[Icon-Button-37-38] should set size for icon button', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setSize('large');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"size":"large"');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.setSize('small');
        });
        $(xpath.XPATH_GET_STATE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('"size":"small"');
        browser.alertAccept();
    });

    it('[Icon-Button-45] should hide visible Icon button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.hide();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_SET_TYPE_ICON_BUTTON, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Icon-Button-43] should show invisible Icon button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.show();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_SET_TYPE_ICON_BUTTON, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Icon-Button-47] should disable Icon button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.disable();
        });
        let isEnableItem = isEnabled(xpath.XPATH_SET_TYPE_IB_DISABLED, false);
        expect(isEnableItem).to.equal(false);
    });

    it('[Icon-Button-50] should enable Icon button on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            setTypeForIB.enable();
        });
        let isEnableItem = isEnabled(xpath.XPATH_SET_TYPE_IB_DISABLED, true);
        expect(isEnableItem).to.equal(true);
    });

    it('[Icon-button-51] should callback function', function () {
        $(xpath.XPATH_SET_TYPE_ICON_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('on_click has been clicked');
        browser.alertAccept();
    });

    it('[Icon-button-52] should callback trigger function', function () {
        $(xpath.XPATH_ON_TRIGGER_IB).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('on_click_trigger has been clicked');
        browser.alertAccept();
    });
    
});