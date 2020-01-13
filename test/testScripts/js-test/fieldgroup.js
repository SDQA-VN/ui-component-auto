const $ = require('../../utils/ReturnElement').singleElement;
const common = require('../../utils/common');
const expect = require('chai').expect;

// const CONSTRUCTOR_FIELDGROUP = "//div[@id='constructor-fieldgroup']//div[@class='kuc-fieldgroup']//ul[@class='kuc-fieldgroup-container']//li";
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
         //check the toggle of fieldgroup
        .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP,'class','collapse')
        .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP + '//span[1]','class','kuc-arrow right')
        .click(TOGGLE_BUTTON_FIELDGROUP)
        .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP,'class','expand')
        .verifyAttribute(TOGGLE_BUTTON_FIELDGROUP + '//span[1]','class','kuc-arrow down')
        // check components in fieldgroup content (DOM)
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-alert bg-success']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn normal']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-btn submit']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-checkbox']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='date-time-container']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-dropdown-container']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-fieldgroup']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//button[@class='kuc-icon-btn large  gray circle']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-multiple-list kuc-list-outer']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-input-radio']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-table']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']")
        .verifyElementExists(COMPONENT_CONTENT_FIELDGROUP + "//div[@class='kuc-textarea-outer']")
    });

    it('[FieldGroup-17] should Verify that can set content of FieldGroup', function () {
        Helper.ElementHandler
            .verifyElementExists(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .click(SET_CONTENT_BUTTON_FIELDGROUP)
            .verifyElementNotExist(SET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementExists(SET_CONTENT_FIELDGROUP + "//input[@class='kuc-input-text']")
    });

    it('[FieldGroup-18] should Verify that can get content of FieldGroup', function () {
        Helper.ElementHandler
            .verifyElementExists(GET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
            .verifyElementNotExist(GET_CONTENT_CHECK_FIELDGROUP + "//div[@class='kuc-label']")
            .click(GET_CONTENT_BUTTON_FIELDGROUP)
            .verifyElementNotExist(GET_CONTENT_FIELDGROUP + "//div[@class='kuc-label']")
    });

    it('[FieldGroup-19] should Verify that can set name for FieldGroup', function () {
        Helper.ElementHandler
            .verifyText(SET_NAME_FIELDGROUP,'Group')
            .click(SET_NAME_BUTTON_FIELDGROUP)
            .verifyText(SET_NAME_FIELDGROUP,'Set Name Success')
    });

    it('[FieldGroup-20] should Verify that can get name for FieldGroup', function () {
        Helper.ElementHandler
            .click(GET_NAME_BUTTON_FIELDGROUP)
            .verifyAlertText('Group')
    });

    it('[FieldGroup-21] should Verify that can set toggle for FieldGroup', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_TOGGLE_FIELDGROUP,'class','expand')
            .click(SET_TOGGLE_BUTTON_FIELDGROUP)
            .verifyAttribute(SET_TOGGLE_FIELDGROUP,'class','collapse')
    });

    it('[FieldGroup-22] should Verify that can get toggle for FieldGroup', function () {
        Helper.ElementHandler
            .click(GET_TOGGLE_BUTTON_FIELDGROUP)
            .verifyAlertText('expand')
    });
});