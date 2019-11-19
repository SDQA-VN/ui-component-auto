const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

const XPATH_LABEL = '.label-render .kuc-label';
const XPATH_LABEL_VALUE = '.label-setText .kuc-label';
const XPATH_LABEL_NO_OPTION = '.label-no-option .kuc-label';
const XPATH_LABEL_ONLY_TEXT ='.label-only-text .kuc-label';
const XPATH_LABEL_ONLY_REQUIRED ='.label-only-isRequired .kuc-label';
const XPATH_LABEL_ONLY_REQUIRED_BUTTON = '.label-only-isRequired .change-only-isRequired';
// const XPATH_LABEL_ONLY_DISABLED ='.label-only-disabled .kuc-label';
const XPATH_LABEL_ONLY_DISABLED_BUTTON = '.label-only-isDisabled .change-only-isDisabled';
const XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON = '.label-only-isDisabled .get-state';
const XPATH_LABEL_ONLY_VISIBLE_BUTTON = '.label-only-isVisible .change-only-isVisible';
const XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON = '.label-only-isVisible .get-state';
const XPATH_LABEL_SET_TEXT_VALUE= '.label-setText .kuc-label';
const XPATH_LABEL_SET_TEXT_BUTTON = '.label-setText .set-text';
const XPATH_LABEL_SET_TEXT_BUTTON_1 = '.label-setText .set-text-2';
const XPATH_LABEL_SET_TEXT_XSS_VALUE = '.label-setText-xss .kuc-label';
const XPATH_LABEL_SET_TEXT_XSS_BUTTON = '.label-setText-xss .set-text-xss';
const XPATH_LABEL_INVISIBLE_SET_TEXT_VALUE = '.label-invisible-setText .kuc-label';
const XPATH_LABEL_INVISIBLE_SET_TEXT_BUTTON = '.label-invisible-setText .set-text-invisible';
const XPATH_LABEL_INVISIBLE_SHOW_TEXT_BUTTON = '.label-invisible-setText .show-invisible-label';
const XPATH_LABEL_SET_TEXT_BLANK_VALUE = '.label-setText-blank .kuc-label';
const XPATH_LABEL_SET_TEXT_BLANK_BUTTON = '.label-setText-blank .set-text-blank';
const XPATH_LABEL_SET_REQUIRE_VALUE = '.label-set-isRequired .kuc-label span.kuc-require';
const XPATH_LABEL_SET_REQUIRE_TRUE_BUTTON = '.label-set-isRequired .set-required-true';
const XPATH_LABEL_SET_REQUIRE_FALSE_BUTTON = '.label-set-isRequired .set-required-false';
const XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE = '.label-invisible-set-isRequired .kuc-label span.kuc-require';
const XPATH_LABEL_INVISIBLE_SET_REQUIRE_BUTTON = '.label-invisible-set-isRequired .set-require-invisible';
const XPATH_LABEL_INVISIBLE_SHOW_REQUIRE_BUTTON = '.label-invisible-set-isRequired .show-require-label';
const XPATH_LABEL_SHOW_INVISIBLE = '.label-show .label-invisible .kuc-label';
const XPATH_LABEL_SHOW_VISIBLE = '.label-show .label-visible .kuc-label';
const XPATH_LABEL_SHOW_BUTTON = '.label-show .show-label';
const XPATH_LABEL_HIDE_VISIBLE = '.label-hide .label-visible .kuc-label';
const XPATH_LABEL_HIDE_INVISIBLE = '.label-hide .label-invisible .kuc-label';
const XPATH_LABEL_HIDE_BUTTON = '.label-hide .hide-label';
const XPATH_LABEL_DISABLE_BUTTON = '.label-set-disable .set-disable';
const XPATH_LABEL_DISABLE_VALUE = '.label-set-disable .get-state';
const XPATH_LABEL_ENABLE_BUTTON = '.label-set-enable .set-enable';
const XPATH_LABEL_ENABLE_VALUE = '.label-set-enable .get-state';
const XPATH_LABEL_ON_CLICK = '.label-onCall .kuc-label';

// const XPATH_LABEL_REQUIRE_VALUE = '.label-setRequire .kuc-label';
// const XPATH_LABEL_SET_REQUIRE = '.label-setRequire .set-require';
// const XPATH_LABEL_NON_REQUIRE_VALUE = '.label-setNonRequire .kuc-label';
// const XPATH_LABEL_SET_NON_REQUIRE = '.label-setNonRequire .set-nonRequire';
// const XPATH_LABEL_REQUIRE_EXISTED_VALUE = '.label-setRequireExisted .kuc-label';
// const XPATH_LABEL_SET_REQUIRE_EXISTED = '.label-setRequireExisted .set-require';
// const XPATH_LABEL_NON_DISPLAYED = '.label-hide .kuc-label';
// const XPATH_LABEL_HIDE = '.label-hide .hide-label';
// const XPATH_LABEL_ENABLE = '.label-disable .kuc-label';
// const XPATH_LABEL_SET_DISABLE = '.label-disable .disable-label';
// const XPATH_LABEL_SET_DISABLED_TRUE_BUTTON = '.label-only-disabled .change-only-isDisabled-true'
// const XPATH_LABEL_SET_DISABLED_FALSE_BUTTON = '.label-only-disabled .change-only-isDisabled-false'
// const XPATH_LABEL_SET_DISABLED_VALUE_BUTTON = '.label-only-disabled .get-state'

describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Label-2] Verify that the Label and Required Label have the UI is the same as on kintone', function () {
        let labelColor = $(XPATH_LABEL).getCssProperty('color');
        let labelHeight = $(XPATH_LABEL).getCssProperty('height');
        expect(labelColor.parsed.hex).to.equal('#333333');
        expect(labelHeight.value).to.equal('21px');
    });

    it('[Label-4] Verify that can create label without any options value', function () {
        let classNameOfSelectedItem = $(XPATH_LABEL_NO_OPTION).getAttribute('class');
        let labelEnabled = browser.isEnabled(XPATH_LABEL_NO_OPTION);
        let labelRequired = XPATH_LABEL_NO_OPTION + " span.kuc-require";
        let checkExist = browser.isExisting(labelRequired);
        expect(classNameOfSelectedItem).to.include('kuc-label');
        expect(labelEnabled).to.equal(true);
        expect(checkExist).to.equal(false);
    });

    it('[Label-3-5] Verify that can create label with full options value', function () {
        let labelValue = browser.getText(XPATH_LABEL);
        let labelEnable = browser.isEnabled(XPATH_LABEL);
        let labelVisible = browser.isVisible(XPATH_LABEL);
        let labelRequired = XPATH_LABEL + " span.kuc-require";
        let checkExist = browser.isExisting(labelRequired)
        expect(labelEnable).to.equal(true);
        expect(labelVisible).to.equal(true);
        expect(checkExist).to.equal(true);
        expect(labelValue).to.equal('Label*');
    });

    it('[Label-6] Verify that can create label with only option.Text', function () {
        let labelValue = browser.getText(XPATH_LABEL_ONLY_TEXT);
        let labelEnable = browser.isEnabled(XPATH_LABEL_ONLY_TEXT);
        let labelVisible = browser.isVisible(XPATH_LABEL_ONLY_TEXT);
        let labelRequired = XPATH_LABEL_ONLY_TEXT + " span.kuc-require";
        let checkExist = browser.isExisting(labelRequired)
        expect(labelEnable).to.equal(true);
        expect(labelVisible).to.equal(true);
        expect(checkExist).to.equal(false);
        expect(labelValue).to.equal('Label with only option.Text');
    });

    it('[Label-9-10] Verify that can create label with only option.isRequired are true and false', function () {
        let labelEnable = browser.isEnabled(XPATH_LABEL_ONLY_REQUIRED);
        let labelVisible = browser.isVisible(XPATH_LABEL_ONLY_REQUIRED);
        let labelRequired = XPATH_LABEL_ONLY_REQUIRED + " span.kuc-require";
        let checkExist = browser.isExisting(labelRequired);
        expect(labelEnable).to.equal(true);
        expect(labelVisible).to.equal(true);
        expect(checkExist).to.equal(true);
        $(XPATH_LABEL_ONLY_REQUIRED_BUTTON).click();
        checkExist = browser.isExisting(labelRequired);
        expect(checkExist).to.equal(false);
    });

    it('[Label-11-12] Verify that create a Label with only option.isDisable are true and false', function () {
        $(XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();
        $(XPATH_LABEL_ONLY_DISABLED_BUTTON).click();
        $(XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Label-13-14] Verify that create a Label with only option.isVisible are true and false', function () {
        $(XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true');
        browser.alertAccept();
        $(XPATH_LABEL_ONLY_VISIBLE_BUTTON).click();
        $(XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('false');
        browser.alertAccept();
    });

    it('[Label-15-16] Verify can set text for Label which not contains exisiting text and for Alert which contains existing text', function () {
        let labelTextBefore = browser.getText(XPATH_LABEL_SET_TEXT_VALUE);
        expect(labelTextBefore).to.equal('');
        $(XPATH_LABEL_SET_TEXT_BUTTON).click();
        let labelTextAfter = browser.getText(XPATH_LABEL_SET_TEXT_VALUE);
        expect(labelTextAfter).to.equal('Label changed text');
        $(XPATH_LABEL_SET_TEXT_BUTTON_1).click();
        labelTextAfter = browser.getText(XPATH_LABEL_SET_TEXT_VALUE);
        expect(labelTextAfter).to.equal('Label changed text second time');
    });

    it('[Label-17] Verify that can set text for Label with XSS value', function (){
        let labelTextBefore = browser.getText(XPATH_LABEL_SET_TEXT_XSS_VALUE);
        expect(labelTextBefore).to.equal('Label before set XSS');
        $(XPATH_LABEL_SET_TEXT_XSS_BUTTON).click();
        let labelTextAfter = browser.getText(XPATH_LABEL_SET_TEXT_XSS_VALUE);
        expect(labelTextAfter).to.equal("alert('Label after set XSS');");
    })

    it('[Alert-18] Verify that can set text for invisible Label', function (){
        let labelVisibleBefore = browser.isVisible(XPATH_LABEL_INVISIBLE_SET_TEXT_VALUE);
        expect(labelVisibleBefore).to.equal(false);
        $(XPATH_LABEL_INVISIBLE_SET_TEXT_BUTTON).click();
        $(XPATH_LABEL_INVISIBLE_SHOW_TEXT_BUTTON).click();
        let labelTextAfter = browser.getText(XPATH_LABEL_INVISIBLE_SET_TEXT_VALUE);
        expect(labelTextAfter).to.equal("Label after change");
    })

    it('[Label-19] Verify that can set text to blank for Label', function (){
        let labelBeforeSetText = browser.getText(XPATH_LABEL_SET_TEXT_BLANK_VALUE);
        expect(labelBeforeSetText).to.equal('Label before set text to blank');
        $(XPATH_LABEL_SET_TEXT_BLANK_BUTTON).click();
        let labelTextAfter = browser.getText(XPATH_LABEL_SET_TEXT_BLANK_VALUE);
        expect(labelTextAfter).to.equal("");
    })

    it('[Label-21-22-23] Verify that can set required icon when isRequired is true, hidden required icon when setRequired(False),set required icon when setRequired(True)', function (){
        let labelBeforeSet = browser.isExisting(XPATH_LABEL_SET_REQUIRE_VALUE);
        let getColor = $(XPATH_LABEL_SET_REQUIRE_VALUE).getCssProperty('color');
        expect(labelBeforeSet).to.equal(true);
        expect($(XPATH_LABEL_SET_REQUIRE_VALUE).getText()).to.equal('*');
        expect(getColor.parsed.hex).to.equal('#e74c3c');
        $(XPATH_LABEL_SET_REQUIRE_TRUE_BUTTON).click();
        labelBeforeSet = browser.isExisting(XPATH_LABEL_SET_REQUIRE_VALUE);
        expect(labelBeforeSet).to.equal(true);
        $(XPATH_LABEL_SET_REQUIRE_FALSE_BUTTON).click();
        let labelAfterSet = browser.isExisting(XPATH_LABEL_SET_REQUIRE_VALUE);
        expect(labelAfterSet).to.equal(false);
    })

    it('[Alert-24] Verify that can set require for invisible Label', function (){
        let labelRequireSet = browser.isExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE);
        expect(labelRequireSet).to.equal(false);
        let labelVisibleSet = browser.isVisible(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE);
        expect(labelVisibleSet).to.equal(false);
        $(XPATH_LABEL_INVISIBLE_SET_REQUIRE_BUTTON).click();
        $(XPATH_LABEL_INVISIBLE_SHOW_REQUIRE_BUTTON).click();
        labelRequireSet = browser.isExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE);
        expect(labelRequireSet).to.equal(true);
        labelVisibleSet = browser.isExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE);
        expect(labelVisibleSet).to.equal(true);
    })

    it('[Label-27-28] Verify that can show invisible Label on UI', function () {
        let checkVisible = browser.isVisible(XPATH_LABEL_SHOW_INVISIBLE);
        let checkVisible1 = browser.isVisible(XPATH_LABEL_SHOW_VISIBLE);
        expect(checkVisible).to.equal(false);
        expect(checkVisible1).to.equal(true);
        $(XPATH_LABEL_SHOW_BUTTON).click()
        checkVisible = browser.isVisible(XPATH_LABEL_SHOW_INVISIBLE);
        checkVisible1 = browser.isVisible(XPATH_LABEL_SHOW_VISIBLE);
        expect(checkVisible).to.equal(true);
        expect(checkVisible1).to.equal(true);
    });

    it('[Label-29-30] Verify that can hide visible Label and hide invisible Label on UI', function () {
        let checkVisible = browser.isVisible(XPATH_LABEL_HIDE_VISIBLE);
        let checkVisible1 = browser.isVisible(XPATH_LABEL_HIDE_INVISIBLE);
        expect(checkVisible).to.equal(true);
        expect(checkVisible1).to.equal(false);
        $(XPATH_LABEL_HIDE_BUTTON).click()
        checkVisible = browser.isVisible(XPATH_LABEL_HIDE_VISIBLE);
        checkVisible1 = browser.isVisible(XPATH_LABEL_HIDE_INVISIBLE);
        expect(checkVisible).to.equal(false);
        expect(checkVisible1).to.equal(false);
    });

    it('[Label-31-32] Verify that can disable the current enabled and disable the current disabled Label', function () {
        $(XPATH_LABEL_DISABLE_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('false true');
        browser.alertAccept();
        $(XPATH_LABEL_DISABLE_BUTTON).click();
        $(XPATH_LABEL_DISABLE_VALUE).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('true true');
        browser.alertAccept();
    });

    it('[Label-33-34] Verify that can enable the current disabled and enable the current enabled Label', function () {
        $(XPATH_LABEL_ENABLE_VALUE).click();
        let alertText = browser.alertText();
        expect(alertText).to.equal('true false');
        browser.alertAccept();
        $(XPATH_LABEL_ENABLE_BUTTON).click();
        $(XPATH_LABEL_ENABLE_VALUE).click();
        alertText = browser.alertText();
        expect(alertText).to.equal('true true');
        browser.alertAccept();
    });

    it('[Label-36-37] Verify that the callback function will be trigger when click on the label', function () {
        $(XPATH_LABEL_ON_CLICK).click()
        let alertText = browser.alertText();
        expect(alertText).to.equal('Label has been clicked');
        browser.alertAccept();
    });
        // it('[Label-16] Verify can set text for label which contains existing text', function () {
    //     $(XPATH_LABEL_SET_TEXT).click()
    //     let labelValue = browser.getText(XPATH_LABEL_VALUE);
    //     expect(labelValue).to.equal('Label change');
    // });

    // it('[Label-22] Verify can set the required icon for label with require is true', function () {
    //     $(XPATH_LABEL_SET_REQUIRE).click()
    //     let labelValue = browser.getText(XPATH_LABEL_REQUIRE_VALUE);
    //     expect(labelValue).to.equal('Label*');
    // });

    // it('[Label-23] Verity can hidden the required icon for exisiting required label when using setRequired(false)', function () {
    //     $(XPATH_LABEL_SET_NON_REQUIRE).click()
    //     let labelValue = browser.getText(XPATH_LABEL_NON_REQUIRE_VALUE);
    //     expect(labelValue).to.equal('Label');
    // });

    // it('[Label-24] Verify can set the required label when using setRequired(true) for the existing required label', function () {
    //     $(XPATH_LABEL_SET_REQUIRE_EXISTED).click()
    //     let labelValue = browser.getText(XPATH_LABEL_REQUIRE_EXISTED_VALUE);
    //     expect(labelValue).to.equal('Label*');
    // });

    // it('[Label-30] Verify that can show invisible Label on UI', function () {
    //     $(XPATH_LABEL_HIDE).click()
    //     let labelVisible = browser.isVisible(XPATH_LABEL_NON_DISPLAYED);
    //     expect(labelVisible).to.equal(false);
    // });
    // it('[Label-32] Verify that can disable the current enable Text on UI', function () {
    //     $(XPATH_LABEL_SET_DISABLE).click()
    //     let labelEnable = browser.isEnabled(XPATH_LABEL_ENABLE);
    //     expect(labelEnable).to.equal(true);
    // });

    // it('[Label-34] Verify that can disable the current disable Text on UI', function () {
    //     $(XPATH_LABEL_SET_DISABLE).click()
    //     let labelEnable = browser.isEnabled(XPATH_LABEL_ENABLE);
    //     expect(labelEnable).to.equal(true);
    // });
});