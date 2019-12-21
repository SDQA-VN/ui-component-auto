//kintone-ui-component Button
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82739570/kintone-ui-component+Button

// constructor&render
let normalButton_constructor = new kintoneUIComponent.Button({});
let normalButtonConstructorEl = document.createElement('div')
normalButtonConstructorEl.setAttribute("id", "normalButton_constructorEl");
normalButtonConstructorEl.appendChild(normalButton_constructor.render());
let normalButtonConstructorCell = testgrid.getCell(posConfig.Normal_Button.x, 1);
normalButtonConstructorCell.appendChild(normalButtonConstructorEl);


// setText() - normal button which not contains exisiting text
let normalButton_NoneText = new kintoneUIComponent.Button({
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonNoneTextEl = document.createElement('div')
normalButtonNoneTextEl.setAttribute("id", "normalButton_NoneTextEl");
// button set text
let buttonSetText = document.createElement('button')
buttonSetText.innerHTML = 'Set Text Normal Button'
buttonSetText.addEventListener('click', function () {
    normalButton_NoneText.setText('Normal Button Text Changed');
})
normalButtonNoneTextEl.appendChild(normalButton_NoneText.render());
normalButtonNoneTextEl.appendChild(buttonSetText);
let normalButtonNoneTextCell = testgrid.getCell(posConfig.Normal_Button.x, 2);
normalButtonNoneTextCell.appendChild(normalButtonNoneTextEl);

// setText() - normal button using function not have parameter
let normalButton_NoneParameter = new kintoneUIComponent.Button({
    text: 'Normal Button None Parameter',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let normalButtonNoneParameterEl = document.createElement('div');
normalButtonNoneParameterEl.setAttribute("id", "normalButton_NoneParameterEl");
// button set text without params
let buttonSetTextWithoutParam = document.createElement('button')
buttonSetTextWithoutParam.innerHTML = 'Set Text Without Param Normal Button'
buttonSetTextWithoutParam.addEventListener('click', function () {
    normalButton_NoneParameter.setText();
})
normalButtonNoneParameterEl.appendChild(normalButton_NoneParameter.render());
normalButtonNoneParameterEl.appendChild(buttonSetTextWithoutParam);
let normalButtonNoneParameterCell = testgrid.getCell(posConfig.Normal_Button.x, 3);
normalButtonNoneParameterCell.appendChild(normalButtonNoneParameterEl);

// setType() - normal button using function not have parameter
let normalButton_setType = new kintoneUIComponent.Button({
    text: 'Normal Button',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let normalButtonSetTypeEl = document.createElement('div');
normalButtonSetTypeEl.setAttribute("id", "normal-button-set-type");
// button set text without params
let buttonSetTypeNormalButton = document.createElement('button')
buttonSetTypeNormalButton.innerHTML = 'Set Type Normal Button'
buttonSetTypeNormalButton.addEventListener('click', function () {
    normalButton_setType.setType('normal');
})
normalButtonSetTypeEl.appendChild(normalButton_setType.render());
normalButtonSetTypeEl.appendChild(buttonSetTypeNormalButton);
let normalButtonSetTypeCell = testgrid.getCell(posConfig.Normal_Button.x, 4);
normalButtonSetTypeCell.appendChild(normalButtonSetTypeEl);

//show() - invisible button
let normalButton_showInvisible = new kintoneUIComponent.Button({
    text: 'Normal Button Invisible',
    type: 'normal',
    isDisabled: false,
    isVisible: false,
});
let normalButtonShowInvisibleEl = document.createElement('div');
normalButtonShowInvisibleEl.setAttribute("id", "normal-button-show");
// button set text without params
let buttonShowNormalButton = document.createElement('button')
buttonShowNormalButton.innerHTML = 'Show Normal Button'
buttonShowNormalButton.addEventListener('click', function () {
    normalButton_showInvisible.show();
})
normalButtonShowInvisibleEl.appendChild(normalButton_showInvisible.render());
normalButtonShowInvisibleEl.appendChild(buttonShowNormalButton);
let normalButton_showInvisible_cell = testgrid.getCell(posConfig.Normal_Button.x, 5);
normalButton_showInvisible_cell.appendChild(normalButtonShowInvisibleEl);

// hide() - visible button
let normalButton_hideVisible = new kintoneUIComponent.Button({
    text: 'Normal Button Visible',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let normalButtonHideVisibleEl = document.createElement('div');
normalButtonHideVisibleEl.setAttribute("id", "normal-button-hide");
// button hide
let buttonHideNormalButton = document.createElement('button')
buttonHideNormalButton.innerHTML = 'Hide Normal Button'
buttonHideNormalButton.addEventListener('click', function () {
    normalButton_hideVisible.hide();
})
normalButtonHideVisibleEl.appendChild(normalButton_hideVisible.render());
normalButtonHideVisibleEl.appendChild(buttonHideNormalButton);
let normalButtonHideVisibleCell = testgrid.getCell(posConfig.Normal_Button.x, 6);
normalButtonHideVisibleCell.appendChild(normalButtonHideVisibleEl);

//disable() - enable button
let normalButton_disable = new kintoneUIComponent.Button({
    text: "Normal Button Enable",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonDisableEl = document.createElement('div');
normalButtonDisableEl.setAttribute("id", "normal-button-enable");
// button disable
let buttonDisableNormalButton = document.createElement('button')
buttonDisableNormalButton.innerHTML = 'Disable Normal Button'
buttonDisableNormalButton.addEventListener('click', function () {
    normalButton_disable.disable();
})
normalButtonDisableEl.appendChild(normalButton_disable.render());
normalButtonDisableEl.appendChild(buttonDisableNormalButton);
let normalButtonDisableCell = testgrid.getCell(posConfig.Normal_Button.x, 7);
normalButtonDisableCell.appendChild(normalButtonDisableEl);

//enable() - disable button
let normalButton_enable = new kintoneUIComponent.Button({
    text: "Normal Button Disable",
    type: "normal",
    isDisabled: true,
    isVisible: true,
});
let normalButtonEnableEl = document.createElement('div');
normalButtonEnableEl.setAttribute("id", "normal-button-disable");
// button disable
let buttonEnableNormalButton = document.createElement('button')
buttonEnableNormalButton.innerHTML = 'Enable Normal Button'
buttonEnableNormalButton.addEventListener('click', function () {
    normalButton_enable.enable();
});
normalButtonEnableEl.appendChild(normalButton_enable.render());
normalButtonEnableEl.appendChild(buttonEnableNormalButton)
let normalButtonEnableCell = testgrid.getCell(posConfig.Normal_Button.x, 8);
normalButtonEnableCell.appendChild(normalButtonEnableEl);

//on() - callback trigger
let normalButton_onTrigger = new kintoneUIComponent.Button({
    text: "Normal Button On Trigger",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonOnTriggerEl = document.createElement('div');
normalButtonOnTriggerEl.setAttribute("id", "normal-button-on-trigger");
function triggerClick() {
    alert('Normal Button has been clicked');
}
normalButton_onTrigger.on('click', triggerClick);
normalButtonOnTriggerEl.appendChild(normalButton_onTrigger.render())
let normalButtonOnTriggerCell = testgrid.getCell(posConfig.Normal_Button.x, 9);
normalButtonOnTriggerCell.appendChild(normalButtonOnTriggerEl);



// constructor&render
let submitButton_constructor = new kintoneUIComponent.Button({type: 'submit'});
let submitButtonConstructorEl = document.createElement('div');
submitButtonConstructorEl.setAttribute("id", "submit-button-constructor");
submitButtonConstructorEl.appendChild(submitButton_constructor.render())
let submitButtonConstructorCell = testgrid.getCell(posConfig.Submit_Button.x, 1);
submitButtonConstructorCell.appendChild(submitButtonConstructorEl);

// constructor&render
let submitButton_fullOptions = new kintoneUIComponent.Button({
    type: 'submit',
    text: 'Submit Button Full Options',
    isDisabled: false,
    isVisible: true
});
let submitButtonFullOptionEl = document.createElement('div');
submitButtonFullOptionEl.setAttribute("id", "submit-button-full-options");
submitButtonFullOptionEl.appendChild(submitButton_fullOptions.render())
let submitButton_fullValue_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 2);
submitButton_fullValue_constructor_cell.appendChild(submitButtonFullOptionEl);

// setText() - submit button which not contains exisiting text
let submitButton_NoneText = new kintoneUIComponent.Button({
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonNoneTextEl = document.createElement('div');
submitButtonNoneTextEl.setAttribute("id", "submit-button-none-text");
// button set text
let buttonSetTextSubmitButton = document.createElement('button')
buttonSetTextSubmitButton.innerHTML = 'Set Text Submit Button'
buttonSetTextSubmitButton.addEventListener('click', function () {
    submitButton_NoneText.setText('Submit Button Text Changed');
});
submitButtonNoneTextEl.appendChild(submitButton_NoneText.render())
submitButtonNoneTextEl.appendChild(buttonSetTextSubmitButton)
let submitButtonNoneTextCell = testgrid.getCell(posConfig.Submit_Button.x, 3);
submitButtonNoneTextCell.appendChild(submitButtonNoneTextEl);

// setText() - submit button using function not have parameter
let submitButton_NoneParameter = new kintoneUIComponent.Button({
    text: 'Submit Button None Parameter',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonNoneParamEl = document.createElement('div');
submitButtonNoneParamEl.setAttribute("id", "submit-button-none-parameter");
// button set text
let buttonSetTextNoneParam = document.createElement('button')
buttonSetTextNoneParam.innerHTML = 'Set Text Without Param Submit Button'
buttonSetTextNoneParam.addEventListener('click', function () {
    submitButton_NoneParameter.setText();
});
submitButtonNoneParamEl.appendChild(submitButton_NoneParameter.render())
submitButtonNoneParamEl.appendChild(buttonSetTextNoneParam)
let submitButtonNoneParameterCell = testgrid.getCell(posConfig.Submit_Button.x, 4);
submitButtonNoneParameterCell.appendChild(submitButtonNoneParamEl);


// setType() - submit button using function not have parameter
let submitButton_setType = new kintoneUIComponent.Button({
    text: 'Submit Button Set Type',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let submitButtonSetTypeEl = document.createElement('div');
submitButtonSetTypeEl.setAttribute("id", "submit-button-set-type");
// button set text
let buttonSetTypeSubmitButton = document.createElement('button')
buttonSetTypeSubmitButton.innerHTML = 'Set Type Submit Button'
buttonSetTypeSubmitButton.addEventListener('click', function () {
    submitButton_setType.setType('submit');
});
submitButtonSetTypeEl.appendChild(submitButton_setType.render())
submitButtonSetTypeEl.appendChild(buttonSetTypeSubmitButton)
let submitButtonSetTypeCell = testgrid.getCell(posConfig.Submit_Button.x, 5);
submitButtonSetTypeCell.appendChild(submitButtonSetTypeEl);


//show() - invisible button
let submitButton_showInvisible = new kintoneUIComponent.Button({
    text: 'Submit Button Invisible',
    type: 'submit',
    isDisabled: false,
    isVisible: false,
});
let submitButtonShowEl = document.createElement('div');
submitButtonShowEl.setAttribute("id", "submit-button-show");
// button set text
let buttonShowSubmitButton = document.createElement('button')
buttonShowSubmitButton.innerHTML = 'Show Submit Button'
buttonShowSubmitButton.addEventListener('click', function () {
    submitButton_showInvisible.show();
});
submitButtonShowEl.appendChild(submitButton_showInvisible.render())
submitButtonShowEl.appendChild(buttonShowSubmitButton)
let submitButtonShowInvisibleCell = testgrid.getCell(posConfig.Submit_Button.x, 6);
submitButtonShowInvisibleCell.appendChild(submitButtonShowEl);

//hide() - visible button
let submitButton_hideVisible = new kintoneUIComponent.Button({
    text: 'Submit Button Visible',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonHideEl = document.createElement('div');
submitButtonHideEl.setAttribute("id", "submit-button-hide");
// button set text
let buttonHideSubmitButton = document.createElement('button')
buttonHideSubmitButton.innerHTML = 'Hide Submit Button'
buttonHideSubmitButton.addEventListener('click', function () {
    submitButton_hideVisible.hide();
});
submitButtonHideEl.appendChild(submitButton_hideVisible.render())
submitButtonHideEl.appendChild(buttonHideSubmitButton)
let submitButtonHideVisibleCell = testgrid.getCell(posConfig.Submit_Button.x, 7);
submitButtonHideVisibleCell.appendChild(submitButtonHideEl);

//disable() - enable button
let submitButton_disable = new kintoneUIComponent.Button({
    text: 'Submit Button Disable',
    type: 'submit',
    isDisabled: true,
    isVisible: true,
});
let submitButtonDisableEl = document.createElement('div');
submitButtonDisableEl.setAttribute("id", "submit-button-enable");
// button set text
let buttonEnableSubmitButton = document.createElement('button')
buttonEnableSubmitButton.innerHTML = 'Enable Submit Button'
buttonEnableSubmitButton.addEventListener('click', function () {
    submitButton_disable.enable();
});
submitButtonDisableEl.appendChild(submitButton_disable.render())
submitButtonDisableEl.appendChild(buttonEnableSubmitButton)
let submitButtonDisableCell = testgrid.getCell(posConfig.Submit_Button.x, 8);
submitButtonDisableCell.appendChild(submitButtonDisableEl);

//enable() - disable button
let submitButton_enable = new kintoneUIComponent.Button({
    text: 'Submit Button Enable',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonEnableEl = document.createElement('div');
submitButtonEnableEl.setAttribute("id", "submit-button-disable");
// button set text
let buttonDisableSubmitButton = document.createElement('button')
buttonDisableSubmitButton.innerHTML = 'Disable Submit Button'
buttonDisableSubmitButton.addEventListener('click', function () {
    submitButton_enable.disable();
});
submitButtonEnableEl.appendChild(submitButton_enable.render())
submitButtonEnableEl.appendChild(buttonDisableSubmitButton)
let submitButton_enable_cell = testgrid.getCell(posConfig.Submit_Button.x, 9);
submitButton_enable_cell.appendChild(submitButtonEnableEl);

//on() - callback trigger
let submitButton_onTrigger = new kintoneUIComponent.Button({
    text: 'Submit Button On Trigger',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonOnTriggerEl = document.createElement('div');
submitButtonOnTriggerEl.setAttribute("id", "submit-button-on-trigger");
function submitButtonTriggerClick() {
    alert('Submit Button has been clicked');
}
submitButton_onTrigger.on('click', submitButtonTriggerClick);
submitButtonOnTriggerEl.appendChild(submitButton_onTrigger.render())
let submitButtonOnTriggerCell = testgrid.getCell(posConfig.Submit_Button.x, 10);
submitButtonOnTriggerCell.appendChild(submitButtonOnTriggerEl)