const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../utils/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/checkbox.xpath');

describe('kintoneUIComponent - Checkbox', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Checkbox-1] should checking UI for checkbox', function () {
        let checkboxBgColor = $(xpath.XPATH_UI_CHECKBOX).getCssProperty('color');
        let checkboxSize = browser.getElementSize(xpath.XPATH_UI_CHECKBOX);
        let checkboxPosition = $(xpath.XPATH_UI_CHECKBOX).getCssProperty('position');
        expect(checkboxBgColor.parsed.hex).to.equal('#333333');
        expect(checkboxSize.width).to.equal(checkboxSize.width);
        expect(checkboxSize.height).to.equal(checkboxSize.height);
        expect(checkboxPosition.value).to.equal('static');
    });

    it('[Checkbox-5] should create a Checkbox with full options', function () {
        let isVisible = isVisibled(xpath.XPATH_CHECKBOX_FULL_OPTION, true);
        expect(isVisible).to.equal(true);
    });

    it('[Checkbox-4] should create a Checkbox without any options value', function () {
        let isVisible = isVisibled(xpath.XPATH_WITHOUT_OPTION_VALUE, true);
        expect(isVisible).to.equal(true);
    });

    it('[Checkbox-15] should verify create a Checkbox with only option.value', function () {  
        let isVisible = isVisibled(xpath.XPATH_ONLY_OPTION_VALUE, true);
        expect(isVisible).to.equal(true);
    });

    it('[Checkbox-23] should add an item to the checkbox list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_full_value_AIFV_chkbox.addItem({
                label: 'AIFV_Item_Checkbox_new',
                value: 'AIFV_Item_Checkbox_new',
                isDisabled: false
            });
            add_item_full_value_AIFV_chkbox.addItem({
                label: 'AIFV_Item_Checkbox_disabled',
                value: 'AIFV_Item_Checkbox_disabled',
                isDisabled: true
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIFV_Item_Checkbox_new');
        expect(alertText).to.include('"isDisabled":false');
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();
    });

    it('[Checkbox-30] should add an item to the invisible checkbox list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_invi_AII_chkbox.addItem({
                label: 'AII_Item_Checkbox_new',
                value: 'AII_Item_Checkbox_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_INVISIBLE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AII_Item_Checkbox_new');
        browser.alertAccept();
    });

    it('[Checkbox-31] should add an item to the checkbox with only item.value', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_only_value_AIOV_chkbox.addItem({
                value: 'AIOV_Item_Checkbox_new'
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_ONLY_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIOV_Item_Checkbox_new');
        browser.alertAccept();
    });

    it('[CheckBox-49-51] should get item by index', function () {
        $(xpath.XPATH_BODY).execute(() => {
            indexItem = 0;
        });
        $(xpath.XPATH_GET_ITEM_INDEX_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('"isDisabled":true');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            indexItem = 1;
        });
        $(xpath.XPATH_GET_ITEM_INDEX_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('"isDisabled":false');
        browser.alertAccept();
    });

    it('[Checkbox-57-58-59] should get items of checkbox', function () {
        $(xpath.XPATH_GET_ITEMS_FOR_MULTIPLECHOICE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('"isDisabled":true');
        expect(alertText).to.include('"isDisabled":false');
        browser.alertAccept();
    });

    it('[Checkbox-62-63] should get value of checkbox', function () {
        let selectedCheckboxValueContent = $(xpath.XPATH_GET_VALUE_SELECTED_ITEM).getText();
        $(xpath.XPATH_GET_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal(selectedCheckboxValueContent);
        browser.alertAccept();
    });

    it('[Checkbox-67-68] should set value of checkbox', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_value_SV_chkbox.setValue(['SV_Default_Item_Checkbox']);
        });
        let selectedCheckboxValue = $(xpath.XPATH_SET_VALUE_DROPDOWN).getText();
        expect(selectedCheckboxValue).to.equal('SV_Default_Item_Checkbox');
    });

    it('[CheckBox-70-72] should disable items of checkbox', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_disable_item_SDI_chkbox.disableItem('SDI_Default_Item_Checkbox');
        });
        let isVisibledDisabledItem = isVisibled(xpath.XPATH_ITEM_ENABLED_CONTENT, true);
        expect(isVisibledDisabledItem).to.equal(true);
    });

    it('[Checkbox-76] should enable items of checkbox', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_chkbox.enableItem('SEI_Default_Item_Checkbox');
        });
        let isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_ENABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);

        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_chkbox.hide();
        });

        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_chkbox.enableItem('SEI_Item_Checkbox_Disable');
        });
        isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_DISABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);
    });

    it('[Checkbox-80] should show invisible Checkbox on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            show_chkbox.show();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_SHOW_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });
    
    it('[Checkbox-82-83] should hide visible Checkbox on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            hide_chkbox.hide();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_HIDE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Checkbox-84] should disable the current enable Checkbox on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            disable_chkbox.disable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_DISABLE_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Checkbox-86] should enable the current disable Checkbox on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            enable_chkbox.enable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_ENABLE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Checkbox-88] should register a callback function for change event successfully', function () {
        $(xpath.XPATH_ITEM_ON_CHANGE_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_function_chkbox has been changed');
        browser.alertAccept();
    });

    it('[Checkbox-89] should callback function will be trigger when change the value for checkbox', function () {
        $(xpath.XPATH_ITEM_ON_CHANGE_TRIG).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_trigger_chkbox has been changed');
        browser.alertAccept();
    });
});