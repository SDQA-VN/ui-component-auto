//kintone-ui-component Multiple Choice
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/101680074/kintone-ui-component+MultipleChoice
'use strict';

// Render() - without value
let cons_without_value_CWV_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'CWV_Default_MulChoice_Item',
            value: 'CWV_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'CWV_MulChoice_Item_2',
            value: 'CWV_MulChoice_Item_2',
            isDisabled: false
        }
    ]
});
let cons_without_value_CWV_mulChoice_El = cons_without_value_CWV_mulChoice.render();
cons_without_value_CWV_mulChoice_El.id = 'CWV_M_MulChoice_ID';
let cons_without_value_CWV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 1);
cons_without_value_CWV_mulChoice_cell.appendChild(cons_without_value_CWV_mulChoice_El);

// Render() - full Value
let cons_full_option_CFO_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'CFO_Default_MulChoice_Item',
            value: 'CFO_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'CFO_MulChoice_Item_2',
            value: 'CFO_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['CFO_Default_MulChoice_Item'],
    isDisabled: false,
    isVisible: true
});
let cons_full_option_CFO_mulChoice_El = cons_full_option_CFO_mulChoice.render();
cons_full_option_CFO_mulChoice_El.id = 'CFO_M_MulChoice_ID';
let cons_full_option_CFO_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 2);
cons_full_option_CFO_mulChoice_cell.appendChild(cons_full_option_CFO_mulChoice_El);

// Render() - with only value
let cons_with_only_value_CWOV_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'OCAI_Default_MulChoice_Item',
            value: 'OCAI_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'OCAI_MulChoice_Item_2',
            value: 'OCAI_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['OCAI_Default_MulChoice_Item']
});
let cons_with_only_value_CWOV_mulChoice_El = cons_with_only_value_CWOV_mulChoice.render();
cons_with_only_value_CWOV_mulChoice_El.id = 'CWOV_M_MulChoice_ID';
let cons_with_only_value_CWOV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 3);
cons_with_only_value_CWOV_mulChoice_cell.appendChild(cons_with_only_value_CWOV_mulChoice_El);

// Add items - full value
let add_item_full_value_AIFV_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'AIFV_Default_MulChoice_Item',
            value: 'AIFV_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'AIFV_MulChoice_Item_2',
            value: 'AIFV_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['AIFV_Default_MulChoice_Item']
});
let add_item_full_value_AIFV_mulChoice_El = add_item_full_value_AIFV_mulChoice.render();
add_item_full_value_AIFV_mulChoice_El.id = 'AIFV_MulChoice_ID';
let add_item_full_value_AIFV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 4);
add_item_full_value_AIFV_mulChoice_cell.appendChild(add_item_full_value_AIFV_mulChoice_El);

function getAddItemMulChoice() {
    let items = add_item_full_value_AIFV_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item MulChoice Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 5);
getAddItemMulChoiceBtn_cell.appendChild(getAddItemMulChoiceBtn.render());
getAddItemMulChoiceBtn.on('click', getAddItemMulChoice);

// Add items - full value for invisible mulChoice
let add_item_invi_AII_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'AII_Default_MulChoice_Item',
            value: 'AII_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'AII_MulChoice_Item_2',
            value: 'AII_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['AII_Default_MulChoice_Item'],
    isVisible: false
});
let add_item_invi_AII_mulChoice_El = add_item_invi_AII_mulChoice.render();
add_item_invi_AII_mulChoice_El.id = 'invi_AII_MulChoice_ID';
let add_item_invi_AII_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 6);
add_item_invi_AII_mulChoice_cell.appendChild(add_item_invi_AII_mulChoice_El);

function getAddItemInviMulChoice() {
    let items = add_item_invi_AII_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item For Invisible MulChoice Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemInvisibleMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 7);
getAddItemInvisibleMulChoiceBtn_cell.appendChild(getAddItemInvisibleMulChoiceBtn.render());
getAddItemInvisibleMulChoiceBtn.on('click', getAddItemInviMulChoice);

// Add item - only item.value
let add_item_only_value_AIOV_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'AIOV_Default_MulChoice_Item',
            value: 'AIOV_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'AIOV_MulChoice_Item_2',
            value: 'AIOV_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['AIOV_Default_MulChoice_Item']
});
let add_item_only_value_AIOV_mulChoice_El = add_item_only_value_AIOV_mulChoice.render();
add_item_only_value_AIOV_mulChoice_El.id = 'AIOV_MulChoice_ID';
let add_item_only_value_AIOV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 8);
add_item_only_value_AIOV_mulChoice_cell.appendChild(add_item_only_value_AIOV_mulChoice_El);

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item With Only Value MulChoice Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemOnlyValueMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 9);
getAddItemOnlyValueMulChoiceBtn_cell.appendChild(getAddItemOnlyValueMulChoiceBtn.render());
getAddItemOnlyValueMulChoiceBtn.on('click', getAddItemOnlyValue);

// Add item - without item.value
let add_item_without_value_AIWVM_mulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'AIWVM_Default_MulChoice_Item',
            value: 'AIWVM_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'AIWVM_MulChoice_Item_2',
            value: 'AIWVM_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['AIWVM_Default_MulChoice_Item']
});
let add_item_without_value_AIWVM_mulChoice_El = add_item_without_value_AIWVM_mulChoice.render();
add_item_without_value_AIWVM_mulChoice_El.id = 'AIWVM_MulChoice_ID';
let add_item_without_value_AIWVM_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 10);
add_item_without_value_AIWVM_mulChoice_cell.appendChild(add_item_without_value_AIWVM_mulChoice_El);

function getAddItemWithoutValue() {
    let items = add_item_without_value_AIWVM_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemWithoutValueMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item Without Value MulChoice Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemWithoutValueMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 11);
getAddItemWithoutValueMulChoiceBtn_cell.appendChild(getAddItemWithoutValueMulChoiceBtn.render());
getAddItemWithoutValueMulChoiceBtn.on('click', getAddItemWithoutValue);

// RemoveItem()
let remove_item_RI_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'RI_Default_MulChoice_Item',
            value: 'RI_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'RI_MulChoice_Item_2',
            value: 'RI_MulChoice_Item_2',
            isDisabled: false
        },
        {
            label: 'RI_MulChoice_Item_3',
            value: 'RI_MulChoice_Item_3',
            isDisabled: false
        }
    ],
    value: ['RI_Default_MulChoice_Item']
});
let remove_item_RI_multipleChoice_El = remove_item_RI_multipleChoice.render();
remove_item_RI_multipleChoice_El.id = 'RI_MulChoice_ID';
let remove_item_RI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 12);
remove_item_RI_multipleChoice_cell.appendChild(remove_item_RI_multipleChoice_El);

function getItemsOfRemovedMulChoice() {
    let items = remove_item_RI_multipleChoice.getItems();
    alert(JSON.stringify(items));
}

let getItemsOfRemovedMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get Items of Removed MulChoice Button',
    type: 'normal',
    isVisible: true,
});
let getItemsOfRemovedMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 13);
getItemsOfRemovedMulChoiceBtn_cell.appendChild(getItemsOfRemovedMulChoiceBtn.render());
getItemsOfRemovedMulChoiceBtn.on('click', getItemsOfRemovedMulChoice);

// getItem(index)
let get_item_GI_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'GI_Default_MulChoice_Item',
            value: 'GI_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'GI_MulChoice_Item_2',
            value: 'GI_MulChoice_Item_2',
            isDisabled: false
        },
        {
            label: 'GI_MulChoice_Item_3',
            value: 'GI_MulChoice_Item_3',
            isDisabled: false
        }
    ],
    value: ['GI_Default_MulChoice_Item'],
    isVisible: true
});
let get_item_GI_multipleChoice_El = get_item_GI_multipleChoice.render();
get_item_GI_multipleChoice_El.id = 'GI_MulChoice_ID';
let get_item_GI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 14);
get_item_GI_multipleChoice_cell.appendChild(get_item_GI_multipleChoice_El);

function getItemMultipleChoice(index) {
    let indexItem;
    let items = get_item_GI_multipleChoice.getItem(index);
    alert(JSON.stringify(items));
}

let getItemMultipleChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get Item Index For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
let getItemMultipleChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 15);
getItemMultipleChoiceBtn_cell.appendChild(getItemMultipleChoiceBtn.render());
getItemMultipleChoiceBtn.on('click', function (event) {
    getItemMultipleChoice(indexItem);
});

// getItems()
let get_items_GIs_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'GIs_Default_MulChoice_Item',
            value: 'GIs_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'GIs_MulChoice_Item_2',
            value: 'GIs_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['GIs_Default_MulChoice_Item'],
    isVisible: false
});
let get_items_GIs_multipleChoice_El = get_items_GIs_multipleChoice.render();
get_items_GIs_multipleChoice_El.id = 'GIs_MulChoice_ID';
let get_items_GIs_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 16);
get_items_GIs_multipleChoice_cell.appendChild(get_items_GIs_multipleChoice_El);
function getItemsMultipleChoice() {
    let items = get_items_GIs_multipleChoice.getItems();
    alert(JSON.stringify(items));
}

let getItemsMultipleChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get Items For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
let getItemsMultipleChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 17);
getItemsMultipleChoiceBtn_cell.appendChild(getItemsMultipleChoiceBtn.render());
getItemsMultipleChoiceBtn.on('click', getItemsMultipleChoice);

// getValue()
let get_value_GV_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'GV_Default_MulChoice_Item',
            value: 'GV_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'GV_MulChoice_Item_2',
            value: 'GV_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['GV_Default_MulChoice_Item'],
    isVisible: true
});
let get_value_GV_multipleChoice_El = get_value_GV_multipleChoice.render();
get_value_GV_multipleChoice_El.id = 'GV_MulChoice_ID';
let get_value_GV_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 18);
get_value_GV_multipleChoice_cell.appendChild(get_value_GV_multipleChoice_El);

function getValueMultipleChoice() {
    let items = get_value_GV_multipleChoice.getValue();
    alert(items);
}

let getValueMulChoiceBtn = new kintoneUIComponent.Button({
    text: 'Get Value For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
let getValueMulChoiceBtn_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 19);
getValueMulChoiceBtn_cell.appendChild(getValueMulChoiceBtn.render());
getValueMulChoiceBtn.on('click', getValueMultipleChoice);

// setValue()
let set_value_SV_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'SV_Default_MulChoice_Item',
            value: 'SV_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'SV_MulChoice_Item_Disable',
            value: 'SV_MulChoice_Item_Disable',
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
let set_value_SV_multipleChoice_El = set_value_SV_multipleChoice.render();
set_value_SV_multipleChoice_El.id = 'SV_MulChoice_ID';
let set_value_SV_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 20);
set_value_SV_multipleChoice_cell.appendChild(set_value_SV_multipleChoice_El);

// disableItem
let set_disable_item_SDI_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'SDI_Default_MulChoice_Item',
            value: 'SDI_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'SDI_MulChoice_Item_Disable',
            value: 'SDI_MulChoice_Item_Disable',
            isDisabled: true
        }
    ],
    value: ['SDI_Default_MulChoice_Item'],
    isVisible: true
});
let set_disable_item_SDI_multipleChoice_El = set_disable_item_SDI_multipleChoice.render();
set_disable_item_SDI_multipleChoice_El.id = 'SDI_MulChoice_ID';
let set_disable_item_SDI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 21);
set_disable_item_SDI_multipleChoice_cell.appendChild(set_disable_item_SDI_multipleChoice_El);

// enableItem()
let set_enable_item_SEI_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'SEI_Default_MulChoice_Item',
            value: 'SEI_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'SEI_MulChoice_Item_Disable',
            value: 'SEI_MulChoice_Item_Disable',
            isDisabled: true
        }
    ],
    value: ['SEI_Default_MulChoice_Item'],
    isVisible: true
});
let set_enable_item_SEI_multipleChoice_El = set_enable_item_SEI_multipleChoice.render();
set_enable_item_SEI_multipleChoice_El.id = 'SEI_MulChoice_ID';
let set_enable_item_SEI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 22);
set_enable_item_SEI_multipleChoice_cell.appendChild(set_enable_item_SEI_multipleChoice_El);

// show()
let show_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Show_Default_MulChoice_Item',
            value: 'Show_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'Show_MulChoice_Item_1',
            value: 'Show_MulChoice_Item_1',
            isDisabled: true
        }
    ],
    value: ['Show_MulChoice_Item_1'],
    isVisible: false
});
let show_MulChoice_El = show_multipleChoice.render();
show_MulChoice_El.id = 'show_MulChoice_ID';
let show_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 23);
show_multipleChoice_cell.appendChild(show_MulChoice_El);

// hide()
let hide_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Hide_Default_MulChoice_Item',
            value: 'Hide_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'Hide_MulChoice_Item_1',
            value: 'Hide_MulChoice_Item_1',
            isDisabled: true
        }
    ],
    value: ['Hide_Default_MulChoice_Item'],
    isVisible: true,
    isDisabled: false
});
let hide_MulChoice_El = hide_multipleChoice.render();
hide_MulChoice_El.id = 'hide_MulChoice_ID';
let hide_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 24);
hide_multipleChoice_cell.appendChild(hide_MulChoice_El);

// disable()
let disable_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'disable_Default_MulChoice_Item',
            value: 'disable_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'disable_MulChoice_Item_1',
            value: 'disable_MulChoice_Item_1',
            isDisabled: true
        }
    ],
    value: ['disable_Default_MulChoice_Item'],
    isVisible: true,
    isDisabled: false
});
let disable_MulChoice_El = disable_multipleChoice.render();
disable_MulChoice_El.id = 'disable_MulChoice_ID';
let disable_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 25);
disable_multipleChoice_cell.appendChild(disable_MulChoice_El);

// enable()
let enable_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'enable_Default_MulChoice_Item',
            value: 'enable_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'enable_MulChoice_Item_1',
            value: 'enable_MulChoice_Item_1',
            isDisabled: true
        }
    ],
    value: ['enable_Default_MulChoice_Item'],
    isVisible: true,
    isDisabled: true
});
let enable_MulChoice_El = enable_multipleChoice.render();
enable_MulChoice_El.id = 'enable_MulChoice_ID';
let enable_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 26);
enable_multipleChoice_cell.appendChild(enable_MulChoice_El);

// on - function
let on_function_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'on_function_Default_MulChoice_Item',
            value: 'on_function_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'on_function_MulChoice_Item_1',
            value: 'on_function_MulChoice_Item_1',
            isDisabled: false
        }
    ],
    value: ['on_function_Default_MulChoice_Item'],
    isVisible: true,
    isDisabled: false
});
let on_function_MulChoice_El = on_function_multipleChoice.render();
on_function_MulChoice_El.id = 'on_function_MulChoice_ID';
let on_function_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 27);
on_function_multipleChoice_cell.appendChild(on_function_MulChoice_El);

on_function_multipleChoice.on('change', function (event) {
    alert('on_function_multipleChoice has been changed');
});

// on - trigger
let on_trigger_multipleChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'on_trigger_Default_MulChoice_Item',
            value: 'on_trigger_Default_MulChoice_Item',
            isDisabled: false
        },
        {
            label: 'on_trigger_MulChoice_Item_1',
            value: 'on_trigger_MulChoice_Item_1',
            isDisabled: false
        }
    ],
    value: ['on_trigger_Default_MulChoice_Item'],
    isVisible: true,
    isDisabled: false
});
let on_trigger_MulChoice_El = on_trigger_multipleChoice.render();
on_trigger_MulChoice_El.id = 'on_trigger_MulChoice_ID';
let on_trigger_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 28);
on_trigger_multipleChoice_cell.appendChild(on_trigger_MulChoice_El);

function triggerChange() {
    alert('on_trigger_multipleChoice has been changed');
}
on_trigger_multipleChoice.on('change', triggerChange);