//kintone-ui-component Radio Button
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/83034178/kintone-ui-component+RadioButton
'use strict';

//let body = document.getElementsByTagName("BODY")[0];

// UI
let radioBtnUI = new kintoneUIComponent.RadioButton({
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
let radioBtnUI_cell = testgrid.getCell(posConfig.Radio.x, 1);
radioBtnUI_cell.appendChild(radioBtnUI.render());

// constructor without value option
let radioBtnConstructor = new kintoneUIComponent.RadioButton({
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
let radioBtnConstructor_cell = testgrid.getCell(posConfig.Radio.x, 2);
radioBtnConstructor_cell.appendChild(radioBtnConstructorEl);

// constructor full options
let radioBtnFullConstructor = new kintoneUIComponent.RadioButton({
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
let radioBtnFullConstructor_cell = testgrid.getCell(posConfig.Radio.x, 3);
radioBtnFullConstructor_cell.appendChild(radioBtnFullConstructorEl);

// constructor contain only options.items[].isDisabled
let radioBtnOnlyIsDisabled = new kintoneUIComponent.RadioButton({
    name: "constructorOnlyIsDisabled_radioBtn",
    items: [
        {
            isDisabled: true
        }
    ]
});
let radioBtnOnlyIsDisabledEl = radioBtnOnlyIsDisabled.render();
radioBtnOnlyIsDisabledEl.id = 'radioBtnOnlyIsDisabledEl';
let radioBtnOnlyIsDisabled_cell = testgrid.getCell(posConfig.Radio.x, 4);
radioBtnOnlyIsDisabled_cell.appendChild(radioBtnOnlyIsDisabledEl);

// constructor contain both options.items[].label and options.items[].isDisabled
let radioBtnBothLabelIsDisabled = new kintoneUIComponent.RadioButton({
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
let radioBtnBothLabelIsDisabled_cell = testgrid.getCell(posConfig.Radio.x, 5);
radioBtnBothLabelIsDisabled_cell.appendChild(radioBtnBothLabelIsDisabledEl);

// addItems
let radioBtnAddItems = new kintoneUIComponent.RadioButton({
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
let radioBtnAddItems_cell = testgrid.getCell(posConfig.Radio.x, 6);
radioBtnAddItems_cell.appendChild(radioBtnAddItems.render());
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
let radioBtnAddItemsGetLast = new kintoneUIComponent.RadioButton({
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
let radioBtnAddItemsGetLast_cell = testgrid.getCell(posConfig.Radio.x, 7);
radioBtnAddItemsGetLast_cell.appendChild(radioBtnAddItemsGetLast.render());
function getLastItemsRadioBtn() {
    let getLastItems = radioBtnAddItemsGetLast.getItems();
    let getLatAlertString = [];
    for (let i = 0; i < getLastItems.length; i++ ){
        getLatAlertString.push('\n' + "Item " + (i+1) + " - Item value: " + getLastItems[i].value + " - isDisabled: " + getLastItems[i].isDisabled);
    }
    alert(getLatAlertString[getLatAlertString.length - 1]);
}
radioBtnAddItemsGetLast.on('change', getLastItemsRadioBtn);

// removeItems
let radioBtnRemoveItems = new kintoneUIComponent.RadioButton({
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
let radioBtnRemoveItems_cell = testgrid.getCell(posConfig.Radio.x, 8);
radioBtnRemoveItems_cell.appendChild(radioBtnRemoveItems.render());
function getNumberOfItems() {
    let getNoItems = radioBtnRemoveItems.getItems();
    let getAlertString = [];
    for (let i = 0; i < getNoItems.length; i++ ){
        getAlertString.push('\n' + "Item " + (i+1) + " - Item value: " + getNoItems[i].value + " - isDisabled: " + getNoItems[i].isDisabled);
    }
    alert(getAlertString.length);
}
radioBtnRemoveItems.on('change', getNumberOfItems);

// getItems()
let radioBtnGetItems = new kintoneUIComponent.RadioButton({
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
let radioBtnGetItems_cell = testgrid.getCell(posConfig.Radio.x, 9);
radioBtnGetItems_cell.appendChild(radioBtnGetItemsEl);

let getItemBtn = new kintoneUIComponent.Button({
    text: 'Get Items of Full Radio Button',
    type: 'normal',
    isVisible: true,
});
radioBtnGetItems_cell.appendChild(getItemBtn.render());

function getItemList() {
    let getItems = radioBtnGetItems.getItems();
    alert(Object.keys(getItems[0]).join('\n'));
}
getItemBtn.on('click', getItemList);

let getItemOfInVisiBleBtn = new kintoneUIComponent.Button({
    text: 'Get Items of Invisible',
    type: 'normal',
    isVisible: true,
});
radioBtnGetItems_cell.appendChild(getItemOfInVisiBleBtn.render());

function getItemListOfInviRadioBtn() {
    let getItems = radioBtnGetItems.getItems();
    let items = JSON.stringify(getItems);
    alert(items);
}
getItemOfInVisiBleBtn.on('click', getItemListOfInviRadioBtn);

// getValue()
let radioBtnGetValue = new kintoneUIComponent.RadioButton({
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
let radioBtnGetValue_cell = testgrid.getCell(posConfig.Radio.x, 10);
radioBtnGetValue_cell.appendChild(radioBtnGetValue.render());
let getValueRadioBtn = new kintoneUIComponent.Button({
    text: 'Get Value Radio Button',
    type: 'normal',
    isVisible: true,
});
radioBtnGetValue_cell.appendChild(getValueRadioBtn.render());

function getValueOfBtn() {
    let getValue = radioBtnGetValue.getValue();
    alert(getValue);
}
getValueRadioBtn.on('click', getValueOfBtn);

let getValueOfInVisiBleBtn = new kintoneUIComponent.Button({
    text: 'Get Value of Invisible',
    type: 'normal',
    isVisible: true,
});
radioBtnGetValue_cell.appendChild(getValueOfInVisiBleBtn.render());

function getValueOfInviRadioBtn() {
    let getValue = radioBtnGetValue.getValue();
    alert(getValue);
}
getValueOfInVisiBleBtn.on('click', getValueOfInviRadioBtn);

// setValue()
let radioBtnSetValue = new kintoneUIComponent.RadioButton({
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
let radioBtnSetValue_cell = testgrid.getCell(posConfig.Radio.x, 11);
radioBtnSetValue_cell.appendChild(radioBtnSetValue.render());
let getValueOfSetValue = new kintoneUIComponent.Button({
    text: 'Get Value of setValue',
    type: 'normal',
    isVisible: true,
});
radioBtnSetValue_cell.appendChild(getValueOfSetValue.render());

function getValueOfsetValueFunc() {
    let getValue = radioBtnSetValue.getValue();
    alert(getValue);
}
getValueOfSetValue.on('click', getValueOfsetValueFunc);

// disableItem()
let radioBtnDisable = new kintoneUIComponent.RadioButton({
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
let radioBtnDisable_cell = testgrid.getCell(posConfig.Radio.x, 12);
radioBtnDisable_cell.appendChild(radioBtnDisable.render());

// disableItem()
let radioBtnDisableInvisible = new kintoneUIComponent.RadioButton({
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
let radioBtnDisableInvisible_cell = testgrid.getCell(posConfig.Radio.x, 13);
radioBtnDisableInvisible_cell.appendChild(radioBtnDisableInvisible.render());
let getValueOfInvisible = new kintoneUIComponent.Button({
    text: 'Get Value of Disabled Invisible',
    type: 'normal',
    isVisible: true,
});
radioBtnDisableInvisible_cell.appendChild(getValueOfInvisible.render());
function getValueOfInviDisabled() {
    radioBtnDisableInvisible.disableItem('Pepsi - Invisible');
    let getValue = JSON.stringify(radioBtnDisableInvisible.getItems());
    alert(getValue);
}
getValueOfInvisible.on('click', getValueOfInviDisabled);

// enableItem()
let radioBtnEnable = new kintoneUIComponent.RadioButton({
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
let radioBtnEnable_cell = testgrid.getCell(posConfig.Radio.x, 14);
radioBtnEnable_cell.appendChild(radioBtnEnable.render());

// render() - not use
let radioBtnRender = new kintoneUIComponent.RadioButton({
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
let radioBtnShow = new kintoneUIComponent.RadioButton({
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
let radioBtnShow_cell = testgrid.getCell(posConfig.Radio.x, 15);
radioBtnShow_cell.appendChild(radioBtnShow.render());

// hide()
let radioBtnHide = new kintoneUIComponent.RadioButton({
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
let radioBtnHide_cell = testgrid.getCell(posConfig.Radio.x, 16);
radioBtnHide_cell.appendChild(radioBtnHide.render());

// disabled()
let disabled_radioBtn = new kintoneUIComponent.RadioButton({
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
let disabled_radioBtn_cell = testgrid.getCell(posConfig.Radio.x, 17);
disabled_radioBtn_cell.appendChild(disabled_radioBtn.render());

// enabled()
let enabled_radioBtn = new kintoneUIComponent.RadioButton({
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
let enabled_radioBtn_cell = testgrid.getCell(posConfig.Radio.x, 18);
enabled_radioBtn_cell.appendChild(enabled_radioBtn.render());

// on change() - function
let radioBtnOnFunc = new kintoneUIComponent.RadioButton({
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
let radioBtnOnFunc_cell = testgrid.getCell(posConfig.Radio.x, 19);
radioBtnOnFunc_cell.appendChild(radioBtnOnFunc.render());
radioBtnOnFunc.on('change', function (event) {
    alert('onFunc_radioBtn has been changed');
});

// on change() - trigger
let radioBtnOnTrigger = new kintoneUIComponent.RadioButton({
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
let radioBtnOnTrigger_cell = testgrid.getCell(posConfig.Radio.x, 20);

radioBtnOnTrigger_cell.appendChild(radioBtnOnTrigger.render());
function triggerSubmitChange() {
    alert('onTrigger_radioBtn has been changed');
}
radioBtnOnTrigger.on('change', triggerSubmitChange);