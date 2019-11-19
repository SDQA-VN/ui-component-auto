import {RadioButton, Button} from '@kintone/kintone-ui-component/esm/js';

// UI
let radioBtnUI = new RadioButton({
    name: "UI_radioBtn",
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: true
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
    ],
    value: 'Banana',
    isDisabled: false,
    isVisible: true
});

// constructor without value option
let radioBtnConstructor = new RadioButton({
    name: "constructorWithoutValueOption_radioBtn",
    items: [
        {
            label: 'Yellow',
            value: 'Yellow',
            isDisabled: false
        },
        {
            label: 'Purple',
            value: 'Purple',
            isDisabled: true
        },
        {
            label: 'Black',
            value: 'Black',
            isDisabled: true
        },
    ],
    isDisabled: false,
    isVisible: true
});
let radioBtnConstructorEl = radioBtnConstructor.render();
radioBtnConstructorEl.id = 'constructorWithoutValueOption_radioBtnEl';

// constructor full options
let radioBtnFullConstructor = new RadioButton({
    name: "constructorFullOptions_radioBtn",
    items: [
        {
            label: 'Lion',
            value: 'Lion',
            isDisabled: false
        },
        {
            label: 'Elephant',
            value: 'Elephant',
            isDisabled: false
        },
        {
            label: 'Dog',
            value: 'Dog',
            isDisabled: true
        },
    ],
    value: 'Lion',
    isDisabled: false,
    isVisible: true
});
let radioBtnFullConstructorEl = radioBtnFullConstructor.render();
radioBtnFullConstructorEl.id = 'radioBtnFullConstructorEl';

// constructor contain only options.items[].isDisabled
let radioBtnOnlyIsDisabled = new RadioButton({
    name: "constructorOnlyIsDisabled_radioBtn",
    items: [
        {
            isDisabled: true
        }
    ]
});
let radioBtnOnlyIsDisabledEl = radioBtnOnlyIsDisabled.render();
radioBtnOnlyIsDisabledEl.id = 'radioBtnOnlyIsDisabledEl';

// constructor contain both options.items[].label and options.items[].isDisabled
let radioBtnBothLabelIsDisabled = new RadioButton({
    name: "radioBtnBothLabelIsDisabled_radioBtn",
    items: [
        {
            label: 'Park',
            isDisabled: false
        }
    ]
});
let radioBtnBothLabelIsDisabledEl = radioBtnBothLabelIsDisabled.render();
radioBtnBothLabelIsDisabledEl.id = 'radioBtnBothLabelIsDisabledEl';

// addItems
let radioBtnAddItems = new RadioButton({
    name: "addItem_radioBtn",
    items: [
        {
            label: 'Mac',
            value: 'Mac',
            isDisabled: false
        },
        {
            label: 'Dell',
            value: 'Dell',
            isDisabled: false
        },
        {
            label: 'HP',
            value: 'HP',
            isDisabled: true
        },
    ],
    value: 'Mac',
    isDisabled: false,
    isVisible: true
});
let radioBtnAddItemsEl = radioBtnAddItems.render();
radioBtnAddItemsEl.id = 'radioBtnAddItemsdEl';
function getItemsRadioBtn() {
    let items = radioBtnAddItems.getItems();
    let alertString = [];
    for (let i = 0; i < items.length; i++ ){
        alertString.push('\n' + "Item " + (i+1) + " - Item value: " + items[i].value + " - isDisabled: " + items[i].isDisabled);
    }
    alert(alertString);
}
radioBtnAddItems.on('change', getItemsRadioBtn);

// addItem - get the last item
let radioBtnAddItemsGetLast = new RadioButton({
    name: "addItem_LastItems_radioBtn",
    items: [
        {
            label: 'Mac - last',
            value: 'Mac - last',
            isDisabled: false
        },
        {
            label: 'Dell - last',
            value: 'Dell - last',
            isDisabled: false
        },
        {
            label: 'HP - last',
            value: 'HP - last',
            isDisabled: true
        },
    ],
    value: 'Mac - last',
    isDisabled: false,
    isVisible: true
});
function getLastItemsRadioBtn() {
    let getLastItems = radioBtnAddItemsGetLast.getItems();
    let getLatAlertString = [];
    for (let i = 0; i < getLastItems.length; i++ ){
        getLatAlertString.push('\n' + "Item " + (i+1) + " - Item value: " + getLastItems[i].value + " - isDisabled: " + getLastItems[i].isDisabled);
    }
    alert(getLatAlertString[getLatAlertString.length - 1]);
}
radioBtnAddItemsGetLast.on('change', getLastItemsRadioBtn);
let radioBtnAddItemsGetLastEl = radioBtnAddItemsGetLast.render();
radioBtnAddItemsGetLastEl.id = 'radioBtnAddItemsGetLastEl';
// removeItems
let radioBtnRemoveItems = new RadioButton({
    name: "removeItems_radioBtn",
    items: [
        {
            label: 'PC',
            value: 'PC',
            isDisabled: false
        },
        {
            label: 'Laptop',
            value: 'Laptop',
            isDisabled: false
        },
        {
            label: 'Stationery',
            value: 'Stationery',
            isDisabled: true
        },
    ],
    value: 'Stationery',
    isDisabled: false,
    isVisible: true
});
function getNumberOfItems() {
    let getNoItems = radioBtnRemoveItems.getItems();
    let getAlertString = [];
    for (let i = 0; i < getNoItems.length; i++ ){
        getAlertString.push('\n' + "Item " + (i+1) + " - Item value: " + getNoItems[i].value + " - isDisabled: " + getNoItems[i].isDisabled);
    }
    alert(getAlertString.length);
}
radioBtnRemoveItems.on('change', getNumberOfItems);
let radioBtnRemoveItemsEl = radioBtnRemoveItems.render();
radioBtnRemoveItemsEl.id = 'radioBtnAddItemsGetLastEl';
// getItems()
let radioBtnGetItems = new RadioButton({
    name: "getItems_radioBtn",
    items: [
        {
            label: 'QA',
            value: 'QA',
            isDisabled: false
        },
        {
            label: 'Development',
            value: 'Development',
            isDisabled: false
        },
        {
            label: 'Business',
            value: 'Business',
            isDisabled: true
        },
    ],
    value: 'Business',
    isDisabled: false,
    isVisible: false
});
let radioBtnGetItemsEl = radioBtnGetItems.render();
radioBtnGetItemsEl.id = 'radioBtnGetItemsEl';

let getItemBtn = new Button({
    text: 'Get Items of Full Radio Button',
    type: 'normal',
    isVisible: true,
});

function getItemList() {
    let getItems = radioBtnGetItems.getItems();
    alert(Object.keys(getItems[0]).join('\n'));
}
getItemBtn.on('click', getItemList);

let getItemOfInVisiBleBtn = new Button({
    text: 'Get Items of Invisible',
    type: 'normal',
    isVisible: true,
});

function getItemListOfInviRadioBtn() {
    let getItems = radioBtnGetItems.getItems();
    let items = JSON.stringify(getItems);
    alert(items);
}
getItemOfInVisiBleBtn.on('click', getItemListOfInviRadioBtn);

let radioBtnGetItemsDiv = document.createElement('div');
radioBtnGetItemsDiv.appendChild(radioBtnGetItemsEl);
radioBtnGetItemsDiv.appendChild(getItemBtn.render());
radioBtnGetItemsDiv.appendChild(getItemOfInVisiBleBtn.render());

// getValue()
let radioBtnGetValue = new RadioButton({
    name: "getValue_radioBtn",
    items: [
        {
            label: 'Cheese',
            value: 'Cheese',
            isDisabled: false
        },
        {
            label: 'Ice Cream',
            value: 'Ice Cream',
            isDisabled: false
        },
        {
            label: 'Cider',
            value: 'Cider',
            isDisabled: true
        },
    ],
    value: 'Ice Cream',
    isDisabled: false,
    isVisible: false
});

let getValueRadioBtn = new Button({
    text: 'Get Value Radio Button',
    type: 'normal',
    isVisible: true,
});

function getValueOfBtn() {
    let getValue = radioBtnGetValue.getValue();
    alert(getValue);
}
getValueRadioBtn.on('click', getValueOfBtn);

let getValueOfInVisiBleBtn = new Button({
    text: 'Get Value of Invisible',
    type: 'normal',
    isVisible: true,
});

function getValueOfInviRadioBtn() {
    let getValue = radioBtnGetValue.getValue();
    alert(getValue);
}
getValueOfInVisiBleBtn.on('click', getValueOfInviRadioBtn);

let radioBtnGetValueDiv = document.createElement('div');
radioBtnGetValueDiv.appendChild(radioBtnGetValue.render());
radioBtnGetValueDiv.appendChild(getValueRadioBtn.render());
radioBtnGetValueDiv.appendChild(getValueOfInVisiBleBtn.render());

// setValue()
let radioBtnSetValue = new RadioButton({
    name: "setValue_radioBtn",
    items: [
        {
            label: 'Java',
            value: 'Java',
            isDisabled: false
        },
        {
            label: 'C#',
            value: 'C#',
            isDisabled: false
        },
        {
            label: 'Python',
            value: 'Python',
            isDisabled: true
        },
    ],
    value: 'Java',
    isDisabled: false,
    isVisible: true
});
let getValueOfSetValue = new Button({
    text: 'Get Value of setValue',
    type: 'normal',
    isVisible: true,
});

function getValueOfsetValueFunc() {
    let getValue = radioBtnSetValue.getValue();
    alert(getValue);
}
getValueOfSetValue.on('click', getValueOfsetValueFunc);

let radioBtnSetValueDiv = document.createElement('div');
radioBtnSetValueDiv.appendChild(radioBtnSetValue.render());
radioBtnSetValueDiv.appendChild(getValueOfSetValue.render());

// disableItem()
let radioBtnDisable = new RadioButton({
    name: "disable_radioBtn",
    items: [
        {
            label: 'Coca Cola',
            value: 'Coca Cola',
            isDisabled: false
        },
        {
            label: 'Pepsi',
            value: 'Pepsi',
            isDisabled: false
        },
        {
            label: 'Aquafina',
            value: 'Aquafina',
            isDisabled: true
        },
    ],
    value: 'Aquafina',
    isDisabled: false,
    isVisible: true
});

// disableItem()
let radioBtnDisableInvisible = new RadioButton({
    name: "disableInvisible_radioBtn",
    items: [
        {
            label: 'Pepsi - Invisible',
            value: 'Pepsi - Invisible',
            isDisabled: false
        }
    ],
    value: 'Pepsi - Invisible',
    isDisabled: false,
    isVisible: false
});

let getValueOfInvisible = new Button({
    text: 'Get Value of Disabled Invisible',
    type: 'normal',
    isVisible: true,
});
function getValueOfInviDisabled() {
    radioBtnDisableInvisible.disableItem('Pepsi - Invisible');
    let getValue = JSON.stringify(radioBtnDisableInvisible.getItems());
    alert(getValue);
}
getValueOfInvisible.on('click', getValueOfInviDisabled);

let radioBtnDisableInvisibleDiv = document.createElement('div');
radioBtnDisableInvisibleDiv.appendChild(radioBtnDisableInvisible.render());
radioBtnDisableInvisibleDiv.appendChild(getValueOfInvisible.render());

// enableItem()
let radioBtnEnable = new RadioButton({
    name: "enable_radioBtn",
    items: [
        {
            label: 'Table',
            value: 'Table',
            isDisabled: false
        },
        {
            label: 'Chair',
            value: 'Chair',
            isDisabled: false
        },
        {
            label: 'iDesk',
            value: 'iDesk',
            isDisabled: true
        },
    ],
    value: 'Chair',
    isDisabled: false,
    isVisible: true
});

// render() - not use
let radioBtnRender = new RadioButton({
    name: "render_radioBtn",
    items: [
        {
            label: 'First_Render',
            value: 'First_Render',
            isDisabled: false
        },
        {
            label: 'Two_Render',
            value: 'Two_Render',
            isDisabled: false
        },
        {
            label: 'Third_Render',
            value: 'Third_Render',
            isDisabled: true
        },
    ],
    value: 'Third_Render',
    isDisabled: false,
    isVisible: true
});

// show()
let radioBtnShow = new RadioButton({
    name: "show_radioBtn",
    items: [
        {
            label: 'First_Show',
            value: 'First_Show',
            isDisabled: false
        },
        {
            label: 'Two_Show',
            value: 'Two_Show',
            isDisabled: false
        },
        {
            label: 'Third_Show',
            value: 'Third_Show',
            isDisabled: true
        },
    ],
    value: 'Third_Show',
    isDisabled: false,
    isVisible: false
});

// hide()
let radioBtnHide = new RadioButton({
    name: "hide_radioBtn",
    items: [
        {
            label: 'First_Hide',
            value: 'First_Hide',
            isDisabled: false
        },
        {
            label: 'Two_Hide',
            value: 'Two_Hide',
            isDisabled: false
        },
        {
            label: 'Third_Hide',
            value: 'Third_Hide',
            isDisabled: true
        },
    ],
    value: 'Third_Hide',
    isDisabled: false,
    isVisible: true
});

// disabled()
let disabled_radioBtn = new RadioButton({
    name: "disabled_radioBtn",
    items: [
        {
            label: 'First_Disable',
            value: 'First_Disable',
            isDisabled: false
        },
        {
            label: 'Two_Disable',
            value: 'Two_Disable',
            isDisabled: false
        }
    ],
    value: 'Two_Disable',
    isDisabled: false,
    isVisible: true
});

// enabled()
let enabled_radioBtn = new RadioButton({
    name: "enabled_radioBtn",
    items: [
        {
            label: 'First_Enable',
            value: 'First_Enable',
            isDisabled: false
        },
        {
            label: 'Two_Enable',
            value: 'Two_Enable',
            isDisabled: false
        }
    ],
    value: 'Two_Enable',
    isDisabled: true,
    isVisible: true
});

// on change() - function
let radioBtnOnFunc = new RadioButton({
    name: "onFunc_radioBtn",
    items: [
        {
            label: 'Screen',
            value: 'Screen',
            isDisabled: false
        },
        {
            label: 'Main',
            value: 'Main',
            isDisabled: false
        },
        {
            label: 'RAM',
            value: 'RAM',
            isDisabled: true
        },
    ],
    value: 'RAM',
    isDisabled: false,
    isVisible: true
});
radioBtnOnFunc.on('change', function (event) {
    alert('onFunc_radioBtn has been changed');
});

// on change() - trigger
let radioBtnOnTrigger = new RadioButton({
    name: "onTrigger_radioBtn",
    items: [
        {
            label: 'First_OnTrigger',
            value: 'First_OnTrigger',
            isDisabled: false
        },
        {
            label: 'Second_OnTrigger',
            value: 'Second_OnTrigger',
            isDisabled: false
        },
        {
            label: 'Third_OnTrigger',
            value: 'Third_OnTrigger',
            isDisabled: true
        },
    ],
    value: 'Third_OnTrigger',
    isDisabled: false,
    isVisible: true
});
function triggerSubmitChange() {
    alert('onTrigger_radioBtn has been changed');
}
radioBtnOnTrigger.on('change', triggerSubmitChange);

export default {
    radioBtnUI,
    radioBtnConstructorEl,
    radioBtnFullConstructorEl,
    radioBtnOnlyIsDisabledEl,
    radioBtnBothLabelIsDisabledEl,
    radioBtnAddItemsEl,
    radioBtnAddItemsGetLastEl,
    radioBtnRemoveItemsEl,
    radioBtnGetItemsDiv,
    radioBtnGetValueDiv,
    radioBtnSetValueDiv,
    radioBtnDisable,
    radioBtnDisableInvisibleDiv,
    radioBtnEnable,
    radioBtnShow,
    radioBtnHide,
    disabled_radioBtn,
    enabled_radioBtn,
    radioBtnOnFunc,
    radioBtnOnTrigger
}