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
        const source = [];
        fs.readdirSync(sourceFolder).forEach(file => {
            source.push(file);
        });
        const result = source.sort(function (item) {
            if (item.includes('.min')) {
                return 1
            }
            if (item.includes('_body.js')) {
                return 2
            };
            if (item.includes('testgrid.js')) {
                return 3
            };
        }).reverse();
        return result;
    }

    uploadFile() {
        console.log('!!! Upload file !!!');
        const result = this.orderFile(sourceFolder);
        if (`${CONFIG.folderTest}` == "react-non-jsx") {
            addLink('https://unpkg.com/react@16/umd/react.production.min.js')
            addLink('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js')
        }
        for (let fileName of result) {
            console.log(fileName)
            // if(fileName.includes('.js')){

            // }
        };
    };
}

module.exports = new FileHandling;




