import {Button} from '@kintone/kintone-ui-component/esm/js';

// constructor&render
let normalButton_constructor = new Button({});
let normalButton_constructorEl = normalButton_constructor.render();
normalButton_constructorEl.className = 'normalButton_constructorEl';

// setText() - normal button which not contains exisiting text
let normalButton_NoneText = new Button({
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButton_NoneTextEl = normalButton_NoneText.render();
normalButton_NoneTextEl.className = 'normalButton_NoneTextEl';

// setText() - normal button using function not have parameter
let normalButton_NoneParameter = new Button({
    text: 'normalButton_NoneParameter',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let normalButton_NoneParameterEl = normalButton_NoneParameter.render();
normalButton_NoneParameterEl.className = 'normalButton_NoneParameterEl';

// setType() - normal button using function not have parameter
let normalButton_setType = new Button({
    text: 'normalButton_setType',
    isDisabled: false,
    isVisible: true,
});

//show() - invisible button
let normalButton_showInvisible = new Button({
    text: 'normalButton_showInvisible',
    type: 'normal',
    isDisabled: false,
    isVisible: false,
});

// hide() - visible button
let normalButton_hideVisible = new Button({
    text: 'normalButton_hideVisible',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});

//disable() - enable button
let normalButton_disable = new Button({
    text: "normalButton_disable",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});

//enable() - disable button
let normalButton_enable = new Button({
    text: "normalButton_enable",
    type: "normal",
    isDisabled: true,
    isVisible: true,
});

// normal button - on() - call method
let buttonNormal = new Button({
    text: "Normal",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonEl = buttonNormal.render();
normalButtonEl.className = 'normalButtonEl';
buttonNormal.on('click', function (event) {
    alert('buttonNormal has been clicked');
});

//on() - callback trigger
let normalButton_onTrigger = new Button({
    text: "normalButton_onTrigger",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
function triggerClick() {
    alert('normalButton_onTrigger has been clicked');
}
normalButton_onTrigger.on('click', triggerClick);

// constructor&render
let submitButton_constructor = new Button({type: 'submit'});
let submitButton_constructorEl = submitButton_constructor.render();
submitButton_constructorEl.className = 'submitButton_constructorEl';
submitButton_constructorEl.type = 'submit';

// fulloption
let submitButton_fullValue_constructor = new Button({
    type: 'submit',
    text: 'submitButton_fullValue_constructor',
    isDisabled: false,
    isVisible: true
});
let submitButton_fullValue_constructorEl = submitButton_fullValue_constructor.render();
submitButton_fullValue_constructorEl.className = 'submitButton_fullValue_constructorEl';
submitButton_fullValue_constructorEl.type = 'submit';

// setText() - submit button which not contains exisiting text
let submitButton_NoneText = new Button({
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_NoneTextEl = submitButton_NoneText.render();
submitButton_NoneTextEl.className = 'submitButton_NoneTextEl';

// setText() - submit button using function not have parameter
let submitButton_NoneParameter = new Button({
    text: 'submitButton_NoneParameter',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_NoneParameterEl = submitButton_NoneParameter.render();
submitButton_NoneParameterEl.className = 'submitButton_NoneParameterEl';

// setType() - submit button using function not have parameter
let submitButton_setType = new Button({
    text: 'submitButton_setType',
    isDisabled: false,
    isVisible: true,
});

//show() - invisible button
let submitButton_showInvisible = new Button({
    text: 'submitButton_showInvisible',
    type: 'submit',
    isDisabled: false,
    isVisible: false,
});

//hide() - visible button
let submitButton_hideVisible = new Button({
    text: 'submitButton_hideVisible',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});

//disable() - enable button
let submitButton_disable = new Button({
    text: 'submitButton_disable',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});

//enable() - disable button
let submitButton_enable = new Button({
    text: 'submitButton_enable',
    type: 'submit',
    isDisabled: true,
    isVisible: true,
});

// submit button - on() - call method
let buttonSubmit = new Button({
    text: 'Submit',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonEl = buttonSubmit.render();
submitButtonEl.className = 'submitButtonEl';
buttonSubmit.on('click', function (event) {
    alert('buttonSubmit has been clicked');
});

//on() - callback trigger
let submitButton_onTrigger = new Button({
    text: 'submitButton_onTrigger',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
function submitTriggerClick() {
    alert('submitButton_onTrigger has been clicked');
}
submitButton_onTrigger.on('click', submitTriggerClick);

export default {
    normalButton_constructorEl,
    normalButton_NoneTextEl,
    normalButton_NoneParameterEl,
    normalButton_setType,
    normalButton_showInvisible,
    normalButton_hideVisible,
    normalButton_disable,
    normalButton_enable,
    normalButtonEl,
    normalButton_onTrigger,
    submitButton_constructorEl,
    submitButton_fullValue_constructorEl,
    submitButton_NoneTextEl,
    submitButton_NoneParameterEl,
    submitButton_setType,
    submitButton_showInvisible,
    submitButton_hideVisible,
    submitButton_disable,
    submitButton_enable,
    submitButtonEl,
    submitButton_onTrigger
}