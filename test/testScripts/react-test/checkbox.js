const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const common = require('../../utils/common');
const expect = require('chai').expect;

const XPATH_CHECKBOX = '.checkbox-render .kuc-input-checkbox';
const XPATH_CHECKBOX_WITHOUT_OPTION_VALUE = '.checkbox-withoutOption .kuc-input-checkbox';
const XPATH_CHECKBOX_ONLY_OPTION_VALUE = '.checkbox-onlyValue .kuc-input-checkbox-item label';
const XPATH_CHECKBOX_ADD_ITEMS_VALUE = '.checkbox-addItems .kuc-input-checkbox-item label';
const XPATH_CHECKBOX_ADD_ENABLE_ITEMS_BUTTON = '.checkbox-addItems .add-items-enable';
const XPATH_CHECKBOX_ADD_DISABLE_ITEMS_BUTTON = '.checkbox-addItems .add-items-disable';
const XPATH_CHECKBOX_REMOVE_ITEMS_VALUE = '.checkbox-remove .kuc-input-checkbox-item';
const XPATH_CHECKBOX_REMOVE_ITEMS_BUTTON = '.checkbox-remove .remove-items';
const XPATH_CHECKBOX_GET_ITEMS_BUTTON = '.checkbox-getItems .get-items';
const XPATH_CHECKBOX_GET_ITEMS_INDEX_BUTTON = '.checkbox-getItemsIndex .get-items';
const XPATH_CHECKBOX_GET_VALUE_BUTTON = '.checkbox-getValue .get-value';
const XPATH_CHECKBOX_SET_VALUE_BUTTON = '.checkbox-setVisibleValue .set-value';
const XPATH_CHECKBOX_SET_VALUE = '.checkbox-setVisibleValue .kuc-input-checkbox-item label';
const XPATH_CHECKBOX_SET_DISABLE_VALUE = '.checkbox-setInvisibleValue .kuc-input-checkbox-item label';
const XPATH_CHECKBOX_SET_DISABLE_VALUE_BUTTON = '.checkbox-setInvisibleValue .set-value';
const XPATH_CHECKBOX_DISABLE_ITEMS = '.checkbox-disableItems .kuc-input-checkbox-item :disabled';
const XPATH_CHECKBOX_DISABLE_ITEMS_BUTTON = '.checkbox-disableItems .disable-items';
const XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS = '.invisibleCheckbox-disableItems .kuc-input-checkbox';
const XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_VALUE = '.invisibleCheckbox-disableItems .kuc-input-checkbox-item :disabled';
const XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_BUTTON = '.invisibleCheckbox-disableItems .disable-items';
const XPATH_CHECKBOX_ENABLE_ITEMS = '.checkbox-enableItems .kuc-input-checkbox-item :disabled';
const XPATH_CHECKBOX_ENABLE_ITEMS_BUTTON = '.checkbox-enableItems .enable-items';
const XPATH_CHECKBOX_SHOW = '.checkbox-show .kuc-input-checkbox';
const XPATH_CHECKBOX_DISPLAY_BUTTON = '.checkbox-show .show-checkbox';
const XPATH_CHECKBOX_HIDE = '.checkbox-hide .kuc-input-checkbox';
const XPATH_CHECKBOX_NON_DISPLAY_BUTTON = '.checkbox-hide .hide-checkbox';
const XPATH_INVISIBLE_CHECKBOX_HIDE = '.invisibleCheckbox-hide .kuc-input-checkbox';
const XPATH_INVISIBLE_CHECKBOX_NON_DISPLAY_BUTTON = '.invisibleCheckbox-hide .hide-checkbox';
const XPATH_CHECKBOX_DISABLE_BUTTON = '.checkbox-disable .disable-checkbox';
const XPATH_CHECKBOX_VALUE_ORANGE_DISABLE = '//div[@class="checkbox-disable"]//label[contains(text(), "Orange")]/parent::span/input[@disabled]';
const XPATH_CHECKBOX_VALUE_LEMON_DISABLE = '//div[@class="checkbox-disable"]//label[contains(text(), "Lemon")]/parent::span/input[@disabled]';
const XPATH_CHECKBOX_ENABLE = '.checkbox-enable .kuc-input-checkbox-item :disabled';
const XPATH_CHECKBOX_ENABLE_BUTTON = '.checkbox-enable .enable-checkbox';
const XPATH_CHECKBOX_ON_CALL_BUTTON = "//div[@class='checkbox-onCall']//label[contains(text(),'Orange')]";

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[CheckBox-2] Verify that the MultipleChoice have the  UI is the same as MultipleChoice on kintone', function () {
        let checkboxColor = $(XPATH_CHECKBOX).getCssProperty('background-color');
        expect(checkboxColor.parsed.hex).to.equal('#000000');
    });
    it('[CheckBox-4] Verify that can create a CheckBox without any options value', function () {
        let checkboxExist = browser.isExisting(XPATH_CHECKBOX_WITHOUT_OPTION_VALUE);
        expect(checkboxExist).to.equal(true);
    });
    it('[CheckBox-5]Verify that can create a CheckBox with full  options value', function () {
        let checkboxExist = browser.isExisting(XPATH_CHECKBOX);
        let checkboxEnable = browser.isEnabled(XPATH_CHECKBOX);
        let checkboxVisible = browser.isVisible(XPATH_CHECKBOX);
        expect(checkboxExist).to.equal(true);
        expect(checkboxEnable).to.equal(true);
        expect(checkboxVisible).to.equal(true);
    });
    it('[CheckBox-6]Verify that can create a CheckBox with full  options value', function () {
        let checkboxExist = browser.isExisting(XPATH_CHECKBOX_ONLY_OPTION_VALUE);
        let checkboxLabel = browser.getText(XPATH_CHECKBOX_ONLY_OPTION_VALUE)[0];;
        expect(checkboxExist).to.equal(true);
        expect(checkboxLabel).to.equal('');
    });
    it('[CheckBox-23-40] Verify that can add an item to the CheckBox list with full value for item', function () {
        $(XPATH_CHECKBOX_ADD_ENABLE_ITEMS_BUTTON).click();
        let checkboxValue = browser.getText(XPATH_CHECKBOX_ADD_ITEMS_VALUE)
        expect(checkboxValue).to.equal('Orange');
    });
    it('[CheckBox-41] Verify that the new added item is disabled if the item.isDisable is true', function () {
        browser.refresh()
        const XPATH_CHECKBOX_DISABLE = '.checkbox-addItems .kuc-input-checkbox-item :disabled'
        $(XPATH_CHECKBOX_ADD_DISABLE_ITEMS_BUTTON).click();
        let checkboxValue = browser.getText(XPATH_CHECKBOX_ADD_ITEMS_VALUE)
        let checkboxDisable = browser.isExisting(XPATH_CHECKBOX_DISABLE)
        expect(checkboxValue).to.equal('Lemon');
        expect(checkboxDisable).to.equal(true);
    });
    it('[CheckBox-42] Verify that can remove an item at the first position', function () {
        let itemLengthBefore = browser.elements(XPATH_CHECKBOX_REMOVE_ITEMS_VALUE).value.length
        expect(itemLengthBefore).to.equal(3);
        $(XPATH_CHECKBOX_REMOVE_ITEMS_BUTTON).click()
        let itemLengthAfter = browser.elements(XPATH_CHECKBOX_REMOVE_ITEMS_VALUE).value.length
        expect(itemLengthAfter).to.equal(2);
    });
    it('[CheckBox-49-51] Verify that can get value of the visible item at the first position', function () {
        var items = {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        }
        $(XPATH_CHECKBOX_GET_ITEMS_INDEX_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[CheckBox-57-58-59] Verify the return list have the same value of item with the CheckBox list', function () {
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        $(XPATH_CHECKBOX_GET_ITEMS_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[Checkbox-62-63] Verify that the return value is the same with the current selected value in checkbox', function () {
        $(XPATH_CHECKBOX_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal('Orange');
        browser.alertAccept();
    });
    it('[Checkbox-67] Verify can set the selected value for CheckBox by valid value of an disable item in CheckBox', function () {
        const XPATH_CHECKBOX_ITEMS_CHECKED = '.checkbox-setVisibleValue .kuc-input-checkbox-item :checked'
        $(XPATH_CHECKBOX_SET_VALUE_BUTTON).click()
        let itemsChecked = browser.isExisting(XPATH_CHECKBOX_ITEMS_CHECKED)
        let itemsValue = browser.getText(XPATH_CHECKBOX_SET_VALUE)[0]
        expect(itemsChecked).to.equal(true);
        expect(itemsValue).to.equal('Orange');
    });
    it('[Checkbox-68] Verify can set the selected value for CheckBox by valid value of an invisible item in CheckBox', function () {
        const XPATH_CHECKBOX_ITEMS_CHECKED = '.checkbox-setInvisibleValue .kuc-input-checkbox-item :checked'
        $(XPATH_CHECKBOX_SET_DISABLE_VALUE_BUTTON).click()
        let itemsChecked = browser.isExisting(XPATH_CHECKBOX_ITEMS_CHECKED)
        let itemsValue = browser.getText(XPATH_CHECKBOX_SET_DISABLE_VALUE)[0]
        expect(itemsChecked).to.equal(true);
        expect(itemsValue).to.equal('Orange');
    });
    it('[Checkbox-70] Verify can set disabled for existing enable item by the valid value of an item in CheckBox', function () {
        let itemsDisableBefore = browser.isExisting(XPATH_CHECKBOX_DISABLE_ITEMS)
        expect(itemsDisableBefore).to.equal(false)
        $(XPATH_CHECKBOX_DISABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.isExisting(XPATH_CHECKBOX_DISABLE_ITEMS)
        expect(itemsDisableAfter).to.equal(true)
    });
    it('[Checkbox-72] Verify can set disabled for existing enable item by the valid value for invisible CheckBox', function () {
        let itemsDisableBefore = browser.isVisible(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS)
        expect(itemsDisableBefore).to.equal(false)
        $(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.isExisting(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_VALUE)
        expect(itemsDisableAfter).to.equal(true)
    });
    it('[Checkbox-76] Verify can set enable for existing enable item by the valid value of an item in CheckBoxx', function () {
        let itemsDisableBefore = browser.isExisting(XPATH_CHECKBOX_ENABLE_ITEMS)
        expect(itemsDisableBefore).to.equal(true)
        $(XPATH_CHECKBOX_ENABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.isExisting(XPATH_CHECKBOX_ENABLE_ITEMS)
        expect(itemsDisableAfter).to.equal(false)
    });
    it('[Checkbox-80] Verify that can show invisible CheckBox on UI', function () {
        let itemsVisibleBefore = browser.isVisible(XPATH_CHECKBOX_SHOW)
        expect(itemsVisibleBefore).to.equal(false)
        $(XPATH_CHECKBOX_DISPLAY_BUTTON).click()
        let itemsVisibleAfter = browser.isVisible(XPATH_CHECKBOX_SHOW)
        expect(itemsVisibleAfter).to.equal(true)
    });
    it('[Checkbox-82] Verify that can hide the visible CheckBox on UI', function () {
        let itemsVisibleBefore = browser.isVisible(XPATH_CHECKBOX_HIDE)
        expect(itemsVisibleBefore).to.equal(true)
        $(XPATH_CHECKBOX_NON_DISPLAY_BUTTON).click()
        let itemsVisibleAfter = browser.isVisible(XPATH_CHECKBOX_HIDE)
        expect(itemsVisibleAfter).to.equal(false)
    });
    it('[Checkbox-83] Verify that can hide the invisible CheckBox on UI', function () {
        let itemsVisibleBefore = browser.isVisible(XPATH_INVISIBLE_CHECKBOX_HIDE)
        expect(itemsVisibleBefore).to.equal(false)
        $(XPATH_INVISIBLE_CHECKBOX_NON_DISPLAY_BUTTON).click()
        let itemsVisibleAfter = browser.isVisible(XPATH_INVISIBLE_CHECKBOX_HIDE)
        expect(itemsVisibleAfter).to.equal(false)
    });
    it('[Checkbox-84] Verify that can disable the current enable CheckBox on UI', function () {
        let itemsLemonBefore = browser.isExisting(XPATH_CHECKBOX_VALUE_LEMON_DISABLE)
        let itemsOrangeBefore = browser.isExisting(XPATH_CHECKBOX_VALUE_ORANGE_DISABLE)
        expect(itemsLemonBefore).to.equal(false)
        expect(itemsOrangeBefore).to.equal(true)
        $(XPATH_CHECKBOX_DISABLE_BUTTON).click()
        let itemsLemonAfter = browser.isExisting(XPATH_CHECKBOX_VALUE_LEMON_DISABLE)
        let itemsOrangeAfter = browser.isExisting(XPATH_CHECKBOX_VALUE_ORANGE_DISABLE)
        expect(itemsLemonAfter).to.equal(true)
        expect(itemsOrangeAfter).to.equal(true)
    });
    it('[Checkbox-86] Verify that can enable the disabled CheckBox on UI', function () {
        let itemsDisableBefore = browser.isExisting(XPATH_CHECKBOX_ENABLE)
        expect(itemsDisableBefore).to.equal(true)
        $(XPATH_CHECKBOX_ENABLE_BUTTON).click()
        let itemsDisableAfter = browser.isExisting(XPATH_CHECKBOX_ENABLE)
        expect(itemsDisableAfter).to.equal(false)
    });
    it('[Checkbox-88-89] Verify that the callback function will be trigger when the checked state has been changed', function () {
        $(XPATH_CHECKBOX_ON_CALL_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal('value: Orange');
        browser.alertAccept();
    });
});