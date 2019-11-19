const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../util/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_DATETIME_FULL_OPTION = '.dateTime_full_optionEl .date-time-container'
const XPATH_DATETIME_FULL_OPTION_DATE = '.dateTime_full_optionEl .text-input-container .kuc-input-text'
const XPATH_DATETIME_FULL_OPTION_TIME = '.dateTime_full_optionEl .time-container .kuc-input-text.time'
const XPATH_DATE_FULL_OPTION = '.date_full_optionEl .text-input-container .kuc-input-text'
const XPATH_TIME_FULL_OPTION = '.time_full_optionEl .time-container .kuc-input-text.time'

const XPATH_DATETIME_FULL_OPTION_SELECT_DATE = '.dateTime_full_optionEl .days-container span:nth-child(25)'
const XPATH_DATETIME_FULL_OPTION_SELECT_TIME = '.dateTime_full_optionEl .time-picker-container span:nth-child(1)'

const XPATH_GET_VALUE_DATE_COMPONENT_BUTTON = '.datetime_get_value_date_component_button'
const XPATH_GET_VALUE_TIME_COMPONENT_BUTTON = '.datetime_get_value_time_component_button'
const XPATH_GET_VALUE_DATETIME_COMPONENT_BUTTON = '.datetime_get_value_datetime_component_button'

const XPATH_SET_VALUE_DATE_COMPONENT_BUTTON = '.datetime_set_value_date_component_button'
const XPATH_SET_VALUE_DATE = '.datetime_set_value_date_componentEl .text-input-container .kuc-input-text'
const XPATH_SET_VALUE_TIME_COMPONENT_BUTTON = '.datetime_set_value_time_component_button'
const XPATH_SET_VALUE_TIME = '.datetime_set_value_time_componentEl .time-container .kuc-input-text.time'
const XPATH_SET_VALUE_DATETIME_COMPONENT_BUTTON =  '.datetime_set_value_datetime_component_button'
const XPATH_SET_VALUE_DATETIME_DATE = '.datetime_set_value_datetime_componentEl .text-input-container .kuc-input-text'
const XPATH_SET_VALUE_DATETIME_TIME = '.datetime_set_value_datetime_componentEl .time-container .kuc-input-text.time'

const XPATH_GET_LOCALE_DATE_COMPONENT_BUTTON = '.datetime_get_locale_date_component_button'
const XPATH_GET_LOCALE_TIME_COMPONENT_BUTTON = '.datetime_get_locale_time_component_button'
const XPATH_GET_LOCALE_DATETIME_COMPONENT_BUTTON = '.datetime_get_locale_datetime_component_button'

const XPATH_SET_LOCALE_DATE_COMPONENT_EXISTING_LOCALE_BUTTON = '.datetime_set_locale_date_component_existing_locale_button'
const XPATH_GET_LOCALE_DATE_COMPONENT_AFTER_SET_LOCALE_BUTTON = '.datetime_get_locale_date_component_after_set_locale_button'
const XPATH_SET_LOCALE_TIME_COMPONENT_EXISTING_LOCALE_BUTTON = '.datetime_set_locale_time_component_existing_locale_button'
const XPATH_GET_LOCALE_TIME_COMPONENT_AFTER_SET_LOCALE_BUTTON = '.datetime_get_locale_time_component_after_set_locale_button'
const XPATH_SET_LOCALE_DATETIME_COMPONENT_EXISTING_LOCALE_BUTTON = '.datetime_set_locale_datetime_component_existing_locale_button'
const XPATH_GET_LOCALE_DATETIME_COMPONENT_AFTER_SET_LOCALE_BUTTON = '.datetime_get_locale_datetime_component_after_set_locale_button'

const XPATH_SHOW_INVISIBLE_DATETIME_BUTTON = '.show_invisible_datetime_button'
const XPATH_INVISIBLE_DATETIME = '.invisible_datetimeEl .date-time-container'
const XPATH_HIDE_VISIBLE_DATETIME_BUTTON = '.hide_visible_datetime_button'
const XPATH_VISIBLE_DATETIME = '.visible_datetimeEl .date-time-container'

const XPATH_DISABLE_ENABLED_DATETIME_BUTTON = '.disable_enabled_datetime_button'
const XPATH_ENABLED_DATETIME_DATE = '.enabled_datetimeEl .text-input-container .kuc-input-text'
const XPATH_ENABLED_DATETIME_TIME = '.enabled_datetimeEl .time-container .kuc-input-text.time'
const XPATH_ENABLE_DISABLED_DATETIME_BUTTON = '.enable_disabled_datetime_button'
const XPATH_DISABLED_DATETIME_DATE = '.disabled_datetimeEl .text-input-container .kuc-input-text'
const XPATH_DISABLED_DATETIME_TIME = '.disabled_datetimeEl .time-container .kuc-input-text.time'

describe('kintoneUIComponent - Datetime', function() {
    before(() => {
        common.logInSlash();
    });

    after(() => {
        common.logOutSlash();
    });

    it('[Datetime-2] Verify that the DateTime form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(XPATH_DATETIME_FULL_OPTION).getCssProperty('background-color');
        let dateSize = browser.getElementSize(XPATH_DATETIME_FULL_OPTION_DATE);
        let timeSize = browser.getElementSize(XPATH_DATETIME_FULL_OPTION_TIME);
        expect(datetimeBgColor.parsed.hex).to.equal('#000000');
        expect(dateSize.width).to.equal(100);
        expect(dateSize.height).to.equal(40);
        expect(timeSize.width).to.equal(80);
        expect(timeSize.height).to.equal(40);
    });

    it('[Datetime-3] Verify that the Date form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(XPATH_DATE_FULL_OPTION).getCssProperty('background-color');
        let datetimeSize = browser.getElementSize(XPATH_DATE_FULL_OPTION);
        expect(datetimeBgColor.parsed.hex).to.equal('#ffffff');
        expect(datetimeSize.width).to.equal(100);
        expect(datetimeSize.height).to.equal(40);
    });

    it('[Datetime-4] Verify that the Time form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(XPATH_TIME_FULL_OPTION).getCssProperty('background-color');
        let datetimeSize = browser.getElementSize(XPATH_TIME_FULL_OPTION);
        expect(datetimeBgColor.parsed.hex).to.equal('#ffffff');
        expect(datetimeSize.width).to.equal(80);
        expect(datetimeSize.height).to.equal(40);
    });

    it('[Datetime-8] Verify that Date value will be displayed in Date form when selecting the value on Datepicker', function() {
        $(XPATH_DATETIME_FULL_OPTION_DATE).click();
        $(XPATH_DATETIME_FULL_OPTION_SELECT_DATE).click();
        expect($(XPATH_DATETIME_FULL_OPTION_DATE).getValue()).to.equal('10/15/2014');
    });

    it('[Datetime-10] Verify that Time value will be displayed in Time form when selecting the value on Timepicker ', function() {
        $(XPATH_DATETIME_FULL_OPTION_TIME).click();
        $(XPATH_DATETIME_FULL_OPTION_SELECT_TIME).click();
        expect($(XPATH_DATETIME_FULL_OPTION_TIME).getValue()).to.equal('00:00');
    });

    it('[Datetime-11-13] Verify the can create DateTime object with full options', function() {
        let isVisible = isVisibled(XPATH_DATETIME_FULL_OPTION, true);
        expect(isVisible).to.equal(true);
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Date', function() {
        $(XPATH_GET_VALUE_DATE_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)')
        browser.alertAccept();
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Time', function() {
        $(XPATH_GET_VALUE_TIME_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)')
        browser.alertAccept();
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Datetime', function() {
        $(XPATH_GET_VALUE_DATETIME_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)')
        browser.alertAccept();
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Date', function() {
        $(XPATH_SET_VALUE_DATE_COMPONENT_BUTTON).click();
        expect($(XPATH_SET_VALUE_DATE).getValue()).to.equal('06/28/2019');
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Time', function() {
        $(XPATH_SET_VALUE_TIME_COMPONENT_BUTTON).click();
        expect($(XPATH_SET_VALUE_TIME).getValue()).to.equal('17:30');
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Datetime', function() {
        $(XPATH_SET_VALUE_DATETIME_COMPONENT_BUTTON).click();
        expect($(XPATH_SET_VALUE_DATETIME_DATE).getValue()).to.equal('06/28/2019');
        expect($(XPATH_SET_VALUE_DATETIME_TIME).getValue()).to.equal('17:30');
    });

    it('[Datetime-39] Verify that can get locale for DateTime component with Date', function() {
        $(XPATH_GET_LOCALE_DATE_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('ja');
        browser.alertAccept();
    });

    it('[Datetime-39] Verify that can get locale for DateTime component with Time', function() {
        $(XPATH_GET_LOCALE_TIME_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('en');
        browser.alertAccept();
    });

    it('[Datetime-39] Verify that can get locale for DateTime component with Datetime', function() {
        $(XPATH_GET_LOCALE_DATETIME_COMPONENT_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('zh');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Date', function() {
        $(XPATH_SET_LOCALE_DATE_COMPONENT_EXISTING_LOCALE_BUTTON).click();
        $(XPATH_GET_LOCALE_DATE_COMPONENT_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('ja');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Time', function() {
        $(XPATH_SET_LOCALE_TIME_COMPONENT_EXISTING_LOCALE_BUTTON).click();
        $(XPATH_GET_LOCALE_TIME_COMPONENT_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('en');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Datetime', function() {
        $(XPATH_SET_LOCALE_DATETIME_COMPONENT_EXISTING_LOCALE_BUTTON).click();
        $(XPATH_GET_LOCALE_DATETIME_COMPONENT_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('zh');
        browser.alertAccept();
    });

    it('[Datetime-48] Verify that can show invisible Datetime on UI', function() {
        $(XPATH_SHOW_INVISIBLE_DATETIME_BUTTON).click();
        let isVisible = isVisibled(XPATH_INVISIBLE_DATETIME, true);
        expect(isVisible).to.equal(true);
    });

    it('[Datetime-50] Verify that can hide the visible Datetime on UI', function() {
        $(XPATH_HIDE_VISIBLE_DATETIME_BUTTON).click();
        let isVisible = isVisibled(XPATH_VISIBLE_DATETIME, false);
        expect(isVisible).to.equal(false);
    });

    it('[Datetime-52] Verify that can disable the current enable Datetime on UI', function() {
        $(XPATH_DISABLE_ENABLED_DATETIME_BUTTON).click();
        let isDateEnable = isEnabled(XPATH_ENABLED_DATETIME_DATE, false)
        let isTimeEnable = isEnabled(XPATH_ENABLED_DATETIME_TIME, false)
        expect(isDateEnable).to.equal(false);
        expect(isTimeEnable).to.equal(false);
    });
    
    it('[Datetime-54] Verify that can enable the disabled Datetime on UI', function() {
        $(XPATH_ENABLE_DISABLED_DATETIME_BUTTON).click();
        let isDateEnable = isEnabled(XPATH_DISABLED_DATETIME_DATE, true)
        let isTimeEnable = isEnabled(XPATH_DISABLED_DATETIME_TIME, true)
        expect(isDateEnable).to.equal(true);
        expect(isTimeEnable).to.equal(true);
    });
});