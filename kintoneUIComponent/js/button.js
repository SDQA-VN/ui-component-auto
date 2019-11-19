//kintone-ui-component Button
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82739570/kintone-ui-component+Button

// constructor&render
let normalButton_constructor = new kintoneUIComponent.Button({});
let normalButton_constructorEl = normalButton_constructor.render();
normalButton_constructorEl.className = 'normalButton_constructorEl';
let normalButton_constructor_cell = testgrid.getCell(posConfig.Normal_Button.x, 1);
normalButton_constructor_cell.appendChild(normalButton_constructorEl);

// setText() - normal button which not contains exisiting text
let normalButton_NoneText = new kintoneUIComponent.Button({
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButton_NoneTextEl = normalButton_NoneText.render();
normalButton_NoneTextEl.className = 'normalButton_NoneTextEl';
let normalButton_NoneText_cell = testgrid.getCell(posConfig.Normal_Button.x, 2);
normalButton_NoneText_cell.appendChild(normalButton_NoneTextEl);

// setText() - normal button using function not have parameter
let normalButton_NoneParameter = new kintoneUIComponent.Button({
    text: 'normalButton_NoneParameter',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let normalButton_NoneParameterEl = normalButton_NoneParameter.render();
normalButton_NoneParameterEl.className = 'normalButton_NoneParameterEl';
let normalButton_NoneParameter_cell = testgrid.getCell(posConfig.Normal_Button.x, 3);
normalButton_NoneParameter_cell.appendChild(normalButton_NoneParameterEl);

// setType() - normal button using function not have parameter
let normalButton_setType = new kintoneUIComponent.Button({
    text: 'normalButton_setType',
    isDisabled: false,
    isVisible: true,
});
let normalButton_setType_cell = testgrid.getCell(posConfig.Normal_Button.x, 4);
normalButton_setType_cell.appendChild(normalButton_setType.render());

//show() - invisible button
let normalButton_showInvisible = new kintoneUIComponent.Button({
    text: 'normalButton_showInvisible',
    type: 'normal',
    isDisabled: false,
    isVisible: false,
});
let normalButton_showInvisible_cell = testgrid.getCell(posConfig.Normal_Button.x, 5);
normalButton_showInvisible_cell.appendChild(normalButton_showInvisible.render());

// hide() - visible button
let normalButton_hideVisible = new kintoneUIComponent.Button({
    text: 'normalButton_hideVisible',
    type: 'normal',
    isDisabled: false,
    isVisible: true,
});
let normalButton_hideVisible_cell = testgrid.getCell(posConfig.Normal_Button.x, 6);
normalButton_hideVisible_cell.appendChild(normalButton_hideVisible.render());

//disable() - enable button
let normalButton_disable = new kintoneUIComponent.Button({
    text: "normalButton_disable",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButton_disable_cell = testgrid.getCell(posConfig.Normal_Button.x, 7);
normalButton_disable_cell.appendChild(normalButton_disable.render());

//enable() - disable button
let normalButton_enable = new kintoneUIComponent.Button({
    text: "normalButton_enable",
    type: "normal",
    isDisabled: true,
    isVisible: true,
});
let normalButton_enable_cell = testgrid.getCell(posConfig.Normal_Button.x, 8);
normalButton_enable_cell.appendChild(normalButton_enable.render());

// normal button - on() - call method
let buttonNormal = new kintoneUIComponent.Button({
    text: "Normal",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButtonEl = buttonNormal.render();
normalButtonEl.className = 'normalButtonEl';
let buttonNormal_cell = testgrid.getCell(posConfig.Normal_Button.x, 9);
buttonNormal_cell.appendChild(normalButtonEl);
buttonNormal.on('click', function (event) {
    alert('buttonNormal has been clicked');
});

//on() - callback trigger
let normalButton_onTrigger = new kintoneUIComponent.Button({
    text: "normalButton_onTrigger",
    type: "normal",
    isDisabled: false,
    isVisible: true,
});
let normalButton_onTrigger_cell = testgrid.getCell(posConfig.Normal_Button.x, 10);
normalButton_onTrigger_cell.appendChild(normalButton_onTrigger.render());
function triggerClick() {
    alert('normalButton_onTrigger has been clicked');
}
normalButton_onTrigger.on('click', triggerClick);

// constructor&render
let submitButton_constructor = new kintoneUIComponent.Button({type: 'submit'});
let submitButton_constructorEl = submitButton_constructor.render();
submitButton_constructorEl.className = 'submitButton_constructorEl';
submitButton_constructorEl.type = 'submit';
let submitButton_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 1);
submitButton_constructor_cell.appendChild(submitButton_constructorEl);

let submitButton_fullValue_constructor = new kintoneUIComponent.Button({
    type: 'submit',
    text: 'submitButton_fullValue_constructor',
    isDisabled: false,
    isVisible: true
});
let submitButton_fullValue_constructorEl = submitButton_fullValue_constructor.render();
submitButton_fullValue_constructorEl.className = 'submitButton_fullValue_constructorEl';
submitButton_fullValue_constructorEl.type = 'submit';
let submitButton_fullValue_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 2);
submitButton_fullValue_constructor_cell.appendChild(submitButton_fullValue_constructorEl);

// setText() - submit button which not contains exisiting text
let submitButton_NoneText = new kintoneUIComponent.Button({
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_NoneTextEl = submitButton_NoneText.render();
submitButton_NoneTextEl.className = 'submitButton_NoneTextEl';
let submitButton_NoneText_cell = testgrid.getCell(posConfig.Submit_Button.x, 3);
submitButton_NoneText_cell.appendChild(submitButton_NoneTextEl);

// setText() - submit button using function not have parameter
let submitButton_NoneParameter = new kintoneUIComponent.Button({
    text: 'submitButton_NoneParameter',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_NoneParameterEl = submitButton_NoneParameter.render();
submitButton_NoneParameterEl.className = 'submitButton_NoneParameterEl';
let submitButton_NoneParameter_cell = testgrid.getCell(posConfig.Submit_Button.x, 4);
submitButton_NoneParameter_cell.appendChild(submitButton_NoneParameterEl);

// setType() - submit button using function not have parameter
let submitButton_setType = new kintoneUIComponent.Button({
    text: 'submitButton_setType',
    isDisabled: false,
    isVisible: true,
});
let submitButton_setType_cell = testgrid.getCell(posConfig.Submit_Button.x, 5);
submitButton_setType_cell.appendChild(submitButton_setType.render());

//show() - invisible button
let submitButton_showInvisible = new kintoneUIComponent.Button({
    text: 'submitButton_showInvisible',
    type: 'submit',
    isDisabled: false,
    isVisible: false,
});
let submitButton_showInvisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 6);
submitButton_showInvisible_cell.appendChild(submitButton_showInvisible.render());

//hide() - visible button
let submitButton_hideVisible = new kintoneUIComponent.Button({
    text: 'submitButton_hideVisible',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_hideVisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 7);
submitButton_hideVisible_cell.appendChild(submitButton_hideVisible.render());

//disable() - enable button
let submitButton_disable = new kintoneUIComponent.Button({
    text: 'submitButton_disable',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_disable_cell = testgrid.getCell(posConfig.Submit_Button.x, 8);
submitButton_disable_cell.appendChild(submitButton_disable.render());

//enable() - disable button
let submitButton_enable = new kintoneUIComponent.Button({
    text: 'submitButton_enable',
    type: 'submit',
    isDisabled: true,
    isVisible: true,
});
let submitButton_enable_cell = testgrid.getCell(posConfig.Submit_Button.x, 9);
submitButton_enable_cell.appendChild(submitButton_enable.render());

// submit button - on() - call method
let buttonSubmit = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButtonEl = buttonSubmit.render();
submitButtonEl.className = 'submitButtonEl';
let buttonSubmit_cell = testgrid.getCell(posConfig.Submit_Button.x, 10);
buttonSubmit_cell.appendChild(submitButtonEl);
buttonSubmit.on('click', function (event) {
    alert('buttonSubmit has been clicked');
});

//on() - callback trigger
let submitButton_onTrigger = new kintoneUIComponent.Button({
    text: 'submitButton_onTrigger',
    type: 'submit',
    isDisabled: false,
    isVisible: true,
});
let submitButton_onTrigger_cell = testgrid.getCell(posConfig.Submit_Button.x, 11);
submitButton_onTrigger_cell.appendChild(submitButton_onTrigger.render());
function submitTriggerClick() {
    alert('submitButton_onTrigger has been clicked');
}
submitButton_onTrigger.on('click', submitTriggerClick);