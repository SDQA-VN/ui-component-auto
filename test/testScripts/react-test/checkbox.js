const Helper = require('../../helper/main.js')

const XPATH_CHECKBOX = '.checkbox-render .kuc-input-checkbox';
const XPATH_CHECKBOX_WITHOUT_OPTION_VALUE = '.checkbox-withoutOption .kuc-input-checkbox';
const XPATH_CHECKBOX_ONLY_OPTION_VALUE_1 = '.checkbox-onlyValue .kuc-input-checkbox-item:nth-child(1) label';
const XPATH_CHECKBOX_ONLY_OPTION_VALUE_2 = '.checkbox-onlyValue .kuc-input-checkbox-item:nth-child(2) label';
const XPATH_CHECKBOX_ONLY_OPTION_VALUE_3 = '.checkbox-onlyValue .kuc-input-checkbox-item:nth-child(3) label';
const XPATH_CHECKBOX_ADD_ITEMS_VALUE_1 = '.checkbox-addItems .kuc-input-checkbox-item:nth-child(1) label';
const XPATH_CHECKBOX_ADD_ITEMS_VALUE_2 = '.checkbox-addItems .kuc-input-checkbox-item:nth-child(2) label';
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
const XPATH_CHECKBOX_DISABLE = '.checkbox-addItems .kuc-input-checkbox-item :disabled'

describe('kintoneUIComponent - Button', function () {
    it('[CheckBox-2] Verify that the MultipleChoice have the  UI is the same as MultipleChoice on kintone', function () {
        Helper.ElementHandler
            .waitForElement(XPATH_CHECKBOX)
            .verifyElementColor(XPATH_CHECKBOX, 'background-color', '#000000')
    });
    it('[CheckBox-4] Verify that can create a CheckBox without any options value', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_CHECKBOX_WITHOUT_OPTION_VALUE)
    });
    it('[CheckBox-5]Verify that can create a CheckBox with full  options value', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_CHECKBOX)
            .verifyElementEnabled(XPATH_CHECKBOX)
            .verifyElementDisplayed(XPATH_CHECKBOX)
    });
    it('[CheckBox-6]Verify that can create a CheckBox with full  options value', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_CHECKBOX_ONLY_OPTION_VALUE_1)
            .verifyElementExisting(XPATH_CHECKBOX_ONLY_OPTION_VALUE_2)
            .verifyElementExisting(XPATH_CHECKBOX_ONLY_OPTION_VALUE_3)
            .verifyText(XPATH_CHECKBOX_ONLY_OPTION_VALUE_1, '')
            .verifyText(XPATH_CHECKBOX_ONLY_OPTION_VALUE_2, '')
            .verifyText(XPATH_CHECKBOX_ONLY_OPTION_VALUE_3, '')
    });
    it('[CheckBox-23-40] Verify that can add an item to the CheckBox list with full value for item', function () {
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_ADD_ENABLE_ITEMS_BUTTON)
            .verifyText(XPATH_CHECKBOX_ADD_ITEMS_VALUE_1, 'Orange')
    });
    it('[CheckBox-41] Verify that the new added item is disabled if the item.isDisable is true', function () {
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_ADD_DISABLE_ITEMS_BUTTON)
            .verifyText(XPATH_CHECKBOX_ADD_ITEMS_VALUE_2, 'Lemon')
            .verifyElementExisting(XPATH_CHECKBOX_DISABLE)
    });
    it('[CheckBox-42] Verify that can remove an item at the first position', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(XPATH_CHECKBOX_REMOVE_ITEMS_VALUE, 3)
            .click(XPATH_CHECKBOX_REMOVE_ITEMS_BUTTON)
            .verifyNumberOfElements(XPATH_CHECKBOX_REMOVE_ITEMS_VALUE, 2)
    });
    it('[CheckBox-49-51] Verify that can get value of the visible item at the first position', function () {
        let items = {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        }
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_GET_ITEMS_INDEX_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[CheckBox-57-58-59] Verify the return list have the same value of item with the CheckBox list', function () {
        let items = [
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
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_GET_ITEMS_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[Checkbox-62-63] Verify that the return value is the same with the current selected value in checkbox', function () {
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_GET_VALUE_BUTTON)
            .verifyAlertText('Orange')
    });
    it('[Checkbox-67] Verify can set the selected value for CheckBox by valid value of an disable item in CheckBox', function () {
        const XPATH_CHECKBOX_ITEMS_CHECKED = '.checkbox-setVisibleValue .kuc-input-checkbox-item :checked'
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_SET_VALUE_BUTTON)
            .verifyElementExisting(XPATH_CHECKBOX_ITEMS_CHECKED)
            .verifyText(XPATH_CHECKBOX_SET_VALUE, 'Orange')
    });
    it('[Checkbox-68] Verify can set the selected value for CheckBox by valid value of an invisible item in CheckBox', function () {
        const XPATH_CHECKBOX_ITEMS_CHECKED = '.checkbox-setInvisibleValue .kuc-input-checkbox-item :checked'
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_SET_DISABLE_VALUE_BUTTON)
            .verifyElementExisting(XPATH_CHECKBOX_ITEMS_CHECKED)
            .verifyText(XPATH_CHECKBOX_SET_DISABLE_VALUE, 'Orange')
    });
    it('[Checkbox-70] Verify can set disabled for existing enable item by the valid value of an item in CheckBox', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_CHECKBOX_DISABLE_ITEMS)
            .click(XPATH_CHECKBOX_DISABLE_ITEMS_BUTTON)
            .verifyElementExisting(XPATH_CHECKBOX_DISABLE_ITEMS)
    });
    it('[Checkbox-72] Verify can set disabled for existing enable item by the valid value for invisible CheckBox', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS)
            .click(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_BUTTON)
            .verifyElementExisting(XPATH_INVISIBLE_CHECKBOX_DISABLE_ITEMS_VALUE)
    });
    it('[Checkbox-76] Verify can set enable for existing enable item by the valid value of an item in CheckBoxx', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_CHECKBOX_ENABLE_ITEMS)
            .click(XPATH_CHECKBOX_ENABLE_ITEMS_BUTTON)
            .verifyElementNotExisting(XPATH_CHECKBOX_ENABLE_ITEMS)
    });
    it('[Checkbox-80] Verify that can show invisible CheckBox on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_CHECKBOX_SHOW)
            .click(XPATH_CHECKBOX_DISPLAY_BUTTON)
            .verifyElementDisplayed(XPATH_CHECKBOX_SHOW)
    });
    it('[Checkbox-82] Verify that can hide the visible CheckBox on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_CHECKBOX_HIDE)
            .click(XPATH_CHECKBOX_NON_DISPLAY_BUTTON)
            .verifyElementNotDisplayed(XPATH_CHECKBOX_HIDE)
    });
    it('[Checkbox-83] Verify that can hide the invisible CheckBox on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_INVISIBLE_CHECKBOX_HIDE)
            .click(XPATH_INVISIBLE_CHECKBOX_NON_DISPLAY_BUTTON)
            .verifyElementNotDisplayed(XPATH_INVISIBLE_CHECKBOX_HIDE)
    });
    it('[Checkbox-84] Verify that can disable the current enable CheckBox on UI', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_CHECKBOX_VALUE_LEMON_DISABLE)
            .verifyElementExisting(XPATH_CHECKBOX_VALUE_ORANGE_DISABLE)
            .click(XPATH_CHECKBOX_DISABLE_BUTTON)
            .verifyElementExisting(XPATH_CHECKBOX_VALUE_LEMON_DISABLE)
            .verifyElementExisting(XPATH_CHECKBOX_VALUE_ORANGE_DISABLE)
    });
    it('[Checkbox-86] Verify that can enable the disabled CheckBox on UI', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_CHECKBOX_ENABLE)
            .click(XPATH_CHECKBOX_ENABLE_BUTTON)
            .verifyElementNotExisting(XPATH_CHECKBOX_ENABLE)
    });
    it('[Checkbox-88-89] Verify that the callback function will be trigger when the checked state has been changed', function () {
        Helper.ElementHandler
            .click(XPATH_CHECKBOX_ON_CALL_BUTTON)
            .verifyAlertText('value: Orange')
    });
});