const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isExisted = require('../../util/ReturnElement').checkElementExistence;
const xpath = require('../../xpath/js-test/dialog.xpath');
const common = require('../../util/common');
const expect = require('chai').expect;

describe('kintoneUIComponent - Dialog', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Dialog-2]: Verify that the Dialog have the UI is the same as Dialog on kintone', function () {
        $(xpath.XPATH_SHOW_DIALOG_FULL_OPTION_BUTTON).click();
        let dialogBgColor = $(xpath.XPATH_DIALOG_FULL_OPTION).getCssProperty('background-color');
        let dialogSize = browser.getElementSize(xpath.XPATH_DIALOG_FULL_OPTION);
        expect(dialogBgColor.parsed.hex).to.equal('#ffffff');
        expect(dialogSize.width).to.equal(600);
        expect(dialogSize.height).to.equal(172);
        $(xpath.XPATH_DIALOG_FULL_OPTION_CLOSE_BUTTON).click();
    });

    it('[Dialog-3-5]: Verify that can create a Dialog with full options value', function () {
        $(xpath.XPATH_SHOW_DIALOG_FULL_OPTION_BUTTON).click();
        let isVisible = isVisibled(xpath.XPATH_DIALOG_FULL_OPTION, true);
        expect(isVisible).to.equal(true);
        $(xpath.XPATH_DIALOG_FULL_OPTION_CLOSE_BUTTON).click();
    });

    it('[Dialog-14]: Verify can set header for Dialog which contains existing header', function () {
        $(xpath.XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_VALUE).getText()).to.equal('Set header for dialog with existing header');
        $(xpath.XPATH_DIALOG_SET_HEADER_FOR_EXISTING_HEADER_CLOSE_BUTTON).click();
    });

    it('[Dialog-18]: Verify that can set header for Dialog with components', function () {
        $(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
        $(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with String', function () {
        $(xpath.XPATH_DIALOG_GET_HEADER_WITH_STRING_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SHOW_GET_HEADER_STRING).getText()).to.equal("Value of header dialog with string");
    });

    it('[Dialog-19-20]: Verify that can get the value of the header Dialog with DOM', function () {
        $(xpath.XPATH_DIALOG_GET_HEADER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
    });

    it('[Dialog-24]: Verify can set content for Dialog which contains existing content', function () {
        $(xpath.XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_VALUE).getText()).to.equal('Set content for dialog with existing content');
        $(xpath.XPATH_DIALOG_SET_CONTENT_FOR_EXISTING_CONTENT_CLOSE_BUTTON).click();
    });

    it('[Dialog-28]: Verify that can set Content for Dialog with components', function () {
        $(xpath.XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
        $(xpath.XPATH_DIALOG_SET_CONTENT_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with String', function () {
        $(xpath.XPATH_DIALOG_GET_CONTENT_WITH_STRING_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SHOW_GET_CONTENT_STRING).getText()).to.equal("Value of content on dialog with string");
    });

    it('[Dialog-29-30]: Verify that can get the value of the content Dialog with DOM', function () {
        $(xpath.XPATH_DIALOG_GET_CONTENT_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
    });

    it('[Dialog-34]: Verify can set footer for Dialog which contains existing footer', function () {
        $(xpath.XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_VALUE).getText()).to.equal("Set footer for dialog with existing footer");
        $(xpath.XPATH_DIALOG_SET_FOOTER_FOR_EXISTING_FOOTER_CLOSE_BUTTON).click();
    });

    it('[Dialog-38]: Verify that can set footer for Dialog with components', function () {
        $(xpath.XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
        $(xpath.XPATH_DIALOG_SET_FOOTER_WITH_COMPONENTS_CLOSE_BUTTON).click();
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with String', function () {
        $(xpath.XPATH_DIALOG_GET_FOOTER_WITH_STRING_BUTTON).click();
        expect($(xpath.XPATH_DIALOG_SHOW_GET_FOOTER_STRING).getText()).to.equal("Value of footer on dialog with string");
    });

    it('[Dialog-39-40]: Verify that can get the value of the footer Dialog with DOM', function () {
        $(xpath.XPATH_DIALOG_GET_FOOTER_WITH_COMPONENTS_BUTTON).click();
        let isNormalButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_NORMAL_BUTTON, true);
        let isSubmitButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_SUBMIT_BUTTON, true);
        let isTextBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TEXT_BOX, true);
        let isLabelVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_LABEL, true);
        let isAlertVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ALERT, true);
        let isDropdownVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_DROPDOWN, true);
        let isRadioButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_RADIO_BUTTON, true);
        let isMultipleChoiceVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_MULTIPLE_CHOICE, true);
        let isCheckBoxVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_CHECKBOX, true);
        let isIconButtonVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_ICON_BUTTON, true);
        let isTableVisible = isVisibled(xpath.XPATH_DIALOG_SET_HEADER_WITH_COMPONENTS_TABLE, true);

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
    });

    it('[Dialog-44]: Verify that can show invisible Dialog on UI', function () {
        $(xpath.XPATH_SHOW_INVISIBLE_DIALOG_BUTTON).click();
        let isVisible = isVisibled(xpath.XPATH_DIALOG_INVISIBLE, true);
        expect(isVisible).to.equal(true);
        $(xpath.XPATH_DIALOG_INVISIBLE_CLOSE_BUTTON).click();
    });

    it('[Dialog-46]: Verify that can hide the visible Dialog on UI', function () {
        $(xpath.XPATH_RENDER_VISIBLE_DIALOG_BUTTON).click();
        let isVisible = isVisibled(xpath.XPATH_DIALOG_VISIBLE, true);
        expect(isVisible).to.equal(true);
        $(xpath.XPATH_HIDE_VISIBLE_DIALOG_BUTTON).click();
        let isVisibleAfterHide = isVisibled(xpath.XPATH_DIALOG_VISIBLE, false);
        expect(isVisibleAfterHide).to.equal(false);
    });

    it('[Dialog-49]: Verify that can show CloseButton on Dialog', function () {
        $(xpath.XPATH_SHOW_DIALOG_WITH_CLOSE_BUTTON_BUTTON).click();
        let isVisible = isVisibled(xpath.XPATH_DIALOG_SHOW_CLOSE_BUTTON, true);
        expect(isVisible).to.equal(true);
        $(xpath.XPATH_DIALOG_SHOW_CLOSE_BUTTON).click();
    });

    it('[Dialog-51]: Verify that can hide the CloseButton on Dialog', function () {
        $(xpath.XPATH_SHOW_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON).click();
        let isExist = isExisted(xpath.XPATH_DIALOG_HIDE_CLOSE_BUTTON);
        expect(isExist).to.equal(false);
        $(xpath.XPATH_CLOSE_DIALOG_WITHOUT_CLOSE_BUTTON_BUTTON).click();
    });
});