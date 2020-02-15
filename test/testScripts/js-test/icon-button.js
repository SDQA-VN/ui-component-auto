const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const ICON_FULL_OPTIONS = "//div[@id='icon-full-options']//button[contains(@class,'kuc-icon-btn')]";
const ICON_ONLY_TYPE = "//div[@id='icon-only-type']/button[contains(@class,'kuc-icon-btn')]";
const ICON_ONLY_COLOR = "//div[@id='icon-only-color']/button[contains(@class,'kuc-icon-btn')]";

const ICON_DISABLED = "//div[@id='icon-disabled']/button[contains(@class,'kuc-icon-btn')]";
const ICON_SHOW_BUTTON = "//button[text()='Show Icon']";
const ICON_HIDE_BUTTON = "//button[text()='Hide Icon']";
const ICON_DISABLE_BUTTON = "//button[text()='Disable Icon']";
const ICON_ENABLE_BUTTON = "//button[text()='Enable Icon']";

const ICON_SET_TYPE_INSERT_BUTTON = "//button[text()='Set Type Insert']";
const ICON_SET_TYPE_REMOVE_BUTTON = "//button[text()='Set Type Remove']";
const ICON_SET_TYPE_CLOSE_BUTTON = "//button[text()='Set Type Close']";
const ICON_SET_TYPE_FILE_BUTTON = "//button[text()='Set Type File']";
const ICON_SET_TYPE_RIGHT_BUTTON = "//button[text()='Set Type Right']";
const ICON_SET_TYPE_LEFT_BUTTON = "//button[text()='Set Type Left']";
const ICON_SET_TYPE_GET_STATE_BUTTON = "//button[text()='Get State Type']";

const ICON_SIZE = "//div[@id='icon-set-size']/button[contains(@class,'kuc-icon-btn')]";
const ICON_SET_SIZE_NORMAL_BUTTON = "//button[text()='Set Size Normal']";
const ICON_SET_SIZE_SMALL_BUTTON = "//button[text()='Set Size Small']";

const ICON_SHAPE = "//div[@id='icon-set-shape']/button[contains(@class,'kuc-icon-btn')]";
const ICON_SET_SHAPE_NORMAL_BUTTON = "//button[text()='Set Shape Normal']";
const ICON_SET_SHAPE_CIRCLE_BUTTON = "//button[text()='Set Shape Circle']";

const ICON_ON_TRIGGER = "//div[@id='icon-on-trigger']/button[contains(@class,'kuc-icon-btn')]";

describe('kintoneUIComponent - Icon button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Icon-Button-2] should verify UI', function () {
        Helper.ElementHandler
            .waitForElement(ICON_FULL_OPTIONS)
            .verifyElementColor(ICON_FULL_OPTIONS, 'color', '#333333')
            .verifyElementSize(ICON_FULL_OPTIONS, 16, 16)
    });

    it('[Icon-Button-3-5-6-14-15] should create a Icon Button', function () {
        Helper.ElementHandler
            .waitForElement(ICON_FULL_OPTIONS)
            .verifyElementVisible(ICON_FULL_OPTIONS)
            .verifyElementVisible(ICON_ONLY_TYPE)
            .verifyElementVisible(ICON_ONLY_COLOR)
            .verifyElementVisible(ICON_DISABLED)
    });

    it('[Icon-Button-20-21-22-26] should set type for icon button', function () {
        Helper.ElementHandler
            .click(ICON_SET_TYPE_INSERT_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('insert')

            .click(ICON_SET_TYPE_REMOVE_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('remove')

            .click(ICON_SET_TYPE_CLOSE_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('close')

            .click(ICON_SET_TYPE_FILE_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('file')

            .click(ICON_SET_TYPE_RIGHT_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('right')

            .click(ICON_SET_TYPE_LEFT_BUTTON)
            .click(ICON_SET_TYPE_GET_STATE_BUTTON)
            .verifyAlertText('left')
    });

    it('[Icon-Button-37-38] should set size for icon button', function () {
        Helper.ElementHandler
            .waitForElement(ICON_SIZE)
            .click(ICON_SET_SIZE_SMALL_BUTTON)
            .verifyAttribute(ICON_SIZE, 'class', 'small')

            .click(ICON_SET_SIZE_NORMAL_BUTTON)
            .verifyAttribute(ICON_SIZE, 'class', 'large')
    });

    it('[Icon-Button-37-38] should set shape for icon button', function () {
        Helper.ElementHandler
            .waitForElement(ICON_SHAPE)
            .click(ICON_SET_SHAPE_CIRCLE_BUTTON)
            .verifyAttribute(ICON_SHAPE, 'class', 'circle')

            .click(ICON_SET_SHAPE_NORMAL_BUTTON)
            .verifyAttribute(ICON_SHAPE, 'class', 'normal')
    });

    it('[Icon-Button-45] should hide visible Icon button on UI', function () {
        Helper.ElementHandler
            .click(ICON_HIDE_BUTTON)
            .verifyElementNotVisible(ICON_DISABLED)
    });

    it('[Icon-Button-43] should show invisible Icon button on UI', function () {
        Helper.ElementHandler
            .click(ICON_SHOW_BUTTON)
            .verifyElementVisible(ICON_DISABLED)
    });

    it('[Icon-Button-47] should disable Icon button on UI', function () {
        Helper.ElementHandler
            .click(ICON_DISABLE_BUTTON)
            .verifyElementDisabled(ICON_DISABLED)
    });

    it('[Icon-Button-50] should enable Icon button on UI', function () {
        Helper.ElementHandler
            .click(ICON_ENABLE_BUTTON)
            .verifyElementEnabled(ICON_DISABLED)
    });

    it('[Icon-button-51-52] should callback trigger function', function () {
        Helper.ElementHandler
            .click(ICON_ON_TRIGGER)
            .verifyAlertText('on_click_trigger has been clicked')
    });
});