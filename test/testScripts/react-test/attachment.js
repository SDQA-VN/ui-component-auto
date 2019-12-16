const $ = require('../../utils/ReturnElement').singleElement;
const isVisibled = require('../../utils/ReturnElement').waitUntilSelectorVisibled;
const isEnabled = require('../../utils/ReturnElement').waitUntilSelectorEnabled;
const common = require('../../utils/common');
const expect = require('chai').expect;

// const CONSTRUCTOR_FIELDGROUP = "//div[@id='constructor-fieldgroup']//div[@class='kuc-fieldgroup']//ul[@class='kuc-fieldgroup-container']//li";
const CONSTRUCTOR_ATTACHMENT = "//div[@id='constructor-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//a";
const CONSTRUCTOR_FILENAME_ATTACHMENT = "//div[@id='constructor-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-filelist kuc-attachment-file-filelist-list']//div[@class='kuc-attachment_delete kuc-attachment-file-item']";
const SET_FILES_FILENAME_ATTACHMENT = "//div[@id='set-files-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-filelist kuc-attachment-file-filelist-list']//div[@class='kuc-attachment_delete kuc-attachment-file-item']";
const SET_FILES_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Files of Attachment')]";
const GET_FILES_BUTTON_ATTACHMENT = "//button[contains(text(),'Get Files of Attachment')]";
// const SET_DROPZONE_TEXT_ATTACHMENT = "//div[@id='set-dropzone-text-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-droppable']//div[@class='kuc-attachment-file-droppable-text']"
// const SET_DROPZONE_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Dropzone Text of Attachment')]";
const SET_BROWSE_BUTTON_TEXT_ATTACHMENT = "//div[@id='set-browse-button-text-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//a//span"
const SET_BROWSE_BUTTON_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Browse Button Text of Attachment')]";
const SET_FILE_LIMIT_TEXT_ATTACHMENT_JS = "//div[@id='set-file-limit-text-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-constraints']";
const SET_FILE_LIMIT_TEXT_ATTACHMENT_REACT = "//div[@id='set-file-limit-text-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//p[@class='kuc-attachment-file-constraints']";
const SET_FILE_LIMIT_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set File Limit Text of Attachment')]";
const SET_ERROR_MESSAGE_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Error Message of Attachment')]";
const SET_ERROR_MESSAGE_ATTACHMENT = "//div[@id='set-error-message-attachment']//div[@class='kuc-attachment-file-error']"
const SHOW_ERROR_BUTTON_ATTACHMENT = "//button[contains(text(),'Show Error Message of Attachment')]";
const HIDE_ERROR_BUTTON_ATTACHMENT = "//button[contains(text(),'Hide Error Message of Attachment')]";
const ON_CALLBACK_ATTACHMENT = "//div[@id='on-callback-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//a";
const ON_CALLBACK_FILENAME_ATTACHMENT = "//div[@id='on-callback-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-filelist kuc-attachment-file-filelist-list']//div[@class='kuc-attachment_delete kuc-attachment-file-item']";
const SHOW_HIDE_ATTACHMENT = "//div[@id='show-hide-attachment']//div[@class='kuc-attachment-outer']";
const SHOW_BUTTON_ATTACHMENT = "//button[contains(text(),'Show Attachment')]";
const HIDE_BUTTON_ATTACHMENT = "//button[contains(text(),'Hide Attachment')]";

describe('kintoneUIComponent - Attachment', function () {
    before(() => {
        common.logInSlash();
    });
    after(() => {
        common.logOutSlash();
    });

    it('[Attachment-1] should Verify the operation of Attachment', function () {
        browser.chooseFile(CONSTRUCTOR_ATTACHMENT + '//input', 'C:/Users/k001534/Desktop/1.txt');
        let checkUploadFile = $(CONSTRUCTOR_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_name']").getText();
        expect(checkUploadFile).to.equal('1.txt');
        $(CONSTRUCTOR_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_action']//button").click();
        let deleteUploadFile = browser.isExisting(CONSTRUCTOR_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_name']");
        expect(deleteUploadFile).to.equal(false);
    });

    it('[Attachment-2] should Verify the operation of Attachment', function () {
        $(SET_FILES_BUTTON_ATTACHMENT).click();
        let checkUploadFile = $(SET_FILES_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_name']").getText();
        let checkSizeFile = $(SET_FILES_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_size']").getText();
        expect(checkUploadFile).to.equal('test_1');
        expect(checkSizeFile).to.equal('12 KB');
    });

    it('[Attachment-3] should Verify the operation of Attachment', function () {
        $(GET_FILES_BUTTON_ATTACHMENT).click();
        let alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.equal('[{"name":"test_1","size":12345}]');
    });

    // it('[Attachment-4] should Verify the operation of Attachment', function () {
    //     $(SET_DROPZONE_TEXT_BUTTON_ATTACHMENT).click();
    //     let dropzoneText = $(SET_DROPZONE_TEXT_ATTACHMENT).getText();
    //     expect(dropzoneText).to.equal('Drop files here');
    // });

    it('[Attachment-5] should Verify the operation of Attachment', function () {
        $(SET_BROWSE_BUTTON_TEXT_BUTTON_ATTACHMENT).click();
        let browseButtonText = $(SET_BROWSE_BUTTON_TEXT_ATTACHMENT).getText();
        expect(browseButtonText).to.equal('Drop files here');
    });

    it('[Attachment-6] should Verify the operation of Attachment', function () {
        $(SET_FILE_LIMIT_TEXT_BUTTON_ATTACHMENT).click();
        // let fileLimitText = $(SET_FILE_LIMIT_TEXT_ATTACHMENT_JS).getText();
        let fileLimitText = $(SET_FILE_LIMIT_TEXT_ATTACHMENT_REACT).getText();
        expect(fileLimitText).to.equal('Maximum: 1 GB');
    });

    it('[Attachment-7] should Verify the operation of Attachment', function () {
        $(SET_ERROR_MESSAGE_BUTTON_ATTACHMENT).click();
        $(SHOW_ERROR_BUTTON_ATTACHMENT).click();
        let errorMessage = $(SET_ERROR_MESSAGE_ATTACHMENT).getText();
        expect(errorMessage).to.equal('Error message');
        $(HIDE_ERROR_BUTTON_ATTACHMENT).click();
        let checkDisplayed = browser.isVisible(SET_ERROR_MESSAGE_ATTACHMENT);
        expect(checkDisplayed).to.equal(false);
    });

    it('[Attachment-8] should Verify the operation of Attachment', function () {
        browser.chooseFile(ON_CALLBACK_ATTACHMENT + '//input', 'C:/Users/k001534/Desktop/1.txt');
        let alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.equal('1.txt');
        $(ON_CALLBACK_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_action']//button").click();
        alertText = browser.alertText();
        browser.alertAccept();
        expect(alertText).to.equal('');
        let deleteUploadFile = browser.isExisting(ON_CALLBACK_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_name']");
        expect(deleteUploadFile).to.equal(false);
    });

    it('[Attachment-9] should Verify the operation of Attachment', function () {
        $(HIDE_BUTTON_ATTACHMENT).click();
        let checkDisplayed = browser.isVisible(SHOW_HIDE_ATTACHMENT);
        expect(checkDisplayed).to.equal(false);
        $(SHOW_BUTTON_ATTACHMENT).click();
        checkDisplayed = browser.isVisible(SHOW_HIDE_ATTACHMENT);
        expect(checkDisplayed).to.equal(true);
    });
});