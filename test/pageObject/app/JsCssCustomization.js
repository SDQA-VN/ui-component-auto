const ReturnElement = require('../../utils/ReturnElement');
const CONSTANT = require('../../constant');

const UPLOAD_JS_FILE_PC_LOCATOR = '//*[@id="jsFiles_DESKTOP-browse"]//input';
const UPLOAD_CSS_FILE_PC_LOCATOR = '//*[@id="jsFiles_DESKTOP_CSS-browse"]//input';
const SAVE_LOCATOR = '//input[@value="Save"]';
const JS_FILES_LIST_LOCATOR = '//*[@id="jsFiles_DESKTOP-filelist"]';
const DELETE_LOCATOR = '//div[@id="jsFiles_DESKTOP-filelist"]//button[contains(@id,"remove")][1]';
const UPLOAD_JS_LINK_BUTTON_LOCATOR = '//*[@id="jsFiles_DESKTOP-container"]//span[@class="gaia-customize-url-button-text"]'
const UPLOAD_JS_LINK_INPUT_LOCATOR = '//input[@id="url-:v-text"]'

class JsCssCustomization {
    navigate() {
        browser.url(CONSTANT.PATH.APP_SETTING_JS_CUSTOMIZE);
        ReturnElement.waitForTitleDisplayed('JavaScript and CSS Customization');
        return ReturnElement.checkElementExistence(JS_FILES_LIST_LOCATOR);
    };

    addJSFiles(filePath) {
        ReturnElement.checkElementExistence(UPLOAD_JS_FILE_PC_LOCATOR);
        browser.chooseFile(UPLOAD_JS_FILE_PC_LOCATOR, filePath);
        return this;
    };

    addCSSFiles(filePath) {
        ReturnElement.checkElementExistence(UPLOAD_CSS_FILE_PC_LOCATOR);
        browser.chooseFile(UPLOAD_CSS_FILE_PC_LOCATOR, filePath);
        return this;
    };

    addJSLink(link) {
        checkElementExistence(UPLOAD_JS_LINK_BUTTON_LOCATOR)
        $(UPLOAD_JS_LINK_BUTTON_LOCATOR).click();
        checkElementExistence(UPLOAD_JS_LINK_INPUT_LOCATOR)
        $(UPLOAD_JS_LINK_INPUT_LOCATOR).setValue(link);
        return this;
    };

    deleteAllJSFiles() {
        while ($(DELETE_LOCATOR).isVisible()) {
            $(DELETE_LOCATOR).click();
        }
        return this;
    };

    save() {
        $(SAVE_LOCATOR).click();
        return ReturnElement.waitForTitleDisplayed('Settings');
    };
}
module.exports = new JsCssCustomization;