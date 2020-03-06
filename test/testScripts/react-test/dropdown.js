const Helper = require('../../helper/main.js')

const XPATH_OUT_OF_DROPDOWN = '.gaia-header-toolbar-navigation';
const XPATH_DROPDOWN = '.dropdown-render .kuc-dropdown';
const XPATH_DROPDOWN_HOVER_BUTTON = '.dropdown-hover-item .kuc-dropdown-selected';
const XPATH_DROPDOWN_HOVER_ITEMS = '.dropdown-hover-item .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_VALUE_SELECTED = '.dropdown-render .kuc-dropdown-selected-name'
const XPATH_DROPDOWN_EMPTY_LIST = '.dropdown-empty .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_EMPTY = '.dropdown-empty .kuc-dropdown'
const XPATH_DROPDOWN_CONTENT = '.dropdown-render .kuc-list-outer';
const XPATH_DROPDOWN_LIST_ITEMS = '.dropdown-render .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_WITHOUT_OPTION = '.dropdown-withoutOption .kuc-dropdown';
const XPATH_DROPDOWN_WITHOUT_OPTION_VALUE_SELECTED = '.dropdown-withoutOption .kuc-dropdown-selected-name';
const XPATH_DROPDOWN_DEFAULT_VALUE = '.dropdown-defaultValue .kuc-dropdown';
const XPATH_DROPDOWN_DEFAULT_VALUE_SELECTED = '.dropdown-defaultValue .kuc-dropdown-selected-name';
const XPATH_DROPDOWN_ADD_ITEMS = '.dropdown-addItems .kuc-dropdown'
const XPATH_DROPDOWN_ADD_ITEMS_LIST = '.dropdown-addItems .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_ADD_ITEMS_BUTTON = '.dropdown-addItems .add-items';
const XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS = '.invisibleDropdown-addItems .kuc-dropdown'
const XPATH_INVISIBLE_DROPDOWN_DISPLAY_BUTTON = '.invisibleDropdown-addItems .show-dropdown';
const XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_LIST = '.invisibleDropdown-addItems .kuc-list-outer .kuc-list-item';
const XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_BUTTON = '.invisibleDropdown-addItems .add-items';
const XPATH_DROPDOWN_ADD_ITEMS_EXIST_LIST_BUTTON = '.dropdown-addItems-existList .add-items';
const XPATH_DROPDOWN_ADD_ITEMS_EXIST_OPEN = '.dropdown-addItems-existList .kuc-dropdown';
const XPATH_DROPDOWN_REMOVE_ITEMS_LIST = '.dropdown-removeItems .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_REMOVE_ITEMS_OPEN = '.dropdown-removeItems .kuc-dropdown';
const XPATH_DROPDOWN_REMOVE_ITEMS_BUTTON = '.dropdown-removeItems .remove-items';
const XPATH_DROPDOWN_REMOVE_EMPTY_LIST = '.dropdown-removeEmpty .kuc-list-outer .kuc-list-item';
const XPATH_DROPDOWN_REMOVE_EMPTY_OPEN = '.dropdown-removeEmpty .kuc-dropdown';
const XPATH_DROPDOWN_REMOVE_EMPTY_BUTTON = '.dropdown-removeEmpty .remove-items';
const XPATH_DROPDOWN_GET_ITEMS_BUTTON = '.dropdown-getItems .get-items';
const XPATH_INVISBLE_DROPDOWN_GET_ITEMS_BUTTON = '.invisibleDropdown-getItems .get-items';
const XPATH_DROPDOWN_GET_VALUE_BUTTON = '.dropdown-getValue .get-value';
const XPATH_DROPDOWN_GET_VALUE_LIST_OPEN = '.dropdown-getValue .kuc-dropdown';
const XPATH_INVISIBLE_DROPDOWN_GET_VALUE_BUTTON = '.invisibleDropdown-getValue .get-value';
const XPATH_DROPDOWN_SET_VALUE_SELECTED = '.dropdown-setValue .kuc-dropdown-selected-name';
const XPATH_DROPDOWN_SET_VALUE_BUTTON = '.dropdown-setValue .set-value';
const XPATH_DROPDOWN_EMPTY_SET_VALUE_SELECTED = '.dropdownEmpty-setValue .kuc-dropdown-selected-name';
const XPATH_DROPDOWN_EMPTY_SET_VALUE_BUTTON = '.dropdownEmpty-setValue .set-value';
const XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN = '.dropdown-disableItemsEnable .kuc-dropdown';
const XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_BUTTON = '.dropdown-disableItemsEnable .disable-item';
const XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN = '.dropdown-disableItemsDisable .kuc-dropdown';
const XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_BUTTON = '.dropdown-disableItemsDisable .disable-item';
const XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN = '.dropdown-enableItemsDisable .kuc-dropdown';
const XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_BUTTON = '.dropdown-enableItemsDisable .enable-item';
const XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN = '.dropdown-enableItemsEnable .kuc-dropdown';
const XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_BUTTON = '.dropdown-enableItemsEnable .enable-item';
const XPATH_DROPDOWN_SHOW = '.dropdown-show .kuc-dropdown';
const XPATH_DROPDOWN_DISPLAY_BUTTON = '.dropdown-show .show-dropdown';
const XPATH_DROPDOWN_HIDE = '.dropdown-hide .kuc-dropdown';
const XPATH_DROPDOWN_NON_DISPLAY_BUTTON = '.dropdown-hide .hide-dropdown';
const XPATH_DROPDOWN_ENABLE = '.dropdown-disable .kuc-dropdown';
const XPATH_DROPDOWN_DISABLE_BUTTON = '.dropdown-disable .disable-dropdown';
const XPATH_DROPDOWN_DISBALE = '.dropdown-enable .kuc-dropdown';
const XPATH_DROPDOWN_ENABLE_BUTTON = '.dropdown-enable .enable-dropdown';
const XPATH_DROPDOWN_ON_CALL_OPEN = '.dropdown-onCall .kuc-dropdown';
const XPATH_DROPDOWN_ON_CALL_SELECT = '.dropdown-onCall .kuc-list-outer .kuc-list-item:nth-child(1)';
const XPATH_DROPDOWN_LIST_ITEMS_SELECT = "//div[@class='dropdown-render']//div[@class='kuc-list-outer']//span[text()='Orange']";


describe('kintoneUIComponent - Button', function () {
    it('[Dropdown-2] Verify that the Dropdown have the  UI is the same as Dropdown on kintone', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_DROPDOWN)
            .verifyElementColor(XPATH_DROPDOWN, 'color', '#3498db')
            .verifyElementSize(XPATH_DROPDOWN, 180, 40)
    });

    it('[Dropdown-5] Verify that when hover any items on list, background color will change to #e2f2fe at the item is hovering', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_HOVER_BUTTON)
            .moveToObject(XPATH_DROPDOWN_HOVER_ITEMS)
            .verifyElementExisting('.kuc-list-item:hover')
            .verifyElementColor(XPATH_DROPDOWN_HOVER_ITEMS, 'background-color', '#e2f2fe')
            .moveToObject(XPATH_DROPDOWN_HOVER_BUTTON)
            .verifyElementNotExisting('.kuc-list-item:hover')
    });

    it('[Dropdown-3] Dropdown contains items ( disable items, invisible item, enable item, visible items)', function () {
        const XPATH_DROPDOWN_LIST_ITEMS_VISIBLE = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(1)';
        const XPATH_DROPDOWN_LIST_ITEMS_DISABLE = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(2)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN)
            .verifyElementDisplayed(XPATH_DROPDOWN_LIST_ITEMS_VISIBLE)
            .verifyAttribute(XPATH_DROPDOWN_LIST_ITEMS_DISABLE, 'class', 'kuc-list-item  kuc-list-item-disable')
            .click(XPATH_DROPDOWN)
    });

    it('[Dropdown-4] Dropdown does not contains any items in the list', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_EMPTY)
            .verifyElementNotExisting(XPATH_DROPDOWN_EMPTY_LIST)
    });

    it('[Dropdown-7] Verify when user does not interact', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_DROPDOWN_VALUE_SELECTED)
            .verifyText(XPATH_DROPDOWN_VALUE_SELECTED, '')
    });

    it('[Dropdown-11] Verify when user clicks on the main area', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN)
            .verifyAttribute(XPATH_DROPDOWN_CONTENT, 'style', 'display: block;')
            .verifyNumberOfElements(XPATH_DROPDOWN_LIST_ITEMS, 3)
            .click(XPATH_DROPDOWN)
    });

    it('[Dropdown-14] Verify When user choose any items in the list', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN)
            .click(XPATH_DROPDOWN_LIST_ITEMS_SELECT)
            .verifyText(XPATH_DROPDOWN_VALUE_SELECTED, 'Orange')
            .verifyElementColor(XPATH_DROPDOWN_VALUE_SELECTED, 'color', '#3498db')
    });

    it('[Dropdown-15] Verify user cannot choose the disabled item', function () {
        const XPATH_DROPDOWN_LIST_ITEMS_1 = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(1)';
        const XPATH_DROPDOWN_LIST_ITEMS_2 = '.dropdown-render .kuc-list-outer .kuc-list-item-disable';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN)
            .click(XPATH_DROPDOWN_LIST_ITEMS_1)
            .verifyText(XPATH_DROPDOWN_VALUE_SELECTED, 'Orange')
            .click(XPATH_DROPDOWN)
            .click(XPATH_DROPDOWN_LIST_ITEMS_2)
            .verifyText(XPATH_DROPDOWN_VALUE_SELECTED, 'Orange')
            .click(XPATH_DROPDOWN)
    });

    it('[Dropdown-18] Verify when user click out of the dropdown', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN)
            .click(XPATH_OUT_OF_DROPDOWN)
            .verifyText(XPATH_DROPDOWN_VALUE_SELECTED, 'Orange')
    });

    it('[Dropdown-21] Verify the main are will displayed blank in case does not have any selected value', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_WITHOUT_OPTION)
            .click(XPATH_OUT_OF_DROPDOWN)
            .verifyText(XPATH_DROPDOWN_WITHOUT_OPTION_VALUE_SELECTED, '')
    });

    it('[Dropdown-22] Verify that can create a Dropdown without any options value', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_DROPDOWN_WITHOUT_OPTION)
            .verifyElementColor(XPATH_DROPDOWN_WITHOUT_OPTION, 'color', '#3498db')
            .verifyElementSize(XPATH_DROPDOWN_WITHOUT_OPTION, 180, 40)
    });

    it('[Dropdown-33] Verify can create a dropdown with default selected value', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_DROPDOWN_DEFAULT_VALUE)
            .verifyText(XPATH_DROPDOWN_DEFAULT_VALUE_SELECTED, 'Snake')
    });

    it('[Dropdown-42] Verify that can add an item to the dropdown list with full value for item', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ADD_ITEMS_BUTTON)
            .click(XPATH_DROPDOWN_ADD_ITEMS)
            .verifyText(XPATH_DROPDOWN_ADD_ITEMS_LIST, 'Lemon')
    });

    it('[Dropdown-43] Verify that can add an item to the invisible dropdown list with full value for item', function () {
        Helper.ElementHandler
            .click(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_BUTTON)
            .verifyElementNotDisplayed(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS)
            .click(XPATH_INVISIBLE_DROPDOWN_DISPLAY_BUTTON)
            .click(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS)
            .verifyText(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_LIST, 'Lemon')
    });

    it('[Dropdown-56] Verify that the new added item is disabled if the item.isDisable is true', function () {
        const XPATH_DROPDOWN_ITEMS_FIRST = '.dropdown-addItems-existList .kuc-list-outer .kuc-list-item-disable';
        const XPATH_DROPDOWN_ITEMS_SECOND = '.dropdown-addItems-existList .kuc-list-outer .kuc-list-item:nth-child(2)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ADD_ITEMS_EXIST_LIST_BUTTON)
            .click(XPATH_DROPDOWN_ADD_ITEMS_EXIST_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_ITEMS_FIRST, 'class', 'kuc-list-item  kuc-list-item-disable')
            .verifyText(XPATH_DROPDOWN_ITEMS_SECOND, 'Lemon')
    });

    it('[Dropdown-57] Verify that can remove an item at the first position', function () {
        const XPATH_DROPDOWN_ITEMS_FIRST = '.dropdown-removeItems .kuc-list-outer .kuc-list-item:nth-child(1)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN)
            .verifyText(XPATH_DROPDOWN_ITEMS_FIRST, 'Orange')
            .click(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN)
            .click(XPATH_DROPDOWN_REMOVE_ITEMS_BUTTON)
            .click(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN)
            .verifyText(XPATH_DROPDOWN_ITEMS_FIRST, 'Banana')
            .verifyNumberOfElements(XPATH_DROPDOWN_REMOVE_ITEMS_LIST, 2)
    });

    it('[Dropdown-62] Verify that cannot remove item with the dropdown list not contains any item', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN)
            .verifyNumberOfElements(XPATH_DROPDOWN_REMOVE_EMPTY_LIST, 0)
            .click(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN)
            .click(XPATH_DROPDOWN_REMOVE_EMPTY_BUTTON)
            .click(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN)
            .verifyNumberOfElements(XPATH_DROPDOWN_REMOVE_EMPTY_LIST, 0)
    });

    it('[Dropdown-64] Verify that can get all the items of the dropdownlist including disabled items, invisible items', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_GET_ITEMS_BUTTON)
            .verifyAlertText('Orange,Banana,Lemon')
    });
    it('[Dropdown-67] Verify that can get all the items for invisible dropdow', function () {
        Helper.ElementHandler
            .click(XPATH_INVISBLE_DROPDOWN_GET_ITEMS_BUTTON)
            .verifyAlertText('Orange,Banana,Lemon')
    });
    it('[Dropdown-69] Verify that can get the value of the selected item', function () {
        const XPATH_DROPDOWN_ITEMS_SELECTED = '.dropdown-getValue .kuc-list-outer .kuc-list-item:nth-child(2)'
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_GET_VALUE_LIST_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_ITEMS_SELECTED, 'class', 'kuc-list-item-selected kuc-list-item-disable')
            .click(XPATH_DROPDOWN_GET_VALUE_LIST_OPEN)
            .click(XPATH_DROPDOWN_GET_VALUE_BUTTON)
            .verifyAlertText('Banana')
    });
    it('[Dropdown-73] Verify that can get the value of the selected item while dropdown is invisible', function () {
        Helper.ElementHandler
            .click(XPATH_INVISIBLE_DROPDOWN_GET_VALUE_BUTTON)
            .verifyAlertText('Banana')
    });
    it('[Dropdown-74] Verify can set the selected value for Dropdown by valid value of an item in dropdown', function () {
        Helper.ElementHandler
            .verifyText(XPATH_DROPDOWN_SET_VALUE_SELECTED, 'Orange')
            .click(XPATH_DROPDOWN_SET_VALUE_BUTTON)
            .verifyText(XPATH_DROPDOWN_SET_VALUE_SELECTED, 'Banana')
    });
    it('[Dropdown-76] Verify can set the selected value to the "blank" value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_DROPDOWN_EMPTY_SET_VALUE_SELECTED, '')
            .click(XPATH_DROPDOWN_EMPTY_SET_VALUE_BUTTON)
            .verifyText(XPATH_DROPDOWN_EMPTY_SET_VALUE_SELECTED, 'Blank')
    });
    it('[Dropdown-79] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-disableItemsEnable .kuc-list-outer .kuc-list-item:nth-child(1)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN)
            .verifyAttributeIsNotIncludeValue(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN)
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_BUTTON)
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN)
    });
    it('[Dropdown-80] Verify can set disabled for existing disable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_SECOND = '.dropdown-disableItemsDisable .kuc-list-outer .kuc-list-item:nth-child(2)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_DISABLE_ITEM_SECOND, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN)
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_BUTTON)
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_DISABLE_ITEM_SECOND, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN)
    });
    it('[Dropdown-84] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-enableItemsDisable .kuc-list-outer .kuc-list-item:nth-child(2)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN)
            .verifyAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN)
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_BUTTON)
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN)
            .verifyAttributeIsNotIncludeValue(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN)
    });
    it('[Dropdown-85] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-enableItemsEnable .kuc-list-outer .kuc-list-item:nth-child(1)';
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN)
            .verifyAttributeIsNotIncludeValue(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN)
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_BUTTON)
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN)
            .verifyAttributeIsNotIncludeValue(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class', 'kuc-list-item-disable')
            .click(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN)
    });
    it('[Dropdown-90] Verify that can show invisible Dropdown on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_DISPLAY_BUTTON)
            .verifyElementDisplayed(XPATH_DROPDOWN_SHOW)
    });
    it('[Dropdown-92] Verify that can hide the visible Dropdown on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_NON_DISPLAY_BUTTON)
            .verifyElementNotDisplayed(XPATH_DROPDOWN_HIDE)
    });
    it('[Dropdown-94] Verify that can disable the current enable Dropdown on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_DISABLE_BUTTON)
            .verifyAttribute(XPATH_DROPDOWN_ENABLE, 'class', 'kuc-dropdown-disable')
    });
    it('[Dropdown-96] Verify that can disable the current enable Dropdown on UI', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ENABLE_BUTTON)
            .verifyAttributeIsNotIncludeValue(XPATH_DROPDOWN_DISBALE, 'class', 'kuc-dropdown-disable')
    });
    it('[Dropdown-99] Verify that the callback function will be trigger when change the value for dropdown', function () {
        Helper.ElementHandler
            .click(XPATH_DROPDOWN_ON_CALL_OPEN)
            .click(XPATH_DROPDOWN_ON_CALL_SELECT)
            .verifyAlertText('value: Orange')
    });
});