import {MultipleChoice, Button} from '@kintone/kintone-ui-component/esm/js';

// Render() - without value
let cons_without_value_CWV_mulChoice = new MultipleChoice({
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

// Render() - full Value
let cons_full_option_CFO_mulChoice = new MultipleChoice({
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

// Render() - with only value
let cons_with_only_value_CWOV_mulChoice = new MultipleChoice({
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

// Add items - full value
let add_item_full_value_AIFV_mulChoice = new MultipleChoice({
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

function getAddItemMulChoice() {
    let items = add_item_full_value_AIFV_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemMulChoiceBtn = new Button({
    text: 'Get New Added Item MulChoice Button',
    type: 'normal',
    isVisible: true,
});
getAddItemMulChoiceBtn.on('click', getAddItemMulChoice);

let add_item_full_value_AIFV_mulChoice_div = document.createElement('div');
add_item_full_value_AIFV_mulChoice_div.appendChild(add_item_full_value_AIFV_mulChoice_El);
add_item_full_value_AIFV_mulChoice_div.appendChild(getAddItemMulChoiceBtn.render());

// Add items - full value for invisible mulChoice
let add_item_invi_AII_mulChoice = new MultipleChoice({
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

function getAddItemInviMulChoice() {
    let items = add_item_invi_AII_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleMulChoiceBtn = new Button({
    text: 'Get New Added Item For Invisible MulChoice Button',
    type: 'normal',
    isVisible: true,
});
getAddItemInvisibleMulChoiceBtn.on('click', getAddItemInviMulChoice);

let add_item_invi_AII_mulChoice_div = document.createElement('div');
add_item_invi_AII_mulChoice_div.appendChild(add_item_invi_AII_mulChoice_El);
add_item_invi_AII_mulChoice_div.appendChild(getAddItemInvisibleMulChoiceBtn.render());

// Add item - only item.value
let add_item_only_value_AIOV_mulChoice = new MultipleChoice({
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

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueMulChoiceBtn = new Button({
    text: 'Get New Added Item With Only Value MulChoice Button',
    type: 'normal',
    isVisible: true,
});
getAddItemOnlyValueMulChoiceBtn.on('click', getAddItemOnlyValue);

let add_item_only_value_AIOV_mulChoice_div = document.createElement('div');
add_item_only_value_AIOV_mulChoice_div.appendChild(add_item_only_value_AIOV_mulChoice_El);
add_item_only_value_AIOV_mulChoice_div.appendChild(getAddItemOnlyValueMulChoiceBtn.render());

// Add item - without item.value
let add_item_without_value_AIWVM_mulChoice = new MultipleChoice({
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

function getAddItemWithoutValue() {
    let items = add_item_without_value_AIWVM_mulChoice.getItems();
    alert(JSON.stringify(items));
}

let getAddItemWithoutValueMulChoiceBtn = new Button({
    text: 'Get New Added Item Without Value MulChoice Button',
    type: 'normal',
    isVisible: true,
});
getAddItemWithoutValueMulChoiceBtn.on('click', getAddItemWithoutValue);

let add_item_without_value_AIWVM_mulChoice_div = document.createElement('div');
add_item_without_value_AIWVM_mulChoice_div.appendChild(add_item_without_value_AIWVM_mulChoice_El);
add_item_without_value_AIWVM_mulChoice_div.appendChild(getAddItemWithoutValueMulChoiceBtn.render());

// RemoveItem()
let remove_item_RI_multipleChoice = new MultipleChoice({
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

function getItemsOfRemovedMulChoice() {
    let items = remove_item_RI_multipleChoice.getItems();
    alert(JSON.stringify(items));
}

let getItemsOfRemovedMulChoiceBtn = new Button({
    text: 'Get Items of Removed MulChoice Button',
    type: 'normal',
    isVisible: true,
});
getItemsOfRemovedMulChoiceBtn.on('click', getItemsOfRemovedMulChoice);

let remove_item_RI_multipleChoice_div = document.createElement('div');
remove_item_RI_multipleChoice_div.appendChild(remove_item_RI_multipleChoice_El);
remove_item_RI_multipleChoice_div.appendChild(getItemsOfRemovedMulChoiceBtn.render());

// getItem(index)
let get_item_GI_multipleChoice = new MultipleChoice({
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

function getItemMultipleChoice(index) {
    let indexItem;
    let items = get_item_GI_multipleChoice.getItem(index);
    alert(JSON.stringify(items));
}

let getItemMultipleChoiceBtn = new Button({
    text: 'Get Item Index For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
getItemMultipleChoiceBtn.on('click', function (event) {
    getItemMultipleChoice(indexItem);
});

let get_item_GI_multipleChoice_div = document.createElement('div');
get_item_GI_multipleChoice_div.appendChild(get_item_GI_multipleChoice_El);
get_item_GI_multipleChoice_div.appendChild(getItemMultipleChoiceBtn.render());

// getItems()
let get_items_GIs_multipleChoice = new MultipleChoice({
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
function getItemsMultipleChoice() {
    let items = get_items_GIs_multipleChoice.getItems();
    alert(JSON.stringify(items));
}

let getItemsMultipleChoiceBtn = new Button({
    text: 'Get Items For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
getItemsMultipleChoiceBtn.on('click', getItemsMultipleChoice);

let get_items_GIs_multipleChoice_div = document.createElement('div');
get_items_GIs_multipleChoice_div.appendChild(get_items_GIs_multipleChoice_El);
get_items_GIs_multipleChoice_div.appendChild(getItemsMultipleChoiceBtn.render());

// getValue()
let get_value_GV_multipleChoice = new MultipleChoice({
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

function getValueMultipleChoice() {
    let items = get_value_GV_multipleChoice.getValue();
    alert(items);
}

let getValueMulChoiceBtn = new Button({
    text: 'Get Value For MultipleChoice Button',
    type: 'normal',
    isVisible: true,
});
getValueMulChoiceBtn.on('click', getValueMultipleChoice);

let get_value_GV_multipleChoice_div = document.createElement('div');
get_value_GV_multipleChoice_div.appendChild(get_value_GV_multipleChoice_El);
get_value_GV_multipleChoice_div.appendChild(getValueMulChoiceBtn.render());

// setValue()
let set_value_SV_multipleChoice = new MultipleChoice({
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

// disableItem
let set_disable_item_SDI_multipleChoice = new MultipleChoice({
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

// enableItem()
let set_enable_item_SEI_multipleChoice = new MultipleChoice({
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

// show()
let show_multipleChoice = new MultipleChoice({
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

// hide()
let hide_multipleChoice = new MultipleChoice({
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

// disable()
let disable_multipleChoice = new MultipleChoice({
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

// enable()
let enable_multipleChoice = new MultipleChoice({
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

// on - function
let on_function_multipleChoice = new MultipleChoice({
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

on_function_multipleChoice.on('change', function (event) {
    alert('on_function_multipleChoice has been changed');
});

// on - trigger
let on_trigger_multipleChoice = new MultipleChoice({
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

function triggerChange() {
    alert('on_trigger_multipleChoice has been changed');
}
on_trigger_multipleChoice.on('change', triggerChange);

export default {
    cons_without_value_CWV_mulChoice_El,
    cons_full_option_CFO_mulChoice_El,
    cons_with_only_value_CWOV_mulChoice_El,
    add_item_full_value_AIFV_mulChoice_div,
    add_item_invi_AII_mulChoice_div,
    add_item_only_value_AIOV_mulChoice_div,
    add_item_without_value_AIWVM_mulChoice_div,
    remove_item_RI_multipleChoice_div,
    get_item_GI_multipleChoice_div,
    get_items_GIs_multipleChoice_div,
    get_value_GV_multipleChoice_div,
    set_value_SV_multipleChoice_El,
    set_disable_item_SDI_multipleChoice_El,
    set_enable_item_SEI_multipleChoice_El,
    show_MulChoice_El,
    hide_MulChoice_El,
    disable_MulChoice_El,
    enable_MulChoice_El,
    on_function_MulChoice_El,
    on_trigger_MulChoice_El
}