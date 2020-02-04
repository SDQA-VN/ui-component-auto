//Constructor Dropdown
let constructorDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isVisible: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        }],
        isVisible: true,
        isDisabled: false
});
let constructorDropdownEl = document.createElement('div');
constructorDropdownEl.appendChild(constructorDropdown.render());
constructorDropdownEl.id = 'constructor-dropdown';
let constructorDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 1)
constructorDropdownCell.appendChild(constructorDropdownEl);

// No Item Dropdown
let noItemDropdown = new kintoneUIComponent.Dropdown({
    items: [
    ],
});

let noItemDropdownEl = document.createElement('div');
noItemDropdownEl.appendChild(noItemDropdown.render());
noItemDropdownEl.id = 'no-item-dropdown';
let noItemDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 2);
noItemDropdownCell.appendChild(noItemDropdownEl);

// Add item Dropdown
let addItemDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange'
});
let addItemDropdownEl = document.createElement('div');
addItemDropdownEl.appendChild(addItemDropdown.render());
addItemDropdownEl.id = 'add-item-dropdown';
let addItemDropdownButton = document.createElement('button');
addItemDropdownButton.innerHTML='Add Item Dropdown';
addItemDropdownButton.addEventListener('click',function(){
    addItemDropdown.addItem({label: 'Banana', value: 'Banana',isDisabled: false});
    addItemDropdown.addItem({label: 'Grape', value: 'Grape',isDisabled: true});
})
let getIsDisabledOfAddItemDropdownButton = document.createElement('button');
getIsDisabledOfAddItemDropdownButton.innerHTML='Get isDisabled of Add Item Dropdown';
getIsDisabledOfAddItemDropdownButton.addEventListener('click',function(){
    alert(addItemDropdown._props.items.map( function(item) {return item.isDisabled}));
})
addItemDropdownEl.appendChild(addItemDropdownButton);
addItemDropdownEl.appendChild(getIsDisabledOfAddItemDropdownButton);
let addItemDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 3);
addItemDropdownCell.appendChild(addItemDropdownEl);

// Add item invisible Dropdown
let addItemInvisibleDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        }
    ],
    value: 'Orange',
    isVisible: false
});

let addItemInvisibleDropdownEl = document.createElement('div');
addItemInvisibleDropdownEl.appendChild(addItemInvisibleDropdown.render());
addItemInvisibleDropdownEl.id = 'add-item-invisible-dropdown';
let addItemInvisibleDropdownButton = document.createElement('button');
addItemInvisibleDropdownButton.innerHTML='Add Item Invisible Dropdown';
let addItemShowInvisibleDropdownButton = document.createElement('button');
addItemShowInvisibleDropdownButton.innerHTML='Show Invisible Dropdown';
addItemInvisibleDropdownButton.addEventListener('click',function(){
    addItemInvisibleDropdown.addItem({label: 'Banana', value: 'Banana'});
})
addItemShowInvisibleDropdownButton.addEventListener('click',function(){
    addItemInvisibleDropdown.show();
})
addItemInvisibleDropdownEl.appendChild(addItemInvisibleDropdownButton);
addItemInvisibleDropdownEl.appendChild(addItemShowInvisibleDropdownButton);
let addItemInvisibleDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 4);
addItemInvisibleDropdownCell.appendChild(addItemInvisibleDropdownEl);

// Remove Item Dropdown
let removeItemDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        }
    ],
    value: 'Orange'
});

let removeItemDropdownEl = document.createElement('div');
removeItemDropdownEl.appendChild(removeItemDropdown.render());
removeItemDropdownEl.id = 'remove-item-dropdown';
let removeItemDropdownButton = document.createElement('button');
removeItemDropdownButton.innerHTML='Remove Item Dropdown';
removeItemDropdownButton.addEventListener('click',function(){
    removeItemDropdown.removeItem(0);
})
removeItemDropdownEl.appendChild(removeItemDropdownButton);
let removeItemDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 5);
removeItemDropdownCell.appendChild(removeItemDropdownEl);

// Get Items Dropdown
let getItemsDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
        {
            label: '',
            value: '',
        }
    ],
    value: 'Orange'
});

let getItemsDropdownEl = document.createElement('div');
getItemsDropdownEl.appendChild(getItemsDropdown.render());
getItemsDropdownEl.id = 'get-items-dropdown';
let getItemsDropdownButton = document.createElement('button');
getItemsDropdownButton.innerHTML='Get Items Dropdown';
getItemsDropdownButton.addEventListener('click',function(){
    alert(JSON.stringify(getItemsDropdown.getItems()));
})
getItemsDropdownEl.appendChild(getItemsDropdownButton)
let getItemsDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 6);
getItemsDropdownCell.appendChild(getItemsDropdownEl);

// getValue()
let getValueDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Lemon'
});

let getValueDropdownEl = document.createElement('div');
getValueDropdownEl.appendChild(getValueDropdown.render());
getValueDropdownEl.id = 'get-value-dropdown';
let getValueDropdownButton = document.createElement('button');
getValueDropdownButton.innerHTML='Get Value Dropdown';
getValueDropdownButton.addEventListener('click',function(){
    alert(JSON.stringify(getValueDropdown.getValue()));
})
let hideValueDropdownButton = document.createElement('button');
hideValueDropdownButton.innerHTML='Hide Value Dropdown';
hideValueDropdownButton.addEventListener('click',function(){
    getValueDropdown.hide()
})
getValueDropdownEl.appendChild(getValueDropdownButton)
getValueDropdownEl.appendChild(hideValueDropdownButton)
let getValueDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 7);
getValueDropdownCell.appendChild(getValueDropdownEl);

// setValue()
let setValueDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
        {
            label: '',
            value: ''
        }
    ]
});

let setValueDropdownEl = document.createElement('div');
setValueDropdownEl.appendChild(setValueDropdown.render());
setValueDropdownEl.id = 'set-value-dropdown';
let setValueDropdownButton = document.createElement('button');
setValueDropdownButton.innerHTML='Set Value Dropdown';
setValueDropdownButton.addEventListener('click',function(){
    setValueDropdown.setValue('Orange');
})
let setDisabledValueDropdownButton = document.createElement('button');
setDisabledValueDropdownButton.innerHTML='Set Disabled Value Dropdown';
setDisabledValueDropdownButton.addEventListener('click',function(){
    setValueDropdown.setValue('Lemon');
})
let setNoValueDropdownButton = document.createElement('button');
setNoValueDropdownButton.innerHTML='Set No Value Dropdown';
setNoValueDropdownButton.addEventListener('click',function(){
    setValueDropdown.setValue('');
})
setValueDropdownEl.appendChild(setValueDropdownButton);
setValueDropdownEl.appendChild(setDisabledValueDropdownButton);
setValueDropdownEl.appendChild(setNoValueDropdownButton);

let setValueDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 8);
setValueDropdownCell.appendChild(setValueDropdownEl);

// Disable Item Dropdown
let disableItemDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange'
});

let disableItemDropdownEl = document.createElement('div');
disableItemDropdownEl.appendChild(disableItemDropdown.render());
disableItemDropdownEl.id = 'disable-item-dropdown';
let disableItemDropdownButton = document.createElement('button');
disableItemDropdownButton.innerHTML='Disable Item Dropdown';
disableItemDropdownButton.addEventListener('click',function(){
  disableItemDropdown.disableItem('Orange');
  disableItemDropdown.disableItem('Lemon');
})
let getIsDisabledOfDisableItemDropdownButton = document.createElement('button');
getIsDisabledOfDisableItemDropdownButton.innerHTML='Get isDisabled of Disable Item Dropdown';
getIsDisabledOfDisableItemDropdownButton.addEventListener('click',function(){
    alert(disableItemDropdown._props.items.map( function(item) {return item.isDisabled}));
})

disableItemDropdownEl.appendChild(disableItemDropdownButton);
disableItemDropdownEl.appendChild(getIsDisabledOfDisableItemDropdownButton);
let disableItemDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 9);
disableItemDropdownCell.appendChild(disableItemDropdownEl);


// Enable Item Dropdown
let enableItemDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange'
});

let enableItemDropdownEl = document.createElement('div');
enableItemDropdownEl.appendChild(enableItemDropdown.render());
enableItemDropdownEl.id = 'enable-item-dropdown';
let enableItemDropdownButton = document.createElement('button');
enableItemDropdownButton.innerHTML='Enable Item Dropdown';
enableItemDropdownButton.addEventListener('click',function(){
    enableItemDropdown.enableItem('Orange');
    enableItemDropdown.enableItem('Lemon');
})
let getIsDisabledOfEnableItemDropdownButton = document.createElement('button');
getIsDisabledOfEnableItemDropdownButton.innerHTML='Get isDisabled of Enable Item Dropdown';
getIsDisabledOfEnableItemDropdownButton.addEventListener('click',function(){
    alert(enableItemDropdown._props.items.map( function(item) {return item.isDisabled}));
})
enableItemDropdownEl.appendChild(enableItemDropdownButton);
enableItemDropdownEl.appendChild(getIsDisabledOfEnableItemDropdownButton);
let enableItemDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 10);
enableItemDropdownCell.appendChild(enableItemDropdownEl);


// show()
let showDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange',
    isVisible: false
});

let showDropdownEl = document.createElement('div');
showDropdownEl.appendChild(showDropdown.render());
showDropdownEl.id = 'show-dropdown';
let showDropdownButton = document.createElement('button');
showDropdownButton.innerHTML='Show Dropdown';
showDropdownButton.addEventListener('click',function(){
    showDropdown.show()
})
showDropdownEl.appendChild(showDropdownButton);
let showDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 11);
showDropdownCell.appendChild(showDropdownEl);

// hide()
let hideDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: false
});

let hideDropdownEl = document.createElement('div');
hideDropdownEl.appendChild(hideDropdown.render());
hideDropdownEl.id = 'hide-dropdown';
let hideDropdownButton = document.createElement('button');
hideDropdownButton.innerHTML='Hide Dropdown';
hideDropdownButton.addEventListener('click',function(){
    hideDropdown.hide()
})
hideDropdownEl.appendChild(hideDropdownButton);
let hideDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 12);
hideDropdownCell.appendChild(hideDropdownEl);

// disable()
let disableDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: false
});

let disableDropdownEl = document.createElement('div');
disableDropdownEl.appendChild(disableDropdown.render());
disableDropdownEl.id = 'disable-dropdown';
let disableDropdownButton = document.createElement('button');
disableDropdownButton.innerHTML='Disable Dropdown';
disableDropdownButton.addEventListener('click',function(){
    disableDropdown.disable()
})
let getIsDisabledOfDisableDropdownButton = document.createElement('button');
getIsDisabledOfDisableDropdownButton.innerHTML='Get isDisabled of Disable Dropdown';
getIsDisabledOfDisableDropdownButton.addEventListener('click',function(){
    alert(JSON.stringify(disableDropdown._props.isDisabled));
})
disableDropdownEl.appendChild(disableDropdownButton);
disableDropdownEl.appendChild(getIsDisabledOfDisableDropdownButton);
let disableDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 13);
disableDropdownCell.appendChild(disableDropdownEl);

// enable()
let enableDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: true
});

let enableDropdownEl = document.createElement('div');
enableDropdownEl.appendChild(enableDropdown.render());
enableDropdownEl.id = 'enable-dropdown';
let enableDropdownButton = document.createElement('button');
enableDropdownButton.innerHTML='Enable Dropdown';
enableDropdownButton.addEventListener('click',function(){
    enableDropdown.enable()
})
let getIsDisabledOfEnableDropdownButton = document.createElement('button');
getIsDisabledOfEnableDropdownButton.innerHTML='Get isDisabled of Enable Dropdown';
getIsDisabledOfEnableDropdownButton.addEventListener('click',function(){
    alert(JSON.stringify(enableDropdown._props.isDisabled));
})
enableDropdownEl.appendChild(enableDropdownButton);
enableDropdownEl.appendChild(getIsDisabledOfEnableDropdownButton);
let enableDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 14);
enableDropdownCell.appendChild(enableDropdownEl);

// on Callback Function Dropdown
let onCallbackFunctionDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: false
});
let onCallbackFunctionDropdownEl = document.createElement('div');
onCallbackFunctionDropdownEl.appendChild(onCallbackFunctionDropdown.render());
onCallbackFunctionDropdownEl.id = 'on-callback-function-dropdown';
let onCallbackFunctionDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 15);
onCallbackFunctionDropdownCell.appendChild(onCallbackFunctionDropdownEl);

onCallbackFunctionDropdown.on('change', function (event) {
    alert('onCallBackFunctionDropdown has been changed');
});

// on Callback Trigger Dropdown
let onCallbackTriggerDropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: false
});

let onCallbackTriggerDropdownEl = document.createElement('div');
onCallbackTriggerDropdownEl.appendChild(onCallbackTriggerDropdown.render());
onCallbackTriggerDropdownEl.id = 'on-callback-trigger-dropdown';
let onCallbackTriggerDropdownCell = testgrid.getCell(posConfig.Dropdown.x, 16);
onCallbackTriggerDropdownCell.appendChild(onCallbackTriggerDropdownEl);

function triggerChange() {
    alert('onCallBackTriggerDropdown has been changed');
}
onCallbackTriggerDropdown.on('change', triggerChange);