import {Label} from '@kintone/kintone-ui-component/esm/js';

//UI
let UILabel = new Label({
    text: 'UILabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});

//no option label
let noOptionLabel = new Label({
})
let noOptionLabelDiv = document.createElement('div');
noOptionLabelDiv.setAttribute("id", "no-option-label");
noOptionLabelDiv.appendChild(noOptionLabel.render());

//full option label
let fullOptionLabel = new Label({
    text: 'full option Label',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let fullOptionLabelDiv = document.createElement('div');
fullOptionLabelDiv.setAttribute("id", "full-option-label");
fullOptionLabelDiv.appendChild(fullOptionLabel.render());

//label with only option.text
let onlyTextLabel = new Label({
    text: 'only options.Text Label'
});

//label with only option.isRequired is true
let onlyRequiredTrueLabel = new Label({
    isRequired: true
});
let onlyRequiredTrueLabelDiv = document.createElement('div');
onlyRequiredTrueLabelDiv.setAttribute("id", "only-isRequired-label-true");
onlyRequiredTrueLabelDiv.appendChild(onlyRequiredTrueLabel.render());

//label with only option.isRequired is false
let onlyRequiredFalseLabel = new Label({
    isRequired: false
});
let onlyRequiredFalseLabelDiv = document.createElement('div');
onlyRequiredFalseLabelDiv.setAttribute("id", "only-isRequired-label-false");
onlyRequiredFalseLabelDiv.appendChild(onlyRequiredFalseLabel.render());

//label with only option.isDisabled is true
let onlyDisabledLabel = new Label({
    isDisabled: true
});
let buttonGetValue = document.createElement('button');
buttonGetValue.innerHTML = 'Get Value of isDisabled true';
buttonGetValue.addEventListener('click',function(){
   alert(JSON.stringify(onlyDisabledLabel._props.isDisabled));
});
let onlyDisabledLabelDiv = document.createElement('div');
onlyDisabledLabelDiv.setAttribute("id", "only-isDisabled-label-true");
onlyDisabledLabelDiv.appendChild(onlyDisabledLabel.render());
onlyDisabledLabelDiv.appendChild(buttonGetValue);

//label with only option.isDisabled is false
let onlyDisabledFalseLabel = new Label({
    isDisabled: false
});
let buttonGetValue1 = document.createElement('button');
buttonGetValue1.innerHTML = 'Get Value of isDisabled false';
buttonGetValue1.addEventListener('click',function(){
   alert(JSON.stringify(onlyDisabledFalseLabel._props.isDisabled));
});
let onlyDisabledFalseLabelDiv = document.createElement('div');
onlyDisabledFalseLabelDiv.setAttribute("id", "only-isDisabled-label-false");
onlyDisabledFalseLabelDiv.appendChild(onlyDisabledFalseLabel.render());
onlyDisabledFalseLabelDiv.appendChild(buttonGetValue1);

//label with only option.isVisibled is true
let onlyVisibleTrueLabel = new Label({
    isVisible: true
});
let onlyVisibleTrueLabelDiv = document.createElement('div');
onlyVisibleTrueLabelDiv.setAttribute("id", "only-isVisibled-label-true");
onlyVisibleTrueLabelDiv.appendChild(onlyVisibleTrueLabel.render());

//label with only option.isVisibled is false
let onlyVisibleFalseLabel = new Label({
    isVisible: false
});
let onlyVisibleFalseLabelDiv = document.createElement('div');
onlyVisibleFalseLabelDiv.setAttribute("id", "only-isVisibled-label-false");
onlyVisibleFalseLabelDiv.appendChild(onlyVisibleFalseLabel.render());

//setText for label which is not contain existing text and contain existing text
let setTextLabel = new Label({
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
    setTextLabel.setText('Set text for label not contain existing text');
});
buttonSetText1_Label.addEventListener('click',function(){
    setTextLabel.setText('Set text for label contain existing text');
});
let setTextLabelDiv = document.createElement('div');
setTextLabelDiv.setAttribute("id", "set-text-label");
setTextLabelDiv.appendChild(setTextLabel.render());
setTextLabelDiv.appendChild(buttonSetText_Label);
setTextLabelDiv.appendChild(buttonSetText1_Label);

//setText with XSS value
let setTextXSSLabel = new Label({
    text:'Set XSS Value for Label'
});
let buttonsetTextXSS_Label = document.createElement('button');
buttonsetTextXSS_Label.innerHTML='Set text with XSS value';
buttonsetTextXSS_Label.addEventListener('click',function(){
    setTextXSSLabel.setText("alert('XSS Attack');")
});
let setTextXSSLabelDiv = document.createElement('div');
setTextXSSLabelDiv.setAttribute("id", "set-XSS-value-label");
setTextXSSLabelDiv.appendChild(setTextXSSLabel.render());
setTextXSSLabelDiv.appendChild(buttonsetTextXSS_Label);

//setText with invisible Label
let setTextInvisibleLabel = new Label({
    text:'New Text',
    isVisible:false
});
let buttonsetTextInvisible_Label = document.createElement('button');
buttonsetTextInvisible_Label.innerHTML='Set text with invisible Label';
buttonsetTextInvisible_Label.addEventListener('click',function(){
    setTextInvisibleLabel.setText("Set text with invisible label");
});
let buttonshowTextInvisible_Label = document.createElement('button');
buttonshowTextInvisible_Label.innerHTML='Show text invisible';
buttonshowTextInvisible_Label.addEventListener('click',function(){
    setTextInvisibleLabel.show();
});
let setTextInvisibleLabelDiv = document.createElement('div');
setTextInvisibleLabelDiv.setAttribute("id", "set-text-invisible-label");
setTextInvisibleLabelDiv.appendChild(setTextInvisibleLabel.render());
setTextInvisibleLabelDiv.appendChild(buttonsetTextInvisible_Label);
setTextInvisibleLabelDiv.appendChild(buttonshowTextInvisible_Label);

//Set current text to blank
let setTextBlankLabel = new Label({
    text:'Set text to blank'
});
let buttonsetTextBlank_Label = document.createElement('button');
buttonsetTextBlank_Label.innerHTML='Set text to blank';
buttonsetTextBlank_Label.addEventListener('click',function(){
    setTextBlankLabel.setText("");
});
let setTextBlankLabelDiv = document.createElement('div')
setTextBlankLabelDiv.setAttribute("id", "set-text-blank-label");
setTextBlankLabelDiv.appendChild(setTextBlankLabel.render());
setTextBlankLabelDiv.appendChild(buttonsetTextBlank_Label);

//Set text without parameter
let setTextNoParamLabel = new Label({
    text:'Set text with no parameter for Label'
});
let buttonsetTextNoParam_Label = document.createElement('button');
buttonsetTextNoParam_Label.innerHTML='Set text with no parameter for Label';
buttonsetTextNoParam_Label.addEventListener('click',function(){
    setTextNoParamLabel.setText();
});
let setTextNoParamLabelDiv = document.createElement('div');
setTextNoParamLabelDiv.setAttribute("id", "set-text-no-param-label");
setTextNoParamLabelDiv.appendChild(setTextNoParamLabel.render());
setTextNoParamLabelDiv.appendChild(buttonsetTextNoParam_Label);

//setRequired(false) to isRequired label
let setRequiredFalseLabel = new Label({
    text: 'Set False for the current required Label',
    isRequired: true,
});
let buttonsetFalseRequired = document.createElement('button');
buttonsetFalseRequired.innerHTML='Set False for the current required Label'
buttonsetFalseRequired.addEventListener('click',function(){
    setRequiredFalseLabel.setRequired(false);
});
let setRequiredFalseLabelDiv = document.createElement('div');
setRequiredFalseLabelDiv.setAttribute("id", "set-false-required-label");
setRequiredFalseLabelDiv.appendChild(setRequiredFalseLabel.render());
setRequiredFalseLabelDiv.appendChild(buttonsetFalseRequired);

//setRequired(true) to isRequired label
let setRequiredTrueLabel = new Label({
    text: 'Set True for the current unrequired Label',
    isRequired: false
});
let buttonsetTrueRequired = document.createElement('button');
buttonsetTrueRequired.innerHTML='Set True for the current unrequired Label';
buttonsetTrueRequired.addEventListener('click',function(){
    setRequiredTrueLabel.setRequired(true)
});
let setRequiredTrueLabelDiv = document.createElement('div');
setRequiredTrueLabelDiv.setAttribute("id", "set-true-required-label");
setRequiredTrueLabelDiv.appendChild(setRequiredTrueLabel.render());
setRequiredTrueLabelDiv.appendChild(buttonsetTrueRequired);

//Set required for invisible label
let setRequiredInvisibleLabel = new Label({
    text:'Set required for invisible label',
    isVisible: false,
    isRequired: false
});
let buttonsetRequiredInvisible = document.createElement('button');
buttonsetRequiredInvisible.innerHTML='Set required for invisible label';
buttonsetRequiredInvisible.addEventListener('click',function(){
    setRequiredInvisibleLabel.setRequired(true);    
});
let setRequiredInvisibleLabelDiv = document.createElement('div');
setRequiredInvisibleLabelDiv.setAttribute("id", "set-required-invisible-label");
setRequiredInvisibleLabelDiv.appendChild(setRequiredInvisibleLabel.render());
setRequiredInvisibleLabelDiv.appendChild(buttonsetRequiredInvisible);

//Set required label without parameter
let setRequiredNoParamLabel = new Label({
    text:'Set required without parameter for label',
    isRequired: false
});
let buttonsetRequiredNoParam = document.createElement('button');
buttonsetRequiredNoParam.innerHTML='Set required without parameter for label';
buttonsetRequiredNoParam.addEventListener('click',function(){
    setRequiredNoParamLabel.setRequired();
});
let setRequiredNoParamLabelDiv = document.createElement('div');
setRequiredNoParamLabelDiv.setAttribute("id", "set-required-no-param-label");
setRequiredNoParamLabelDiv.appendChild(setRequiredNoParamLabel.render());
setRequiredNoParamLabelDiv.appendChild(buttonsetRequiredNoParam);

//show invisible label and show visible label
let showInVisibleLabel = new Label({
    text: 'show Invisible Label',
    isVisible: false
});
let showVisibleLabel = new Label({
    text: 'show Visible Label',
    isVisible: true
});

let buttonShowLabel = document.createElement('button');
buttonShowLabel.innerHTML='Show Label';
buttonShowLabel.addEventListener('click',function(){
   showInVisibleLabel.show();
   showVisibleLabel.show();
});
let showInVisibleLabelDiv = document.createElement('div');
showInVisibleLabelDiv.setAttribute("id", "show-invisible-label");
showInVisibleLabelDiv.appendChild(showInVisibleLabel.render());
let showVisibleLabelDiv = document.createElement('div');
showVisibleLabelDiv.setAttribute("id", "show-visible-label");
showVisibleLabelDiv.appendChild(showVisibleLabel.render());
let showLabelDiv = document.createElement('div');
showLabelDiv.appendChild(showInVisibleLabelDiv);
showLabelDiv.appendChild(showVisibleLabelDiv);
showLabelDiv.appendChild(buttonShowLabel);

//hide visible label and hide invisible label
let hideVisibleLabel = new Label({
    text: 'hide Visible Label',
    isVisible: true
});
let hideInvisibleLabel = new Label({
    text: 'hide Invisible Label',
    isVisible: false
});
let buttonHideLabel = document.createElement('button');
buttonHideLabel.innerHTML='Hide Label';
buttonHideLabel.addEventListener('click',function(){
    hideVisibleLabel.hide();
    hideInvisibleLabel.hide();
});
let hideVisibleLabelDiv = document.createElement('div');
hideVisibleLabelDiv.setAttribute("id", "hide-visible-label");
hideVisibleLabelDiv.appendChild(hideVisibleLabel.render());
let hideInvisibleLabelDiv = document.createElement('div');
hideInvisibleLabelDiv.setAttribute("id", "hide-invisible-label");
hideInvisibleLabelDiv.appendChild(hideInvisibleLabel.render());
let hideLabelDiv = document.createElement('div');
hideLabelDiv.appendChild(hideVisibleLabelDiv);
hideLabelDiv.appendChild(hideInvisibleLabelDiv);
hideLabelDiv.appendChild(buttonHideLabel);

//disable the current enable label and disable the current disable label
let disableEnableLabel = new Label({
    text: 'disable the current Enable Label',
    isDisabled: false
});
let disableDisableLabel = new Label({
    text: 'disable the current Disable Label',
    isDisabled: true
});
let buttonDisableLabel = document.createElement('button');
buttonDisableLabel.innerHTML='Disable Label';
buttonDisableLabel.addEventListener('click',function(){
    disableEnableLabel.disable();
    disableDisableLabel.disable();
});
let disableEnableLabelDiv = document.createElement('div');
disableEnableLabelDiv.setAttribute("id", "disable-enable-label");
disableEnableLabelDiv.appendChild(disableEnableLabel.render());
let disableDisableLabelDiv = document.createElement('div');
disableDisableLabelDiv.setAttribute("id", "disable-disable-label");
disableDisableLabelDiv.appendChild(disableDisableLabel.render());
let disableLabelDiv = document.createElement('div');
disableLabelDiv.appendChild(disableEnableLabelDiv);
disableLabelDiv.appendChild(disableDisableLabelDiv);
disableLabelDiv.appendChild(buttonDisableLabel);

//enable the current disable Label and enbale the current enable Label
let enableDisableLabel = new Label({
    text: 'enable the current Disable Label',
    isDisabled: true
});
let enableEnableLabel = new Label({
    text: 'enable the current Enable Label',
    isDisabled: false
});
let buttonEnableLabel = document.createElement('button');
buttonEnableLabel.innerHTML='Enable Label';
buttonEnableLabel.addEventListener('click',function(){
    enableDisableLabel.enable();
    enableEnableLabel.enable();
})
let enableDisableLabelDiv = document.createElement('div');
enableDisableLabelDiv.setAttribute("id", "enable-disable-label");
enableDisableLabelDiv.appendChild(enableDisableLabel.render());
let enableEnableLabelDiv = document.createElement('div');
enableEnableLabelDiv.setAttribute("id", "enable-enable-label");
enableEnableLabelDiv.appendChild(enableEnableLabel.render());
let enableLabelDiv = document.createElement('div');
enableLabelDiv.appendChild(enableDisableLabelDiv);
enableLabelDiv.appendChild(enableEnableLabelDiv);
enableLabelDiv.appendChild(buttonEnableLabel);

//on() - call function
let onCallbackFunctionLabel = new Label({
    text: 'onFunctionLabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
onCallbackFunctionLabel.on('click', function (event) {
    alert('onFunctionLabel has been clicked');
});

//on() - callback trigger
let onCallbackTriggerLabel = new Label({
    text: 'onTriggerLabel',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
function triggerClick() {
    alert('onTriggerLabel has been clicked');
}
onCallbackTriggerLabel.on('click', triggerClick);

export default {
    UILabel,
    noOptionLabelDiv,
    fullOptionLabelDiv,
    onlyTextLabel,
    onlyRequiredTrueLabelDiv,
    onlyRequiredFalseLabelDiv,
    onlyDisabledLabelDiv,
    onlyDisabledFalseLabelDiv,
    onlyVisibleTrueLabelDiv,
    onlyVisibleFalseLabelDiv,
    setTextLabelDiv,
    setTextXSSLabelDiv,
    setTextInvisibleLabelDiv,
    setTextBlankLabelDiv,
    setTextNoParamLabelDiv,
    setRequiredFalseLabelDiv,
    setRequiredTrueLabelDiv,
    setRequiredInvisibleLabelDiv,
    setRequiredNoParamLabelDiv,
    showLabelDiv,
    hideLabelDiv,
    disableLabelDiv,
    enableLabelDiv,
    onCallbackFunctionLabel,
    onCallbackTriggerLabel
}