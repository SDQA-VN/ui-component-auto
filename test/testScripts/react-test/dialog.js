const Helper = require('../../helper/main.js')

const SHOW_DIALOG_FULL_OPTION_BUTTON = '.dialog_full_option_button';
const DIALOG_FULL_OPTION = '.dialog_full_optionEl .kuc-dialog-wrapper';
const DIALOG_FULL_OPTION_CLOSE_BUTTON = '.dialog_full_optionEl .kuc-dialog-close-button .kuc-icon-btn';

const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON = '.dialog_setHeader_existing_header_button';
const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE = '.dialog_setHeader_existing_headerEl .kuc-dialog-header';
const DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON = '.dialog_setHeader_existing_headerEl .kuc-dialog-close-button .kuc-icon-btn';

const DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON = '.dialog_setHeader_with_components_button';
const DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn';
const DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-btn.normal'
const DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-btn.submit'
const DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX = '.dialog_setHeader_with_componentsEl .dialog_set_header_with_components > .kuc-input-text'
const DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL = '.dialog_setHeader_with_componentsEl .kuc-label'
const DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT = '.dialog_setHeader_with_componentsEl .kuc-alert'
const DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN = '.dialog_setHeader_with_componentsEl .kuc-dropdown'
const DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-input-radio'
const DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setHeader_with_componentsEl .kuc-multiple-list'
const DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX = '.dialog_setHeader_with_componentsEl .kuc-input-checkbox'
const DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setHeader_with_componentsEl .dialog_set_header_with_components > .kuc-icon-btn'
const DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE = '.dialog_setHeader_with_componentsEl .kuc-table'

const DIALOG_GET_HEADER_WITH_STRING_BUTTON = '.dialog_get_header_string_button';

const DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON = '.dialog_get_header_react_elements_button'
const DIALOG_GET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-btn.normal'
const DIALOG_GET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-btn.submit'
const DIALOG_GET_HEADER_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components > .kuc-input-text'
const DIALOG_GET_HEADER_WITH_COMPONENTS_LABEL = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-label'
const DIALOG_GET_HEADER_WITH_COMPONENTS_ALERT = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-alert'
const DIALOG_GET_HEADER_WITH_COMPONENTS_DROPDOWN = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-dropdown'
const DIALOG_GET_HEADER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-input-radio'
const DIALOG_GET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-multiple-list'
const DIALOG_GET_HEADER_WITH_COMPONENTS_CHECKBOX = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-input-checkbox'
const DIALOG_GET_HEADER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components > .kuc-icon-btn'
const DIALOG_GET_HEADER_WITH_COMPONENTS_TABLE = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-table'

const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON = '.dialog_setContent_existing_content_button'
const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE = '.dialog_setContent_existing_contentEl .kuc-dialog-body'
const DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON = '.dialog_setContent_existing_contentEl .kuc-dialog-close-button .kuc-icon-btn '

const DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON = '.dialog_setContent_with_components_button'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setContent_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn ';
const DIALOG_SET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setContent_with_componentsEl .kuc-btn.normal'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setContent_with_componentsEl .kuc-btn.submit'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_TEXT_BOX = '.dialog_setContent_with_componentsEl .dialog_set_content_with_components > .kuc-input-text'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_LABEL = '.dialog_setContent_with_componentsEl .kuc-label'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_ALERT = '.dialog_setContent_with_componentsEl .kuc-alert'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_DROPDOWN = '.dialog_setContent_with_componentsEl .kuc-dropdown'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setContent_with_componentsEl .kuc-input-radio'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setContent_with_componentsEl .kuc-multiple-list'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_CHECKBOX = '.dialog_setContent_with_componentsEl .kuc-input-checkbox'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setContent_with_componentsEl .dialog_set_content_with_components > .kuc-icon-btn'
const DIALOG_SET_CONTENT_WITH_COMPONENTS_TABLE = '.dialog_setContent_with_componentsEl .kuc-table'

const DIALOG_GET_CONTENT_WITH_STRING_BUTTON = '.dialog_get_content_string_button'

const DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON = '.dialog_get_content_react_elements_button'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-btn.normal'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-btn.submit'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components > .kuc-input-text'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_LABEL = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-label'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_ALERT = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-alert'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_DROPDOWN = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-dropdown'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-input-radio'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-multiple-list'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_CHECKBOX = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-input-checkbox'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components > .kuc-icon-btn'
const DIALOG_GET_CONTENT_WITH_COMPONENTS_TABLE = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-table'

const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON = '.dialog_setFooter_existing_footer_button'
const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE = '.dialog_setFooter_existing_footerEl .kuc-dialog-footer'
const DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON = '.dialog_setFooter_existing_footerEl .kuc-dialog-close-button .kuc-icon-btn '

const DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON = '.dialog_setFooter_with_components_button'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn';
const DIALOG_SET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-btn.normal'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-btn.submit'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_TEXT_BOX = '.dialog_setFooter_with_componentsEl .dialog_set_footer_with_components > .kuc-input-text'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_LABEL = '.dialog_setFooter_with_componentsEl .kuc-label'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_ALERT = '.dialog_setFooter_with_componentsEl .kuc-alert'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_DROPDOWN = '.dialog_setFooter_with_componentsEl .kuc-dropdown'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-input-radio'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setFooter_with_componentsEl .kuc-multiple-list'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_CHECKBOX = '.dialog_setFooter_with_componentsEl .kuc-input-checkbox'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setFooter_with_componentsEl .dialog_set_footer_with_components > .kuc-icon-btn'
const DIALOG_SET_FOOTER_WITH_COMPONENTS_TABLE = '.dialog_setFooter_with_componentsEl .kuc-table'

const DIALOG_GET_FOOTER_WITH_STRING_BUTTON = '.dialog_get_footer_string_button'

const DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON = '.dialog_get_footer_react_elements_button'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-btn.normal'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-btn.submit'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components > .kuc-input-text'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_LABEL = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-label'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_ALERT = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-alert'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_DROPDOWN = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-dropdown'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-input-radio'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-multiple-list'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_CHECKBOX = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-input-checkbox'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components > .kuc-icon-btn'
const DIALOG_GET_FOOTER_WITH_COMPONENTS_TABLE = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-table'

const SHOW_INVISIBLE_DIALOG_BUTTON = '.show_dialog_invisible_button'
const DIALOG_INVISIBLE = '.dialog_invisibleEl .kuc-dialog-wrapper'
const DIALOG_INVISIBLE_CLOSE_BUTTON = '.dialog_invisibleEl .kuc-dialog-close-button .kuc-icon-btn'

const RENDER_VISIBLE_DIALOG_BUTTON = '.dialog_visibleEl .render_dialog_visible_button'
const DIALOG_VISIBLE = '.dialog_visibleEl .kuc-dialog-wrapper'
const HIDE_VISIBLE_DIALOG_BUTTON = '.dialog_visibleEl .hide_dialog_visible_button'

const SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON = '.dialog_show_closeButtonEl .dialog_show_closeButton_button'
const DIALOG_SHOW_CLOSE_BUTTON = '.dialog_show_closeButtonEl .kuc-dialog-close-button .kuc-icon-btn'

const SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '.dialog_hide_closeButtonEl .dialog_hide_closeButton_button'
const DIALOG_HIDE_CLOSE_BUTTON = '.dialog_hide_closeButtonEl .kuc-dialog-close-button .kuc-icon-btn'
const CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '.dialog_hide_closeButtonEl .close_dialog_without_closeButton_button'

describe('kintoneUIComponent - Dialog', function () {
    it('[Dialog-2]: Verify that the Dialog have the UI is the same as Dialog on kintone', function () {
        Helper.ElementHandler
            .click(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .verifyElementColor(DIALOG_FULL_OPTION, 'background-color', '#ffffff')
            .verifyElementSize(DIALOG_FULL_OPTION, 600, 172)
            .click(DIALOG_FULL_OPTION_CLOSE_BUTTON)
    });

    it('[Dialog-3-5]: Verify that can create a Dialog with full options value', function () {
        Helper.ElementHandler
            .click(SHOW_DIALOG_FULL_OPTION_BUTTON)
            .verifyElementDisplayed(DIALOG_FULL_OPTION)
            .click(DIALOG_FULL_OPTION_CLOSE_BUTTON)
    });

    it('[Dialog-14]: Verify can set header for Dialog which contains existing header', function () {
        Helper.ElementHandler
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
            .verifyAlertText("Value of header dialog with string")
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_HEADER_WITH_COMPONENTS_TABLE)
    });

    it('[Dialog-24]: Verify can set content for Dialog which contains existing content', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON)
            .verifyText(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE, 'Set content for dialog with existing content')
            .click(DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON)
    });

    it('[Dialog-28]: Verify that can set Content for Dialog with components', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_CONTENT_WITH_COMPONENTS_TABLE)
            .click(DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON)
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with String', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_CONTENT_WITH_STRING_BUTTON)
            .verifyAlertText("Dialog content with string")
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_CONTENT_WITH_COMPONENTS_TABLE)
    });

    it('[Dialog-34]: Verify can set footer for Dialog which contains existing footer', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON)
            .verifyText(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE, "Set footer for dialog with existing footer")
            .click(DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON)
    });

    it('[Dialog-38]: Verify that can set footer for Dialog with components', function () {
        Helper.ElementHandler
            .click(DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_SET_FOOTER_WITH_COMPONENTS_TABLE)
            .click(DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON)
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with String', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_FOOTER_WITH_STRING_BUTTON)
            .verifyAlertText("Dialog footer with string")
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with DOM', function () {
        Helper.ElementHandler
            .click(DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_TEXT_BOX)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_LABEL)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_ALERT)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_DROPDOWN)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_CHECKBOX)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_ICON_BUTTON)
            .verifyElementDisplayed(DIALOG_GET_FOOTER_WITH_COMPONENTS_TABLE)
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