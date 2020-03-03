//kintone-ui-component TEXT
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/121963490/kintone-ui-component+Text
'use strict';

// //Constructor-Verify that the Textbox object contains the below attibutes: options.value, options.isDisabled, options.isVisible
// let uiText = new kintoneUIComponent.Text({
//     value: 'uiText',
//     isDisabled: false,
//     isVisible: true
// });
// let uiText_cell = testgrid.getCell(posConfig.Text.x, 1);
// uiText_cell.appendChild(uiText.render());

//Constructor-Verify that the Textbox object contains the below attibutes: options.value, options.isDisabled, options.isVisible
let constructorText = new kintoneUIComponent.Text({
    value: 'Constructor Text',
    isDisabled: false,
    isVisible: true
});
let constructorTextEl = document.createElement('div');
constructorTextEl.setAttribute("id", "constructor-text");
constructorTextEl.appendChild(constructorText.render());
let constructorText_cell = testgrid.getCell(posConfig.Text.x, 1);
constructorText_cell.appendChild(constructorTextEl);

// //Constructor-Verify that the Textbox object contains full options
// let fullOptionText = new kintoneUIComponent.Text({
//     value: 'fullConstructorText',
//     isDisabled: false,
//     isVisible: true
// });
// let fullOptionTextEl = document.createElement('div');
// fullOptionTextEl.setAttribute("id", "full-option-text");
// fullOptionTextEl.appendChild(fullOptionText.render());
// let fullOptionText_cell = testgrid.getCell(posConfig.Text.x, 2);
// fullOptionText_cell.appendChild(fullOptionTextEl);


//setValue(text)
let setValueText = new kintoneUIComponent.Text({
    value: ''
});
let setValueTextEl = document.createElement('div');
setValueTextEl.setAttribute("id", "set-value-text");
setValueTextEl.appendChild(setValueText.render());
let buttonSetValueText = document.createElement('button');
buttonSetValueText.innerHTML='Set Value of Text with string';
buttonSetValueText.addEventListener('click',function(){
    setValueText.setValue('Set Value Text with String');
})
let buttonSetValueText1 = document.createElement('button');
buttonSetValueText1.innerHTML='Set Value of Text without string';
buttonSetValueText1.addEventListener('click',function(){
    setValueText.setValue(123123);
})

setValueTextEl.appendChild(buttonSetValueText);
setValueTextEl.appendChild(buttonSetValueText1);
let setValueText_cell = testgrid.getCell(posConfig.Text.x, 2);
setValueText_cell.appendChild(setValueTextEl);

//getValue(text) bug
let getValueText = new kintoneUIComponent.Text({
    value:'Get Value of Text'
})
let getValueTextButton = document.createElement('button')
getValueTextButton.innerHTML='Get Value of Text'
getValueTextButton.addEventListener('click',function(){
    alert(getValueText.getValue());
})
let getValueTextEl = document.createElement('div')
getValueTextEl.setAttribute("id", "get-value-text");
getValueTextEl.appendChild(getValueText.render());
getValueTextEl.appendChild(getValueTextButton);
let getValueTextCell = testgrid.getCell(posConfig.Text.x, 3);
getValueTextCell.appendChild(getValueTextEl);

//show()
let showInvisibleText = new kintoneUIComponent.Text({
    value: 'Show Invisible Text',
    isVisible: false
});
let showVisibleText = new kintoneUIComponent.Text({
    value: 'Show Visible Text',
    isVisible: true
});
let showInvisibleTextEl = document.createElement('div');
showInvisibleTextEl.setAttribute("id", "show-invisible-text");
let showVisibleTextEl = document.createElement('div');
showVisibleTextEl.setAttribute("id", "show-visible-text");
let buttonShowText = document.createElement('button');
buttonShowText.innerHTML='Show Text';
buttonShowText.addEventListener('click',function(){
    showInvisibleText.show();
    showVisibleText.show();
})
showInvisibleTextEl.appendChild(showInvisibleText.render());
showVisibleTextEl.appendChild(showVisibleText.render());
showVisibleTextEl.appendChild(buttonShowText);
let showText_cell = testgrid.getCell(posConfig.Text.x, 4);
showText_cell.appendChild(showInvisibleTextEl);
showText_cell.appendChild(showVisibleTextEl);

//hide()
let hideVisibleText = new kintoneUIComponent.Text({
    value: 'Hide Visible Text',
    isVisible: true
});
let hideInvisibleText = new kintoneUIComponent.Text({
    value: 'Hide Invisible Text',
    isVisible: false
});
let hideVisibleTextEl = document.createElement('div');
hideVisibleTextEl.setAttribute("id", "hide-visible-text");
let hideInvisibleTextEl = document.createElement('div');
hideInvisibleTextEl.setAttribute("id", "hide-invisible-text");
let buttonHideText = document.createElement('button');
buttonHideText.innerHTML='Hide Text';
buttonHideText.addEventListener('click',function(){
    hideVisibleText.hide();
    hideInvisibleText.hide();
})
hideVisibleTextEl.appendChild(hideVisibleText.render());
hideInvisibleTextEl.appendChild(hideInvisibleText.render());
hideInvisibleTextEl.appendChild(buttonHideText);
let hideText_cell = testgrid.getCell(posConfig.Text.x, 5);
hideText_cell.appendChild(hideVisibleTextEl);
hideText_cell.appendChild(hideInvisibleTextEl);

//disable()
let disableEnabledText = new kintoneUIComponent.Text({
    value: 'disable the current enabled Text',
    isDisabled: false
});
let disableDisabledText = new kintoneUIComponent.Text({
    value: 'disable the current disabled Text',
    isDisabled: true
});
let disableEnabledTextEl = document.createElement('div');
disableEnabledTextEl.setAttribute("id", "disable-enabled-text");
let disableDisabledTextEl = document.createElement('div');
disableDisabledTextEl.setAttribute("id", "disable-disabled-text");

let buttonDisableText = document.createElement('button');
buttonDisableText.innerHTML='Disable Text';
buttonDisableText.addEventListener('click',function(){
    disableEnabledText.disable();
    disableDisabledText.disable();
})
disableEnabledTextEl.appendChild(disableEnabledText.render());
disableDisabledTextEl.appendChild(disableDisabledText.render());
disableDisabledTextEl.appendChild(buttonDisableText);
let disableText_cell = testgrid.getCell(posConfig.Text.x, 6);
disableText_cell.appendChild(disableEnabledTextEl);
disableText_cell.appendChild(disableDisabledTextEl);

//enable()
let enableDisabledText = new kintoneUIComponent.Text({
    value: 'enable the current disabled Text',
    isDisabled: true
});
let enableEnabledText = new kintoneUIComponent.Text({
    value: 'enable the current enabled Text',
    isDisabled: false
});
let enableDisabledTextEl = document.createElement('div');
enableDisabledTextEl.setAttribute("id", "enable-disabled-text");
let enableEnabledTextEl = document.createElement('div');
enableEnabledTextEl.setAttribute("id", "enable-enabled-text");
let buttonEnableText = document.createElement('button');
buttonEnableText.innerHTML='Enable Text';
buttonEnableText.addEventListener('click',function(){
    enableDisabledText.enable();
    enableEnabledText.enable();
})
enableDisabledTextEl.appendChild(enableDisabledText.render());
enableEnabledTextEl.appendChild(enableEnabledText.render());
enableEnabledTextEl.appendChild(buttonEnableText);
let enableText_cell = testgrid.getCell(posConfig.Text.x, 7);
enableText_cell.appendChild(enableDisabledTextEl);
enableText_cell.appendChild(enableEnabledTextEl);

//onCallBackFunctionText
let onCallBackFunctionText = new kintoneUIComponent.Text({
    value: 'onCallBackFunctionText'
});
let onCallBackFunctionTextEl = document.createElement('div');
onCallBackFunctionTextEl.setAttribute("id", "on-callback-function-text");
onCallBackFunctionTextEl.appendChild(onCallBackFunctionText.render());
let onCallBackFunctionTextCell = testgrid.getCell(posConfig.Text.x, 8);
onCallBackFunctionTextCell.appendChild(onCallBackFunctionTextEl);
onCallBackFunctionText.on('click', function (event) {
    alert('onClickCallBackFunctionText has been clicked');
});
onCallBackFunctionText.on('change', function (event) {
    alert('onChangeCallBackFunctionText has been changed');
});

//onCallBackTriggerText
let onCallBackTriggerText = new kintoneUIComponent.Text({
    value: 'onCallBackTriggerText'
});
let onCallBackTriggerTextEl = document.createElement('div');
onCallBackTriggerTextEl.setAttribute("id", "on-callback-trigger-text");
onCallBackTriggerTextEl.appendChild(onCallBackTriggerText.render());
let onCallBackTriggerTextCell = testgrid.getCell(posConfig.Text.x, 9);
onCallBackTriggerTextCell.appendChild(onCallBackTriggerTextEl);
function triggerChangeClick() {
    alert('onChangeCallBackTriggerText has been changed');
}
onCallBackTriggerText.on('change', triggerChangeClick);
function triggerClick() {
    alert('onClickCallBackTriggerText has been clicked');
}
onCallBackTriggerText.on('click', triggerClick);