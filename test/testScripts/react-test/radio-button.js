const common = require('../../utils/common');
const Helper = require('../../helper/main.js')

const XPATH_RADIO = '.radio-render .kuc-input-radio';
const XPATH_RADIO_RENDER = '.radio-render .kuc-input-radio-item input';
const XPATH_RADIO_ADD_ITEMS = '.radio-add .kuc-input-radio-item';
const XPATH_RADIO_ADD_ITEMS_BUTTON = '.radio-add .add-item';
const XPATH_RADIO_REMOVE_ITEMS = '.radio-remove .kuc-input-radio-item';
const XPATH_LABEL_REMOVE_ITEMS_BUTTON = '.radio-remove .remove-item';
const XPATH_RADIO_GET_ITEMS_BUTTON = '.radio-getItems .get-items';
const XPATH_RADIO_GET_VALUE_BUTTON = '.radio-getValue .get-value';
const XPATH_INVISIBLE_RADIO_GET_VALUE = '.invisibleRadio-getValue .kuc-input-radio-item';
const XPATH_INVISIBLE_RADIO_GET_VALUE_BUTTON = '.invisibleRadio-getValue .get-value';
const XPATH_RADIO_SET_VALUE_BUTTON = '.radio-setValue .set-value';
const XPATH_RADIO_ENABLE_ITEMS = '.radio-disableItemsEnable .kuc-input-radio-item :disabled';
const XPATH_RADIO_DISABLE_ITEMS_ENABLE_BUTTON = '.radio-disableItemsEnable .disable-item';
const XPATH_RADIO_DISABLE_ITEMS = '.radio-disableItemsDisbale .kuc-input-radio-item :disabled';
const XPATH_RADIO_DISABLE_ITEMS_DISABLE_BUTTON = '.radio-disableItemsDisbale .disable-item';
const XPATH_INVISIBLE_RADIO_ENABLE_ITEMS = '.radio-disableItemsDisbale .kuc-input-radio-item :disabled';
const XPATH_INVISIBLE_RADIO_DISABLE_ITEMS_BUTTON = '.radio-disableItemsDisbale .disable-item';
const XPATH_RADIO_ENABLE_ITEMS_DISABLE = '.radio-enableItemsDisable .kuc-input-radio-item :disabled';
const XPATH_RADIO_ENABLE_ITEMS_DISABLE_BUTTON = '.radio-enableItemsDisable .enable-item';
const XPATH_RADIO_ENABLE_ITEMS_ENABLE = '.radio-enableItemsEnable .kuc-input-radio-item :disabled';
const XPATH_RADIO_ENABLE_ITEMS_ENABLE_BUTTON = '.radio-enableItemsEnable .enable-item';
const XPATH_RADIO_SHOW = '.radio-show .kuc-input-radio-item';
const XPATH_RADIO_DISPLAY_BUTTON = '.radio-show .show-radio';
const XPATH_RADIO_HIDE = '.radio-hide .kuc-input-radio-item';
const XPATH_RADIO_NONDE_DISPLAY_BUTTON = '.radio-hide .hide-radio';
const XPATH_RADIO_DISABLE = '.radio-disable .kuc-input-radio-item :disabled';
const XPATH_RADIO_DISABLE_BUTTON = '.radio-disable .disable-radio';
const XPATH_RADIO_ENABLE = '.radio-enable .kuc-input-radio-item :disabled';
const XPATH_RADIO_ENABLE_BUTTON = '.radio-enable .enable-radio';
const XPATH_RADIO_ON_CALL_BUTTON = '//div[@class="radio-onCall"]//label[contains(text(),"Tiger")]';


describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[RadioButton-2] Verify that the Radio Button have the  UI is the same as Radio Button on kintone', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_RADIO)
            .verifyElementPosition(XPATH_RADIO, 'position', 'static')
            .verifyElementColor(XPATH_RADIO, 'color', '#333333')
    });

    it('[RadioButton-6] Verify that can create a Radio Button with full options default value', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_RADIO_RENDER, 'name', 'radio-render')
            .verifyElementDisplayed(XPATH_RADIO)
            .verifyElementEnabled(XPATH_RADIO)
    });

    it('[RadioButton-24-30] Verify that can add an item to the Radio Button list with full value for item', function () {
        let XPATH_RADIO_ADD_ITEMS_2 = ".radio-add .kuc-input-radio-item:nth-child(2)"
        Helper.ElementHandler
            .click(XPATH_RADIO_ADD_ITEMS_BUTTON)
            .verifyElementDisplayed(XPATH_RADIO_ADD_ITEMS)
            .verifyText(XPATH_RADIO_ADD_ITEMS_2, 'Lemon')
    });

    it('[RadioButton-37] Verify that can remove an item to the Radio Button list with full value for item', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_RADIO_REMOVE_ITEMS)
            .verifyText(XPATH_RADIO_REMOVE_ITEMS, 'Lemon')
            .click(XPATH_LABEL_REMOVE_ITEMS_BUTTON)
            .verifyElementNotDisplayed(XPATH_RADIO_REMOVE_ITEMS)
            .verifyElementNotExisting(XPATH_RADIO_REMOVE_ITEMS)
    });
    it('[RadioButton-46-47] Verify the return list have the same value of item with the Radio Button list', function () {
        var items = [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: false
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: true
            }
        ];
        Helper.ElementHandler
            .click(XPATH_RADIO_GET_ITEMS_BUTTON)
            .verifyAlertText(JSON.stringify(items))
    });
    it('[RadioButton-49] Verify that can get the value of the selected item', function () {
        Helper.ElementHandler
            .click(XPATH_RADIO_GET_VALUE_BUTTON)
            .verifyAlertText('Banana')
    });
    it('[RadioButton-52] Verify can get the value of the selected item for invisible radio button', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_INVISIBLE_RADIO_GET_VALUE)
            .click(XPATH_INVISIBLE_RADIO_GET_VALUE_BUTTON)
            .verifyAlertText('Banana')
    });
    it('[RadioButton-54] Verify can set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        const XPATH_RADIO_VALUE_FIRST = '.radio-setValue .kuc-input-radio-item:nth-child(1) :checked';
        const XPATH_RADIO_VALUE_SECOND = '.radio-setValue .kuc-input-radio-item:nth-child(2) :checked';
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_RADIO_VALUE_FIRST)
            .verifyElementExisting(XPATH_RADIO_VALUE_SECOND)
            .click(XPATH_RADIO_SET_VALUE_BUTTON)
            .verifyElementExisting(XPATH_RADIO_VALUE_FIRST)
            .verifyElementNotExisting(XPATH_RADIO_VALUE_SECOND)
    });
    it('[RadioButton-58] Verify can set disabled for existing enable item by the valid value of an item in radiobutton', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_RADIO_ENABLE_ITEMS)
            .click(XPATH_RADIO_DISABLE_ITEMS_ENABLE_BUTTON)
            .verifyElementExisting(XPATH_RADIO_ENABLE_ITEMS)
    });
    it('[RadioButton-59] Verify can set disabled for existing disable item by the valid value of an item in radiobutton', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_RADIO_DISABLE_ITEMS)
            .click(XPATH_RADIO_DISABLE_ITEMS_DISABLE_BUTTON)
            .verifyElementExisting(XPATH_RADIO_DISABLE_ITEMS)
    });
    it('[RadioButton-60] Verify can set disabled for existing enable item by the valid value for invisible radiobutton', function () {
        Helper.ElementHandler
            .click(XPATH_INVISIBLE_RADIO_DISABLE_ITEMS_BUTTON)
            .verifyElementExisting(XPATH_INVISIBLE_RADIO_ENABLE_ITEMS)
    });
    it('[RadioButton-63] Verify can set enable for existing disable item by the valid value of an item in radiobutton', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_RADIO_ENABLE_ITEMS_DISABLE)
            .click(XPATH_RADIO_ENABLE_ITEMS_DISABLE_BUTTON)
            .verifyElementNotExisting(XPATH_RADIO_ENABLE_ITEMS_DISABLE)
    });
    it('[RadioButton-64] Verify can set enabled for existing enable item by the valid value of an item in radiobutton', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_RADIO_ENABLE_ITEMS_ENABLE)
            .click(XPATH_RADIO_ENABLE_ITEMS_ENABLE_BUTTON)
            .verifyElementNotExisting(XPATH_RADIO_ENABLE_ITEMS_ENABLE)
    });
    it('[RadioButton-69] Verify that can show invisible radiobutton on UI', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_RADIO_SHOW)
            .click(XPATH_RADIO_DISPLAY_BUTTON)
            .verifyElementDisplayed(XPATH_RADIO_SHOW)
    });
    it('[RadioButton-71] Verify that can hide the visible radiobutton on UI', function () {
        Helper.ElementHandler
            .verifyElementDisplayed(XPATH_RADIO_HIDE)
            .click(XPATH_RADIO_NONDE_DISPLAY_BUTTON)
            .verifyElementNotDisplayed(XPATH_RADIO_HIDE)
    });
    it('[RadioButton-73] Verify that can disable the current enable radiobutton on UI', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_RADIO_DISABLE)
            .click(XPATH_RADIO_DISABLE_BUTTON)
            .verifyElementExisting(XPATH_RADIO_DISABLE)
    });
    it('[RadioButton-75] Verify that can enable the disabled radiobutton on UI', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_RADIO_ENABLE)
            .click(XPATH_RADIO_ENABLE_BUTTON)
            .verifyElementNotExisting(XPATH_RADIO_ENABLE)
    });
    it('[RadioButton-77-78] Verify that the callback function will be trigger when change the value for radiobutton', function () {
        Helper.ElementHandler
            .click(XPATH_RADIO_ON_CALL_BUTTON)
            .verifyAlertText('value: Tiger')
    });
});
