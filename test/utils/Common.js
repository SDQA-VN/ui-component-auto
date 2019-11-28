const $ = require('./ReturnElement').singleElement;
const Login = require('../pageObject/credentials/Login');
const Logout = require('../pageObject/credentials/Logout');
const ReturnElement = require('../utils/ReturnElement');
const CONFIG = require('../config.json');
const CONSTANT = require('../constant');
const checkElementExistence = require('./ReturnElement').checkElementExistence;
const APP_URL_UPLOAD = CONSTANT.PATH.APP_SETTING_JS_CUSTOMIZE;
const path = require('path');
const fs = require('fs');

logInSlash = () => {
    console.log('!!! TestSuite setting up !!!');
    browser.url(CONSTANT.PATH.APP_INDEX);
    browser.windowHandleFullscreen();
    Login.submitLoginFormWithValidCred(CONFIG.credentials.username, CONFIG.credentials.password);
    browser.waitUntil(() => {
        return browser.getUrl() === CONSTANT.PATH.APP_INDEX;
    }, 30000, 'expected URL to be different after 5s');
};

logOutSlash = () => {
    console.log('!!! Logout !!!');
    Logout.navigateToLoginPage();
    return this;
};

addFile = (fileName) => {
    var FILE_PATH = path.join(__dirname, '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`, `${fileName}`);
    let UPLOAD_JS_FILE_XPATH = '//*[@id="jsFiles_DESKTOP-browse"]//input';
    let UPLOAD_CSS_FILE_XPATH = '//*[@id="jsFiles_DESKTOP_CSS-browse"]//input';
    if (fileName.includes(".js")) {
        checkElementExistence(UPLOAD_JS_FILE_XPATH);
        browser.chooseFile(UPLOAD_JS_FILE_XPATH, FILE_PATH);
    }
    else if (fileName.includes(".css")) {
        checkElementExistence(UPLOAD_CSS_FILE_XPATH);
        browser.chooseFile(UPLOAD_CSS_FILE_XPATH, FILE_PATH);
    }
};

addLink = (link) => {
    let UPLOAD_JS_LINK_BUTTON_XPATH = '//*[@id="jsFiles_DESKTOP-container"]//span[@class="gaia-customize-url-button-text"]'
    let UPLOAD_JS_LINK_INPUT_XPATH = '//input[@id="url-:v-text"]'
    let UPLOAD_JS_LINK_SAVE_BUTTON_XPATH = '//*[@id="jsFiles_DESKTOP-container"]//span[@class="gaia-customize-url-add-save"]'
    checkElementExistence(UPLOAD_JS_LINK_BUTTON_XPATH)
    $(UPLOAD_JS_LINK_BUTTON_XPATH).click();
    checkElementExistence(UPLOAD_JS_LINK_INPUT_XPATH)
    $(UPLOAD_JS_LINK_INPUT_XPATH).setValue(link);
    $(UPLOAD_JS_LINK_SAVE_BUTTON_XPATH).click();
}

deleteFile = () => {
    let DELETE_JS_FILE_XPATH = '//*[@id="jsFiles_DESKTOP-filelist"]//div[2]';
    let DELETE_CSS_FILE_XPATH = '//*[@id="jsFiles_DESKTOP_CSS-filelist"]//div[2]';
    let FILE_JS_LIST_XPATH = '#jsFiles_DESKTOP-filelist .plupload_file_name';
    let FILE_CSS_LIST_XPATH = '#jsFiles_DESKTOP_CSS-filelist .plupload_file_name';
    checkElementExistence(FILE_JS_LIST_XPATH);
    checkElementExistence(FILE_CSS_LIST_XPATH);
    var jsFiles = browser.elements(FILE_JS_LIST_XPATH).value.length;
    var cssFiles = browser.elements(FILE_CSS_LIST_XPATH).value.length;
    if (jsFiles > 0) {
        for (let i = 0; i < jsFiles; i++) {
            browser.click(DELETE_JS_FILE_XPATH);
        }
    }
    if (cssFiles > 0) {
        for (let j = 0; j < cssFiles; j++) {
            browser.click(DELETE_CSS_FILE_XPATH);
        }
    }
}

uploadFile = () => {
    let XPATH_UPDATE_APP_BTN = '.gaia-admin-app-deploy-button';
    let XPATH_OK_BTN = '//button[@name="ok"]';
    let XPATH_APP_INDEX_CONTENT = '.app-index-contents-gaia';
    console.log('!!! Upload file AAAAA !!!');
    const sourceFolder = path.join(__dirname, '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`);
    const test = fs.readdirSync(sourceFolder);
    const result = test.sort(function (file) {
        if (file.includes('.min'))
            return -1;
        else if (file.includes('_body.js'))
            return 0;
        else if (file.includes('testgrid'))
            return 0;
        else
            return 1;
    });
    // deleteFile();
    // if (`${CONFIG.folderTest}` == "react-non-jsx") {
    //     addLink('https://unpkg.com/react@16/umd/react.production.min.js')
    //     addLink('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js')
    // // }
    // for (let fileName of result) {
    //     // addFile(fileName)
    //     // console.log(fileName)
    // };
    // browser.submitForm('#application-customize-gaia');
    // checkElementExistence(XPATH_UPDATE_APP_BTN);
    // $(XPATH_UPDATE_APP_BTN).click();
    // $(XPATH_OK_BTN).click();
    // checkElementExistence(XPATH_APP_INDEX_CONTENT);
};
module.exports = {
    logInSlash: logInSlash,
    logOutSlash: logOutSlash,
    uploadFile: uploadFile
} 
