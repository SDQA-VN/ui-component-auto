const Helper = require('../../helper/main.js')

const CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table']";
const WORKING_TABLE = "//div[@id='get-value-table']//div[@class='kuc-table']";

const HEADER_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-thead']//div[@class='kuc-table-th']";
const ROW_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']";
const INSERT_BUTTON_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][1]//div[@id='0_action']//span[1]//button";
const REMOVE_BUTTON_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][1]//div[@id='0_action']//span[2]//button";
const ADDED_ROW_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@id='1']";
const TEXT_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][1]//div[@class='kuc-table-td'][1]//input[@class='kuc-input-text'][1]";
const RADIO_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-input-radio']";
const RADIO_VALUE_CONSTRUCTOR_TABLE = "#constructor-table .kuc-table-tbody .kuc-input-radio .kuc-input-radio-item:nth-child(1)"
const MULTIPLE_CHOICE_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-multiple-list kuc-list-outer']";
const MULTIPLE_CHOICE_VALUE_CONSTRUCTOR_TABLE = "#constructor-table .kuc-table-tbody .kuc-multiple-list.kuc-list-outer .kuc-list-item:nth-child(1)";
const CHECKBOX_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-input-checkbox']";
const CHECKBOX_VALUE_CONSTRUCTOR_TABLE = "#constructor-table .kuc-table-tbody .kuc-input-checkbox .kuc-input-checkbox-item:nth-child(1)";
const DROPDOWN_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-dropdown-outer']//div[@class='kuc-dropdown']";
const DROPDOWN_CONSTRUCTOR_VALUE_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-list-outer']/div[@class='kuc-list-item kuc-list-item-selected']";
const LABEL_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-label']";
const ICON_BUTTON_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//button[@class='kuc-icon-btn small  blue circle']";
const ALERT_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr']//div[@class='kuc-table-td']//div[@class='kuc-alert bg-danger']";

const ADDED_ROW_TEXT_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td'][1]//input[@class='kuc-input-text'][1]";
const ADDED_ROW_RADIO_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-input-radio']";
const ADDED_ROW_MULTIPLE_CHOICE_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-multiple-list kuc-list-outer']";
const ADDED_ROW_CHECKBOX_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-input-checkbox']";
const ADDED_ROW_DROPDOWN_CONSTRUTCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-dropdown-outer']//div[@class='kuc-dropdown']";
const ADDED_ROW_LABEL_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-label']";
const ADDED_ROW_ICON_BUTTON_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//button[@class='kuc-icon-btn small  blue circle']";
const ADDED_ROW_ALERT_CONSTRUCTOR_TABLE = "//div[@id='constructor-table']//div[@class='kuc-table-tbody']//div[@class='kuc-table-tr'][2]//div[@class='kuc-table-td']//div[@class='kuc-alert bg-danger']";

const GET_VALUE_TEXT_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get Value Text Table')]";
const GET_VALUE_RADIO_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get Value Radio Table')]";
const GET_VALUE_MULTIPLE_CHOICE_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get Value Multiple Choice Table')]";
const GET_VALUE_CHECKBOX_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get Value Checkbox Table')]";
const GET_VALUE_DROPDOWN_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get Value Dropdown Table')]";
const GET_VALUE_ALL_TABLE = "//div[@id='get-value-table']//button[contains(text(),'Get All Value Table')]";

const SET_VALUE_TEXT_TABLE = "//div[@id='set-value-table']//div[@class='kuc-table-tbody']//div[@id='0']//input[@class='kuc-input-text']";
const SET_VALUE_RADIO_TABLE = "#set-value-table .kuc-table-tbody .kuc-input-radio .kuc-input-radio-item:nth-child(1)";
const SET_VALUE_MULTIPLE_CHOICE_TABLE = "#set-value-table .kuc-table-tbody .kuc-multiple-list.kuc-list-outer .kuc-list-item:nth-child(1)";
const SET_VALUE_CHECKBOX_TABLE = "#set-value-table .kuc-table-tbody .kuc-input-checkbox .kuc-input-checkbox-item:nth-child(1)";
const SET_VALUE_DROPDOWN_TABLE = "//div[@id='set-value-table']//div[@class='kuc-dropdown']//span[@class='kuc-dropdown-selected-name']";
const SET_VALUE_ALL_BUTTON_TABLE = "//div[@id='set-value-table']//button[contains(text(),'Set All Value Table')]";

const INSERT_BUTTON_CALLBACK_TABLE = "//div[@id='callback-table']//div[@class='kuc-table-tbody']//div[@id='0']//div[@class='kuc-table-td action-group']//button[@class='kuc-icon-btn small  blue circle']";
const REMOVE_BUTTON_CALLBACK_TABLE = "//div[@id='callback-table']//div[@class='kuc-table-tbody']//div[@id='0']//div[@class='kuc-table-td action-group']//button[@class='kuc-icon-btn small hover-danger gray circle']";
const SET_VALUE_TEXT_BUTTON_TABLE = "//div[@id='callback-table']//button[contains(text(),'Set Value Text Table')]";
const SET_VALUE_RADIO_BUTTON_TABLE = "//div[@id='callback-table']//button[contains(text(),'Set Value Radio Table')]";
const SET_VALUE_MULTIPLE_CHOICE_BUTTON_TABLE = "//div[@id='callback-table']//button[contains(text(),'Set Value Multiple Choice Table')]";
const SET_VALUE_CHECKBOX_BUTTON_TABLE = "//div[@id='callback-table']//button[contains(text(),'Set Value Checkbox Table')]";
const SET_VALUE_DROPDOWN_BUTTON_TABLE = "//div[@id='callback-table']//button[contains(text(),'Set Value Dropdown Table')]";

describe('kintoneUIComponent - Table', function () {
    it('[Table-3-11->19] should verify that default table will contain header and sample row, verify that all below components can be add to table as child component', function () {
        Helper.ElementHandler
            .verifyElementColor(HEADER_CONSTRUCTOR_TABLE, 'background-color', '#3498db')
            .verifyElementDisplayed(HEADER_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ROW_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(TEXT_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(RADIO_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(MULTIPLE_CHOICE_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(CHECKBOX_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(DROPDOWN_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(LABEL_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ICON_BUTTON_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ALERT_CONSTRUCTOR_TABLE)
    });

    it('[Table-2-5-6] should verify that the Table have the  UI is the same as Table on kintone, verify sample row is add below the row contains and verify the added row contain all components when click on insert button', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(ROW_CONSTRUCTOR_TABLE, 1)
            .verifyElementNotDisplayed(ADDED_ROW_CONSTRUCTOR_TABLE)
            .click(INSERT_BUTTON_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ROW_CONSTRUCTOR_TABLE)
            .verifyNumberOfElements(ROW_CONSTRUCTOR_TABLE, 2)

            .verifyElementColor(HEADER_CONSTRUCTOR_TABLE, 'background-color', '#3498db')
            .verifyElementDisplayed(HEADER_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ROW_CONSTRUCTOR_TABLE)

            .verifyAttribute(INSERT_BUTTON_CONSTRUCTOR_TABLE, 'class', 'blue')
            .verifyAttribute(REMOVE_BUTTON_CONSTRUCTOR_TABLE, 'class', 'gray')

            .verifyElementDisplayed(ADDED_ROW_TEXT_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_RADIO_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_MULTIPLE_CHOICE_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_CHECKBOX_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_DROPDOWN_CONSTRUTCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_LABEL_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_ICON_BUTTON_CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(ADDED_ROW_ALERT_CONSTRUCTOR_TABLE)
    });

    it('[Table-22->26] should verify the operation for all below child components in table are working as normally', function () {
        Helper.ElementHandler
            .setValue(TEXT_CONSTRUCTOR_TABLE, 'Check operation of Text')
            .verifyValue(TEXT_CONSTRUCTOR_TABLE, 'Check operation of Text')

            .click(RADIO_VALUE_CONSTRUCTOR_TABLE)
            .verifyElementExisting(RADIO_VALUE_CONSTRUCTOR_TABLE + ' input[type=radio]:checked')

            .click(MULTIPLE_CHOICE_VALUE_CONSTRUCTOR_TABLE)
            .verifyElementExisting(MULTIPLE_CHOICE_VALUE_CONSTRUCTOR_TABLE + '.kuc-list-item-selected')

            .click(CHECKBOX_VALUE_CONSTRUCTOR_TABLE)
            .verifyElementExisting(CHECKBOX_VALUE_CONSTRUCTOR_TABLE + ' input[type=checkbox]:checked')

            .click(DROPDOWN_CONSTRUCTOR_TABLE + "//div[@class='kuc-dropdown-selected']")
            .moveToObject(DROPDOWN_CONSTRUCTOR_VALUE_TABLE)
            .verifyElementExisting('.kuc-list-item:hover')
            .verifyElementColor(DROPDOWN_CONSTRUCTOR_VALUE_TABLE, 'background-color', '#e2f2fe')
            .click(DROPDOWN_CONSTRUCTOR_VALUE_TABLE)
            .verifyElementExisting('.kuc-list-item-selected')
    });

    it('[Table-31] should verify that can add 2 tables into 1 form', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(CONSTRUCTOR_TABLE)
            .verifyElementDisplayed(WORKING_TABLE)
    });

    it('[Table-43] should verify that can get value of all rows in table', function () {
        Helper.ElementHandler
            .click(GET_VALUE_ALL_TABLE)
            .verifyAlertText('text field, Banana, [red], [potato,celery], cars')
    });

    it('[Table-46] should verify that return the same value in the current table', function () {
        Helper.ElementHandler
            .click(GET_VALUE_TEXT_TABLE)
            .verifyAlertText('text field')

            .click(GET_VALUE_RADIO_TABLE)
            .verifyAlertText('Banana')

            .click(GET_VALUE_MULTIPLE_CHOICE_TABLE)
            .verifyAlertText('red')

            .click(GET_VALUE_CHECKBOX_TABLE)
            .verifyAlertText('potato,celery')

            .click(GET_VALUE_DROPDOWN_TABLE)
            .verifyAlertText('cars')
    });

    it('[Table-53->57] should verify that can set value for the below components in table', function () {
        Helper.ElementHandler
            .click(SET_VALUE_ALL_BUTTON_TABLE)
            .verifyValue(SET_VALUE_TEXT_TABLE, 'first row')
            .verifyElementExisting(SET_VALUE_RADIO_TABLE + ' input[type=radio]:checked')
            .verifyElementExisting(SET_VALUE_MULTIPLE_CHOICE_TABLE + '.kuc-list-item-selected')
            .verifyText(SET_VALUE_DROPDOWN_TABLE, 'Robots')
    });

    it('[Table-67-68-69-84-91] should verify that callback when rowAdd, rowRemove and cellChange', function () {
        Helper.ElementHandler
            .click(INSERT_BUTTON_CALLBACK_TABLE)
            .verifyAlertText('rowAdd is callback')

            .click(REMOVE_BUTTON_CALLBACK_TABLE)
            .verifyAlertText('rowRemove is callback')

            .click(SET_VALUE_TEXT_BUTTON_TABLE)
            .verifyAlertText('cellChange is callback')

            .click(SET_VALUE_RADIO_BUTTON_TABLE)
            .verifyAlertText('cellChange is callback')

            .click(SET_VALUE_MULTIPLE_CHOICE_BUTTON_TABLE)
            .verifyAlertText('cellChange is callback')

            .click(SET_VALUE_CHECKBOX_BUTTON_TABLE)
            .verifyAlertText('cellChange is callback')

            .click(SET_VALUE_DROPDOWN_BUTTON_TABLE)
            .verifyAlertText('cellChange is callback')
    });
});