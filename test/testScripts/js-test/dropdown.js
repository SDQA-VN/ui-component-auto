const $ = require('../../utils/ReturnElement').singleElement;
const $$ = require('../../utils/ReturnElement').listOfElements;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/common');
const expect = require('chai').expect;
const xpath = require('../../xpath/js-test/dropdown.xpath');

describe('kintoneUIComponent - Dropdown', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Dropdown-2-3-4] should verify that the Dropdown have the  UI is the same as Dropdown on kintone', function () {
        let dropdownBgColor = $(xpath.XPATH_UI_DROPDOWN).getCssProperty('color');
        let dropdownSize = browser.getElementSize(xpath.XPATH_UI_DROPDOWN);
        $(xpath.XPATH_UI_CLICK_DROPDOWN).click();
        let dropdownOuterColor = $(xpath.XPATH_UI_DROPDOWN_OUTER).getCssProperty('color');
        let dropdownOuterSize = browser.getElementSize(xpath.XPATH_UI_DROPDOWN_OUTER);
        $(xpath.XPATH_UI_CLICK_DROPDOWN).click();

        expect(dropdownBgColor.parsed.hex).to.equal('#3498db');
        expect(dropdownSize.width).to.equal(dropdownSize.width);
        expect(dropdownSize.height).to.equal(dropdownSize.height);
        expect(dropdownOuterColor.parsed.hex).to.equal('#333333');
        expect(dropdownOuterSize.width).to.equal(dropdownOuterSize.width);
        expect(dropdownOuterSize.height).to.equal(dropdownOuterSize.height);

        $(xpath.XPATH_UI_DROPDOWN_GET_STATE_BTN).click();
        let alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.include('"isDisabled":true');
        expect(alertText).to.include('"isDisabled":false');
        $(xpath.XPATH_UI_NOTE_HAVE_ITEM_DROPDOWN_GET_STATE_BTN).click();
        alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.include('');
    });

    it('[Dropdown-] should verify that when hover item change background color #e2f2fe and when move out of item change background color to white ', function () {
          $(xpath.XPATH_UI_HOVER_DROPDOWN_BTN).click();
          browser.moveToObject(xpath.XPATH_UI_HOVER_DROPDOWN_ITEM);
          let checkHover = browser.isExisting('.kuc-list-item:hover');
          let checkColor = $(xpath.XPATH_UI_HOVER_DROPDOWN_ITEM).getCssProperty('background-color');
          expect(checkHover).to.equal(true);
          expect(checkColor.parsed.hex).to.equal('#e2f2fe');
          browser.moveToObject(xpath.XPATH_UI_HOVER_DROPDOWN_BTN);
          checkHover = browser.isExisting('.kuc-list-item:hover');
          expect(checkHover).to.equal(false);
    });

    it('[Dropdown-6] should verify the content doesn’t displayed', function () {
        let isContentDisplayed = false;
        let item1Visible = isVisibled(xpath.XPATH_OPERATION_CONTENT["item_1"], false);
        let item2Visible = isVisibled(xpath.XPATH_OPERATION_CONTENT["item_2"], false);
        if (item1Visible === false && item2Visible === false)
        {
            isContentDisplayed === false;
        } else {
            isContentDisplayed === true;
        }
        expect(isContentDisplayed).to.equal(false);
    });

    it('[Dropdown-7] should verify the main area display blank if no selected item', function () {
        let valueOfNoneSelectedItem = $(xpath.XPATH_BLANK_SELECTED).getText();
        expect(valueOfNoneSelectedItem).to.equal('');
    });

    it('[Dropdown-8] should verify the main area will display the selected value', function () {
        let valueOfSelectedItem = $(xpath.XPATH_DEFAULT_SELECTED).getText();
        expect(valueOfSelectedItem).to.equal('ODSD_Default_Item_Dropdown');
    });

    it('[Dropdown-10] should display the content area below the main area', function () {
        $(xpath.XPATH_DROPDOWN_CLICK).click();
        let isContentVisibled = isVisibled(xpath.XPATH_CONTENT_AREA, true);
        expect(isContentVisibled).to.equal(true);
    });

    it('[Dropdown-11] should display the content area list of predefiend item (including disable item)', function () {
        $(xpath.XPATH_GET_PREDEFINED_ITEMS_BUTTON).click();
        let alertText_listOfPredefinedItems = browser.alertText();
        browser.alertAccept();
        $(xpath.XPATH_PREDEFINED_DROPDOWN).click();
        let isContentVisible = isVisibled(xpath.XPATH_CONTENT_AREA_PREDEFINED, true);
        let item_1_Text = $(xpath.XPATH_DISPLAYED_ITEMS_PREDEFINED.item_1).getText();
        let item_2_Text = $(xpath.XPATH_DISPLAYED_ITEMS_PREDEFINED.item_2).getText();
        if(isContentVisible){
            expect(alertText_listOfPredefinedItems).to.include(item_1_Text);
            expect(alertText_listOfPredefinedItems).to.include(item_2_Text);
            $(xpath.XPATH_DISPLAYED_ITEMS_PREDEFINED.item_2).click();
        }
    });

    it('[Dropdown-13-14-15] should verify when user choose any items in the list: 1. There is a mark sign before the selected item, 2. The color of selected item change to blue, 3. User cannot choose the disabled item', function () {
        $(xpath.XPATH_PREDEFINED_DROPDOWN).click();
        let item_1_Text = $(xpath.XPATH_DISPLAYED_ITEMS_PREDEFINED.item_1).getText();
        $(xpath.XPATH_ITEM_TO_BE_SELECTED).click();
        $(xpath.XPATH_PREDEFINED_DROPDOWN).click();
        let classNameOfSelectedItem = $(xpath.XPATH_ITEM_AFTER_SELECTED).getAttribute('class');
        let itemAfterSelectedColor = $(xpath.XPATH_ITEM_AFTER_SELECTED_GET_COLOR).getCssProperty('color').parsed.hex;
        $(xpath.XPATH_DISPLAYED_ITEMS_PREDEFINED.item_1).click();
        let afterSelectDisabledItem = $(xpath.XPATH_PREDEFINED_DROPDOWN).getText();
        expect(classNameOfSelectedItem).to.include('kuc-list-item-selected');
        expect(itemAfterSelectedColor).to.equal('#3498db');
        expect(afterSelectDisabledItem).to.not.equal(item_1_Text);
    });

    it('[Dropdown-17-18-19] should verify when user click out of the dropdown: 1. The content area will be hidden _ icon status, 2. The main are will disaplayed the selected item, 3. The main are will displayed blank in case does not have any selected value', function () {
        $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN).click();
        $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN).click();
        let blankTextOfNoneValueDropdown = $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN_SELECTED_VALUE).getText();
        let isContentAreaVisible = isVisibled(xpath.XPATH_DROPDOWN_CONTENT, false);
        expect(blankTextOfNoneValueDropdown).to.equal('');
        expect(isContentAreaVisible).to.equal(false);
        $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN).click();
        let textOfSelectValue = $(xpath.XPATH_SELECT_ITEM).getText();
        $(xpath.XPATH_SELECT_ITEM).click();
        let textValueDropdown = $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN_SELECTED_VALUE).getText();
        $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN).click();
        $(xpath.XPATH_CLICK_OUTSIDE_DROPDOWN).click();
        expect(textValueDropdown).to.equal(textOfSelectValue);
    });

    it('[Dropdown-23] should create a Dropdown with full options', function () {
        let isDopdownVisible = isVisibled(xpath.XPATH_DROPDOWN_FULL_OPTION, true);
        expect(isDopdownVisible).to.equal(true);
    });

    it('[Dropdown-22] should create a Dropdown without any options value', function () {
        let isDopdownVisible = isVisibled(xpath.XPATH_WITHOUT_OPTION_VALUE, true);
        expect(isDopdownVisible).to.equal(true);
    });

    it('[Dropdown-33-34-35] should verify create a dropdown with only option.value, default selected value for disabled item', function () {  
        let defaultValueDropdown = $(xpath.XPATH_CONS_DEFAULT_VALUE).getText();
        expect(defaultValueDropdown).to.equal('OCAI_Default_Item_Dropdown');
        $(xpath.XPATH_CONS_DEFAULT_VALUE).click();
        let getDisabledAttributeOfSelectedItem = isVisibled(xpath.XPATH_DISABLED_ITEM, true);
        expect(getDisabledAttributeOfSelectedItem).to.equal(true);
    });

    it('[Dropdown-42] should add an item to the dropdown list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_full_value_AIFV_dropdown.addItem({
                label: 'AIFV_Item_Dropdown_new',
                value: 'AIFV_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIFV_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-43] should add an item to the invisible dropdown list with full value for item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_invi_AII_dropdown.addItem({
                label: 'AII_Item_Dropdown_new',
                value: 'AII_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_INVISIBLE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AII_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-44] should add an item to the dropdown with only item.value', function () {
        $(xpath.XPATH_BODY).execute(() => {
            add_item_only_value_AIOV_dropdown.addItem({
                value: 'AIOV_Item_Dropdown_new'
            });
        });
        $(xpath.XPATH_GET_NEW_ADDED_ITEM_ONLY_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('AIOV_Item_Dropdown_new');
        browser.alertAccept();
    });

    it('[Dropdown-53-54-55-56] should verify the new added item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            verify_added_item_VAI_dropdown.addItem({
                label: 'VAI_Item_Dropdown_new',
                value: 'VAI_Item_Dropdown_new',
                isDisabled: false
            });
        });
        $(xpath.XPATH_VERIFY_NEW_ADDED_ITEM).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('VAI_Item_Dropdown_new');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            addedItemText = 'VAI_Disabled_Default_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: false
            });
        });
        $(xpath.XPATH_VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();
        alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.equal('false');
    
        $(xpath.XPATH_BODY).execute(() => {
            addedItemText = 'VAI_Disabled_True_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: true
            });
        });
        $(xpath.XPATH_VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();
        
        alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();

        $(xpath.XPATH_BODY).execute(() => {
            addedItemText = 'VAI_Disabled_False_Item_Dropdown_new';
            verify_added_item_VAI_dropdown.addItem({
                label: addedItemText,
                value: addedItemText,
                isDisabled: false
            });
        });
        $(xpath.XPATH_VERIFY_NEW_ADDED_ITEM_WITH_DISABLED_ATTR).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
     });

    it('[Dropdown-57-62] should remove the item', function () {
        $(xpath.XPATH_BODY).execute(() => {
            remove_item_RI_dropdown.removeItem(0);
        });
        $(xpath.XPATH_REMOVE_ITEM_DROPDOWN).click();
        let isItemStillVisible = isVisibled(xpath.XPATH_ITEM_TO_REMOVE, false);
        $(xpath.XPATH_ITEM_TO_SELECT).click();
        expect(isItemStillVisible).to.equal(false);
        $(xpath.XPATH_BODY).execute(() => {
            remove_item_RI_dropdown.removeItem(10);
        });
        expect(isItemStillVisible).to.equal(false);
    });

    it('[Dropdown-64-65-66-67] should get items of dropdown', function () {
        $(xpath.XPATH_GET_ITEMS_FOR_DROPDOWN_BTN).click();
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
        let selectedDropdownValue = $(xpath.XPATH_GET_VALUE_DROPDOWN).getText();
        $(xpath.XPATH_GET_VALUE_DROPDOWN).click();
        let selectedDropdownValueContent = $(xpath.XPATH_GET_VALUE_SELECTED_ITEM).getText();
        expect(selectedDropdownValue).to.equal(selectedDropdownValueContent);
        $(xpath.XPATH_GET_VALUE_DROPDOWN).click();
        $(xpath.XPATH_GET_VALUE_BTN).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal(selectedDropdownValue);
        browser.alertAccept();
        $(xpath.XPATH_BODY).execute(() => {
            get_value_GV_dropdown.hide();
        });
        $(xpath.XPATH_GET_VALUE_BTN).click();
        alertText = browser.alertText();
        expect(alertText).to.equal(selectedDropdownValue);
        browser.alertAccept();
    });

    it('[Dropdown-74-75-76] should set value of dropdown', function () {
        $(xpath.XPATH_SET_VALUE_DROPDOWN_BUTTON).click();
    
        let selectedDropdownValue = $(xpath.XPATH_SET_VALUE_DROPDOWN).getText();
        expect(selectedDropdownValue).to.equal('SV_Default_Item_Dropdown');

        $(xpath.XPATH_SET_DISABLED_VALUE_DROPDOWN_BUTTON).click();
        selectedDropdownValue = $(xpath.XPATH_SET_VALUE_DROPDOWN).getText();
        expect(selectedDropdownValue).to.equal('SV_Item_Dropdown_Disable');

        // $(xpath.XPATH_SET_BLANK_VALUE_DROPDOWN_BUTTON).click();
        // selectedDropdownValue = $(xpath.XPATH_SET_BLANK_VALUE_DROPDOWN).getText();
        // expect(selectedDropdownValue).to.equal('');
    });

    it('[Dropdown-79-80] should disable items of dropdown', function () {
        $(xpath.XPATH_DISABLE_ITEM_DROPDOWN).click();
        let firstItemClass = $(xpath.XPATH_ITEM_ENABLED_CONTENT).getAttribute('class');
        let secondItemClass = $(xpath.XPATH_ITEM_DISABLED_CONTENT).getAttribute('class');
        expect(firstItemClass).not.to.include('kuc-list-item-disable');
        expect(secondItemClass).to.include("kuc-list-item-disable");
        $(xpath.XPATH_DISABLE_ITEM_DROPDOWN).click();
        $(xpath.XPATH_DISABLE_BUTTON_DROPDOWN).click();
        $(xpath.XPATH_DISABLE_ITEM_DROPDOWN).click();
        firstItemClass = $(xpath.XPATH_ITEM_ENABLED_CONTENT).getAttribute('class');
        secondItemClass = $(xpath.XPATH_ITEM_DISABLED_CONTENT).getAttribute('class');
        expect(firstItemClass).to.include('kuc-list-item-disable');
        expect(secondItemClass).to.include("kuc-list-item-disable");
    });

    it('[Dropdown-84-85] should enable items of dropdown', function () {
        $(xpath.XPATH_ENABLE_ITEM_DROPDOWN).click();
        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_dropdown.enableItem('SEI_Default_Item_Dropdown');
        });
        let isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_ENABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);

        $(xpath.XPATH_BODY).execute(() => {
            set_enable_item_SEI_dropdown.enableItem('SEI_Item_Dropdown_Disable');
        });
        isVisibledDisabledItem = isVisibled(xpath.XPATH_ENABLE_ITEM_DISABLED_CONTENT, false);
        expect(isVisibledDisabledItem).to.equal(false);
        $(xpath.XPATH_ENABLE_ITEM_DROPDOWN).click();
    });

    it('[Dropdown-90] should show invisible Dropdown on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            show_dropdown.show();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_SHOW_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });
    
    it('[Dropdown-92] should hide visible Dropdown on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            hide_dropdown.hide();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_HIDE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Dropdown-94] should disable the current enable Dropdown on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            disable_dropdown.disable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_DISABLE_DROPDOWN, true);
        expect(isVisibleItem).to.equal(true);
    });

    it('[Dropdown-96] should enable the current disable Dropdown on UI', function () {
        $(xpath.XPATH_BODY).execute(() => {
            enable_dropdown.enable();
        });
        let isVisibleItem = isVisibled(xpath.XPATH_ENABLE_DROPDOWN, false);
        expect(isVisibleItem).to.equal(false);
    });

    it('[Dropdown-98] should register a callback function for change event successfully', function () {
        $(xpath.XPATH_ON_FUNC_DROPDOWN).click();
        $(xpath.XPATH_ITEM_ON_CHANGE_FUNC).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_function_dropdown has been changed');
        browser.alertAccept();
    });

    it('[Dropdown-99] should callback function will be trigger when change the value for dropdown', function () {
        $(xpath.XPATH_ON_TRIGGER_DROPDOWN).click();
        $(xpath.XPATH_ITEM_ON_CHANGE_TRIG).click();
        let alertText = browser.alertText();
        expect(alertText).to.include('on_trigger_dropdown has been changed');
        browser.alertAccept();
    });
 });