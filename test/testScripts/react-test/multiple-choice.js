const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;
const ReturnElement = require('../../util/ReturnElement');

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

const iconCheck = 'M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[MultipleChoice-2] Verify that the MultipleChoice have the  UI is the same as MultipleChoice on kintone', function () {
        let multipleColor = $(XPATH_MULTIPLE).getCssProperty('background-color');
        let multipleHeight = $(XPATH_MULTIPLE).getCssProperty('height');
        let multipleIcon = browser.getAttribute(XPATH_MULTIPLE_ICON, 'd')
        expect(multipleIcon).to.equal(iconCheck);
        expect(multipleColor.parsed.hex).to.equal('#ffffff');
        expect(multipleHeight.value).to.equal('69px');
    });
    it('[MultipleChoice-5] Verify that can create a MultipleChoice without any options value', function () {
        let multipleExist = browser.isExisting(XPATH_MULTIPLE_WITHOUT_OPTION)
        let multipleList = browser.isExisting(XPATH_MULTIPLE_WITHOUT_OPTION_LIST)
        expect(multipleExist).to.equal(true);
        expect(multipleList).to.equal(false);
    });
    it('[MultipleChoice-6] Verify that can create a MultipleChoice with full options default value', function () {
        const XPATH_MULTIPLE_LIST_VALUE = '.multiple-render .kuc-list-item-label';
        let multipleValue = browser.getText(XPATH_MULTIPLE_LIST_VALUE)[0]
        let multipleVisible = browser.isVisible(XPATH_MULTIPLE)
        let multipleEnable = browser.isEnabled(XPATH_MULTIPLE)
        expect(multipleValue).to.equal('Orange');
        expect(multipleVisible).to.equal(true);
        expect(multipleEnable).to.equal(true);
    });
    it('[MultipleChoice-16] Verify that can create a MultipleChoice with full options default value', function () {
        let multipleValue = browser.getText(XPATH_MULTIPLE_ONLY_OPTION_VALUE)
        expect(multipleValue).to.equal('Orange');
    });
    it('[MultipleChoice-22] Verify that can add an item to the MultipleChoice list with full value for item', function () {
        let multipleExist = browser.isExisting(XPATH_MULTIPLE_ADD_ITEMS)
        expect(multipleExist).to.equal(false);
        $(XPATH_MULTIPLE_ADD_ITEMS_BUTTON).click();
        let multipleValue = browser.getText(XPATH_MULTIPLE_ADD_ITEMS);
        expect(multipleValue).to.equal('Lemon');
    });
    it('[MultipleChoice-23-24] Verify that can add an item to the MultipleChoice with only item.value', function () {
        let multipleVisible = browser.isVisible(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS)
        expect(multipleVisible).to.equal(false);
        $(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS_BUTTON).click();
        let multipleValue = browser.getText(XPATH_INVISIBLE_MULTIPLE_ADD_ITEMS);
        expect(multipleValue).to.equal('');
    });
    it('[MultipleChoice-31] Verify that can add an item to the MultipleChoice without item.value', function () {
        let multipleExist = browser.isExisting(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE)
        expect(multipleExist).to.equal(false);
        $(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE_BUTTON).click();
        let multipleValue = browser.getText(XPATH_MULTIPLE_ADD_ITEMS_WITHOUT_VALUE);
        expect(multipleValue).to.equal('Lemon');
    });
    it('[MultipleChoice-40] Verify that can remove an item at the last position', function () {
        let multipleItemsBefore = browser.elements(XPATH_MULTIPLE_REMOVE_ITEMS).value.length
        let multipleValueBefore = browser.getText(XPATH_MULTIPLE_REMOVE_ITEMS)[0];
        expect(multipleValueBefore).to.equal('Orange');
        expect(multipleItemsBefore).to.equal(3);
        $(XPATH_MULTIPLE_REMOVE_ITEMS_BUTTON).click();
        let multipleItemsAfter = browser.elements(XPATH_MULTIPLE_REMOVE_ITEMS).value.length
        let multipleValueAfter = browser.getText(XPATH_MULTIPLE_REMOVE_ITEMS)[0];
        expect(multipleValueAfter).to.equal('Banana');
        expect(multipleItemsAfter).to.equal(2);
    });
    it('[MultipleChoice-41] Verify that can remove an item at the first position for invisible MultipleChoice list', function () {
        $(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS_BUTTON).click();
        let multipleItemsAfter = browser.elements(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS).value.length
        let multipleValueAfter = browser.getText(XPATH_INVISIBLE_MULTIPLE_REMOVE_ITEMS)[1];
        expect(multipleValueAfter).to.equal('Banana');
        expect(multipleItemsAfter).to.equal(2);
    });
    it('[MultipleChoice-46-48] Verify that can get value item at the specific position in multiple choices list', function () {
        var items = {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        }
        $(XPATH_MULTIPLE_GET_ENABLE_ITEMS_INDEX_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[MultipleChoice-47-49] Verify that can get value item at the specific position in multiple choices list', function () {
        var items = {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        }
        ReturnElement.waitUntilSelectorVisibled(XPATH_MULTIPLE_GET_ITEMS_INDEX_BUTTON, true)
        $(XPATH_MULTIPLE_GET_ITEMS_INDEX_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[MultipleChoice-52-53-54] Verify the return list have the same number of item with the MultipleChoice list', function () {
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
        $(XPATH_MULTIPLE_GET_ITEMS_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[MultipleChoice-59] Verify that can get the value of the checked item for invisible Multiple Choice', function () {
        $(XPATH_MULTIPLE_GET_VALUE_SELECT).click()
        $(XPATH_MULTIPLE_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText()
        expect(alertText).to.equal('Orange');
        browser.alertAccept();
    });
    it('[MultipleChoice-60] Verify can set the selected value for MultipleChoice by valid value of an item in MultipleChoice', function () {
        $(XPATH_MULTIPLE_SET_BUTTON).click()
        let itemsSelected = browser.getAttribute(XPATH_MULTIPLE_SET_VALUE, 'class')
        expect(itemsSelected).to.include('kuc-list-item-selected')
    });
    it('[MultipleChoice-64] Verify can set disabled for existing enable item by the valid value of an item in MultipleChoice', function () {
        let itemsDisableBefore = browser.getAttribute(XPATH_MULTIPLE_DISABLE_ITEMS, 'class')
        expect(itemsDisableBefore).to.not.include('kuc-list-item-disable')
        $(XPATH_MULTIPLE_DISABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.getAttribute(XPATH_MULTIPLE_DISABLE_ITEMS, 'class')
        expect(itemsDisableAfter).to.include('kuc-list-item-disable')
    });
    it('[MultipleChoice-69] Verify can set enable for existing disable item by the valid value of an item in MultipleChoice', function () {
        let itemsDisableBefore = browser.getAttribute(XPATH_MULTIPLE_ENABLE_ITEMS, 'class')
        expect(itemsDisableBefore).to.include('kuc-list-item-disable')
        $(XPATH_MULTIPLE_ENABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.getAttribute(XPATH_MULTIPLE_ENABLE_ITEMS, 'class')
        expect(itemsDisableAfter).to.not.include('kuc-list-item-disable')
    });
    it('[MultipleChoice-71] Verify can set enable for existing disable item by the valid value for invisible MultipleChoice', function () {
        let multipleVisible = browser.isVisible(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS)
        expect(multipleVisible).to.equal(false)
        $(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS_BUTTON).click()
        let itemsDisableAfter = browser.getAttribute(XPATH_INVISIBLE_MULTIPLE_ENABLE_ITEMS, 'class')
        expect(itemsDisableAfter).to.not.include('kuc-list-item-disable')
    });
    it('[MultipleChoice-75] Verify that can show invisible MultipleChoice on UI', function () {
        let itemsVisibleBefore = browser.isVisible(XPATH_MULTIPLE_SHOW)
        expect(itemsVisibleBefore).to.equal(false)
        $(XPATH_MULTIPLE_DISPLAY_BUTTON).click()
        let itemsVisibleAfter = browser.isVisible(XPATH_MULTIPLE_SHOW)
        expect(itemsVisibleAfter).to.equal(true)
    });
    it('[MultipleChoice-77] Verify that can hide the visible MultipleChoice on UI', function () {
        let itemsVisibleBefore = browser.isVisible(XPATH_MULTIPLE_HIDE)
        expect(itemsVisibleBefore).to.equal(true)
        $(XPATH_MULTIPLE_NON_DISPLAY_BUTTON).click()
        let itemsVisibleAfter = browser.isVisible(XPATH_MULTIPLE_HIDE)
        expect(itemsVisibleAfter).to.equal(false)
    });
    it('[MultipleChoice-79] Verify that can disable the current enable MultipleChoice on UI', function () {
        let itemsEnableBefore = browser.getAttribute(XPATH_MULTIPLE_DISABLE, 'class')
        expect(itemsEnableBefore).to.not.include('kuc-multiple-list-disable')
        $(XPATH_MULTIPLE_DISABLE_BUTTON).click()
        let itemsEnableAfter = browser.getAttribute(XPATH_MULTIPLE_DISABLE, 'class')
        expect(itemsEnableAfter).to.include('kuc-multiple-list-disable')
    });
    it('[MultipleChoice-81] Verify that can enable the disabled MultipleChoice on UI', function () {
        let itemsEnableBefore = browser.getAttribute(XPATH_MULTIPLE_ENABLE, 'class')
        expect(itemsEnableBefore).to.include('kuc-multiple-list-disable')
        $(XPATH_MULTIPLE_ENABLE_BUTTON).click()
        let itemsEnableAfter = browser.getAttribute(XPATH_MULTIPLE_ENABLE, 'class')
        expect(itemsEnableAfter).to.not.include('kuc-multiple-list-disable')
    });
    it('[MultipleChoice-83-84] Verify that can register a callback function for change event successfully', function () {
        $(XPATH_MULTIPLE_ON_CLICK).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('value: Orange');
        browser.alertAccept();
    });
});