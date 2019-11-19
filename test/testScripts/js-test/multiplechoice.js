const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../util/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/multiplechoice.xpath');

describe('kintoneUIComponent - Multiple Choice', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[MultipleChoice-2] should verify UI', function () {
        let mulchoiceBgColor = $(xpath.XPATH_MULCHOICE_FULL_OPTION).getCssProperty('color');
        let mulchoiceSize = browser.getElementSize(xpath.XPATH_MULCHOICE_FULL_OPTION);
        expect(mulchoiceBgColor.parsed.hex).to.equal('#333333');
        expect(mulchoiceSize.width).to.equal(mulchoiceSize.width);
        expect(mulchoiceSize.height).to.equal(mulchoiceSize.height);
    });

    it('[MultipleChoice-5] should create a MultipleChoice with full options', function () {
        let isVisible = isVisibled(xpath.XPATH_MULCHOICE_FULL_OPTION, true);
        expect(isVisible).to.equal(true);
    });

    it('[MultipleChoice-6] should create a MultipleChoice without any options value', function () {
        let isVisible = isVisibled(xpath.XPATH_WITHOUT_OPTION_VALUE, true);
        expect(isVisible).to.equal(true);
    });

    it('[MultipleChoice-16] should verify create a MultipleChoice with only option.value', function () {  
        let isVisible = isVisibled(xpath.XPATH_ONLY_OPTION_VALUE, true);
        expect(isVisible).to.equal(true);
    });

    it('[MultipleChoice-22] should add an item to the multipleChoice list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_full_value_AIFV_mulChoice.addItem({
                label: 'AIFV_MulChoice_Item_new',
                value: 'AIFV_MulChoice_Item_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIFV_MulChoice_Item_new');
        browser.alertAccept();
    });

    it('[MultipleChoice-23] should add an item to the invisible multipleChoice list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_invi_AII_mulChoice.addItem({
                label: 'AII_MulChoice_Item_new',
                value: 'AII_MulChoice_Item_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_INVISIBLE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AII_MulChoice_Item_new');
        browser.alertAccept();
    });

    it('[MultipleChoice-24] should add an item to the multipleChoice with only item.value', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_only_value_AIOV_mulChoice.addItem({
                value: 'AIOV_MulChoice_Item_new'
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_ONLY_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIOV_MulChoice_Item_new');
        browser.alertAccept();
    });

    it('[MultipleChoice-31] should add an item to the multipleChoice without item.value', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_without_value_AIWVM_mulChoice.addItem({
                label: 'AIWVM_MulChoice_Item_new'
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_WITHOUT_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIWVM_MulChoice_Item_new');
        browser.alertAccept();
    });

    it('[MultipleChoice-40-41] should remove an item of multiple choice', function () {
        $(xpath.XPATH_BODY).execute(() => {
            remove_item_RI_multipleChoice.removeItem(0);
        });
        $(xpath.XPATH_GET_VALUE_OF_REMOVED_ITEMS_MULCHOICE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.not.include('RI_Default_MulChoice_Item');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            remove_item_RI_multipleChoice.removeItem(1);
        });
        $(xpath.XPATH_GET_VALUE_OF_REMOVED_ITEMS_MULCHOICE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.not.include('RI_MulChoice_Item_3');
        browser.alertAccept();
    });

    it('[MultipleChoice-46-48-49] should get item by index', function () {
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

    it('[MultipleChoice-52-53-54] should get items of multiple choice', function () {
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

    it('[MultipleChoice-58] should get value of multipleChoice', function () {
        let selectedMultipleChoiceValueContent = $(xpath.XPATH_GET_VALUE_SELECTED_ITEM).getText();
        $(xpath.XPATH_GET_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal(selectedMultipleChoiceValueContent);
        browser.alertAccept();
    });

    it('[MultipleChoice-60] should set value of multipleChoice', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_value_SV_multipleChoice.setValue(['SV_Default_MulChoice_Item']);
        });
        let selectedMultipleChoiceValue = $(xpath.XPATH_SET_VALUE_DROPDOWN).getText();
        expect(selectedMultipleChoiceValue).to.equal('SV_Default_MulChoice_Item');
    });

    it('[MultipleChoice-64] should disable items of multipleChoice', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_disable_item_SDI_multipleChoice.disableItem('SDI_Default_MulChoice_Item');
        });
        let isVisibledDisabledItem = isVisibled(xpath.XPATH_ITEM_ENABLED_CONTENT, true);
        expect(isVisibledDisabledItem).to.equal(true);
    });

    it('[MultipleChoice-69-71] should enable items of multipleChoice', function () {
        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_multipleChoice.enableItem('SEI_Default_MulChoice_Item');
        });
        let isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_ENABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);

        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_multipleChoice.hide();
        });

        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_multipleChoice.enableItem('SEI_MulChoice_Item_Disable');
        });
        isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_DISABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);
    });

    it('[MultipleChoice-75] should show invisible MultipleChoice on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            show_multipleChoice.show();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_SHOW_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });
    
    it('[MultipleChoice-77] should hide visible MultipleChoice on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            hide_multipleChoice.hide();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_HIDE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[MultipleChoice-79] should disable the current enable MultipleChoice on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            disable_multipleChoice.disable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_DISABLE_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[MultipleChoice-81] should enable the current disable MultipleChoice on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            enable_multipleChoice.enable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_ENABLE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[MultipleChoice-83] should register a callback function for change event successfully', function () {
        $(xpath.XPATH_ITEM_ON_CHANGE_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_function_multipleChoice has been changed');
        browser.alertAccept();
    });

    it('[MultipleChoice-84] should callback function will be trigger when change the value for multipleChoice', function () {
        $(xpath.XPATH_ITEM_ON_CHANGE_TRIG).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_trigger_multipleChoice has been changed');
        browser.alertAccept();
    });
});