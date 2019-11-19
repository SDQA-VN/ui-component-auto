const $ = require('../../util/ReturnElement').singleElement;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_TEXTBOX = '.textRender .kuc-input-text';
const XPATH_TEXTBOX_VALUE = '.textRender .kuc-input-text';
const XPATH_TEXTBOX_SET_TEXT = '.textBox-setText .kuc-input-text';
const XPATH_TEXTBOX_CHANGE_TEXT = '.textBox-setText .set-value';
const XPATH_TEXTBOX_SHOW = '.textBox-showisVisible .kuc-input-text';
const XPATH_TEXTBOX_DISPLAYED = '.textBox-showisVisible .show-textbox';
const XPATH_TEXTBOX_HIDE = '.textBox-hideisVisible .kuc-input-text';
const XPATH_TEXTBOX_NON_DISLAYED = '.textBox-hideisVisible .hide-textbox';
const XPATH_TEXTBOX_DISABLE = '.textBox-disable .disable-textbox';
const XPATH_TEXTBOX_DISABLE_INPUT = '.textBox-disable .kuc-input-text';
const XPATH_TEXTBOX_ENABLE = '.textBox-enable .enable-textbox';
const XPATH_TEXTBOX_ENABLE_INPUT = '.textBox-enable .kuc-input-text';
const XPATH_TEXTBOX_ON_CHANGE = '.textBox-onChange .kuc-input-text';
const XPATH_TEXTBOX_ON_CLICK = '.textBox-onClick .kuc-input-text';

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Text-2] Verify that the Textbox have the UI is the same as Textbox on kintone', function () {
        let textBoxColor = $(XPATH_TEXTBOX).getCssProperty('color');
        let textBoxHeight = $(XPATH_TEXTBOX).getCssProperty('height');
        expect(textBoxColor.parsed.hex).to.equal('#333333');
        expect(textBoxHeight.value).to.equal('48px');
    });

    it('[Text-4-6] Verify that can create a text box with full options value', function () {
        let textBoxValue = browser.getValue(XPATH_TEXTBOX_VALUE);
        let textBoxEnable = browser.isEnabled(XPATH_TEXTBOX_VALUE);
        let textBoxVisible = browser.isVisible(XPATH_TEXTBOX_VALUE);
        expect(textBoxEnable).to.equal(true);
        expect(textBoxVisible).to.equal(true);
        expect(textBoxValue).to.equal('Text');
    });

    it('[Text-14] Verify can set text for text box which contains existing text', function () {
        $(XPATH_TEXTBOX_CHANGE_TEXT).click()
        let textBoxValue = browser.getValue(XPATH_TEXTBOX_SET_TEXT);
        expect(textBoxValue).to.equal('Text change');
    });

    it('[Text-25] Verify that can show invisible Textbox on UI', function () {
        $(XPATH_TEXTBOX_DISPLAYED).click()
        let textBoxVisible = browser.isVisible(XPATH_TEXTBOX_SHOW);
        expect(textBoxVisible).to.equal(true);
    });

    it('[Text-27] Verify that can hide the visible Textbox on UI', function () {
        $(XPATH_TEXTBOX_NON_DISLAYED).click()
        let textBoxVisible = browser.isVisible(XPATH_TEXTBOX_HIDE);
        expect(textBoxVisible).to.equal(false);
    });

    it('[Text-29] Verify that can disable the current enable Text on UI', function () {
        $(XPATH_TEXTBOX_DISABLE).click()
        let textBoxEnable = browser.isEnabled(XPATH_TEXTBOX_DISABLE_INPUT);
        expect(textBoxEnable).to.equal(false);
    });

    it('[Text-31] Verify that can disable the current enable Text on UI', function () {
        $(XPATH_TEXTBOX_ENABLE).click()
        let textBoxEnable = browser.isEnabled(XPATH_TEXTBOX_ENABLE_INPUT);
        expect(textBoxEnable).to.equal(true);
    });

    it('[Text-33-34] Verify that the callback function will be trigger when change the value for text component', function () {
        browser.setValue(XPATH_TEXTBOX_ON_CHANGE, "A")
        let alertText = browser.alertText();
        expect(alertText).to.equal('value: A');
        browser.alertAccept();
    });

    it('[Text-35-36] Verify that the callback function will be trigger when click on the textbox', function () {
        $(XPATH_TEXTBOX_ON_CLICK).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Textbox has been clicked');
        browser.alertAccept();
    });
});