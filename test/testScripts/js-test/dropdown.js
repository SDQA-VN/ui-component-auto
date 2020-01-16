const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const CONSTRUCTOR_DROPDOWN = "//div[@id='constructor-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_CONSTRUCTOR_DROPDOWN = "//div[@id='constructor-dropdown']//div[@class='kuc-list-outer']//div[@class='kuc-list-item']";
const VALUE_SELECTED_CONSTRUCTOR_DROPDOWN = "//div[@id='constructor-dropdown']//div[@class='kuc-list-outer']//div[@class='kuc-list-item kuc-list-item-selected']";
const DISABLED_VALUE_CONSTRUCTOR_DROPDOWN = "//div[@id='constructor-dropdown']//div[@class='kuc-list-outer']//div[@class='kuc-list-item  kuc-list-item-disable']";
const NO_ITEM_DROPDOWN = "//div[@id='no-item-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_NO_ITEM_DROPDOWN = "//div[@id='no-item-dropdown']//div[@class='kuc-list-outer']//div[@class='kuc-list-item']";
const ADD_ITEM_DROPDOWN = "//div[@id='add-item-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_ADD_ITEM_DROPDOWN = "//div[@id='add-item-dropdown']//div[@class='kuc-list-outer']//div[contains(@class,'kuc-list-item')]";
const ADD_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Add Item Dropdown')]";
const ADD_ITEM_INVISIBLE_DROPDOWN = "//div[@id='add-item-invisible-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_ADD_ITEM_INVISIBLE_DROPDOWN = "//div[@id='add-item-invisible-dropdown']//div[@class='kuc-list-outer']//div[contains(@class,'kuc-list-item')]";
const ADD_ITEM_BUTTON_INVISIBLE_DROPDOWN = "//button[contains(text(),'Add Item Invisible Dropdown')]";
const ADD_ITEM_SHOW_BUTTON_INVISIBLE_DROPDOWN = "//button[contains(text(),'Show Invisible Dropdown')]";
const GET_ISDISABLED_ADD_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Get isDisabled of Add Item Dropdown')]";
const REMOVE_ITEM_DROPDOWN = "//div[@id='remove-item-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_REMOVE_ITEM_DROPDOWN = "//div[@id='remove-item-dropdown']//div[@class='kuc-list-outer']//div[contains(@class,'kuc-list-item')]";
const REMOVE_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Remove Item Dropdown')]";
const GET_ITEMS_BUTTON_DROPDOWN = "//button[contains(text(),'Get Items Dropdown')]";
const GET_VALUE_DROPDOWN = "//div[@id='get-value-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_GET_VALUE_DROPDOWN = "//div[@id='get-value-dropdown']//div[contains(@class,'kuc-list-item')]";
const GET_VALUE_BUTTON_DROPDOWN = "//button[contains(text(),'Get Value Dropdown')]";
const HIDE_GET_VALUE_BUTTON_DROPDOWN = "//button[contains(text(),'Hide Value Dropdown')]";
const SET_VALUE_DROPDOWN = "//div[@id='set-value-dropdown']//div[@class='kuc-dropdown-selected']"
const SET_VALUE_BUTTON_DROPDOWN = "//button[contains(text(),'Set Value Dropdown')]";
const SET_DISABLED_VALUE_BUTTON_DROPDOWN = "//button[contains(text(),'Set Disabled Value Dropdown')]";
const SET_NO_VALUE_BUTTON_DROPDOWN = "//button[contains(text(),'Set No Value Dropdown')]";
const DISABLE_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Disable Item Dropdown')]";
const GET_ISDISABLED_DISABLE_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Get isDisabled of Disable Item Dropdown')]";
const ENABLE_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Enable Item Dropdown')]";
const GET_ISDISABLED_ENABLE_ITEM_BUTTON_DROPDOWN = "//button[contains(text(),'Get isDisabled of Enable Item Dropdown')]";
const SHOW_DROPDOWN = "//div[@id='show-dropdown']//div[@class='kuc-dropdown-selected']";
const SHOW_BUTTON_DROPDOWN = "//button[contains(text(),'Show Dropdown')]";
const HIDE_DROPDOWN = "//div[@id='hide-dropdown']//div[@class='kuc-dropdown-selected']";
const HIDE_BUTTON_DROPDOWN = "//button[contains(text(),'Hide Dropdown')]";
const DISABLE_BUTTON_DROPDOWN = "//button[contains(text(),'Disable Dropdown')]";
const GET_ISDISABLED_BUTTON_DISABLE_DROPDOWN = "//button[contains(text(),'Get isDisabled of Disable Dropdown')]";
const ENABLE_BUTTON_DROPDOWN = "//button[contains(text(),'Enable Dropdown')]";
const GET_ISDISABLED_BUTTON_ENABLE_DROPDOWN = "//button[contains(text(),'Get isDisabled of Enable Dropdown')]";
const ON_CALLBACK_FUNCTION_DROPDOWN = "//div[@id='on-callback-function-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_ON_CALLBACK_FUNCTION_DROPDOWN = "//div[@id='on-callback-function-dropdown']//div[@class='kuc-list-outer']//div[contains(@class,'kuc-list-item')]";
const ON_CALLBACK_TRIGGER_DROPDOWN = "//div[@id='on-callback-trigger-dropdown']//div[@class='kuc-dropdown-selected']";
const VALUE_ON_CALLBACK_TRIGGER_DROPDOWN = "//div[@id='on-callback-trigger-dropdown']//div[@class='kuc-list-outer']//div[contains(@class,'kuc-list-item')]";

describe('kintoneUIComponent - Dropdown', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Dropdown-2-3-4-6-7-8-10-11-12-13-14-15-19] should verify that the Dropdown have the  UI is the same as Dropdown on kintone', function () {
        Helper.ElementHandler
            //UI and operation of dropdown
            .verifyText(CONSTRUCTOR_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", '')
            .click(CONSTRUCTOR_DROPDOWN)
            .click(VALUE_CONSTRUCTOR_DROPDOWN + "[1]")
            .verifyText(CONSTRUCTOR_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", 'Orange')
            .verifyElementColor(CONSTRUCTOR_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", 'color', '#3498db')
            .click(CONSTRUCTOR_DROPDOWN)
            .verifyElementExists(VALUE_SELECTED_CONSTRUCTOR_DROPDOWN)
            .verifyElementColor(VALUE_CONSTRUCTOR_DROPDOWN + "//span[1]", 'color', '#333333')
            .verifyElementColor(VALUE_SELECTED_CONSTRUCTOR_DROPDOWN + "//span[1]", 'color', '#3498db')
            .verifyElementColor(DISABLED_VALUE_CONSTRUCTOR_DROPDOWN + "//span[1]", 'color', '#888888')
            .verifyElementExists(VALUE_SELECTED_CONSTRUCTOR_DROPDOWN + "/span[@class='kuc-icon-check']")
            .moveToObject(VALUE_SELECTED_CONSTRUCTOR_DROPDOWN)
            .verifyElementColor(VALUE_SELECTED_CONSTRUCTOR_DROPDOWN, 'background-color', '#e2f2fe')
            .moveToObject(VALUE_CONSTRUCTOR_DROPDOWN)
            .click(VALUE_CONSTRUCTOR_DROPDOWN)
            .verifyText(CONSTRUCTOR_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", 'Lemon')
            .verifyElementColor(CONSTRUCTOR_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", 'color', '#3498db')
    });

    it('[Dropdown-6-7] should verify that can create a no item dropdown ', function () {
        Helper.ElementHandler
            .verifyText(NO_ITEM_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']", '')
            .verifyElementNotExist(VALUE_NO_ITEM_DROPDOWN)
    });

    it('[Dropdown-42-44-55-56] verify can add item to dropdown', function () {
        Helper.ElementHandler
            .click(ADD_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_ADD_ITEM_DROPDOWN,2)
            .click(ADD_ITEM_BUTTON_DROPDOWN)
            .click(ADD_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_ADD_ITEM_DROPDOWN,4)
            .click(GET_ISDISABLED_ADD_ITEM_BUTTON_DROPDOWN)
            .verifyAlertText('false,true,false,true')
    });
    
    it('[Dropdown-43-53-54] verify can add item to invisible dropdown', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(VALUE_ADD_ITEM_INVISIBLE_DROPDOWN,2)
            .click(ADD_ITEM_SHOW_BUTTON_INVISIBLE_DROPDOWN)
            .click(ADD_ITEM_BUTTON_INVISIBLE_DROPDOWN)
            .click(ADD_ITEM_INVISIBLE_DROPDOWN)
            .verifyNumberOfElements(VALUE_ADD_ITEM_INVISIBLE_DROPDOWN,3)
            .verifyText(VALUE_ADD_ITEM_INVISIBLE_DROPDOWN + '[3]','Banana')
            .verifyElementEnabled(VALUE_ADD_ITEM_INVISIBLE_DROPDOWN + '[3]')
    });

    it('[Dropdown-57-62] verify can remove item from dropdown', function () {
        Helper.ElementHandler
            .click(REMOVE_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_DROPDOWN,2)
            .click(REMOVE_ITEM_BUTTON_DROPDOWN)
            .click(REMOVE_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_DROPDOWN,1)
            .click(REMOVE_ITEM_BUTTON_DROPDOWN)
            .click(REMOVE_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_DROPDOWN,0)
            .click(REMOVE_ITEM_DROPDOWN)
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_DROPDOWN,0)
    });

    it('[Dropdown-64-65-66-67] verify that can get items of dropdown', function () {
        Helper.ElementHandler
            .click(GET_ITEMS_BUTTON_DROPDOWN)
            .verifyAlertText('[{"label":"Orange","value":"Orange","isDisabled":false},{"label":"Lemon","value":"Lemon","isDisabled":true},{"label":"Grape","value":"Grape"}]')
    });

    it('[Dropdown-69-70-71] verify that can get selected value of dropdown', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_DROPDOWN)
            .verifyAlertText('"Lemon"')
            .click(GET_VALUE_DROPDOWN)
            .click(VALUE_GET_VALUE_DROPDOWN + "[1]")
            .click(GET_VALUE_BUTTON_DROPDOWN)
            .verifyAlertText('"Orange"')
            .click(HIDE_GET_VALUE_BUTTON_DROPDOWN)
            .click(GET_VALUE_BUTTON_DROPDOWN)
            .verifyAlertText('"Orange"')
    });

    it('[Dropdown-74-75-76] verify that can set value for dropdown', function () {
        Helper.ElementHandler
            .click(SET_VALUE_BUTTON_DROPDOWN)
            .verifyText(SET_VALUE_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']",'Orange')
            .click(SET_DISABLED_VALUE_BUTTON_DROPDOWN)
            .verifyText(SET_VALUE_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']",'Lemon')
            .click(SET_NO_VALUE_BUTTON_DROPDOWN)
            .verifyText(SET_VALUE_DROPDOWN + "/span/span[@class='kuc-dropdown-selected-label']",'')
    });

    it('[Dropdown-79-80] verify that can disable item of dropdown', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_DISABLE_ITEM_BUTTON_DROPDOWN)
            .verifyAlertText('false,true')
            .click(DISABLE_ITEM_BUTTON_DROPDOWN)
            .click(GET_ISDISABLED_DISABLE_ITEM_BUTTON_DROPDOWN)
            .verifyAlertText('true,true')
    });

    it('[Dropdown-84-85] verify that enable item of dropdown', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_ENABLE_ITEM_BUTTON_DROPDOWN)
            .verifyAlertText('false,true')
            .click(ENABLE_ITEM_BUTTON_DROPDOWN)
            .click(GET_ISDISABLED_ENABLE_ITEM_BUTTON_DROPDOWN)
            .verifyAlertText('false,false')
    });

    it('[Dropdown-90] verify that can show dropdown', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(SHOW_DROPDOWN)
            .click(SHOW_BUTTON_DROPDOWN)
            .verifyElementVisible(SHOW_DROPDOWN)
    });

    it('[Dropdown-92] verify that can hide dropdown', function () {
        Helper.ElementHandler
            .verifyElementVisible(HIDE_DROPDOWN)
            .click(HIDE_BUTTON_DROPDOWN)
            .verifyElementNotVisible(HIDE_DROPDOWN)
    });

    it('[Dropdown-94] verify that can disable dropdown', function () {
        Helper.ElementHandler
        .click(GET_ISDISABLED_BUTTON_DISABLE_DROPDOWN)
        .verifyAlertText('false')
        .click(DISABLE_BUTTON_DROPDOWN)
        .click(GET_ISDISABLED_BUTTON_DISABLE_DROPDOWN)
        .verifyAlertText('true')
    });

    it('[Dropdown-96] verify that can enable dropdown', function () {
        Helper.ElementHandler
        .click(GET_ISDISABLED_BUTTON_ENABLE_DROPDOWN)
        .verifyAlertText('true')
        .click(ENABLE_BUTTON_DROPDOWN)
        .click(GET_ISDISABLED_BUTTON_ENABLE_DROPDOWN)
        .verifyAlertText('false')
    });

    it('[Dropdown-98] verify that can callback function dropdown', function () {
       Helper.ElementHandler
        .click(ON_CALLBACK_FUNCTION_DROPDOWN)
        .click(VALUE_ON_CALLBACK_FUNCTION_DROPDOWN + '[1]')
        .verifyAlertText('onCallBackFunctionDropdown has been changed')
    });

    it('[Dropdown-99] verify that callback trigger dropdown ', function () {
        Helper.ElementHandler
         .click(ON_CALLBACK_TRIGGER_DROPDOWN)
         .click(VALUE_ON_CALLBACK_TRIGGER_DROPDOWN + '[1]')
         .verifyAlertText('onCallBackTriggerDropdown has been changed')
     });
});