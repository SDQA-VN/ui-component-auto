const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_TABLE_HEADER = '.table-render .kuc-table-thead .kuc-table-th';
const XPATH_TABLE_ROW = '.table-render .kuc-table-tbody .kuc-table-tr';
const XPATH_TABLE_INSERT_BUTTON = '.table-render .kuc-table-tr:nth-child(1) .action-group .blue';
const XPATH_TABLE_DELETE_BUTTON = '.table-render .kuc-table-tr:nth-child(1) .action-group .gray';
const XPATH_TABLE_RADIO = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-input-radio';
const XPATH_TABLE_DROPDOWN = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-dropdown';
const XPATH_TABLE_NORMAL_BUTTON = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-btn';
const XPATH_TABLE_ICON_BUTTON = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-icon-btn';
const XPATH_TABLE_TEXTBOX = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-input-text';
const XPATH_TABLE_CHECKBOX = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-input-checkbox';
const XPATH_TABLE_MULTIPLE = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-multiple-list';
const XPATH_TABLE_LABEL = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-label';
const XPATH_TABLE_ALERT = '.table-render .kuc-table-tbody .kuc-table-tr:nth-child(2) .kuc-alert';
const XPATH_TABLE_RADIO_CHECKED = '.table-working .kuc-table-tbody .kuc-input-radio-item:nth-child(1)';
const XPATH_TABLE_RADIO_VALUE = '.table-working .kuc-table-tbody .kuc-input-radio-item:nth-child(1) :checked';
const XPATH_TABLE_DROPDOWN_CHECKED = '.table-working .kuc-table-tbody .kuc-list-outer .kuc-list-item:nth-child(1)';
const XPATH_TABLE_DROPDOWN_VALUE = '.table-working .kuc-table-tbody .kuc-dropdown-selected-name';
const XPATH_TABLE_DROPDOWN_OPEN = '.table-working .kuc-table-tbody .kuc-dropdown';
const XPATH_TABLE_BUTTON_CLICK = '.table-working .kuc-table-tbody .kuc-btn';
const XPATH_TABLE_TEXT_INPUT = '.table-working .kuc-input-text';
const XPATH_TABLE_CHECKBOX_CHECKED = '.table-working .kuc-input-checkbox-item:nth-child(1)';
const XPATH_TABLE_CHECKBOX_VALUE = '.table-working .kuc-input-checkbox-item:nth-child(1) :checked';
const XPATH_TABLE_MULTIPLE_CHECKED = '.table-working .kuc-multiple-list .kuc-list-item:nth-child(1)';
const XPATH_TABLE_LABEL_VALUE = '.table-working .kuc-label';
const XPATH_TABLE_ICON_VALUE = '.table-working .kuc-icon-btn';
const XPATH_TABLE_ALERT_VALUE = '.table-working .kuc-alert';
const XPATH_TABLE_GET_VALUE_CHECK_RADIO = '.table-getValue .kuc-table-tbody .kuc-input-radio-item:nth-child(2)';
const XPATH_TABLE_GET_VALUE_BUTTON = '.table-getValue .get-value';
const XPATH_TABLE_SET_VALUE_INSERT_ROW = '.table-setValue .kuc-table-tr:nth-child(1) .action-group .blue';
const XPATH_TABLE_SET_VALUE_BUTTON = '.table-setValue .set-value';
const XPATH_TABLE_SET_VALUE_GET_BUTTON = '.table-setValue .get-value';
const XPATH_TABLE_HIDE = '.table-hide .kuc-table';
const XPATH_TABLE_NON_DISPLAY_BUTTON = '.table-hide .hide-table';
const XPATH_TABLE_SHOW = '.table-show .kuc-table';
const XPATH_TABLE_DISPLAY_BUTTON = '.table-show .show-table';
const XPATH_TABLE_ON_CALL_RADIO_CHANGE = '.table-cellChange .kuc-table-tbody .kuc-input-radio-item:nth-child(2)';
const XPATH_TABLE_ON_CALL_DROPDOWN_CHANGE = '.table-cellChange .kuc-table-tbody .kuc-list-outer .kuc-list-item:nth-child(1)';
const XPATH_TABLE_ON_CALL_DROPDOWN_OPEN = '.table-cellChange .kuc-table-tbody .kuc-dropdown';
const XPATH_TABLE_ON_CALL_INPUT = '.table-cellChange .kuc-input-text';
const XPATH_TABLE_ON_CALL_CHECKBOX_CHANGE = '.table-cellChange .kuc-input-checkbox-item:nth-child(1)';
const XPATH_TABLE_ON_CALL_MULTIPLE_CHANGE = '.table-cellChange .kuc-multiple-list .kuc-list-item:nth-child(1)';
const XPATH_TABLE_ON_CALL_INSERT = '.table-cellChange .kuc-table-tr:nth-child(1) .action-group .kuc-icon-btn.small.blue.circle';
const XPATH_TABLE_ON_CALL_DELETE = '.table-cellChange .kuc-table-tr:nth-child(1) .action-group .kuc-icon-btn.small.hover-danger.gray.circle';
const XPATH_TABLE_1ST_EXIST = '.table-render .kuc-table';
const XPATH_TABLE_2ND_EXIST = '.table-working .kuc-table';

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Table-2] Verify that the Table have the  UI is the same as Table on kintone', function () {
        let tableHeaderColor = $(XPATH_TABLE_HEADER).getCssProperty('background-color');
        let tableInsertButton = browser.getAttribute(XPATH_TABLE_INSERT_BUTTON, 'class');
        $(XPATH_TABLE_INSERT_BUTTON).click();
        let tableDeleteButton = browser.getAttribute(XPATH_TABLE_DELETE_BUTTON, 'class');
        expect(tableHeaderColor.parsed.hex).to.equal('#3498db');
        expect(tableInsertButton).to.include('blue');
        expect(tableDeleteButton).to.include('gray');
        $(XPATH_TABLE_DELETE_BUTTON).click();
    });
    it('[Table-3] Verify that the default table will contain the header and sample row', function () {
        let tableHeaderExist = browser.isExisting(XPATH_TABLE_HEADER);
        let tableRowExist = browser.isExisting(XPATH_TABLE_ROW);
        expect(tableHeaderExist).to.equal(true);
        expect(tableRowExist).to.equal(true);
    });
    it('[Table-5] Verify that the sample row is added below the row contains clicked button when click on the insert button', function () {
        let rowLengthBefore = browser.elements(XPATH_TABLE_ROW).value.length;
        expect(rowLengthBefore).to.equal(1);
        $(XPATH_TABLE_INSERT_BUTTON).click();
        let rowLengthAfter = browser.elements(XPATH_TABLE_ROW).value.length;
        expect(rowLengthAfter).to.equal(2);
        $(XPATH_TABLE_DELETE_BUTTON).click();
    });
    it('[Table-6] Verify that the sample row which contains all component is added below the row contains clicked button when click on the insert button', function () {
        let rowLengthBefore = browser.elements(XPATH_TABLE_ROW).value.length;
        expect(rowLengthBefore).to.equal(1);
        $(XPATH_TABLE_INSERT_BUTTON).click();
        let rowLengthAfter = browser.elements(XPATH_TABLE_ROW).value.length;
        let radioExist = browser.isExisting(XPATH_TABLE_RADIO);
        let dropdownExist = browser.isExisting(XPATH_TABLE_DROPDOWN);
        let buttonExist = browser.isExisting(XPATH_TABLE_NORMAL_BUTTON);
        let iconExist = browser.isExisting(XPATH_TABLE_ICON_BUTTON);
        let textExist = browser.isExisting(XPATH_TABLE_TEXTBOX);
        let checkboxExist = browser.isExisting(XPATH_TABLE_CHECKBOX);
        let multipleExist = browser.isExisting(XPATH_TABLE_MULTIPLE);
        let labelExist = browser.isExisting(XPATH_TABLE_LABEL);
        let alertExist = browser.isExisting(XPATH_TABLE_ALERT);
        expect(radioExist).to.equal(true);
        expect(dropdownExist).to.equal(true);
        expect(buttonExist).to.equal(true);
        expect(iconExist).to.equal(true);
        expect(textExist).to.equal(true);
        expect(checkboxExist).to.equal(true);
        expect(multipleExist).to.equal(true);
        expect(labelExist).to.equal(true);
        expect(alertExist).to.equal(true);
        expect(rowLengthAfter).to.equal(2);
        $(XPATH_TABLE_DELETE_BUTTON).click();
    });
    it('[Table-22] Verify that the operation for all below child components in table are working as normally - Text', function () {
        $(XPATH_TABLE_TEXT_INPUT).setValue('Text input');
        let textInput = browser.getValue(XPATH_TABLE_TEXT_INPUT)
        expect(textInput).to.equal('Text input');
    });
    it('[Table-23] Verify that the operation for all below child components in table are working as normally - Dropdown', function () {
        $(XPATH_TABLE_DROPDOWN_OPEN).click();
        $(XPATH_TABLE_DROPDOWN_CHECKED).click();
        let itemsValue = browser.getText(XPATH_TABLE_DROPDOWN_VALUE)
        expect(itemsValue).to.equal('Red');
    });
    it('[Table-24] Verify that the operation for all below child components in table are working as normally - CheckBox', function () {
        $(XPATH_TABLE_CHECKBOX_CHECKED).click();
        let itemsValue = browser.isExisting(XPATH_TABLE_CHECKBOX_VALUE)
        expect(itemsValue).to.equal(true);
    });
    it('[Table-25] Verify that the operation for all below child components in table are working as normally - Multiple choice', function () {
        $(XPATH_TABLE_MULTIPLE_CHECKED).click();
        let itemsValue = browser.getAttribute(XPATH_TABLE_MULTIPLE_CHECKED, 'class')
        expect(itemsValue).to.include('kuc-list-item-selected');
    });
    it('[Table-26] Verify that the operation for all below child components in table are working as normally - Radio Button', function () {
        $(XPATH_TABLE_RADIO_CHECKED).click();
        let itemsValue = browser.isExisting(XPATH_TABLE_RADIO_VALUE)
        expect(itemsValue).to.equal(true);
    });
    it('[Table-27] Verify that the operation for all below child components in table are working as normally - Button', function () {
        $(XPATH_TABLE_BUTTON_CLICK).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Component clicked');
        browser.alertAccept()
    });
    it('[Table-28] Verify that the operation for all below child components in table are working as normally - Label', function () {
        let itemsValue = browser.getText(XPATH_TABLE_LABEL_VALUE);
        expect(itemsValue).to.equal('label');
    });
    it('[Table-29] Verify that the operation for all below child components in table are working as normally - IconButton', function () {
        let itemsValue = browser.isExisting(XPATH_TABLE_ICON_VALUE);
        expect(itemsValue).to.equal(true);
    });
    it('[Table-30] Verify that the operation for all below child components in table are working as normally - Alert', function () {
        let itemsValue = browser.getText(XPATH_TABLE_ALERT_VALUE);
        let itemsExist = browser.isExisting(XPATH_TABLE_ALERT_VALUE);
        expect(itemsValue).to.equal('Alert');
        expect(itemsExist).to.equal(true);
    });
    it('[Table-31] Verify that can add 2 tables into 1 form', function () {
        let table1stExist = browser.isExisting(XPATH_TABLE_1ST_EXIST);
        let table2ndExist = browser.isExisting(XPATH_TABLE_2ND_EXIST);
        expect(table1stExist).to.equal(true);
        expect(table2ndExist).to.equal(true);
    });
    it('[Table-33] Verify that the Table object contains the the below attibutes', function () {
        let header = browser.isExisting(XPATH_TABLE_HEADER);
        let headerTemplate1st = browser.getText(XPATH_TABLE_HEADER)[0];
        let headerTemplate2nd = browser.getText(XPATH_TABLE_HEADER)[1];
        let headerTemplate3th = browser.getText(XPATH_TABLE_HEADER)[2];
        let headerTemplate4th = browser.getText(XPATH_TABLE_HEADER)[3];
        let headerTemplate5th = browser.getText(XPATH_TABLE_HEADER)[4];
        let headerTemplate6th = browser.getText(XPATH_TABLE_HEADER)[5];
        let headerTemplate7th = browser.getText(XPATH_TABLE_HEADER)[6];
        let headerTemplate8th = browser.getText(XPATH_TABLE_HEADER)[7];
        let headerTemplate9th = browser.getText(XPATH_TABLE_HEADER)[8];
        expect(headerTemplate1st).to.equal('Radio');
        expect(headerTemplate2nd).to.equal('Dropdown');
        expect(headerTemplate3th).to.equal('Button');
        expect(headerTemplate4th).to.equal('Icon');
        expect(headerTemplate5th).to.equal('Text');
        expect(headerTemplate6th).to.equal('CheckBox');
        expect(headerTemplate7th).to.equal('MultipleChoice');
        expect(headerTemplate8th).to.equal('Label');
        expect(headerTemplate9th).to.equal('Alert');
        expect(header).to.equal(true);
    });
    it('[Table-41] Verify that can get value of all rows in the table', function () {
        $(XPATH_TABLE_GET_VALUE_CHECK_RADIO).click();
        $(XPATH_TABLE_GET_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('["banana","green","text",["orange"],["orange"]]');
        browser.alertAccept();
    });
    it('[Table-50] Verify that can get value of Text in the table', function () {
        let XPATH_TABLE_GET_TEXT_VALUE_BUTTON = ".table-getValue .get-value-text"
        $(XPATH_TABLE_GET_TEXT_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('"text"');
        browser.alertAccept();
    });
    it('[Table-51] Verify that can get value of Dropdown in the table', function () {
        let XPATH_TABLE_GET_DROPDOWN_VALUE_BUTTON = ".table-getValue .get-value-dropdown"
        $(XPATH_TABLE_GET_DROPDOWN_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('"green"');
        browser.alertAccept();
    });
    it('[Table-52] Verify that can get value of Checkbox in the table', function () {
        let XPATH_TABLE_GET_CHECKBOX_VALUE_BUTTON = ".table-getValue .get-value-checkbox"
        $(XPATH_TABLE_GET_CHECKBOX_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('["orange"]');
        browser.alertAccept();
    });
    it('[Table-53] Verify that can get value of Multiple Choice in the table', function () {
        let XPATH_TABLE_GET_MULTI_CHOICE_VALUE_BUTTON = ".table-getValue .get-value-multipleChoice"
        $(XPATH_TABLE_GET_MULTI_CHOICE_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('["orange"]');
        browser.alertAccept();
    });
    it('[Table-54] Verify that can get value of Radio Button in the table', function () {
        let XPATH_TABLE_GET_RADIO_VALUE_BUTTON = ".table-getValue .get-value-radio"
        $(XPATH_TABLE_GET_RADIO_VALUE_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('"banana"');
        browser.alertAccept();
    });
    it('[Table-55] Verify that can set value for multiple rows in table', function () {
        $(XPATH_TABLE_SET_VALUE_INSERT_ROW).click();
        $(XPATH_TABLE_SET_VALUE_BUTTON).click();
        $(XPATH_TABLE_SET_VALUE_GET_BUTTON).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('["banana","green","text",["banana"],["banana"]]["banana","green","text",["banana"],["banana"]]');
        browser.alertAccept();
    });
    it('[Table-59] Verify that can show invisible Table on UI', function () {
        let tableVisibleBefore = browser.isVisible(XPATH_TABLE_SHOW)
        expect(tableVisibleBefore).to.equal(false);
        $(XPATH_TABLE_DISPLAY_BUTTON).click();
        let tableVisibleAfter = browser.isVisible(XPATH_TABLE_SHOW)
        expect(tableVisibleAfter).to.equal(true);
    });
    it('[Table-61] Verify that can hide the visible Table on UI', function () {
        let tableVisibleBefore = browser.isVisible(XPATH_TABLE_HIDE)
        expect(tableVisibleBefore).to.equal(true);
        $(XPATH_TABLE_NON_DISPLAY_BUTTON).click();
        let tableVisibleAfter = browser.isVisible(XPATH_TABLE_HIDE)
        expect(tableVisibleAfter).to.equal(false);
    });
    it('[Table-63] Verify that the callback function will be triggered after adding a new row to table', function () {
        $(XPATH_TABLE_ON_CALL_INSERT).click();
        let rows = browser.elements(".table-cellChange .kuc-table-tbody .kuc-table-tr").value.length
        expect(rows).to.equal(2);
        $(XPATH_TABLE_ON_CALL_DELETE).click();
    });
    it('[Table-64] Verify that the callback function will be triggered after removing row from table', function () {
        $(XPATH_TABLE_ON_CALL_INSERT).click();
        let rowsBefore = browser.elements(".table-cellChange .kuc-table-tbody .kuc-table-tr").value.length
        expect(rowsBefore).to.equal(2);
        $(XPATH_TABLE_ON_CALL_DELETE).click();
        let rowsAfter = browser.elements(".table-cellChange .kuc-table-tbody .kuc-table-tr").value.length
        expect(rowsAfter).to.equal(1);
    });
    it('[Table-65-Radio] Verify that the callback function will be triggered when changing the value', function () {
        $(XPATH_TABLE_ON_CALL_RADIO_CHANGE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('data select: "banana"');
        browser.alertAccept();
    });
    it('[Table-65-Dropdown] Verify that the callback function will be triggered when changing the value', function () {
        $(XPATH_TABLE_ON_CALL_DROPDOWN_OPEN).click();
        $(XPATH_TABLE_ON_CALL_DROPDOWN_CHANGE).click();
        let alertText = browser.alertText()
        expect(alertText).to.equal('data select: "red"');
        browser.alertAccept();
    });
    it('[Table-65-Textbox] Verify that the callback function will be triggered when changing the value', function () {
        $(XPATH_TABLE_ON_CALL_INPUT).setValue("t")
        let alertText = browser.alertText();
        expect(alertText).to.equal('data select: "t"');
        browser.alertAccept();
    });
    it('[Table-65-Checkbox] Verify that the callback function will be triggered when changing the value', function () {
        $(XPATH_TABLE_ON_CALL_CHECKBOX_CHANGE).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('data select: ["orange"]');
        browser.alertAccept();
    });
    it('[Table-65-Multiple] Verify that the callback function will be triggered when changing the value', function () {
        $(XPATH_TABLE_ON_CALL_MULTIPLE_CHANGE).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('data select: ["orange"]');
        browser.alertAccept();
    });
});