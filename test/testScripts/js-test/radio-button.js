const Helper = require('../../helper/main');

const CONSTRUCTOR_RADIOBUTTON = "#constructor-radio-button .kuc-input-radio-item input[type=radio]:checked";
const VALUE_CONSTRUCTOR_RADIOBUTTON = "#constructor-radio-button .kuc-input-radio-item";
const VALUE_ADD_ITEM_RADIOBUTTON = "#add-item-radio-button .kuc-input-radio-item";
const ADD_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Add Item Radio Button')]";
const VALUE_NO_ITEM_RADIOBUTTON = "#no-item-radio-button .kuc-input-radio-item";
const ADD_ITEM_INVISIBLE_RADIOBUTTON = "#add-item-invisible-radio-button .kuc-input-radio-item";
const ADD_ITEM_BUTTON_INVISIBLE_RADIOBUTTON = "//button[contains(text(),'Add Item Invisible Radio Button')]";
const ADD_ITEM_SHOW_BUTTON_INVISIBLE_RADIOBUTTON = "//button[contains(text(),'Show Invisible Radio Button')]";
const VALUE_REMOVE_ITEM_RADIOBUTTON = "#remove-item-radio-button .kuc-input-radio-item";
const REMOVE_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Remove Item Radio Button')]";
const GET_ITEMS_BUTTON_RADIOBUTTON = "//button[contains(text(),'Get Items Radio Button')]";
const GET_VALUE_RADIOBUTTON = "#get-value-radio-button .kuc-input-radio-item";
const GET_VALUE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Get Value Radio Button')]";
const SET_VALUE_RADIOBUTTON = "#set-value-radio-button .kuc-input-radio-item input[type=radio]:checked"
const SET_VALUE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Set Value Radio Button')]";
const SET_DISABLED_VALUE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Set Disabled Value Radio Button')]";
const SET_NO_VALUE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Set No Value Radio Button')]";
const DISABLE_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Disable Item Radio Button')]";
const GET_ISDISABLED_DISABLE_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Get isDisabled of Disable Item Radio Button')]";
const HIDE_GET_VALUE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Hide Value Radio Button')]";
const ENABLE_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Enable Item Radio Button')]";
const GET_ISDISABLED_ENABLE_ITEM_BUTTON_RADIOBUTTON = "//button[contains(text(),'Get isDisabled of Enable Item Radio Button')]";
const SHOW_RADIOBUTTON = "#show-radio-button .kuc-input-radio-item";
const SHOW_BUTTON_RADIOBUTTON = "//button[contains(text(),'Show Radio Button')]";
const HIDE_RADIOBUTTON = "#hide-radio-button .kuc-input-radio-item";
const HIDE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Hide Radio Button')]";
const DISABLE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Disable Radio Button')]";
const GET_ISDISABLED_BUTTON_DISABLE_RADIOBUTTON = "//button[contains(text(),'Get isDisabled of Disable Radio Button')]";
const ENABLE_BUTTON_RADIOBUTTON = "//button[contains(text(),'Enable Radio Button')]";
const GET_ISDISABLED_BUTTON_ENABLE_RADIOBUTTON = "//button[contains(text(),'Get isDisabled of Enable Radio Button')]";
const ON_CALLBACK_FUNCTION_RADIOBUTTON = "#on-callback-function-radio-button .kuc-input-radio-item";
const ON_CALLBACK_TRIGGER_RADIOBUTTON = "#on-callback-trigger-radio-button .kuc-input-radio-item";


describe('kintoneUIComponent - RadioButton', function () {
    it('[RadioButton-2-6-9] should verify that the radiobutton have the  UI is the same as Dropdown on kintone', function () {
        Helper.ElementHandler
            //verify UI and the operation of Radio Button 
            .verifyElementNotExisting(CONSTRUCTOR_RADIOBUTTON)
            .click(VALUE_CONSTRUCTOR_RADIOBUTTON + ":nth-child(1) label")
            .verifyElementExisting(CONSTRUCTOR_RADIOBUTTON)
            .verifyElementColor(VALUE_CONSTRUCTOR_RADIOBUTTON + ":nth-child(1) label", "color", "#333333")
            .verifyElementDisabled(VALUE_CONSTRUCTOR_RADIOBUTTON + ":nth-child(3) input")
            .verifyElementColor(VALUE_CONSTRUCTOR_RADIOBUTTON + ":nth-child(3) label", "color", "#bababa")
    });

    it('[RadioButton-7] verify that can create an no item radiobutton', function () {
        Helper.ElementHandler
            //verify UI and the operation of Radio Button 
            .verifyElementNotExisting(VALUE_NO_ITEM_RADIOBUTTON)
    });

    it('[RadioButton-24-30] verify that can add an item to radio button', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(VALUE_ADD_ITEM_RADIOBUTTON, 2)
            .click(ADD_ITEM_BUTTON_RADIOBUTTON)
            .verifyNumberOfElements(VALUE_ADD_ITEM_RADIOBUTTON, 4)
            .verifyText(VALUE_ADD_ITEM_RADIOBUTTON + ":nth-child(3)", "Banana")
            .verifyElementEnabled(VALUE_ADD_ITEM_RADIOBUTTON + ":nth-child(3) input")
            .verifyText(VALUE_ADD_ITEM_RADIOBUTTON + ":nth-child(4)", "Grape")
            .verifyElementDisabled(VALUE_ADD_ITEM_RADIOBUTTON + ":nth-child(4) input")
    });

    it('[Radio-25] verify can add item to invisible radiobutton', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(ADD_ITEM_INVISIBLE_RADIOBUTTON, 2)
            .click(ADD_ITEM_SHOW_BUTTON_INVISIBLE_RADIOBUTTON)
            .click(ADD_ITEM_BUTTON_INVISIBLE_RADIOBUTTON)
            .verifyNumberOfElements(ADD_ITEM_INVISIBLE_RADIOBUTTON, 3)
            .verifyText(ADD_ITEM_INVISIBLE_RADIOBUTTON + ':nth-child(3)', 'Banana')
            .verifyElementEnabled(ADD_ITEM_INVISIBLE_RADIOBUTTON + ':nth-child(3)')
    });

    it('[RadioButton-37-38] verify that can remove an item to dropdown', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_RADIOBUTTON, 3)
            .click(REMOVE_ITEM_BUTTON_RADIOBUTTON)
            .verifyNumberOfElements(VALUE_REMOVE_ITEM_RADIOBUTTON, 1)
            .verifyText(VALUE_REMOVE_ITEM_RADIOBUTTON + ":nth-child(1) label", "Lemon")
    });

    it('[RadioButton-44-46] verify can get items of radiobutton', function () {
        Helper.ElementHandler
            .click(GET_ITEMS_BUTTON_RADIOBUTTON)
            .verifyAlertText('[{"label":"Orange","value":"Orange","isDisabled":false},{"label":"Lemon","value":"Lemon","isDisabled":true},{"label":"","value":""}]')
    });

    it('[RadioButton-49-50-52] verify can get value of radiobutton', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_RADIOBUTTON)
            .verifyAlertText('"Lemon"')
            .click(GET_VALUE_RADIOBUTTON + ":nth-child(1) label")
            .click(GET_VALUE_BUTTON_RADIOBUTTON)
            .verifyAlertText('"Orange"')
            .click(HIDE_GET_VALUE_BUTTON_RADIOBUTTON)
            .click(GET_VALUE_BUTTON_RADIOBUTTON)
            .verifyAlertText('"Orange"')
    });

    it('[RadioButton-54-55] verify that can set value for radiobutton', function () {
        Helper.ElementHandler
            .click(SET_DISABLED_VALUE_BUTTON_RADIOBUTTON)
            .verifyElementExisting(SET_VALUE_RADIOBUTTON)
            .verifyText(SET_VALUE_RADIOBUTTON + ' + label', 'Lemon')
            .click(SET_NO_VALUE_BUTTON_RADIOBUTTON)
            .verifyElementExisting(SET_VALUE_RADIOBUTTON)
            .verifyText(SET_VALUE_RADIOBUTTON + ' + label', '')
            .click(SET_VALUE_BUTTON_RADIOBUTTON)
            .verifyElementExisting(SET_VALUE_RADIOBUTTON)
            .verifyText(SET_VALUE_RADIOBUTTON + ' + label', 'Orange')
    });

    it('[RadioButton-58-59] verify that can disable item of radiobutton', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_DISABLE_ITEM_BUTTON_RADIOBUTTON)
            .verifyAlertText('false,true')
            .click(DISABLE_ITEM_BUTTON_RADIOBUTTON)
            .click(GET_ISDISABLED_DISABLE_ITEM_BUTTON_RADIOBUTTON)
            .verifyAlertText('true,true')
    });

    it('[RadioButton-63-64] verify that enable item of radiobutton', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_ENABLE_ITEM_BUTTON_RADIOBUTTON)
            .verifyAlertText('false,true')
            .click(ENABLE_ITEM_BUTTON_RADIOBUTTON)
            .click(GET_ISDISABLED_ENABLE_ITEM_BUTTON_RADIOBUTTON)
            .verifyAlertText('false,false')
    });

    it('[RadioButton-69] verify that can show radiobutton', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(SHOW_RADIOBUTTON)
            .click(SHOW_BUTTON_RADIOBUTTON)
            .verifyElementDisplayed(SHOW_RADIOBUTTON)
    });

    it('[RadioButton-71] verify that can hide radiobutton', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(HIDE_RADIOBUTTON)
            .click(HIDE_BUTTON_RADIOBUTTON)
            .verifyElementNotDisplayed(HIDE_RADIOBUTTON)
    });

    it('[RadioButton-73] verify that can disable dropdown', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_BUTTON_DISABLE_RADIOBUTTON)
            .verifyAlertText('false')
            .click(DISABLE_BUTTON_RADIOBUTTON)
            .click(GET_ISDISABLED_BUTTON_DISABLE_RADIOBUTTON)
            .verifyAlertText('true')
    });

    it('[RadioButton-75] verify that can enable dropdown', function () {
        Helper.ElementHandler
            .click(GET_ISDISABLED_BUTTON_ENABLE_RADIOBUTTON)
            .verifyAlertText('true')
            .click(ENABLE_BUTTON_RADIOBUTTON)
            .click(GET_ISDISABLED_BUTTON_ENABLE_RADIOBUTTON)
            .verifyAlertText('false')
    });

    it('[RadioButton-77] verify that can callback function radio button', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_FUNCTION_RADIOBUTTON + ":nth-child(2) label")
            .verifyAlertText('onCallBackFunctionRadioButton has been changed')
    });

    it('[RadioButton-78] verify that callback trigger radio button ', function () {
        Helper.ElementHandler
            .click(ON_CALLBACK_TRIGGER_RADIOBUTTON + ":nth-child(2) label")
            .verifyAlertText('onCallBackTriggerRadioButton has been changed')
    });
});