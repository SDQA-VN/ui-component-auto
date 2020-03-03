const Helper = require('../../helper/main.js');

const CONSTRUCTOR_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const COMPONENT_CONTENT_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div[@id='component-container']";
const CONTENT_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div";
const ADD_ITEM_TABS = "//div[@id='add-item-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const ADD_ITEM_CONTENT_TABS = "//div[@id='add-item-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div";
const ADD_ITEM_BUTTON_TABS = "//div[@id='add-item-tabs']//button[contains(text(), 'Add Item Tabs')]";
const REMOVE_ITEM_TABS = "//div[@id='remove-item-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const REMOVE_ITEM_BUTTON_TABS = "//div[@id='remove-item-tabs']//button[contains(text(), 'Remove Item Tabs')]";
const GET_ITEM_BUTTON_TABS = "//div[@id='get-item-tabs']//button[contains(text(), 'Get Item Tabs')]";
const GET_VALUE_BUTTON_TABS = "//div[@id='get-value-tabs']//button[contains(text(), 'Get Value Tabs')]";
const SET_VALUE_TABS = "//div[@id='set-value-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const SET_VALUE_BUTTON_TABS = "//div[@id='set-value-tabs']//button[contains(text(), 'Set Value Tabs')]";
const DISABLE_TABS = "//div[@id='disable-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const DISABLE_BUTTON_TABS = "//div[@id='disable-tabs']//button[contains(text(), 'Disable Tabs')]";
const ENABLE_TABS = "//div[@id='enable-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const ENABLE_BUTTON_TABS = "//div[@id='enable-tabs']//button[contains(text(), 'Enable Tabs')]";


describe('kintoneUIComponent - Text', function () {
    it('[Tabs-1-2-3-4-5-6-7-15] should Verify the operation of Tabs, all below components can be add to table as child component', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(CONSTRUCTOR_TABS, 4)
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-alert bg-success']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn normal']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn submit']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-checkbox']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='date-time-container']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-dropdown-container']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-fieldgroup']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//button[@class='kuc-icon-btn normal  gray circle']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-label']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-multiple-list kuc-list-outer']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-radio']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-table']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//input[@class='kuc-input-text']")
            .verifyElementExisting(COMPONENT_CONTENT_TABS + "//div[@class='kuc-textarea-outer']")
            .verifyAttribute(CONSTRUCTOR_TABS + '[1]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyText(CONSTRUCTOR_TABS, 'Tab1')
            .click(CONSTRUCTOR_TABS + '[2]')
            .verifyAttribute(CONSTRUCTOR_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyText(CONTENT_TABS, 'This is Tab2')
            .verifyAttribute(CONSTRUCTOR_TABS + '[1]', 'class', 'kuc-tabs-container')
            .click(CONSTRUCTOR_TABS + '[3]')
            .verifyText(CONTENT_TABS, "<script>alert('123');</script>")
            .verifyAttribute(CONSTRUCTOR_TABS + '[4]', 'class', 'kuc-tabs-container kuc-tabs-disabled')
    });

    it('[Tabs-17] should Verify that add items into Tab with options: String and DOM', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(ADD_ITEM_TABS, 2)
            .click(ADD_ITEM_BUTTON_TABS)
            .verifyNumberOfElements(ADD_ITEM_TABS, 4)
            .click(ADD_ITEM_TABS + '[3]')
            .verifyText(ADD_ITEM_CONTENT_TABS, 'This is Tab3')
            .click(ADD_ITEM_TABS + '[4]')
            .verifyElementExisting(ADD_ITEM_CONTENT_TABS + "//div[@class='kuc-alert bg-success']")
    });

    it('[Tabs-23] should Verify that the items will be removed correctly with the position in the tab ', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(REMOVE_ITEM_TABS, 3)
            .click(REMOVE_ITEM_BUTTON_TABS)
            .verifyNumberOfElements(REMOVE_ITEM_TABS, 2)
    });

    it('[Tabs-26] should Verify that can get all items in tab including disabled items ', function () {
        let tabItemsValue = [
            { "tabName": "Tab1", "tabContent": "This is Tab1", "isDisabled": false },
            { "tabName": "Tab2", "tabContent": "This is Tab2", "isDisabled": false }
        ]
        Helper.ElementHandler
            .click(GET_ITEM_BUTTON_TABS)
            .verifyAlertText(JSON.stringify(tabItemsValue))
    });

    it('[Tabs-29] should Verify that can get value of the selected item ', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_TABS)
            .verifyAlertText('0')
    });

    it('[Tabs-32] should Verify that can set the selected value for items in the tab ', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_VALUE_TABS + '[1]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .click(SET_VALUE_BUTTON_TABS)
            .verifyAttribute(SET_VALUE_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyAttribute(SET_VALUE_TABS + '[1]', 'class', 'kuc-tabs-container')
    });

    it('[Tabs-37-38] should Verify that can set disable for existing enabled item in the Tab and existing disabled item in the Tab', function () {
        Helper.ElementHandler
            .verifyAttribute(DISABLE_TABS + '[2]', 'class', 'kuc-tabs-container')
            .verifyAttribute(DISABLE_TABS + '[3]', 'class', 'kuc-tabs-container kuc-tabs-disabled')
            .click(DISABLE_BUTTON_TABS)
            .verifyAttribute(DISABLE_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-disabled')
            .verifyAttribute(DISABLE_TABS + '[3]', 'class', 'kuc-tabs-container kuc-tabs-disabled')
    });

    it('[Tabs-41-42] should Verify that can set enable for existing disabled item in the Tab and existing enabled item in the Tab', function () {
        Helper.ElementHandler
            .verifyAttribute(ENABLE_TABS + '[1]', 'class', 'kuc-tabs-container')
            .verifyAttribute(ENABLE_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-disabled')
            .click(ENABLE_BUTTON_TABS)
            .verifyAttribute(ENABLE_TABS + '[1]', 'class', 'kuc-tabs-container')
            .verifyAttribute(ENABLE_TABS + '[2]', 'class', 'kuc-tabs-container')
    });
});