//constructor TextArea
let constructorTextArea = new kintoneUIComponent.TextArea({
    value: 'Test TextArea',
    isVisible: true,
    isDisabled: false
});
let constructorTextAreaEl = document.createElement('div');
constructorTextAreaEl.setAttribute("id", "constructor-textarea");
constructorTextAreaEl.appendChild(constructorTextArea.render());

// let buttonTextArea = document.createElement('button');
// buttonTextArea.innerHTML='Button TextArea';
// buttonTextArea.style.cssFloat='right';
// constructorTextAreaEl.appendChild(buttonTextArea);
let constructorTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 1);
constructorTextAreaCell.appendChild(constructorTextAreaEl);

//getValue() TextArea
let getValueTextArea = new kintoneUIComponent.TextArea({
    value: 'Get Value of TextArea',
    isVisible: true,
    isDisabled: false
});
let getValueTextAreaEl = document.createElement('div');
getValueTextAreaEl.setAttribute("id", "get-value-textarea");
getValueTextAreaEl.appendChild(getValueTextArea.render());

let buttonGetValueTextArea = document.createElement('button');
buttonGetValueTextArea.innerHTML='Get Value of TextArea';
buttonGetValueTextArea.addEventListener('click',function(){
    alert(getValueTextArea.getValue());
})
getValueTextAreaEl.appendChild(buttonGetValueTextArea);
let getValueTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 2);
getValueTextAreaCell.appendChild(getValueTextAreaEl);

//setValue() TextArea
let setValueTextArea = new kintoneUIComponent.TextArea({
    value: '',
    isVisible: true,
    isDisabled: false
});
let setValueTextAreaEl = document.createElement('div');
setValueTextAreaEl.setAttribute("id", "set-value-textarea");
setValueTextAreaEl.appendChild(setValueTextArea.render());

let buttonSetValueTextArea = document.createElement('button');
buttonSetValueTextArea.innerHTML='Set Value of TextArea with string';
buttonSetValueTextArea.addEventListener('click',function(){
    setValueTextArea.setValue('Set Value with String');
})
let buttonSetValueTextArea1 = document.createElement('button');
buttonSetValueTextArea1.innerHTML='Set Value of TextArea without string';
buttonSetValueTextArea1.addEventListener('click',function(){
    setValueTextArea.setValue(123123);
})

setValueTextAreaEl.appendChild(buttonSetValueTextArea);
setValueTextAreaEl.appendChild(buttonSetValueTextArea1);
let setValueTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 3);
setValueTextAreaCell.appendChild(setValueTextAreaEl);

//on() - call function
let onCallbackFunctionTextArea = new kintoneUIComponent.TextArea({
    value: 'onCallbackFunctionTextArea'
});
let onCallbackFunctionTextAreaEl = document.createElement('div');
onCallbackFunctionTextAreaEl.setAttribute("id", "on-callback-function-textarea");
onCallbackFunctionTextAreaEl.appendChild(onCallbackFunctionTextArea.render());
let callFunctionCellTextArea = testgrid.getCell(posConfig.Textarea.x,4);
callFunctionCellTextArea.appendChild(onCallbackFunctionTextAreaEl);
onCallbackFunctionTextArea.on('click', function (event) {
    alert('onCallbackFunctionTextArea has been clicked');
});
onCallbackFunctionTextArea.on('change', function (event) {
    alert('onCallbackFunctionTextArea has been changed');
});

// //on() - callback trigger
let onCallbackTriggerTextArea = new kintoneUIComponent.TextArea({
    value: 'onCallbackTriggerTextArea'
});
let onTriggerFunctionTextAreaEl = document.createElement('div');
onTriggerFunctionTextAreaEl.setAttribute("id", "on-callback-trigger-textarea");
let callbackTriggerCellTextArea = testgrid.getCell(posConfig.Textarea.x,5);
callbackTriggerCellTextArea.appendChild(onCallbackTriggerTextArea.render());
function triggerClick() {
    alert('onCallbackTriggerTextArea has been clicked');
}
onCallbackTriggerTextArea.on('click', triggerClick);

//show() TextArea
let showInvisibleTextArea = new kintoneUIComponent.TextArea({
    value: 'show Invisible TextArea ',
    isVisible: false,
});
let showVisibleTextArea = new kintoneUIComponent.TextArea({
    value: 'show Visible TextArea',
    isVisible: true
});
let showInvisibleTextAreaEl = document.createElement('div');
showInvisibleTextAreaEl.setAttribute("id", "show-invisible-textarea");
showInvisibleTextAreaEl.appendChild(showInvisibleTextArea.render());
let showVisibleTextAreaEl = document.createElement('div');
showVisibleTextAreaEl.setAttribute("id", "show-visible-textarea");
showVisibleTextAreaEl.appendChild(showVisibleTextArea.render());

let buttonShowTextArea = document.createElement('button');
buttonShowTextArea.innerHTML='Show TextArea';
buttonShowTextArea.addEventListener('click',function(){
   showInvisibleTextArea.show();
   showVisibleTextArea.show();
})
showVisibleTextAreaEl.appendChild(buttonShowTextArea);
let showTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 6);
showTextAreaCell.appendChild(showInvisibleTextAreaEl);
showTextAreaCell.appendChild(showVisibleTextAreaEl);

//hide() TextArea
let hideVisibleTextArea = new kintoneUIComponent.TextArea({
    value: 'hide Visible TextArea',
    isVisible: true
});
let hideInvisibleTextArea = new kintoneUIComponent.TextArea({
    value: 'hide Invisible TextArea',
    isVisible: false
});
let hideVisibleTextAreaEl = document.createElement('div');
hideVisibleTextAreaEl.setAttribute("id", "hide-visible-textarea");
hideVisibleTextAreaEl.appendChild(hideVisibleTextArea.render());

let hideInvisibleTextAreaEl = document.createElement('div');
hideInvisibleTextAreaEl.setAttribute("id", "hide-invisible-textarea");
hideInvisibleTextAreaEl.appendChild(hideInvisibleTextArea.render());

let buttonHideTextArea = document.createElement('button');
buttonHideTextArea.innerHTML='Hide TextArea';
buttonHideTextArea.addEventListener('click',function(){
   hideVisibleTextArea.hide();
   hideInvisibleTextArea.hide();
})
hideInvisibleTextAreaEl.appendChild(buttonHideTextArea);
let hideTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 7);
hideTextAreaCell.appendChild(hideVisibleTextAreaEl);
hideTextAreaCell.appendChild(hideInvisibleTextAreaEl);

//disable() TextArea
let disableEnabledTextArea = new kintoneUIComponent.TextArea({
    value: 'disable the current enabled TextArea',
    isDisabled: false
});
let disableDisabledTextArea = new kintoneUIComponent.TextArea({
    value: 'disable the current disabled TextArea',
    isDisabled: true
});
let disableEnabledTextAreaEl = document.createElement('div');
disableEnabledTextAreaEl.setAttribute("id", "disable-enabled-textarea");
disableEnabledTextAreaEl.appendChild(disableEnabledTextArea.render());
let disableDisabledTextAreaEl = document.createElement('div');
disableDisabledTextAreaEl.setAttribute("id", "disable-disabled-textarea");
disableDisabledTextAreaEl.appendChild(disableDisabledTextArea.render());

let buttonDisableTextArea = document.createElement('button');
buttonDisableTextArea.innerHTML='Disable TextArea';
buttonDisableTextArea.addEventListener('click',function(){
   disableEnabledTextArea.disable();
   disableDisabledTextArea.disable();
})
disableDisabledTextAreaEl.appendChild(buttonDisableTextArea);
let disableTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 8);
disableTextAreaCell.appendChild(disableEnabledTextAreaEl);
disableTextAreaCell.appendChild(disableDisabledTextAreaEl);

//enable() TextArea
let enableDisabledTextArea = new kintoneUIComponent.TextArea({
    value: 'enable the current disabled TextArea',
    isDisabled: true
});
let enableEnabledTextArea = new kintoneUIComponent.TextArea({
    value: 'enable the current enabled TextArea',
    isDisabled: false
});

let enableDisabledTextAreaEl = document.createElement('div');
enableDisabledTextAreaEl.setAttribute("id", "enable-disabled-textarea");
enableDisabledTextAreaEl.appendChild(enableDisabledTextArea.render());
let enableEnabledTextAreaEl = document.createElement('div');
enableEnabledTextAreaEl.setAttribute("id", "enable-enabled-textarea");
enableEnabledTextAreaEl.appendChild(enableEnabledTextArea.render());

let buttonEnableTextArea = document.createElement('button');
buttonEnableTextArea.innerHTML='Enable TextArea';
buttonEnableTextArea.addEventListener('click',function(){
    enableDisabledTextArea.enable();
    enableEnabledTextArea.enable();
})
enableEnabledTextAreaEl.appendChild(buttonEnableTextArea);
let enableTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 9);
enableTextAreaCell.appendChild(enableDisabledTextAreaEl);
enableTextAreaCell.appendChild(enableEnabledTextAreaEl);