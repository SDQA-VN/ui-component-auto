const JsCustomization = require('../../pageObject/app/JsCssCustomization');
const AppSettings = require('../../pageObject/app/AppSettings')

describe('kintoneUIComponent - JS test - Upload files', function () {
    it('upload file', function () {
        JsCustomization.navigate();
        JsCustomization.deleteAllJSFiles();
        JsCustomization.uploadFile();
        JsCustomization.save();
        AppSettings.updateApp();
    })
});