const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/Common.js');
const expect = require('chai').expect;

const BODY = "//body";
const UI = "//span[@class='kuc-input-radio-item' and ./label/text()='Orange' and ./input/@name='UI_radioBtn']";
const CONSTRUCTOR = "//*[@id='constructorWithoutValueOption_radioBtnEl']//input";
const FULL_CONSTRUCTOR = "(//*[@id='radioBtnFullConstructorEl']//input)[1]";
const ADD_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Dell')]";
const ADD_LAST_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Dell - last')]";
const REMOVE_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'PC')]";
const GET_ITEM = "//button[contains(text(), 'Get Items of Full Radio Button')]";
const GET_ITEM_INVISIBLE = "//button[contains(text(), 'Get Items of Invisible')]";
const GET_VALUE = "//button[contains(text(), 'Get Value Radio Button')]";
const GET_VALUE_INVISIBLE = "//button[contains(text(), 'Get Value of Invisible')]";
const GET_VALUE_SET_VALUE = "//button[contains(text(), 'Get Value of setValue')]";
const DISABLE_ENABLE_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Coca Cola')]";
const AFTER_DISABLED_ENABLE_ITEM = "//span[@class='kuc-input-radio-item' and ./label/text()='Coca Cola' and ./input/@disabled]";
const DISABLE_DISABLE_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Aquafina')]";
const AFTER_DISABLED_DISABLE_ITEM = "//span[@class='kuc-input-radio-item' and ./label/text()='Aquafina' and ./input/@disabled]";
const DISABLE_ENABLE_INVISIBLE_ITEM = "//button[contains(text(), 'Get Value of Disabled Invisible')]";
const ENABLE_ENABLE_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'iDesk')]";
const AFTER_ENABLED_ENABLE_ITEM = "//span[@class='kuc-input-radio-item' and ./label/text()='iDesk' and ./input/@disabled]";
const ENABLE_DISABLE_ITEM = "//span[@class='kuc-input-radio-item']//label[contains(text(), 'Table')]";
const AFTER_ENABLED_DISABLE_ITEM = "//span[@class='kuc-input-radio-item' and ./label/text()='Table' and ./input/@disabled]";
const RENDER = "//input[@name='render_radioBtn']/ancestor::span";
const SHOW = "//label[contains(text(), 'First_Show')]";
const HIDE = "//label[contains(text(), 'First_Hide')]";
const DISABLE = "//span[@class='kuc-input-radio-item' and ./input/@disabled]/label[contains(text(), 'First_Disable')]";
const ENABLE = "//span[@class='kuc-input-radio-item' and ./input/@disabled]/label[contains(text(), 'First_Enable')]";
const ENABLED = "//span[@class='kuc-input-radio-item']/label[contains(text(), 'First_Enable')]";
const ON_FUNC = "//label[contains(text(), 'Main')]";
const ON_TRIGGER = "//label[contains(text(), 'First_OnTrigger')]";

describe('kintoneUIComponent - Radio button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[RadioButton-2] should Verify that the Radio Button have the  UI is the same as Radio Button on kintone', function () {
        let radBtnBgColor = $(UI).getCssProperty('color');
        let radBtnSize = browser.getElementSize(UI);
        expect(radBtnBgColor.parsed.hex).to.equal('#333333');
        expect(radBtnSize.width).to.equal(radBtnSize.width);
        expect(radBtnSize.height).to.equal(radBtnSize.height);
    });

    it('[RadioButton-5] should verify that can create a Radio Button without any options value', function () {
        let constructorName = browser.getAttribute(CONSTRUCTOR, 'name')[0];
        expect(constructorName).to.equal('constructorWithoutValueOption_radioBtn');
    });

    it('[RadioButton-6] should verify that can create a Radio Button with full options default value', function () {
        let constructorName = browser.getAttribute(FULL_CONSTRUCTOR, 'name');
        expect(constructorName).to.equal('constructorFullOptions_radioBtn');
    });

    // it('[RadioButton-15] should verify cannot create a Radio Button with option.name and options.items (contain only options.items[].isDisabled)', function () {
    //     let isRadioBtnVisibled = isVisibled(ONLY_DISABLED_ITEMS_CONSTRUCTOR, true);
    //     expect(isRadioBtnVisibled).to.equal(true);
    // });

    // it('[RadioButton-16] should Verify cannot create a Radio Button with option.name and options.items (contain both options.items[].label and options.items[].isDisabled)', function () {
    //     let isRadioBtnVisibled = isVisibled(WITH_LABEL_AND_DISABLED_ITEMS_CONSTRUCTOR, true);
    //     expect(isRadioBtnVisibled).to.equal(true);
    // });

    it('[RadioButton-24] should add an item to the Radio Button list with full value for item', function () {
        $(BODY).execute(() => {
            radioBtnAddItems.addItem({
                label: 'Surface',
                value: 'Surface',
                isDisabled: false
            });
        });
        $(ADD_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('Surface');
        browser.alertAccept();
    });

    it('[RadioButton-30] should verify that the default for item.isDisabled is False', function () {
        $(BODY).execute(() => {
            radioBtnAddItemsGetLast.addItem({
                label: 'Surface - last',
                value: 'Surface - last',
                isDisabled: false
            });
        });
        $(ADD_LAST_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('Surface - last');
        browser.alertAccept();
    });


    it('[RadioButton-37] should remove an item with index', function () {
        $(BODY).execute(() => {
            radioBtnRemoveItems.removeItem(3);
        });
        $(REMOVE_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('3');
        browser.alertAccept();
    });

    // it('[RadioButton-41] should cannot remove an item with wrong data type for index - FAILED CASE', function () {
    //     $(BODY).execute(() => {
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
        $(GET_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        browser.alertAccept();
    });

    it('[RadioButton-47] should return list have the same value of item with the Radio Button list', function () {
        $(GET_ITEM_INVISIBLE).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[RadioButton-49] should get the value of the selected item', function () {
        $(GET_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Ice Cream');
        browser.alertAccept();
    });

    it('[RadioButton-52] should get the value of the selected item for invisible radio button', function () {
        $(GET_VALUE_INVISIBLE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Ice Cream');
        browser.alertAccept();
    });

    it('[RadioButton-54] should set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        $(BODY).execute(() => {
            radioBtnSetValue.setValue('C#');
        });
        $(GET_VALUE_SET_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('C#');
        browser.alertAccept();
    });

    it('[RadioButton-58] should set disabled for existing enable item by the valid value of an item in radiobutton', function () {
        $(DISABLE_ENABLE_ITEM).execute(() => {
            radioBtnDisable.disableItem('Coca Cola');
        });
        let isDisabledItem = isVisibled(AFTER_DISABLED_ENABLE_ITEM, true);
        expect(isDisabledItem).to.equal(true);
    });

    it('[RadioButton-59] should set disabled for existing disable item by the valid value of an item in radiobutton', function () {
        $(DISABLE_DISABLE_ITEM).execute(() => {
            radioBtnDisable.disableItem('Aquafina');
        });
        let isDisabledItem = isVisibled(AFTER_DISABLED_DISABLE_ITEM, true);
        expect(isDisabledItem).to.equal(true);
    });

    it('[RadioButton-60] should set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        $(DISABLE_ENABLE_INVISIBLE_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[RadioButton-63] should set enable for existing disable item by the valid value of an item in radiobutton', function () {
        $(ENABLE_ENABLE_ITEM).execute(() => {
            radioBtnEnable.enableItem('iDesk');
        });
        let isDisabledItem = isVisibled(AFTER_ENABLED_ENABLE_ITEM, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-64] should set enabled for existing enable item by the valid value of an item in radiobutton', function () {
        $(ENABLE_DISABLE_ITEM).execute(() => {
            radioBtnEnable.enableItem('Table');
        });
        let isDisabledItem = isVisibled(AFTER_ENABLED_DISABLE_ITEM, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-68] should cannot render the UI for the radiobutton when dont use the render() function', function () {
        let isDisabledItem = isVisibled(RENDER, false);
        expect(isDisabledItem).to.equal(false);
    });

    it('[RadioButton-69] should can show invisible radiobutton on UI', function () {
        $(BODY).execute(() => {
            radioBtnShow.show();
        });
        let isVisibledBtn = isVisibled(SHOW, true);
        expect(isVisibledBtn).to.equal(true);
    });

    it('[RadioButton-71] should hide the visible radiobutton on UI', function () {
        $(BODY).execute(() => {
            radioBtnHide.hide();
        });
        let isVisibledBtn = isVisibled(HIDE, false);
        expect(isVisibledBtn).to.equal(false);
    });

    it('[RadioButton-73] should disable the current enable radiobutton on UI', function () {
        $(BODY).execute(() => {
            disabled_radioBtn.disable();
        });
        let isEnabledTxt = isEnabled(DISABLE, true);
        expect(isEnabledTxt).to.equal(true);
    });

    it('[RadioButton-75] should enable the disabled radiobutton on UI', function () {
        $(ENABLE).execute(() => {
            enabled_radioBtn.enable();
        });
        let isEnabledTxt = isEnabled(ENABLED, true);
        expect(isEnabledTxt).to.equal(true);
    });

    it('[RadioButton-77] should register a callback function for change event successfully', function () {
        $(ON_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('onFunc_radioBtn has been changed');
        browser.alertAccept();
    });

    it('[RadioButton-78] should callback function will be trigger when change the value for radiobutton', function () {
        $(ON_TRIGGER).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('onTrigger_radioBtn has been changed');
        browser.alertAccept();
    });
});