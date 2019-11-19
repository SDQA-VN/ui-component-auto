const JsCustomization = require('../../pageObject/app/JsCssCustomization');
const Common = require('../../utils/Common');
const FileHandling = require('../../utils/FileHandling');
const path = require('path')

const KINTONE_JS_SDK_FILE_PATH = path.join(__dirname, '..', '..','..', 'node_modules', '@kintone', 'kintone-ui-component', 'dist', 'kintone-ui-component.min.js');

describe('kintoneUIComponent - JS test - Upload files', function () {
    it('upload file', function () {
        Common.logInSlash();
        Common.uploadFile();
        Common.logOutSlash();
    })
});