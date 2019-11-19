//kintone-ui-component Alert
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82739570/kintone-ui-component+Alert

//Read this line before read or use code below
//Example: body*, id*  
//(*) : stand for ID number of the case in checklist 

//success alert
let successAlert = new kintoneUIComponent.Alert({
    text: 'successAlert', 
    type: 'success',
    isVisible: true
});
let successAlertEl = document.createElement('div');
successAlertEl.setAttribute('class','success-alert');
successAlertEl.appendChild(successAlert.render());
let successAlertCell = testgrid.getCell(posConfig.Alert.x, 1);
successAlertCell.appendChild(successAlertEl);

//error alert
let errorAlert = new kintoneUIComponent.Alert({
    text: 'errorAlert', 
    type: 'error',
    isVisible: true
});
let errorAlertEl = document.createElement('div');
errorAlertEl.setAttribute('class','error-alert');
errorAlertEl.appendChild(errorAlert.render());
let errorAlertCell = testgrid.getCell(posConfig.Alert.x, 2);
errorAlertCell.appendChild(errorAlertEl);

//constructor alert
// let constructorAlert = new kintoneUIComponent.Alert({
//     text: 'constructor Alert', 
//     type: 'success',
//     isDisabled: false,
//     isVisible: true
// });
// body.appendChild(constructorAlert.render());

//Alert without any options
let noOptionAlert = new kintoneUIComponent.Alert({});
let noOptionAlertEl = document.createElement('div');
noOptionAlertEl.setAttribute("id", "no-option-alert");
noOptionAlertEl.appendChild(noOptionAlert.render());
let noOptionAlertCell = testgrid.getCell(posConfig.Alert.x, 3);
noOptionAlertCell.appendChild(noOptionAlertEl);

//full option alert
let fullOptionAlert = new kintoneUIComponent.Alert({
    text: 'full option Alert', 
    type: 'error',
    isVisible: true
});
let fullOptionAlertEl = document.createElement('div')
fullOptionAlertEl.setAttribute("id", "full-option-alert");
fullOptionAlertEl.appendChild(fullOptionAlert.render());
let fullOptionAlertCell = testgrid.getCell(posConfig.Alert.x, 4);
fullOptionAlertCell.appendChild(fullOptionAlertEl);

//Alert with only options.text
let onlyTextAlert = new kintoneUIComponent.Alert({
    text:'Alert with only text'
})
let onlyTextAlertEl = document.createElement('div');
onlyTextAlertEl.setAttribute("id","only-text-alert");
onlyTextAlertEl.appendChild(onlyTextAlert.render());
let onlyTextAlertCell = testgrid.getCell(posConfig.Alert.x, 5);
onlyTextAlertCell.appendChild(onlyTextAlertEl);

//Alert with only options.type
let onlyTypeAlert = new kintoneUIComponent.Alert({
    type:'error'
})
let onlyTypeAlertButton = document.createElement('button');
onlyTypeAlertButton.innerHTML='Change Only Type To Success';
onlyTypeAlertButton.addEventListener('click',function(){
    onlyTypeAlert.setType('success');
})
let onlyTypeAlertEl = document.createElement('div')
onlyTypeAlertEl.setAttribute("id", "only-type-alert");
onlyTypeAlertEl.appendChild(onlyTypeAlert.render());
onlyTypeAlertEl.appendChild(onlyTypeAlertButton);
let onlyTypeAlertCell = testgrid.getCell(posConfig.Alert.x, 6);
onlyTypeAlertCell.appendChild(onlyTypeAlertEl);

// //Alert with only options.isDisabled
// let onlyDisabledAlert = new kintoneUIComponent.Alert({
//     isDisabled: false
// })
// let onlyDisabledAlertButton = document.createElement('button');
// onlyDisabledAlertButton.innerHTML='Change Only Disabled To True';
// onlyDisabledAlertButton.addEventListener('click',function(){
//     onlyDisabledAlert.disable();
// })
// let getIsDisabledAlertButton = document.createElement('button');
// getIsDisabledAlertButton.innerHTML='Get isDisabled Value of Alert';
// getIsDisabledAlertButton.addEventListener('click',function(){
//     alert(JSON.stringify(onlyDisabledAlert._props.isDisabled));
// })

// let onlyDisabledAlertEl = document.createElement('div');
// onlyDisabledAlertEl.setAttribute("id", "only-disabled-alert");
// onlyDisabledAlertEl.appendChild(onlyDisabledAlert.render());
// onlyDisabledAlertEl.appendChild(onlyDisabledAlertButton);
// onlyDisabledAlertEl.appendChild(getIsDisabledAlertButton);
// let onlyDisabledAlertCell = testgrid.getCell(posConfig.Alert.x, 7);
// onlyDisabledAlertCell.appendChild(onlyDisabledAlertEl);

//Alert with only options.isVisible
let onlyVisibleAlert = new kintoneUIComponent.Alert({
    isVisible: true
})
let onlyVisibleAlertButton = document.createElement('button');
onlyVisibleAlertButton.innerHTML='Change Only Visible To False';
onlyVisibleAlertButton.addEventListener('click',function(){
    onlyVisibleAlert.hide();
})
let onlyVisibleAlertEl = document.createElement('div')
onlyVisibleAlertEl.setAttribute("id", "only-visible-alert");
onlyVisibleAlertEl.appendChild(onlyVisibleAlert.render());
onlyVisibleAlertEl.appendChild(onlyVisibleAlertButton);
let onlyVisibleAlertCell = testgrid.getCell(posConfig.Alert.x, 7);
onlyVisibleAlertCell.appendChild(onlyVisibleAlertEl);

//Set text for Alert not contain existing text and Alert contain existing text
let setTextAlert = new kintoneUIComponent.Alert({
    text: ''
});
let setWithoutTextAlertButton = document.createElement('button');
let setTextAlertButton = document.createElement('button');
setWithoutTextAlertButton.innerHTML = 'Set Text Alert that not contain existing text'
setTextAlertButton.innerHTML = 'Set Text Alert that contain existing text'
setWithoutTextAlertButton.addEventListener('click',function(){
    setTextAlert.setText('Set text for alert not contain existing text')
})
setTextAlertButton.addEventListener('click',function(){
    setTextAlert.setText('Set text for alert contain existing text')
})
let setTextAlertEl = document.createElement('div')
setTextAlertEl.setAttribute("id", "set-text-alert");
setTextAlertEl.appendChild(setTextAlert.render());
setTextAlertEl.appendChild(setWithoutTextAlertButton);
setTextAlertEl.appendChild(setTextAlertButton);
let setTextAlertCell = testgrid.getCell(posConfig.Alert.x, 8);
setTextAlertCell.appendChild(setTextAlertEl);

//Alert can set text for Alert with XSS value
let setTextXSSAlertEl = document.createElement('div');
setTextXSSAlertEl.setAttribute("id", "set-text-xss-alert");
let setTextXSSAlert = new kintoneUIComponent.Alert({
    text:'Set XSS Value for Alert',
})
let setTextXSSAlertButton = document.createElement('button')
setTextXSSAlertButton.innerHTML='Set text XSS value for Alert'
setTextXSSAlertButton.addEventListener('click',function(){
    setTextXSSAlert.setText("alert('123');")
})
let setTextXSSAlertCell = testgrid.getCell(posConfig.Alert.x, 9);
setTextXSSAlertEl.appendChild(setTextXSSAlert.render());
setTextXSSAlertEl.appendChild(setTextXSSAlertButton);
setTextXSSAlertCell.appendChild(setTextXSSAlertEl);

//setText with invisible Alert
let setTextInvisibleAlertEl = document.createElement('div')
setTextInvisibleAlertEl.setAttribute("id", "set-text-invisible-alert");
let setTextInvisibleAlert = new kintoneUIComponent.Alert({
    text:'Alert before set text',
    isVisible:false
})
let setTextInvisibleAlertButton = document.createElement('button')
setTextInvisibleAlertButton.innerHTML='Set Text for Invisible Alert'
setTextInvisibleAlertButton.addEventListener('click',function(){
    setTextInvisibleAlert.setText("Alert after set text");
})
let showTextInvisibleAlertButton = document.createElement('button')
showTextInvisibleAlertButton.innerHTML='Show Invisible Set Text Alert';
showTextInvisibleAlertButton.addEventListener('click',function(){
    setTextInvisibleAlert.show();
})

let setTextInvisibleAlertCell = testgrid.getCell(posConfig.Alert.x, 10);
setTextInvisibleAlertEl.appendChild(setTextInvisibleAlert.render());
setTextInvisibleAlertEl.appendChild(setTextInvisibleAlertButton);
setTextInvisibleAlertEl.appendChild(showTextInvisibleAlertButton);
setTextInvisibleAlertCell.appendChild(setTextInvisibleAlertEl);

// //set Text for Alert without parameter
// let alert21 = document.createElement('div')
// alert21.setAttribute("id", "set-text-no-param-alert");
// let setTextNoParamAlert = new kintoneUIComponent.Alert({})
// let buttonsetTextNoParam_Alert = document.createElement('button')
// buttonsetTextNoParam_Alert.innerHTML='Set text with no parameter for Alert'
// buttonsetTextNoParam_Alert.addEventListener('click',function(){
//     setTextNoParamAlert.setText('set Text for Alert without parameter');
// })

// let setTextNoParamAlertCell = testgrid.getCell(posConfig.Alert.x, 15);
// alert21.appendChild(setTextNoParamAlert.render());
// alert21.appendChild(buttonsetTextNoParam_Alert);
// setTextNoParamAlertCell.appendChild(alert21);

//set Error type and Success type for Alert
let setTypeAlertEl = document.createElement('div')
setTypeAlertEl.setAttribute("id", "set-type-alert");
let setTypeAlert = new kintoneUIComponent.Alert({
    text:'Set type for Alert',
    type: 'error'
})
let setTypeSuccessButton = document.createElement('button')
setTypeSuccessButton.innerHTML='Set Success Type Alert'
setTypeSuccessButton.addEventListener('click',function(){
    setTypeAlert.setType('success');
})
let setTypeErrorButton = document.createElement('button')
setTypeErrorButton.innerHTML='Set Error Type Alert'
setTypeErrorButton.addEventListener('click',function(){
    setTypeAlert.setType('error');
})

let setTypeAlertCell = testgrid.getCell(posConfig.Alert.x, 11);
setTypeAlertEl.appendChild(setTypeAlert.render());
setTypeAlertEl.appendChild(setTypeSuccessButton);
setTypeAlertEl.appendChild(setTypeErrorButton);
setTypeAlertCell.appendChild(setTypeAlertEl);

//set Type for invisible Alert
let setTypeInvisibleAlertEl = document.createElement('div');
setTypeInvisibleAlertEl.setAttribute("id","set-type-invisible-alert");
let setTypeInvisibleAlert = new kintoneUIComponent.Alert({
    type:'error',
    isVisible: false
})
let setTypeSuccessInvisibleAlertButton = document.createElement('button');
setTypeSuccessInvisibleAlertButton.innerHTML='Set Type for Invisible Alert';
setTypeSuccessInvisibleAlertButton.addEventListener('click',function(){
    setTypeInvisibleAlert.setType("success");
})
let showInvisibleAlertButton = document.createElement('button')
showInvisibleAlertButton.innerHTML='Show Invisible Set Type Alert';
showInvisibleAlertButton.addEventListener('click',function(){
    setTypeInvisibleAlert.show();
})
let setTypeInvisibleAlertCell = testgrid.getCell(posConfig.Alert.x, 12);
setTypeInvisibleAlertEl.appendChild(setTypeInvisibleAlert.render());
setTypeInvisibleAlertEl.appendChild(setTypeSuccessInvisibleAlertButton);
setTypeInvisibleAlertEl.appendChild(showInvisibleAlertButton);
setTypeInvisibleAlertCell.appendChild(setTypeInvisibleAlertEl);

//Show invisible alert and show visible alert
let showInvisibleAlertEl = document.createElement('div')
showInvisibleAlertEl.setAttribute("id", "show-invisible-alert");
let showInvisibleAlert = new kintoneUIComponent.Alert({
    text: 'Show Invisible Alert',
    isVisible: false,
    type:'error'
});
let showVisibleAlertEl = document.createElement('div')
showVisibleAlertEl.setAttribute("id", "show-visible-alert");
let showVisibleAlert = new kintoneUIComponent.Alert({
    text: 'Show Visible Alert',
    isVisible: true,
    type:'error'
});

let showAlertButton = document.createElement('button');
showAlertButton.innerHTML='Show Alert';
showAlertButton.addEventListener('click',function(){
   showInvisibleAlert.show();
   showVisibleAlert.show();
})
let showAlertCell = testgrid.getCell(posConfig.Alert.x, 13);
showInvisibleAlertEl.appendChild(showInvisibleAlert.render());
showVisibleAlertEl.appendChild(showVisibleAlert.render());
showAlertCell.appendChild(showInvisibleAlertEl);
showAlertCell.appendChild(showVisibleAlertEl);
showAlertCell.appendChild(showAlertButton);

//hide visible alert and hide invisible alert
let hideVisibleAlertEl = document.createElement('div')
hideVisibleAlertEl.setAttribute("id", "hide-visible-alert");
let hideVisibleAlert = new kintoneUIComponent.Alert({
    text: 'Hide Visible Alert',
    isVisible: true
});
let hideInvisibleAlertEl = document.createElement('div')
hideInvisibleAlertEl.setAttribute("id", "hide-invisible-alert");
let hideInvisibleAlert = new kintoneUIComponent.Alert({
    text: 'hide Invisible Alert',
    isVisible: false
});
let hideAlertButton = document.createElement('button');
hideAlertButton.innerHTML='Hide Alert';
hideAlertButton.addEventListener('click',function(){
    hideVisibleAlert.hide();
    hideInvisibleAlert.hide();
})

let hideAlertCell = testgrid.getCell(posConfig.Alert.x, 14);
hideVisibleAlertEl.appendChild(hideVisibleAlert.render());
hideInvisibleAlertEl.appendChild(hideInvisibleAlert.render());
hideAlertCell.appendChild(hideVisibleAlertEl);
hideAlertCell.appendChild(hideInvisibleAlertEl);
hideAlertCell.appendChild(hideAlertButton);

//on() - call function
let onCallBackFunctionAlert = new kintoneUIComponent.Alert({
    text: 'onCallBackFunctionAlert()'
});
onCallBackFunctionAlert.on('click', function (event) {
    alert('onCallBackFunctionAlert has been clicked');
});
let onCallBackFunctionAlertEl = document.createElement('div')
onCallBackFunctionAlertEl.setAttribute("id", "on-callback-function-alert");
onCallBackFunctionAlertEl.appendChild(onCallBackFunctionAlert.render());
let onCallBackFunctionAlertCell = testgrid.getCell(posConfig.Alert.x,15);
onCallBackFunctionAlertCell.appendChild(onCallBackFunctionAlertEl);

// //on() - callback trigger
let onCallBackTriggerAlert = new kintoneUIComponent.Alert({
    text: 'onCallBackTriggerAlert()', 
});
let onCallBackTriggerAlertEl = document.createElement('div')
onCallBackTriggerAlertEl.setAttribute("id", "on-callback-trigger-alert");
onCallBackTriggerAlertEl.appendChild(onCallBackTriggerAlert.render());
let onCallBackTriggerAlertCell = testgrid.getCell(posConfig.Alert.x,16);
onCallBackTriggerAlertCell.appendChild(onCallBackTriggerAlertEl);
function triggerClick() {
    alert('onCallBackTriggerAlert has been clicked');
}
onCallBackTriggerAlert.on('click', triggerClick);

// //disable the current enable alert and disable the current disable alert
// let disableEnabledAlertEl = document.createElement('div')
// disableEnabledAlertEl.setAttribute("id", "disable-enabled-alert");
// let disableEnabledAlert = new kintoneUIComponent.Alert({
//     text: 'Disable Enabled Alert',
//     isDisabled: false
// });
// let disableDisabledAlertEl = document.createElement('div')
// disableDisabledAlertEl.setAttribute("id", "disable-disabled-alert");
// let disableDisabledAlert = new kintoneUIComponent.Alert({
//     text: 'Disable Disabled Alert',
//     isDisabled: true
// });
// let disableAlertButton = document.createElement('button');
// disableAlertButton.innerHTML='Disable Alert';
// disableAlertButton.addEventListener('click',function(){
//     disableEnabledAlert.disable();
//     disableDisabledAlert.disable();
// })
// let disableAlertCell = testgrid.getCell(posConfig.Alert.x, 15);
// disableEnabledAlertEl.appendChild(disableEnabledAlert.render());
// disableDisabledAlertEl.appendChild(disableDisabledAlert.render());
// disableAlertCell.appendChild(disableEnabledAlertEl);
// disableAlertCell.appendChild(disableDisabledAlertEl);
// disableAlertCell.appendChild(disableAlertButton);

// //enable the current disable Alert and enbale the current enable Alert
// let enableDisabledAlertEl = document.createElement('div')
// enableDisabledAlertEl.setAttribute("id", "enable-disabled-alert");
// let enableDisabledAlert = new kintoneUIComponent.Alert({
//     text: 'Enable Disabled Alert',
//     isDisabled: true
// });
// let enableEnabledAlertEl = document.createElement('div')
// enableEnabledAlertEl.setAttribute("id", "enable-enabled-alert");
// let enableEnabledAlert = new kintoneUIComponent.Alert({
//     text: 'Enable Enabled Alert',
//     isDisabled: false
// });
// let enableAlertButton = document.createElement('button');
// enableAlertButton.innerHTML='Enable Alert';
// enableAlertButton.addEventListener('click',function(){
//     enableDisabledAlert.enable();
//     enableEnabledAlert.enable();
// })
// let enableAlertCell = testgrid.getCell(posConfig.Alert.x, 16);
// enableDisabledAlertEl.appendChild(enableDisabledAlert.render());
// enableEnabledAlertEl.appendChild(enableEnabledAlert.render());
// enableAlertCell.appendChild(enableDisabledAlertEl);
// enableAlertCell.appendChild(enableEnabledAlertEl);
// enableAlertCell.appendChild(enableAlertButton);

// //disable() - disabled
// let disableDisabledAlert = new kintoneUIComponent.Alert({
//     text: 'disableDisabledAlert()', 
//     isDisabled: true
// });
// body.appendChild(disableDisabledAlert.render());

// //enable() - enabled
// let enableEnabledAlert = new kintoneUIComponent.Alert({
//     text: 'enableEnabledAlert()', 
//     isDisabled: false
// });
// body.appendChild(enableEnabledAlert.render());

// //enable() - disabled
// let enableDisabledAlert = new kintoneUIComponent.Alert({
//     text: 'enableDisabledAlert()', 
//     isDisabled: true
// });
// body.appendChild(enableDisabledAlert.render());

// //Alert can set text that not contains exisiting text
// let setTextAlert1 = new kintoneUIComponent.Alert({
//     text:''
// })
// body.appendChild(setTextAlert1.render());

// //setType alert
// let setTypeAlert = new kintoneUIComponent.Alert({
//     text: 'SetType Alert', 
//     type: 'success',
//     isDisabled: false,
//     isVisible: true
// });
// body.appendChild(setTypeAlert.render());

// //show() - invisible
// let showInvisibleAlert = new kintoneUIComponent.Alert({
//     text: 'showInvisible()', 
//     type: 'success',
//     isVisible: false
// });
// body.appendChild(showInvisibleAlert.render());

// //show() - visible
// let showVisibleAlert = new kintoneUIComponent.Alert({
//     text: 'show()', 
//     type: 'error',
//     isVisible: true
// });
// body.appendChild(showVisibleAlert.render());

// //hide() - invisible()
// let hideInvisibleAlert = new kintoneUIComponent.Alert({
//     text: 'hideInvisible()', 
//     type: 'success',
//     isVisible: false
// });
// body.appendChild(hideInvisibleAlert.render());
// hideInvisibleAlert.show();

// //hide() - visible()
// let hideVisibleAlert = new kintoneUIComponent.Alert({
//     text: 'hideVisible()', 
//     type: 'error',
//     isVisible: true
// });
// body.appendChild(hideVisibleAlert.render());
// hideVisibleAlert.show();

// //disable() - enabled
// let disableEnabledAlert = new kintoneUIComponent.Alert({
//     text: 'disableEnabledAlert()', 
//     isDisabled: false
// });
// body.appendChild(disableEnabledAlert.render());
