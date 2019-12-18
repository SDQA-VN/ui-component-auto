//kintone-ui-component Checkbox
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82903214/kintone-ui-component+CheckBox
'use strict';

// check UI
let checkUIcheckbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'checkUIcheckbox Default Item',
            value: 'checkUIcheckbox Default Item',
            isDisabled: false
        },
        {
            label: 'checkUIcheckbox Item 2',
            value: 'checkUIcheckbox Item 2',
            isDisabled: false
        }
    ],
    value: ['checkUIcheckbox Default Item'],
    isDisabled: false,
    isVisible: true
});
let checkUIcheckbox_El = checkUIcheckbox.render();
checkUIcheckbox_El.id = 'checkUIcheckbox-id';
let checkUIcheckbox_cell = testgrid.getCell(posConfig.Check_Box.x, 1);
checkUIcheckbox_cell.appendChild(checkUIcheckbox_El);

// Render() - without value
let cons_without_value_CWV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'CWV_Default_Item_Checkbox_Checkbox',
            value: 'CWV_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'CWV_Item_Checkbox_Checkbox_2',
            value: 'CWV_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ]
});
let cons_without_value_CWV_chkbox_El = cons_without_value_CWV_chkbox.render();
cons_without_value_CWV_chkbox_El.id = 'CWV_M_checkbox_ID';
let cons_without_value_CWV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 2);
cons_without_value_CWV_chkbox_cell.appendChild(cons_without_value_CWV_chkbox_El);

// Render() - full Value
let cons_full_option_CFO_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'CFO_Default_Item_Checkbox_Checkbox',
            value: 'CFO_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'CFO_Item_Checkbox_Checkbox_2',
            value: 'CFO_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['CFO_Default_Item_Checkbox_Checkbox'],
    isDisabled: false,
    isVisible: true
});
let cons_full_option_CFO_chkbox_El = cons_full_option_CFO_chkbox.render();
cons_full_option_CFO_chkbox_El.id = 'CFO_M_checkbox_ID';
let cons_full_option_CFO_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 3);
cons_full_option_CFO_chkbox_cell.appendChild(cons_full_option_CFO_chkbox_El);

// Render() - with only value
let cons_with_only_value_CWOV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'OCAI_Default_Item_Checkbox_Checkbox',
            value: 'OCAI_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'OCAI_Item_Checkbox_Checkbox_2',
            value: 'OCAI_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['OCAI_Default_Item_Checkbox_Checkbox']
});
let cons_with_only_value_CWOV_chkbox_El = cons_with_only_value_CWOV_chkbox.render();
cons_with_only_value_CWOV_chkbox_El.id = 'CWOV_M_checkbox_ID';
let cons_with_only_value_CWOV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 4);
cons_with_only_value_CWOV_chkbox_cell.appendChild(cons_with_only_value_CWOV_chkbox_El);

// Add items - full value
let add_item_full_value_AIFV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'AIFV_Default_Item_Checkbox_Checkbox',
            value: 'AIFV_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'AIFV_Item_Checkbox_Checkbox_2',
            value: 'AIFV_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['AIFV_Default_Item_Checkbox_Checkbox']
});
let add_item_full_value_AIFV_chkbox_El = add_item_full_value_AIFV_chkbox.render();
add_item_full_value_AIFV_chkbox_El.id = 'AIFV_checkbox_ID';
let add_item_full_value_AIFV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 5);
add_item_full_value_AIFV_chkbox_cell.appendChild(add_item_full_value_AIFV_chkbox_El);

function getAddItemChkbox() {
    let items = add_item_full_value_AIFV_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
add_item_full_value_AIFV_chkbox_cell.appendChild(getAddItemBtn.render());
getAddItemBtn.on('click', getAddItemChkbox);

// Add items - full value for invisible chkbox
let add_item_invi_AII_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'AII_Default_Item_Checkbox_Checkbox',
            value: 'AII_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'AII_Item_Checkbox_Checkbox_2',
            value: 'AII_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['AII_Default_Item_Checkbox_Checkbox'],
    isVisible: false
});
let add_item_invi_AII_chkbox_El = add_item_invi_AII_chkbox.render();
add_item_invi_AII_chkbox_El.id = 'invi_AII_checkbox_ID';
let add_item_invi_AII_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 6);
add_item_invi_AII_chkbox_cell.appendChild(add_item_invi_AII_chkbox_El);

function getAddItemInviChkbox() {
    let items = add_item_invi_AII_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item For Invisible Chkbox Button',
    type: 'normal',
    isVisible: true,
});
add_item_invi_AII_chkbox_cell.appendChild(getAddItemInvisibleBtn.render());
getAddItemInvisibleBtn.on('click', getAddItemInviChkbox);

// Add item - only item.value
let add_item_only_value_AIOV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'AIOV_Default_Item_Checkbox_Checkbox',
            value: 'AIOV_Default_Item_Checkbox_Checkbox',
            isDisabled: true
        },
        {
            label: 'AIOV_Item_Checkbox_Checkbox_2',
            value: 'AIOV_Item_Checkbox_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['AIOV_Default_Item_Checkbox_Checkbox']
});
let add_item_only_value_AIOV_chkbox_El = add_item_only_value_AIOV_chkbox.render();
add_item_only_value_AIOV_chkbox_El.id = 'AIOV_checkbox_ID';
let add_item_only_value_AIOV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 7);
add_item_only_value_AIOV_chkbox_cell.appendChild(add_item_only_value_AIOV_chkbox_El);

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item With Only Value Checkbox Button',
    type: 'normal',
    isVisible: true,
});
add_item_only_value_AIOV_chkbox_cell.appendChild(getAddItemOnlyValueBtn.render());
getAddItemOnlyValueBtn.on('click', getAddItemOnlyValue);

// Add item - without item.value
let add_item_without_value_AIWVM_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'AIWVM_Default_Item_Checkbox',
            value: 'AIWVM_Default_Item_Checkbox',
            isDisabled: true
        },
        {
            label: 'AIWVM_Item_Checkbox_2',
            value: 'AIWVM_Item_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['AIWVM_Default_Item_Checkbox']
});
let add_item_without_value_AIWVM_chkbox_El = add_item_without_value_AIWVM_chkbox.render();
add_item_without_value_AIWVM_chkbox_El.id = 'AIWVM_checkbox_ID';
let add_item_without_value_AIWVM_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 8);
add_item_without_value_AIWVM_chkbox_cell.appendChild(add_item_without_value_AIWVM_chkbox_El);

function getAddItemWithoutValue() {
    let items = add_item_without_value_AIWVM_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemWithoutValueBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item Without Value Button',
    type: 'normal',
    isVisible: true,
});
add_item_without_value_AIWVM_chkbox_cell.appendChild(getAddItemWithoutValueBtn.render());
getAddItemWithoutValueBtn.on('click', getAddItemWithoutValue);

// getItem(index)
let get_item_GI_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'GI_Default_Item_Checkbox',
            value: 'GI_Default_Item_Checkbox',
            isDisabled: true
        },
        {
            label: 'GI_Item_Checkbox_2',
            value: 'GI_Item_Checkbox_2',
            isDisabled: false
        },
        {
            label: 'GI_Item_Checkbox_3',
            value: 'GI_Item_Checkbox_3',
            isDisabled: false
        }
    ],
    value: ['GI_Default_Item_Checkbox'],
    isVisible: true
});
let get_item_GI_chkbox_El = get_item_GI_chkbox.render();
get_item_GI_chkbox_El.id = 'GI_checkbox_ID';
let get_item_GI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 9);
get_item_GI_chkbox_cell.appendChild(get_item_GI_chkbox_El);

function getItemCheckbox(index) {
    let indexItem;
    let items = get_item_GI_chkbox.getItem(index);
    alert(JSON.stringify(items));
}

let getItemCheckboxBtn = new kintoneUIComponent.Button({
    text: 'Get Item Index For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
get_item_GI_chkbox_cell.appendChild(getItemCheckboxBtn.render());
getItemCheckboxBtn.on('click', function (event) {
    getItemCheckbox(indexItem);
});

// getItems()
let get_items_GIs_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'GIs_Default_Item_Checkbox',
            value: 'GIs_Default_Item_Checkbox',
            isDisabled: true
        },
        {
            label: 'GIs_Item_Checkbox_2',
            value: 'GIs_Item_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['GIs_Default_Item_Checkbox'],
    isVisible: false
});
let get_items_GIs_chkbox_El = get_items_GIs_chkbox.render();
get_items_GIs_chkbox_El.id = 'GIs_checkbox_ID';
let get_items_GIs_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 10);
get_items_GIs_chkbox_cell.appendChild(get_items_GIs_chkbox_El);
function getItemsCheckbox() {
    let items = get_items_GIs_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getItemsCheckboxBtn = new kintoneUIComponent.Button({
    text: 'Get Items For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
get_items_GIs_chkbox_cell.appendChild(getItemsCheckboxBtn.render());
getItemsCheckboxBtn.on('click', getItemsCheckbox);

// getValue()
let get_value_GV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'GV_Default_Item_Checkbox',
            value: 'GV_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'GV_Item_Checkbox_2',
            value: 'GV_Item_Checkbox_2',
            isDisabled: false
        }
    ],
    value: ['GV_Default_Item_Checkbox'],
    isVisible: true
});
let get_value_GV_chkbox_El = get_value_GV_chkbox.render();
get_value_GV_chkbox_El.id = 'GV_checkbox_ID';
let get_value_GV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 11);
get_value_GV_chkbox_cell.appendChild(get_value_GV_chkbox_El);

function getValueCheckbox() {
    let items = get_value_GV_chkbox.getValue();
    alert(items);
}

let getValueBtn = new kintoneUIComponent.Button({
    text: 'Get Value For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
get_value_GV_chkbox_cell.appendChild(getValueBtn.render());
getValueBtn.on('click', getValueCheckbox);

// setValue()
let set_value_SV_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'SV_Default_Item_Checkbox',
            value: 'SV_Default_Item_Checkbox',
            isDisabled: true
        },
        {
            label: 'SV_Item_Checkbox_Disable',
            value: 'SV_Item_Checkbox_Disable',
            isDisabled: true
        },
        {
            label: '',
            value: '',
            isDisabled: false
        }
    ],
    isVisible: true
});
let set_value_SV_chkbox_El = set_value_SV_chkbox.render();
set_value_SV_chkbox_El.id = 'SV_checkbox_ID';
let set_value_SV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 12);
set_value_SV_chkbox_cell.appendChild(set_value_SV_chkbox_El);

// disableItem
let set_disable_item_SDI_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'SDI_Default_Item_Checkbox',
            value: 'SDI_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'SDI_Item_Checkbox_Disable',
            value: 'SDI_Item_Checkbox_Disable',
            isDisabled: true
        }
    ],
    value: ['SDI_Default_Item_Checkbox'],
    isVisible: true
});
let set_disable_item_SDI_chkbox_El = set_disable_item_SDI_chkbox.render();
set_disable_item_SDI_chkbox_El.id = 'SDI_checkbox_ID';
let set_disable_item_SDI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 13);
set_disable_item_SDI_chkbox_cell.appendChild(set_disable_item_SDI_chkbox_El);

// enableItem()
let set_enable_item_SEI_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'SEI_Default_Item_Checkbox',
            value: 'SEI_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'SEI_Item_Checkbox_Disable',
            value: 'SEI_Item_Checkbox_Disable',
            isDisabled: true
        }
    ],
    value: ['SEI_Default_Item_Checkbox'],
    isVisible: true
});
let set_enable_item_SEI_chkbox_El = set_enable_item_SEI_chkbox.render();
set_enable_item_SEI_chkbox_El.id = 'SEI_checkbox_ID';
let set_enable_item_SEI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 14);
set_enable_item_SEI_chkbox_cell.appendChild(set_enable_item_SEI_chkbox_El);

// show()
let show_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'Show_Default_Item_Checkbox',
            value: 'Show_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'Show_Item_Checkbox_1',
            value: 'Show_Item_Checkbox_1',
            isDisabled: true
        }
    ],
    value: ['Show_Item_Checkbox_1'],
    isVisible: false
});
let show_El = show_chkbox.render();
show_El.id = 'show_checkbox_ID';
let show_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 15);
show_chkbox_cell.appendChild(show_El);

// hide()
let hide_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'Hide_Default_Item_Checkbox',
            value: 'Hide_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'Hide_Item_Checkbox_1',
            value: 'Hide_Item_Checkbox_1',
            isDisabled: true
        }
    ],
    value: ['Hide_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: false
});
let hide_El = hide_chkbox.render();
hide_El.id = 'hide_checkbox_ID';
let hide_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 16);
hide_chkbox_cell.appendChild(hide_El);

// disable()
let disable_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'disable_Default_Item_Checkbox',
            value: 'disable_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'disable_Item_Checkbox_1',
            value: 'disable_Item_Checkbox_1',
            isDisabled: true
        }
    ],
    value: ['disable_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: false
});
let disable_El = disable_chkbox.render();
disable_El.id = 'disable_checkbox_ID';
let disable_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 17);
disable_chkbox_cell.appendChild(disable_El);

// enable()
let enable_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'enable_Default_Item_Checkbox',
            value: 'enable_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'enable_Item_Checkbox_1',
            value: 'enable_Item_Checkbox_1',
            isDisabled: true
        }
    ],
    value: ['enable_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: true
});
let enable_El = enable_chkbox.render();
enable_El.id = 'enable_checkbox_ID';
let enable_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 18);
enable_chkbox_cell.appendChild(enable_El);

// on - function
let on_function_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'on_function_Default_Item_Checkbox',
            value: 'on_function_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'on_function_Item_Checkbox_1',
            value: 'on_function_Item_Checkbox_1',
            isDisabled: false
        }
    ],
    value: ['on_function_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: false
});
let on_function_El = on_function_chkbox.render();
on_function_El.id = 'on_function_checkbox_ID';
let on_function_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 19);
on_function_chkbox_cell.appendChild(on_function_El);

on_function_chkbox.on('change', function (event) {
    alert('on_function_chkbox has been changed');
});

// on - trigger
let on_trigger_chkbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'on_trigger_Default_Item_Checkbox',
            value: 'on_trigger_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'on_trigger_Item_Checkbox_1',
            value: 'on_trigger_Item_Checkbox_1',
            isDisabled: false
        }
    ],
    value: ['on_trigger_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: false
});
let on_trigger_El = on_trigger_chkbox.render();
on_trigger_El.id = 'on_trigger_checkbox_ID';
let on_trigger_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 20);
on_trigger_chkbox_cell.appendChild(on_trigger_El);

function triggerChange() {
    alert('on_trigger_chkbox has been changed');
}
on_trigger_chkbox.on('change', triggerChange);