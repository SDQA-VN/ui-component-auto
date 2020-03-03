import {TextArea} from '@kintone/kintone-ui-component/esm/js';

//constructor TextArea
let constructorTextArea = new TextArea({
    value: 'Test TextArea',
    isVisible: true,
    isDisabled: false
});
let constructorTextAreaEl = document.createElement('div');
constructorTextAreaEl.setAttribute("id", "constructor-textarea");
constructorTextAreaEl.appendChild(constructorTextArea.render());

//getValue() TextArea
let getValueTextArea = new TextArea({
    value: 'TextArea get Value()',
    isVisible: true,
    isDisabled: false
});

let buttonGetValueTextArea = document.createElement('button');
buttonGetValueTextArea.innerHTML='Get Value of TextArea';
buttonGetValueTextArea.addEventListener('click',function(){
    alert(getValueTextArea.getValue());
})

let getValueTextAreaEl = document.createElement('div');
getValueTextAreaEl.setAttribute("id", "get-value-textarea");
getValueTextAreaEl.appendChild(getValueTextArea.render());
getValueTextAreaEl.appendChild(buttonGetValueTextArea);

//setValue() TextArea
let setValueTextArea = new TextArea({
    value: '',
    isVisible: true,
    isDisabled: false
});

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

let setValueTextAreaEl = document.createElement('div');
setValueTextAreaEl.setAttribute("id", "set-value-textarea");
setValueTextAreaEl.appendChild(setValueTextArea.render());
setValueTextAreaEl.appendChild(buttonSetValueTextArea);
setValueTextAreaEl.appendChild(buttonSetValueTextArea1);

//on() - call function
let onCallbackFunctionTextArea = new TextArea({
    value: 'onCallbackFunctionTextArea'
});
onCallbackFunctionTextArea.on('click', function (event) {
    alert('onCallbackFunctionTextArea has been clicked');
});
onCallbackFunctionTextArea.on('change', function (event) {
    alert('onCallbackFunctionTextArea has been changed');
});

// //on() - callback trigger
let onCallbackTriggerTextArea = new TextArea({
    value: 'onCallbackTriggerTextArea'
});
function triggerClick() {
    alert('onCallbackTriggerTextArea has been clicked');
}
onCallbackTriggerTextArea.on('click', triggerClick);

//show() TextArea
let showInvisibleTextArea = new TextArea({
    value: 'show Invisible TextArea ',
    isVisible: false,
});
let showVisibleTextArea = new TextArea({
    value: 'show Visible TextArea',
    isVisible: true
});

let buttonShowTextArea = document.createElement('button');
buttonShowTextArea.innerHTML='Show TextArea';
buttonShowTextArea.addEventListener('click',function(){
   showInvisibleTextArea.show();
   showVisibleTextArea.show();
})

let showInvisibleTextAreaEl = document.createElement('div');
showInvisibleTextAreaEl.setAttribute("id", "show-invisible-textarea");
showInvisibleTextAreaEl.appendChild(showInvisibleTextArea.render());
let showVisibleTextAreaEl = document.createElement('div');
showVisibleTextAreaEl.setAttribute("id", "show-visible-textarea");
showVisibleTextAreaEl.appendChild(showVisibleTextArea.render());
showVisibleTextAreaEl.appendChild(buttonShowTextArea);
let showTextAreaDiv = document.createElement('div');
showTextAreaDiv.appendChild(showInvisibleTextAreaEl);
showTextAreaDiv.appendChild(showVisibleTextAreaEl);

//hide() TextArea
let hideVisibleTextArea = new TextArea({
    value: 'hide Visible TextArea',
    isVisible: true
});
let hideInvisibleTextArea = new TextArea({
    value: 'hide Invisible TextArea',
    isVisible: false
});

let buttonHideTextArea = document.createElement('button');
buttonHideTextArea.innerHTML='Hide TextArea';
buttonHideTextArea.addEventListener('click',function(){
   hideVisibleTextArea.hide();
   hideInvisibleTextArea.hide();
})

let hideVisibleTextAreaEl = document.createElement('div');
hideVisibleTextAreaEl.setAttribute("id", "hide-visible-textarea");
hideVisibleTextAreaEl.appendChild(hideVisibleTextArea.render());
let hideInvisibleTextAreaEl = document.createElement('div');
hideInvisibleTextAreaEl.setAttribute("id", "hide-invisible-textarea");
hideInvisibleTextAreaEl.appendChild(hideInvisibleTextArea.render());
hideInvisibleTextAreaEl.appendChild(buttonHideTextArea);
let hideTextAreaDiv = document.createElement('div');
hideTextAreaDiv.appendChild(hideVisibleTextAreaEl);
hideTextAreaDiv.appendChild(hideInvisibleTextAreaEl);

//disable() TextArea
let disableEnabledTextArea = new TextArea({
    value: 'disable the current enabled TextArea',
    isDisabled: false
});
let disableDisabledTextArea = new TextArea({
    value: 'disable the current disabled TextArea',
    isDisabled: true
});

let buttonDisableTextArea = document.createElement('button');
buttonDisableTextArea.innerHTML='Disable TextArea';
buttonDisableTextArea.addEventListener('click',function(){
   disableEnabledTextArea.disable();
   disableDisabledTextArea.disable();
})

let disableEnabledTextAreaEl = document.createElement('div');
disableEnabledTextAreaEl.setAttribute("id", "disable-enabled-textarea");
disableEnabledTextAreaEl.appendChild(disableEnabledTextArea.render());
let disableDisabledTextAreaEl = document.createElement('div');
disableDisabledTextAreaEl.setAttribute("id", "disable-disabled-textarea");
disableDisabledTextAreaEl.appendChild(disableDisabledTextArea.render());
disableDisabledTextAreaEl.appendChild(buttonDisableTextArea);
let disableTextAreaDiv = document.createElement('div');
disableTextAreaDiv.appendChild(disableEnabledTextAreaEl);
disableTextAreaDiv.appendChild(disableDisabledTextAreaEl);

//enable() TextArea
let enableDisabledTextArea = new TextArea({
    value: 'enable the current disabled TextArea',
    isDisabled: true
});
let enableEnabledTextArea = new TextArea({
    value: 'enable the current enabled TextArea',
    isDisabled: false
});

let buttonEnableTextArea = document.createElement('button');
buttonEnableTextArea.innerHTML='Enable TextArea';
buttonEnableTextArea.addEventListener('click',function(){
    enableDisabledTextArea.enable();
    enableEnabledTextArea.enable();
})

let enableDisabledTextAreaEl = document.createElement('div');
enableDisabledTextAreaEl.setAttribute("id", "enable-disabled-textarea");
enableDisabledTextAreaEl.appendChild(enableDisabledTextArea.render());
let enableEnabledTextAreaEl = document.createElement('div');
enableEnabledTextAreaEl.setAttribute("id", "enable-enabled-textarea");
enableEnabledTextAreaEl.appendChild(enableEnabledTextArea.render());
enableEnabledTextAreaEl.appendChild(buttonEnableTextArea);
let enableTextAreaDiv = document.createElement('div');
enableTextAreaDiv.appendChild(enableDisabledTextAreaEl);
enableTextAreaDiv.appendChild(enableEnabledTextAreaEl);

export default {
    constructorTextAreaEl,
    getValueTextAreaEl,
    setValueTextAreaEl,
    onCallbackFunctionTextArea,
    onCallbackTriggerTextArea,
    showTextAreaDiv,
    hideTextAreaDiv,
    disableTextAreaDiv,
    enableTextAreaDiv
}