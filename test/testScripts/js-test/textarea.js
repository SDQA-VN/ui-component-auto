const common = require('../../utils/common');
const Helper = require('../../helper/main');
const expect = require('chai').expect

const CONSTRUCTOR_TEXTAREA = "//div[@id='constructor-textarea']//textarea[@class='kuc-textarea']";
const CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA = "//div[@id='constructor-textarea']//div[@class='kuc-textarea-resize']";
const CONSTRUCTOR_BUTTON_TEXTAREA = "//table[@class='bordered_table']/tr[count(//div[@id='constructor-textarea']/ancestor::tr//preceding-sibling::tr)+2]/td[count(//div[@id='constructor-textarea']/parent::td//preceding-sibling::td)+2]";
const GET_VALUE_TEXTAREA = "//div[@id='get-value-textarea']//textarea[@class='kuc-textarea']";
const GET_VALUE_BUTTON_TEXTAREA = "//button[contains(text(), 'Get Value of TextArea')]";
const SET_VALUE_TEXTAREA = "//div[@id='set-value-textarea']//textarea[@class='kuc-textarea']";
const SET_VALUE_BUTTON_TEXTAREA = "//button[contains(text(), 'Set Value of TextArea with string')]";
const SET_VALUE_BUTTON_1_TEXTAREA = "//button[contains(text(), 'Set Value of TextArea without string')]";
const ON_CALL_FUNCTION_TEXTAREA = "//div[@id='on-callback-function-textarea']//textarea[@class='kuc-textarea']";
const ON_TRIGGER_FUNCTION_TEXTAREA = "//textarea[contains(text(),'onCallbackTriggerTextArea')]";
const SHOW_INVISIBLE_TEXTAREA = "//div[@id='show-invisible-textarea']//textarea[@class='kuc-textarea']";
const SHOW_VISIBLE_TEXTAREA = "//div[@id='show-visible-textarea']//textarea[@class='kuc-textarea']";
const SHOW_BUTTON_TEXTAREA = "//button[contains(text(), 'Show TextArea')]";
const HIDE_INVISIBLE_TEXTAREA = "//div[@id='hide-invisible-textarea']//textarea[@class='kuc-textarea']";
const HIDE_VISIBLE_TEXTAREA = "//div[@id='hide-visible-textarea']//textarea[@class='kuc-textarea']";
const HIDE_BUTTON_TEXTAREA = "//button[contains(text(), 'Hide TextArea')]";
const DISABLE_ENABLED_TEXTAREA = "//div[@id='disable-enabled-textarea']//textarea[@class='kuc-textarea']";
const DISABLE_DISABLED_TEXTAREA = "//div[@id='disable-disabled-textarea']//textarea[@class='kuc-textarea']";
const DISABLE_BUTTON_TEXTAREA = "//button[contains(text(), 'Disable TextArea')]";
const ENABLE_ENABLED_TEXTAREA = "//div[@id='enable-enabled-textarea']//textarea[@class='kuc-textarea']";
const ENABLE_DISABLED_TEXTAREA = "//div[@id='enable-disabled-textarea']//textarea[@class='kuc-textarea']";
const ENABLE_BUTTON_TEXTAREA = "//button[contains(text(), 'Enable TextArea')]";

describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[TextArea-2-3-4-5-8] should Verify that the Textbox have the UI is the same as Textbox on kintone - color, - size ( width + height)', function () {
        Helper.ElementHandler
            .verifyElementSize(CONSTRUCTOR_TEXTAREA,297,123)
            .moveToObject(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .buttonDown(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .dragAndDrop(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA,CONSTRUCTOR_BUTTON_TEXTAREA)
            .buttonUp(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA)
            .verifyElementSizeDragAndDrop(CONSTRUCTOR_TEXTAREA, 297,123)
        // let txtAreaSize = browser.getElementSize(CONSTRUCTOR_TEXTAREA);
        // expect(txtAreaSize.width).to.equal(297);
        // expect(txtAreaSize.height).to.equal(123);
        // browser.moveToObject(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA);
        // browser.buttonDown(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA);
        // browser.dragAndDrop(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA,CONSTRUCTOR_BUTTON_TEXTAREA);
        // browser.buttonUp(CONSTRUCTOR_RESIZE_BUTTON_TEXTAREA);
        // txtAreaSize = browser.getElementSize(CONSTRUCTOR_TEXTAREA);
        // expect(txtAreaSize.width >= 297).to.equal(true);
        // expect(txtAreaSize.height >= 123).to.equal(true);
    });

    it('[TextArea-18-19] should get the value of TextArea', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_TEXTAREA)
            .verifyAlertText('Get Value of TextArea')
        // $(GET_VALUE_BUTTON_TEXTAREA).click();
        // let alertText = browser.alertText();
        // expect(alertText).to.equal('Get Value of TextArea');
        // browser.alertAccept();
    });

    it('[TextArea-23-24] should set the value of TextArea with string and set the value of TextArea without string', function () {
        Helper.ElementHandler
            .verifyValue(SET_VALUE_TEXTAREA,'')
            .click(SET_VALUE_BUTTON_TEXTAREA)
            .verifyValue(SET_VALUE_TEXTAREA,'Set Value with String')
            .click(SET_VALUE_BUTTON_1_TEXTAREA)
            .verifyValue(SET_VALUE_TEXTAREA,'123123')
        // let getText = $(SET_VALUE_TEXTAREA).getValue();
        // expect(getText).to.equal('');
        // $(SET_VALUE_BUTTON_TEXTAREA).click();
        // getText = $(SET_VALUE_TEXTAREA).getValue();
        // expect(getText).to.equal('Set Value with String');
        // $(SET_VALUE_BUTTON_1_TEXTAREA).click();
        // getText = $(SET_VALUE_TEXTAREA).getValue();
        // expect(getText).to.equal('123123');
    });

    it('[TextArea-30-31] should register a callback function for click and change event successfully', function () {
        Helper.ElementHandler
            .click(ON_CALL_FUNCTION_TEXTAREA)
            .verifyAlertText('onCallbackFunctionTextArea has been clicked')
            .addValue(ON_CALL_FUNCTION_TEXTAREA,'onChange callback')
            .click(SET_VALUE_TEXTAREA)
            .verifyAlertText('onCallbackFunctionTextArea has been changed')
        // $(ON_CALL_FUNCTION_TEXTAREA).click();
        // let alertText = browser.alertText();
        // expect(alertText).to.equal('onCallbackFunctionTextArea has been clicked');
        // browser.alertAccept();
        // $(ON_CALL_FUNCTION_TEXTAREA).addValue('onChange callback');
        // $(SET_VALUE_TEXTAREA).click(); //Operation of onChange event of JS and React is different  (JS will use this click event)
        // alertText = browser.alertText();
        // expect(alertText).to.equal('onCallbackFunctionTextArea has been changed');
        // browser.alertAccept();
    });

    // it('[Textarea-31] should verify that the callback function will be trigger when click on the TextArea', function () {
    //     $(ON_TRIGGER_FUNCTION_TEXTAREA).click();
    //     let alertText = browser.alertText();
    //     expect(alertText).to.equal('onCallbackTriggerTextArea has been clicked');
    //     browser.alertAccept();
    // });

    it('[Textarea-32] should show invisible TextArea and visible TextArea on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SHOW_INVISIBLE_TEXTAREA)
            .verifyElementVisible(SHOW_VISIBLE_TEXTAREA)
            .click(SHOW_BUTTON_TEXTAREA)
            .verifyElementVisible(SHOW_INVISIBLE_TEXTAREA)
            .verifyElementVisible(SHOW_VISIBLE_TEXTAREA)
        // let invisibleTextArea = browser.isVisible(SHOW_INVISIBLE_TEXTAREA);
        // let visibleTextArea = browser.isVisible(SHOW_VISIBLE_TEXTAREA);   
        // expect(invisibleTextArea).to.equal(false);
        // expect(visibleTextArea).to.equal(true);
        // $(SHOW_BUTTON_TEXTAREA).click();
        // invisibleTextArea = browser.isVisible(SHOW_INVISIBLE_TEXTAREA);
        // visibleTextArea = browser.isVisible(SHOW_VISIBLE_TEXTAREA);
        // expect(invisibleTextArea).to.equal(true);
        // expect(visibleTextArea).to.equal(true);
    });

    it('[Textarea-33] should hide visible TextArea and hide invisible TextArea on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXTAREA)
            .verifyElementVisible(HIDE_VISIBLE_TEXTAREA)
            .click(HIDE_BUTTON_TEXTAREA)
            .verifyElementNotVisible(HIDE_INVISIBLE_TEXTAREA)
            .verifyElementNotVisible(HIDE_VISIBLE_TEXTAREA)
        // let visibleTextArea = browser.isVisible(HIDE_VISIBLE_TEXTAREA);
        // let invisibleTextArea = browser.isVisible(HIDE_INVISIBLE_TEXTAREA);
        // expect(visibleTextArea).to.equal(true);
        // expect(invisibleTextArea).to.equal(false);
        // $(HIDE_BUTTON_TEXTAREA).click();
        // visibleTextArea = browser.isVisible(HIDE_VISIBLE_TEXTAREA);
        // invisibleTextArea = browser.isVisible(HIDE_INVISIBLE_TEXTAREA);
        // expect(visibleTextArea).to.equal(false);
        // expect(invisibleTextArea).to.equal(false); 
    });

    it('[Textarea-34] should disable the current enable TextArea and disable the current disable TextArea', function () {
        Helper.ElementHandler
            .click(DISABLE_BUTTON_TEXTAREA)
            .verifyElementDisabled(DISABLE_DISABLED_TEXTAREA)
            .verifyElementDisabled(DISABLE_ENABLED_TEXTAREA)
        // let enabledTextArea = browser.isEnabled(DISABLE_ENABLED_TEXTAREA);
        // let disabledTextArea = browser.isEnabled(DISABLE_DISABLED_TEXTAREA);
        // expect(enabledTextArea).to.equal(true)
        // expect(disabledTextArea).to.equal(false);
        // $(DISABLE_BUTTON_TEXTAREA).click();
        // enabledTextArea = browser.isEnabled(DISABLE_ENABLED_TEXTAREA);
        // disabledTextArea = browser.isEnabled(DISABLE_DISABLED_TEXTAREA);
        // expect(enabledTextArea).to.equal(false)
        // expect(disabledTextArea).to.equal(false);
    });
    
    it('[Textarea-35] should enable the disabled TextArea and disable the disabled TextArea', function () {
        Helper.ElementHandler
            .click(ENABLE_BUTTON_TEXTAREA)
            .verifyElementEnabled(ENABLE_DISABLED_TEXTAREA)
            .verifyElementEnabled(ENABLE_ENABLED_TEXTAREA)
        // let disabledTextArea = browser.isEnabled(ENABLE_DISABLED_TEXTAREA);
        // let enabledTextArea = browser.isEnabled(ENABLE_ENABLED_TEXTAREA);
        // expect(disabledTextArea).to.equal(false);
        // expect(enabledTextArea).to.equal(true)
        // $(ENABLE_BUTTON_TEXTAREA).click();
        // disabledTextArea = browser.isEnabled(ENABLE_DISABLED_TEXTAREA);
        // enabledTextArea = browser.isEnabled(ENABLE_ENABLED_TEXTAREA);
        // expect(enabledTextArea).to.equal(true)
        // expect(disabledTextArea).to.equal(true);
    });
});