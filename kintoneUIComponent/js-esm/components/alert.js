import {Alert} from '@kintone/kintone-ui-component/esm/js';

//success alert
let successAlert = new Alert({
    text: 'successAlert', 
    type: 'success',
    isVisible: true
});

//error alert
let errorAlert = new Alert({
    text: 'errorAlert', 
    type: 'error',
    isVisible: true
});

//Alert without any options
let noOptionAlertDiv = document.createElement('div');
noOptionAlertDiv.setAttribute("id", "no-option-alert");
let noOptionAlert = new Alert({
})
noOptionAlertDiv.appendChild(noOptionAlert.render());

//full option alert
let fullOptionAlertDiv = document.createElement('div')
fullOptionAlertDiv.setAttribute("id", "full-option-alert");
let fullOptionAlert = new Alert({
    text: 'full option Alert', 
    type: 'error',
    isDisabled: false,
    isVisible: true
});
fullOptionAlertDiv.appendChild(fullOptionAlert.render());

//Alert with only options.text
let onlyTextAlertDiv = document.createElement('div')
onlyTextAlertDiv.setAttribute("id", "only-text-alert");
let onlyTextAlert = new Alert({
    text:'only options.Text Alert'
})
onlyTextAlertDiv.appendChild(onlyTextAlert.render());

//Alert with only options.type is error
let onlyTypeErrorAlertDiv = document.createElement('div')
onlyTypeErrorAlertDiv.setAttribute("id", "only-type-error-alert");
let onlyTypeErrorAlert = new Alert({
    type:'error'
})
onlyTypeErrorAlertDiv.appendChild(onlyTypeErrorAlert.render());

//Alert with only options.type is success
let onlyTypeSuccessAlertDiv = document.createElement('div')
onlyTypeSuccessAlertDiv.setAttribute("id", "only-type-success-alert");
let onlyTypeSuccessAlert = new Alert({
    type:'success'
})
onlyTypeSuccessAlertDiv.appendChild(onlyTypeSuccessAlert.render());

//Alert with only options.isDisabled is true
let onlyDisabledTrueAlertDiv = document.createElement('div')
onlyDisabledTrueAlertDiv.setAttribute("id", "only-disabled-true-alert");
let onlyDisabledTrueAlert = new Alert({
    isDisabled: true
})
onlyDisabledTrueAlertDiv.appendChild(onlyDisabledTrueAlert.render());

//Alert with only options.isDisabled is false
let onlyDisabledFalseAlertDiv = document.createElement('div')
onlyDisabledFalseAlertDiv.setAttribute("id", "only-disabled-false-alert");
let onlyDisabledFalseAlert = new Alert({
    isDisabled: false
})
onlyDisabledFalseAlertDiv.appendChild(onlyDisabledFalseAlert.render());

//Alert with only options.isVisibled is true
let onlyVisibleTrueAlertDiv= document.createElement('div')
onlyVisibleTrueAlertDiv.setAttribute("id", "only-visible-alert");
let onlyVisibleTrueAlert = new Alert({
    isVisible: true
})
onlyVisibleTrueAlertDiv.appendChild(onlyVisibleTrueAlert.render());

//Alert with only options.isVisibled is false
let onlyVisibleFalseAlertDiv = document.createElement('div')
onlyVisibleFalseAlertDiv.setAttribute("id", "only-invisible-alert");
let onlyVisibleFalseAlert = new Alert({
    isVisible: false
})
onlyVisibleFalseAlertDiv.appendChild(onlyVisibleFalseAlert.render());

//Set text for Alert not contain existing text and Alert contain existing text
let setTextAlertDiv = document.createElement('div')
setTextAlertDiv.setAttribute("id", "set-text-alert");
let setTextAlert = new Alert({
    text: ''
});
let buttonSetText_Alert = document.createElement('button')
let buttonSetText1_Alert = document.createElement('button')
buttonSetText_Alert.innerHTML = 'Set text for alert not contain existing text'
buttonSetText1_Alert.innerHTML = 'Set text for alert contain existing text'
buttonSetText_Alert.addEventListener('click',function(){
    setTextAlert.setText('Set text for alert not contain existing text')
})
buttonSetText1_Alert.addEventListener('click',function(){
    setTextAlert.setText('Set text for alert contain existing text')
})

setTextAlertDiv.appendChild(setTextAlert.render());
setTextAlertDiv.appendChild(buttonSetText_Alert);
setTextAlertDiv.appendChild(buttonSetText1_Alert);

//Alert can set text for Alert with XSS value
let setTextXSSAlertDiv = document.createElement('div');
setTextXSSAlertDiv.setAttribute("id", "set-xss-value-alert");
let setTextXSSAlert = new Alert({
    text:'Set XSS Value for Alert'
})
let buttonsetTextXSS_Alert = document.createElement('button')
buttonsetTextXSS_Alert.innerHTML='Set text with XSS value for Alert'
buttonsetTextXSS_Alert.addEventListener('click',function(){
    setTextXSSAlert.setText("alert('123');")
})
setTextXSSAlertDiv.appendChild(setTextXSSAlert.render());
setTextXSSAlertDiv.appendChild(buttonsetTextXSS_Alert);

//setText with invisible Alert
let setTextInvisibleAlertDiv = document.createElement('div')
setTextInvisibleAlertDiv.setAttribute("id", "set-text-invisible-alert");
let setTextInvisibleAlert = new Alert({
    text:'New Text',
    isVisible:false
})
let buttonsetTextInvisible_Alert = document.createElement('button')
buttonsetTextInvisible_Alert.innerHTML='Set text with invisible Alert'
buttonsetTextInvisible_Alert.addEventListener('click',function(){
    setTextInvisibleAlert.setText("Set text with invisible Alert");
})
let buttonshowTextInvisible_Alert = document.createElement('button')
buttonshowTextInvisible_Alert.innerHTML='Show text invisible alert';
buttonshowTextInvisible_Alert.addEventListener('click',function(){
    setTextInvisibleAlert.show();
})

setTextInvisibleAlertDiv.appendChild(setTextInvisibleAlert.render());
setTextInvisibleAlertDiv.appendChild(buttonsetTextInvisible_Alert);
setTextInvisibleAlertDiv.appendChild(buttonshowTextInvisible_Alert);

//set Text for Alert without parameter
let setTextNoParamAlertDiv = document.createElement('div')
setTextNoParamAlertDiv.setAttribute("id", "set-text-no-param-alert");
let setTextNoParamAlert = new Alert({
    text:'Set text with no parameter for Alert'
})
let buttonsetTextNoParam_Alert = document.createElement('button')
buttonsetTextNoParam_Alert.innerHTML='Set text with no parameter for Alert'
buttonsetTextNoParam_Alert.addEventListener('click',function(){
    setTextNoParamAlert.setText('set Text for Alert without parameter');
})

setTextNoParamAlertDiv.appendChild(setTextNoParamAlert.render());
setTextNoParamAlertDiv.appendChild(buttonsetTextNoParam_Alert);

//set Error type and Success type for Alert
let setTypeAlertDiv = document.createElement('div')
setTypeAlertDiv.setAttribute("id", "set-type-alert");
let setTypeAlert = new Alert({
    text:'Set type for Alert',
    type: 'error'
})
let buttonsetTypeSuccess = document.createElement('button')
buttonsetTypeSuccess.innerHTML='Set success type for Alert'
buttonsetTypeSuccess.addEventListener('click',function(){
    setTypeAlert.setType('success');
})
let buttonsetTypeError = document.createElement('button')
buttonsetTypeError.innerHTML='Set error type for Alert'
buttonsetTypeError.addEventListener('click',function(){
    setTypeAlert.setType('error');
})

setTypeAlertDiv.appendChild(setTypeAlert.render());
setTypeAlertDiv.appendChild(buttonsetTypeSuccess);
setTypeAlertDiv.appendChild(buttonsetTypeError);

//set Type for invisible Alert
let setTypeInvisibleAlertDiv = document.createElement('div');
setTypeInvisibleAlertDiv.setAttribute("id", "set-type-invisible-alert");
let setTypeInvisibleAlert = new Alert({
    type:'error',
    isVisible: false
})
let buttonsetTypeSuccessInvisible = document.createElement('button');
buttonsetTypeSuccessInvisible.innerHTML='Set success type for invisible Alert';
buttonsetTypeSuccessInvisible.addEventListener('click',function(){
    setTypeInvisibleAlert.setType("success");
})
let buttonShowInvisible = document.createElement('button')
buttonShowInvisible.innerHTML='Show type invisible alert';
buttonShowInvisible.addEventListener('click',function(){
    setTypeInvisibleAlert.show();
})
setTypeInvisibleAlertDiv.appendChild(setTypeInvisibleAlert.render());
setTypeInvisibleAlertDiv.appendChild(buttonsetTypeSuccessInvisible);
setTypeInvisibleAlertDiv.appendChild(buttonShowInvisible);

//Show invisible alert and show visible alert
let showInVisibleAlertDiv = document.createElement('div')
showInVisibleAlertDiv.setAttribute("id", "show-invisible-alert");
let showInVisibleAlert = new Alert({
    text: 'show Invisible Alert',
    isVisible: false,
    type:'success'
});
let showVisibleAlertDiv = document.createElement('div')
showVisibleAlertDiv.setAttribute("id", "show-visible-alert");
let showVisibleAlert = new Alert({
    text: 'show Visible Alert',
    isVisible: true,
    type:'success'
});

let buttonShowAlert = document.createElement('button');
buttonShowAlert.innerHTML='Show Alert';
buttonShowAlert.addEventListener('click',function(){
   showInVisibleAlert.show();
   showVisibleAlert.show();
})
showInVisibleAlertDiv.appendChild(showInVisibleAlert.render());
showVisibleAlertDiv.appendChild(showVisibleAlert.render());
let showAlertDiv = document.createElement('div');
showAlertDiv.appendChild(showInVisibleAlertDiv);
showAlertDiv.appendChild(showVisibleAlertDiv);
showAlertDiv.appendChild(buttonShowAlert);

//hide visible alert and hide invisible alert
let hideVisibleAlertDiv = document.createElement('div')
hideVisibleAlertDiv.setAttribute("id", "hide-visible-alert");
let hideVisibleAlert = new Alert({
    text: 'hide Visible Alert',
    isVisible: true
});
let hideInvisibleAlertDiv = document.createElement('div')
hideInvisibleAlertDiv.setAttribute("id", "hide-invisible-alert");
let hideInvisibleAlert = new Alert({
    text: 'hide Invisible Alert',
    isVisible: false
});
let buttonHideAlert = document.createElement('button');
buttonHideAlert.innerHTML='Hide Alert';
buttonHideAlert.addEventListener('click',function(){
    hideVisibleAlert.hide();
    hideInvisibleAlert.hide();
})

let hideAlertDiv = document.createElement('div');
hideVisibleAlertDiv.appendChild(hideVisibleAlert.render());
hideInvisibleAlertDiv.appendChild(hideInvisibleAlert.render());
hideAlertDiv.appendChild(hideVisibleAlertDiv);
hideAlertDiv.appendChild(hideInvisibleAlertDiv);
hideAlertDiv.appendChild(buttonHideAlert);

//disable the current enable alert and disable the current disable alert
let disableEnableAlertDiv = document.createElement('div');
disableEnableAlertDiv.setAttribute("id", "disable-enable-alert");
let disableEnableAlert = new Alert({
    text: 'disable the current Enable Alert',
    isDisabled: false
});
let disableDisableAlertDiv = document.createElement('div');
disableDisableAlertDiv.setAttribute("id", "disable-disable-alert");
let disableDisableAlert = new Alert({
    text: 'disable the current Disable Alert',
    isDisabled: true
});
let buttonDisableAlert = document.createElement('button');
buttonDisableAlert.innerHTML='Disable Alert';
buttonDisableAlert.addEventListener('click',function(){
    disableEnableAlert.disable();
    disableDisableAlert.disable();
})
let disableAlertDiv = document.createElement('div');
disableEnableAlertDiv.appendChild(disableEnableAlert.render());
disableDisableAlertDiv.appendChild(disableDisableAlert.render());
disableAlertDiv.appendChild(disableEnableAlertDiv);
disableAlertDiv.appendChild(disableDisableAlertDiv);
disableAlertDiv.appendChild(buttonDisableAlert);

//enable the current disable Alert and enbale the current enable Alert
let enableDisableAlertDiv = document.createElement('div');
enableDisableAlertDiv.setAttribute("id", "enable-disable-alert");
let enableDisableAlert = new Alert({
    text: 'enable the current Disable Alert',
    isDisabled: true
});
let enableEnableAlertDiv = document.createElement('div');
enableEnableAlertDiv.setAttribute("id", "enable-enable-alert");
let enableEnableAlert = new Alert({
    text: 'enable the current Enable Alert',
    isDisabled: false
});
let buttonEnableAlert = document.createElement('button');
buttonEnableAlert.innerHTML='Enable Alert';
buttonEnableAlert.addEventListener('click',function(){
    enableDisableAlert.enable();
    enableEnableAlert.enable();
})
let enableAlertDiv = document.createElement('div');
enableDisableAlertDiv.appendChild(enableDisableAlert.render());
enableEnableAlertDiv.appendChild(enableEnableAlert.render());
enableAlertDiv.appendChild(enableDisableAlertDiv);
enableAlertDiv.appendChild(enableEnableAlertDiv);
enableAlertDiv.appendChild(buttonEnableAlert);

//on() - call function
let onCallbackFunctionAlert = new Alert({
    text: 'onCallbackFunctionAlert()', 
    type: 'success'
});
onCallbackFunctionAlert.on('click', function (event) {
    alert('onCallbackFunctionAlert has been clicked');
});

// //on() - callback trigger
let onCallbackTriggerAlert = new Alert({
    text: 'onCallbackTriggerAlert()', 
    type: 'success'
});
function triggerClick() {
    alert('onCallbackTriggerAlert has been clicked');
}
onCallbackTriggerAlert.on('click', triggerClick);

export default {
    successAlert,
    errorAlert,
    noOptionAlertDiv,
    fullOptionAlertDiv,
    onlyTextAlertDiv,
    onlyTypeErrorAlertDiv,
    onlyTypeSuccessAlertDiv,
    onlyDisabledTrueAlertDiv,
    onlyDisabledFalseAlertDiv,
    onlyVisibleTrueAlertDiv,
    onlyVisibleFalseAlertDiv,
    setTextAlertDiv,
    setTextXSSAlertDiv,
    setTextInvisibleAlertDiv,
    setTextNoParamAlertDiv,
    setTypeAlertDiv,
    setTypeInvisibleAlertDiv,
    showInVisibleAlertDiv,
    showVisibleAlertDiv,
    showAlertDiv,
    hideAlertDiv,
    disableAlertDiv,
    enableAlertDiv,
    onCallbackFunctionAlert,
    onCallbackTriggerAlert
}