const common = require('../../utils/common');
const Helper = require('../../helper/main');
const expect = require('chai').expect

const CONSTRUCTOR_TEXT = "//div[@id='constructor-text']//input[@class='kuc-input-text']";
// TXT_FULL_CONSTRUCTOR: "//input[@value= 'fullConstructorText']",
const SET_VALUE_TEXT = "//div[@id='set-value-text']//input[@class='kuc-input-text']";
const SET_VALUE_BUTTON_TEXT = "//button[contains(text(),'Set Value of Text with string')]";
const GET_VALUE_TEXT = "//div[@id='get-value-text']//input[@class='kuc-input-text']";
const GET_VALUE_BUTTON_TEXT = "//div[@id='get-value-text']//button[contains(text(),'Get Value of Text')]";
const SET_VALUE_BUTTON_1_TEXT = "//button[contains(text(),'Set Value of Text without string')]";
const SHOW_INVISIBLE_TEXT = "//div[@id='show-invisible-text']//input[@class='kuc-input-text']";
const SHOW_VISIBLE_TEXT = "//div[@id='show-visible-text']//input[@class='kuc-input-text']";
const SHOW_BUTTON_TEXT = "//button[contains(text(),'Show Text')]";
const HIDE_VISIBLE_TEXT = "//div[@id='hide-visible-text']//input[@class='kuc-input-text']";
const HIDE_INVISIBLE_TEXT = "//div[@id='hide-invisible-text']//input[@class='kuc-input-text']";
const HIDE_BUTTON_TEXT = "//button[contains(text(),'Hide Text')]";
const DISABLE_ENABLED_TEXT = "//div[@id='disable-enabled-text']//input[@class='kuc-input-text']";
const DISABLE_DISABLED_TEXT = "//div[@id='disable-disabled-text']//input[@class='kuc-input-text']";
const DISABLE_BUTTON_TEXT = "//button[contains(text(),'Disable Text')]";
const ENABLE_DISABLED_TEXT = "//div[@id='enable-disabled-text']//input[@class='kuc-input-text']";
const ENABLE_ENABLED_TEXT = "//div[@id='enable-enabled-text']//input[@class='kuc-input-text']";
const ENABLE_BUTTON_TEXT = "//button[contains(text(),'Enable Text')]";
const ON_CALLBACK_FUNCTION_TEXT = "//div[@id='on-callback-function-text']//input[@class='kuc-input-text']";
const ON_CALLBACK_TRIGGER_TEXT = "//div[@id='on-callback-trigger-text']//input";

describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    // it('[Text-2-4-6] should verify that the Textbox object contains the the below attibutes', function () {
    //     let txtBgColor = $(CONSTRUCTOR_TEXT).getCssProperty('background-color');
    //     let txtSize = browser.getElementSize(CONSTRUCTOR_TEXT);
    //     let checkVisible = browser.isVisible(CONSTRUCTOR_TEXT);
    //     let checkDisable = browser.isEnabled(CONSTRUCTOR_TEXT);
    //     expect(txtBgColor.parsed.hex).to.equal('#ffffff');
    //     expect(txtSize.width).to.equal(168);
    //     expect(txtSize.height).to.equal(48);
    //     expect(checkVisible).to.equal(true);
    //     expect(checkDisable).to.equal(true);
    //     expect($(CONSTRUCTOR_TEXT).getValue()).to.equal('Constructor Text');
    // });

    it('[Text-14-15] should set text for text box which not contain existing text and textbox which contain existing text', function () {
        Helper.ElementHandler
            .waitForElement(SET_VALUE_TEXT)
            .verifyValue(SET_VALUE_TEXT, '')
            .click(SET_VALUE_BUTTON_TEXT)
            .verifyValue(SET_VALUE_TEXT, 'Set Value Text with String')
            .click(SET_VALUE_BUTTON_1_TEXT)
            .verifyValue(SET_VALUE_TEXT, '123123')
    });

    it('[Text-19] should get value of Text', function () {
        let TextValue = Helper.ElementHandler.getValue(GET_VALUE_TEXT);
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_TEXT)
            .verifyAlertText(TextValue)
    });

    it('[Text-25] should show invisible Text and visible Text on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SHOW_INVISIBLE_TEXT)
            .verifyElementVisible(SHOW_VISIBLE_TEXT)
            .click(SHOW_BUTTON_TEXT)
            .verifyElementVisible(SHOW_INVISIBLE_TEXT)
            .verifyElementVisible(SHOW_VISIBLE_TEXT)
    });

    it('[Text-27] should hide the visible Text and invisble Text on UI', function () {
        Helper.ElementHandler
            .waitForElement(SHOW_VISIBLE_TEXT)
            .verifyElementVisible(SHOW_VISIBLE_TEXT)
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXT)
            .click(HIDE_BUTTON_TEXT)
            .verifyElementNotVisible(HIDE_VISIBLE_TEXT)
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXT)
    });

    it('[Text-29] should disable the current enabled Text and disable the current disabled Text  on UI', function () {
        Helper.ElementHandler
            .waitForElement(DISABLE_ENABLED_TEXT)
            .verifyElementEnabled(DISABLE_ENABLED_TEXT)
            .verifyElementDisabled(DISABLE_DISABLED_TEXT)
            .click(DISABLE_BUTTON_TEXT)
            .verifyElementDisabled(DISABLE_ENABLED_TEXT)
            .verifyElementDisabled(DISABLE_DISABLED_TEXT)
    });

    it('[Text-31] should enable the disabled Text and enable the current enabled Text on UI', function () {
        Helper.ElementHandler
            .waitForElement(ENABLE_DISABLED_TEXT)
            .verifyElementDisabled(ENABLE_DISABLED_TEXT)
            .verifyElementEnabled(ENABLE_ENABLED_TEXT)
            .click(ENABLE_BUTTON_TEXT)
            .verifyElementEnabled(ENABLE_DISABLED_TEXT)
            .verifyElementEnabled(ENABLE_ENABLED_TEXT)
    });

    it('[Text-33] should register a callback function for change event successfully', function () {
        Helper.ElementHandler
            .waitForElement(ON_CALLBACK_FUNCTION_TEXT)
            .click(ON_CALLBACK_FUNCTION_TEXT)
            .verifyAlertText('onClickCallBackFunctionText has been clicked')
            .addValue(ON_CALLBACK_FUNCTION_TEXT, 'onChange callback')
            .click(ENABLE_BUTTON_TEXT)
            .verifyAlertText('onChangeCallBackFunctionText has been changed')
    });

    it('[Text-36] should verify that the callback function will be trigger when click on the textbox', function () {
        Helper.ElementHandler
            .waitForElement(ON_CALLBACK_TRIGGER_TEXT)
            .click(ON_CALLBACK_TRIGGER_TEXT)
            .verifyAlertText('onClickCallBackTriggerText has been clicked')
            .addValue(ON_CALLBACK_TRIGGER_TEXT, 'onChange callback')
            .click(ENABLE_ENABLED_TEXT)
            .verifyAlertText('onChangeCallBackTriggerText has been changed')
    });
});