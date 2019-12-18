const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../utils/common');
const expect = require('chai').expect;

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
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Table-3-11->19] should verify that default table will contain header and sample row, verify that all below components can be add to table as child component', function () {
        let tableHeaderColor = $(HEADER_CONSTRUCTOR_TABLE).getCssProperty('background-color');  
        expect(tableHeaderColor.parsed.hex).to.equal('#3498db');
        let tableHeaderExist = browser.isExisting(HEADER_CONSTRUCTOR_TABLE);
        let tableRowExist = browser.isExisting(ROW_CONSTRUCTOR_TABLE);
        expect(tableHeaderExist).to.equal(true);
        expect(tableRowExist).to.equal(true);

        let checkText = browser.isExisting(TEXT_CONSTRUCTOR_TABLE);
        let checkRadio = browser.isExisting(RADIO_CONSTRUCTOR_TABLE);
        let checkMultipleChoice = browser.isExisting(MULTIPLE_CHOICE_CONSTRUCTOR_TABLE);
        let checkCheckbox = browser.isExisting(CHECKBOX_CONSTRUCTOR_TABLE);
        let checkDropdown = browser.isExisting(DROPDOWN_CONSTRUCTOR_TABLE);
        let checkLabel = browser.isExisting(LABEL_CONSTRUCTOR_TABLE);
        let checkIconbtn = browser.isExisting(ICON_BUTTON_CONSTRUCTOR_TABLE);
        let checkAlert = browser.isExisting(ALERT_CONSTRUCTOR_TABLE);
        expect(checkText).to.equal(true);
        expect(checkRadio).to.equal(true);
        expect(checkMultipleChoice).to.equal(true);
        expect(checkCheckbox).to.equal(true);
        expect(checkDropdown).to.equal(true);
        expect(checkLabel).to.equal(true);
        expect(checkIconbtn).to.equal(true);
        expect(checkAlert).to.equal(true);
    });

    it('[Table-2-5-6] should verify that the Table have the  UI is the same as Table on kintone, verify sample row is add below the row contains and verify the added row contain all components when click on insert button', function () {
        let rowCount = browser.elements(ROW_CONSTRUCTOR_TABLE).value.length;
        let addedRow = browser.isExisting(ADDED_ROW_CONSTRUCTOR_TABLE);
        expect(addedRow).to.equal(false);
        expect(rowCount).to.equal(1);
        $(INSERT_BUTTON_CONSTRUCTOR_TABLE).click();
        addedRow = browser.isExisting(ROW_CONSTRUCTOR_TABLE);
        rowCount = browser.elements(ROW_CONSTRUCTOR_TABLE).value.length;
        expect(addedRow).to.equal(true);
        expect(rowCount).to.equal(2);

        let tableHeaderColor = $(HEADER_CONSTRUCTOR_TABLE).getCssProperty('background-color');  
        expect(tableHeaderColor.parsed.hex).to.equal('#3498db');
        let tableHeaderExist = browser.isExisting(HEADER_CONSTRUCTOR_TABLE);
        let tableRowExist = browser.isExisting(ROW_CONSTRUCTOR_TABLE);
        expect(tableHeaderExist).to.equal(true);
        expect(tableRowExist).to.equal(true);

        let tableInsertButton = browser.getAttribute(INSERT_BUTTON_CONSTRUCTOR_TABLE, 'class');
        let tableRemoveButton = browser.getAttribute(REMOVE_BUTTON_CONSTRUCTOR_TABLE, 'class');
        expect(tableInsertButton).to.include('blue');
        expect(tableRemoveButton).to.include('gray');

        let checkText = browser.isExisting(ADDED_ROW_TEXT_CONSTRUCTOR_TABLE);
        let checkRadio = browser.isExisting(ADDED_ROW_RADIO_CONSTRUCTOR_TABLE);
        let checkMultipleChoice = browser.isExisting(ADDED_ROW_MULTIPLE_CHOICE_CONSTRUCTOR_TABLE);
        let checkCheckbox = browser.isExisting(ADDED_ROW_CHECKBOX_CONSTRUCTOR_TABLE);
        let checkDropdown = browser.isExisting(ADDED_ROW_DROPDOWN_CONSTRUTCTOR_TABLE);
        let checkLabel = browser.isExisting(ADDED_ROW_LABEL_CONSTRUCTOR_TABLE);
        let checkIconbtn = browser.isExisting(ADDED_ROW_ICON_BUTTON_CONSTRUCTOR_TABLE);
        let checkAlert = browser.isExisting(ADDED_ROW_ALERT_CONSTRUCTOR_TABLE);
        expect(checkText).to.equal(true);
        expect(checkRadio).to.equal(true);
        expect(checkMultipleChoice).to.equal(true);
        expect(checkCheckbox).to.equal(true);
        expect(checkDropdown).to.equal(true);
        expect(checkLabel).to.equal(true);
        expect(checkIconbtn).to.equal(true);
        expect(checkAlert).to.equal(true);
    });

    it('[Table-22->26] should verify the operation for all below child components in table are working as normally', function () {
        $(TEXT_CONSTRUCTOR_TABLE).setValue('Check operation of Text');
        let checkText = browser.getValue(TEXT_CONSTRUCTOR_TABLE);
        expect(checkText).to.equal('Check operation of Text');

        $(RADIO_VALUE_CONSTRUCTOR_TABLE).click();
        let checkRadio = browser.isExisting(RADIO_VALUE_CONSTRUCTOR_TABLE + ' input[type=radio]:checked');
        expect(checkRadio).to.equal(true);

        $(MULTIPLE_CHOICE_VALUE_CONSTRUCTOR_TABLE).click();
        let checkMultipleChoice = browser.isExisting(MULTIPLE_CHOICE_VALUE_CONSTRUCTOR_TABLE + '.kuc-list-item-selected');
        expect(checkMultipleChoice).to.equal(true);

        $(CHECKBOX_VALUE_CONSTRUCTOR_TABLE).click();
        let checkCheckbox = browser.isExisting(CHECKBOX_VALUE_CONSTRUCTOR_TABLE + ' input[type=checkbox]:checked')
        expect(checkCheckbox).to.equal(true);

        $(DROPDOWN_CONSTRUCTOR_TABLE + "//div[@class='kuc-dropdown-selected']").click();  
        browser.moveToObject(DROPDOWN_CONSTRUCTOR_VALUE_TABLE);
      
        let checkHover = browser.isExisting('.kuc-list-item:hover');
        let checkColor = $(DROPDOWN_CONSTRUCTOR_VALUE_TABLE).getCssProperty('background-color');
        expect(checkHover).to.equal(true);
        expect(checkColor.parsed.hex).to.equal('#e2f2fe');
        $(DROPDOWN_CONSTRUCTOR_VALUE_TABLE).click();
        let isSelect= browser.isExisting(".kuc-list-item-selected");
        expect(isSelect).to.equal(true);
    });

    it('[Table-31] should verify that can add 2 tables into 1 form', function () {
        let constructorTable = browser.isExisting(CONSTRUCTOR_TABLE);
        let workingTable = browser.isExisting(WORKING_TABLE);
        expect(constructorTable).to.equal(true);
        expect(workingTable).to.equal(true);
    });

    it('[Table-43] should verify that can get value of all rows in table', function () {
        $(GET_VALUE_ALL_TABLE).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('text field, Banana, [red], [potato,celery], cars');
        browser.alertAccept();
    });

    it('[Table-46] should verify that return the same value in the current table', function () {
        $(GET_VALUE_TEXT_TABLE).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('text field');
        browser.alertAccept();
        $(GET_VALUE_RADIO_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('Banana');
        browser.alertAccept();
        $(GET_VALUE_MULTIPLE_CHOICE_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('red');
        browser.alertAccept();
        $(GET_VALUE_CHECKBOX_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('potato,celery');
        browser.alertAccept();
        $(GET_VALUE_DROPDOWN_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cars');
        browser.alertAccept();
    });

    it('[Table-53->57] should verify that can set value for the below components in table', function () {
        $(SET_VALUE_ALL_BUTTON_TABLE).click();
        let checkText = $(SET_VALUE_TEXT_TABLE).getValue();
        expect(checkText).to.equal('first row');
        let checkRadio = browser.isExisting(SET_VALUE_RADIO_TABLE + ' input[type=radio]:checked');
        expect(checkRadio).to.equal(true);
        let checkMultipleChoice = browser.isExisting(SET_VALUE_MULTIPLE_CHOICE_TABLE + '.kuc-list-item-selected');
        expect(checkMultipleChoice).to.equal(true);
        let checkCheckbox = browser.isExisting(SET_VALUE_CHECKBOX_TABLE + ' input[type=checkbox]:checked');
        expect (checkCheckbox).to.equal(true);
        let checkDropdown = $(SET_VALUE_DROPDOWN_TABLE).getText();
        expect(checkDropdown).to.equal('Robots');
     });

    it('[Table-67-68-69-84-91] should verify that callback when rowAdd, rowRemove and cellChange', function () {
        $(INSERT_BUTTON_CALLBACK_TABLE).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('rowAdd is callback');
        browser.alertAccept();
        $(REMOVE_BUTTON_CALLBACK_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('rowRemove is callback');
        browser.alertAccept();   
        $(SET_VALUE_TEXT_BUTTON_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cellChange is callback');
        browser.alertAccept();
        $(SET_VALUE_RADIO_BUTTON_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cellChange is callback');
        browser.alertAccept();
        $(SET_VALUE_MULTIPLE_CHOICE_BUTTON_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cellChange is callback');
        browser.alertAccept();
        $(SET_VALUE_CHECKBOX_BUTTON_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cellChange is callback');
        browser.alertAccept();
        $(SET_VALUE_DROPDOWN_BUTTON_TABLE).click();
        alertText = browser.alertText()
        expect(alertText).to.equal('cellChange is callback');
        browser.alertAccept();
    });
});