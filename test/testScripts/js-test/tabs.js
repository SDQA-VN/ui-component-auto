const common = require('../../utils/common');
const Helper = require('../../helper/main');
const expect = require('chai').expect

const CONSTRUCTOR_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const COMPONENT_CONTENT_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div[@id='component-container']";
const CONTENT_TABS = "//div[@id='constructor-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div";
const ADD_ITEM_TABS = "//div[@id='add-item-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const ADD_ITEM_CONTENT_TABS = "//div[@id='add-item-tabs']//div[@class='kuc-tabs-tabs']//div[@class='kuc-tabs-tab-contents']//div";
const ADD_ITEM_BUTTON_TABS = "//div[@id='add-item-tabs']//button[contains(text(), 'Add Item Tabs')]";
const REMOVE_ITEM_TABS = "//div[@id='remove-item-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const REMOVE_ITEM_BUTTON_TABS = "//div[@id='remove-item-tabs']//button[contains(text(), 'Remove Item Tabs')]";
const GET_ITEM_BUTTON_TABS = "//div[@id='get-item-tabs']//button[contains(text(), 'Get Item Tabs')]";
const GET_VALUE_BUTTON_TABS = "//div[@id='get-value-tabs']//button[contains(text(), 'Get Value Tabs')]";
const SET_VALUE_TABS = "//div[@id='set-value-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const SET_VALUE_BUTTON_TABS = "//div[@id='set-value-tabs']//button[contains(text(), 'Set Value Tabs')]";
const DISABLE_TABS = "//div[@id='disable-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const DISABLE_BUTTON_TABS = "//div[@id='disable-tabs']//button[contains(text(), 'Disable Tabs')]";
const ENABLE_TABS = "//div[@id='enable-tabs']//div[@class='kuc-tabs-tabs']//ul[@class='kuc-tabs-tab-list']//li";
const ENABLE_BUTTON_TABS = "//div[@id='enable-tabs']//button[contains(text(), 'Enable Tabs')]";


describe('kintoneUIComponent - Text', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Tabs-1-2-3-4-5-6-7-15] should Verify the operation of Tabs, all below components can be add to table as child component', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(CONSTRUCTOR_TABS, 4)
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-alert bg-success']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn normal']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn submit']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-checkbox']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='date-time-container']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-dropdown-container']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-fieldgroup']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//button[@class='kuc-icon-btn large  gray circle']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-label']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-multiple-list kuc-list-outer']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-radio']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-table']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//input[@class='kuc-input-text']")
            .verifyElementExists(COMPONENT_CONTENT_TABS + "//div[@class='kuc-textarea-outer']")
            .verifyAttribute(CONSTRUCTOR_TABS + '[1]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyText(CONSTRUCTOR_TABS, 'Tab1')
            .click(CONSTRUCTOR_TABS + '[2]')
            .verifyAttribute(CONSTRUCTOR_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyText(CONTENT_TABS, 'This is Tab2')
            .verifyAttribute(CONSTRUCTOR_TABS + '[1]', 'class', 'kuc-tabs-container')
            .click(CONSTRUCTOR_TABS + '[3]')
            .verifyText(CONTENT_TABS, "<script>alert('123');</script>")
            .verifyAttribute(CONSTRUCTOR_TABS + '[4]', 'class', 'kuc-tabs-container kuc-tabs-disabled')

        // // check the number of tabs
        // let classCount = $$(CONSTRUCTOR_TABS);
        // expect(classCount.length).to.equal(4);
        // //check components in tab content (DOM)
        // let checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-alert bg-success']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn normal']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//button[@class='kuc-btn submit']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-checkbox']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='date-time-container']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-dropdown-container']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-fieldgroup']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//button[@class='kuc-icon-btn large  gray circle']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-label']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-multiple-list kuc-list-outer']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-input-radio']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-table']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//input[@class='kuc-input-text']").isExisting();
        // expect(checkComponent).to.equal(true);
        // checkComponent = $(COMPONENT_CONTENT_TABS + "//div[@class='kuc-textarea-outer']").isExisting();
        // expect(checkComponent).to.equal(true);
        // //check switch selected tab + check tab content (String) in tab content + check isDisabled option
        // let checkSelected = $(CONSTRUCTOR_TABS + '[1]').getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container kuc-tabs-container-selection');
        // let getText = $$(CONSTRUCTOR_TABS)[0].getText();
        // expect(getText).to.equal('Tab1');
        // $$(CONSTRUCTOR_TABS)[1].click();
        // checkSelected = $$(CONSTRUCTOR_TABS)[1].getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container kuc-tabs-container-selection');
        // getText = $(CONTENT_TABS).getText();
        // expect(getText).to.equal('This is Tab2');
        // checkSelected = $$(CONSTRUCTOR_TABS)[0].getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container');
        // $$(CONSTRUCTOR_TABS)[2].click()
        // getText = $(CONTENT_TABS).getText();
        // expect(getText).to.equal("<script>alert('123');</script>");
        // let checkDisable = $$(CONSTRUCTOR_TABS)[3].getAttribute('class');
        // expect(checkDisable).to.equal('kuc-tabs-container kuc-tabs-disabled');
    });

    it('[Tabs-17] should Verify that add items into Tab with options: String and DOM', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(ADD_ITEM_TABS, 2)
            .click(ADD_ITEM_BUTTON_TABS)
            .verifyNumberOfElements(ADD_ITEM_TABS, 4)
            .click(ADD_ITEM_TABS + '[3]')
            .verifyText(ADD_ITEM_CONTENT_TABS, 'This is Tab3')
            .click(ADD_ITEM_TABS + '[4]')
            .verifyElementExists(ADD_ITEM_CONTENT_TABS + "//div[@class='kuc-alert bg-success']")

        //     // let classCount = $$(ADD_ITEM_TABS);
        //     // expect(classCount.length).to.equal(2);
        //     // $(ADD_ITEM_BUTTON_TABS).click();
        //     // classCount = $$(ADD_ITEM_TABS);
        //     // expect(classCount.length).to.equal(4);
        //     // $$(ADD_ITEM_TABS)[2].click();
        //     // let getText = $(ADD_ITEM_CONTENT_TABS).getText();
        //     // expect(getText).to.equal('This is Tab3');
        //     // $$(ADD_ITEM_TABS)[3].click();
        //     // let checkClass = $(ADD_ITEM_CONTENT_TABS + "//div[@class='kuc-alert bg-success']").isExisting();
        //     // expect(checkClass).to.equal(true);
    });

    it('[Tabs-23] should Verify that the items will be removed correctly with the position in the tab ', function () {
        Helper.ElementHandler
            .verifyNumberOfElements(REMOVE_ITEM_TABS, 3)
            .click(REMOVE_ITEM_BUTTON_TABS)
            .verifyNumberOfElements(REMOVE_ITEM_TABS, 2)
        // let classCount = $$(REMOVE_ITEM_TABS);
        // expect(classCount.length).to.equal(3);
        // $(REMOVE_ITEM_BUTTON_TABS).click();
        // classCount = $$(REMOVE_ITEM_TABS);
        // expect(classCount.length).to.equal(2);
    });

    it('[Tabs-26] should Verify that can get all items in tab including disabled items ', function () {
        Helper.ElementHandler
            .click(GET_ITEM_BUTTON_TABS)
            .verifyAlertText('[{"tabName":"Tab1","tabContent":"This is Tab1","isDisabled":true},{"tabName":"Tab2","tabContent":"This is Tab2","isDisabled":false}]')
        // $(GET_ITEM_BUTTON_TABS).click();
        // let alertText = browser.alertText();
        // expect(alertText).to.equal('[{"tabName":"Tab1","tabContent":"This is Tab1","isDisabled":true},{"tabName":"Tab2","tabContent":"This is Tab2","isDisabled":false}]');
        // browser.alertAccept();
    });

    it('[Tabs-29] should Verify that can get value of the selected item ', function () {
        Helper.ElementHandler
            .click(GET_VALUE_BUTTON_TABS)
            .verifyAlertText('0')
        // $(GET_VALUE_BUTTON_TABS).click();
        // let alertText = browser.alertText();
        // expect(alertText).to.equal('0');
        // browser.alertAccept();
    });

    it('[Tabs-32] should Verify that can set the selected value for items in the tab ', function () {
        Helper.ElementHandler
            .verifyAttribute(SET_VALUE_TABS + '[1]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .click(SET_VALUE_BUTTON_TABS)
            .verifyAttribute(SET_VALUE_TABS + '[2]', 'class', 'kuc-tabs-container kuc-tabs-container-selection')
            .verifyAttribute(SET_VALUE_TABS + '[1]', 'class', 'kuc-tabs-container')
        // let checkSelected = $$(SET_VALUE_TABS)[0].getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container kuc-tabs-container-selection');
        // $(SET_VALUE_BUTTON_TABS).click();
        // checkSelected = $$(SET_VALUE_TABS)[1].getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container kuc-tabs-container-selection');
        // checkSelected = $$(SET_VALUE_TABS)[0].getAttribute('class');
        // expect(checkSelected).to.equal('kuc-tabs-container');
    });

    it('[Tabs-37-38] should Verify that can set disable for existing enabled item in the Tab and existing disabled item in the Tab', function () {
        Helper.ElementHandler
            .verifyAttribute(DISABLE_TABS + '[1]','class','kuc-tabs-container kuc-tabs-container-selection')
            .verifyAttribute(DISABLE_TABS + '[2]','class','kuc-tabs-container kuc-tabs-disabled')
            .click(DISABLE_BUTTON_TABS)
            .verifyAttribute(DISABLE_TABS + '[1]','class','kuc-tabs-container kuc-tabs-disabled')
            .verifyAttribute(DISABLE_TABS + '[2]','class','kuc-tabs-container kuc-tabs-disabled')

        // let checkDisabled = $$(DISABLE_TABS)[0].getAttribute('class');
        // expect(checkDisabled).to.equal('kuc-tabs-container kuc-tabs-container-selection');
        // checkDisabled = $$(DISABLE_TABS)[1].getAttribute('class');
        // expect(checkDisabled).to.equal('kuc-tabs-container kuc-tabs-disabled');
        // $(DISABLE_BUTTON_TABS).click();
        // checkDisabled = $$(DISABLE_TABS)[0].getAttribute('class');
        // expect(checkDisabled).to.equal('kuc-tabs-container kuc-tabs-disabled');
        // checkDisabled = $$(DISABLE_TABS)[1].getAttribute('class');
        // expect(checkDisabled).to.equal('kuc-tabs-container kuc-tabs-disabled');
    });

    it('should Verify that can set enable for existing disabled item in the Tab and existing enabled item in the Tab \n[Tabs-41-42]', function () {
        Helper.ElementHandler
        .verifyAttribute(ENABLE_TABS + '[1]','class','kuc-tabs-container kuc-tabs-container-selection kuc-tabs-disabled')
        .verifyAttribute(ENABLE_TABS + '[2]','class','kuc-tabs-container')
        .click(ENABLE_BUTTON_TABS)
        .verifyAttribute(ENABLE_TABS + '[1]','class','kuc-tabs-container')
        .verifyAttribute(ENABLE_TABS + '[2]','class','kuc-tabs-container')
        // let checkEnabled = $$(ENABLE_TABS)[0].getAttribute('class');
        // expect(checkEnabled).to.equal('kuc-tabs-container kuc-tabs-container-selection kuc-tabs-disabled');
        // checkEnabled = $$(ENABLE_TABS)[1].getAttribute('class');
        // expect(checkEnabled).to.equal('kuc-tabs-container');
        // $(ENABLE_BUTTON_TABS).click();
        // checkEnabled = $$(ENABLE_TABS)[0].getAttribute('class');
        // expect(checkEnabled).to.equal('kuc-tabs-container');
        // checkEnabled = $$(ENABLE_TABS)[1].getAttribute('class');
        // expect(checkEnabled).to.equal('kuc-tabs-container');
    });
});