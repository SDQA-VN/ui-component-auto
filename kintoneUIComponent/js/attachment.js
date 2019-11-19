//render()
const constructorAttachment = new kintoneUIComponent.Attachment();
let constructorAttachmentEl = document.createElement('div');
constructorAttachmentEl.setAttribute("id", "constructor-attachment");
constructorAttachmentEl.appendChild(constructorAttachment.render());
let constructorAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 1);
constructorAttachmentCell.appendChild(constructorAttachmentEl);

//setFiles(files)
const setFilesAttachment = new kintoneUIComponent.Attachment();
let setFilesAttachmentEl = document.createElement('div');
setFilesAttachmentEl.setAttribute("id", "set-files-attachment");
setFilesAttachmentEl.appendChild(setFilesAttachment.render());
let buttonSetFilesAttachment = document.createElement('button');
buttonSetFilesAttachment.innerHTML='Set Files of Attachment';
buttonSetFilesAttachment.addEventListener('click',function(){
    setFilesAttachment.setFiles([{name: 'test_1', size: 12345}]);
})
let setFilesAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 2);
setFilesAttachmentCell.appendChild(setFilesAttachmentEl);
setFilesAttachmentCell.appendChild(buttonSetFilesAttachment);

//getFiles()
const getFilesAttachment =new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let getFilesAttachmentEl = document.createElement('div');
getFilesAttachmentEl.setAttribute("id", "get-files-attachment");
getFilesAttachmentEl.appendChild(getFilesAttachment.render());
let buttonGetFilesAttachment = document.createElement('button');
buttonGetFilesAttachment.innerHTML='Get Files of Attachment';
buttonGetFilesAttachment.addEventListener('click',function(){
    alert(JSON.stringify(getFilesAttachment.getFiles()));
})
let getFilesAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 3);
getFilesAttachmentCell.appendChild(getFilesAttachmentEl);
getFilesAttachmentCell.appendChild(buttonGetFilesAttachment);

//setDropZoneText(dropZoneText)
const setDropZoneTextAttachment =new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let setDropZoneTextAttachmentEl = document.createElement('div');
setDropZoneTextAttachmentEl.setAttribute("id", "set-dropzone-text-attachment");
setDropZoneTextAttachmentEl.appendChild(setDropZoneTextAttachment.render());
let buttonSetDropZoneTextAttachment = document.createElement('button');
buttonSetDropZoneTextAttachment.innerHTML='Set Dropzone Text of Attachment';
buttonSetDropZoneTextAttachment.addEventListener('click',function(){
    setDropZoneTextAttachment.setDropZoneText('Drop files here');
})
let setDropzoneTextAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 4);
setDropzoneTextAttachmentCell.appendChild(setDropZoneTextAttachmentEl);
setDropzoneTextAttachmentCell.appendChild(buttonSetDropZoneTextAttachment);

//setBrowseButtonText(browseButtonText)
const setBrowseButtonTextAttachment =new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let setBrowseButtonTextAttachmentEl = document.createElement('div');
setBrowseButtonTextAttachmentEl.setAttribute("id", "set-browse-button-text-attachment");
setBrowseButtonTextAttachmentEl.appendChild(setBrowseButtonTextAttachment.render());
let buttonSetBrowseButtonTextAttachment = document.createElement('button');
buttonSetBrowseButtonTextAttachment.innerHTML='Set Browse Button Text of Attachment';
buttonSetBrowseButtonTextAttachment.addEventListener('click',function(){
   setBrowseButtonTextAttachment.setBrowseButtonText('Drop files here');
})
let setBrowseButtonTextAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 5);
setBrowseButtonTextAttachmentCell.appendChild(setBrowseButtonTextAttachmentEl);
setBrowseButtonTextAttachmentCell.appendChild(buttonSetBrowseButtonTextAttachment);

//setFileLimitText(fileLimitText)
const setFileLimitTextAttachment =new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let setFileLimitTextAttachmentEl = document.createElement('div');
setFileLimitTextAttachmentEl.setAttribute("id", "set-file-limit-text-attachment");
setFileLimitTextAttachmentEl.appendChild(setFileLimitTextAttachment.render());
let buttonSetFileLimitTextAttachment = document.createElement('button');
buttonSetFileLimitTextAttachment.innerHTML='Set File Limit Text of Attachment';
buttonSetFileLimitTextAttachment.addEventListener('click',function(){
   setFileLimitTextAttachment.setFileLimitText('Maximum: 1 GB');
})
let setFileLimitTextAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 6);
setFileLimitTextAttachmentCell.appendChild(setFileLimitTextAttachmentEl);
setFileLimitTextAttachmentCell.appendChild(buttonSetFileLimitTextAttachment);

//setErrorMessage(errorMessage) & //showError() & hideError()
const setErrorMessageAttachment =new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let setErrorMessageAttachmentEl = document.createElement('div');
setErrorMessageAttachmentEl.setAttribute("id", "set-error-message-attachment");
setErrorMessageAttachmentEl.appendChild(setErrorMessageAttachment.render());
let buttonSetErrorMessageAttachment = document.createElement('button');
buttonSetErrorMessageAttachment.innerHTML='Set Error Message of Attachment';
buttonSetErrorMessageAttachment.addEventListener('click',function(){
   setErrorMessageAttachment.setErrorMessage('Error message');
  
})

let buttonShowErrorMessageAttachment = document.createElement('button');
buttonShowErrorMessageAttachment.innerHTML='Show Error Message of Attachment';
buttonShowErrorMessageAttachment.addEventListener('click',function(){
    setErrorMessageAttachment.showError();
})

let buttonHideErrorMessageAttachment = document.createElement('button');
buttonHideErrorMessageAttachment.innerHTML='Hide Error Message of Attachment';
buttonHideErrorMessageAttachment.addEventListener('click',function(){
    setErrorMessageAttachment.hideError();
})

let setErrorMessageAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 7);
setErrorMessageAttachmentCell.appendChild(setErrorMessageAttachmentEl);
setErrorMessageAttachmentCell.appendChild(buttonSetErrorMessageAttachment);
setErrorMessageAttachmentCell.appendChild(buttonShowErrorMessageAttachment);
setErrorMessageAttachmentCell.appendChild(buttonHideErrorMessageAttachment);

//onCallback()
const onCallbackAttachment =new kintoneUIComponent.Attachment();
let onCallbackAttachmentEl = document.createElement('div');
onCallbackAttachmentEl.setAttribute("id", "on-callback-attachment");
onCallbackAttachmentEl.appendChild(onCallbackAttachment.render());
onCallbackAttachment.on('filesAdd', function(files) {
    alert(files[0].name);
});
onCallbackAttachment.on('fileRemove', function(files) {
    alert(files);
});
let onCallbackAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 8);
onCallbackAttachmentCell.appendChild(onCallbackAttachmentEl);

//show() & hide()
const showHideAttachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
let showHideAttachmentEl = document.createElement('div');
showHideAttachmentEl.setAttribute("id", "show-hide-attachment");
showHideAttachmentEl.appendChild(showHideAttachment.render());
let buttonShowAttachment = document.createElement('button');
buttonShowAttachment.innerHTML='Show Attachment';
buttonShowAttachment.addEventListener('click',function(){
   showHideAttachment.show();  
})

let buttonHideAttachment = document.createElement('button');
buttonHideAttachment.innerHTML='Hide Attachment';
buttonHideAttachment.addEventListener('click',function(){
    showHideAttachment.hide();
})

let showHideAttachmentCell = testgrid.getCell(posConfig.Attachment.x, 9);
showHideAttachmentCell.appendChild(showHideAttachmentEl);
showHideAttachmentCell.appendChild(buttonShowAttachment);
showHideAttachmentCell.appendChild(buttonHideAttachment);
