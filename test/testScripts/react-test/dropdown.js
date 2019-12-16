const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const common = require('../../utils/common');
const expect = require('chai').expect;

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

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Dropdown-2] Verify that the Dropdown have the  UI is the same as Dropdown on kintone', function () {
        let dropdownColor = $(XPATH_DROPDOWN).getCssProperty('color');
        let dropdownWidth = $(XPATH_DROPDOWN).getCssProperty('width');
        let dropdownHeight = $(XPATH_DROPDOWN).getCssProperty('height');
        expect(dropdownColor.parsed.hex).to.equal('#3498db');
        expect(dropdownWidth.value).to.equal('200px');
        expect(dropdownHeight.value).to.equal('48px');
    });

    it('[Dropdown-] should verify that when hover item change background color #e2f2fe and when move out of item change background color to white ', function () {
        $(XPATH_DROPDOWN_HOVER_BUTTON).click();
        browser.moveToObject(XPATH_DROPDOWN_HOVER_ITEMS);
        let checkHover = browser.isExisting('.kuc-list-item:hover');
        let checkColor = $(XPATH_DROPDOWN_HOVER_ITEMS).getCssProperty('background-color');
        expect(checkHover).to.equal(true);
        expect(checkColor.parsed.hex).to.equal('#e2f2fe');
        browser.moveToObject(XPATH_DROPDOWN_HOVER_BUTTON);
        checkHover = browser.isExisting('.kuc-list-item:hover');
        expect(checkHover).to.equal(false);
    });

    it('[Dropdown-3-23] Dropdown contains items ( disable items, invisible item, enable item, visible items)', function () {
        const XPATH_DROPDOWN_LIST_ITEMS_VISIBLE = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(1)'
        const XPATH_DROPDOWN_LIST_ITEMS_DISABLE = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(2)'
        $(XPATH_DROPDOWN).click()
        let itemsVisible = browser.isVisible(XPATH_DROPDOWN_LIST_ITEMS_VISIBLE)
        let itemsDisable = browser.getAttribute(XPATH_DROPDOWN_LIST_ITEMS_DISABLE, 'class')
        expect(itemsVisible).to.equal(true);
        expect(itemsDisable).to.equal("kuc-list-item  kuc-list-item-disable");
        $(XPATH_DROPDOWN).click()
    });

    it('[Dropdown-4] Dropdown does not contains any items in the list', function () {
        $(XPATH_DROPDOWN_EMPTY).click()
        let dropdownExisted = browser.isExisting(XPATH_DROPDOWN_EMPTY_LIST);
        expect(dropdownExisted).to.equal(false);
    });

    it('[Dropdown-6-7-8] Verify when user does not interact', function () {
        let dropdownContent = browser.getText(XPATH_DROPDOWN_VALUE_SELECTED)
        expect(dropdownContent).to.equal('')
    });

    it('[Dropdown-10-11] Verify when user clicks on the main area', function () {
        $(XPATH_DROPDOWN).click();
        let dropdownStyle = browser.getAttribute(XPATH_DROPDOWN_CONTENT, 'style');
        let itemsLength = browser.elements(XPATH_DROPDOWN_LIST_ITEMS).value.length
        expect(dropdownStyle).to.equal('display: block;');
        expect(itemsLength).to.equal(3);
        $(XPATH_DROPDOWN).click();
    });

    it('[Dropdown-13-14] Verify When user choose any items in the list', function () {
        const XPATH_DROPDOWN_LIST_ITEMS = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(1)';
        $(XPATH_DROPDOWN).click();
        $(XPATH_DROPDOWN_LIST_ITEMS).click()
        let dropdownContent = browser.getText(XPATH_DROPDOWN_VALUE_SELECTED)
        let contentColor = browser.getCssProperty(XPATH_DROPDOWN_VALUE_SELECTED, 'color')
        expect(dropdownContent).to.equal('Orange')
        expect(contentColor.parsed.hex).to.equal('#3498db')
    });

    it('[Dropdown-15] Verify user cannot choose the disabled item', function () {
        const XPATH_DROPDOWN_LIST_ITEMS = '.dropdown-render .kuc-list-outer .kuc-list-item:nth-child(2)';
        $(XPATH_DROPDOWN).click();
        $(XPATH_DROPDOWN_LIST_ITEMS).click()
        let dropdownContent = browser.getText(XPATH_DROPDOWN_VALUE_SELECTED)
        expect(dropdownContent).to.not.equal('Banana')
        $(XPATH_DROPDOWN).click();
    });

    it('[Dropdown-17-18] Verify when user click out of the dropdown', function () {
        const XPATH_DROPDOWN_LIST_ITEMS = "//div[@class='dropdown-render']//div[@class='kuc-list-outer']//span[contains(text(), 'Orange')]";
        $(XPATH_DROPDOWN).click();
        $(XPATH_DROPDOWN_LIST_ITEMS).click();
        $(XPATH_DROPDOWN).click();
        $(XPATH_OUT_OF_DROPDOWN).click()
        let dropdownContent = browser.getText(XPATH_DROPDOWN_VALUE_SELECTED)
        expect(dropdownContent).to.equal('Orange')
    });

    it('[Dropdown-19] Verify The main are will displayed blank in case does not have any selected value', function () {
        browser.refresh();
        $(XPATH_DROPDOWN).click();
        $(XPATH_OUT_OF_DROPDOWN).click();
        let dropdownContent = browser.getText(XPATH_DROPDOWN_VALUE_SELECTED);
        expect(dropdownContent).to.equal('');
    });

    it('[Dropdown-22] Verify that can create a Dropdown without any options value', function () {
        let dropdownColor = $(XPATH_DROPDOWN_WITHOUT_OPTION).getCssProperty('color');
        let dropdownWidth = $(XPATH_DROPDOWN_WITHOUT_OPTION).getCssProperty('width');
        let dropdownHeight = $(XPATH_DROPDOWN_WITHOUT_OPTION).getCssProperty('height');
        expect(dropdownColor.parsed.hex).to.equal('#3498db');
        expect(dropdownWidth.value).to.equal('200px');
        expect(dropdownHeight.value).to.equal('48px');
    });

    it('[Dropdown-33-34-35] Verify can create a dropdown with default selected value', function () {
        let dropdownContent = browser.getText(XPATH_DROPDOWN_DEFAULT_VALUE_SELECTED);
        expect(dropdownContent).to.equal('Snake');
    });

    it('[Dropdown-42-54] Verify that can add an item to the dropdown list with full value for item', function () {
        $(XPATH_DROPDOWN_ADD_ITEMS_BUTTON).click()
        $(XPATH_DROPDOWN_ADD_ITEMS).click()
        let dropdownListItems = browser.getText(XPATH_DROPDOWN_ADD_ITEMS_LIST)
        expect(dropdownListItems).to.equal('Lemon');
    });

    it('[Dropdown-43-44-55] Verify that can add an item to the dropdown list with full value for item', function () {
        $(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_BUTTON).click()
        let dropdownIsInvisile = browser.isVisible(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS);
        expect(dropdownIsInvisile).to.equal(false);
        $(XPATH_INVISIBLE_DROPDOWN_DISPLAY_BUTTON).click();
        $(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS).click();
        let dropdownListItems = browser.getText(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS_LIST);
        expect(dropdownListItems).to.equal('Lemon');
        $(XPATH_INVISIBLE_DROPDOWN_ADD_ITEMS).click();
    });

    it('[Dropdown-53-56] Verify that the new added item is disabled if the item.isDisable is true', function () {
        const XPATH_DROPDOWN_ITEMS_FIRST = '.dropdown-addItems-existList .kuc-list-outer .kuc-list-item:nth-child(1)';
        const XPATH_DROPDOWN_ITEMS_SECOND = '.dropdown-addItems-existList .kuc-list-outer .kuc-list-item:nth-child(2)';
        $(XPATH_DROPDOWN_ADD_ITEMS_EXIST_LIST_BUTTON).click();
        $(XPATH_DROPDOWN_ADD_ITEMS_EXIST_OPEN).click();
        let itemFirstDisable = browser.getAttribute(XPATH_DROPDOWN_ITEMS_FIRST, 'class');
        let itemSecond = browser.getText(XPATH_DROPDOWN_ITEMS_SECOND);
        expect(itemSecond).to.equal('Lemon');
        expect(itemFirstDisable).to.equal('kuc-list-item  kuc-list-item-disable');
    });

    it('[Dropdown-57] Verify that can remove an item at the first position', function () {
        const XPATH_DROPDOWN_ITEMS_FIRST = '.dropdown-removeItems .kuc-list-outer .kuc-list-item:nth-child(1)'
        $(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN).click()
        let itemFirst = browser.getText(XPATH_DROPDOWN_ITEMS_FIRST)
        expect(itemFirst).to.equal('Orange');
        $(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN).click()
        $(XPATH_DROPDOWN_REMOVE_ITEMS_BUTTON).click()
        $(XPATH_DROPDOWN_REMOVE_ITEMS_OPEN).click()
        let item = browser.getText(XPATH_DROPDOWN_ITEMS_FIRST)
        let itemsLength = browser.elements(XPATH_DROPDOWN_REMOVE_ITEMS_LIST).value.length
        expect(item).to.equal('Banana');
        expect(itemsLength).to.equal(2);
    });

    it('[Dropdown-62] Verify that cannot remove item with the dropdown list not contains any item', function () {
        $(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN).click()
        let itemsLengthBefore = browser.elements(XPATH_DROPDOWN_REMOVE_EMPTY_LIST).value.length
        expect(itemsLengthBefore).to.equal(0);
        $(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN).click()
        $(XPATH_DROPDOWN_REMOVE_EMPTY_BUTTON).click()
        $(XPATH_DROPDOWN_REMOVE_EMPTY_OPEN).click()
        let itemsLengthAfter = browser.elements(XPATH_DROPDOWN_REMOVE_EMPTY_LIST).value.length
        expect(itemsLengthAfter).to.equal(0);
    });

    it('[Dropdown-64-65-66] Verify the return list have the same value of item with the current dropdown list', function () {
        $(XPATH_DROPDOWN_GET_ITEMS_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Orange,Banana,Lemon');
        browser.alertAccept();
    });
    it('[Dropdown-67] Verify that can get all the items for invisible dropdow', function () {
        $(XPATH_INVISBLE_DROPDOWN_GET_ITEMS_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Orange,Banana,Lemon');
        browser.alertAccept();
    });
    it('[Dropdown-69-70-71] Verify that can get all the items for invisible dropdow', function () {
        const XPATH_DROPDOWN_ITEMS_SELECTED = '.dropdown-getValue .kuc-list-outer .kuc-list-item:nth-child(2)'
        $(XPATH_DROPDOWN_GET_VALUE_LIST_OPEN).click()
        let itemSelected = browser.getAttribute(XPATH_DROPDOWN_ITEMS_SELECTED, 'class')
        $(XPATH_DROPDOWN_GET_VALUE_LIST_OPEN).click()
        $(XPATH_DROPDOWN_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText();
        expect(itemSelected).to.include('kuc-list-item-selected kuc-list-item-disable');
        expect(alertText).to.equal('Banana');
        browser.alertAccept();
    });
    it('[Dropdown-73] Verify that can get the value of the selected item while dropdown is invisible', function () {
        $(XPATH_INVISIBLE_DROPDOWN_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Banana');
        browser.alertAccept();
    });
    it('[Dropdown-74-75] Verify can set the selected value for Dropdown by valid value of an item in dropdown', function () {
        let itemSelectedBefore = browser.getText(XPATH_DROPDOWN_SET_VALUE_SELECTED)
        expect(itemSelectedBefore).to.equal('Orange');
        $(XPATH_DROPDOWN_SET_VALUE_BUTTON).click()
        let itemSelectedAfter = browser.getText(XPATH_DROPDOWN_SET_VALUE_SELECTED)
        expect(itemSelectedAfter).to.equal('Banana');
    });
    it('[Dropdown-76] Verify can set the selected value to the "blank" value', function () {
        let itemSelectedBefore = browser.getText(XPATH_DROPDOWN_EMPTY_SET_VALUE_SELECTED)
        expect(itemSelectedBefore).to.equal('');
        $(XPATH_DROPDOWN_EMPTY_SET_VALUE_BUTTON).click()
        let itemSelectedAfter = browser.getText(XPATH_DROPDOWN_EMPTY_SET_VALUE_SELECTED)
        expect(itemSelectedAfter).to.equal('Blank');
    });
    it('[Dropdown-79] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-disableItemsEnable .kuc-list-outer .kuc-list-item:nth-child(1)'
        $(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN).click()
        let itemFirstBefore = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstBefore).to.not.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN).click()
        $(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_BUTTON).click()
        $(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN).click()
        let itemFirstAfter = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstAfter).to.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_DISABLE_ITEMS_ENABLE_OPEN).click()
    });
    it('[Dropdown-80] Verify can set disabled for existing disable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_SECOND = '.dropdown-disableItemsDisable .kuc-list-outer .kuc-list-item:nth-child(2)'
        $(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN).click()
        let itemSecondBefore = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_SECOND, 'class')
        expect(itemSecondBefore).to.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN).click()
        $(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_BUTTON).click()
        $(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN).click()
        let itemSecondAfter = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_SECOND, 'class')
        expect(itemSecondAfter).to.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_DISABLE_ITEMS_DISABLE_OPEN).click()
    });
    it('[Dropdown-84] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-enableItemsDisable .kuc-list-outer .kuc-list-item:nth-child(2)'
        $(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN).click()
        let itemFirstBefore = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstBefore).to.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN).click()
        $(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_BUTTON).click()
        $(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN).click()
        let itemFirstAfter = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstAfter).to.not.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_ENABLE_ITEMS_DISABLE_OPEN).click()
    });
    it('[Dropdown-85] Verify can set disabled for existing enable item by the valid value of an item in dropdown', function () {
        const XPATH_DROPDOWN_DISABLE_ITEM_FIRST = '.dropdown-enableItemsEnable .kuc-list-outer .kuc-list-item:nth-child(1)'
        $(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN).click()
        let itemFirstBefore = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstBefore).to.not.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN).click()
        $(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_BUTTON).click()
        $(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN).click()
        let itemFirstAfter = browser.getAttribute(XPATH_DROPDOWN_DISABLE_ITEM_FIRST, 'class')
        expect(itemFirstAfter).to.not.include('kuc-list-item-disable');
        $(XPATH_DROPDOWN_ENABLE_ITEMS_ENABLE_OPEN).click()
    });
    it('[Dropdown-90] Verify that can show invisible Dropdown on UI', function () {
        $(XPATH_DROPDOWN_DISPLAY_BUTTON).click()
        let dropdownVisible = browser.isVisible(XPATH_DROPDOWN_SHOW)
        expect(dropdownVisible).to.equal(true);
    });
    it('[Dropdown-92] Verify that can hide the visible Dropdown on UI', function () {
        $(XPATH_DROPDOWN_NON_DISPLAY_BUTTON).click()
        let dropdownVisible = browser.isVisible(XPATH_DROPDOWN_HIDE)
        expect(dropdownVisible).to.equal(false);
    });
    it('[Dropdown-94] Verify that can disable the current enable Dropdown on UI', function () {
        $(XPATH_DROPDOWN_DISABLE_BUTTON).click()
        let dropdownEnable = browser.getAttribute(XPATH_DROPDOWN_ENABLE, 'class')
        expect(dropdownEnable).to.include('kuc-dropdown-disable');
    });
    it('[Dropdown-96] Verify that can disable the current enable Dropdown on UI', function () {
        $(XPATH_DROPDOWN_ENABLE_BUTTON).click()
        let dropdownEnable = browser.getAttribute(XPATH_DROPDOWN_DISBALE, 'class')
        expect(dropdownEnable).to.not.include('kuc-dropdown-disable');
    });
    it('[Dropdown-98-99] Verify that the callback function will be trigger when change the value for dropdown', function () {
        $(XPATH_DROPDOWN_ON_CALL_OPEN).click()
        $(XPATH_DROPDOWN_ON_CALL_SELECT).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('value: Orange');
        browser.alertAccept();
    });
});