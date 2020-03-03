//kintone-ui-component Notify Popup
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82739621/kintone-ui-component+NotifyPopup
'use strict';

// Render() - full option value
let fullOptionNotifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Full Option NotifyPopup',
    type: 'error',
    isVisible: false
});
let notifyFullOption = document.createElement('div')
notifyFullOption.setAttribute("id", "full-option-notifypopup");
let fullOptionNotifyPopupCell = testgrid.getCell(posConfig.Notify.x, 1)

let buttonShowNotifyFullOption = document.createElement('button')
buttonShowNotifyFullOption.innerHTML = 'Show Notify Full Option'
buttonShowNotifyFullOption.addEventListener('click', function () {
    fullOptionNotifyPopup.show();
})
notifyFullOption.appendChild(fullOptionNotifyPopup.render());
notifyFullOption.appendChild(buttonShowNotifyFullOption);
fullOptionNotifyPopupCell.appendChild(notifyFullOption);



// without value
let noOptionNotifyPopup = new kintoneUIComponent.NotifyPopup({});
noOptionNotifyPopup.hide()
let notifyWithoutOption = document.createElement('div')
notifyWithoutOption.setAttribute("id", "no-option-notifypopup");
//button get state notify without value
let getStateBtn = document.createElement('button')
getStateBtn.innerHTML = 'Get State For Notify Popup'
getStateBtn.addEventListener('click', function () {
    let stateOfNP = noOptionNotifyPopup._props;
    alert(JSON.stringify(stateOfNP));
})
//button show notify without value
let showNotifyWithoutOption = document.createElement('button')
showNotifyWithoutOption.innerHTML = 'Show Notify Without Options'
showNotifyWithoutOption.addEventListener('click', function () {
    noOptionNotifyPopup.show()
})
//button hide notify without value
let hideNotifyWithoutOption = document.createElement('button')
hideNotifyWithoutOption.innerHTML = 'Hide Notify Without Options'
hideNotifyWithoutOption.addEventListener('click', function () {
    noOptionNotifyPopup.hide()
})
//button setText() notify without value
let setTextNullNotifyWithoutOption = document.createElement('button')
setTextNullNotifyWithoutOption.innerHTML = 'Set Text Null Notify'
setTextNullNotifyWithoutOption.addEventListener('click', function () {
    noOptionNotifyPopup.setText('')
})

//button setText() notify without value
let setTextNotifyWithoutOption = document.createElement('button')
setTextNotifyWithoutOption.innerHTML = 'Set Text Notify'
setTextNotifyWithoutOption.addEventListener('click', function () {
    noOptionNotifyPopup.setText('New Text')
})

//button setType() notify without value
let setTypeNotifyWithoutOption = document.createElement('button')
setTypeNotifyWithoutOption.innerHTML = 'Set Type Notify'
setTypeNotifyWithoutOption.addEventListener('click', function () {
    noOptionNotifyPopup.setType('success')
})

notifyWithoutOption.appendChild(noOptionNotifyPopup.render())
notifyWithoutOption.appendChild(getStateBtn)
notifyWithoutOption.appendChild(showNotifyWithoutOption)
notifyWithoutOption.appendChild(hideNotifyWithoutOption)
notifyWithoutOption.appendChild(setTextNullNotifyWithoutOption)
notifyWithoutOption.appendChild(setTextNotifyWithoutOption)
notifyWithoutOption.appendChild(setTypeNotifyWithoutOption)
let notifyWithoutOption_cell = testgrid.getCell(posConfig.Notify.x, 2)
notifyWithoutOption_cell.appendChild(notifyWithoutOption)



// on trigger
let OnCallBackTriggerNotifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'NotifyPopup On Trigger',
    type: 'success',
    isVisible: false
});
function on_trigger_NP() {
    alert('on_click_trigger has been clicked');
}
let notifyOnTrigger = document.createElement('div')
notifyOnTrigger.setAttribute("id", "on-callback-trigger-notifypopup");
let buttonShowNotifyOnTrigger = document.createElement('button')
buttonShowNotifyOnTrigger.innerHTML = 'Show Notify On Trigger'
buttonShowNotifyOnTrigger.addEventListener('click', function () {
    OnCallBackTriggerNotifyPopup.show();
})
OnCallBackTriggerNotifyPopup.on('click', on_trigger_NP);
notifyOnTrigger.appendChild(OnCallBackTriggerNotifyPopup.render());
notifyOnTrigger.appendChild(buttonShowNotifyOnTrigger)
let notifyOnTrigger_cell = testgrid.getCell(posConfig.Notify.x, 3)
notifyOnTrigger_cell.appendChild(notifyOnTrigger);
