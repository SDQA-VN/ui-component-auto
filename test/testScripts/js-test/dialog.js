const Helper = require('../../helper/main.js');

const SHOW_DIALOG_FULL_OPTION_BUTTON = '//button[@id="dialog_full_option_button"]';
const DIALOG_FULL_OPTION_CLOSE_BUTTON = '//div[@id="dialog_full_optionEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_FULL_OPTION = '//div[@id="dialog_full_optionEl"]//div[@class="kuc-dialog-wrapper"]';
const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON = '//button[@id="dialog_setHeader_existing_header_button"]';
const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE = '//div[@id="dialog_setHeader_existing_headerEl"]//div[@class="kuc-dialog-header"]';
const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON = '//div[@id="dialog_setHeader_existing_headerEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_setHeader_with_components_button"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON = '//div[@id="dialog_setHeader_with_componentsEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON = '//button[@id="dialog_set_header_normal_button"][contains(text(), "Normal Button")]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON = '//button[@id="dialog_set_header_submit_button"][contains(text(), "Submit Button")]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX = '//input[@id="dialog_set_header_text_box"][@class="kuc-input-text"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL = '//div[@id="dialog_set_header_label"]//span[contains(text(), "Label")]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT = '//div[@id="dialog_set_header_alert"][contains(text(), "Alert")]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN = '//div[@id="dialog_set_header_dropdown"]//div[@class="kuc-dropdown"]//span[contains(text(), "check UI Item 2")]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON = '//div[@id="dialog_set_header_radio_button"][@class="kuc-input-radio"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE = '//div[@id="dialog_set_header_multiple_choice"][@class="kuc-multiple-list kuc-list-outer"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX = '//div[@id="dialog_set_header_check_box"][@class="kuc-input-checkbox"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON = '//button[@id="dialog_set_header_icon_button"][@class="kuc-icon-btn small  blue circle"]';
const DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE = '//div[@id="dialog_set_header_table"][@class="kuc-table"]';
const DIALOG_GET_HEADER_WITH_STRING_BUTTON = '//button[@id="dialog_get_header_string_button"]';
const DIALOG_SHOW_GET_HEADER_STRING = '//div[@id="dialog_show_get_header_string_label"]';
const DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_get_header_dom_button"]';
const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON = '//button[@id="dialog_setContent_existing_content_button"]';
const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE = '//div[@id="dialog_setContent_existing_contentEl"]//div[@class="kuc-dialog-body"]';
const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON = '//div[@id="dialog_setContent_existing_contentEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_setContent_with_components_button"]';
const DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON = '//div[@id="dialog_setContent_with_componentsEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_GET_CONTENT_WITH_STRING_BUTTON = '//button[@id="dialog_get_content_string_button"]';
const DIALOG_SHOW_GET_CONTENT_STRING = '//div[@id="dialog_show_get_content_string_label"]';
const DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_get_content_dom_button"]';
const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON = '//button[@id="dialog_setFooter_existing_footer_button"]';
const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON = '//div[@id="dialog_setFooter_existing_footerEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE = '//div[@id="dialog_setFooter_existing_footerEl"]//div[@class="kuc-dialog-footer"]';
const DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_setFooter_with_components_button"]';
const DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON = '//div[@id="dialog_setFooter_with_componentsEl"]//span[@class="kuc-dialog-close-button"]//button';
const DIALOG_GET_FOOTER_WITH_STRING_BUTTON = '//button[@id="dialog_get_footer_string_button"]';
const DIALOG_SHOW_GET_FOOTER_STRING = '//div[@id="dialog_show_get_footer_string_label"]';
const DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON = '//button[@id="dialog_get_footer_dom_button"]';
const SHOW_INVISIBLE_DIALOG_BUTTON = '//button[@id="show_dialog_invisible_button"]';
const DIALOG_INVISIBLE = '//div[@id="dialog_invisibleEl"]//div[@class="kuc-dialog-wrapper"]';
const DIALOG_INVISIBLE_CLOSE_BUTTON = '//div[@id="dialog_invisibleEl"]//span[@class="kuc-dialog-close-button"]//button';
const RENDER_VISIBLE_DIALOG_BUTTON = '//button[@id="render_dialog_visible_button"]';
const DIALOG_VISIBLE = '//div[@id="dialog_visibleEl"]//div[@class="kuc-dialog-wrapper"]';
const HIDE_VISIBLE_DIALOG_BUTTON = '//button[@id="hide_dialog_visible_button"]';
const SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON = '//button[@id="dialog_show_closeButton_button"]';
const DIALOG_SHOW_CLOSE_BUTTON = '//div[@id="dialog_show_closeButtonEl"]//span[@class="kuc-dialog-close-button"]//button';
const SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '//button[@id="dialog_hide_closeButton_button"]';
const DIALOG_HIDE_CLOSE_BUTTON = '//div[@id="dialog_hide_closeButtonEl"]//span[@class="kuc-dialog-close-button"]//button';
const CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '//button[@id="close_dialog_without_closeButton_button"]';

describe('kintoneUIComponent - Dialog', function () {
    it('[Dialog-2]: Verify that the Dialog have the UI is the same as Dialog on kintone', function () {
        Helper.ElementHandler
            .waitForElement(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .click(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .waitForElement(DIALOG_FULL_OPTION)
            .verifyElementColor(DIALOG_FULL_OPTION, 'background-color', '#ffffff')
            .verifyElementSize(DIALOG_FULL_OPTION, 600, 172)
            .click(DIALOG_FULL_OPTION_CLOSE_BUTTON)
    });

    it('[Dialog-3-5]: Verify that can create a Dialog with full options value', function () {
        Helper.ElementHandler
            .waitForElement(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .click(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .verifyElementDisplayed(DIALOG_FULL_OPTION)
            .click(DIALOG_FULL_OPTION_CLOSE_BUTTON)
    });

    it('[Dialog-14]: Verify can set header for Dialog which contains existing header', function () {
        Helper.ElementHandler
            .waitForElement(DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON)
            .click(DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON)
            .verifyText(DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE, 'Set header for dialog with existing header')
            .click(DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON)
    });

    it('[Dialog-18]: Verify that can set header for Dialog with components', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
            .click(DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON)
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with String', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_HEADER_WITH_STRING_BUTTON)
            .waitForElement(DIALOG_SHOW_GET_HEADER_STRING)
            .verifyText(DIALOG_SHOW_GET_HEADER_STRING, 'Value of header dialog with string')
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
    });

    it('[Dialog-24]: Verify can set content for Dialog which contains existing content', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON)
            .waitForElement(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE)
            .verifyText(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE, 'Set content for dialog with existing content')
            .click(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON)
    });

    it('[Dialog-28]: Verify that can set Content for Dialog with components', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
            .click(DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON)
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with String', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_CONTENT_WITH_STRING_BUTTON)
            .waitForElement(DIALOG_SHOW_GET_CONTENT_STRING)
            .verifyText(DIALOG_SHOW_GET_CONTENT_STRING, 'Value of content on dialog with string')
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
    });

    it('[Dialog-34]: Verify can set footer for Dialog which contains existing footer', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON)
            .waitForElement(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE)
            .verifyText(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE, "Set footer for dialog with existing footer")
            .click(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON)
    });

    it('[Dialog-38]: Verify that can set footer for Dialog with components', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
            .click(DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON)
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with String', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_FOOTER_WITH_STRING_BUTTON)
            .waitForElement(DIALOG_SHOW_GET_FOOTER_STRING)
            .verifyText(DIALOG_SHOW_GET_FOOTER_STRING, "Value of footer on dialog with string")
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE)
    });

    it('[Dialog-44]: Verify that can show invisible Dialog on UI', function () {
        Helper.ElementHandler
            .click(SHOW_INVISIBLE_DIALOG_BUTTON)
            .verifyElementDisplayed(DIALOG_INVISIBLE)
            .click(DIALOG_INVISIBLE_CLOSE_BUTTON)
    });

    it('[Dialog-46]: Verify that can hide the visible Dialog on UI', function () {
        Helper.ElementHandler
            .click(RENDER_VISIBLE_DIALOG_BUTTON)
            .verifyElementDisplayed(DIALOG_VISIBLE)
            .click(HIDE_VISIBLE_DIALOG_BUTTON)
            .verifyElementNotDisplayed(DIALOG_VISIBLE)
    });

    it('[Dialog-49]: Verify that can show CloseButton on Dialog', function () {
        Helper.ElementHandler
            .click(SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON)
            .verifyElementDisplayed(DIALOG_SHOW_CLOSE_BUTTON)
            .click(DIALOG_SHOW_CLOSE_BUTTON)
    });

    it('[Dialog-51]: Verify that can hide the CloseButton on Dialog', function () {
        Helper.ElementHandler
            .click(SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON)
            .verifyElementNotExisting(DIALOG_HIDE_CLOSE_BUTTON)
            .click(CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON)
    });
});