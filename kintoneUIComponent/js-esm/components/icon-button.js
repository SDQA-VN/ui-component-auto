import {IconButton, Button} from '@kintone/kintone-ui-component/esm/js';

// Render() - full option value
let cons_full_value = new IconButton({
    type: 'insert',
    color:'blue', 
    size: 'small',
    isDisabled: false,
    isVisible: true
});
let cons_full_value_El = cons_full_value.render();
cons_full_value_El.id = 'Full_Value_Icon_ID';

// only option.type = insert
let cons_type_insert = new IconButton({
    type: 'insert'
});
let cons_type_insert_El = cons_type_insert.render();
cons_type_insert_El.id = 'Type_Insert_Icon_ID';

// only option.color = green
let cons_color_green = new IconButton({
    color: 'green'
});
let cons_color_green_El = cons_color_green.render();
cons_color_green_El.id = 'Color_Green_Icon_ID';

// only option.isDisabled = true
let cons_disabled = new IconButton({
    isDisabled: true
});
let cons_disabled_El = cons_disabled.render();
cons_disabled_El.id = 'Disabled_Icon_ID';

// setType
let setTypeForIB = new IconButton({
    isDisabled: false
});
let setTypeForIB_El = setTypeForIB.render();
setTypeForIB_El.id = 'setType_Icon_ID';

function getStateOfIB() {
    let stateOFIB = setTypeForIB._props;
    alert(JSON.stringify(stateOFIB));
}

let getValueIBBtn = new Button({
    text: 'Get State For Icon Button',
    type: 'normal',
    isVisible: true,
});

getValueIBBtn.on('click', getStateOfIB);

setTypeForIB.on('click', function (event) {
    alert('on_click has been clicked');
});

let setTypeForIB_div = document.createElement('div');
setTypeForIB_div.appendChild(setTypeForIB_El);
setTypeForIB_div.appendChild(getValueIBBtn.render());

// on trigger
let on_trigger = new IconButton({
    type: 'insert',
    isDisabled: false,
    isVisible: true
});
let on_trigger_IB_El = on_trigger.render();
on_trigger_IB_El.id = 'on_trigger_Icon_ID';

function on_trigger_IB() {
    alert('on_click_trigger has been clicked');
}
on_trigger.on('click', on_trigger_IB);

export default {
    cons_full_value_El,
    cons_type_insert_El,
    cons_color_green_El,
    cons_disabled_El,
    setTypeForIB_div,
    on_trigger_IB_El
}


