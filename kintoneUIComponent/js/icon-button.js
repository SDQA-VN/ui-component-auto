// //kintone-ui-component Icon Button
// //https://sharedoc.atlassian.net/wiki/spaces/SC/pages/86737727/kintone-ui-component+IconButton
// 'use strict';

//let body = document.getElementsByTagName("BODY")[0];

// Render() - full option value
let cons_full_value = new kintoneUIComponent.IconButton({
    type: 'insert',
    color:'blue', 
    size: 'small',
    isDisabled: false,
    isVisible: true
});
let cons_full_value_El = cons_full_value.render();
cons_full_value_El.id = 'Full_Value_Icon_ID';
let cons_full_value_cell = testgrid.getCell(posConfig.Icon_Button.x, 1);
cons_full_value_cell.appendChild(cons_full_value_El);

// only option.type = insert
let cons_type_insert = new kintoneUIComponent.IconButton({
    type: 'insert'
});
let cons_type_insert_El = cons_type_insert.render();
cons_type_insert_El.id = 'Type_Insert_Icon_ID';
let cons_type_insert_cell = testgrid.getCell(posConfig.Icon_Button.x, 2);
cons_type_insert_cell.appendChild(cons_type_insert_El);

// only option.color = green
let cons_color_green = new kintoneUIComponent.IconButton({
    color: 'green'
});
let cons_color_green_El = cons_color_green.render();
cons_color_green_El.id = 'Color_Green_Icon_ID';
let cons_color_green_cell = testgrid.getCell(posConfig.Icon_Button.x, 3);
cons_color_green_cell.appendChild(cons_color_green_El);

// only option.isDisabled = true
let cons_disabled = new kintoneUIComponent.IconButton({
    isDisabled: true
});
let cons_disabled_El = cons_disabled.render();
cons_disabled_El.id = 'Disabled_Icon_ID';
let cons_disabled_cell = testgrid.getCell(posConfig.Icon_Button.x, 4);
cons_disabled_cell.appendChild(cons_disabled_El);

// setType
let setTypeForIB = new kintoneUIComponent.IconButton({
    isDisabled: false
});
let setTypeForIB_El = setTypeForIB.render();
setTypeForIB_El.id = 'setType_Icon_ID';
let setTypeForIB_cell = testgrid.getCell(posConfig.Icon_Button.x, 5);
setTypeForIB_cell.appendChild(setTypeForIB_El);

function getStateOfIB() {
    let stateOFIB = setTypeForIB._props;
    alert(JSON.stringify(stateOFIB));
}

let getValueIBBtn = new kintoneUIComponent.Button({
    text: 'Get State For Icon Button',
    type: 'normal',
    isVisible: true,
});

setTypeForIB_cell.appendChild(getValueIBBtn.render());
getValueIBBtn.on('click', getStateOfIB);

setTypeForIB.on('click', function (event) {
    alert('on_click has been clicked');
});

// on trigger
let on_trigger = new kintoneUIComponent.IconButton({
    type: 'insert',
    isDisabled: false,
    isVisible: true
});
let on_trigger_IB_El = on_trigger.render();
on_trigger_IB_El.id = 'on_trigger_Icon_ID';
let on_trigger_cell = testgrid.getCell(posConfig.Icon_Button.x, 6);
on_trigger_cell.appendChild(on_trigger_IB_El);

function on_trigger_IB() {
    alert('on_click_trigger has been clicked');
}
on_trigger.on('click', on_trigger_IB);


