const $ = require('../../util/ReturnElement').singleElement;
const $$ = require('../../util/ReturnElement').listOfElements;
const common = require('../../util/common');
const expect = require('chai').expect;

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

    it('[Spinner-3] Verify that operation of spinner and the UI is the same as spec', function () {
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
    // it('[Spinner-4] Verify that can create a Spinner successfully without any parameters', function () {
    //     $(XPATH_SPINNER_DISLAY_BUTTON).click()
    //     let spinnerExist = browser.isExisting(XPATH_SPINNER);
    //     expect(spinnerExist).to.equal(true);
    //     $(XPATH_SPINNER_NON_DISLAY_BUTTON).click()
    // });
});
