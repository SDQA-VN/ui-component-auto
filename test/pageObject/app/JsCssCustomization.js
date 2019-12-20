const CONSTANT = require('../../constant');
const path = require('path');
const fs = require('fs');
const CONFIG = require('../../config.json');
const Helper = require('../../helper/main')


const UPLOAD_JS_FILE_PC_LOCATOR = '//span[@id="jsFiles_DESKTOP-browse"]//input';
const UPLOAD_CSS_FILE_PC_LOCATOR = '//*[@id="jsFiles_DESKTOP_CSS-browse"]//input';
const SAVE_LOCATOR = '//input[@value="Save"]';
const JS_FILES_LIST_LOCATOR = '//*[@id="jsFiles_DESKTOP-filelist"]';
const DELETE_JS_LOCATOR = '//div[@id="jsFiles_DESKTOP-filelist"]//button[contains(@id,"remove")][1]';
const DELETE_CSS_LOCATOR = '//div[@id="jsFiles_DESKTOP_CSS-filelist"]//button[contains(@id,"remove")][1]';
const UPLOAD_JS_LINK_BUTTON_LOCATOR = '//*[@id="jsFiles_DESKTOP-container"]//span[@class="gaia-customize-url-button-text"]'
const UPLOAD_JS_LINK_INPUT_LOCATOR = '//input[@id="url-:v-text"]'
const sourceFolder = path.join(__dirname, '..', '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`);

class JsCssCustomization {
    navigate() {
        Helper.BrowserHandler.navigate(CONSTANT.PATH.APP_SETTING_JS_CUSTOMIZE)
        Helper.ElementHandler.verifyTitle('JavaScript and CSS Customization');
        Helper.ElementHandler.waitForElementExit(JS_FILES_LIST_LOCATOR);
        return this;
    };

    _addJSFiles(filePath) {
        Helper.ElementHandler.waitForElementExit(UPLOAD_JS_FILE_PC_LOCATOR);
        browser.chooseFile(UPLOAD_JS_FILE_PC_LOCATOR, filePath);
        return this;
    };

    _addCSSFiles(filePath) {
        Helper.ElementHandler.waitForElementExit(UPLOAD_CSS_FILE_PC_LOCATOR);
        browser.chooseFile(UPLOAD_CSS_FILE_PC_LOCATOR, filePath);
        return this;
    };

    _addJSLink(link) {
        Helper.ElementHandler.waitForElementExit(UPLOAD_JS_LINK_BUTTON_LOCATOR)
        $(UPLOAD_JS_LINK_BUTTON_LOCATOR).click();
        Helper.ElementHandler.waitForElementExit(UPLOAD_JS_LINK_INPUT_LOCATOR)
        $(UPLOAD_JS_LINK_INPUT_LOCATOR).setValue(link);
        return this;
    };

    deleteAllJSFiles() {
        while ($(DELETE_JS_LOCATOR).isVisible()) {
            $(DELETE_JS_LOCATOR).click();
        }
        while ($(DELETE_CSS_LOCATOR).isVisible()) {
            $(DELETE_CSS_LOCATOR).click();
        }
        return this;
    };

    save() {
        $(SAVE_LOCATOR).click();
        Helper.ElementHandler.verifyTitle('Settings');
        return this;
    };

    _orderFile(sourceFolder) {
        const test = fs.readdirSync(sourceFolder);
        const result = test.sort(function (file) {
            if (file.includes('body.js'))
                return 1;
            else if (file.includes('testgrid'))
                return 1;
        }).reverse();
        return result;
    }

    uploadFile() {
        console.log('!!! Upload file !!!');
        const result = this._orderFile(sourceFolder);
        if (`${CONFIG.folderTest}` == "react-non-jsx") {
            this.addJSLink('https://unpkg.com/react@16/umd/react.production.min.js');
            this.addJSLink('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js');
        }
        if (`${CONFIG.folderTest}` == 'js'){
            const JSUIComponentPath = path.join(__dirname, '..', '..', '..', 'node_modules','@kintone', 'kintone-ui-component', 'dist','kintone-ui-component.min.js');
            this._addJSFiles(JSUIComponentPath);
            const CSSUIComponentPath = path.join(__dirname, '..', '..', '..', 'node_modules','@kintone', 'kintone-ui-component', 'dist','kintone-ui-component.min.css');
            this._addCSSFiles(CSSUIComponentPath);
        }
        for (let fileName of result) {
            if (fileName.includes('.js')) {
                const filePath = path.join(__dirname, '..', '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`, `${fileName}`);
                this._addJSFiles(filePath);
            }
            else if (fileName.includes('.css')) {
                const filePath = path.join(__dirname, '..', '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`, `${fileName}`);
                this._addCSSFiles(filePath);
            }
        };
        return this;
    };
}
module.exports = new JsCssCustomization;