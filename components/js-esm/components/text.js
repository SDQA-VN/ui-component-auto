import {Text} from '@kintone/kintone-ui-component/esm/js';

//Constructor-Verify that the Textbox object contains the below attibutes: options.value, options.isDisabled, options.isVisible
let constructorText = new Text({
    value: 'constructorText',
    isDisabled: false,
    isVisible: true
});
let constructorTextEl = document.createElement('div');
constructorTextEl.setAttribute("id", "constructor-text");
constructorTextEl.appendChild(constructorText.render());

//setValue(text)
let setValueText = new Text({
    value: ''
});

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

let setValueTextEl = document.createElement('div');
setValueTextEl.setAttribute("id", "set-value-text");
setValueTextEl.appendChild(setValueText.render());
setValueTextEl.appendChild(buttonSetValueText);
setValueTextEl.appendChild(buttonSetValueText1);

//getValue(text) bug
let getValueText = new Text({
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

//show()
let showInvisibleText = new Text({
    value: 'show Invisible Text',
    isVisible: false
});
let showVisibleText = new Text({
    value: 'show Visible Text',
    isVisible: true
});
let buttonShowText = document.createElement('button');
buttonShowText.innerHTML='Show Text';
buttonShowText.addEventListener('click',function(){
    showInvisibleText.show();
    showVisibleText.show();
})
let showInvisibleTextEl = document.createElement('div');
showInvisibleTextEl.setAttribute("id", "show-invisible-text");
showInvisibleTextEl.appendChild(showInvisibleText.render());
let showVisibleTextEl = document.createElement('div');
showVisibleTextEl.setAttribute("id", "show-visible-text");
showVisibleTextEl.appendChild(showVisibleText.render());
showVisibleTextEl.appendChild(buttonShowText);
let showTextDiv = document.createElement('div');
showTextDiv.appendChild(showInvisibleTextEl);
showTextDiv.appendChild(showVisibleTextEl);

//hide()
let hideVisibleText = new Text({
    value: 'hide Visible Text',
    isVisible: true
});
let hideInvisibleText = new Text({
    value: 'hide Invisible Text',
    isVisible: false
});
let buttonHideText = document.createElement('button');
buttonHideText.innerHTML='Hide Text';
buttonHideText.addEventListener('click',function(){
    hideVisibleText.hide();
    hideInvisibleText.hide();
})
let hideVisibleTextEl = document.createElement('div');
hideVisibleTextEl.setAttribute("id", "hide-visible-text");
hideVisibleTextEl.appendChild(hideVisibleText.render());
let hideInvisibleTextEl = document.createElement('div');
hideInvisibleTextEl.setAttribute("id", "hide-invisible-text");
hideInvisibleTextEl.appendChild(hideInvisibleText.render());
hideInvisibleTextEl.appendChild(buttonHideText);
let hideTextDiv = document.createElement('div');
hideTextDiv.appendChild(hideVisibleTextEl);
hideTextDiv.appendChild(hideInvisibleTextEl);

//disable()
let disableEnabledText = new Text({
    value: 'disable the current enabled Text',
    isDisabled: false
});
let disableDisabledText = new Text({
    value: 'disable the current disabled Text',
    isDisabled: true
});
let buttonDisableText = document.createElement('button');
buttonDisableText.innerHTML='Disable Text';
buttonDisableText.addEventListener('click',function(){
    disableEnabledText.disable();
    disableDisabledText.disable();
})
let disableEnabledTextEl = document.createElement('div');
disableEnabledTextEl.setAttribute("id", "disable-enabled-text");
disableEnabledTextEl.appendChild(disableEnabledText.render());
let disableDisabledTextEl = document.createElement('div');
disableDisabledTextEl.setAttribute("id", "disable-disabled-text");
disableDisabledTextEl.appendChild(disableDisabledText.render());
disableDisabledTextEl.appendChild(buttonDisableText);
let disableTextDiv = document.createElement('div');
disableTextDiv.appendChild(disableEnabledTextEl);
disableTextDiv.appendChild(disableDisabledTextEl);

//enable()
let enableDisabledText = new Text({
    value: 'enable the current disabled Text',
    isDisabled: true
});
let enableEnabledText = new Text({
    value: 'enable the current enabled Text',
    isDisabled: false
});
let buttonEnableText = document.createElement('button');
buttonEnableText.innerHTML='Enable Text';
buttonEnableText.addEventListener('click',function(){
    enableDisabledText.enable();
    enableEnabledText.enable();
})
let enableDisabledTextEl = document.createElement('div');
enableDisabledTextEl.setAttribute("id", "enable-disabled-text");
enableDisabledTextEl.appendChild(enableDisabledText.render());
let enableEnabledTextEl = document.createElement('div');
enableEnabledTextEl.setAttribute("id", "enable-enabled-text");
enableEnabledTextEl.appendChild(enableEnabledText.render());
enableEnabledTextEl.appendChild(buttonEnableText);
let enableTextDiv = document.createElement('div');
enableTextDiv.appendChild(enableDisabledTextEl);
enableTextDiv.appendChild(enableEnabledTextEl);

//on() - change - call function
let onChangeFunctionText = new Text({
    value: 'onChangeFunctionText',
    isDisabled: false
});
let onChangeFunctionTextEl = document.createElement('div');
onChangeFunctionTextEl.setAttribute("id", "on-change-function-text");
onChangeFunctionTextEl.appendChild(onChangeFunctionText.render());
onChangeFunctionText.on('change', function (event) {
    alert('onChangeFunctionText has been changed');
});

//on() - change - call trigger
let onChangeTriggerText = new Text({
    value: 'onChangeTriggerText',
    isDisabled: false
});
let onChangeTriggerTextEl = document.createElement('div');
onChangeTriggerTextEl.setAttribute("id", "on-change-trigger-text");
onChangeTriggerTextEl.appendChild(onChangeTriggerText.render());
function triggerChangeClick() {
    alert('onChangeTriggerText has been changed');
}
onChangeTriggerText.on('change', triggerChangeClick);

//on() - click - call function
let onClickFunctionText = new Text({
    value: 'onClickFunctionText',
    isDisabled: false
});
let onClickFunctionTextEl = document.createElement('div');
onClickFunctionTextEl.setAttribute("id", "on-click-function-text");
onClickFunctionTextEl.appendChild(onClickFunctionText.render());
onClickFunctionText.on('click', function (event) {
    alert('onClickFunctionText has been clicked');
});

//on() - click - call trigger
let onClickTriggerText = new Text({
    value: 'onClickTriggerText',
    isDisabled: false
});
let onClickTriggerTextEl = document.createElement('div');
onClickTriggerTextEl.setAttribute("id", "on-click-trigger-text");
onClickTriggerTextEl.appendChild(onClickTriggerText.render());
function triggerClick() {
    alert('onClickTriggerText has been clicked');
}
onClickTriggerText.on('click', triggerClick);

export default {
    constructorTextEl,
    setValueTextEl,
    getValueTextEl,
    showTextDiv,
    hideTextDiv,
    disableTextDiv,
    enableTextDiv,
    onChangeFunctionTextEl,
    onChangeTriggerTextEl,
    onClickFunctionTextEl,
    onClickTriggerTextEl
}