const Helper = require('../../helper/main');
const common = require('../../utils/common');
const path = require('path');

const CONSTRUCTOR_SPINNER = "//div[@id='constructor-spinner']//div[@class='kuc-spinner']//div[@class='kuc-loader']";
const SHOW_BUTTON_SPINNER = "//button[contains(text(),'Show Spinner')]";
const HIDE_BUTTON_SPINNER = "//button[contains(text(),'Hide Spinner')]";

describe('kintoneUIComponent - Spinner', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Spinner-2] Verify that operation of spinner and the UI is the same as spec', function () {
        let checkVisible = browser.isVisible(CONSTRUCTOR_SPINNER);
        expect(checkVisible).to.equal(false);
        $(SHOW_BUTTON_SPINNER).click();
        checkVisible = browser.isVisible(CONSTRUCTOR_SPINNER);
        let spinnerColor = $(CONSTRUCTOR_SPINNER).getCssProperty('color');
        let spinnerPosition = $(CONSTRUCTOR_SPINNER).getCssProperty('position');
        expect(checkVisible).to.equal(true);
        expect(spinnerColor.parsed.hex).to.equal('#333333');
        expect(spinnerPosition.value).to.equal('static');
        $(HIDE_BUTTON_SPINNER).click()
    });
    it('[Spinner-3] Verify that can create a Spinner successfully without any parameters', function () {
        Helper.ElementHandler
            .click(SHOW_BUTTON_SPINNER)
            .verifyElementExists(CONSTRUCTOR_SPINNER)
            .click(HIDE_BUTTON_SPINNER)
    });
});
