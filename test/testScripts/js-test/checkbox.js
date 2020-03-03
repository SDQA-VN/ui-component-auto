const Helper = require('../../helper/main.js');

const UI_CHECKBOX = "//div[@id='ui-checkbox']//div[@class='kuc-input-checkbox']";
const CHECKBOX_FULL_OPTION = "//div[@id='cons-full-option-checkbox']//div[@class='kuc-input-checkbox']";
const WITHOUT_OPTION_VALUE = "//div[@id='cons-without-value-checkbox']//div[@class='kuc-input-checkbox']";
const ONLY_OPTION_VALUE = "//div[@id='cons-only-value-checkbox']//div[@class='kuc-input-checkbox']";

const ADD_ITEMS_FULL_VALUE = "//div[@id='add-items-full-value-checkbox']//div[@class='kuc-input-checkbox']";
const ADD_ITEMS_FULL_VALUE_BUTTON = "//button[text()='Add Items Full Value']";
const ADD_ITEMS_FULL_VALUE_ITEMS = "//div[@id='add-items-full-value-checkbox']//span[@class='kuc-input-checkbox-item']";
const ADD_ITEMS_FULL_VALUE_ITEM_DISABLE = "//div[@id='add-items-full-value-checkbox']//label[text()='New item full value disabled']//preceding-sibling::input";
const ADD_ITEMS_FULL_VALUE_ITEM_ENABLE = "//div[@id='add-items-full-value-checkbox']//label[text()='New item full value enabled']//preceding-sibling::input";

const ADD_ITEM_INVISIBLE_CHECKBOX = "//div[@id='add-item-invisible-checkbox']//div[@class='kuc-input-checkbox']";
const ADD_ITEM_INVISIBLE_CHECKBOX_BUTTON = "//button[text()='Add Item Invisible Checkbox']";
const ADD_ITEM_INVISIBLE_CHECKBOX_ITEMS = "//div[@id='add-item-invisible-checkbox']//span[@class='kuc-input-checkbox-item']";
const ADD_ITEM_INVISIBLE_CHECKBOX_SHOW_BUTTON = "//button[text()='Add Item Invisible Checkbox Show']";
const ADD_ITEMS_INVISIBLE_CHECKBOX_ITEM = "//div[@id='add-item-invisible-checkbox']//label[text()='New Item Invisible Checkbox']";

const ADD_ITEM_ONLY_VALUE_CHECKBOX = "//div[@id='add-item-only-value-checkbox']//div[@class='kuc-input-checkbox']";
const ADD_ITEM_ONLY_VALUE_CHECKBOX_BUTTON = "//button[text()='Add Item Only Value Checkbox']";
const ADD_ITEM_ONLY_VALUE_CHECKBOX_ITEM = "//div[@id='add-item-only-value-checkbox']//label[text()='']";

const GET_ITEM_INDEX_CHECKBOX = "//div[@id='get-item-index-checkbox']//div[@class='kuc-input-checkbox']";
const GET_ITEM_INDEX_BUTTON = "//button[text()='Get Item Index Checkbox']";

const GET_ITEMS_CHECKBOX = "//div[@id='get-items-checkbox']//div[@class='kuc-input-checkbox']";
const GET_ITEMS_CHECKBOX_BUTTON = "//button[text()='Get Items Checkbox']";

const GET_VALUE_CHECKBOX_BUTTON = "//button[text()='Get Value Checkbox']";
const GET_VALUE_CHECKBOX_ITEM_SELECTED = "//div[@id='get-value-checkbox']//label[text()='GV_Default_Item_Checkbox']";

const SET_VALUE_CHECKBOX_BUTTON = "//button[text()='Set Value Checkbox']";
const SET_VALUE_CHECKBOX_ITEM_SELECTED = "#set-value-checkbox input[type=checkbox]:checked+label";

const SET_DISABLE_ITEM_CHECKBOX_BUTTON = "//button[text()='Set Disable Item Checkbox']";
const SET_DISABLE_ITEM_CHECKBOX = "//div[@id='set-disable-item-checkbox']//label[text()='SDI_Default_Item_Checkbox']//preceding-sibling::input";

const SET_ENABLE_ITEM_CHECKBOX_BUTTON = "//button[text()='Set Enable Item Checkbox']";
const SET_ENABLE_ITEM_ENBALED_CHECKBOX = "//div[@id='set-enable-item-checkbox']//label[text()='SEI_Default_Item_Checkbox']//preceding-sibling::input";
const SET_ENABLE_ITEM_DISABLED_CHECKBOX = "//div[@id='set-enable-item-checkbox']//label[text()='SEI_Item_Checkbox_Disable']//preceding-sibling::input";

const SHOW_CHECKBOX_BUTTON = "//button[text()='Show Checkbox']";
const SHOW_CHECKBOX = "//div[@id='show-checkbox']//div[@class='kuc-input-checkbox']";

const HIDE_CHECKBOX_BUTTON = "//button[text()='Hide Checkbox']";
const HIDE_CHECKBOX = "//div[@id='hide-checkbox']//div[@class='kuc-input-checkbox']";

const DISABLE_CHECKBOX_BUTTON = "//button[text()='Disable Checkbox']";
const DISABLE_ITEM_1_CHECKBOX = "//div[@id='disable-checkbox']//label[text()='disable_Default_Item_Checkbox']//preceding-sibling::input";
const DISABLE_ITEM_2_CHECKBOX = "//div[@id='disable-checkbox']//label[text()='disable_Item_Checkbox_1']//preceding-sibling::input";

const ENABLE_CHECKBOX_BUTTON = "//button[text()='Enable Checkbox']";
const ENABLE_ITEM_1_CHECKBOX = "//div[@id='enable-checkbox']//label[text()='enable_Default_Item_Checkbox']//preceding-sibling::input";
const ENABLE_ITEM_2_CHECKBOX = "//div[@id='enable-checkbox']//label[text()='enable_Item_Checkbox_1']//preceding-sibling::input";

const ON_TRIGGER_CHECKBOX_ITEM = "//div[@id='on-trigger-checkbox']//label[text()='on_trigger_Item_Checkbox_1']";

describe('kintoneUIComponent - Checkbox', function () {
    it('[Checkbox-1] should checking UI for checkbox', function () {
        Helper.ElementHandler
            .waitForElement(UI_CHECKBOX)
            .verifyElementColor(UI_CHECKBOX, 'color', '#333333')
            .verifyElementPosition(UI_CHECKBOX, 'position', 'static')
            .verifyElementSize(UI_CHECKBOX, 299, 57)
    });

    it('[Checkbox-5] should create a Checkbox with full options', function () {
        Helper.ElementHandler
            .waitForElement(CHECKBOX_FULL_OPTION)
            .verifyElementDisplayed(CHECKBOX_FULL_OPTION)
    });

    it('[Checkbox-4] should create a Checkbox without any options value', function () {
        Helper.ElementHandler
            .waitForElement(WITHOUT_OPTION_VALUE)
            .verifyElementDisplayed(WITHOUT_OPTION_VALUE)
    });

    it('[Checkbox-15] should verify create a Checkbox with only option.value', function () {
        Helper.ElementHandler
            .waitForElement(ONLY_OPTION_VALUE)
            .verifyElementDisplayed(ONLY_OPTION_VALUE)
    });

    it('[Checkbox-23] should add an item to the checkbox list with full value for item', function () {
        Helper.ElementHandler
            .waitForElement(ADD_ITEMS_FULL_VALUE)
            .verifyNumberOfElements(ADD_ITEMS_FULL_VALUE_ITEMS, 2)
            .click(ADD_ITEMS_FULL_VALUE_BUTTON)
            .verifyNumberOfElements(ADD_ITEMS_FULL_VALUE_ITEMS, 4)
            .verifyElementDisabled(ADD_ITEMS_FULL_VALUE_ITEM_DISABLE)
            .verifyElementEnabled(ADD_ITEMS_FULL_VALUE_ITEM_ENABLE)
    });

    it('[Checkbox-30] should add an item to the invisible checkbox list with full value for item', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(ADD_ITEM_INVISIBLE_CHECKBOX)
            .click(ADD_ITEM_INVISIBLE_CHECKBOX_BUTTON)
            .click(ADD_ITEM_INVISIBLE_CHECKBOX_SHOW_BUTTON)
            .verifyNumberOfElements(ADD_ITEM_INVISIBLE_CHECKBOX_ITEMS, 3)
            .verifyElementDisplayed(ADD_ITEMS_INVISIBLE_CHECKBOX_ITEM)
    });

    it('[Checkbox-31] should add an item to the checkbox with only item.value', function () {
        Helper.ElementHandler
            .waitForElement(ADD_ITEM_ONLY_VALUE_CHECKBOX)
            .click(ADD_ITEM_ONLY_VALUE_CHECKBOX_BUTTON)
            .verifyElementDisplayed(ADD_ITEM_ONLY_VALUE_CHECKBOX_ITEM)
    });

    it('[CheckBox-49-51] should get item by index', function () {
        Helper.ElementHandler
            .waitForElement(GET_ITEM_INDEX_CHECKBOX)
            .click(GET_ITEM_INDEX_BUTTON)
            .verifyAlertText('{"label":"GI_Item_Checkbox_3","value":"GI_Item_Checkbox_3","isDisabled":false}')
    });

    it('[Checkbox-57-58-59] should get items of checkbox', function () {
        const itemsValue = {
            items: [
                {
                    label: 'GIs_Default_Item_Checkbox',
                    value: 'GIs_Default_Item_Checkbox',
                    isDisabled: true
                },
                {
                    label: 'GIs_Item_Checkbox_2',
                    value: 'GIs_Item_Checkbox_2',
                    isDisabled: false
                }
            ],
        }
        Helper.ElementHandler
            .waitForElement(GET_ITEMS_CHECKBOX)
            .click(GET_ITEMS_CHECKBOX_BUTTON)
            .verifyAlertText(JSON.stringify(itemsValue.items))
    });

    it('[Checkbox-62-63] should get value of checkbox', function () {
        let valueSelected = Helper.ElementHandler.getText(GET_VALUE_CHECKBOX_ITEM_SELECTED);
        Helper.ElementHandler
            .click(GET_VALUE_CHECKBOX_BUTTON)
            .verifyAlertText(valueSelected)
    });

    it('[Checkbox-67-68] should set value of checkbox', function () {
        Helper.ElementHandler
            .click(SET_VALUE_CHECKBOX_BUTTON)
            .verifyText(SET_VALUE_CHECKBOX_ITEM_SELECTED, 'SV_Default_Item_Checkbox')
    });

    it('[CheckBox-70-72] should disable items of checkbox', function () {
        Helper.ElementHandler
            .verifyElementEnabled(SET_DISABLE_ITEM_CHECKBOX)
            .click(SET_DISABLE_ITEM_CHECKBOX_BUTTON)
            .verifyElementDisabled(SET_DISABLE_ITEM_CHECKBOX)
    });

    it('[Checkbox-76] should enable items of checkbox', function () {
        Helper.ElementHandler
            .verifyElementEnabled(SET_ENABLE_ITEM_ENBALED_CHECKBOX)
            .verifyElementDisabled(SET_ENABLE_ITEM_DISABLED_CHECKBOX)
            .click(SET_ENABLE_ITEM_CHECKBOX_BUTTON)
            .verifyElementEnabled(SET_ENABLE_ITEM_ENBALED_CHECKBOX)
            .verifyElementEnabled(SET_ENABLE_ITEM_DISABLED_CHECKBOX)
    });

    it('[Checkbox-80] should show invisible Checkbox on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SHOW_CHECKBOX)
            .click(SHOW_CHECKBOX_BUTTON)
            .verifyElementDisplayed(SHOW_CHECKBOX)
    });

    it('[Checkbox-82-83] should hide visible Checkbox on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(HIDE_CHECKBOX)
            .click(HIDE_CHECKBOX_BUTTON)
            .verifyElementNotDisplayed(HIDE_CHECKBOX)
    });

    it('[Checkbox-84] should disable the current enable Checkbox on UI', function () {
        Helper.ElementHandler
            .verifyElementEnabled(DISABLE_ITEM_1_CHECKBOX)
            .verifyElementEnabled(DISABLE_ITEM_2_CHECKBOX)
            .click(DISABLE_CHECKBOX_BUTTON)
            .verifyElementDisabled(DISABLE_ITEM_1_CHECKBOX)
            .verifyElementDisabled(DISABLE_ITEM_2_CHECKBOX)
    });

    it('[Checkbox-86] should enable the current disable Checkbox on UI', function () {
        Helper.ElementHandler
            .verifyElementDisabled(ENABLE_ITEM_1_CHECKBOX)
            .verifyElementDisabled(ENABLE_ITEM_2_CHECKBOX)
            .click(ENABLE_CHECKBOX_BUTTON)
            .verifyElementEnabled(ENABLE_ITEM_1_CHECKBOX)
            .verifyElementEnabled(ENABLE_ITEM_2_CHECKBOX)
    });

    it('[Checkbox-88-89] should register a callback function for change event successfully', function () {
        Helper.ElementHandler
            .click(ON_TRIGGER_CHECKBOX_ITEM)
            .verifyAlertText('on trigger checkbox has been changed')
    });
});