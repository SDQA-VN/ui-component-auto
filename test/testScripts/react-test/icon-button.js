const common = require('../../utils/common');
const Helper = require('../../helper/main.js');

const XPATH_ICON = '.icon-button .kuc-icon-btn';
const XPATH_ICON_TYPE = '.icon-button .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_TYPE = '.icon-onlyType .kuc-icon-btn';
const XPATH_ICON_ONLY_TYPE_TYPE = '.icon-onlyType .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_COLOR = '.icon-onlyColor .kuc-icon-btn';
const XPATH_ICON_ONLY_COLOR_TYPE = '.icon-onlyColor .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_DISABLE = '.icon-onlyDisable .kuc-icon-btn';
const XPATH_ICON_SET_TYPE_VALUE = '.icon-setType .kuc-icon-btn svg path';
const XPATH_ICON_SET_TYPE_INSERT_BUTTON = '.icon-setType .type-insert';
const XPATH_ICON_SET_TYPE_REMOVE_BUTTON = '.icon-setType .type-remove'
const XPATH_ICON_SET_TYPE_CLOSE_BUTTON = '.icon-setType .type-close';
const XPATH_INVISIBLE_ICON_SET_TYPE_VALUE = '.invisibleIcon-setType .kuc-icon-btn svg path';
const XPATH_INVISIBLE_ICON_SET_TYPE_BUTTON = '.invisibleIcon-setType .set-type';
const XPATH_ICON_SET_SIZE_VALUE = '.icon-setSize .kuc-icon-btn';
const XPATH_ICON_SET_SIZE_SMALL_BUTTON = '.icon-setSize .size-small';
const XPATH_ICON_SET_SIZE_LARGE_BUTTON = '.icon-setSize .size-large';
const XPATH_ICON_SHOW = '.icon-show .kuc-icon-btn';
const XPATH_ICON_DISPLAY_BUTTON = '.icon-show .show-icon';
const XPATH_ICON_HIDE = '.icon-hide .kuc-icon-btn';
const XPATH_ICON_NON_DISPLAY_BUTTON = '.icon-hide .hide-icon';
const XPATH_ICON_DISABLE = '.icon-disable .kuc-icon-btn';
const XPATH_ICON_DISABLE_BUTTON = '.icon-disable .disable-icon';
const XPATH_ICON_ENABLE = '.icon-enable .kuc-icon-btn';
const XPATH_ICON_ENABLE_BUTTON = '.icon-enable .enable-icon';
const XPATH_ICON_ON_CALL_BUTTON = '.icon-onCall .kuc-icon-btn';

const iconPlus = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';
const iconMinus = 'M19,13H5V11H19V13Z';
const iconClose = 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });
    it('[Icon-Button-11] Verify that the IconButton have the UI is the same as spec', function () {
        Helper.ElementHandler
            .waitForElement(XPATH_ICON)
            .verifyElementColor(XPATH_ICON, 'background', '#2d8dd6')
            .verifyElementSize(XPATH_ICON, 16, 16)
    });
    it('[Icon-Button-12-14] Verify that the Icon Button object contains the the below attibutes', function () {
        Helper.ElementHandler
            .waitForElement(XPATH_ICON_TYPE)
            .verifyAttribute(XPATH_ICON_TYPE, 'd', iconPlus)
            .verifyElementEnabled(XPATH_ICON)
            .verifyElementVisible(XPATH_ICON)
    });
    // it('[Icon-Button-15] Verify that can create a Icon Button only with options.type with option.type= insert', function () {
    //     Helper.ElementHandler
    //         .verifyAttribute(XPATH_ICON_ONLY_TYPE_TYPE, 'd', iconPlus)
    //         .verifyAttribute(XPATH_ICON_ONLY_TYPE, 'class', 'large')
    //         .verifyAttribute(XPATH_ICON_ONLY_TYPE, 'class', 'gray')
    // });
    // it('[Icon-Button-23] Verify that can create a Icon Button only with options.color= green', function () {
    //     Helper.ElementHandler
    //         .verifyAttribute(XPATH_ICON_ONLY_COLOR_TYPE, 'd', iconPlus)
    //         .verifyAttribute(XPATH_ICON_ONLY_COLOR, 'class', 'large')
    //         .verifyAttribute(XPATH_ICON_ONLY_COLOR, 'class', 'green')
    // });
    it('[Icon-Button-24] Verify that can create a Icon Button with only option.isDisabled is true', function () {
        Helper.ElementHandler
            .verifyElementExists(XPATH_ICON_ONLY_DISABLE)
            .verifyElementDisabled(XPATH_ICON_ONLY_DISABLE)
    });
    it('[Icon-Button-29] Verify that can set type insert', function () {
        Helper.ElementHandler
            .click(XPATH_ICON_SET_TYPE_INSERT_BUTTON)
            .verifyAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd', iconPlus)
    });
    it('[Icon-Button-30] Verify that can set type remove', function () {
        Helper.ElementHandler
            .click(XPATH_ICON_SET_TYPE_REMOVE_BUTTON)
            .verifyAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd', iconMinus)
    });
    it('[Icon-Button-31] Verify that can set type close', function () {
        Helper.ElementHandler
            .click(XPATH_ICON_SET_TYPE_CLOSE_BUTTON)
            .verifyAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd', iconClose)
    });
    it('[Icon-Button-32] Verify that can set the type for invisible IconButton', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_INVISIBLE_ICON_SET_TYPE_VALUE)
            .click(XPATH_INVISIBLE_ICON_SET_TYPE_BUTTON)
            .verifyAttribute(XPATH_INVISIBLE_ICON_SET_TYPE_VALUE, 'd', iconMinus)

    });
    // it('[Icon-Button-35] Verify can set the normal (large) size for the IconButton', function () {
    //     $(XPATH_ICON_SET_SIZE_LARGE_BUTTON).click();
    //     let iconSize = browser.getAttribute(XPATH_ICON_SET_SIZE_VALUE, 'class');
    //     expect(iconSize).to.include('large');
    // });
    it('[Icon-Button-36] Verify can set the small size for the IconButton', function () {
        Helper.ElementHandler
            .click(XPATH_ICON_SET_SIZE_SMALL_BUTTON)
            .verifyAttribute(XPATH_ICON_SET_SIZE_VALUE, 'class', 'small')
    });
    it('[Icon-Button-42] Verify that can show visible IconButton on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(XPATH_ICON_SHOW)
            .click(XPATH_ICON_DISPLAY_BUTTON)
            .verifyElementVisible(XPATH_ICON_SHOW)
    });
    it('[Icon-Button-44] Verify that can hide the invisible IconButton on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(XPATH_ICON_HIDE)
            .click(XPATH_ICON_NON_DISPLAY_BUTTON)
            .verifyElementNotVisible(XPATH_ICON_HIDE)
    });
    it('[Icon-Button-45] Verify that can disable the current enable IconButton on UI', function () {
        Helper.ElementHandler
            .verifyElementEnabled(XPATH_ICON_DISABLE)
            .click(XPATH_ICON_DISABLE_BUTTON)
            .verifyElementDisabled(XPATH_ICON_DISABLE)
    });
    it('[Icon-Button-47] Verify that can enable the disabled IconButton on UI', function () {
        Helper.ElementHandler
            .verifyElementDisabled(XPATH_ICON_ENABLE)
            .click(XPATH_ICON_ENABLE_BUTTON)
            .verifyElementEnabled(XPATH_ICON_ENABLE)
    });
    it('[Icon-Button-49-50] Verify that the callback function will be trigger when clicking on the icon button', function () {
        Helper.ElementHandler
            .click(XPATH_ICON_ON_CALL_BUTTON)
            .verifyAlertText('Icon button has been clicked')
    });
});