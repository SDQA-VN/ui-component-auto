const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../util/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../util/common');
const expect = require('chai').expect;

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

    it('[Text-2-4-6] should verify that the Textbox object contains the the below attibutes', function () {
        let txtBgColor = $(CONSTRUCTOR_TEXT).getCssProperty('background-color');
        let txtSize = browser.getElementSize(CONSTRUCTOR_TEXT);
        let checkVisible = browser.isVisible(CONSTRUCTOR_TEXT);
        let checkDisable = browser.isEnabled(CONSTRUCTOR_TEXT);
        expect(txtBgColor.parsed.hex).to.equal('#ffffff');
        expect(txtSize.width).to.equal(168);
        expect(txtSize.height).to.equal(48);
        expect(checkVisible).to.equal(true);
        expect(checkDisable).to.equal(true);
        expect($(CONSTRUCTOR_TEXT).getValue()).to.equal('Constructor Text');
    });

    it('[Text-14-15] should set text for text box which not contain existing text and textbox which contain existing text', function () {
        let getText = browser.getValue(SET_VALUE_TEXT);
        expect(getText).to.equal('');
        $(SET_VALUE_BUTTON_TEXT).click();
        getText = browser.getValue(SET_VALUE_TEXT);
        expect(getText).to.equal('Set Value Text with String');
        $(SET_VALUE_BUTTON_1_TEXT).click();
        getText = browser.getValue(SET_VALUE_TEXT);
        expect(getText).to.equal('123123');
    });

    it('[Text-19] should get value of Text', function () {
        let getText = $(GET_VALUE_TEXT).getValue();
        $(GET_VALUE_BUTTON_TEXT).click();
        let alertText = browser.alertText();
        expect(getText).to.equal(alertText);
        browser.alertAccept();
    });

    it('[Text-25] should show invisible Text and visible Text on UI', function () {
        let invisibleText = browser.isVisible(SHOW_INVISIBLE_TEXT);
        let visibleText = browser.isVisible(SHOW_VISIBLE_TEXT);
        expect(invisibleText).to.equal(false);
        expect(visibleText).to.equal(true);
        $(SHOW_BUTTON_TEXT).click();
        invisibleText = browser.isVisible(SHOW_INVISIBLE_TEXT);
        visibleText = browser.isVisible(SHOW_VISIBLE_TEXT);
        expect(invisibleText).to.equal(true);
        expect(visibleText).to.equal(true);
    });

    it('[Text-27] should hide the visible Text and invisble Text on UI', function () {
        let visibleText = browser.isVisible(HIDE_VISIBLE_TEXT);
        let invisibleText = browser.isVisible(HIDE_INVISIBLE_TEXT);
        expect(visibleText).to.equal(true);
        expect(invisibleText).to.equal(false);
        $(HIDE_BUTTON_TEXT).click();
        visibleText = browser.isVisible(HIDE_VISIBLE_TEXT);
        invisibleText = browser.isVisible(HIDE_INVISIBLE_TEXT);
        expect(visibleText).to.equal(false);
        expect(invisibleText).to.equal(false); 
    });

    it('[Text-29] should disable the current enabled Text and disable the current disabled Text  on UI', function () {
        let enabledText = browser.isEnabled(DISABLE_ENABLED_TEXT);
        let disabledText = browser.isEnabled(DISABLE_DISABLED_TEXT);
        expect(enabledText).to.equal(true)
        expect(disabledText).to.equal(false);
        $(DISABLE_BUTTON_TEXT).click();
        enabledText = browser.isEnabled(DISABLE_ENABLED_TEXT);
        disabledText = browser.isEnabled(DISABLE_DISABLED_TEXT);
        expect(enabledText).to.equal(false)
        expect(disabledText).to.equal(false);
    });

    it('[Text-31] should enable the disabled Text and enable the current enabled Text on UI', function () {
        let disabledTextArea = browser.isEnabled(ENABLE_DISABLED_TEXT);
        let enabledTextArea = browser.isEnabled(ENABLE_ENABLED_TEXT);
        expect(disabledTextArea).to.equal(false);
        expect(enabledTextArea).to.equal(true)
        $(ENABLE_BUTTON_TEXT).click();
        disabledTextArea = browser.isEnabled(ENABLE_DISABLED_TEXT);
        enabledTextArea = browser.isEnabled(ENABLE_ENABLED_TEXT);
        expect(enabledTextArea).to.equal(true)
        expect(disabledTextArea).to.equal(true);
    });

    it('[Text-33] should register a callback function for change event successfully', function () {
        $(ON_CALLBACK_FUNCTION_TEXT).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('onClickCallBackFunctionText has been clicked');
        browser.alertAccept();
        $(ON_CALLBACK_FUNCTION_TEXT).addValue('onChange callback');
        // $(ENABLE_ENABLED_TEXT).click(); //Operation of onChange event of JS and React is different  (JS will use this click event)
        alertText = browser.alertText();
        expect(alertText).to.equal('onChangeCallBackFunctionText has been changed');
        browser.alertAccept();
    });

    it('[Text-36] should verify that the callback function will be trigger when click on the textbox', function () {
        $(ON_CALLBACK_TRIGGER_TEXT).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('onClickCallBackTriggerText has been clicked');
        browser.alertAccept();
        $(ON_CALLBACK_TRIGGER_TEXT).addValue('onChange callback');
        // $(ENABLE_ENABLED_TEXT).click(); //Operation of onChange event of JS and React is different  (JS will use this click event)
        alertText = browser.alertText();
        expect(alertText).to.equal('onChangeCallBackTriggerText has been changed');
        browser.alertAccept();
    });
});