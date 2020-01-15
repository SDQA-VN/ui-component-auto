const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

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
        Helper.ElementHandler
            .verifyElementNotVisible(CONSTRUCTOR_SPINNER)
            .click(SHOW_BUTTON_SPINNER)
            .verifyElementVisible(CONSTRUCTOR_SPINNER)
            .verifyElementColor(CONSTRUCTOR_SPINNER,'color','#333333')
            .verifyElementPosition(CONSTRUCTOR_SPINNER,'position','static')
            .click(HIDE_BUTTON_SPINNER)
    });
    it('[Spinner-3] Verify that can create a Spinner successfully without any parameters', function () {
        Helper.ElementHandler
            .click(SHOW_BUTTON_SPINNER)
            .verifyElementExists(CONSTRUCTOR_SPINNER)
            .click(HIDE_BUTTON_SPINNER)
    });
});
