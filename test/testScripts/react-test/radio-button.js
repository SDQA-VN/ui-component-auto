const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

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
        let radioColor = $(XPATH_RADIO).getCssProperty('color');
        let radioPosition = $(XPATH_RADIO).getCssProperty('position');
        expect(radioColor.parsed.hex).to.equal('#333333');
        expect(radioPosition.value).to.equal('static');
    });

    it('[RadioButton-6] Verify that can create a Radio Button with full options default value', function () {
        let radioName = browser.getAttribute(XPATH_RADIO_RENDER, 'name')[0]
        let radioVisible = browser.isVisible(XPATH_RADIO)
        let radioEnable = browser.isEnabled(XPATH_RADIO)
        expect(radioName).to.equal('radio-render');
        expect(radioVisible).to.equal(true);
        expect(radioEnable).to.equal(true);
    });

    it('[RadioButton-24-30] Verify that can add an item to the Radio Button list with full value for item', function () {
        $(XPATH_RADIO_ADD_ITEMS_BUTTON).click()
        let radioVisible = browser.isVisible(XPATH_RADIO_ADD_ITEMS)[1]
        let radioValue = browser.getText(XPATH_RADIO_ADD_ITEMS)[1]
        expect(radioVisible).to.equal(true);
        expect(radioValue).to.equal('Lemon');
    });

    it('[RadioButton-37] Verify that can remove an item to the Radio Button list with full value for item', function () {
        let radioBefore = browser.isVisible(XPATH_RADIO_REMOVE_ITEMS)
        let radioValue = browser.getText(XPATH_RADIO_REMOVE_ITEMS)
        expect(radioBefore).to.equal(true);
        expect(radioValue).to.equal('Lemon');
        $(XPATH_LABEL_REMOVE_ITEMS_BUTTON).click()
        let radioAfter = browser.isVisible(XPATH_RADIO_REMOVE_ITEMS)
        expect(radioAfter).to.equal(false);
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
        $(XPATH_RADIO_GET_ITEMS_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal(JSON.stringify(items));
        browser.alertAccept();
    });
    it('[RadioButton-49] Verify that can get the value of the selected item', function () {
        $(XPATH_RADIO_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Banana');
        browser.alertAccept();
    });
    it('[RadioButton-52] Verify can get the value of the selected item for invisible radio button', function () {
        let radioVisible = browser.isVisible(XPATH_INVISIBLE_RADIO_GET_VALUE)
        expect(radioVisible).to.equal(false);
        $(XPATH_INVISIBLE_RADIO_GET_VALUE_BUTTON).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Banana');
        browser.alertAccept();
    });
    it('[RadioButton-54] Verify can set the selected value for radiobutton by valid value of an item in radiobutton', function () {
        const XPATH_RADIO_VALUE_FIRST = '.radio-setValue .kuc-input-radio-item:nth-child(1) :checked';
        const XPATH_RADIO_VALUE_SECOND = '.radio-setValue .kuc-input-radio-item:nth-child(2) :checked';
        let valueFirstBefore = browser.isExisting(XPATH_RADIO_VALUE_FIRST)
        let valueSecondBefore = browser.isExisting(XPATH_RADIO_VALUE_SECOND)
        expect(valueFirstBefore).to.equal(false);
        expect(valueSecondBefore).to.equal(true);
        $(XPATH_RADIO_SET_VALUE_BUTTON).click()
        let valueFirstAfter = browser.isExisting(XPATH_RADIO_VALUE_FIRST)
        let valueSecondAfter = browser.isExisting(XPATH_RADIO_VALUE_SECOND)
        expect(valueFirstAfter).to.equal(true);
        expect(valueSecondAfter).to.equal(false);
    });
    it('[RadioButton-58] Verify can set disabled for existing enable item by the valid value of an item in radiobutton', function () {
        let radioExistBefore = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS)
        expect(radioExistBefore).to.equal(false);
        $(XPATH_RADIO_DISABLE_ITEMS_ENABLE_BUTTON).click();
        let radioExistAfter = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS)
        expect(radioExistAfter).to.equal(true);
    });
    it('[RadioButton-59] Verify can set disabled for existing disable item by the valid value of an item in radiobutton', function () {
        let radioExistBefore = browser.isExisting(XPATH_RADIO_DISABLE_ITEMS)
        expect(radioExistBefore).to.equal(true);
        $(XPATH_RADIO_DISABLE_ITEMS_DISABLE_BUTTON).click();
        let radioExistAfter = browser.isExisting(XPATH_RADIO_DISABLE_ITEMS)
        expect(radioExistAfter).to.equal(true);
    });
    it('[RadioButton-60] Verify can set disabled for existing enable item by the valid value for invisible radiobutton', function () {
        $(XPATH_INVISIBLE_RADIO_DISABLE_ITEMS_BUTTON).click();
        let radioExistAfter = browser.isExisting(XPATH_INVISIBLE_RADIO_ENABLE_ITEMS)
        expect(radioExistAfter).to.equal(true);
    });
    it('[RadioButton-63] Verify can set enable for existing disable item by the valid value of an item in radiobutton', function () {
        let radioExistBefore = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS_DISABLE)
        expect(radioExistBefore).to.equal(true);
        $(XPATH_RADIO_ENABLE_ITEMS_DISABLE_BUTTON).click();
        let radioExistAfter = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS_DISABLE)
        expect(radioExistAfter).to.equal(false);
    });
    it('[RadioButton-64] Verify can set enabled for existing enable item by the valid value of an item in radiobutton', function () {
        let radioExistBefore = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS_ENABLE)
        expect(radioExistBefore).to.equal(false);
        $(XPATH_RADIO_ENABLE_ITEMS_ENABLE_BUTTON).click();
        let radioExistAfter = browser.isExisting(XPATH_RADIO_ENABLE_ITEMS_ENABLE)
        expect(radioExistAfter).to.equal(false);
    });
    it('[RadioButton-69] Verify that can show invisible radiobutton on UI', function () {
        let radioVisibleBefore = browser.isVisible(XPATH_RADIO_SHOW)
        expect(radioVisibleBefore).to.equal(false);
        $(XPATH_RADIO_DISPLAY_BUTTON).click();
        let radioVisibleAfter = browser.isVisible(XPATH_RADIO_SHOW)
        expect(radioVisibleAfter).to.equal(true);
    });
    it('[RadioButton-71] Verify that can hide the visible radiobutton on UI', function () {
        let radioVisibleBefore = browser.isVisible(XPATH_RADIO_HIDE)
        expect(radioVisibleBefore).to.equal(true);
        $(XPATH_RADIO_NONDE_DISPLAY_BUTTON).click();
        let radioVisibleAfter = browser.isVisible(XPATH_RADIO_HIDE)
        expect(radioVisibleAfter).to.equal(false);
    });
    it('[RadioButton-73] Verify that can disable the current enable radiobutton on UI', function () {
        let radioVisibleBefore = browser.isExisting(XPATH_RADIO_DISABLE)
        expect(radioVisibleBefore).to.equal(false);
        $(XPATH_RADIO_DISABLE_BUTTON).click();
        let radioVisibleAfter = browser.isExisting(XPATH_RADIO_DISABLE)
        expect(radioVisibleAfter).to.equal(true);
    });
    it('[RadioButton-75] Verify that can enable the disabled radiobutton on UI', function () {
        let radioVisibleBefore = browser.isExisting(XPATH_RADIO_ENABLE)
        expect(radioVisibleBefore).to.equal(true);
        $(XPATH_RADIO_ENABLE_BUTTON).click();
        let radioVisibleAfter = browser.isExisting(XPATH_RADIO_ENABLE)
        expect(radioVisibleAfter).to.equal(false);
    });
    it('[RadioButton-77-78] Verify that the callback function will be trigger when change the value for radiobutton', function () {
        $(XPATH_RADIO_ON_CALL_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('value: Tiger');
        browser.alertAccept();
    });
});
