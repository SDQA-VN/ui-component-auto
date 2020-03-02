const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js')

const COMPONENT_CONTENT_FIELDGROUP = "//div[@id='constructor-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']//div[@id='component-container-fieldgroup']";
const TOGGLE_BUTTON_FIELDGROUP = "//div[@id='constructor-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span";
const SET_CONTENT_FIELDGROUP = "//div[@id='set-content-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']";
const SET_CONTENT_BUTTON_FIELDGROUP = "//div[@id='set-content-fieldgroup']//button[contains(text(), 'Set Content FieldGroup')]";
const GET_CONTENT_FIELDGROUP = "//div[@id='get-content-fieldgroup']//div[@class='kuc-fieldgroup']//div[@class='kuc-fieldgroup-container']//div[@class='kuc-fieldgroup-contents']";
const GET_CONTENT_CHECK_FIELDGROUP = "//div[@id='get-content-check-fieldgroup']";
const GET_CONTENT_BUTTON_FIELDGROUP = "//div[@id='get-content-fieldgroup']//button[contains(text(), 'Get Content FieldGroup')]";
const SET_NAME_FIELDGROUP = "//div[@id='set-name-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span/span[2]";
const SET_NAME_BUTTON_FIELDGROUP = "//div[@id='set-name-fieldgroup']//button[contains(text(), 'Set Name FieldGroup')]";
const GET_NAME_BUTTON_FIELDGROUP = "//div[@id='get-name-fieldgroup']//button[contains(text(), 'Get Name FieldGroup')]";
const SET_TOGGLE_FIELDGROUP = "//div[@id='set-toggle-fieldgroup']/div[@class='kuc-fieldgroup']/div[@class='kuc-fieldgroup-container']/span";
const SET_TOGGLE_BUTTON_FIELDGROUP = "//div[@id='set-toggle-fieldgroup']//button[contains(text(), 'Set Toggle FieldGroup')]";
const GET_TOGGLE_BUTTON_FIELDGROUP = "//div[@id='get-toggle-fieldgroup']//button[contains(text(), 'Get Toggle FieldGroup')]";

describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[FieldGroup-3] should Verify the operation of FieldGroup, all below components can be add to table as child component', function () {
        Helper.ElementHandler
            .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP, 'class', 'collapse')
            .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP + "//span[1]", 'class', 'kuc-arrow right')
            .click(TOGGLE_BUTTON_FIELDGROUP)
            .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP, 'class', 'expand')
            .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP + "//span[1]", 'class', 'kuc-arrow down')
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-alert bg-success']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn normal']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn submit']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-checkbox']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='date-time-container']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-dropdown-container']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-fieldgroup']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-icon-btn normal  gray circle']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-multiple-list kuc-list-outer']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-multiple-list kuc-list-outer']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-radio']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-table']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']")
            .verifyElementExisting(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-textarea-outer']")
    });

    it('[FieldGroup-17] should Verify that can set content of FieldGroup', function () {
        Helper.ElementHandler
            .verifyElementExisting(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .click(SET_CONTENT_BUTTON_FIELDGROUP)
            .verifyElementNotExisting(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementExisting(SET_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']")
    });

    it('[FieldGroup-18] should Verify that can get content of FieldGroup', function () {
        Helper.ElementHandler
            .verifyElementExisting(GET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementNotExisting(GET_CONTENT_CHECK_FIELDGROUP + "//div[@class='kuc-label']")
            .click(GET_CONTENT_BUTTON_FIELDGROUP)
            .verifyElementExisting(GET_CONTENT_CHECK_FIELDGROUP + "//div[@class='kuc-label']")
    });

    it('[FieldGroup-19] should Verify that can set name for FieldGroup', function () {
        Helper.ElementHandler
            .verifyText(SET_NAME_FIELDGROUP, 'Group')
            .click(SET_NAME_BUTTON_FIELDGROUP)
            .verifyText(SET_NAME_FIELDGROUP, 'Set Name Success')
    });

    it('[FieldGroup-20] should Verify that can get name for FieldGroup', function () {
        Helper.ElementHandler
            .click(GET_NAME_BUTTON_FIELDGROUP)
            .verifyAlertText('Group')
    });

    it('[FieldGroup-21] should Verify that can set toggle for FieldGroup', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_TOGGLE_FIELDGROUP, 'class', 'expand')
            .click(SET_TOGGLE_BUTTON_FIELDGROUP)
            .verifyAttribute(SET_TOGGLE_FIELDGROUP, 'class', 'collapse')
    });

    it('[FieldGroup-22] should Verify that can get toggle for FieldGroup', function () {
        Helper.ElementHandler
            .click(GET_TOGGLE_BUTTON_FIELDGROUP)
            .verifyAlertText('expand')
    });
});