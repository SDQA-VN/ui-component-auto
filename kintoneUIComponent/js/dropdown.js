// //kintone-ui-component Dropdown
// //https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82903210/kintone-ui-component+Dropdown
// 'use strict';

// //let body = document.getElementsByTagName("BODY")[0];

//UI
let check_UI_dropdown = new kintoneUIComponent.Dropdown({
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
let check_UI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 1)
check_UI_dropdown_cell.appendChild(check_UI_dropdown_El);

let getStateOfUIItemsBtn = new kintoneUIComponent.Button({
    text: 'Get State Of UI Items Button',
    type: 'normal',
    isVisible: true,
});
let getStateOfUIItemsBtnEl = getStateOfUIItemsBtn.render();
getStateOfUIItemsBtnEl.id = "getStateOfUIItemsBtnEl";
check_UI_dropdown_cell.appendChild(getStateOfUIItemsBtnEl);

function getStateOfUIItemsFunc() {
    let getItems = check_UI_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getStateOfUIItemsBtn.on('click', getStateOfUIItemsFunc);

// UI - not have items
let check_UI_not_have_item_dropdown = new kintoneUIComponent.Dropdown({
    items: [
    ],
});
let check_UI_not_have_item_dropdown_El = check_UI_not_have_item_dropdown.render();
check_UI_not_have_item_dropdown_El.id = 'check-UI-not-have-item-dropdown-id';
let check_UI_not_have_item_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 2);
check_UI_not_have_item_dropdown_cell.appendChild(check_UI_not_have_item_dropdown_El);

let getStateOfNotHaveItemsBtn = new kintoneUIComponent.Button({
    text: 'Get State Of UI Not Have Items Button',
    type: 'normal',
    isVisible: true,
});
let getStateOfNotHaveItemsBtnEl = getStateOfNotHaveItemsBtn.render();
getStateOfNotHaveItemsBtnEl.id = "getStateOfNotHaveItemsBtnEl";
check_UI_not_have_item_dropdown_cell.appendChild(getStateOfNotHaveItemsBtnEl);

function getStateOfNotHaveItemsFunc() {
    let getItems = check_UI_not_have_item_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getStateOfNotHaveItemsBtn.on('click', getStateOfNotHaveItemsFunc);

//Hover on item
let check_hover_dropdown = new kintoneUIComponent.Dropdown({
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
let check_hover_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 3);
check_hover_dropdown_cell.appendChild(check_hover_dropdown_El);

//Operation
let operation_not_displayed_content_ONDC_dropdown = new kintoneUIComponent.Dropdown({
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
let operation_not_displayed_content_ONDC_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 4);
operation_not_displayed_content_ONDC_dropdown_cell.appendChild(operation_not_displayed_content_ONDC_dropdownEl); 

// Operation - Verify the main area display blank if no selected item
let operation_no_selected_displayed_blank_ONSDB_dropdown = new kintoneUIComponent.Dropdown({
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
let operation_no_selected_displayed_blank_ONSDB_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 5);
operation_no_selected_displayed_blank_ONSDB_dropdown_cell.appendChild(operation_no_selected_displayed_blank_ONSDB_dropdown_El);

// Operation - Verify the main area will display the selected value
let operation_default_selected_displayed_ODSD_dropdown = new kintoneUIComponent.Dropdown({
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
operation_default_selected_displayed_ODSD_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 6);
operation_default_selected_displayed_ODSD_dropdown_cell.appendChild(operation_default_selected_displayed_ODSD_dropdown_El);

// Operation - The content area is displayed below the main area
let operation_content_area_displayed_OCAD_dropdown = new kintoneUIComponent.Dropdown({
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
let operation_content_area_displayed_OCAD_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 7);
operation_content_area_displayed_OCAD_dropdown_cell.appendChild(operation_content_area_displayed_OCAD_dropdown_El);

// Operation - The content area will displayed the list of predefiend item ( including disable item)
let operation_check_displayed_items_OCDI_dropdown = new kintoneUIComponent.Dropdown({
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
let operation_check_displayed_items_OCDI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 8);
operation_check_displayed_items_OCDI_dropdown_cell.appendChild(operation_check_displayed_items_OCDI_dropdown_El);

let getPredefinedItemBtn = new kintoneUIComponent.Button({
    text: 'Get Predefined Items Button',
    type: 'normal',
    isVisible: true,
});
let getPredefinedItemBtnEl = getPredefinedItemBtn.render();
getPredefinedItemBtnEl.id = 'getPredefinedItemBtnEl';
operation_check_displayed_items_OCDI_dropdown_cell.appendChild(getPredefinedItemBtnEl);

function getPredefinedItems() {
    let getItems = operation_check_displayed_items_OCDI_dropdown.getItems();
    alert(JSON.stringify(getItems));
}
getPredefinedItemBtn.on('click', getPredefinedItems);

// Operation - Click outside
let operation_choose_any_item_OCAI_dropdown = new kintoneUIComponent.Dropdown({
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
let operation_choose_any_item_OCAI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 9);
operation_choose_any_item_OCAI_dropdown_cell.appendChild(operation_choose_any_item_OCAI_dropdown_El);

// Render() - without value
let cons_without_value_CWV_dropdown = new kintoneUIComponent.Dropdown({
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
let cons_without_value_CWV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 10);
cons_without_value_CWV_dropdown_cell.appendChild(cons_without_value_CWV_dropdown_El);

// Render() - full Value
let cons_full_option_CFO_dropdown = new kintoneUIComponent.Dropdown({
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
let cons_full_option_CFO_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 11);
cons_full_option_CFO_dropdown_cell.appendChild(cons_full_option_CFO_dropdown_El);

// Render() - without value
let cons_with_only_value_CWOV_dropdown = new kintoneUIComponent.Dropdown({
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
let cons_with_only_value_CWOV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 12);
cons_with_only_value_CWOV_dropdown_cell.appendChild(cons_with_only_value_CWOV_dropdown_El);

// // Add items - full value
let add_item_full_value_AIFV_dropdown = new kintoneUIComponent.Dropdown({
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
let add_item_full_value_AIFV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 13);
add_item_full_value_AIFV_dropdown_cell.appendChild(add_item_full_value_AIFV_dropdown_El);

function getAddItemDropdown() {
    let items = add_item_full_value_AIFV_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemDropdownBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemDropdownBtnEl = getAddItemDropdownBtn.render();
getAddItemDropdownBtnEl.id = 'getAddItemDropdownBtnEl';
add_item_full_value_AIFV_dropdown_cell.appendChild(getAddItemDropdownBtnEl);
getAddItemDropdownBtn.on('click', getAddItemDropdown);

// Add items - full value for invisible dropdown
let add_item_invi_AII_dropdown = new kintoneUIComponent.Dropdown({
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
let add_item_invi_AII_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 14);
add_item_invi_AII_dropdown_cell.appendChild(add_item_invi_AII_dropdown_El);

function getAddItemInviDropdown() {
    let items = add_item_invi_AII_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemInvisibleDropdownBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item For Invisible Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemInvisibleDropdownBtnEl = getAddItemInvisibleDropdownBtn.render();
getAddItemInvisibleDropdownBtnEl.id = 'getAddItemInvisibleDropdownBtnEl';
add_item_invi_AII_dropdown_cell.appendChild(getAddItemInvisibleDropdownBtnEl);
getAddItemInvisibleDropdownBtn.on('click', getAddItemInviDropdown);

// // Add item - only item.value
let add_item_only_value_AIOV_dropdown = new kintoneUIComponent.Dropdown({
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
let add_item_only_value_AIOV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 15);
add_item_only_value_AIOV_dropdown_cell.appendChild(add_item_only_value_AIOV_dropdown_El);

function getAddItemOnlyValue() {
    let items = add_item_only_value_AIOV_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getAddItemOnlyValueDropdownBtn = new kintoneUIComponent.Button({
    text: 'Get New Added Item With Only Value Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getAddItemOnlyValueDropdownBtnEl = getAddItemOnlyValueDropdownBtn.render();
getAddItemOnlyValueDropdownBtnEl.id = 'getAddItemOnlyValueDropdownBtnEl';
add_item_only_value_AIOV_dropdown_cell.appendChild(getAddItemOnlyValueDropdownBtnEl);
getAddItemOnlyValueDropdownBtn.on('click', getAddItemOnlyValue);

// Add item - Verify the added item
let verify_added_item_VAI_dropdown = new kintoneUIComponent.Dropdown({
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
let verify_added_item_VAI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 16);
verify_added_item_VAI_dropdown_cell.appendChild(verify_added_item_VAI_dropdown_El);

function verifyAddedItem() {
    let items = verify_added_item_VAI_dropdown.getItems();
    let getLatAlertString = [];
    for (let i = 0; i < items.length; i++ ){
        getLatAlertString.push(JSON.stringify(items[i]));
    }
    alert(getLatAlertString[getLatAlertString.length - 1]);
}

let verifyAddedItemBtn = new kintoneUIComponent.Button({
    text: 'Verify The Added Item Button',
    type: 'normal',
    isVisible: true,
});
let verifyAddedItemBtnEl = verifyAddedItemBtn.render();
verifyAddedItemBtnEl.id = 'verifyAddedItemBtnEl';
verify_added_item_VAI_dropdown_cell.appendChild(verifyAddedItemBtnEl);
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

let verifyAddedItemDisableBtn = new kintoneUIComponent.Button({
    text: 'Verify The Added Item Disabled Default Button',
    type: 'normal',
    isVisible: true,
});
let verifyAddedItemDisableBtnEl = verifyAddedItemDisableBtn.render();
verifyAddedItemDisableBtnEl.id = 'verifyAddedItemDisableBtnEl';
verify_added_item_VAI_dropdown_cell.appendChild(verifyAddedItemDisableBtnEl);
verifyAddedItemDisableBtn.on('click', function (event) {
    verifyAddedItemDisable();
});

//  RemoveItem()
let remove_item_RI_dropdown = new kintoneUIComponent.Dropdown({
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
let remove_item_RI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 17);
remove_item_RI_dropdown_cell.appendChild(remove_item_RI_dropdown_El);

// getItems()
let get_items_GIs_dropdown = new kintoneUIComponent.Dropdown({
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
let get_items_GIs_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 18);
get_items_GIs_dropdown_cell.appendChild(get_items_GIs_dropdown_El);
function getItemsDropdown() {
    let items = get_items_GIs_dropdown.getItems();
    alert(JSON.stringify(items));
}

let getItemsDropdownBtn = new kintoneUIComponent.Button({
    text: 'Get Items For Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getItemsDropdownBtnEl = getItemsDropdownBtn.render();
getItemsDropdownBtnEl.id = 'getItemsDropdownBtnEl';
get_items_GIs_dropdown_cell.appendChild(getItemsDropdownBtnEl);
getItemsDropdownBtn.on('click', getItemsDropdown);

// getValue()
let get_value_GV_dropdown = new kintoneUIComponent.Dropdown({
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
let get_value_GV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 19);
get_value_GV_dropdown_cell.appendChild(get_value_GV_dropdown_El);

function getValueDropdown() {
    let items = get_value_GV_dropdown.getValue();
    alert(items);
}

let getValueDropdownBtn = new kintoneUIComponent.Button({
    text: 'Get Value For Dropdown Button',
    type: 'normal',
    isVisible: true,
});
let getValueDropdownBtnEl = getValueDropdownBtn.render();
getValueDropdownBtnEl.id = 'getValueDropdownBtnEl';
get_value_GV_dropdown_cell.appendChild(getValueDropdownBtnEl);
getValueDropdownBtn.on('click', getValueDropdown);

// setValue()
let set_value_SV_dropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'SV_Default_Item_Dropdown',
            value: 'SV_Default_Item_Dropdown',
            isDisabled: false
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
let buttonSetValueDropdown = document.createElement('button');
buttonSetValueDropdown.innerHTML='Set Value of Dropdown';
buttonSetValueDropdown.addEventListener('click',function(){
    set_value_SV_dropdown.setValue('SV_Default_Item_Dropdown');
})
let buttonSetValueDisabledDropdown = document.createElement('button');
buttonSetValueDisabledDropdown.innerHTML='Set Disabled Value of Dropdown';
buttonSetValueDisabledDropdown.addEventListener('click',function(){
    set_value_SV_dropdown.setValue('SV_Item_Dropdown_Disable');
})

let buttonSetValueBlankDropdown = document.createElement('button');
buttonSetValueBlankDropdown.innerHTML='Set Blank Value of Dropdown';
buttonSetValueBlankDropdown.addEventListener('click',function(){
    set_value_SV_dropdown.setValue('');
})
let set_value_SV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 20);
set_value_SV_dropdown_cell.appendChild(set_value_SV_dropdown_El);
set_value_SV_dropdown_cell.appendChild(buttonSetValueDropdown);
set_value_SV_dropdown_cell.appendChild(buttonSetValueDisabledDropdown);
set_value_SV_dropdown_cell.appendChild(buttonSetValueBlankDropdown);

// disableItem
let set_disable_item_SDI_dropdown = new kintoneUIComponent.Dropdown({
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
let set_disable_item_SDI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 21);
set_disable_item_SDI_dropdown_cell.appendChild(set_disable_item_SDI_dropdown_El);
set_disable_item_SDI_dropdown_cell.appendChild(buttonDisableDropdown);

// enableItem()
let set_enable_item_SEI_dropdown = new kintoneUIComponent.Dropdown({
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
let set_enable_item_SEI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 22);
set_enable_item_SEI_dropdown_cell.appendChild(set_enable_item_SEI_dropdown_El);
set_enable_item_SEI_dropdown_cell.appendChild(buttonEnableDropdown);

// show()
let show_dropdown = new kintoneUIComponent.Dropdown({
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
let show_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 23);
show_dropdown_cell.appendChild(show_dropdown_El);

// hide()
let hide_dropdown = new kintoneUIComponent.Dropdown({
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
let hide_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 24);
hide_dropdown_cell.appendChild(hide_dropdown_El);

// disable()
let disable_dropdown = new kintoneUIComponent.Dropdown({
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
let disable_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 25);
disable_dropdown_cell.appendChild(disable_dropdown_El);

// enable()
let enable_dropdown = new kintoneUIComponent.Dropdown({
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
let enable_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 26);
enable_dropdown_cell.appendChild(enable_dropdown_El);

// on - function
let on_function_dropdown = new kintoneUIComponent.Dropdown({
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
let on_function_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 27);
on_function_dropdown_cell.appendChild(on_function_dropdown_El);

on_function_dropdown.on('change', function (event) {
    alert('on_function_dropdown has been changed');
});

// on - trigger
let on_trigger_dropdown = new kintoneUIComponent.Dropdown({
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
let on_trigger_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 28);
on_trigger_dropdown_cell.appendChild(on_trigger_dropdown_El);

function triggerChange() {
    alert('on_trigger_dropdown has been changed');
}
on_trigger_dropdown.on('change', triggerChange);