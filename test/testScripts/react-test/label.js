const common = require('../../utils/common');
const Helper = require('../../helper/main.js')

const XPATH_LABEL = '.label-render .kuc-label';
const XPATH_LABEL_VALUE = '.label-setText .kuc-label';
const XPATH_LABEL_NO_OPTION = '.label-no-option .kuc-label';
const XPATH_LABEL_ONLY_TEXT = '.label-only-text .kuc-label';
const XPATH_LABEL_ONLY_REQUIRED = '.label-only-isRequired .kuc-label';
const XPATH_LABEL_ONLY_REQUIRED_BUTTON = '.label-only-isRequired .change-only-isRequired';
// const XPATH_LABEL_ONLY_DISABLED ='.label-only-disabled .kuc-label';
const XPATH_LABEL_ONLY_DISABLED_BUTTON = '.label-only-isDisabled .change-only-isDisabled';
const XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON = '.label-only-isDisabled .get-state';
const XPATH_LABEL_ONLY_VISIBLE_BUTTON = '.label-only-isVisible .change-only-isVisible';
const XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON = '.label-only-isVisible .get-state';
const XPATH_LABEL_SET_TEXT_VALUE = '.label-setText .kuc-label';
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


describe('kintoneUIComponent - Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Label-2] Verify that the Label and Required Label have the UI is the same as on kintone', function () {
        Helper.ElementHandler
            .waitForElement(XPATH_LABEL)
            .verifyElementColor(XPATH_LABEL, 'color', '#333333')
            .verifyElementSize(XPATH_LABEL, 315, 29)
    });

    it('[Label-4] Verify that can create label without any options value', function () {
        Helper.ElementHandler
            .verifyAttribute(XPATH_LABEL_NO_OPTION, 'class', 'kuc-label')
            .verifyElementEnabled(XPATH_LABEL_NO_OPTION)
            .verifyElementNotExisting(XPATH_LABEL_NO_OPTION + " span.kuc-require")
    });

    it('[Label-3-5] Verify that can create label with full options value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_LABEL, 'Label*')
            .verifyElementEnabled(XPATH_LABEL)
            .verifyElementExisting(XPATH_LABEL)
            .verifyElementExisting(XPATH_LABEL + " span.kuc-require")
    });

    it('[Label-6] Verify that can create label with only option.Text', function () {
        Helper.ElementHandler
            .verifyText(XPATH_LABEL_ONLY_TEXT, 'Label with only option.Text')
            .verifyElementEnabled(XPATH_LABEL_ONLY_TEXT)
            .verifyElementExisting(XPATH_LABEL_ONLY_TEXT)
            .verifyElementNotExisting(XPATH_LABEL_ONLY_TEXT + " span.kuc-require")
    });

    it('[Label-9-10] Verify that can create label with only option.isRequired are true and false', function () {
        Helper.ElementHandler
            .verifyElementEnabled(XPATH_LABEL_ONLY_REQUIRED)
            .verifyElementExisting(XPATH_LABEL_ONLY_REQUIRED)
            .verifyElementExisting(XPATH_LABEL_ONLY_REQUIRED + " span.kuc-require")
            .click(XPATH_LABEL_ONLY_REQUIRED_BUTTON)
            .verifyElementNotExisting(XPATH_LABEL_ONLY_REQUIRED + " span.kuc-require")
    });

    it('[Label-11-12] Verify that create a Label with only option.isDisable are true and false', function () {
        Helper.ElementHandler
            .click(XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON)
            .verifyAlertText('true')
            .click(XPATH_LABEL_ONLY_DISABLED_BUTTON)
            .click(XPATH_LABEL_ONLY_DISABLED_VALUE_BUTTON)
            .verifyAlertText('false')
    });

    it('[Label-13-14] Verify that create a Label with only option.isVisible are true and false', function () {
        Helper.ElementHandler
            .click(XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON)
            .verifyAlertText('true')
            .click(XPATH_LABEL_ONLY_VISIBLE_BUTTON)
            .click(XPATH_LABEL_ONLY_VISIBLE_VALUE_BUTTON)
            .verifyAlertText('false')
    });

    it('[Label-15-16] Verify can set text for Label which not contains exisiting text and for Alert which contains existing text', function () {
        Helper.ElementHandler
            .verifyText(XPATH_LABEL_SET_TEXT_VALUE, '')
            .click(XPATH_LABEL_SET_TEXT_BUTTON)
            .verifyText(XPATH_LABEL_SET_TEXT_VALUE, 'Label changed text')
            .click(XPATH_LABEL_SET_TEXT_BUTTON_1)
            .verifyText(XPATH_LABEL_SET_TEXT_VALUE, 'Label changed text second time')
    });

    it('[Label-17] Verify that can set text for Label with XSS value', function () {
        Helper.ElementHandler
            .verifyText(XPATH_LABEL_SET_TEXT_XSS_VALUE, 'Label before set XSS')
            .click(XPATH_LABEL_SET_TEXT_XSS_BUTTON)
            .verifyText(XPATH_LABEL_SET_TEXT_XSS_VALUE, "alert('Label after set XSS');")
    })

    it('[Alert-18] Verify that can set text for invisible Label', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(XPATH_LABEL_INVISIBLE_SET_TEXT_VALUE)
            .click(XPATH_LABEL_INVISIBLE_SET_TEXT_BUTTON)
            .click(XPATH_LABEL_INVISIBLE_SHOW_TEXT_BUTTON)
            .verifyText(XPATH_LABEL_INVISIBLE_SET_TEXT_VALUE, "Label after change")
    })

    it('[Label-19] Verify that can set text to blank for Label', function () {
        Helper.ElementHandler
            .verifyText(XPATH_LABEL_SET_TEXT_BLANK_VALUE, 'Label before set text to blank')
            .click(XPATH_LABEL_SET_TEXT_BLANK_BUTTON)
            .verifyText(XPATH_LABEL_SET_TEXT_BLANK_VALUE, '')
    })

    it('[Label-21-22-23] Verify that can set required icon when isRequired is true, hidden required icon when setRequired(False),set required icon when setRequired(True)', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_LABEL_SET_REQUIRE_VALUE)
            .verifyElementColor(XPATH_LABEL_SET_REQUIRE_VALUE, 'color', '#e74c3c')
            .verifyText(XPATH_LABEL_SET_REQUIRE_VALUE, '*')
            .click(XPATH_LABEL_SET_REQUIRE_TRUE_BUTTON)
            .verifyElementExisting(XPATH_LABEL_SET_REQUIRE_VALUE)
            .click(XPATH_LABEL_SET_REQUIRE_FALSE_BUTTON)
            .verifyElementNotExisting(XPATH_LABEL_SET_REQUIRE_VALUE)
    })

    it('[Alert-24] Verify that can set require for invisible Label', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE)
            .verifyElementNotExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE)
            .click(XPATH_LABEL_INVISIBLE_SET_REQUIRE_BUTTON)
            .click(XPATH_LABEL_INVISIBLE_SHOW_REQUIRE_BUTTON)
            .verifyElementExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE)
            .verifyElementExisting(XPATH_LABEL_INVISIBLE_SET_REQUIRE_VALUE)
    })

    it('[Label-27-28] Verify that can show invisible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementNotExisting(XPATH_LABEL_SHOW_INVISIBLE)
            .verifyElementExisting(XPATH_LABEL_SHOW_VISIBLE)
            .click(XPATH_LABEL_SHOW_BUTTON)
            .verifyElementExisting(XPATH_LABEL_SHOW_INVISIBLE)
            .verifyElementExisting(XPATH_LABEL_SHOW_VISIBLE)
    });

    it('[Label-29-30] Verify that can hide visible Label and hide invisible Label on UI', function () {
        Helper.ElementHandler
            .verifyElementExisting(XPATH_LABEL_HIDE_VISIBLE)
            .verifyElementNotExisting(XPATH_LABEL_HIDE_INVISIBLE)
            .click(XPATH_LABEL_HIDE_BUTTON)
            .verifyElementNotExisting(XPATH_LABEL_HIDE_VISIBLE)
            .verifyElementNotExisting(XPATH_LABEL_HIDE_INVISIBLE)
    });

    it('[Label-31-32] Verify that can disable the current enabled and disable the current disabled Label', function () {
        Helper.ElementHandler
            .click(XPATH_LABEL_DISABLE_VALUE)
            .verifyAlertText('false true')
            .click(XPATH_LABEL_DISABLE_BUTTON)
            .click(XPATH_LABEL_DISABLE_VALUE)
            .verifyAlertText('true true')
    });

    it('[Label-33-34] Verify that can enable the current disabled and enable the current enabled Label', function () {
        Helper.ElementHandler
            .click(XPATH_LABEL_ENABLE_VALUE)
            .verifyAlertText('true false')
            .click(XPATH_LABEL_ENABLE_BUTTON)
            .click(XPATH_LABEL_ENABLE_VALUE)
            .verifyAlertText('true true')
    });

    it('[Label-36-37] Verify that the callback function will be trigger when click on the label', function () {
        Helper.ElementHandler
            .click(XPATH_LABEL_ON_CLICK)
            .verifyAlertText('Label has been clicked')
    });
});