const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../util/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../util/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/label.xpath');

describe('kintoneUIComponent - Label', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Label-2] should Verify that the Label have the UI is the same as Label on kintone - color, - size ( width + height)', function () {
        let bgColor = $(xpath.XPATH_UI).getCssProperty('color');
        let size = browser.getElementSize(xpath.XPATH_UI);
        expect(bgColor.parsed.hex).to.equal('#333333');
        expect(size.width).to.equal(size.width);
        expect(size.height).to.equal(size.height);
    });

    // it('[Label-3] should verify that the Label object contains the the below attibutes', function () {
    //     expect($(xpath.XPATH_CONSTRUCTOR).getText()).to.equal('constructorLabel');
    // });

    it('[Label-4] should verify that can create a label without any options value', function () {
        let alertIsEnabled = isVisibled(xpath.XPATH_NO_OPTION_LABEL,true);
        expect(alertIsEnabled).to.equal(true);  
    });

    it('[Label-3-5] should verify that the Label object contains the the below attibutes and can create a label with full options value', function () {
       let visibleLabel = browser.isVisible(xpath.XPATH_FULL_OPTION_LABEL);
       let requiredLabel = xpath.XPATH_FULL_OPTION_LABEL + "//span[@class='kuc-require']"
       let checkRequired = browser.isExisting(requiredLabel);
       let disableLabel = browser.isEnabled(xpath.XPATH_FULL_OPTION_LABEL);
       let textLabel = browser.getText(xpath.XPATH_FULL_OPTION_LABEL);
       expect(visibleLabel).to.equal(true);
       expect(checkRequired).to.equal(false);
       expect(disableLabel).to.equal(true);
       expect(textLabel).to.equal('full option Label');
    });

    it('[Label-6] should verify that can create a label with only option.Text', function () {
        let isContentVisibled = isVisibled(xpath. XPATH_ONLY_TEXT_LABEL,true);
        expect(isContentVisibled).to.equal(true);
        expect($(xpath.XPATH_ONLY_TEXT_LABEL).getText()).to.equal('only options.Text Label');
    });

    it('[Label-7] should verify that can create a label with only option.isRequired is True', function () {
        let classNameOfSelectedItem = xpath.XPATH_ONLY_REQUIRED_LABEL;
        let checkExist = browser.isExisting(classNameOfSelectedItem);
        expect($(classNameOfSelectedItem).getText()).to.equal('*');
        expect(checkExist).to.equal(true);
    });

    it('[Label-8] should verify that can create a label with only option.isRequired is False', function () {
        let classNameOfSelectedItem = xpath.XPATH_ONLY_REQUIRED_LABEL_1
        let checkExist = browser.isExisting(classNameOfSelectedItem);
        expect(checkExist).to.equal(false);
    });

    it('[Label-9] should verify that can create a label with only option.isDisabled is True', function () {
        $(xpath.XPATH_ONLY_DISABLED_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();
    });

    it('[Label-10] should verify that can create a label with only option.isDisabled is False', function () {
        $(xpath.XPATH_ONLY_DISABLED_BUTTON_1).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Label-11] should verify that can create a label with only option.isVisibled is True', function () {
        let alertIsEnabled = isVisibled(xpath.XPATH_ONLY_VISIBLE_LABEL,true);
        expect(alertIsEnabled).to.equal(true);  
    });

    it('[Label-12] should verify that can create a label with only option.isVisibled is False', function () {
        let alertIsEnabled = isVisibled(xpath.XPATH_ONLY_VISIBLE_LABEL_1,false);
        expect(alertIsEnabled).to.equal(false);  
    });

    it('[Label-15-16] should set text for label which not contain existing text and contain existing text', function () {
        let orginalText = browser.getText(xpath.XPATH_SET_TEXT_LABEL);
        expect(orginalText).to.equal('')
        $(xpath.XPATH_SET_TEXT_BUTTON_LABEL).click();
        let beforeSetText = browser.getText(xpath.XPATH_SET_TEXT_LABEL);
        expect(beforeSetText).to.equal('Set text for label not contain existing text')
        $(xpath.XPATH_SET_TEXT_BUTTON_1_LABEL).click();
        let afterSetText = browser.getText(xpath.XPATH_SET_TEXT_LABEL);
        expect(afterSetText).to.equal('Set text for label contain existing text')
    });

    it('[Label-17] should set text for label with XSS value', function () {
        let beforeSetText = browser.getText(xpath.XPATH_SET_XSS_VALUE_LABEL);
        expect(beforeSetText).to.equal('Set XSS Value for Label');
        $(xpath.XPATH_SET_XSS_BUTTON_LABEL).click();
        let afterSetText = browser.getText(xpath.XPATH_SET_XSS_VALUE_LABEL);
        expect(afterSetText).to.equal("alert('XSS Attack');")
    });

    it('[Label-18] should set text for invisible label', function () {
        let beforeSetTextVisible = browser.isVisible(xpath.XPATH_SET_TEXT_INVISIBLE_LABEL);
        expect(beforeSetTextVisible).to.equal(false);
        $(xpath.XPATH_SET_TEXT_INVISIBLE_BUTTON_LABEL).click();
        $(xpath.XPATH_SHOW_TEXT_INVISIBLE_BUTTON_LABEL).click();
        let afterSetTextVisible = browser.isVisible(xpath.XPATH_SET_TEXT_INVISIBLE_LABEL);
        expect(afterSetTextVisible).to.equal(true);
        let afterSetText = browser.getText(xpath.XPATH_SET_TEXT_INVISIBLE_LABEL);
        expect(afterSetText).to.equal("Set text with invisible label")
    });

    it('[Label-19] should set text label to blank ', function () {
        let beforeSetText = browser.getText(xpath.XPATH_SET_TEXT_BLANK_LABEL);
        expect(beforeSetText).to.equal('Set text to blank');
        $(xpath.XPATH_SET_TEXT_BLANK_BUTTON_LABEL).click();
        let afterSetText = browser.getText(xpath.XPATH_SET_TEXT_BLANK_LABEL);
        expect(afterSetText).to.equal('')
    });

    it('[Label-20] should set text without parameter ', function () {
        let beforeSetText = browser.getText(xpath.XPATH_SET_TEXT_NO_PARAM_LABEL);
        expect(beforeSetText).to.equal('Set text with no parameter for Label');
        $(xpath.XPATH_SET_TEXT_NO_PARAM_BUTTON_LABEL).click();
        let afterSetText = browser.getText(xpath.XPATH_SET_TEXT_NO_PARAM_LABEL);
        expect(afterSetText).to.equal('')
    });


    // it('[Label-21] should set the required icon for label with require is true', function () {
    //     $(xpath.XPATH_SET_REQUIRED).execute(() => {
    //         setRequiredTrueLabel.setRequired(true);
    //     });
    //     let isRequiredAtteriskDisplayed = isVisibled(xpath.XPATH_SET_REQUIRED_ATTERISK, true);
    //     expect(isRequiredAtteriskDisplayed).to.equal(true);
    // });

    it('[Label-22] should hidden the required icon for exisiting required label when using setRequired(false)', function () {
        let setFalseRequired = xpath.XPATH_SET_FALSE_REQUIRED_LABEL;
        let checkRequired = browser.isExisting(setFalseRequired);
        expect(checkRequired).to.equal(true);
        $(xpath.XPATH_SET_FALSE_REQUIRED_BUTTON_LABEL).click();
        checkRequired = browser.isExisting(setFalseRequired);
        expect(checkRequired).to.equal(false);
    });

    it('[Label-21-23] should set the required label when using setRequired(true) for the existing required label', function () {
        let setTrueRequired = xpath.XPATH_SET_TRUE_REQUIRED_LABEL;
        let checkRequired = browser.isExisting(setTrueRequired);
        expect(checkRequired).to.equal(false);
        $(xpath.XPATH_SET_TRUE_REQUIRED_BUTTON_LABEL).click();
        let getColor = $(setTrueRequired).getCssProperty('color');
        checkRequired = browser.isExisting(setTrueRequired);
        expect(checkRequired).to.equal(true);
        expect($(setTrueRequired).getText()).to.equal('*');
        expect(getColor.parsed.hex).to.equal('#e74c3c');
    });

    it('[Label-24] should set required for invisible label ', function () {
        let classNameOfSelectedItem = xpath.XPATH_SET_REQUIRED_INVISIBLE_LABEL
        let checkExist = browser.isExisting(classNameOfSelectedItem);
        let checkVisible = browser.isVisible(classNameOfSelectedItem)
        expect(checkExist).to.equal(false);
        expect(checkVisible).to.equal(false);
        $(xpath.XPATH_SET_REQUIRED_BUTTON_INVISIBLE_LABEL).click();
        checkExist = browser.isExisting(classNameOfSelectedItem);
        expect(checkExist).to.equal(true);
    });
    
    it('[Label-25] should set required without parameter for label ', function () {
        let classNameOfSelectedItem = xpath.XPATH_SET_REQUIRED_NO_PARAM_LABEL
        let checkExist = browser.isExisting(classNameOfSelectedItem);
        expect(checkExist).to.equal(false);
        $(xpath.XPATH_SET_REQUIRED_NO_PARAM_BUTTON_LABEL).click();
        checkExist = browser.isExisting(classNameOfSelectedItem);
        expect(checkExist).to.equal(false);
    });

    it('[Label-28] should show invisible Label and visible Label on UI', function () {
        let invisibleLabel = browser.isVisible(xpath.XPATH_INVISIBLE_SHOW_LABEL);
        let visibleLabel = browser.isVisible(xpath.XPATH_VISIBLE_SHOW_LABEL);
        expect(invisibleLabel).to.equal(false);
        expect(visibleLabel).to.equal(true);
        $(xpath.XPATH_SHOW_BUTTON_LABEL).click();
        invisibleLabel = browser.isVisible(xpath.XPATH_INVISIBLE_SHOW_LABEL);
        visibleLabel = browser.isVisible(xpath.XPATH_VISIBLE_SHOW_LABEL);
        expect(invisibleLabel).to.equal(true);
        expect(visibleLabel).to.equal(true);
    });

    it('[Label-30] should hide the visible Label and invisible Label on UI', function () {
        let visibleLabel = browser.isVisible(xpath.XPATH_VISIBLE_HIDE_LABEL);
        let invisibleLabel = browser.isVisible(xpath.XPATH_INVISIBLE_HIDE_LABEL);
        expect(visibleLabel).to.equal(true);
        expect(invisibleLabel).to.equal(false);
        $(xpath.XPATH_HIDE_BUTTON_LABEL).click();
        visibleLabel = browser.isVisible(xpath.XPATH_VISIBLE_HIDE_LABEL);
        invisibleLabel = browser.isVisible(xpath.XPATH_INVISIBLE_HIDE_LABEL);
        expect(visibleLabel).to.equal(false);
        expect(invisibleLabel).to.equal(false); 
    });

    it('[Label-32] should disable the current enable Label and disable the current disable on UI', function () {
        let enableLabel = browser.getAttribute(xpath.XPATH_DISABLE_ENABLE_LABEL, 'disabled');
        let disableLabel = browser.getAttribute(xpath.XPATH_DISABLE_DISABLE_LABEL, 'disabled');
        expect(enableLabel).to.equal(null)
        expect(disableLabel).to.equal('true');
        $(xpath.XPATH_DISABLE_BUTTON_LABEL).click();
        enableLabel = browser.getAttribute(xpath.XPATH_DISABLE_ENABLE_LABEL, 'disabled');
        disableLabel = browser.getAttribute(xpath.XPATH_DISABLE_DISABLE_LABEL, 'disabled');
        expect(enableLabel).to.equal('true')
        expect(disableLabel).to.equal('true');
    });

    it('[Label-34] should enable the disabled Label on UI', function () {
        let disableLabel = browser.getAttribute(xpath.XPATH_ENABLE_DISABLE_LABEL, 'disabled');
        let enableLabel = browser.getAttribute(xpath.XPATH_ENABLE_ENABLE_LABEL, 'disabled');
        expect(disableLabel).to.equal('true');
        expect(enableLabel).to.equal(null)
        $(xpath.XPATH_ENABLE_BUTTON_LABEL).click();
        disableLabel = browser.getAttribute(xpath.XPATH_ENABLE_DISABLE_LABEL, 'disabled');
        enableLabel = browser.getAttribute(xpath.XPATH_ENABLE_ENABLE_LABEL, 'disabled');
        expect(enableLabel).to.equal(null)
        expect(disableLabel).to.equal(null);
    });

    it('[Label-36] should register a callback function for click event successfully', function () {
        $(xpath.XPATH_ON_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('onFunctionLabel has been clicked');
        browser.alertAccept();
    });

    it('[Label-37] should verify that the callback function will be trigger when click on the textbox', function () {
        $(xpath.XPATH_ON_TRIG).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('onTriggerLabel has been clicked');
        browser.alertAccept();
    });
});