const $ = require('./ReturnElement').singleElement;
const checkElementExistence = require('./ReturnElement').checkElementExistence;
const JsCssCustomization = require('../pageObject/app/JsCssCustomization');
const CONFIG = require('../config.json');
const path = require('path');
const fs = require('fs');

const XPATH_UPDATE_APP_BTN = '//*[@id="app-flow-info"]/div/div[5]/button[1]';
const XPATH_OK_BTN = '/html/body//div[2]/button';
const XPATH_APP_INDEX_CONTENT = '.app-index-contents-gaia';
const sourceFolder = path.join(__dirname, '..', '..', 'kintoneUIComponent', `${CONFIG.folderTest}`);


class FileHandling {
    orderFile(sourceFolder) {
        const test = fs.readdirSync(sourceFolder);
        const result = test.sort(function (file) {
            if (file.includes('.min')) {
                return -1;
            }
            else if (file.includes('_body.js')) {
                return 0;
            }
            else if (file.includes('testgrid'))
                return 0;
            else
                return 1;
        });
        return result;
    }

    uploadFile() {
        console.log('!!! Upload file !!!');
        const result = this.orderFile(sourceFolder);
        if (`${CONFIG.folderTest}` == "react-non-jsx") {
            JsCssCustomization.addJSLink('https://unpkg.com/react@16/umd/react.production.min.js');
            JsCssCustomization.addJSLink('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js');
        }
        for (let fileName of result) {
            if (fileName.includes('.js')) {
                JsCssCustomization.addJSFiles(fileName);
            }
            else {
                JsCssCustomization.addCSSFiles(fileName);
            }
        };
        return this;
    };
}

module.exports = new FileHandling;




