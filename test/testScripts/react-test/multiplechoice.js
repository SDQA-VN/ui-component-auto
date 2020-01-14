const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const XPATH_MULTIPLE = '.multiple-render .kuc-multiple-list';
const XPATH_MULTIPLE_ICON = '.multiple-render .kuc-list-item-selected svg path';
const XPATH_MULTIPLE_WITHOUT_OPTION = '.multiple-withoutOption .kuc-multiple-list';
const XPATH_MULTIPLE_WITHOUT_OPTION_LIST = '.multiple-withoutOption .kuc-list-item';
const XPATH_MULTIPLE_ONLY_OPTION_VALUE = '.multiple-onlyValue .kuc-list-item-label';
const XPATH_MULTIPLE_ADD_ITEMS = '.multiple-addItems .kuc-list-item-label';
const XPATH_MULTIPLE_ADD_ITEMS_BUTTON = '.multiple-addItems .add-items';
const XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS = '.invisibleMultiple-addItems .kuc-list-item-label';
const XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS_BUTTON = '.invisibleMultiple-addItems .add-items';
const XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE = '.multiple-addItems-withoutValue .kuc-list-item-label';
const XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE_BUTTON = '.multiple-addItems-withoutValue .add-items';
const XPATH_MULTIPLE_REMOVE_ITEMS = '.multiple-remove .kuc-list-item-label';
const XPATH_MULTIPLE_REMOVE_ITEMS_BUTTON = '.multiple-remove .remove-item';
const XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS = '.invisibleMultiple-remove .kuc-list-item-label';
const XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS_BUTTON = '.invisibleMultiple-remove .remove-item';
const XPATH_MULTIPLE_GET_ITEMS_BUTTON = '.multiple-getItems .get-items';
const XPATH_MULTIPLE_GET_ITEMS_INDEX_BUTTON = '.multiple-getItemsIndex .get-items';
const XPATH_MULTIPLE_GET_ENABLE_ITEMS_INDEX_BUTTON = '.multiple-getInvisibleIndex .get-items-invisibleIndex';
const XPATH_MULTIPLE_SET_VALUE = '.multiple-setValue .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_SET_BUTTON = '.multiple-setValue .set-value';
const XPATH_MULTIPLE_GET_VALUE_SELECT = '.multiple-getValue .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_GET_VALUE_BUTTON = '.multiple-getValue .get-value';
const XPATH_MULTIPLE_DISABLE_ITEMS = '.multiple-disableItems .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_DISABLE_ITEMS_BUTTON = '.multiple-disableItems .disable-items';
const XPATH_MULTIPLE_ENABLE_ITEMS = '.multiple-enableItems .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_ENABLE_ITEMS_BUTTON = '.multiple-enableItems .enable-items';
const XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS = '.invisibleMultiple-enableItems .kuc-list-item:nth-child(1)';
const XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS_BUTTON = '.invisibleMultiple-enableItems .enable-items';
const XPATH_MULTIPLE_SHOW = '.multiple-show .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_DISPLAY_BUTTON = '.multiple-show .show-multiple';
const XPATH_MULTIPLE_HIDE = '.multiple-hide .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_NON_DISPLAY_BUTTON = '.multiple-hide .hide-multiple';
const XPATH_MULTIPLE_DISABLE = '.multiple-disable .kuc-multiple-list';
const XPATH_MULTIPLE_DISABLE_BUTTON = '.multiple-disable .disable-multiple';
const XPATH_MULTIPLE_ENABLE = '.multiple-enable .kuc-multiple-list';
const XPATH_MULTIPLE_ENABLE_BUTTON = '.multiple-enable .enable-multiple';
const XPATH_MULTIPLE_ON_CLICK = '.multiple-onCall .kuc-list-item:nth-child(1)';
const XPATH_MULTIPLE_LIST_VALUE = '.multiple-render .kuc-list-item-label';

const iconCheck = 'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[MultipleChoice-2] Verify that the MultipleChoice have the  UI is the same as MultipleChoice on kintone', function () {
        Helper.ElementHandler
            .verifyElementColor(XPATH_MULTIPLE, 'background-color', '#ffffff')
            .verifyAttribute(XPATH_MULTIPLE_ICON, 'd', iconCheck)
            .verifyElementSize(XPATH_MULTIPLE, 299, 98)
    });
    it('[MultipleChoice-5] Verify that can create a MultipleChoice without any options value', function () {
        Helper.ElementHandler
            .verifyElementExists(XPATH_MULTIPLE_WITHOUT_OPTION)
            .verifyElementNotExist(XPATH_MULTIPLE_WITHOUT_OPTION_LIST)
    });
    it('[MultipleChoice-6] Verify that can create a MultipleChoice with full options default value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_MULTIPLE_LIST_VALUE, 'Orange')
            .verifyElementVisible(XPATH_MULTIPLE)
            .verifyElementEnabled(XPATH_MULTIPLE)
    });
    it('[MultipleChoice-16] Verify that can create a MultipleChoice with full options default value', function () {
        Helper.ElementHandler
            .waitForElement(XPATH_MULTIPLE_ONLY_OPTION_VALUE)
            .verifyText(XPATH_MULTIPLE_ONLY_OPTION_VALUE, 'Orange')
    });
    it('[MultipleChoice-22] Verify that can add an item to the MultipleChoice list with full value for item', function () {
        Helper.ElementHandler
            .verifyElementNotExist(XPATH_MULTIPLE_ADD_ITEMS)
            .click(XPATH_MULTIPLE_ADD_ITEMS_BUTTON)
            .verifyText(XPATH_MULTIPLE_ADD_ITEMS, 'Lemon')
    });
    it('[MultipleChoice-23-24] Verify that can add an item to the MultipleChoice with only item.value', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS)
            .click(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS_BUTTON)
            .verifyText(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS, '')
    });
    it('[MultipleChoice-31] Verify that can add an item to the MultipleChoice without item.value', function () {
        Helper.ElementHandler
            .verifyElementNotExist(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE)
            .click(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE_BUTTON)
            .verifyText(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE, 'Lemon')
    });
    it('[MultipleChoice-40] Verify that can remove an item at the last position', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(XPATH_MULTIPLE_REMOVE_ITEMS, 3)
            .verifyText(XPATH_MULTIPLE_REMOVE_ITEMS, 'Orange')
            .click(XPATH_MULTIPLE_REMOVE_ITEMS_BUTTON)
            .verifyNumberOfElements(XPATH_MULTIPLE_REMOVE_ITEMS, 2)
            .verifyText(XPATH_MULTIPLE_REMOVE_ITEMS, 'Banana')
    });
    it('[MultipleChoice-41] Verify that can remove an item at the first position for invisible MultipleChoice list', function () {
        Helper.ElementHandler
            .click(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS_BUTTON)
            .verifyNumberOfElements(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS, 2)
            .verifyText(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS, 'Orange')
    });
    it('[MultipleChoice-46-48] Verify that can get value item at the specific position in multiple choices list', function () {
        let items = {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        }
        Helper.ElementHandler
            .click(XPATH_MULTIPLE_GET_ENABLE_ITEMS_INDEX_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[MultipleChoice-47-49] Verify that can get value item at the specific position in multiple choices list', function () {
        let items = {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        }
        Helper.ElementHandler
            .verifyElementVisible(XPATH_MULTIPLE_GET_ITEMS_INDEX_BUTTON)
            .click(XPATH_MULTIPLE_GET_ITEMS_INDEX_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[MultipleChoice-52-53-54] Verify the return list have the same number of item with the MultipleChoice list', function () {
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
            .click(XPATH_MULTIPLE_GET_ITEMS_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[MultipleChoice-59] Verify that can get the value of the checked item for invisible Multiple Choice', function () {
        Helper.ElementHandler
            .click(XPATH_MULTIPLE_GET_VALUE_SELECT)
            .click(XPATH_MULTIPLE_GET_VALUE_BUTTON)
            .verifyAlertText('Orange')
    });
    it('[MultipleChoice-60] Verify can set the selected value for MultipleChoice by valid value of an item in MultipleChoice', function () {
        Helper.ElementHandler
            .click(XPATH_MULTIPLE_SET_BUTTON)
            .verifyAttribute(XPATH_MULTIPLE_SET_VALUE, 'class', 'kuc-list-item-selected')
    });
    it('[MultipleChoice-64] Verify can set disabled for existing enable item by the valid value of an item in MultipleChoice', function () {
        Helper.ElementHandler
            .verifyAttributeIsNotIncludeValue(XPATH_MULTIPLE_DISABLE_ITEMS, 'class', 'kuc-list-item-disable')
            .click(XPATH_MULTIPLE_DISABLE_ITEMS_BUTTON)
            .verifyAttribute(XPATH_MULTIPLE_DISABLE_ITEMS, 'class', 'kuc-list-item-disable')
    });
    it('[MultipleChoice-69] Verify can set enable for existing disable item by the valid value of an item in MultipleChoice', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_MULTIPLE_ENABLE_ITEMS, 'class', 'kuc-list-item-disable')
            .click(XPATH_MULTIPLE_ENABLE_ITEMS_BUTTON)
            .verifyAttributeIsNotIncludeValue(XPATH_MULTIPLE_ENABLE_ITEMS, 'class', 'kuc-list-item-disable')
    });
    it('[MultipleChoice-71] Verify can set enable for existing disable item by the valid value for invisible MultipleChoice', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS)
            .click(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS_BUTTON)
            .verifyAttributeIsNotIncludeValue(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS, 'class', 'kuc-list-item-disable')
    });
    it('[MultipleChoice-75] Verify that can show invisible MultipleChoice on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_MULTIPLE_SHOW)
            .click(XPATH_MULTIPLE_DISPLAY_BUTTON)
            .verifyElementVisible(XPATH_MULTIPLE_SHOW)
    });
    it('[MultipleChoice-77] Verify that can hide the visible MultipleChoice on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_MULTIPLE_HIDE)
            .click(XPATH_MULTIPLE_NON_DISPLAY_BUTTON)
            .verifyElementNotVisible(XPATH_MULTIPLE_HIDE)
    });
    it('[MultipleChoice-79] Verify that can disable the current enable MultipleChoice on UI', function () {
        Helper.ElementHandler
            .verifyAttributeIsNotIncludeValue(XPATH_MULTIPLE_DISABLE, 'class', 'kuc-multiple-list-disable')
            .click(XPATH_MULTIPLE_DISABLE_BUTTON)
            .verifyAttribute(XPATH_MULTIPLE_DISABLE, 'class', 'kuc-multiple-list-disable')
    });
    it('[MultipleChoice-81] Verify that can enable the disabled MultipleChoice on UI', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_MULTIPLE_ENABLE, 'class', 'kuc-multiple-list-disable')
            .click(XPATH_MULTIPLE_ENABLE_BUTTON)
            .verifyAttributeIsNotIncludeValue(XPATH_MULTIPLE_ENABLE, 'class', 'kuc-multiple-list-disable')
    });
    it('[MultipleChoice-83-84] Verify that can register a callback function for change event successfully', function () {
        Helper.ElementHandler
            .click(XPATH_MULTIPLE_ON_CLICK)
            .verifyAlertText('value: Orange')
    });
});