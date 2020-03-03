//Constructor RadioButton
let constructorRadioButton = new kintoneUIComponent.RadioButton({
    name: "constructor",
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
let constructorRadioButtonEl = document.createElement('div');
constructorRadioButtonEl.appendChild(constructorRadioButton.render());
constructorRadioButtonEl.id = 'constructor-radio-button';
let constructorRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 1)
constructorRadioButtonCell.appendChild(constructorRadioButtonEl);

// No Item RadioButton
let noItemRadioButton = new kintoneUIComponent.RadioButton({
    name: "no item",
    items: [
    ],
});

let noItemRadioButtonEl = document.createElement('div');
noItemRadioButtonEl.appendChild(noItemRadioButton.render());
noItemRadioButtonEl.id = 'no-item-radio-button';
let noItemRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 2);
noItemRadioButtonCell.appendChild(noItemRadioButtonEl);

// Add item RadioButton
let addItemRadioButton = new kintoneUIComponent.RadioButton({
    name: "add item",
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
let addItemRadioButtonEl = document.createElement('div');
addItemRadioButtonEl.appendChild(addItemRadioButton.render());
addItemRadioButtonEl.id = 'add-item-radio-button';
let addItemRadioButtonButton = document.createElement('button');
addItemRadioButtonButton.innerHTML='Add Item Radio Button';
addItemRadioButtonButton.addEventListener('click',function(){
    addItemRadioButton.addItem({label: 'Banana', value: 'Banana',isDisabled: false});
    addItemRadioButton.addItem({label: 'Grape', value: 'Grape',isDisabled: true});
})
addItemRadioButtonEl.appendChild(addItemRadioButtonButton);
let addItemRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 3);
addItemRadioButtonCell.appendChild(addItemRadioButtonEl);

// Add item invisible RadioButton
let addItemInvisibleRadioButton = new kintoneUIComponent.RadioButton({
    name: "add invisible item",
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

let addItemInvisibleRadioButtonEl = document.createElement('div');
addItemInvisibleRadioButtonEl.appendChild(addItemInvisibleRadioButton.render());
addItemInvisibleRadioButtonEl.id = 'add-item-invisible-radio-button';
let addItemInvisibleRadioButtonButton = document.createElement('button');
addItemInvisibleRadioButtonButton.innerHTML='Add Item Invisible Radio Button';
let addItemShowInvisibleRadioButtonButton = document.createElement('button');
addItemShowInvisibleRadioButtonButton.innerHTML='Show Invisible Radio Button';
addItemInvisibleRadioButtonButton.addEventListener('click',function(){
    addItemInvisibleRadioButton.addItem({label: 'Banana', value: 'Banana'});
})
addItemShowInvisibleRadioButtonButton.addEventListener('click',function(){
    addItemInvisibleRadioButton.show();
})
addItemInvisibleRadioButtonEl.appendChild(addItemInvisibleRadioButtonButton);
addItemInvisibleRadioButtonEl.appendChild(addItemShowInvisibleRadioButtonButton);
let addItemInvisibleRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 4);
addItemInvisibleRadioButtonCell.appendChild(addItemInvisibleRadioButtonEl);

// Remove Item RadioButton
let removeItemRadioButton = new kintoneUIComponent.RadioButton({
    name: "remove item",
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
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Orange'
});

let removeItemRadioButtonEl = document.createElement('div');
removeItemRadioButtonEl.appendChild(removeItemRadioButton.render());
removeItemRadioButtonEl.id = 'remove-item-radio-button';
let removeItemRadioButtonButton = document.createElement('button');
removeItemRadioButtonButton.innerHTML='Remove Item Radio Button';
removeItemRadioButtonButton.addEventListener('click',function(){
    removeItemRadioButton.removeItem(0);
    removeItemRadioButton.removeItem(1);
})
removeItemRadioButtonEl.appendChild(removeItemRadioButtonButton);
let removeItemRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 5);
removeItemRadioButtonCell.appendChild(removeItemRadioButtonEl);

// Get Items RadioButton
let getItemsRadioButton = new kintoneUIComponent.RadioButton({
    name: "get items",
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

let getItemsRadioButtonEl = document.createElement('div');
getItemsRadioButtonEl.appendChild(getItemsRadioButton.render());
getItemsRadioButtonEl.id = 'get-items-radio-button';
let getItemsRadioButtonButton = document.createElement('button');
getItemsRadioButtonButton.innerHTML='Get Items Radio Button';
getItemsRadioButtonButton.addEventListener('click',function(){
    alert(JSON.stringify(getItemsRadioButton.getItems()));
})
getItemsRadioButtonEl.appendChild(getItemsRadioButtonButton)
let getItemsRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 6);
getItemsRadioButtonCell.appendChild(getItemsRadioButtonEl);

// getValue()
let getValueRadioButton = new kintoneUIComponent.RadioButton({
    name: "get value",
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

let getValueRadioButtonEl = document.createElement('div');
getValueRadioButtonEl.appendChild(getValueRadioButton.render());
getValueRadioButtonEl.id = 'get-value-radio-button';
let getValueRadioButtonButton = document.createElement('button');
getValueRadioButtonButton.innerHTML='Get Value Radio Button';
getValueRadioButtonButton.addEventListener('click',function(){
    alert(JSON.stringify(getValueRadioButton.getValue()));
})
let hideValueRadioButtonButton = document.createElement('button');
hideValueRadioButtonButton.innerHTML='Hide Value Radio Button';
hideValueRadioButtonButton.addEventListener('click',function(){
    getValueRadioButton.hide()
})
getValueRadioButtonEl.appendChild(getValueRadioButtonButton)
getValueRadioButtonEl.appendChild(hideValueRadioButtonButton)
let getValueRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 7);
getValueRadioButtonCell.appendChild(getValueRadioButtonEl);

// setValue()
let setValueRadioButton = new kintoneUIComponent.RadioButton({
    name: "set value",
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
    ],
    value: "Orange"
});

let setValueRadioButtonEl = document.createElement('div');
setValueRadioButtonEl.appendChild(setValueRadioButton.render());
setValueRadioButtonEl.id = 'set-value-radio-button';
let setValueRadioButtonButton = document.createElement('button');
setValueRadioButtonButton.innerHTML='Set Value Radio Button';
setValueRadioButtonButton.addEventListener('click',function(){
    setValueRadioButton.setValue('Orange');
})
let setDisabledValueRadioButtonButton = document.createElement('button');
setDisabledValueRadioButtonButton.innerHTML='Set Disabled Value Radio Button';
setDisabledValueRadioButtonButton.addEventListener('click',function(){
    setValueRadioButton.setValue('Lemon');
})
let setNoValueRadioButtonButton = document.createElement('button');
setNoValueRadioButtonButton.innerHTML='Set No Value Radio Button';
setNoValueRadioButtonButton.addEventListener('click',function(){
    setValueRadioButton.setValue('');
})
setValueRadioButtonEl.appendChild(setValueRadioButtonButton);
setValueRadioButtonEl.appendChild(setDisabledValueRadioButtonButton);
setValueRadioButtonEl.appendChild(setNoValueRadioButtonButton);

let setValueRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 8);
setValueRadioButtonCell.appendChild(setValueRadioButtonEl);

// Disable Item RadioButton
let disableItemRadioButton = new kintoneUIComponent.RadioButton({
    name: "disable item",
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

let disableItemRadioButtonEl = document.createElement('div');
disableItemRadioButtonEl.appendChild(disableItemRadioButton.render());
disableItemRadioButtonEl.id = 'disable-item-radio-button';
let disableItemRadioButtonButton = document.createElement('button');
disableItemRadioButtonButton.innerHTML='Disable Item Radio Button';
disableItemRadioButtonButton.addEventListener('click',function(){
  disableItemRadioButton.disableItem('Orange');
  disableItemRadioButton.disableItem('Lemon');
})
let getIsDisabledOfDisableItemRadioButtonButton = document.createElement('button');
getIsDisabledOfDisableItemRadioButtonButton.innerHTML='Get isDisabled of Disable Item Radio Button';
getIsDisabledOfDisableItemRadioButtonButton.addEventListener('click',function(){
    alert(disableItemRadioButton._props.items.map( function(item) {return item.isDisabled}));
})

disableItemRadioButtonEl.appendChild(disableItemRadioButtonButton);
disableItemRadioButtonEl.appendChild(getIsDisabledOfDisableItemRadioButtonButton);
let disableItemRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 9);
disableItemRadioButtonCell.appendChild(disableItemRadioButtonEl);


// Enable Item RadioButton
let enableItemRadioButton = new kintoneUIComponent.RadioButton({
    name: "enable item",
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

let enableItemRadioButtonEl = document.createElement('div');
enableItemRadioButtonEl.appendChild(enableItemRadioButton.render());
enableItemRadioButtonEl.id = 'enable-item-radio-button';
let enableItemRadioButtonButton = document.createElement('button');
enableItemRadioButtonButton.innerHTML='Enable Item Radio Button';
enableItemRadioButtonButton.addEventListener('click',function(){
    enableItemRadioButton.enableItem('Orange');
    enableItemRadioButton.enableItem('Lemon');
})
let getIsDisabledOfEnableItemRadioButtonButton = document.createElement('button');
getIsDisabledOfEnableItemRadioButtonButton.innerHTML='Get isDisabled of Enable Item Radio Button';
getIsDisabledOfEnableItemRadioButtonButton.addEventListener('click',function(){
    alert(enableItemRadioButton._props.items.map( function(item) {return item.isDisabled}));
})
enableItemRadioButtonEl.appendChild(enableItemRadioButtonButton);
enableItemRadioButtonEl.appendChild(getIsDisabledOfEnableItemRadioButtonButton);
let enableItemRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 10);
enableItemRadioButtonCell.appendChild(enableItemRadioButtonEl);


// show()
let showRadioButton = new kintoneUIComponent.RadioButton({
    name: "show",
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

let showRadioButtonEl = document.createElement('div');
showRadioButtonEl.appendChild(showRadioButton.render());
showRadioButtonEl.id = 'show-radio-button';
let showRadioButtonButton = document.createElement('button');
showRadioButtonButton.innerHTML='Show Radio Button';
showRadioButtonButton.addEventListener('click',function(){
    showRadioButton.show()
})
showRadioButtonEl.appendChild(showRadioButtonButton);
let showRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 11);
showRadioButtonCell.appendChild(showRadioButtonEl);

// hide()
let hideRadioButton = new kintoneUIComponent.RadioButton({
    name: "hide",
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

let hideRadioButtonEl = document.createElement('div');
hideRadioButtonEl.appendChild(hideRadioButton.render());
hideRadioButtonEl.id = 'hide-radio-button';
let hideRadioButtonButton = document.createElement('button');
hideRadioButtonButton.innerHTML='Hide Radio Button';
hideRadioButtonButton.addEventListener('click',function(){
    hideRadioButton.hide()
})
hideRadioButtonEl.appendChild(hideRadioButtonButton);
let hideRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 12);
hideRadioButtonCell.appendChild(hideRadioButtonEl);

// disable()
let disableRadioButton = new kintoneUIComponent.RadioButton({
    name: "disable",
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
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        },
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: false
});

let disableRadioButtonEl = document.createElement('div');
disableRadioButtonEl.appendChild(disableRadioButton.render());
disableRadioButtonEl.id = 'disable-radio-button';
let disableRadioButtonButton = document.createElement('button');
disableRadioButtonButton.innerHTML='Disable Radio Button';
disableRadioButtonButton.addEventListener('click',function(){
    disableRadioButton.disable()
})
let getIsDisabledOfDisableRadioButtonButton = document.createElement('button');
getIsDisabledOfDisableRadioButtonButton.innerHTML='Get isDisabled of Disable Radio Button';
getIsDisabledOfDisableRadioButtonButton.addEventListener('click',function(){
    alert(JSON.stringify(disableRadioButton._props.isDisabled));
})
disableRadioButtonEl.appendChild(disableRadioButtonButton);
disableRadioButtonEl.appendChild(getIsDisabledOfDisableRadioButtonButton);
let disableRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 13);
disableRadioButtonCell.appendChild(disableRadioButtonEl);

// enable()
let enableRadioButton = new kintoneUIComponent.RadioButton({
    name: "enable",
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
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Orange',
    isVisible: true,
    isDisabled: true
});

let enableRadioButtonEl = document.createElement('div');
enableRadioButtonEl.appendChild(enableRadioButton.render());
enableRadioButtonEl.id = 'enable-radio-button';
let enableRadioButtonButton = document.createElement('button');
enableRadioButtonButton.innerHTML='Enable Radio Button';
enableRadioButtonButton.addEventListener('click',function(){
    enableRadioButton.enable()
})
let getIsDisabledOfEnableRadioButtonButton = document.createElement('button');
getIsDisabledOfEnableRadioButtonButton.innerHTML='Get isDisabled of Enable Radio Button';
getIsDisabledOfEnableRadioButtonButton.addEventListener('click',function(){
    alert(JSON.stringify(enableRadioButton._props.isDisabled));
})
enableRadioButtonEl.appendChild(enableRadioButtonButton);
enableRadioButtonEl.appendChild(getIsDisabledOfEnableRadioButtonButton);
let enableRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 14);
enableRadioButtonCell.appendChild(enableRadioButtonEl);

// on Callback Function RadioButton
let onCallbackFunctionRadioButton = new kintoneUIComponent.RadioButton({
    name: "callback function",
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
let onCallbackFunctionRadioButtonEl = document.createElement('div');
onCallbackFunctionRadioButtonEl.appendChild(onCallbackFunctionRadioButton.render());
onCallbackFunctionRadioButtonEl.id = 'on-callback-function-radio-button';
let onCallbackFunctionRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 15);
onCallbackFunctionRadioButtonCell.appendChild(onCallbackFunctionRadioButtonEl);

onCallbackFunctionRadioButton.on('change', function (event) {
    alert('onCallBackFunctionRadioButton has been changed');
});

// on Callback Trigger RadioButton
let onCallbackTriggerRadioButton = new kintoneUIComponent.RadioButton({
    name: "callback trigger",
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

let onCallbackTriggerRadioButtonEl = document.createElement('div');
onCallbackTriggerRadioButtonEl.appendChild(onCallbackTriggerRadioButton.render());
onCallbackTriggerRadioButtonEl.id = 'on-callback-trigger-radio-button';
let onCallbackTriggerRadioButtonCell = testgrid.getCell(posConfig.Radio.x, 16);
onCallbackTriggerRadioButtonCell.appendChild(onCallbackTriggerRadioButtonEl);

function triggerChange() {
    alert('onCallBackTriggerRadioButton has been changed');
}
onCallbackTriggerRadioButton.on('change', triggerChange);