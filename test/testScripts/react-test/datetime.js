const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/common');
const expect = require('chai').expect;

const CONSTRUCTOR_DATETIME = '//div[@id="constructor-datetime"]//div[@class="date-time-container"]';
const DATE_CONSTRUCTOR_DATETIME= '//div[@id="constructor-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const TIME_CONSTRUCTOR_DATETIME= '//div[@id="constructor-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';
const SELECT_DATE_CONSTRUCTOR_DATETIME= '//div[@id="constructor-datetime"]//div[@class="date-time-container"]//span[contains(@class, "day")][contains(text(), "15")]';
const SELECT_TIME_CONSTRUCTOR_DATETIME= '//div[@id="constructor-datetime"]//div[@class="date-time-container"]//span[@class="kuc-time-list-item"][contains(text(), "00:00")]';

const CONSTRUCTOR_DATE = '//div[@id="constructor-date"]//div[@class="date-time-container"]';
const DATE_CONSTRUCTOR_DATE= '//div[@id="constructor-date"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';

const CONSTRUCTOR_TIME= '//div[@id="constructor-time"]//div[@class="date-time-container"]';
const DATE_CONSTRUCTOR_TIME= '//div[@id="constructor-time"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const TIME_CONSTRUCTOR_TIME= '//div[@id="constructor-time"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';

const GET_VALUE_DATE_BUTTON = '//button[@id="get-value-date-button"]';
const GET_VALUE_TIME_BUTTON = '//button[@id="get-value-time-button"]';
const GET_VALUE_DATETIME_BUTTON = '//button[@id="get-value-datetime-button"]';

const SET_VALUE_DATE_BUTTON = '//button[@id="set-value-date-button"]';
const SET_VALUE_DATE = '//div[@id="set-value-date"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const GET_VALUE_AFTER_SET_DATE_BUTTON= '//button[@id="get-value-after-set-date-button"]';

const SET_VALUE_TIME_BUTTON= '//button[@id="set-value-time-button"]';
const SET_VALUE_TIME= '//div[@id="set-value-time"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';
const GET_VALUE_AFTER_SET_TIME_BUTTON= '//button[@id="get-value-after-set-time-button"]';

const SET_VALUE_DATETIME_BUTTON= '//button[@id="set-value-datetime-button"]';
const SET_VALUE_DATETIME_DATE= '//div[@id="set-value-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const SET_VALUE_DATETIME_TIME= '//div[@id="set-value-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';
const GET_VALUE_AFTER_SET_DATETIME_BUTTON= '//button[@id="get-value-after-set-datetime-button"]';

const GET_LOCALE_DATE_BUTTON= '//button[@id="get-locale-date-button"]';
const GET_LOCALE_TIME_BUTTON= '//button[@id="get-locale-time-button"]';
const GET_LOCALE_DATETIME_BUTTON= '//button[@id="get-locale-datetime-button"]';

const SET_LOCALE_DATE_BUTTON= '//button[@id="set-locale-date-button"]';
const GET_LOCALE_DATE_AFTER_SET_LOCALE_BUTTON= '//button[@id="get-locale-date-after-set-locale-button"]';
const SET_LOCALE_TIME_BUTTON= '//button[@id="set-locale-time-button"]';
const GET_LOCALE_TIME_AFTER_SET_LOCALE_BUTTON= '//button[@id="get-locale-time-after-set-locale-button"]';
const SET_LOCALE_DATETIME_BUTTON= '//button[@id="set-locale-datetime-button"]';
const GET_LOCALE_DATETIME_AFTER_SET_LOCALE_BUTTON= '//button[@id="get-locale-datetime-after-set-locale-button"]';

const SHOW_INVISIBLE_DATETIME_BUTTON= '//button[@id="show-invisible-datetime-button"]';
const SHOW_INVISIBLE_DATETIME= '//div[@id="show-invisible-datetime"]//div[@class="date-time-container"]';
const HIDE_VISIBLE_DATETIME_BUTTON= '//button[@id="hide-visible-datetime-button"]';
const HIDE_VISIBLE_DATETIME= '//div[@id="hide-visible-datetime"]//div[@class="date-time-container"]';

const DISABLE_ENABLED_DATETIME_BUTTON= '//button[@id="disable-enabled-datetime-button"]';
const DATE_DISABLED_DATETIME= '//div[@id="disable-enabled-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const TIME_DISABLED_DATETIME= '//div[@id="disable-enabled-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';
const ENABLE_DISABLED_DATETIME_BUTTON= '//button[@id="enable-disabled-datetime-button"]';
const DATE_ENABLED_DATETIME= '//div[@id="enable-disabled-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input"]';
const TIME_ENABLED_DATETIME= '//div[@id="enable-disabled-datetime"]//div[@class="date-time-container"]//input[@class="kuc-input-text text-input time"]';


describe('kintoneUIComponent - Datetime', function() {
    before(() => {
        common.logInSlash();
    });

    after(() => {
        common.logOutSlash();
    });

    it('[Datetime-2] Verify that the DateTime form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(CONSTRUCTOR_DATETIME).getCssProperty('background-color');
        let dateSize = browser.getElementSize(DATE_CONSTRUCTOR_DATETIME);
        let timeSize = browser.getElementSize(TIME_CONSTRUCTOR_DATETIME);
        expect(datetimeBgColor.parsed.hex).to.equal('#000000');
        expect(dateSize.width).to.equal(100);
        expect(dateSize.height).to.equal(40);
        expect(timeSize.width).to.equal(80);
        expect(timeSize.height).to.equal(40);
    });

    it('[Datetime-3] Verify that the Date form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(CONSTRUCTOR_DATE).getCssProperty('background-color');
        let datetimeSize = browser.getElementSize(CONSTRUCTOR_DATE);
        expect(datetimeBgColor.parsed.hex).to.equal('#000000');
        expect(datetimeSize.width).to.equal(100);
        expect(datetimeSize.height).to.equal(40);
    });

    it('[Datetime-4] Verify that the Time form have the UI is the same as DateTime form on kintone', function() {
        let datetimeBgColor = $(CONSTRUCTOR_TIME).getCssProperty('background-color');
        let datetimeSize = browser.getElementSize(CONSTRUCTOR_TIME);
        expect(datetimeBgColor.parsed.hex).to.equal('#000000');
        expect(datetimeSize.width).to.equal(80);
        expect(datetimeSize.height).to.equal(40);
    });

    it('[Datetime-8] Verify that Date value will be displayed in Date form when selecting the value on Datepicker', function() {
        $(DATE_CONSTRUCTOR_DATETIME).click();
        $(SELECT_DATE_CONSTRUCTOR_DATETIME).click();
        expect($(DATE_CONSTRUCTOR_DATETIME).getValue()).to.equal('10/15/2014');
    });

    it('[Datetime-10] Verify that Time value will be displayed in Time form when selecting the value on Timepicker ', function() {
        $(TIME_CONSTRUCTOR_DATETIME).click();
        browser.pause(5000)
        $(SELECT_TIME_CONSTRUCTOR_DATETIME).click();
        expect($(TIME_CONSTRUCTOR_DATETIME).getValue()).to.equal('00:00');
    });

    it('[Datetime-11-13] Verify the can create DateTime object with full options', function() {
        let isVisible = isVisibled(CONSTRUCTOR_DATETIME, true);
        expect(isVisible).to.equal(true);
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Date', function() {
        $(GET_VALUE_DATE_BUTTON).click();
        let alertText = browser.alertText();
        browser.pause(5000)
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)');
        browser.alertAccept();
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Time', function() {
        $(GET_VALUE_TIME_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)')
        browser.alertAccept();
    });

    it('[Datetime-31] Verify that can get value for Datetime component with Datetime', function() {
        $(GET_VALUE_DATETIME_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('Mon Oct 13 2014 11:13:00 GMT+0700 (Indochina Time)')
        browser.alertAccept();
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Date', function() {
        $(SET_VALUE_DATE_BUTTON).click();
        expect($(SET_VALUE_DATE).getValue()).to.equal('06/28/2019');
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Time', function() {
        $(SET_VALUE_TIME_BUTTON).click();
        expect($(SET_VALUE_TIME).getValue()).to.equal('17:30');
    });

    it('[Datetime-35] Verify that can set value for DateTime component which contains existing value with Datetime', function() {
        $(SET_VALUE_DATETIME_BUTTON).click();
        expect($(SET_VALUE_DATETIME_DATE).getValue()).to.equal('06/28/2019');
        expect($(SET_VALUE_DATETIME_TIME).getValue()).to.equal('17:30');
    });

    it('[Datetime-39] Verify that can get locale for DateTime component with Date', function() {
        $(GET_LOCALE_DATE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('ja');
        browser.alertAccept();
    });

    // it('[Datetime-39] Verify that can get locale for DateTime component with Time', function() {
    //     $(GET_LOCALE_TIME_BUTTON).click();
    //     let alertText = browser.alertText();
    //     expect(alertText).to.equal('ja');
    //     browser.alertAccept();
    // });

    it('[Datetime-39] Verify that can get locale for DateTime component with Datetime', function() {
        $(GET_LOCALE_DATETIME_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('zh');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Date', function() {
        $(SET_LOCALE_DATE_BUTTON).click();
        $(GET_LOCALE_DATE_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('ja');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Time', function() {
        $(SET_LOCALE_TIME_BUTTON).click();
        $(GET_LOCALE_TIME_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('en');
        browser.alertAccept();
    });

    it('[Datetime-43] Verify that can set locale for DateTime component which contains existing locale with Datetime', function() {
        $(SET_LOCALE_DATETIME_BUTTON).click();
        $(GET_LOCALE_DATETIME_AFTER_SET_LOCALE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('zh');
        browser.alertAccept();
    });

    it('[Datetime-48] Verify that can show invisible Datetime on UI', function() {
        $(SHOW_INVISIBLE_DATETIME_BUTTON).click();
        let isVisible = isVisibled(SHOW_INVISIBLE_DATETIME, true);
        expect(isVisible).to.equal(true);
    });

    it('[Datetime-50] Verify that can hide the visible Datetime on UI', function() {
        $(HIDE_VISIBLE_DATETIME_BUTTON).click();
        let isVisible = isVisibled(HIDE_VISIBLE_DATETIME, false);
        expect(isVisible).to.equal(false);
    });

    it('[Datetime-52] Verify that can disable the current enable Datetime on UI', function() {
        $(DISABLE_ENABLED_DATETIME_BUTTON).click();
        let isDateEnable = isEnabled(DATE_DISABLED_DATETIME, false)
        let isTimeEnable = isEnabled(TIME_DISABLED_DATETIME, false)
        expect(isDateEnable).to.equal(false);
        expect(isTimeEnable).to.equal(false);
    });
    
    it('[Datetime-54] Verify that can enable the disabled Datetime on UI', function() {
        $(ENABLE_DISABLED_DATETIME_BUTTON).click();
        browser.pause(5000)
        let isDateEnable = isEnabled(DATE_ENABLED_DATETIME, true)
        let isTimeEnable = isEnabled(TIME_ENABLED_DATETIME, true)
        expect(isDateEnable).to.equal(true);
        expect(isTimeEnable).to.equal(true);
    });
});