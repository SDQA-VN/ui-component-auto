import {Dropdown, Button} from '@kintone/kintone-ui-component/esm/js';


//UI
let check_UI_dropdown = new Dropdown({
    items: [
        {
            label: 'check UI Default Item',
            value: 'check UI Default Item',
            isDisabled: true
        },
        {
            label: 'check UI Item 2',
            value: 'check UI Item 2',
            isDisabled: false
        },
        {
            label: 'check UI Item 3',
            value: 'check UI Item 3',
            isDisabled: false
        },
    ],
    value: 'check UI Item 2'
});
let check_UI_dropdown_El = check_UI_dropdown.render();
check_UI_dropdown_El.id = 'check-UI-dropdown-id';

let getStateOfUIItemsBtn = new Button({
    text: 'Get State Of UI Items Button',
    type: 'normal',
    isVisible: true,
});
let getStateOfUIItemsBtnEl = getStateOfUIItemsBtn.render();
getStateOfUIItemsBtnEl.id = "getStateOfUIItemsBtnEl";

function getStateOfUIItemsFunc() {
    let getItems = check_UI_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getStateOfUIItemsBtn.on('click', getStateOfUIItemsFunc);

let check_UI_dropdown_div = document.createElement('div');
check_UI_dropdown_div.appendChild(check_UI_dropdown_El);
check_UI_dropdown_div.appendChild(getStateOfUIItemsBtnEl);

// UI - not have items
let check_UI_not_have_item_dropdown = new Dropdown({
    items: [
    ],
});
let check_UI_not_have_item_dropdown_El = check_UI_not_have_item_dropdown.render();
check_UI_not_have_item_dropdown_El.id = 'check-UI-not-have-item-dropdown-id';

let getStateOfNotHaveItemsBtn = new Button({
    text: 'Get State Of UI Not Have Items Button',
    type: 'normal',
    isVisible: true,
});
let getStateOfNotHaveItemsBtnEl = getStateOfNotHaveItemsBtn.render();
getStateOfNotHaveItemsBtnEl.id = "getStateOfNotHaveItemsBtnEl";

function getStateOfNotHaveItemsFunc() {
    let getItems = check_UI_not_have_item_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getStateOfNotHaveItemsBtn.on('click', getStateOfNotHaveItemsFunc);

let check_UI_not_have_item_dropdown_div = document.createElement('div');
check_UI_not_have_item_dropdown_div.appendChild(check_UI_not_have_item_dropdown_El);
check_UI_not_have_item_dropdown_div.appendChild(getStateOfNotHaveItemsBtnEl);

//Hover on item
let check_hover_dropdown = new Dropdown({
    items: [
        {
            label: 'check UI Default Item',
            value: 'check UI Default Item',
            isDisabled: true
        },
        {
            label: 'check UI Item 2',
            value: 'check UI Item 2',
            isDisabled: false
        },
        {
            label: 'check UI Item 3',
            value: 'check UI Item 3',
            isDisabled: false
        },
    ]
});
let check_hover_dropdown_El = check_hover_dropdown.render();
check_hover_dropdown_El.id = 'check-hover-dropdown-id';

//Operation
let operation_not_displayed_content_ONDC_dropdown = new Dropdown({
    items: [
        {
            label: 'ONDC_Item_Dropdown_Dropdown_1',
            value: 'ONDC_Item_Dropdown_1',
            isDisabled: true
        },
        {
            label: 'ONDC_Item_Dropdown_2',
            value: 'ONDC_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'ONDC_Item_Dropdown_2'
});
let operation_not_displayed_content_ONDC_dropdownEl = operation_not_displayed_content_ONDC_dropdown.render();
operation_not_displayed_content_ONDC_dropdownEl.id = 'operation_not_displayed_content_ONDC_dropdownEl';

// Operation - Verify the main area display blank if no selected item
let operation_no_selected_displayed_blank_ONSDB_dropdown = new Dropdown({
    items: [
        {
            label: 'ONSDB_Item_Dropdown_1',
            value: 'ONSDB_Item_Dropdown_1',
            isDisabled: true
        },
        {
            label: 'ONSDB_Item_Dropdown_2',
            value: 'ONSDB_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    
});
let operation_no_selected_displayed_blank_ONSDB_dropdown_El = operation_no_selected_displayed_blank_ONSDB_dropdown.render();
operation_no_selected_displayed_blank_ONSDB_dropdown_El.id = 'ONSDB_ID';

// Operation - Verify the main area will display the selected value
let operation_default_selected_displayed_ODSD_dropdown = new Dropdown({
    items: [
        {
            label: 'ODSD_Default_Item_Dropdown',
            value: 'ODSD_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'ODSD_Item_Dropdown_2',
            value: 'ODSD_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'ODSD_Default_Item_Dropdown'
});
let operation_default_selected_displayed_ODSD_dropdown_El = operation_default_selected_displayed_ODSD_dropdown.render();
operation_default_selected_displayed_ODSD_dropdown_El.id = 'ODSD_ID';

// Operation - The content area is displayed below the main area
let operation_content_area_displayed_OCAD_dropdown = new Dropdown({
    items: [
        {
            label: 'OCAD_Default_Item_Dropdown',
            value: 'OCAD_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'OCAD_Item_Dropdown_2',
            value: 'OCAD_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'OCAD_Default_Item_Dropdown'
});
let operation_content_area_displayed_OCAD_dropdown_El = operation_content_area_displayed_OCAD_dropdown.render();
operation_content_area_displayed_OCAD_dropdown_El.id = 'OCAD_ID';

// Operation - The content area will displayed the list of predefiend item ( including disable item)
let operation_check_displayed_items_OCDI_dropdown = new Dropdown({
    items: [
        {
            label: 'OCDI_Default_Item_Dropdown',
            value: 'OCDI_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'OCDI_Item_Dropdown_2',
            value: 'OCDI_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'OCDI_Default_Item_Dropdown'
});
let operation_check_displayed_items_OCDI_dropdown_El = operation_check_displayed_items_OCDI_dropdown.render();
operation_check_displayed_items_OCDI_dropdown_El.id = 'OCDI_ID';

let getPredefinedItemBtn = new Button({
    text: 'Get Predefined Items Button',
    type: 'normal',
    isVisible: true,
});
let getPredefinedItemBtnEl = getPredefinedItemBtn.render();
getPredefinedItemBtnEl.id = 'getPredefinedItemBtnEl';

function getPredefinedItems() {
    let getItems = operation_check_displayed_items_OCDI_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getPredefinedItemBtn.on('click', getPredefinedItems);

let operation_check_displayed_items_OCDI_dropdown_div = document.createElement('div');
operation_check_displayed_items_OCDI_dropdown_div.appendChild(operation_check_displayed_items_OCDI_dropdown_El);
operation_check_displayed_items_OCDI_dropdown_div.appendChild(getPredefinedItemBtnEl);

// Operation - Click outside
let operation_choose_any_item_OCAI_dropdown = new Dropdown({
    items: [
        {
            label: 'OCAI_Default_Item_Dropdown',
            value: 'OCAI_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'OCAI_Item_Dropdown_2',
            value: 'OCAI_Item_Dropdown_2',
            isDisabled: false
        }
    ]
});
let operation_choose_any_item_OCAI_dropdown_El = operation_choose_any_item_OCAI_dropdown.render();
operation_choose_any_item_OCAI_dropdown_El.id = 'OCAI_ID';

// Render() - without value
let cons_without_value_CWV_dropdown = new Dropdown({
    items: [
        {
            label: 'CWV_Default_Item_Dropdown',
            value: 'CWV_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'CWV_Item_Dropdown_2',
            value: 'CWV_Item_Dropdown_2',
            isDisabled: false
        }
    ]
});
let cons_without_value_CWV_dropdown_El = cons_without_value_CWV_dropdown.render();
cons_without_value_CWV_dropdown_El.id = 'CWV_ID';

// Render() - full Value
let cons_full_option_CFO_dropdown = new Dropdown({
    items: [
        {
            label: 'CFO_Default_Item_Dropdown',
            value: 'CFO_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'CFO_Item_Dropdown_2',
            value: 'CFO_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'CFO_Default_Item_Dropdown',
    isDisabled: false,
    isVisible: true
});
let cons_full_option_CFO_dropdown_El = cons_full_option_CFO_dropdown.render();
cons_full_option_CFO_dropdown_El.id = 'CFO_ID';

// Render() - without value
let cons_with_only_value_CWOV_dropdown = new Dropdown({
    items: [
        {
            label: 'OCAI_Default_Item_Dropdown',
            value: 'OCAI_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'OCAI_Item_Dropdown_2',
            value: 'OCAI_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'OCAI_Default_Item_Dropdown'
});
let cons_with_only_value_CWOV_dropdown_El = cons_with_only_value_CWOV_dropdown.render();
cons_with_only_value_CWOV_dropdown_El.id = 'CWOV_ID';

// Add items - full value
let add_item_full_value_AIFV_dropdown = new Dropdown({
    items: [
        {
            label: 'AIFV_Default_Item_Dropdown',
            value: 'AIFV_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'AIFV_Item_Dropdown_2',
            value: 'AIFV_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'AIFV_Default_Item_Dropdown'
});
let add_item_full_value_AIFV_dropdown_El = add_item_full_value_AIFV_dropdown.render();
add_item_full_value_AIFV_dropdown_El.id = 'AIFV_ID';

function getAddItemDropdown() {
    let items = add_item_full_value_AIFV_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemDropdownBtn = new Button({
    text: 'Get New Added Item Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemDropdownBtnEl = getAddItemDropdownBtn.render();
getAddItemDropdownBtnEl.id = 'getAddItemDropdownBtnEl';
getAddItemDropdownBtn.on('click', getAddItemDropdown);

let add_item_full_value_AIFV_dropdown_div = document.createElement('div');
add_item_full_value_AIFV_dropdown_div.appendChild(add_item_full_value_AIFV_dropdown_El);
add_item_full_value_AIFV_dropdown_div.appendChild(getAddItemDropdownBtnEl);

// Add items - full value for invisible dropdown
let add_item_invi_AII_dropdown = new Dropdown({
    items: [
        {
            label: 'AII_Default_Item_Dropdown',
            value: 'AII_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'AII_Item_Dropdown_2',
            value: 'AII_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'AII_Default_Item_Dropdown',
    isVisible: false
});
let add_item_invi_AII_dropdown_El = add_item_invi_AII_dropdown.render();
add_item_invi_AII_dropdown_El.id = 'AIFV_ID';

function getAddItemInviDropdown() {
    let items = add_item_invi_AII_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleDropdownBtn = new Button({
    text: 'Get New Added Item For Invisible Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemInvisibleDropdownBtnEl = getAddItemInvisibleDropdownBtn.render();
getAddItemInvisibleDropdownBtnEl.id = 'getAddItemInvisibleDropdownBtnEl';
getAddItemInvisibleDropdownBtn.on('click', getAddItemInviDropdown);

let add_item_invi_AII_dropdown_div = document.createElement('div');
add_item_invi_AII_dropdown_div.appendChild(add_item_invi_AII_dropdown_El);
add_item_invi_AII_dropdown_div.appendChild(getAddItemInvisibleDropdownBtnEl);

// // Add item - only item.value
let add_item_only_value_AIOV_dropdown = new Dropdown({
    items: [
        {
            label: 'AIOV_Default_Item_Dropdown',
            value: 'AIOV_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'AIOV_Item_Dropdown_2',
            value: 'AIOV_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'AIOV_Default_Item_Dropdown'
});
let add_item_only_value_AIOV_dropdown_El = add_item_only_value_AIOV_dropdown.render();
add_item_only_value_AIOV_dropdown_El.id = 'AIOV_ID';

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueDropdownBtn = new Button({
    text: 'Get New Added Item With Only Value Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemOnlyValueDropdownBtnEl = getAddItemOnlyValueDropdownBtn.render();
getAddItemOnlyValueDropdownBtnEl.id = 'getAddItemOnlyValueDropdownBtnEl';
getAddItemOnlyValueDropdownBtn.on('click', getAddItemOnlyValue);

let add_item_only_value_AIOV_dropdown_div = document.createElement('div');
add_item_only_value_AIOV_dropdown_div.appendChild(add_item_only_value_AIOV_dropdown_El);
add_item_only_value_AIOV_dropdown_div.appendChild(getAddItemOnlyValueDropdownBtnEl);

// Add item - Verify the added item
let verify_added_item_VAI_dropdown = new Dropdown({
    items: [
        {
            label: 'VAI_Default_Item_Dropdown',
            value: 'VAI_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'VAI_Item_Dropdown_2',
            value: 'VAI_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'VAI_Default_Item_Dropdown'
});
let verify_added_item_VAI_dropdown_El = verify_added_item_VAI_dropdown.render();
verify_added_item_VAI_dropdown_El.id = 'VAI_ID';

function verifyAddedItem() {
    let items = verify_added_item_VAI_dropdown.getItems();
    let getLatAlertString = [];
    for (let i = 0; i < items.length; i++ ){
        getLatAlertString.push(JSON.stringify(items[i]));
    }
    alert(getLatAlertString[getLatAlertString.length - 1]);
}

let verifyAddedItemBtn = new Button({
    text: 'Verify The Added Item Button',
    type: 'normal',
    isVisible: true,
});
let verifyAddedItemBtnEl = verifyAddedItemBtn.render();
verifyAddedItemBtnEl.id = 'verifyAddedItemBtnEl';
verifyAddedItemBtn.on('click', verifyAddedItem);
let isDisabledOrNot;
function verifyAddedItemDisable() {
  
    // let aTags = document.getElementsByTagName("span");
    // let found = '';
    // let addedItemText = '';
    // for (let i = 0; i < aTags.length; i++) {
    //     if (aTags[i].textContent == searchText) {
    //         found = aTags[i];
    //     }
    // }
    // isDisabledOrNot = found.parentElement.hasAttribute('disabled');
    // alert(isDisabledOrNot);
    let lastItem = verify_added_item_VAI_dropdown.getItems();
    let last_El = lastItem[lastItem.length - 1];
    alert(last_El.isDisabled)
}

let verifyAddedItemDisableBtn = new Button({
    text: 'Verify The Added Item Disabled Default Button',
    type: 'normal',
    isVisible: true,
});
let verifyAddedItemDisableBtnEl = verifyAddedItemDisableBtn.render();
verifyAddedItemDisableBtnEl.id = 'verifyAddedItemDisableBtnEl';
verifyAddedItemDisableBtn.on('click', function (event) {
    verifyAddedItemDisable();
});

let verify_added_item_VAI_dropdown_div = document.createElement('div');
verify_added_item_VAI_dropdown_div.appendChild(verify_added_item_VAI_dropdown_El);
verify_added_item_VAI_dropdown_div.appendChild(verifyAddedItemBtnEl);
verify_added_item_VAI_dropdown_div.appendChild(verifyAddedItemDisableBtnEl);

//  RemoveItem()
let remove_item_RI_dropdown = new Dropdown({
    items: [
        {
            label: 'RI_Default_Item_Dropdown',
            value: 'RI_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'RI_Item_Dropdown_2',
            value: 'RI_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'RI_Default_Item_Dropdown'
});
let remove_item_RI_dropdown_El = remove_item_RI_dropdown.render();
remove_item_RI_dropdown_El.id = 'RI_ID';

// getItems()
let get_items_GIs_dropdown = new Dropdown({
    items: [
        {
            label: 'GIs_Default_Item_Dropdown',
            value: 'GIs_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'GIs_Item_Dropdown_2',
            value: 'GIs_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'GIs_Default_Item_Dropdown',
    isVisible: false
});
let get_items_GIs_dropdown_El = get_items_GIs_dropdown.render();
get_items_GIs_dropdown_El.id = 'GIs_ID';

function getItemsDropdown() {
    let items = get_items_GIs_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getItemsDropdownBtn = new Button({
    text: 'Get Items For Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getItemsDropdownBtnEl = getItemsDropdownBtn.render();
getItemsDropdownBtnEl.id = 'getItemsDropdownBtnEl';
getItemsDropdownBtn.on('click', getItemsDropdown);

let get_items_GIs_dropdown_div = document.createElement('div');
get_items_GIs_dropdown_div.appendChild(get_items_GIs_dropdown_El);
get_items_GIs_dropdown_div.appendChild(getItemsDropdownBtnEl);

// getValue()
let get_value_GV_dropdown = new Dropdown({
    items: [
        {
            label: 'GV_Default_Item_Dropdown',
            value: 'GV_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'GV_Item_Dropdown_2',
            value: 'GV_Item_Dropdown_2',
            isDisabled: false
        }
    ],
    value: 'GV_Default_Item_Dropdown',
    isVisible: true
});
let get_value_GV_dropdown_El = get_value_GV_dropdown.render();
get_value_GV_dropdown_El.id = 'GV_ID';

function getValueDropdown() {
    let items = get_value_GV_dropdown.getValue();
    alert(items);
}

let getValueDropdownBtn = new Button({
    text: 'Get Value For Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getValueDropdownBtnEl = getValueDropdownBtn.render();
getValueDropdownBtnEl.id = 'getValueDropdownBtnEl';
getValueDropdownBtn.on('click', getValueDropdown);

let get_value_GV_dropdown_div = document.createElement('div');
get_value_GV_dropdown_div.appendChild(get_value_GV_dropdown_El);
get_value_GV_dropdown_div.appendChild(getValueDropdownBtnEl);

// setValue()
let set_value_SV_dropdown = new Dropdown({
    items: [
        {
            label: 'SV_Default_Item_Dropdown',
            value: 'SV_Default_Item_Dropdown',
            isDisabled: true
        },
        {
            label: 'SV_Item_Dropdown_Disable',
            value: 'SV_Item_Dropdown_Disable',
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
let set_value_SV_dropdown_El = set_value_SV_dropdown.render();
set_value_SV_dropdown_El.id = 'SV_ID';

// disableItem
let set_disable_item_SDI_dropdown = new Dropdown({
    items: [
        {
            label: 'SDI_Default_Item_Dropdown',
            value: 'SDI_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'SDI_Item_Dropdown_Disable',
            value: 'SDI_Item_Dropdown_Disable',
            isDisabled: true
        }
    ],
    value: 'SDI_Default_Item_Dropdown',
    isVisible: true
});
let set_disable_item_SDI_dropdown_El = set_disable_item_SDI_dropdown.render();
set_disable_item_SDI_dropdown_El.id = 'SDI_ID';
let buttonDisableDropdown = document.createElement('button');
buttonDisableDropdown.innerHTML='Disable Dropdown';
buttonDisableDropdown.addEventListener('click',function(){
   set_disable_item_SDI_dropdown.disableItem('SDI_Default_Item_Dropdown');
   set_disable_item_SDI_dropdown.disableItem('SDI_Item_Dropdown_Disable');
})
let set_disable_item_SDI_dropdown_div = document.createElement('div');
set_disable_item_SDI_dropdown_div.appendChild(set_disable_item_SDI_dropdown_El);
set_disable_item_SDI_dropdown_div.appendChild(buttonDisableDropdown);

// enableItem()
let set_enable_item_SEI_dropdown = new Dropdown({
    items: [
        {
            label: 'SEI_Default_Item_Dropdown',
            value: 'SEI_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'SEI_Item_Dropdown_Disable',
            value: 'SEI_Item_Dropdown_Disable',
            isDisabled: true
        }
    ],
    value: 'SEI_Default_Item_Dropdown',
    isVisible: true
});
let set_enable_item_SEI_dropdown_El = set_enable_item_SEI_dropdown.render();
set_enable_item_SEI_dropdown_El.id = 'SEI_ID';
let buttonEnableDropdown = document.createElement('button');
buttonEnableDropdown.innerHTML='Enable Dropdown';
buttonEnableDropdown.addEventListener('click',function(){
    set_enable_item_SEI_dropdown.enableItem('SEI_Default_Item_Dropdown');
    set_enable_item_SEI_dropdown.enableItem('SEI_Item_Dropdown_Disable');
})
let set_enable_item_SEI_dropdown_div = document.createElement('div');
set_enable_item_SEI_dropdown_div.appendChild(set_enable_item_SEI_dropdown_El);
set_enable_item_SEI_dropdown_div.appendChild(buttonEnableDropdown);

// show()
let show_dropdown = new Dropdown({
    items: [
        {
            label: 'Show_Default_Item_Dropdown',
            value: 'Show_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'Show_Item_Dropdown_1',
            value: 'Show_Item_Dropdown_1',
            isDisabled: true
        }
    ],
    value: 'Show_Item_Dropdown_1',
    isVisible: false
});
let show_dropdown_El = show_dropdown.render();
show_dropdown_El.id = 'show_ID';

// hide()
let hide_dropdown = new Dropdown({
    items: [
        {
            label: 'Hide_Default_Item_Dropdown',
            value: 'Hide_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'Hide_Item_Dropdown_1',
            value: 'Hide_Item_Dropdown_1',
            isDisabled: true
        }
    ],
    value: 'Hide_Default_Item_Dropdown',
    isVisible: true,
    isDisabled: false
});
let hide_dropdown_El = hide_dropdown.render();
hide_dropdown_El.id = 'hide_ID';

// disable()
let disable_dropdown = new Dropdown({
    items: [
        {
            label: 'disable_Default_Item_Dropdown',
            value: 'disable_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'disable_Item_Dropdown_1',
            value: 'disable_Item_Dropdown_1',
            isDisabled: true
        }
    ],
    value: 'disable_Default_Item_Dropdown',
    isVisible: true,
    isDisabled: false
});
let disable_dropdown_El = disable_dropdown.render();
disable_dropdown_El.id = 'disable_ID';

// enable()
let enable_dropdown = new Dropdown({
    items: [
        {
            label: 'enable_Default_Item_Dropdown',
            value: 'enable_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'enable_Item_Dropdown_1',
            value: 'enable_Item_Dropdown_1',
            isDisabled: true
        }
    ],
    value: 'enable_Default_Item_Dropdown',
    isVisible: true,
    isDisabled: true
});
let enable_dropdown_El = enable_dropdown.render();
enable_dropdown_El.id = 'enable_ID';

// on - function
let on_function_dropdown = new Dropdown({
    items: [
        {
            label: 'on_function_Default_Item_Dropdown',
            value: 'on_function_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'on_function_Item_Dropdown_1',
            value: 'on_function_Item_Dropdown_1',
            isDisabled: false
        }
    ],
    value: 'on_function_Default_Item_Dropdown',
    isVisible: true,
    isDisabled: false
});
let on_function_dropdown_El = on_function_dropdown.render();
on_function_dropdown_El.id = 'on_function_ID';

on_function_dropdown.on('change', function (event) {
    alert('on_function_dropdown has been changed');
});

// on - trigger
let on_trigger_dropdown = new Dropdown({
    items: [
        {
            label: 'on_trigger_Default_Item_Dropdown',
            value: 'on_trigger_Default_Item_Dropdown',
            isDisabled: false
        },
        {
            label: 'on_trigger_Item_Dropdown_1',
            value: 'on_trigger_Item_Dropdown_1',
            isDisabled: false
        }
    ],
    value: 'on_trigger_Default_Item_Dropdown',
    isVisible: true,
    isDisabled: false
});
let on_trigger_dropdown_El = on_trigger_dropdown.render();
on_trigger_dropdown_El.id = 'on_trigger_ID';

function triggerChange() {
    alert('on_trigger_dropdown has been changed');
}
on_trigger_dropdown.on('change', triggerChange);

export default {
    check_UI_dropdown_div,
    check_UI_not_have_item_dropdown_div,
    check_hover_dropdown_El,
    operation_not_displayed_content_ONDC_dropdownEl,
    operation_no_selected_displayed_blank_ONSDB_dropdown_El,
    operation_default_selected_displayed_ODSD_dropdown_El,
    operation_content_area_displayed_OCAD_dropdown_El,
    operation_check_displayed_items_OCDI_dropdown_div,
    operation_choose_any_item_OCAI_dropdown_El,
    cons_without_value_CWV_dropdown_El,
    cons_full_option_CFO_dropdown_El,
    cons_with_only_value_CWOV_dropdown_El,
    add_item_full_value_AIFV_dropdown_div,
    add_item_invi_AII_dropdown_div,
    add_item_only_value_AIOV_dropdown_div,
    verify_added_item_VAI_dropdown_div,
    remove_item_RI_dropdown_El,
    get_items_GIs_dropdown_div,
    get_value_GV_dropdown_div,
    set_value_SV_dropdown_El,
    set_disable_item_SDI_dropdown_div,
    set_enable_item_SEI_dropdown_div,
    show_dropdown_El,
    hide_dropdown_El,
    disable_dropdown_El,
    enable_dropdown_El,
    on_function_dropdown_El,
    on_trigger_dropdown_El
}