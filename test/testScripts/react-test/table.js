const $ = require('../../utils/ReturnElement').singleElement;
const common = require('../../utils/common');
const expect = require('chai').expect;
const Helper = require('../../helper/main.js')

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
const XPATH_TABLE_ON_CELL_ROW = ".table-cellChange .kuc-table-tbody .kuc-table-tr"


describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Table-2] Verify that the Table have the  UI is the same as Table on kintone', function () {
        Helper.ElementHandler
            .verifyElementColor(XPATH_TABLE_HEADER, 'background-color', '#3498db')
            .verifyAttribute(XPATH_TABLE_INSERT_BUTTON, 'class', 'blue')
            .click(XPATH_TABLE_INSERT_BUTTON)
            .verifyAttribute(XPATH_TABLE_DELETE_BUTTON, 'class', 'gray')
            .click(XPATH_TABLE_DELETE_BUTTON)
    });
    it('[Table-3] Verify that the default table will contain the header and sample row', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_TABLE_HEADER)
            .verifyElementVisible(XPATH_TABLE_ROW)
    });
    it('[Table-5] Verify that the sample row is added below the row contains clicked button when click on the insert button', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(XPATH_TABLE_ROW, 1)
            .click(XPATH_TABLE_INSERT_BUTTON)
            .verifyNumberOfElements(XPATH_TABLE_ROW, 2)
            .click(XPATH_TABLE_DELETE_BUTTON)
    });
    it('[Table-6] Verify that the sample row which contains all component is added below the row contains clicked button when click on the insert button', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(XPATH_TABLE_ROW, 1)
            .click(XPATH_TABLE_INSERT_BUTTON)
            .verifyNumberOfElements(XPATH_TABLE_ROW, 2)
            .verifyElementVisible(XPATH_TABLE_RADIO)
            .verifyElementVisible(XPATH_TABLE_DROPDOWN)
            .verifyElementVisible(XPATH_TABLE_NORMAL_BUTTON)
            .verifyElementVisible(XPATH_TABLE_ICON_BUTTON)
            .verifyElementVisible(XPATH_TABLE_TEXTBOX)
            .verifyElementVisible(XPATH_TABLE_CHECKBOX)
            .verifyElementVisible(XPATH_TABLE_MULTIPLE)
            .verifyElementVisible(XPATH_TABLE_LABEL)
            .verifyElementVisible(XPATH_TABLE_ALERT)
            .click(XPATH_TABLE_DELETE_BUTTON)
    });
    it('[Table-22] Verify that the operation for all below child components in table are working as normally - Text', function () {
        Helper.ElementHandler
            .setValue(XPATH_TABLE_TEXT_INPUT, 'Text input')
            .verifyValue(XPATH_TABLE_TEXT_INPUT, 'Text input')
    });
    it('[Table-23] Verify that the operation for all below child components in table are working as normally - Dropdown', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_DROPDOWN_OPEN)
            .click(XPATH_TABLE_DROPDOWN_CHECKED)
            .verifyText(XPATH_TABLE_DROPDOWN_VALUE, 'Red')
    });
    it('[Table-24] Verify that the operation for all below child components in table are working as normally - CheckBox', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_CHECKBOX_CHECKED)
            .verifyElementExisting(XPATH_TABLE_CHECKBOX_VALUE)
    });
    it('[Table-25] Verify that the operation for all below child components in table are working as normally - Multiple choice', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_MULTIPLE_CHECKED)
            .verifyAttribute(XPATH_TABLE_MULTIPLE_CHECKED, 'class', 'kuc-list-item-selected')
    });
    it('[Table-26] Verify that the operation for all below child components in table are working as normally - Radio Button', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_RADIO_CHECKED)
            .verifyElementExisting(XPATH_TABLE_RADIO_VALUE)
    });
    it('[Table-27] Verify that the operation for all below child components in table are working as normally - Button', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_BUTTON_CLICK)
            .verifyAlertText('Component clicked')
    });
    it('[Table-28] Verify that the operation for all below child components in table are working as normally - Label', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_TABLE_LABEL_VALUE)
            .verifyText(XPATH_TABLE_LABEL_VALUE, 'label')
    });
    it('[Table-29] Verify that the operation for all below child components in table are working as normally - IconButton', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_TABLE_ICON_VALUE)
    });
    it('[Table-30] Verify that the operation for all below child components in table are working as normally - Alert', function () {
        Helper.ElementHandler
            .verifyText(XPATH_TABLE_ALERT_VALUE, 'Alert')
            .verifyElementVisible(XPATH_TABLE_ALERT_VALUE)
    });
    it('[Table-31] Verify that can add 2 tables into 1 form', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_TABLE_1ST_EXIST)
            .verifyElementVisible(XPATH_TABLE_2ND_EXIST)
    });
    // it('[Table-33] Verify that the Table object contains the the below attibutes', function () {
    //     let header = browser.isExisting(XPATH_TABLE_HEADER);
    //     let headerTemplate1st = browser.getText(XPATH_TABLE_HEADER)[0];
    //     let headerTemplate2nd = browser.getText(XPATH_TABLE_HEADER)[1];
    //     let headerTemplate3th = browser.getText(XPATH_TABLE_HEADER)[2];
    //     let headerTemplate4th = browser.getText(XPATH_TABLE_HEADER)[3];
    //     let headerTemplate5th = browser.getText(XPATH_TABLE_HEADER)[4];
    //     let headerTemplate6th = browser.getText(XPATH_TABLE_HEADER)[5];
    //     let headerTemplate7th = browser.getText(XPATH_TABLE_HEADER)[6];
    //     let headerTemplate8th = browser.getText(XPATH_TABLE_HEADER)[7];
    //     let headerTemplate9th = browser.getText(XPATH_TABLE_HEADER)[8];
    //     expect(headerTemplate1st).to.equal('Radio');
    //     expect(headerTemplate2nd).to.equal('Dropdown');
    //     expect(headerTemplate3th).to.equal('Button');
    //     expect(headerTemplate4th).to.equal('Icon');
    //     expect(headerTemplate5th).to.equal('Text');
    //     expect(headerTemplate6th).to.equal('CheckBox');
    //     expect(headerTemplate7th).to.equal('MultipleChoice');
    //     expect(headerTemplate8th).to.equal('Label');
    //     expect(headerTemplate9th).to.equal('Alert');
    //     expect(header).to.equal(true);
    // });
    it('[Table-41] Verify that can get value of all rows in the table', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_VALUE_CHECK_RADIO)
            .click(XPATH_TABLE_GET_VALUE_BUTTON)
            .verifyAlertText('["banana","green","text",["orange"],["orange"]]')
    });
    it('[Table-50] Verify that can get value of Text in the table', function () {
        let XPATH_TABLE_GET_TEXT_VALUE_BUTTON = ".table-getValue .get-value-text"
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_TEXT_VALUE_BUTTON)
            .verifyAlertText('"text"')
    });
    it('[Table-51] Verify that can get value of Dropdown in the table', function () {
        let XPATH_TABLE_GET_DROPDOWN_VALUE_BUTTON = ".table-getValue .get-value-dropdown"
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_DROPDOWN_VALUE_BUTTON)
            .verifyAlertText('"green"')
    });
    it('[Table-52] Verify that can get value of Checkbox in the table', function () {
        let XPATH_TABLE_GET_CHECKBOX_VALUE_BUTTON = ".table-getValue .get-value-checkbox"
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_CHECKBOX_VALUE_BUTTON)
            .verifyAlertText('["orange"]')
    });
    it('[Table-53] Verify that can get value of Multiple Choice in the table', function () {
        let XPATH_TABLE_GET_MULTI_CHOICE_VALUE_BUTTON = ".table-getValue .get-value-multipleChoice"
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_MULTI_CHOICE_VALUE_BUTTON)
            .verifyAlertText('["orange"]')
    });
    it('[Table-54] Verify that can get value of Radio Button in the table', function () {
        let XPATH_TABLE_GET_RADIO_VALUE_BUTTON = ".table-getValue .get-value-radio"
        Helper.ElementHandler
            .click(XPATH_TABLE_GET_RADIO_VALUE_BUTTON)
            .verifyAlertText('"banana"')
    });
    it('[Table-55] Verify that can set value for multiple rows in table', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_SET_VALUE_INSERT_ROW)
            .click(XPATH_TABLE_SET_VALUE_BUTTON)
            .click(XPATH_TABLE_SET_VALUE_GET_BUTTON)
            .verifyAlertText('["banana","green","text",["banana"],["banana"]]["banana","green","text",["banana"],["banana"]]')
    });
    it('[Table-59] Verify that can show invisible Table on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_TABLE_SHOW)
            .click(XPATH_TABLE_DISPLAY_BUTTON)
            .verifyElementVisible(XPATH_TABLE_SHOW)
    });
    it('[Table-61] Verify that can hide the visible Table on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_TABLE_HIDE)
            .click(XPATH_TABLE_NON_DISPLAY_BUTTON)
            .verifyElementNotVisible(XPATH_TABLE_HIDE)
    });
    it('[Table-63] Verify that the callback function will be triggered after adding a new row to table', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_INSERT)
            .verifyNumberOfElements(XPATH_TABLE_ON_CELL_ROW, 2)
            .click(XPATH_TABLE_ON_CALL_DELETE)
    });
    it('[Table-64] Verify that the callback function will be triggered after removing row from table', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_INSERT)
            .verifyNumberOfElements(XPATH_TABLE_ON_CELL_ROW, 2)
            .click(XPATH_TABLE_ON_CALL_DELETE)
            .verifyNumberOfElements(XPATH_TABLE_ON_CELL_ROW, 1)
    });
    it('[Table-65-Radio] Verify that the callback function will be triggered when changing the value', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_RADIO_CHANGE)
            .verifyAlertText('data select: "banana"')
    });
    it('[Table-65-Dropdown] Verify that the callback function will be triggered when changing the value', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_DROPDOWN_OPEN)
            .click(XPATH_TABLE_ON_CALL_DROPDOWN_CHANGE)
            .verifyAlertText('data select: "red"')
    });
    it('[Table-65-Textbox] Verify that the callback function will be triggered when changing the value', function () {
        Helper.ElementHandler
            .setValue(XPATH_TABLE_ON_CALL_INPUT, 't')
            .verifyAlertText('data select: "t"')
    });
    it('[Table-65-Checkbox] Verify that the callback function will be triggered when changing the value', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_CHECKBOX_CHANGE)
            .verifyAlertText('data select: ["orange"]')
    });
    it('[Table-65-Multiple] Verify that the callback function will be triggered when changing the value', function () {
        Helper.ElementHandler
            .click(XPATH_TABLE_ON_CALL_MULTIPLE_CHANGE)
            .verifyAlertText('data select: ["orange"]')
    });
});