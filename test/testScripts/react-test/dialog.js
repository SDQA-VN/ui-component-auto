const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isExisted = require('../../util/ReturnElement').checkElementExistence;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_SHOW_DIALOG_FULL_OPTION_BUTTON = '.dialog_full_option_button';
const XPATH_DIALOG_FULL_OPTION = '.dialog_full_optionEl .kuc-dialog-wrapper';
const XPATH_DIALOG_FULL_OPTION_CLOSE_BUTTON = '.dialog_full_optionEl .kuc-dialog-close-button .kuc-icon-btn svg';

const XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON ='.dialog_setHeader_existing_header_button';
const XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE = '.dialog_setHeader_existing_headerEl .kuc-dialog-header';
const XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON = '.dialog_setHeader_existing_headerEl .kuc-dialog-close-button .kuc-icon-btn svg';

const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON = '.dialog_setHeader_with_components_button';
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn svg';
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-btn.normal'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-btn.submit'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX = '.dialog_setHeader_with_componentsEl .dialog_set_header_with_components > .kuc-input-text'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL = '.dialog_setHeader_with_componentsEl .kuc-label'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT = '.dialog_setHeader_with_componentsEl .kuc-alert'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN = '.dialog_setHeader_with_componentsEl .kuc-dropdown'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setHeader_with_componentsEl .kuc-input-radio'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setHeader_with_componentsEl .kuc-multiple-list'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX = '.dialog_setHeader_with_componentsEl .kuc-input-checkbox'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setHeader_with_componentsEl .dialog_set_header_with_components > .kuc-icon-btn'
const XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE = '.dialog_setHeader_with_componentsEl .kuc-table'

const XPATH_DIALOG_GET_HEADER_WITH_STRING_BUTTON = '.dialog_get_header_string_button';

const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON = '.dialog_get_header_react_elements_button'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-btn.normal'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-btn.submit'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components > .kuc-input-text'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_LABEL = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-label'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_ALERT = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-alert'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_DROPDOWN = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-dropdown'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-input-radio'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-multiple-list'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_CHECKBOX = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-input-checkbox'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components > .kuc-icon-btn'
const XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_TABLE = '.dialog_get_header_react_elementsEl > .dialog_get_header_with_components .kuc-table'

const XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON = '.dialog_setContent_existing_content_button'
const XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE = '.dialog_setContent_existing_contentEl .kuc-dialog-body'
const XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON = '.dialog_setContent_existing_contentEl .kuc-dialog-close-button .kuc-icon-btn svg'

const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON = '.dialog_setContent_with_components_button'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setContent_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn svg';
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setContent_with_componentsEl .kuc-btn.normal'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setContent_with_componentsEl .kuc-btn.submit'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_TEXT_BOX = '.dialog_setContent_with_componentsEl .dialog_set_content_with_components > .kuc-input-text'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_LABEL = '.dialog_setContent_with_componentsEl .kuc-label'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_ALERT = '.dialog_setContent_with_componentsEl .kuc-alert'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_DROPDOWN = '.dialog_setContent_with_componentsEl .kuc-dropdown'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setContent_with_componentsEl .kuc-input-radio'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setContent_with_componentsEl .kuc-multiple-list'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_CHECKBOX = '.dialog_setContent_with_componentsEl .kuc-input-checkbox'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setContent_with_componentsEl .dialog_set_content_with_components > .kuc-icon-btn'
const XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_TABLE = '.dialog_setContent_with_componentsEl .kuc-table'

const XPATH_DIALOG_GET_CONTENT_WITH_STRING_BUTTON = '.dialog_get_content_string_button'

const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON = '.dialog_get_content_react_elements_button'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-btn.normal'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-btn.submit'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components > .kuc-input-text'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_LABEL = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-label'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_ALERT = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-alert'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_DROPDOWN = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-dropdown'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-input-radio'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-multiple-list'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_CHECKBOX = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-input-checkbox'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components > .kuc-icon-btn'
const XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_TABLE = '.dialog_get_content_react_elementsEl > .dialog_get_content_with_components .kuc-table'

const XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON = '.dialog_setFooter_existing_footer_button'
const XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE = '.dialog_setFooter_existing_footerEl .kuc-dialog-footer'
const XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON = '.dialog_setFooter_existing_footerEl .kuc-dialog-close-button .kuc-icon-btn svg'

const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON = '.dialog_setFooter_with_components_button'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-dialog-close-button .kuc-icon-btn svg';
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-btn.normal'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-btn.submit'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_TEXT_BOX = '.dialog_setFooter_with_componentsEl .dialog_set_footer_with_components > .kuc-input-text'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_LABEL = '.dialog_setFooter_with_componentsEl .kuc-label'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_ALERT = '.dialog_setFooter_with_componentsEl .kuc-alert'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_DROPDOWN = '.dialog_setFooter_with_componentsEl .kuc-dropdown'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_setFooter_with_componentsEl .kuc-input-radio'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_setFooter_with_componentsEl .kuc-multiple-list'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_CHECKBOX = '.dialog_setFooter_with_componentsEl .kuc-input-checkbox'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_setFooter_with_componentsEl .dialog_set_footer_with_components > .kuc-icon-btn'
const XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_TABLE = '.dialog_setFooter_with_componentsEl .kuc-table'

const XPATH_DIALOG_GET_FOOTER_WITH_STRING_BUTTON = '.dialog_get_footer_string_button'

const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON = '.dialog_get_footer_react_elements_button'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-btn.normal'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-btn.submit'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_TEXT_BOX = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components > .kuc-input-text'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_LABEL = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-label'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_ALERT = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-alert'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_DROPDOWN = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-dropdown'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-input-radio'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-multiple-list'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_CHECKBOX = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-input-checkbox'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_ICON_BUTTON = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components > .kuc-icon-btn'
const XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_TABLE = '.dialog_get_footer_react_elementsEl > .dialog_get_footer_with_components .kuc-table'

const XPATH_SHOW_INVISIBLE_DIALOG_BUTTON = '.show_dialog_invisible_button'
const XPATH_DIALOG_INVISIBLE = '.dialog_invisibleEl .kuc-dialog-wrapper'
const XPATH_DIALOG_INVISIBLE_CLOSE_BUTTON = '.dialog_invisibleEl .kuc-dialog-close-button .kuc-icon-btn svg'

const XPATH_RENDER_VISIBLE_DIALOG_BUTTON = '.dialog_visibleEl .render_dialog_visible_button'
const XPATH_DIALOG_VISIBLE = '.dialog_visibleEl .kuc-dialog-wrapper'
const XPATH_HIDE_VISIBLE_DIALOG_BUTTON = '.dialog_visibleEl .hide_dialog_visible_button'

const XPATH_SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON = '.dialog_show_closeButtonEl .dialog_show_closeButton_button'
const XPATH_DIALOG_SHOW_CLOSE_BUTTON = '.dialog_show_closeButtonEl .kuc-dialog-close-button .kuc-icon-btn svg'

const XPATH_SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '.dialog_hide_closeButtonEl .dialog_hide_closeButton_button'
const XPATH_DIALOG_HIDE_CLOSE_BUTTON = '.dialog_hide_closeButtonEl .kuc-dialog-close-button .kuc-icon-btn svg'
const XPATH_CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON = '.dialog_hide_closeButtonEl .close_dialog_without_closeButton_button'

describe('kintoneUIComponent - Dialog', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        browser.pause(5000)
        common.logOutSlash();
    });

    it('[Dialog-2]: Verify that the Dialog have the UI is the same as Dialog on kintone', function () {
        $(XPATH_SHOW_DIALOG_FULL_OPTION_BUTTON).click();
        let dialogBgColor = $(XPATH_DIALOG_FULL_OPTION).getCssProperty('background-color');
        let dialogSize = browser.getElementSize(XPATH_DIALOG_FULL_OPTION);
        expect(dialogBgColor.parsed.hex).to.equal('#ffffff');
        expect(dialogSize.width).to.equal(600);
        expect(dialogSize.height).to.equal(172);
        $(XPATH_DIALOG_FULL_OPTION_CLOSE_BUTTON).click();
    });

    it('[Dialog-3-5]: Verify that can create a Dialog with full options value', function () {
        $(XPATH_SHOW_DIALOG_FULL_OPTION_BUTTON).click();
        let isVisible = isVisibled(XPATH_DIALOG_FULL_OPTION, true);
        expect(isVisible).to.equal(true);
        $(XPATH_DIALOG_FULL_OPTION_CLOSE_BUTTON).click();
    });

    it('[Dialog-14]: Verify can set header for Dialog which contains existing header', function () {
        $(XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON).click();
        expect($(XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE).getText()).to.equal('Set header for dialog with existing header');
        $(XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON).click();
    });

    it('[Dialog-18]: Verify that can set header for Dialog with components', function () {
        $(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        $(XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with String', function () {
        $(XPATH_DIALOG_GET_HEADER_WITH_STRING_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal("Value of header dialog with string");
        browser.alertAccept();

    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with DOM', function () {
        $(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        browser.refresh();
    });

    it('[Dialog-24]: Verify can set content for Dialog which contains existing content', function () {
        $(XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON).click();
        expect($(XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE).getText()).to.equal('Set content for dialog with existing content');
        $(XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON).click();
    });

    it('[Dialog-28]: Verify that can set Content for Dialog with components', function () {
        $(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        $(XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with String', function () {
        $(XPATH_DIALOG_GET_CONTENT_WITH_STRING_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal("Dialog content with string");
        browser.alertAccept();
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with DOM', function () {
        $(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        browser.refresh();
    });

    it('[Dialog-34]: Verify can set footer for Dialog which contains existing footer', function () {
        $(XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON).click();
        expect($(XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE).getText()).to.equal("Set footer for dialog with existing footer");
        $(XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON).click();
    });

    it('[Dialog-38]: Verify that can set footer for Dialog with components', function () {
        $(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        $(XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with String', function () {
        $(XPATH_DIALOG_GET_FOOTER_WITH_STRING_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal("Dialog footer with string");
        browser.alertAccept();
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with DOM', function () {
        $(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_TABLE, true);

        expect(isNormalButtonVisible).to.equal(true);
        expect(isSubmitButtonVisible).to.equal(true);
        expect(isTextBoxVisible).to.equal(true);
        expect(isLabelVisible).to.equal(true);
        expect(isAlertVisible).to.equal(true);
        expect(isDropdownVisible).to.equal(true);
        expect(isRadioButtonVisible).to.equal(true);
        expect(isMultipleChoiceVisible).to.equal(true);
        expect(isCheckBoxVisible).to.equal(true);
        expect(isIconButtonVisible).to.equal(true);
        expect(isTableVisible).to.equal(true);
        browser.refresh();
    });

    it('[Dialog-44]: Verify that can show invisible Dialog on UI', function () {
        $(XPATH_SHOW_INVISIBLE_DIALOG_BUTTON).click();
        let isVisible = isVisibled(XPATH_DIALOG_INVISIBLE, true);
        expect(isVisible).to.equal(true);
        $(XPATH_DIALOG_INVISIBLE_CLOSE_BUTTON).click();
    });

    it('[Dialog-46]: Verify that can hide the visible Dialog on UI', function () {
        $(XPATH_RENDER_VISIBLE_DIALOG_BUTTON).click();
        let isVisible = isVisibled(XPATH_DIALOG_VISIBLE, true);
        expect(isVisible).to.equal(true);
        $(XPATH_HIDE_VISIBLE_DIALOG_BUTTON).click();
        let isVisibleAfterHide = isVisibled(XPATH_DIALOG_VISIBLE, false);
        expect(isVisibleAfterHide).to.equal(false);
    });

    it('[Dialog-49]: Verify that can show CloseButton on Dialog', function () {
        $(XPATH_SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON).click();
        let isVisible = isVisibled(XPATH_DIALOG_SHOW_CLOSE_BUTTON, true);
        expect(isVisible).to.equal(true);
        $(XPATH_DIALOG_SHOW_CLOSE_BUTTON).click();
    });

    it('[Dialog-51]: Verify that can hide the CloseButton on Dialog', function () {
        $(XPATH_SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON).click();
        let isExist = isExisted(XPATH_DIALOG_HIDE_CLOSE_BUTTON);
        expect(isExist).to.equal(false);
        $(XPATH_CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON).click();
    });
});