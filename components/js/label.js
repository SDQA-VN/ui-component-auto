//kintone-ui-component Label
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82903200/kintone-ui-component+Label
'use strict';
//Read this line before read or use code below
//Example: label*, id*  
//(*) : stand for ID number of the case in checklist 

//UI
let UILabel = new kintoneUIComponent.Label({
    text: 'UILabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let UILabelCell = testgrid.getCell(posConfig.Label.x, 1);
UILabelCell.appendChild(UILabel.render());

//constructor label
// let constructorLabel = new kintoneUIComponent.Label({
//     text: 'constructorLabel'
// });
// label.appendChild(constructorLabel.render());

//no option label
let label4 = document.createElement('div')
let label_id4 = label4.setAttribute("id", "no-option-label");
let noOptionLabel = new kintoneUIComponent.Label({
})

let noOptionLabelCell = testgrid.getCell(posConfig.Label.x, 2);
label4.appendChild(noOptionLabel.render());
noOptionLabelCell.appendChild(label4);

//full option label
let label5 = document.createElement('div')
let label_id5 = label5.setAttribute("id", "full-option-label");
let fullOptionLabel = new kintoneUIComponent.Label({
    text: 'full option Label',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});

let fullOptionLabelCell = testgrid.getCell(posConfig.Label.x, 3);
label5.appendChild(fullOptionLabel.render());
fullOptionLabelCell.appendChild(label5);

//label with only option.text
let onlyTextLabel = new kintoneUIComponent.Label({
    text: 'only options.Text Label'
})
let onlyTextLabelCell = testgrid.getCell(posConfig.Label.x, 4);
onlyTextLabelCell.appendChild(onlyTextLabel.render());

//label with only option.isRequired is true
let label9 = document.createElement('div')
let label_id9 = label9.setAttribute("id", "only-isRequired-label-true");
let onlyRequiredTrueLabel = new kintoneUIComponent.Label({
    isRequired: true
})

let onlyRequiredTrueLabelCell = testgrid.getCell(posConfig.Label.x, 5);
label9.appendChild(onlyRequiredTrueLabel.render());
onlyRequiredTrueLabelCell.appendChild(label9);

//label with only option.isRequired is false
let label10 = document.createElement('div')
let label_id10 = label10.setAttribute("id", "only-isRequired-label-false");
let onlyRequiredFalseLabel = new kintoneUIComponent.Label({
    isRequired: false
})
let onlyRequiredFalseLabelCell = testgrid.getCell(posConfig.Label.x, 6);
label10.appendChild(onlyRequiredFalseLabel.render());
onlyRequiredFalseLabelCell.appendChild(label10);

//label with only option.isDisabled is true
let label11 = document.createElement('div')
let label_id11 = label11.setAttribute("id", "only-isDisabled-label-true");
let onlyDisabledLabel = new kintoneUIComponent.Label({
    isDisabled: true
})
let buttonGetValue = document.createElement('button')
buttonGetValue.innerHTML = 'Get Value of isDisabled true'
buttonGetValue.addEventListener('click',function(){
   alert(JSON.stringify(onlyDisabledLabel._props.isDisabled))
})

let onlyDisabledTrueLabelCell = testgrid.getCell(posConfig.Label.x, 7);
label11.appendChild(onlyDisabledLabel.render());
label11.appendChild(buttonGetValue);
onlyDisabledTrueLabelCell.appendChild(label11);

//label with only option.isDisabled is false
let label12 = document.createElement('div')
let label_id12 = label12.setAttribute("id", "only-isDisabled-label-false");
let onlyDisabledFalseLabel = new kintoneUIComponent.Label({
    isDisabled: false
})
let buttonGetValue1 = document.createElement('button')
buttonGetValue1.innerHTML = 'Get Value of isDisabled false'
buttonGetValue1.addEventListener('click',function(){
   alert(JSON.stringify(onlyDisabledFalseLabel._props.isDisabled))
})
let onlyDisabledFalseLabelCell = testgrid.getCell(posConfig.Label.x, 8);
label12.appendChild(onlyDisabledFalseLabel.render());
label12.appendChild(buttonGetValue1);
onlyDisabledFalseLabelCell.appendChild(label12);

//label with only option.isVisibled is true
let label13 = document.createElement('div')
let label_id13 = label13.setAttribute("id", "only-isVisibled-label-true");
let onlyVisibleTrueLabel = new kintoneUIComponent.Label({
    isVisible: true
})
let onlyVisibleTrueLabelCell = testgrid.getCell(posConfig.Label.x, 9);
label13.appendChild(onlyVisibleTrueLabel.render());
onlyVisibleTrueLabelCell.appendChild(label13);

//label with only option.isVisibled is false
let label14 = document.createElement('div');
let label_id14 = label14.setAttribute("id", "only-isVisibled-label-false");
let onlyVisibleFalseLabel = new kintoneUIComponent.Label({
    isVisible: false
})
let onlyVisibleFalseLabelCell = testgrid.getCell(posConfig.Label.x, 10);
label14.appendChild(onlyVisibleFalseLabel.render());
onlyVisibleFalseLabelCell.appendChild(label14);


//setText for label which is not contain existing text and contain existing text
let label15 = document.createElement('div');
let label_id15 = label15.setAttribute("id", "set-text-label");
let setTextLabel = new kintoneUIComponent.Label({
    text: '',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let buttonSetText_Label = document.createElement('button');
let buttonSetText1_Label = document.createElement('button');
buttonSetText_Label.innerHTML = 'Set text for label not contain existing text';
buttonSetText1_Label.innerHTML = 'Set text for label contain existing text';
buttonSetText_Label.addEventListener('click',function(){
    setTextLabel.setText('Set text for label not contain existing text')
})
buttonSetText1_Label.addEventListener('click',function(){
    setTextLabel.setText('Set text for label contain existing text')
})
let setTextLabelCell = testgrid.getCell(posConfig.Label.x, 11);
label15.appendChild(setTextLabel.render());
label15.appendChild(buttonSetText_Label);
label15.appendChild(buttonSetText1_Label);
setTextLabelCell.appendChild(label15);

//setText with XSS value
let label17 = document.createElement('div')
let label_id17 = label17.setAttribute("id", "set-XSS-value-label");
let setTextXSSLabel = new kintoneUIComponent.Label({
    text:'Set XSS Value for Label'
})
let buttonsetTextXSS_Label = document.createElement('button')
buttonsetTextXSS_Label.innerHTML='Set text with XSS value'
buttonsetTextXSS_Label.addEventListener('click',function(){
    setTextXSSLabel.setText("alert('XSS Attack');")
})
let setTextXSSLabelCell = testgrid.getCell(posConfig.Label.x, 12);
label17.appendChild(setTextXSSLabel.render());
label17.appendChild(buttonsetTextXSS_Label);
setTextXSSLabelCell.appendChild(label17);

//setText with invisible Label
let label18 = document.createElement('div')
let label_id18 = label18.setAttribute("id", "set-text-invisible-label");
let setTextInvisibleLabel = new kintoneUIComponent.Label({
    text:'New Text',
    isVisible:false
})
let buttonsetTextInvisible_Label = document.createElement('button')
buttonsetTextInvisible_Label.innerHTML='Set text with invisible Label'
buttonsetTextInvisible_Label.addEventListener('click',function(){
    setTextInvisibleLabel.setText("Set text with invisible label");
})
let buttonshowTextInvisible_Label = document.createElement('button')
buttonshowTextInvisible_Label.innerHTML='Show text invisible'
buttonshowTextInvisible_Label.addEventListener('click',function(){
    setTextInvisibleLabel.show();
})
let setTextInvisibleLabelCell = testgrid.getCell(posConfig.Label.x, 13);
label18.appendChild(setTextInvisibleLabel.render());
label18.appendChild(buttonsetTextInvisible_Label);
label18.appendChild(buttonshowTextInvisible_Label);
setTextInvisibleLabelCell.appendChild(label18);

//Set current text to blank
let label19 = document.createElement('div')
let label_id19 = label19.setAttribute("id", "set-text-blank-label");
let setTextBlankLabel = new kintoneUIComponent.Label({
    text:'Set text to blank'
})
let buttonsetTextBlank_Label = document.createElement('button')
buttonsetTextBlank_Label.innerHTML='Set text to blank'
buttonsetTextBlank_Label.addEventListener('click',function(){
    setTextBlankLabel.setText("")
})
let setTextBlankLabelCell = testgrid.getCell(posConfig.Label.x, 14);
label19.appendChild(setTextBlankLabel.render());
label19.appendChild(buttonsetTextBlank_Label);
setTextBlankLabelCell.appendChild(label19);

//Set text without parameter
let label20 = document.createElement('div')
let label_id20 = label20.setAttribute("id", "set-text-no-param-label");
let setTextNoParamLabel = new kintoneUIComponent.Label({
    text:'Set text with no parameter for Label'
})
let buttonsetTextNoParam_Label = document.createElement('button')
buttonsetTextNoParam_Label.innerHTML='Set text with no parameter for Label'
buttonsetTextNoParam_Label.addEventListener('click',function(){
    setTextNoParamLabel.setText()
})
let setTextNoParamLabelCell = testgrid.getCell(posConfig.Label.x, 15);
label20.appendChild(setTextNoParamLabel.render());
label20.appendChild(buttonsetTextNoParam_Label);
setTextNoParamLabelCell.appendChild(label20);

//setRequired(true)
// let setRequiredTrueLabel = new kintoneUIComponent.Label({
//     text: 'setRequiredTrueLabel',
//     isDisabled: false,
//     isVisible: true
// });
// label.appendChild(setRequiredTrueLabel.render());

//setRequired(false) to isRequired label
let label22 = document.createElement('div')
let label_id22 = label22.setAttribute("id", "set-false-required-label");
let setRequiredFalseLabel = new kintoneUIComponent.Label({
    text: 'Set False for the current required Label',
    isRequired: true,
});
let buttonsetFalseRequired = document.createElement('button')
buttonsetFalseRequired.innerHTML='Set False for the current required Label'
buttonsetFalseRequired.addEventListener('click',function(){
    setRequiredFalseLabel.setRequired(false)
})
let setRequiredFalseLabelCell = testgrid.getCell(posConfig.Label.x, 16);
label22.appendChild(setRequiredFalseLabel.render());
label22.appendChild(buttonsetFalseRequired);
setRequiredFalseLabelCell.appendChild(label22);

//setRequired(true) to isRequired label
let label23 = document.createElement('div')
let label_id23 = label23.setAttribute("id", "set-true-required-label");
let setRequiredTrueLabel = new kintoneUIComponent.Label({
    text: 'Set True for the current unrequired Label',
    isRequired: false
});
let buttonsetTrueRequired = document.createElement('button')
buttonsetTrueRequired.innerHTML='Set True for the current unrequired Label'
buttonsetTrueRequired.addEventListener('click',function(){
    setRequiredTrueLabel.setRequired(true)
})
let setRequiredTrueLabelCell = testgrid.getCell(posConfig.Label.x, 17);
label23.appendChild(setRequiredTrueLabel.render());
label23.appendChild(buttonsetTrueRequired);
setRequiredTrueLabelCell.appendChild(label23);

//Set required for invisible label
let label24 = document.createElement('div')
let label_id24 = label24.setAttribute("id", "set-required-invisible-label");
let setRequiredInvisibleLabel = new kintoneUIComponent.Label({
    text:'Set required for invisible label',
    isVisible: false,
    isRequired: false
})
let buttonsetRequiredInvisible = document.createElement('button');
buttonsetRequiredInvisible.innerHTML='Set required for invisible label';
buttonsetRequiredInvisible.addEventListener('click',function(){
    setRequiredInvisibleLabel.setRequired(true);    
})
let setRequiredInvisibleLabelCell = testgrid.getCell(posConfig.Label.x, 18);
label24.appendChild(setRequiredInvisibleLabel.render());
label24.appendChild(buttonsetRequiredInvisible);
setRequiredInvisibleLabelCell.appendChild(label24);

//Set required label without parameter
let label25 = document.createElement('div')
let label_id25 = label25.setAttribute("id", "set-required-no-param-label");
let setRequiredNoParamLabel = new kintoneUIComponent.Label({
    text:'Set required without parameter for label',
    isRequired: false
})
let buttonsetRequiredNoParam = document.createElement('button');
buttonsetRequiredNoParam.innerHTML='Set required without parameter for label';
buttonsetRequiredNoParam.addEventListener('click',function(){
    setRequiredNoParamLabel.setRequired();
})
let setRequiredNoParamLabelCell = testgrid.getCell(posConfig.Label.x, 19);
label25.appendChild(setRequiredNoParamLabel.render());
label25.appendChild(buttonsetRequiredNoParam);
setRequiredNoParamLabelCell.appendChild(label25);

//show invisible label and show visible label
let label27 = document.createElement('div')
let label_id27 = label27.setAttribute("id", "show-invisible-label");
let showInVisibleLabel = new kintoneUIComponent.Label({
    text: 'show Invisible Label',
    isVisible: false
});
let label28 = document.createElement('div')
let label_id28 = label28.setAttribute("id", "show-visible-label");
let showVisibleLabel = new kintoneUIComponent.Label({
    text: 'show Visible Label',
    isVisible: true
});

let buttonShowLabel = document.createElement('button');
buttonShowLabel.innerHTML='Show Label';
buttonShowLabel.addEventListener('click',function(){
   showInVisibleLabel.show();
   showVisibleLabel.show();
})
let showLabelCell = testgrid.getCell(posConfig.Label.x, 20);
label27.appendChild(showInVisibleLabel.render());
label28.appendChild(showVisibleLabel.render());
showLabelCell.appendChild(label27);
showLabelCell.appendChild(label28);
showLabelCell.appendChild(buttonShowLabel);

//hide visible label and hide invisible label
let label29 = document.createElement('div')
let label_id29 = label29.setAttribute("id", "hide-visible-label");
let hideVisibleLabel = new kintoneUIComponent.Label({
    text: 'hide Visible Label',
    isVisible: true
});
let label30 = document.createElement('div')
let label_id30 = label30.setAttribute("id", "hide-invisible-label");
let hideInvisibleLabel = new kintoneUIComponent.Label({
    text: 'hide Invisible Label',
    isVisible: false
});
let buttonHideLabel = document.createElement('button');
buttonHideLabel.innerHTML='Hide Label';
buttonHideLabel.addEventListener('click',function(){
    hideVisibleLabel.hide();
    hideInvisibleLabel.hide();
})
let hideLabelCell = testgrid.getCell(posConfig.Label.x, 21);
label29.appendChild(hideVisibleLabel.render());
label30.appendChild(hideInvisibleLabel.render());
hideLabelCell.appendChild(label29);
hideLabelCell.appendChild(label30);
hideLabelCell.appendChild(buttonHideLabel);

//disable the current enable label and disable the current disable label
let label31 = document.createElement('div')
let label_id31 = label31.setAttribute("id", "disable-enable-label");
let disableEnableLabel = new kintoneUIComponent.Label({
    text: 'disable the current Enable Label',
    isDisabled: false
});
let label32 = document.createElement('div')
let label_id32 = label32.setAttribute("id", "disable-disable-label");
let disableDisableLabel = new kintoneUIComponent.Label({
    text: 'disable the current Disable Label',
    isDisabled: true
});
let buttonDisableLabel = document.createElement('button');
buttonDisableLabel.innerHTML='Disable Label';
buttonDisableLabel.addEventListener('click',function(){
    disableEnableLabel.disable();
    disableDisableLabel.disable();
})
let disableLabelCell = testgrid.getCell(posConfig.Label.x, 22);
label31.appendChild(disableEnableLabel.render());
label32.appendChild(disableDisableLabel.render());
disableLabelCell.appendChild(label31);
disableLabelCell.appendChild(label32);
disableLabelCell.appendChild(buttonDisableLabel);

//enable the current disable Label and enbale the current enable Label
let label33 = document.createElement('div')
let label_id33 = label33.setAttribute("id", "enable-disable-label");
let enableDisableLabel = new kintoneUIComponent.Label({
    text: 'enable the current Disable Label',
    isDisabled: true
});
let label34 = document.createElement('div')
let label_id34 = label34.setAttribute("id", "enable-enable-label");
let enableEnableLabel = new kintoneUIComponent.Label({
    text: 'enable the current Enable Label',
    isDisabled: false
});
let buttonEnableLabel = document.createElement('button');
buttonEnableLabel.innerHTML='Enable Label';
buttonEnableLabel.addEventListener('click',function(){
    enableDisableLabel.enable();
    enableEnableLabel.enable();
    
})
let enableLabelCell = testgrid.getCell(posConfig.Label.x, 23);
label33.appendChild(enableDisableLabel.render());
label34.appendChild(enableEnableLabel.render());
enableLabelCell.appendChild(label33);
enableLabelCell.appendChild(label34);
enableLabelCell.appendChild(buttonEnableLabel);

//on() - call function
let onCallbackFunctionLabel = new kintoneUIComponent.Label({
    text: 'onFunctionLabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let callFunctionCell_Label = testgrid.getCell(posConfig.Label.x,24);
callFunctionCell_Label.appendChild(onCallbackFunctionLabel.render());
onCallbackFunctionLabel.on('click', function (event) {
    alert('onFunctionLabel has been clicked');
});

//on() - callback trigger
let onCallbackTriggerLabel = new kintoneUIComponent.Label({
    text: 'onTriggerLabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let callbackTriggerCell_Label = testgrid.getCell(posConfig.Label.x,25);
callbackTriggerCell_Label.appendChild(onCallbackTriggerLabel.render());
function triggerClick() {
    alert('onTriggerLabel has been clicked');
}
onCallbackTriggerLabel.on('click', triggerClick);