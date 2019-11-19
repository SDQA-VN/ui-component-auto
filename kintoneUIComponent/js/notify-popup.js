//kintone-ui-component Notify Popup
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82739621/kintone-ui-component+NotifyPopup
'use strict';

// Render() - full option value
let fullOptionNotifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Full Option NotifyPopup',
    type: 'error',
    isVisible: true
});
let fullOptionNotifyPopupEl = fullOptionNotifyPopup.render();
fullOptionNotifyPopupEl.id = 'full-option-notifypopup';
let fullOptionNotifyPopupCell = testgrid.getCell(posConfig.Notify.x, 1)
fullOptionNotifyPopupCell.appendChild(fullOptionNotifyPopupEl);

// without value
let noOptionNotifyPopup = new kintoneUIComponent.NotifyPopup({});
let noOptionNotifyPopupEl = noOptionNotifyPopup.render();
noOptionNotifyPopupEl.id = 'no-option-notifypopup';
function getStateOfNP() {
    let stateOfNP = noOptionNotifyPopup._props;
    alert(JSON.stringify(stateOfNP));
}

let getStateBtn = new kintoneUIComponent.Button({
    text: 'Get State For Notify Popup',
    type: 'normal',
    isVisible: true
});
let getStateBtn_cell = testgrid.getCell(posConfig.Notify.x, 2)
getStateBtn_cell.appendChild(getStateBtn.render());
getStateBtn.on('click', getStateOfNP);

noOptionNotifyPopup.on('click', function (event) {
    alert('on_click has been clicked');
});

// on trigger
let OnCallBackTriggerNotifyPopup = new kintoneUIComponent.NotifyPopup({});
let OnCallBackTriggerNotifyPopupEl = OnCallBackTriggerNotifyPopup.render();
OnCallBackTriggerNotifyPopupEl.id = 'on-callback-trigger-notifypopup';

function on_trigger_NP() {
    alert('on_click_trigger has been clicked');
}
onCallBackTriggerAlert.on('click', on_trigger_NP);
