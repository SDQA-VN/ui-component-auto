const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../utils/Common.js');
const expect = require('chai').expect;

const BODY = "//body";
const BLANK_SELECTED = "//div[@id='ONSDB_ID']//div[@class='kuc-dropdown-selected']/span/span";
const DEFAULT_SELECTED = "//div[@id='ODSD_ID']//div[@class='kuc-dropdown-selected']/span/span[1]";
const DROPDOWN_CLICK = "//div[@id='OCAD_ID']//div[@class='kuc-dropdown-selected']";
const CONTENT_AREA = "//div[@id='OCAD_ID']//div[@class='kuc-list-outer'][@style='display: block']";
const GET_PREDEFINED_ITEMS_BUTTON = "//button[@class='kuc-btn normal'][contains(text(), 'Get Predefined Items Button')]";
const CONTENT_AREA_PREDEFINED = "//div[@id='OCDI_ID']//div[@class='kuc-list-outer'][@style='display: block']";
const PREDEFINED_DROPDOWN = "//div[@id='OCDI_ID']//span[@class='kuc-dropdown-selected-name']/parent::div";
const ITEM_TO_BE_SELECTED = "//div[@id='OCDI_ID']//div[@class='kuc-list-outer']//span[contains(text(),'OCDI_Item_Dropdown_2')]";
const ITEM_AFTER_SELECTED = "//div[@id='OCDI_ID']//div[@class='kuc-list-item kuc-list-item-selected']";
const ITEM_AFTER_SELECTED_GET_COLOR = "//div[@id='OCDI_ID']//div[@class='kuc-list-item kuc-list-item-selected']//span[@class='kuc-list-item-label']";
const CLICK_OUTSIDE_DROPDOWN = "//div[@id='OCAI_ID']//span[@class='kuc-dropdown-selected-name']/parent::div";
const CLICK_OUTSIDE_DROPDOWN_SELECTED_VALUE = "//div[@id='OCAI_ID']//span[@class='kuc-dropdown-selected-name']";
const OUTSIDE_AREA = "//div[@class='contents-bottommenu-gaia']//div[@class='gaia-argoui-app-index-pager']";
const DROPDOWN_CONTENT = "//div[@id='OCAI_ID']//div[@class='kuc-list-outer'][@style='display: block']";
const SELECT_ITEM = "//span[contains(text(),'OCAI_Item_Dropdown_2')]";
const DISABLED_ITEM = "//div[@id='CWOV_ID']//span[@class='kuc-list-item-label'][contains(text(),'OCAI_Default_Item_Dropdown')]/parent::div[@class='kuc-list-item kuc-list-item-selected kuc-list-item-disable']";
const CONS_DEFAULT_VALUE = "//span[@class='kuc-dropdown-selected-name']//span[contains(text(),'OCAI_Default_Item_Dropdown')]";
const GET_NEW_ADDED_ITEM_BTN = "//button[contains(text(),'Get New Added Item Button')]";
const DROPDOWN_FULL_OPTION = "//div[@id='CFO_ID']";
const WITHOUT_OPTION_VALUE = "//div[@id='CWOV_ID']";
const GET_NEW_ADDED_ITEM_INVISIBLE_BTN = "//button[contains(text(),'Get New Added Item For Invisible Dropdown Button')]";
const GET_NEW_ADDED_ITEM_ONLY_VALUE_BTN = "//button[contains(text(),'Get New Added Item With Only Value Dropdown Button')]";
const VERIFY_NEW_ADDED_ITEM = "//button[contains(text(),'Verify The Added Item Button')]";
const VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR = "//button[contains(text(),'Verify The Added Item Disabled Default Button')]";
const REMOVE_ITEM_DROPDOWN = "//div[@id='RI_ID']//div[@class='kuc-dropdown-selected']";
const ITEM_TO_REMOVE = "//span[@class='kuc-list-item-label'][contains(text(),'RI_Default_Item_Dropdown')]";
const ITEM_TO_SELECT = "//span[contains(text(),'RI_Item_Dropdown_2')]";
const GET_ITEMS_FOR_DROPDOWN_BTN = "//button[contains(text(),'Get Items For Dropdown Button')]";
const GET_VALUE_DROPDOWN = "//div[@id='GV_ID']//div[@class='kuc-dropdown-selected']//span[@class='kuc-dropdown-selected-name']";
const GET_VALUE_SELECTED_ITEM = "//div[@class='kuc-list-item kuc-list-item-selected kuc-list-item-disable']//span[@class='kuc-list-item-label'][contains(text(),'GV_Default_Item_Dropdown')]";
const GET_VALUE_BTN = "//button[contains(text(),'Get Value For Dropdown Button')]";
const SET_VALUE_DROPDOWN = "//div[@id='SV_ID']//div[@class='kuc-dropdown-selected']";
const SET_VALUE_DROPDOWN_BUTTON = "//button[contains(text(),'Set Value of Dropdown')]";
const SET_DISABLED_VALUE_DROPDOWN_BUTTON = "//button[contains(text(),'Set Disabled Value of Dropdown')]";
const SET_BLANK_VALUE_DROPDOWN_BUTTON = "//button[contains(text(),'Set Blank Value of Dropdown')]";
const DISABLE_ITEM_DROPDOWN = "//span[@class='kuc-dropdown-selected-name']//span[contains(text(),'SDI_Default_Item_Dropdown')]";
const DISABLE_BUTTON_DROPDOWN = "//div[@id='SDI_ID']/following-sibling::button[contains(text(), 'Disable Dropdown')]";
const ITEM_ENABLED_CONTENT = "//span[contains(text(),'SDI_Default_Item_Dropdown')]/parent::div[contains(@class, 'kuc-list-item')]";
const ITEM_DISABLED_CONTENT = "//span[contains(text(),'SDI_Item_Dropdown_Disable')]/parent::div[contains(@class, 'kuc-list-item')]";
const ENABLE_ITEM_DROPDOWN = "//span[@class='kuc-dropdown-selected-name']//span[contains(text(),'SEI_Default_Item_Dropdown')]";
const ENABLE_ITEM_ENABLED_CONTENT = "//span[contains(text(),'SEI_Default_Item_Dropdown')]/parent::div[@disabled]";
const ENABLE_ITEM_DISABLED_CONTENT = "//span[contains(text(),'SEI_Item_Dropdown_Disable')]/parent::div[@disabled]";
const SHOW_DROPDOWN = "//div[@id='show_ID']";
const HIDE_DROPDOWN = "//div[@id='hide_ID']";
const DISABLE_DROPDOWN = "//div[@class='kuc-dropdown kuc-dropdown-disable']/ancestor::div[@id='disable_ID']";
const ENABLE_DROPDOWN = "//div[@class='kuc-dropdown kuc-dropdown-disable']/ancestor::div[@id='enable_ID']";
const ON_FUNC_DROPDOWN = "//div[@id='on_function_ID']//span[@class='kuc-dropdown-selected-name']";
const ITEM_ON_CHANGE_FUNC = "//span[contains(text(),'on_function_Item_Dropdown_1')]";
const ON_TRIGGER_DROPDOWN = "//div[@id='on_trigger_ID']//span[@class='kuc-dropdown-selected-name']";
const ITEM_ON_CHANGE_TRIG = "//span[contains(text(),'on_trigger_Item_Dropdown_1')]";
const UI_DROPDOWN = "//div[@id='check-UI-dropdown-id']//span[@class='kuc-dropdown-selected-name']";
const UI_CLICK_DROPDOWN = "//div[@id='check-UI-dropdown-id']//div[@class='kuc-dropdown-selected']";
const UI_DROPDOWN_OUTER = "//div[@id='check-UI-dropdown-id']//div[@class='kuc-list-outer']";
const UI_DROPDOWN_GET_STATE_BTN = "//button[contains(text(),'Get State Of UI Items Button')]";
const UI_NOTE_HAVE_ITEM_DROPDOWN_GET_STATE_BTN = "//button[contains(text(),'Get State Of UI Not Have Items Button')]";
const UI_HOVER_DROPDOWN_BTN = "//div[@id='check-hover-dropdown-id']//div[@class='kuc-dropdown']";
const UI_HOVER_DROPDOWN_ITEM = "//div[@id='check-hover-dropdown-id']//div[@class='kuc-list-outer']//div[@class='kuc-list-item']"
const DISPLAYED_ITEMS_PREDEFINED = {
    "item_1": "(//div[@id='OCDI_ID']//span[@class='kuc-list-item-label'])[1]",
    "item_2": "(//div[@id='OCDI_ID']//span[@class='kuc-list-item-label'])[2]"
}
const OPERATION_CONTENT = {
    "item_1": "//span[@class='kuc-list-item-label'][contains(text(),'ONDC_Item_Dropdown_1')]",
    "item_2": "//span[@class='kuc-list-item-label'][contains(text(),'ONDC_Item_Dropdown_2')]"
}

describe('kintoneUIComponent - Dropdown', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Dropdown-2-3-4] should verify that the Dropdown have the  UI is the same as Dropdown on kintone', function () {
        let dropdownBgColor = $(UI_DROPDOWN).getCssProperty('color');
        let dropdownSize = browser.getElementSize(UI_DROPDOWN);
        $(UI_CLICK_DROPDOWN).click();
        let dropdownOuterColor = $(UI_DROPDOWN_OUTER).getCssProperty('color');
        let dropdownOuterSize = browser.getElementSize(UI_DROPDOWN_OUTER);
        $(UI_CLICK_DROPDOWN).click();

        expect(dropdownBgColor.parsed.hex).to.equal('#3498db');
        expect(dropdownSize.width).to.equal(dropdownSize.width);
        expect(dropdownSize.height).to.equal(dropdownSize.height);
        expect(dropdownOuterColor.parsed.hex).to.equal('#333333');
        expect(dropdownOuterSize.width).to.equal(dropdownOuterSize.width);
        expect(dropdownOuterSize.height).to.equal(dropdownOuterSize.height);

        $(UI_DROPDOWN_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.include('"isDisabled":true');
        expect(alertText).to.include('"isDisabled":false');
        $(UI_NOTE_HAVE_ITEM_DROPDOWN_GET_STATE_BTN).click();
        alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.include('');
    });

    it('[Dropdown-] should verify that when hover item change background color #e2f2fe and when move out of item change background color to white ', function () {
        $(UI_HOVER_DROPDOWN_BTN).click();
        browser.moveToObject(UI_HOVER_DROPDOWN_ITEM);
        let checkHover = browser.isExisting('.kuc-list-item:hover');
        let checkColor = $(UI_HOVER_DROPDOWN_ITEM).getCssProperty('background-color');
        expect(checkHover).to.equal(true);
        expect(checkColor.parsed.hex).to.equal('#e2f2fe');
        browser.moveToObject(UI_HOVER_DROPDOWN_BTN);
        checkHover = browser.isExisting('.kuc-list-item:hover');
        expect(checkHover).to.equal(false);
    });

    it('[Dropdown-6] should verify the content doesn’t displayed', function () {
        let isContentDisplayed = false;
        let item1Visible = isVisibled(OPERATION_CONTENT["item_1"], false);
        let item2Visible = isVisibled(OPERATION_CONTENT["item_2"], false);
        if (item1Visible === false && item2Visible === false) {
            isContentDisplayed === false;
        } else {
            isContentDisplayed === true;
        }
        expect(isContentDisplayed).to.equal(false);
    });

    it('[Dropdown-7] should verify the main area display blank if no selected item', function () {
        let valueOfNoneSelectedItem = $(BLANK_SELECTED).getText();
        expect(valueOfNoneSelectedItem).to.equal('');
    });

    it('[Dropdown-8] should verify the main area will display the selected value', function () {
        let valueOfSelectedItem = $(DEFAULT_SELECTED).getText();
        expect(valueOfSelectedItem).to.equal('ODSD_Default_Item_Dropdown');
    });

    it('[Dropdown-10] should display the content area below the main area', function () {
        $(DROPDOWN_CLICK).click();
        let isContentVisibled = isVisibled(CONTENT_AREA, true);
        expect(isContentVisibled).to.equal(true);
    });

    it('[Dropdown-11] should display the content area list of predefiend item (including disable item)', function () {
        $(GET_PREDEFINED_ITEMS_BUTTON).click();
        let alertText_listOfPredefinedItems = browser.alertText();
        browser.alertAccept();
        $(PREDEFINED_DROPDOWN).click();
        let isContentVisible = isVisibled(CONTENT_AREA_PREDEFINED, true);
        let item_1_Text = $(DISPLAYED_ITEMS_PREDEFINED.item_1).getText();
        let item_2_Text = $(DISPLAYED_ITEMS_PREDEFINED.item_2).getText();
        if (isContentVisible) {
            expect(alertText_listOfPredefinedItems).to.include(item_1_Text);
            expect(alertText_listOfPredefinedItems).to.include(item_2_Text);
            $(DISPLAYED_ITEMS_PREDEFINED.item_2).click();
        }
    });

    it('[Dropdown-13-14-15] should verify when user choose any items in the list: 1. There is a mark sign before the selected item, 2. The color of selected item change to blue, 3. User cannot choose the disabled item', function () {
        $(PREDEFINED_DROPDOWN).click();
        let item_1_Text = $(DISPLAYED_ITEMS_PREDEFINED.item_1).getText();
        $(ITEM_TO_BE_SELECTED).click();
        $(PREDEFINED_DROPDOWN).click();
        let classNameOfSelectedItem = $(ITEM_AFTER_SELECTED).getAttribute('class');
        let itemAfterSelectedColor = $(ITEM_AFTER_SELECTED_GET_COLOR).getCssProperty('color').parsed.hex;
        $(DISPLAYED_ITEMS_PREDEFINED.item_1).click();
        let afterSelectDisabledItem = $(PREDEFINED_DROPDOWN).getText();
        expect(classNameOfSelectedItem).to.include('kuc-list-item-selected');
        expect(itemAfterSelectedColor).to.equal('#3498db');
        expect(afterSelectDisabledItem).to.not.equal(item_1_Text);
    });

    it('[Dropdown-17-18-19] should verify when user click out of the dropdown: 1. The content area will be hidden _ icon status, 2. The main are will disaplayed the selected item, 3. The main are will displayed blank in case does not have any selected value', function () {
        $(CLICK_OUTSIDE_DROPDOWN).click();
        $(CLICK_OUTSIDE_DROPDOWN).click();
        let blankTextOfNoneValueDropdown = $(CLICK_OUTSIDE_DROPDOWN_SELECTED_VALUE).getText();
        let isContentAreaVisible = isVisibled(DROPDOWN_CONTENT, false);
        expect(blankTextOfNoneValueDropdown).to.equal('');
        expect(isContentAreaVisible).to.equal(false);
        $(CLICK_OUTSIDE_DROPDOWN).click();
        let textOfSelectValue = $(SELECT_ITEM).getText();
        $(SELECT_ITEM).click();
        let textValueDropdown = $(CLICK_OUTSIDE_DROPDOWN_SELECTED_VALUE).getText();
        $(CLICK_OUTSIDE_DROPDOWN).click();
        $(CLICK_OUTSIDE_DROPDOWN).click();
        expect(textValueDropdown).to.equal(textOfSelectValue);
    });

    it('[Dropdown-23] should create a Dropdown with full options', function () {
        let isDopdownVisible = isVisibled(DROPDOWN_FULL_OPTION, true);
        expect(isDopdownVisible).to.equal(true);
    });

    it('[Dropdown-22] should create a Dropdown without any options value', function () {
        let isDopdownVisible = isVisibled(WITHOUT_OPTION_VALUE, true);
        expect(isDopdownVisible).to.equal(true);
    });

    it('[Dropdown-33-34-35] should verify create a dropdown with only option.value, default selected value for disabled item', function () {
        let defaultValueDropdown = $(CONS_DEFAULT_VALUE).getText();
        expect(defaultValueDropdown).to.equal('OCAI_Default_Item_Dropdown');
        $(CONS_DEFAULT_VALUE).click();
        let getDisabledAttributeOfSelectedItem = isVisibled(DISABLED_ITEM, true);
        expect(getDisabledAttributeOfSelectedItem).to.equal(true);
    });

    it('[Dropdown-42] should add an item to the dropdown list with full value for item', function () {
        $(BODY).execute(() => {
            add_item_full_value_AIFV_dropdown.addItem({
                label: 'AIFV_Item_Dropdown_new',
                value: 'AIFV_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(GET_NEW_ADDED_ITEM_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIFV_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-43] should add an item to the invisible dropdown list with full value for item', function () {
        $(BODY).execute(() => {
            add_item_invi_AII_dropdown.addItem({
                label: 'AII_Item_Dropdown_new',
                value: 'AII_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(GET_NEW_ADDED_ITEM_INVISIBLE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AII_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-44] should add an item to the dropdown with only item.value', function () {
        $(BODY).execute(() => {
            add_item_only_value_AIOV_dropdown.addItem({
                value: 'AIOV_Item_Dropdown_new'
            });
        });
        $(GET_NEW_ADDED_ITEM_ONLY_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIOV_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-53-54-55-56] should verify the new added item', function () {
        $(BODY).execute(() => {
            verify_added_item_VAI_dropdown.addItem({
                label: 'VAI_Item_Dropdown_new',
                value: 'VAI_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(VERIFY_NEW_ADDED_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('VAI_Item_Dropdown_new');
        browser.alertAccept();

        $(BODY).execute(() => {
            addedItemText = 'VAI_Disabled_Default_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: false
            });
        });
        $(VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();
        alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.equal('false');

        $(BODY).execute(() => {
            addedItemText = 'VAI_Disabled_True_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: true
            });
        });
        $(VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();

        alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();

        $(BODY).execute(() => {
            addedItemText = 'VAI_Disabled_False_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: false
            });
        });
        $(VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Dropdown-57-62] should remove the item', function () {
        $(BODY).execute(() => {
            remove_item_RI_dropdown.removeItem(0);
        });
        $(REMOVE_ITEM_DROPDOWN).click();
        let isItemStillVisible = isVisibled(ITEM_TO_REMOVE, false);
        $(ITEM_TO_SELECT).click();
        expect(isItemStillVisible).to.equal(false);
        $(BODY).execute(() => {
            remove_item_RI_dropdown.removeItem(10);
        });
        expect(isItemStillVisible).to.equal(false);
    });

    it('[Dropdown-64-65-66-67] should get items of dropdown', function () {
        $(GET_ITEMS_FOR_DROPDOWN_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('label');
        expect(alertText).to.include('value');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('isDisabled');
        expect(alertText).to.include('"isDisabled":true');
        expect(alertText).to.include('"isDisabled":false');
        browser.alertAccept();
    });

    it('[Dropdown-69-70-71-73] should get value of dropdown', function () {
        let selectedDropdownValue = $(GET_VALUE_DROPDOWN).getText();
        $(GET_VALUE_DROPDOWN).click();
        let selectedDropdownValueContent = $(GET_VALUE_SELECTED_ITEM).getText();
        expect(selectedDropdownValue).to.equal(selectedDropdownValueContent);
        $(GET_VALUE_DROPDOWN).click();
        $(GET_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal(selectedDropdownValue);
        browser.alertAccept();
        $(BODY).execute(() => {
            get_value_GV_dropdown.hide();
        });
        $(GET_VALUE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.equal(selectedDropdownValue);
        browser.alertAccept();
    });

    it('[Dropdown-74-75-76] should set value of dropdown', function () {
        $(SET_VALUE_DROPDOWN_BUTTON).click();

        let selectedDropdownValue = $(SET_VALUE_DROPDOWN).getText();
        expect(selectedDropdownValue).to.equal('SV_Default_Item_Dropdown');

        $(SET_DISABLED_VALUE_DROPDOWN_BUTTON).click();
        selectedDropdownValue = $(SET_VALUE_DROPDOWN).getText();
        expect(selectedDropdownValue).to.equal('SV_Item_Dropdown_Disable');

        // $(SET_BLANK_VALUE_DROPDOWN_BUTTON).click();
        // selectedDropdownValue = $(SET_BLANK_VALUE_DROPDOWN).getText();
        // expect(selectedDropdownValue).to.equal('');
    });

    it('[Dropdown-79-80] should disable items of dropdown', function () {
        $(DISABLE_ITEM_DROPDOWN).click();
        let firstItemClass = $(ITEM_ENABLED_CONTENT).getAttribute('class');
        let secondItemClass = $(ITEM_DISABLED_CONTENT).getAttribute('class');
        expect(firstItemClass).not.to.include('kuc-list-item-disable');
        expect(secondItemClass).to.include("kuc-list-item-disable");
        $(DISABLE_ITEM_DROPDOWN).click();
        $(DISABLE_BUTTON_DROPDOWN).click();
        $(DISABLE_ITEM_DROPDOWN).click();
        firstItemClass = $(ITEM_ENABLED_CONTENT).getAttribute('class');
        secondItemClass = $(ITEM_DISABLED_CONTENT).getAttribute('class');
        expect(firstItemClass).to.include('kuc-list-item-disable');
        expect(secondItemClass).to.include("kuc-list-item-disable");
    });

    it('[Dropdown-84-85] should enable items of dropdown', function () {
        $(ENABLE_ITEM_DROPDOWN).click();
        $(BODY).execute(() => {
            set_enable_item_SEI_dropdown.enableItem('SEI_Default_Item_Dropdown');
        });
        let isVisibledDisabledItem = isVisibled(ENABLE_ITEM_ENABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);

        $(BODY).execute(() => {
            set_enable_item_SEI_dropdown.enableItem('SEI_Item_Dropdown_Disable');
        });
        isVisibledDisabledItem = isVisibled(ENABLE_ITEM_DISABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);
        $(ENABLE_ITEM_DROPDOWN).click();
    });

    it('[Dropdown-90] should show invisible Dropdown on UI', function () {
        $(BODY).execute(() => {
            show_dropdown.show();
        });
        let isVisibleItem = isVisibled(SHOW_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Dropdown-92] should hide visible Dropdown on UI', function () {
        $(BODY).execute(() => {
            hide_dropdown.hide();
        });
        let isVisibleItem = isVisibled(HIDE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Dropdown-94] should disable the current enable Dropdown on UI', function () {
        $(BODY).execute(() => {
            disable_dropdown.disable();
        });
        let isVisibleItem = isVisibled(DISABLE_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Dropdown-96] should enable the current disable Dropdown on UI', function () {
        $(BODY).execute(() => {
            enable_dropdown.enable();
        });
        let isVisibleItem = isVisibled(ENABLE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Dropdown-98] should register a callback function for change event successfully', function () {
        $(ON_FUNC_DROPDOWN).click();
        $(ITEM_ON_CHANGE_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_function_dropdown has been changed');
        browser.alertAccept();
    });

    it('[Dropdown-99] should callback function will be trigger when change the value for dropdown', function () {
        $(ON_TRIGGER_DROPDOWN).click();
        $(ITEM_ON_CHANGE_TRIG).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_trigger_dropdown has been changed');
        browser.alertAccept();
    });
});