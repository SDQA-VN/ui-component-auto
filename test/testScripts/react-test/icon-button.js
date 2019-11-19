const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_ICON = '.icon-button .kuc-icon-btn';
const XPATH_ICON_TYPE = '.icon-button .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_TYPE = '.icon-onlyType .kuc-icon-btn';
const XPATH_ICON_ONLY_TYPE_TYPE = '.icon-onlyType .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_COLOR = '.icon-onlyColor .kuc-icon-btn';
const XPATH_ICON_ONLY_COLOR_TYPE = '.icon-onlyColor .kuc-icon-btn svg path';
const XPATH_ICON_ONLY_DISABLE = '.icon-onlyDisable .kuc-icon-btn';
const XPATH_ICON_SET_TYPE_VALUE = '.icon-setType .kuc-icon-btn svg path';
const XPATH_ICON_SET_TYPE_INSERT_BUTTON = '.icon-setType .type-insert';
const XPATH_ICON_SET_TYPE_REMOVE_BUTTON  = '.icon-setType .type-remove'
const XPATH_ICON_SET_TYPE_CLOSE_BUTTON  = '.icon-setType .type-close';
const XPATH_INVISIBLE_ICON_SET_TYPE_VALUE  = '.invisibleIcon-setType .kuc-icon-btn svg path';
const XPATH_INVISIBLE_ICON_SET_TYPE_BUTTON  = '.invisibleIcon-setType .set-type';
const XPATH_ICON_SET_SIZE_VALUE = '.icon-setSize .kuc-icon-btn';
const XPATH_ICON_SET_SIZE_SMALL_BUTTON = '.icon-setSize .size-small';
const XPATH_ICON_SET_SIZE_LARGE_BUTTON  = '.icon-setSize .size-large';
const XPATH_ICON_SHOW = '.icon-show .kuc-icon-btn';
const XPATH_ICON_DISPLAY_BUTTON  = '.icon-show .show-icon';
const XPATH_ICON_HIDE = '.icon-hide .kuc-icon-btn';
const XPATH_ICON_NON_DISPLAY_BUTTON  = '.icon-hide .hide-icon';
const XPATH_ICON_DISABLE = '.icon-disable .kuc-icon-btn';
const XPATH_ICON_DISABLE_BUTTON  = '.icon-disable .disable-icon';
const XPATH_ICON_ENABLE = '.icon-enable .kuc-icon-btn';
const XPATH_ICON_ENABLE_BUTTON  = '.icon-enable .enable-icon';
const XPATH_ICON_ON_CALL_BUTTON  = '.icon-onCall .kuc-icon-btn';

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
        let iconColor = $(XPATH_ICON).getCssProperty('background');
        let iconHeight = $(XPATH_ICON).getCssProperty('height');
        let iconWidth = $(XPATH_ICON).getCssProperty('width');
        expect(iconColor.parsed.hex).to.equal('#2d8dd6');
        expect(iconHeight.value).to.equal('16px');
        expect(iconWidth.value).to.equal('16px');
    });
    it('[Icon-Button-12-14] Verify that the Icon Button object contains the the below attibutes', function () {
        let iconType = browser.getAttribute(XPATH_ICON_TYPE, 'd')
        let iconEnable = browser.isEnabled(XPATH_ICON)
        let iconVisible = browser.isVisible(XPATH_ICON)
        expect(iconType).to.equal(iconPlus);
        expect(iconEnable).to.equal(true);
        expect(iconVisible).to.equal(true);
    });
    it('[Icon-Button-15] Verify that can create a Icon Button only with options.type with option.type= insert', function () {
        let iconType = browser.getAttribute(XPATH_ICON_ONLY_TYPE_TYPE, 'd')
        let iconSize = browser.getAttribute(XPATH_ICON_ONLY_TYPE, 'class')
        let iconColor = browser.getAttribute(XPATH_ICON_ONLY_TYPE, 'class')
        expect(iconType).to.equal(iconPlus);
        expect(iconSize).to.include('large');
        expect(iconColor).to.include('gray');
    });
    it('[Icon-Button-23] Verify that can create a Icon Button only with options.color= green', function () {
        let iconType = browser.getAttribute(XPATH_ICON_ONLY_COLOR_TYPE, 'd')
        let iconSize = browser.getAttribute(XPATH_ICON_ONLY_COLOR, 'class')
        let iconColor = browser.getAttribute(XPATH_ICON_ONLY_COLOR, 'class')
        expect(iconType).to.equal(iconPlus);
        expect(iconSize).to.include('large');
        expect(iconColor).to.include('green');
    });
    it('[Icon-Button-24] Verify that can create a Icon Button with only option.isDisabled is true', function () {
        let iconExist = browser.isExisting(XPATH_ICON_ONLY_DISABLE);
        let iconEnable = browser.isEnabled(XPATH_ICON_ONLY_DISABLE);
        expect(iconExist).to.equal(true);
        expect(iconEnable).to.equal(false);
    });
    it('[Icon-Button-29] Verify that can set type insert', function () {
        $(XPATH_ICON_SET_TYPE_INSERT_BUTTON).click();
        let iconType = browser.getAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd')
        expect(iconType).to.equal(iconPlus);
    });
    it('[Icon-Button-30] Verify that can set type remove', function () {
        $(XPATH_ICON_SET_TYPE_REMOVE_BUTTON).click();
        let iconType = browser.getAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd')
        expect(iconType).to.equal(iconMinus);
    });
    it('[Icon-Button-31] Verify that can set type close', function () {
        $(XPATH_ICON_SET_TYPE_CLOSE_BUTTON).click();
        let iconType = browser.getAttribute(XPATH_ICON_SET_TYPE_VALUE, 'd')
        expect(iconType).to.equal(iconClose);
    });
    it('[Icon-Button-32] Verify that can set the type for invisible IconButton', function () {
        let iconVisible = browser.isVisible(XPATH_INVISIBLE_ICON_SET_TYPE_VALUE);
        expect(iconVisible).to.equal(false);
        $(XPATH_INVISIBLE_ICON_SET_TYPE_BUTTON).click();
        let iconType = browser.getAttribute(XPATH_INVISIBLE_ICON_SET_TYPE_VALUE, 'd')
        expect(iconType).to.equal(iconMinus);
    });
    it('[Icon-Button-35] Verify can set the normal (large) size for the IconButton', function () {
        $(XPATH_ICON_SET_SIZE_LARGE_BUTTON).click();
        let iconSize = browser.getAttribute(XPATH_ICON_SET_SIZE_VALUE, 'class');
        expect(iconSize).to.include('large');
    });
    it('[Icon-Button-36] Verify can set the small size for the IconButton', function () {
        $(XPATH_ICON_SET_SIZE_SMALL_BUTTON).click();
        let iconSize = browser.getAttribute(XPATH_ICON_SET_SIZE_VALUE, 'class');
        expect(iconSize).to.include('small');
    });
    it('[Icon-Button-42] Verify that can show visible IconButton on UI', function () {
        let iconVisibleBefore = browser.isVisible(XPATH_ICON_SHOW);
        expect(iconVisibleBefore).to.equal(false);
        $(XPATH_ICON_DISPLAY_BUTTON).click();
        let iconVisibleAfter = browser.isVisible(XPATH_ICON_SHOW);
        expect(iconVisibleAfter).to.equal(true);
    });
    it('[Icon-Button-44] Verify that can hide the invisible IconButton on UI', function () {
        let iconVisibleBefore = browser.isVisible(XPATH_ICON_HIDE);
        expect(iconVisibleBefore).to.equal(true);
        $(XPATH_ICON_NON_DISPLAY_BUTTON).click();
        let iconVisibleAfter = browser.isVisible(XPATH_ICON_HIDE);
        expect(iconVisibleAfter).to.equal(false);
    });
    it('[Icon-Button-45] Verify that can disable the current enable IconButton on UI', function () {
        let iconEnableBefore = browser.isEnabled(XPATH_ICON_DISABLE);
        expect(iconEnableBefore).to.equal(true);
        $(XPATH_ICON_DISABLE_BUTTON).click();
        let iconEnableAfter = browser.isEnabled(XPATH_ICON_DISABLE);
        expect(iconEnableAfter).to.equal(false);
    });
    it('[Icon-Button-47] Verify that can enable the disabled IconButton on UI', function () {
        let iconEnableBefore = browser.isEnabled(XPATH_ICON_ENABLE);
        expect(iconEnableBefore).to.equal(false);
        $(XPATH_ICON_ENABLE_BUTTON).click();
        let iconEnableAfter = browser.isEnabled(XPATH_ICON_ENABLE);
        expect(iconEnableAfter).to.equal(true);
    });
    it('[Icon-Button-49-50] Verify that the callback function will be trigger when clicking on the icon button', function () {
        $(XPATH_ICON_ON_CALL_BUTTON).click();
        let iconText = browser.alertText();
        expect(iconText).to.equal('Icon button has been clicked');
        browser.alertAccept();
    });
});