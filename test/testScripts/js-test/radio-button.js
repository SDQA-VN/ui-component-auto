const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../util/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../util/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/radio-button.xpath');

describe('kintoneUIComponent - Radio button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[RadioButton-2] should Verify that the Radio Button have the  UI is the same as Radio Button on kintone', function () {
        let radBtnBgColor = $(xpath.XPATH_UI).getCssProperty('color');
        let radBtnSize = browser.getElementSize(xpath.XPATH_UI);
        expect(radBtnBgColor.parsed.hex).to.equal('#333333');
        expect(radBtnSize.width).to.equal(radBtnSize.width);
        expect(radBtnSize.height).to.equal(radBtnSize.height);
    });

    it('[RadioButton-5] should verify that can create a Radio Button without any options value', function () {
        let constructorName = browser.getAttribute(xpath.XPATH_CONSTRUCTOR, 'name')[0];
        expect(constructorName).to.equal('constructorWithoutValueOption_radioBtn');
    });

    it('[RadioButton-6] should verify that can create a Radio Button with full options default value', function () {
        let constructorName = browser.getAttribute(xpath.XPATH_FULL_CONSTRUCTOR, 'name');
        expect(constructorName).to.equal('constructorFullOptions_radioBtn');
    });

    // it('[RadioButton-15] should verify cannot create a Radio Button with option.name and options.items (contain only options.items[].isDisabled)', function () {
    //     let isRadioBtnVisibled = isVisibled(xpath.XPATH_ONLY_DISABLED_ITEMS_CONSTRUCTOR, true);
    //     expect(isRadioBtnVisibled).to.equal(true);
    // });

    // it('[RadioButton-16] should Verify cannot create a Radio Button with option.name and options.items (contain both options.items[].label and options.items[].isDisabled)', function () {
    //     let isRadioBtnVisibled = isVisibled(xpath.XPATH_WITH_LABEL_AND_DISABLED_ITEMS_CONSTRUCTOR, true);
    //     expect(isRadioBtnVisibled).to.equal(true);
    // });

    it('[RadioButton-24] should add an item to the Radio Button list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnAddItems.addItem({
                label: 'Surface',
                value: 'Surface',
                isDisabled: false
            });
        });
        $(xpath.XPATH_ADD_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('Surface');
        browser.alertAccept();
    });

    it('[RadioButton-30] should verify that the default for item.isDisabled is False', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnAddItemsGetLast.addItem({
                label: 'Surface - last',
                value: 'Surface - last',
                isDisabled: false
            });
        });
        $(xpath.XPATH_ADD_LAST_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('Surface - last');
        browser.alertAccept();
    });


    it('[RadioButton-37] should remove an item with index', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnRemoveItems.removeItem(3);
        });
        $(xpath.XPATH_REMOVE_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('3');
        browser.alertAccept();
    });

    // it('[RadioButton-41] should cannot remove an item with wrong data type for index - FAILED CASE', function () {
    //     $(xpath.XPATH_BODY).execute(() => {
    //         radioBtnRemoveItems.removeItem('Stationery');
    //     });
    //     fs.writeFile("./object.json", JSON.stringify(browser.log('browser').value), (err) => {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         };
    //         console.log("File has been created");
    //     });
    //     console.log(JSON.stringify(browser.log('browser').value));
    // });

    it('[RadioButton-46] should return list have the same value of item with the Radio Button list', function () {
        $(xpath.XPATH_GET_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        browser.alertAccept();
    });

    it('[RadioButton-47] should return list have the same value of item with the Radio Button list', function () {
        $(xpath.XPATH_GET_ITEM_INVISIBLE).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[RadioButton-49] should get the value of the selected item', function () {
        $(xpath.XPATH_GET_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Ice Cream');
        browser.alertAccept();
    });

    it('[RadioButton-52] should get the value of the selected item for invisible radio button', function () {
        $(xpath.XPATH_GET_VALUE_INVISIBLE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Ice Cream');
        browser.alertAccept();
    });

    it('[RadioButton-54] should set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnSetValue.setValue('C#');
        });
        $(xpath.XPATH_GET_VALUE_SET_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('C#');
        browser.alertAccept();
    });

    it('[RadioButton-58] should set disabled for existing enable item by the valid value of an item in radiobutton', function () {
        $(xpath.XPATH_DISABLE_ENABLE_ITEM).execute(() => {
            radioBtnDisable.disableItem('Coca Cola');
        });
        let isDisabledItem = isVisibled(xpath.XPATH_AFTER_DISABLED_ENABLE_ITEM, true);
        expect(isDisabledItem).to.equal(true);
    });

    it('[RadioButton-59] should set disabled for existing disable item by the valid value of an item in radiobutton', function () {
        $(xpath.XPATH_DISABLE_DISABLE_ITEM).execute(() => {
            radioBtnDisable.disableItem('Aquafina');
        });
        let isDisabledItem = isVisibled(xpath.XPATH_AFTER_DISABLED_DISABLE_ITEM, true);
        expect(isDisabledItem).to.equal(true);
    });

    it('[RadioButton-60] should set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        $(xpath.XPATH_DISABLE_ENABLE_INVISIBLE_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[RadioButton-63] should set enable for existing disable item by the valid value of an item in radiobutton', function () {
        $(xpath.XPATH_ENABLE_ENABLE_ITEM).execute(() => {
            radioBtnEnable.enableItem('iDesk');
        });
        let isDisabledItem = isVisibled(xpath.XPATH_AFTER_ENABLED_ENABLE_ITEM, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-64] should set enabled for existing enable item by the valid value of an item in radiobutton', function () {
        $(xpath.XPATH_ENABLE_DISABLE_ITEM).execute(() => {
            radioBtnEnable.enableItem('Table');
        });
        let isDisabledItem = isVisibled(xpath.XPATH_AFTER_ENABLED_DISABLE_ITEM, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-68] should cannot render the UI for the radiobutton when dont use the render() function', function () {
        let isDisabledItem = isVisibled(xpath.XPATH_RENDER, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-69] should can show invisible radiobutton on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnShow.show();
        });
        let isVisibledBtn = isVisibled(xpath.XPATH_SHOW, true);
        expect(isVisibledBtn).to.equal(true);
    });

    it('[RadioButton-71] should hide the visible radiobutton on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            radioBtnHide.hide();
        });
        let isVisibledBtn = isVisibled(xpath.XPATH_HIDE, false);
        expect(isVisibledBtn).to.equal(false);
    });

    it('[RadioButton-73] should disable the current enable radiobutton on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            disabled_radioBtn.disable();
        });
        let isEnabledTxt = isEnabled(xpath.XPATH_DISABLE, true);
        expect(isEnabledTxt).to.equal(true);
    });
    
    it('[RadioButton-75] should enable the disabled radiobutton on UI', function () {
        $(xpath.XPATH_ENABLE).execute(() => {
            enabled_radioBtn.enable();
        });
        let isEnabledTxt = isEnabled(xpath.XPATH_ENABLED, true);
        expect(isEnabledTxt).to.equal(true);
    });

    it('[RadioButton-77] should register a callback function for change event successfully', function () {
        $(xpath.XPATH_ON_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('onFunc_radioBtn has been changed');
        browser.alertAccept();
    });

    it('[RadioButton-78] should callback function will be trigger when change the value for radiobutton', function () {
        $(xpath.XPATH_ON_TRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('onTrigger_radioBtn has been changed');
        browser.alertAccept();
    });
});