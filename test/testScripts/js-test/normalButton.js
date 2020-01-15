const common = require('../../utils/Common.js');
const Helper = require('../../helper/main.js');

const NORMAL_BUTTON_CONSTRUCTOR = "//div[@id='normalButton_constructorEl']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_NONETEXT = "//div[@id='normalButton_NoneTextEl']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_NONETEXT_SET_TEXT_BUTTON = "//button[text()='Set Text Normal Button']";
const NORMAL_BUTTON_NONEPARAMETER = "//div[@id='normalButton_NoneParameterEl']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_NONEPARAMETER_SET_TEXT_BUTTON = "//button[text()='Set Text Without Param Normal Button']"
const NORMAL_BUTTON_SET_TYPE = "//div[@id='normal-button-set-type']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_SET_TYPE_BUTTON = "//button[text()='Set Type Normal Button']";
const NORMAL_BUTTON_INVISIBLE = "//div[@id='normal-button-show']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_SHOW_BUTTON = "//button[text()='Show Normal Button']";
const NORMAL_BUTTON_VISIBLE = "//div[@id='normal-button-hide']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_HIDE_BUTTON = "//button[text()='Hide Normal Button']";
const NORMAL_BUTTON_DISABLE = "//div[@id='normal-button-disable']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_DISABLE_BUTTON = "//button[text()='Disable Normal Button']";
const NORMAL_BUTTON_ENABLE = "//div[@id='normal-button-enable']//button[contains(@class,'kuc-btn')]";
const NORMAL_BUTTON_ENABLE_BUTTON = "//button[text()='Enable Normal Button']";
const NORMAL_BUTTON_ON_TRIGGER = "//div[@id='normal-button-on-trigger']//button[contains(@class,'kuc-btn')]";

describe('kintoneUIComponent - Normal Button', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Normal button-1]Normal button should has white for background color and blue for text color', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_CONSTRUCTOR)
            .verifyElementColor(NORMAL_BUTTON_CONSTRUCTOR, 'background-color', '#f7f9fa')
            .verifyElementColor(NORMAL_BUTTON_CONSTRUCTOR, 'color', '#3498db')
    });

    it('[Normal button-6] should create a button without any options value', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_CONSTRUCTOR)
            .verifyElementVisible(NORMAL_BUTTON_CONSTRUCTOR)
    });

    it('[Normal button-16] should changed text by function setText which not contains existing text', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_NONETEXT)
            .click(NORMAL_BUTTON_NONETEXT_SET_TEXT_BUTTON)
            .verifyText(NORMAL_BUTTON_NONETEXT, 'Normal Button Text Changed')
    });

    it('[Normal button-19] should set the text for Button when using function without parameter', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_NONEPARAMETER)
            .verifyText(NORMAL_BUTTON_NONEPARAMETER, 'Normal Button None Parameter')
            .click(NORMAL_BUTTON_NONEPARAMETER_SET_TEXT_BUTTON)
            .verifyText(NORMAL_BUTTON_NONEPARAMETER, '')
    });

    it('[Normal button-20] should normal type for button', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_SET_TYPE)
            .verifyAttribute(NORMAL_BUTTON_SET_TYPE, 'class', 'kuc-btn submit')
            .click(NORMAL_BUTTON_SET_TYPE_BUTTON)
            .verifyAttribute(NORMAL_BUTTON_SET_TYPE, 'class', 'kuc-btn normal')
    });

    it('[Normal button-25] should show invisible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementNotVisible(NORMAL_BUTTON_INVISIBLE)
            .click(NORMAL_BUTTON_SHOW_BUTTON)
            .verifyElementVisible(NORMAL_BUTTON_INVISIBLE)
    });

    it('[Normal button-27] should hide the visible Button on UI', function () {
        Helper.ElementHandler
            .verifyElementVisible(NORMAL_BUTTON_VISIBLE)
            .click(NORMAL_BUTTON_HIDE_BUTTON)
            .verifyElementNotVisible(NORMAL_BUTTON_VISIBLE)
    });

    it('[Normal button-29] should disable the current enable Button on UI', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_DISABLE)
            .verifyElementEnabled(NORMAL_BUTTON_DISABLE)
            .click(NORMAL_BUTTON_DISABLE_BUTTON)
            .verifyElementDisabled(NORMAL_BUTTON_DISABLE)
    });

    it('[Normal button-31] should enable the disabled Button on UI', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_ENABLE)
            .verifyElementDisabled(NORMAL_BUTTON_ENABLE)
            .click(NORMAL_BUTTON_ENABLE_BUTTON)
            .verifyElementEnabled(NORMAL_BUTTON_ENABLE)
    });

    it('[Normal button-33-34] Normal button can be clicked and call trigger', function () {
        Helper.ElementHandler
            .waitForElement(NORMAL_BUTTON_ON_TRIGGER)
            .click(NORMAL_BUTTON_ON_TRIGGER)
            .verifyAlertText('Normal Button has been clicked')
    });
});