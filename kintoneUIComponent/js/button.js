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
    normalButton_NoneParameter.setText('');
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
    text: "Normal Button Disable",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonDisableEl = document.createElement('div');
normalButtonDisableEl.setAttribute("id", "normal-button-disable");
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
    text: "Normal Button Enable",
    type: "normal",
    isDisabled: true,
    isVisible: true,
});
let normalButtonEnableEl = document.createElement('div');
normalButtonEnableEl.setAttribute("id", "normal-button-enable");
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

// // constructor&render
// let submitButton_constructor = new kintoneUIComponent.Button({type: 'submit'});
// let submitButton_constructorEl = submitButton_constructor.render();
// submitButton_constructorEl.className = 'submitButton_constructorEl';
// submitButton_constructorEl.type = 'submit';
// let submitButton_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 1);
// submitButton_constructor_cell.appendChild(submitButton_constructorEl);

// let submitButton_fullValue_constructor = new kintoneUIComponent.Button({
//     type: 'submit',
//     text: 'submitButton_fullValue_constructor',
//     isDisabled: false,
//     isVisible: true
// });
// let submitButton_fullValue_constructorEl = submitButton_fullValue_constructor.render();
// submitButton_fullValue_constructorEl.className = 'submitButton_fullValue_constructorEl';
// submitButton_fullValue_constructorEl.type = 'submit';
// let submitButton_fullValue_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 2);
// submitButton_fullValue_constructor_cell.appendChild(submitButton_fullValue_constructorEl);

// // setText() - submit button which not contains exisiting text
// let submitButton_NoneText = new kintoneUIComponent.Button({
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_NoneTextEl = submitButton_NoneText.render();
// submitButton_NoneTextEl.className = 'submitButton_NoneTextEl';
// let submitButton_NoneText_cell = testgrid.getCell(posConfig.Submit_Button.x, 3);
// submitButton_NoneText_cell.appendChild(submitButton_NoneTextEl);

// // setText() - submit button using function not have parameter
// let submitButton_NoneParameter = new kintoneUIComponent.Button({
//     text: 'submitButton_NoneParameter',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_NoneParameterEl = submitButton_NoneParameter.render();
// submitButton_NoneParameterEl.className = 'submitButton_NoneParameterEl';
// let submitButton_NoneParameter_cell = testgrid.getCell(posConfig.Submit_Button.x, 4);
// submitButton_NoneParameter_cell.appendChild(submitButton_NoneParameterEl);

// // setType() - submit button using function not have parameter
// let submitButton_setType = new kintoneUIComponent.Button({
//     text: 'submitButton_setType',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_setType_cell = testgrid.getCell(posConfig.Submit_Button.x, 5);
// submitButton_setType_cell.appendChild(submitButton_setType.render());

// //show() - invisible button
// let submitButton_showInvisible = new kintoneUIComponent.Button({
//     text: 'submitButton_showInvisible',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: false,
// });
// let submitButton_showInvisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 6);
// submitButton_showInvisible_cell.appendChild(submitButton_showInvisible.render());

// //hide() - visible button
// let submitButton_hideVisible = new kintoneUIComponent.Button({
//     text: 'submitButton_hideVisible',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_hideVisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 7);
// submitButton_hideVisible_cell.appendChild(submitButton_hideVisible.render());

// //disable() - enable button
// let submitButton_disable = new kintoneUIComponent.Button({
//     text: 'submitButton_disable',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_disable_cell = testgrid.getCell(posConfig.Submit_Button.x, 8);
// submitButton_disable_cell.appendChild(submitButton_disable.render());

// //enable() - disable button
// let submitButton_enable = new kintoneUIComponent.Button({
//     text: 'submitButton_enable',
//     type: 'submit',
//     isDisabled: true,
//     isVisible: true,
// });
// let submitButton_enable_cell = testgrid.getCell(posConfig.Submit_Button.x, 9);
// submitButton_enable_cell.appendChild(submitButton_enable.render());

// // submit button - on() - call method
// let buttonSubmit = new kintoneUIComponent.Button({
//     text: 'Submit',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButtonEl = buttonSubmit.render();
// submitButtonEl.className = 'submitButtonEl';
// let buttonSubmit_cell = testgrid.getCell(posConfig.Submit_Button.x, 10);
// buttonSubmit_cell.appendChild(submitButtonEl);
// buttonSubmit.on('click', function (event) {
//     alert('buttonSubmit has been clicked');
// });

// //on() - callback trigger
// let submitButton_onTrigger = new kintoneUIComponent.Button({
//     text: 'submitButton_onTrigger',
//     type: 'submit',
//     isDisabled: false,
//     isVisible: true,
// });
// let submitButton_onTrigger_cell = testgrid.getCell(posConfig.Submit_Button.x, 11);
// submitButton_onTrigger_cell.appendChild(submitButton_onTrigger.render());
// function submitTriggerClick() {
//     alert('submitButton_onTrigger has been clicked');
// }
// submitButton_onTrigger.on('click', submitTriggerClick);