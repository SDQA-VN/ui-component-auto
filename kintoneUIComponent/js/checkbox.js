//kintone-ui-component Checkbox
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82903214/kintone-ui-component+CheckBox
'use strict';

// check UI
let UICheckbox = new kintoneUIComponent.CheckBox({
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
let UICheckboxEl = document.createElement('div')
UICheckboxEl.setAttribute("id", "ui-checkbox");
UICheckboxEl.appendChild(UICheckbox.render())
let UICheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 1);
UICheckboxCell.appendChild(UICheckboxEl);

// Render() - without value
let consWithoutValueCheckbox = new kintoneUIComponent.CheckBox({
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
let consWithoutValueCheckboxEl = document.createElement('div')
consWithoutValueCheckboxEl.setAttribute("id", "cons-without-value-checkbox");
consWithoutValueCheckboxEl.appendChild(consWithoutValueCheckbox.render())
let consWithoutValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 2);
consWithoutValueCheckboxCell.appendChild(consWithoutValueCheckboxEl)

// Render() - full Value
let consFullOptionCheckbox = new kintoneUIComponent.CheckBox({
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
let consFullOptionCheckboxEl = document.createElement('div')
consFullOptionCheckboxEl.setAttribute("id", "cons-full-option-checkbox");
consFullOptionCheckboxEl.appendChild(consFullOptionCheckbox.render())
let consFullOptionCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 3);
consFullOptionCheckboxCell.appendChild(consFullOptionCheckboxEl);

// Render() - with only value
let consWithOnlyOptionValueCheckbox = new kintoneUIComponent.CheckBox({
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
let consWithOnlyOptionValueCheckboxEl = document.createElement('div')
consWithOnlyOptionValueCheckboxEl.setAttribute("id", "cons-only-value-checkbox");
consWithOnlyOptionValueCheckboxEl.appendChild(consWithOnlyOptionValueCheckbox.render())
let consWithOnlyOptionValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 4);
consWithOnlyOptionValueCheckboxCell.appendChild(consWithOnlyOptionValueCheckboxEl);

// Add items - full value
let addItemFullValueCheckbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'Item full value disabled',
            value: 'Item full value disabled',
            isDisabled: true
        },
        {
            label: 'Item full value enbaled',
            value: 'Item full value enbaled',
            isDisabled: false
        }
    ],
    value: ['Item full value disabled']
});
let addItemFullValueCheckboxEl = document.createElement('div')
addItemFullValueCheckboxEl.setAttribute("id", "add-items-full-value-checkbox");
let buttonAddItemsFullValueCheckbox = document.createElement('button');
buttonAddItemsFullValueCheckbox.innerHTML = 'Add Items Full Value';
buttonAddItemsFullValueCheckbox.addEventListener('click', function () {
    addItemFullValueCheckbox.addItem({
        label: 'New item full value enabled',
        value: 'New item full value enabled',
        isDisabled: false
    });
    addItemFullValueCheckbox.addItem({
        label: 'New item full value disabled',
        value: 'New item full value disabled',
        isDisabled: true
    });
})
addItemFullValueCheckboxEl.appendChild(addItemFullValueCheckbox.render())
addItemFullValueCheckboxEl.appendChild(buttonAddItemsFullValueCheckbox)
let addItemFullValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 5);
addItemFullValueCheckboxCell.appendChild(addItemFullValueCheckboxEl)


// Add items - full value for invisible chkbox
let addItemInvisibleCheckbox = new kintoneUIComponent.CheckBox({
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
let addItemInvisibleCheckboxEl = document.createElement('div')
addItemInvisibleCheckboxEl.setAttribute("id", "add-item-invisible-checkbox");
let addItemInvisibleCheckboxButton = document.createElement('button');
addItemInvisibleCheckboxButton.innerHTML = 'Add Item Invisible Checkbox';
addItemInvisibleCheckboxButton.addEventListener('click', function () {
    addItemInvisibleCheckbox.addItem({
        label: 'New Item Invisible Checkbox',
        value: 'New Item Invisible Checkbox',
        isDisabled: false
    });
})
let addItemInvisibleCheckboxShow = document.createElement('button');
addItemInvisibleCheckboxShow.innerHTML = 'Add Item Invisible Checkbox Show';
addItemInvisibleCheckboxShow.addEventListener('click', function () {
    addItemInvisibleCheckbox.show()
})
addItemInvisibleCheckboxEl.appendChild(addItemInvisibleCheckbox.render())
addItemInvisibleCheckboxEl.appendChild(addItemInvisibleCheckboxButton)
addItemInvisibleCheckboxEl.appendChild(addItemInvisibleCheckboxShow)

let addItemInvisibleCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 6);
addItemInvisibleCheckboxCell.appendChild(addItemInvisibleCheckboxEl)



// Add item - only item.value
let addItemOnlyValueCheckbox = new kintoneUIComponent.CheckBox({
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
let addItemOnlyValueCheckboxEl = document.createElement('div')
addItemOnlyValueCheckboxEl.setAttribute("id", "add-item-only-value-checkbox");
let addItemOnlyValueCheckboxButton = document.createElement('button');
addItemOnlyValueCheckboxButton.innerHTML = 'Add Item Only Value Checkbox';
addItemOnlyValueCheckboxButton.addEventListener('click', function () {
    addItemOnlyValueCheckbox.addItem({
        value: 'New Item Only Value Checkbox',
    });
})
addItemOnlyValueCheckboxEl.appendChild(addItemOnlyValueCheckbox.render())
addItemOnlyValueCheckboxEl.appendChild(addItemOnlyValueCheckboxButton)
let addItemOnlyValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 7);
addItemOnlyValueCheckboxCell.appendChild(addItemOnlyValueCheckboxEl)

// getItem(index)
let getItemIndexCheckbox = new kintoneUIComponent.CheckBox({
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
let getItemIndexCheckboxEl = document.createElement('div')
getItemIndexCheckboxEl.setAttribute("id", "get-item-index-checkbox");
let getItemIndexCheckboxButton = document.createElement('button');
getItemIndexCheckboxButton.innerHTML = 'Get Item Index Checkbox';
getItemIndexCheckboxButton.addEventListener('click', function () {
    alert(JSON.stringify(getItemIndexCheckbox.getItem(2)))
})
getItemIndexCheckboxEl.appendChild(getItemIndexCheckbox.render())
getItemIndexCheckboxEl.appendChild(getItemIndexCheckboxButton)
let getItemIndexCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 8);
getItemIndexCheckboxCell.appendChild(getItemIndexCheckboxEl)

// getItems()
let getItemsCheckbox = new kintoneUIComponent.CheckBox({
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
    isVisible: true
});
let getItemsCheckboxEl = document.createElement('div')
getItemsCheckboxEl.setAttribute("id", "get-items-checkbox");
let getItemsCheckboxButton = document.createElement('button');
getItemsCheckboxButton.innerHTML = 'Get Items Checkbox';
getItemsCheckboxButton.addEventListener('click', function () {
    alert(JSON.stringify(getItemsCheckbox.getItems()))
})
getItemsCheckboxEl.appendChild(getItemsCheckbox.render())
getItemsCheckboxEl.appendChild(getItemsCheckboxButton)
let getItemsCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 9);
getItemsCheckboxCell.appendChild(getItemsCheckboxEl)


// getValue()
let getValueCheckbox = new kintoneUIComponent.CheckBox({
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
let getValueCheckboxEl = document.createElement('div')
getValueCheckboxEl.setAttribute("id", "get-value-checkbox");
let getValueCheckboxButton = document.createElement('button');
getValueCheckboxButton.innerHTML = 'Get Value Checkbox';
getValueCheckboxButton.addEventListener('click', function () {
    let value = getValueCheckbox.getValue()
    alert(value[0])
})
getValueCheckboxEl.appendChild(getValueCheckbox.render())
getValueCheckboxEl.appendChild(getValueCheckboxButton)
let getValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 10);
getValueCheckboxCell.appendChild(getValueCheckboxEl);

// setValue()
let setValueCheckbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'SV_Default_Item_Checkbox',
            value: 'SV_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'SV_Item_Checkbox_Disable',
            value: 'SV_Item_Checkbox_Disable',
            isDisabled: true
        },
        {
            label: '',
            value: 'SV_Item_Checkbox',
            isDisabled: false
        }
    ],
    isVisible: true
});
let setValueCheckboxEl = document.createElement('div')
setValueCheckboxEl.setAttribute("id", "set-value-checkbox");
let setValueCheckboxButton = document.createElement('button');
setValueCheckboxButton.innerHTML = 'Set Value Checkbox';
setValueCheckboxButton.addEventListener('click', function () {
    setValueCheckbox.setValue(['SV_Default_Item_Checkbox'])
})
setValueCheckboxEl.appendChild(setValueCheckbox.render())
setValueCheckboxEl.appendChild(setValueCheckboxButton)
let setValueCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 11);
setValueCheckboxCell.appendChild(setValueCheckboxEl);

// disableItem
let setDisableItemCheckbox = new kintoneUIComponent.CheckBox({
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
let setDisableItemCheckboxEl = document.createElement('div')
setDisableItemCheckboxEl.setAttribute("id", "set-disable-item-checkbox");
let setDisableItemCheckboxButton = document.createElement('button');
setDisableItemCheckboxButton.innerHTML = 'Set Disable Item Checkbox';
setDisableItemCheckboxButton.addEventListener('click', function () {
    setDisableItemCheckbox.disableItem('SDI_Default_Item_Checkbox')
})
setDisableItemCheckboxEl.appendChild(setDisableItemCheckbox.render())
setDisableItemCheckboxEl.appendChild(setDisableItemCheckboxButton)
let setDisableItemCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 12);
setDisableItemCheckboxCell.appendChild(setDisableItemCheckboxEl);

// enableItem()
let setEnableItemCheckbox = new kintoneUIComponent.CheckBox({
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
let setEnableItemCheckboxEl = document.createElement('div')
setEnableItemCheckboxEl.setAttribute("id", "set-enable-item-checkbox");
let setEnableItemCheckboxButton = document.createElement('button');
setEnableItemCheckboxButton.innerHTML = 'Set Enable Item Checkbox';
setEnableItemCheckboxButton.addEventListener('click', function () {
    setEnableItemCheckbox.enableItem('SDI_Default_Item_Checkbox')
    setEnableItemCheckbox.enableItem('SEI_Item_Checkbox_Disable')
})
setEnableItemCheckboxEl.appendChild(setEnableItemCheckbox.render())
setEnableItemCheckboxEl.appendChild(setEnableItemCheckboxButton)
let setEnableItemCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 13);
setEnableItemCheckboxCell.appendChild(setEnableItemCheckboxEl)

// show()
let showCheckbox = new kintoneUIComponent.CheckBox({
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
let showCheckboxEl = document.createElement('div')
showCheckboxEl.setAttribute("id", "show-checkbox");
let showCheckboxButton = document.createElement('button');
showCheckboxButton.innerHTML = 'Show Checkbox';
showCheckboxButton.addEventListener('click', function () {
    showCheckbox.show()
})
showCheckboxEl.appendChild(showCheckbox.render())
showCheckboxEl.appendChild(showCheckboxButton)
let showCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 14);
showCheckboxCell.appendChild(showCheckboxEl);

// hide()
let hideCheckbox = new kintoneUIComponent.CheckBox({
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
let hideCheckboxEl = document.createElement('div')
hideCheckboxEl.setAttribute("id", "hide-checkbox");
let hideCheckboxButton = document.createElement('button');
hideCheckboxButton.innerHTML = 'Hide Checkbox';
hideCheckboxButton.addEventListener('click', function () {
    hideCheckbox.hide()
})
hideCheckboxEl.appendChild(hideCheckbox.render())
hideCheckboxEl.appendChild(hideCheckboxButton)
let hideCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 15);
hideCheckboxCell.appendChild(hideCheckboxEl);

// disable()
let disableCheckbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'disable_Default_Item_Checkbox',
            value: 'disable_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'disable_Item_Checkbox_1',
            value: 'disable_Item_Checkbox_1',
            isDisabled: false
        }
    ],
    value: ['disable_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: false
});
let disableCheckboxEl = document.createElement('div')
disableCheckboxEl.setAttribute("id", "disable-checkbox");
let disableCheckboxButton = document.createElement('button');
disableCheckboxButton.innerHTML = 'Disable Checkbox';
disableCheckboxButton.addEventListener('click', function () {
    disableCheckbox.disable()
})
disableCheckboxEl.appendChild(disableCheckbox.render())
disableCheckboxEl.appendChild(disableCheckboxButton)
let disableCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 16);
disableCheckboxCell.appendChild(disableCheckboxEl);

// enable()
let enableCheckbox = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'enable_Default_Item_Checkbox',
            value: 'enable_Default_Item_Checkbox',
            isDisabled: false
        },
        {
            label: 'enable_Item_Checkbox_1',
            value: 'enable_Item_Checkbox_1',
            isDisabled: false
        }
    ],
    value: ['enable_Default_Item_Checkbox'],
    isVisible: true,
    isDisabled: true
});
let enableCheckboxEl = document.createElement('div')
enableCheckboxEl.setAttribute("id", "enable-checkbox");
let enableCheckboxButton = document.createElement('button');
enableCheckboxButton.innerHTML = 'Enable Checkbox';
enableCheckboxButton.addEventListener('click', function () {
    enableCheckbox.enable()
})
enableCheckboxEl.appendChild(enableCheckbox.render())
enableCheckboxEl.appendChild(enableCheckboxButton)
let enableCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 17);
enableCheckboxCell.appendChild(enableCheckboxEl);

// on - trigger
let onTriggerCheckbox = new kintoneUIComponent.CheckBox({
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
let onTriggerCheckboxEl = document.createElement('div')
onTriggerCheckboxEl.setAttribute("id", "on-trigger-checkbox");
onTriggerCheckboxEl.appendChild(onTriggerCheckbox.render())
let onTriggerCheckboxCell = testgrid.getCell(posConfig.Check_Box.x, 18);
onTriggerCheckboxCell.appendChild(onTriggerCheckboxEl);
function triggerClick() {
    alert('on trigger checkbox has been changed');
}
onTriggerCheckbox.on('change', triggerClick);
