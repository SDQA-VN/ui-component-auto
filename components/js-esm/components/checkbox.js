import {CheckBox, Button} from '@kintone/kintone-ui-component/esm/js';

// check UI
let checkUIcheckbox = new CheckBox({
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

// Render() - without value
let cons_without_value_CWV_chkbox = new CheckBox({
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

// Render() - full Value
let cons_full_option_CFO_chkbox = new CheckBox({
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

// Render() - with only value
let cons_with_only_value_CWOV_chkbox = new CheckBox({
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

// Add items - full value
let add_item_full_value_AIFV_chkbox = new CheckBox({
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

function getAddItemChkbox() {
    let items = add_item_full_value_AIFV_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemBtn = new Button({
    text: 'Get New Added Item For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
getAddItemBtn.on('click', getAddItemChkbox);
let add_item_full_value_AIFV_chkbox_div = document.createElement('div')
add_item_full_value_AIFV_chkbox_div.appendChild(add_item_full_value_AIFV_chkbox_El);
add_item_full_value_AIFV_chkbox_div.appendChild(getAddItemBtn.render());

// Add items - full value for invisible chkbox
let add_item_invi_AII_chkbox = new CheckBox({
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

function getAddItemInviChkbox() {
    let items = add_item_invi_AII_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleBtn = new Button({
    text: 'Get New Added Item For Invisible Chkbox Button',
    type: 'normal',
    isVisible: true,
});
getAddItemInvisibleBtn.on('click', getAddItemInviChkbox);
let add_item_invi_AII_chkbox_div = document.createElement('div');
add_item_invi_AII_chkbox_div.appendChild(add_item_invi_AII_chkbox_El);
add_item_invi_AII_chkbox_div.appendChild(getAddItemInvisibleBtn.render());

// Add item - only item.value
let add_item_only_value_AIOV_chkbox = new CheckBox({
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

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueBtn = new Button({
    text: 'Get New Added Item With Only Value Checkbox Button',
    type: 'normal',
    isVisible: true,
});
getAddItemOnlyValueBtn.on('click', getAddItemOnlyValue);
let add_item_only_value_AIOV_chkbox_div = document.createElement('div');
add_item_only_value_AIOV_chkbox_div.appendChild(add_item_only_value_AIOV_chkbox_El);
add_item_only_value_AIOV_chkbox_div.appendChild(getAddItemOnlyValueBtn.render());

// Add item - without item.value
let add_item_without_value_AIWVM_chkbox = new CheckBox({
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

function getAddItemWithoutValue() {
    let items = add_item_without_value_AIWVM_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getAddItemWithoutValueBtn = new Button({
    text: 'Get New Added Item Without Value Button',
    type: 'normal',
    isVisible: true,
});
getAddItemWithoutValueBtn.on('click', getAddItemWithoutValue);
let add_item_without_value_AIWVM_chkbox_div = document.createElement('div');
add_item_without_value_AIWVM_chkbox_div.appendChild(add_item_without_value_AIWVM_chkbox_El);
add_item_without_value_AIWVM_chkbox_div.appendChild(getAddItemWithoutValueBtn.render());

// getItem(index)
let get_item_GI_chkbox = new CheckBox({
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

function getItemCheckbox(index) {
    let indexItem;
    let items = get_item_GI_chkbox.getItem(index);
    alert(JSON.stringify(items));
}

let getItemCheckboxBtn = new Button({
    text: 'Get Item Index For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
getItemCheckboxBtn.on('click', function (event) {
    getItemCheckbox(indexItem);
});
let get_item_GI_chkbox_div = document.createElement('div');
get_item_GI_chkbox_div.appendChild(get_item_GI_chkbox_El);
get_item_GI_chkbox_div.appendChild(getItemCheckboxBtn.render());

// getItems()
let get_items_GIs_chkbox = new CheckBox({
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
function getItemsCheckbox() {
    let items = get_items_GIs_chkbox.getItems();
    alert(JSON.stringify(items));
}

let getItemsCheckboxBtn = new Button({
    text: 'Get Items For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
getItemsCheckboxBtn.on('click', getItemsCheckbox);
let get_items_GIs_chkbox_div = document.createElement('div');
get_items_GIs_chkbox_div.appendChild(get_items_GIs_chkbox_El);
get_items_GIs_chkbox_div.appendChild(getItemsCheckboxBtn.render());

// getValue()
let get_value_GV_chkbox = new CheckBox({
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

function getValueCheckbox() {
    let items = get_value_GV_chkbox.getValue();
    alert(items);
}

let getValueBtn = new Button({
    text: 'Get Value For Checkbox Button',
    type: 'normal',
    isVisible: true,
});
getValueBtn.on('click', getValueCheckbox);
let get_value_GV_chkbox_div = document.createElement('div');
get_value_GV_chkbox_div.appendChild(get_value_GV_chkbox_El);
get_value_GV_chkbox_div.appendChild(getValueBtn.render());

// setValue()
let set_value_SV_chkbox = new CheckBox({
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

// disableItem
let set_disable_item_SDI_chkbox = new CheckBox({
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

// enableItem()
let set_enable_item_SEI_chkbox = new CheckBox({
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

// show()
let show_chkbox = new CheckBox({
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

// hide()
let hide_chkbox = new CheckBox({
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

// disable()
let disable_chkbox = new CheckBox({
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

// enable()
let enable_chkbox = new CheckBox({
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

// on - function
let on_function_chkbox = new CheckBox({
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

on_function_chkbox.on('change', function (event) {
    alert('on_function_chkbox has been changed');
});

// on - trigger
let on_trigger_chkbox = new CheckBox({
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

function triggerChange() {
    alert('on_trigger_chkbox has been changed');
}
on_trigger_chkbox.on('change', triggerChange);

export default {
    checkUIcheckbox_El,
    cons_without_value_CWV_chkbox_El,
    cons_full_option_CFO_chkbox_El,
    cons_with_only_value_CWOV_chkbox_El,
    add_item_full_value_AIFV_chkbox_div,
    add_item_invi_AII_chkbox_div,
    add_item_only_value_AIOV_chkbox_div,
    add_item_without_value_AIWVM_chkbox_div,
    get_item_GI_chkbox_div,
    get_items_GIs_chkbox_div,
    get_value_GV_chkbox_div,
    set_value_SV_chkbox_El,
    set_disable_item_SDI_chkbox_El,
    set_enable_item_SEI_chkbox_El,
    show_El,
    hide_El,
    disable_El,
    enable_El,
    on_function_El,
    on_trigger_El
}