import {NotifyPopup, Button} from '@kintone/kintone-ui-component/esm/js';

// Render() - full option value
let cons_notify_full_value = new NotifyPopup({
    text: 'Submit sucessffully',
    type: 'error',
    isDisabled: false,
    isVisible: true
});
let cons_notify_full_value_El = cons_notify_full_value.render();
cons_notify_full_value_El.id = 'cons_notify_full_value_ID';

// without value
let cons_notify_without_value = new NotifyPopup({});
let cons_notify_without_value_El = cons_notify_without_value.render();
cons_notify_without_value_El.id = 'cons_notify_without_value_ID';
function getStateOfNP() {
    let stateOfNP = cons_notify_without_value._props;
    alert(JSON.stringify(stateOfNP));
}

let getStateBtn = new Button({
    text: 'Get State For Notify Popup',
    type: 'normal',
    isVisible: true,
});
getStateBtn.on('click', getStateOfNP);

cons_notify_without_value.on('click', function (event) {
    alert('on_click has been clicked');
});

// on trigger
let on_trigger_notify = new NotifyPopup({});
let on_trigger_notify_El = on_trigger_notify.render();
on_trigger_notify_El.id = 'on_trigger_notify_ID';

function on_trigger_NP() {
    alert('on_click_trigger has been clicked');
}
on_trigger_notify.on('click', on_trigger_NP);

export default {
    cons_notify_full_value_El,
    getStateBtn
}
