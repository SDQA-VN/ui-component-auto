const Helper = require('../../helper/main.js');
const path = require('path');


const SET_FILES_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Files of Attachment')]";
const GET_FILES_BUTTON_ATTACHMENT = "//button[contains(text(),'Get Files of Attachment')]";
const SET_DROPZONE_TEXT_ATTACHMENT = "//div[@id='set-dropzone-text-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-droppable']//div[@class='kuc-attachment-file-droppable-text']"
const SET_DROPZONE_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Dropzone Text of Attachment')]";
const SET_BROWSE_BUTTON_TEXT_ATTACHMENT = "//div[@id='set-browse-button-text-attachment']//span[@class='kuc-attachment-file-upload-button-text']"
const SET_BROWSE_BUTTON_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Browse Button Text of Attachment')]";
const SET_FILE_LIMIT_TEXT_ATTACHMENT_JS = "//div[@id='set-file-limit-text-attachment']//div[@class='kuc-attachment-file-constraints']";
const SET_FILE_LIMIT_TEXT_ATTACHMENT_REACT = "//div[@id='set-file-limit-text-attachment']//p[@class='kuc-attachment-file-constraints']";
const SET_FILE_LIMIT_TEXT_BUTTON_ATTACHMENT = "//button[contains(text(),'Set File Limit Text of Attachment')]";
const SET_ERROR_MESSAGE_BUTTON_ATTACHMENT = "//button[contains(text(),'Set Error Message of Attachment')]";
const SET_ERROR_MESSAGE_ATTACHMENT = "//div[@id='set-error-message-attachment']//div[@class='kuc-attachment-file-error']"
const SHOW_ERROR_BUTTON_ATTACHMENT = "//button[contains(text(),'Show Error Message of Attachment')]";
const HIDE_ERROR_BUTTON_ATTACHMENT = "//button[contains(text(),'Hide Error Message of Attachment')]";
const SHOW_HIDE_ATTACHMENT = "//div[@id='show-hide-attachment']//div[@class='kuc-attachment-outer']";
const SHOW_BUTTON_ATTACHMENT = "//button[contains(text(),'Show Attachment')]";
const HIDE_BUTTON_ATTACHMENT = "//button[contains(text(),'Hide Attachment')]";
const ON_CALLBACK_ATTACHMENT = "//div[@id='on-callback-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//a";
const ON_CALLBACK_FILENAME_ATTACHMENT = "//div[@id='on-callback-attachment']//div[@class='kuc-attachment-outer']//div[@class='kuc-attachment-file']//div[@class='kuc-attachment-file-filelist kuc-attachment-file-filelist-list']//div[@class='kuc-attachment_delete kuc-attachment-file-item']";
const CONSTRUCTOR_ATTACHMENT_INPUT = "//div[@id='constructor-attachment']//div[@class='kuc-attachment-file']//input";
const CONSTRUCTOR_FILENAME_ATTACHMENT = "//div[@id='constructor-attachment']//div[@class='kuc-attachment_file_name']";
const CONSTRUCTOR_ATTACHMENT_BUTTON_DELETE = "//div[@id='constructor-attachment']//div[contains(@class,'kuc-attachment_delete')]//button";
const SET_FILES_FILENAME_ATTACHMENT = "//div[@id='set-files-attachment']//div[@class='kuc-attachment_file_name']";
const SET_FILES_FILESIZE_ATTACHMENT = "//div[@id='set-files-attachment']//div[@class='kuc-attachment_file_size']";


const filePath = path.join(__dirname, 'alert.js')

describe('kintoneUIComponent - Attachment', function () {
    it('[Attachment-1] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .setValue(CONSTRUCTOR_ATTACHMENT_INPUT, filePath)
            .verifyText(CONSTRUCTOR_FILENAME_ATTACHMENT, 'alert.js')
            .click(CONSTRUCTOR_ATTACHMENT_BUTTON_DELETE)
            .verifyElementNotExisting(CONSTRUCTOR_FILENAME_ATTACHMENT)
    });

    it('[Attachment-2] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(SET_FILES_BUTTON_ATTACHMENT)
            .verifyText(SET_FILES_FILENAME_ATTACHMENT, 'test_1')
            .verifyText(SET_FILES_FILESIZE_ATTACHMENT, '12 KB')
    });

    it('[Attachment-3] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(GET_FILES_BUTTON_ATTACHMENT)
            .verifyAlertText('[{"name":"test_1","size":12345}]')
    });

    // it('[Attachment-4] should Verify the operation of Attachment', function () {
    //     $(SET_DROPZONE_TEXT_BUTTON_ATTACHMENT).click();
    //     let dropzoneText = $(SET_DROPZONE_TEXT_ATTACHMENT).getText();
    //     expect(dropzoneText).to.equal('Drop files here');
    // });

    it('[Attachment-5] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(SET_BROWSE_BUTTON_TEXT_BUTTON_ATTACHMENT)
            .verifyText(SET_BROWSE_BUTTON_TEXT_ATTACHMENT, 'Drop files here')
    });

    it('[Attachment-6] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(SET_FILE_LIMIT_TEXT_BUTTON_ATTACHMENT)
            .verifyText(SET_FILE_LIMIT_TEXT_ATTACHMENT_JS, 'Maximum: 1 GB')
    });

    it('[Attachment-7] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(SET_ERROR_MESSAGE_BUTTON_ATTACHMENT)
            .click(SHOW_ERROR_BUTTON_ATTACHMENT)
            .verifyText(SET_ERROR_MESSAGE_ATTACHMENT, 'Error message')
            .click(HIDE_ERROR_BUTTON_ATTACHMENT)
            .verifyElementNotDisplayed(SET_ERROR_MESSAGE_ATTACHMENT)
    });

    it('[Attachment-8] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .setValue(ON_CALLBACK_ATTACHMENT + '//input', filePath)
            .verifyAlertText('alert.js')
            .click(ON_CALLBACK_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_action']//button")
            .verifyAlertText('')
            .verifyElementNotExisting(ON_CALLBACK_FILENAME_ATTACHMENT + "//div[@class='kuc-attachment_file_name']")
    });

    it('[Attachment-9] should Verify the operation of Attachment', function () {
        Helper.ElementHandler
            .click(HIDE_BUTTON_ATTACHMENT)
            .verifyElementNotDisplayed(SHOW_HIDE_ATTACHMENT)
            .click(SHOW_BUTTON_ATTACHMENT)
            .verifyElementDisplayed(SHOW_HIDE_ATTACHMENT)
    });
});