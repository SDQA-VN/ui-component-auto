//kintone-ui-component Multiple Choice
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/101680074/kintone-ui-component+MultipleChoice
'use strict';

// Render() - without value
let consValueFullValueMulChoice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
    ],
    value: ['Orange'],
    isDisabled: false,
    isVisible: true
});
let consValueFullValueMulChoiceEl = document.createElement('div');
consValueFullValueMulChoiceEl.setAttribute('class', 'multiple-render');
consValueFullValueMulChoiceEl.appendChild(consValueFullValueMulChoice.render());
let consValueFullValueMulChoiceCell = testgrid.getCell(posConfig.Multiple_Choice.x, 1);
consValueFullValueMulChoiceCell.appendChild(consValueFullValueMulChoiceEl);


// Render() - without value
let MultipleWithoutOption = new kintoneUIComponent.MultipleChoice({
    items: [],
});
let MultipleWithoutOptionEl = document.createElement('div');
MultipleWithoutOptionEl.setAttribute('class', 'multiple-withoutOption');
MultipleWithoutOptionEl.appendChild(MultipleWithoutOption.render());
let MultipleWithoutOptionCell = testgrid.getCell(posConfig.Multiple_Choice.x, 2);
MultipleWithoutOptionCell.appendChild(MultipleWithoutOptionEl);

// Render() - only value
let MultipleOnlyValue = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
    ],
    value: ['Orange'],
});
let MultipleOnlyValueEl = document.createElement('div');
MultipleOnlyValueEl.setAttribute('class', 'multiple-onlyValue');
MultipleOnlyValueEl.appendChild(MultipleOnlyValue.render());
let MultipleOnlyValueCell = testgrid.getCell(posConfig.Multiple_Choice.x, 3);
MultipleOnlyValueCell.appendChild(MultipleOnlyValueEl);


// Render() - add items
let MultipleAdd = new kintoneUIComponent.MultipleChoice({
    items: [],
});
let MultipleAddEl = document.createElement('div');
MultipleAddEl.setAttribute('class', 'multiple-addItems');

let buttonMultipleAdd = document.createElement('button');
buttonMultipleAdd.innerHTML = 'Add Items';
buttonMultipleAdd.setAttribute('class', 'add-items');
buttonMultipleAdd.addEventListener('click', function () {
    MultipleAdd.addItem({
        label: 'Lemon',
        value: 'Lemon',
        isDisabled: false
    })
})

MultipleAddEl.appendChild(MultipleAdd.render());
MultipleAddEl.appendChild(buttonMultipleAdd);
let MultipleAddCell = testgrid.getCell(posConfig.Multiple_Choice.x, 4);
MultipleAddCell.appendChild(MultipleAddEl);

// Render() - add items without value
let InvisibleMultipleAdd = new kintoneUIComponent.MultipleChoice({
    items: [],
    isVisible: false
});
let InvisibleMultipleAddEl = document.createElement('div');
InvisibleMultipleAddEl.setAttribute('class', 'invisibleMultiple-addItems');

let buttonInvisibleMultipleAdd = document.createElement('button');
buttonInvisibleMultipleAdd.innerHTML = 'Add Items';
buttonInvisibleMultipleAdd.setAttribute('class', 'add-items');
buttonInvisibleMultipleAdd.addEventListener('click', function () {
    InvisibleMultipleAdd.addItem({
        value: 'Lemon',
    })
    InvisibleMultipleAdd.show()
})

InvisibleMultipleAddEl.appendChild(InvisibleMultipleAdd.render());
InvisibleMultipleAddEl.appendChild(buttonInvisibleMultipleAdd);
let InvisibleMultipleAddCell = testgrid.getCell(posConfig.Multiple_Choice.x, 6);
InvisibleMultipleAddCell.appendChild(InvisibleMultipleAddEl);


// Render() - remove items
let MultipleRemove = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
    ],
});
let MultipleRemoveEl = document.createElement('div');
MultipleRemoveEl.setAttribute('class', 'multiple-remove');

let buttonMultipleRemove = document.createElement('button');
buttonMultipleRemove.innerHTML = 'Remove Item';
buttonMultipleRemove.setAttribute('class', 'remove-item');
buttonMultipleRemove.addEventListener('click', function () {
    MultipleRemove.removeItem(0);
})

MultipleRemoveEl.appendChild(MultipleRemove.render());
MultipleRemoveEl.appendChild(buttonMultipleRemove);
let MultipleRemoveCell = testgrid.getCell(posConfig.Multiple_Choice.x, 7);
MultipleRemoveCell.appendChild(MultipleRemoveEl);


// Render() - remove invisible
let InvisibleMultipleRemove = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
    ],
    isVisible: false
});
let InvisibleMultipleRemoveEl = document.createElement('div');
InvisibleMultipleRemoveEl.setAttribute('class', 'invisibleMultiple-remove');

let buttonInvisibleMultipleRemove = document.createElement('button');
buttonInvisibleMultipleRemove.innerHTML = 'Remove Item';
buttonInvisibleMultipleRemove.setAttribute('class', 'remove-item');
buttonInvisibleMultipleRemove.addEventListener('click', function () {
    InvisibleMultipleRemove.removeItem(2);
    InvisibleMultipleRemove.show()
})

InvisibleMultipleRemoveEl.appendChild(InvisibleMultipleRemove.render());
InvisibleMultipleRemoveEl.appendChild(buttonInvisibleMultipleRemove);
let InvisibleMultipleRemoveCell = testgrid.getCell(posConfig.Multiple_Choice.x, 8);
InvisibleMultipleRemoveCell.appendChild(InvisibleMultipleRemoveEl);


// Render() - get items
let MutipleGetItems = new kintoneUIComponent.MultipleChoice({
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
        }
    ],
});
let MutipleGetItemsEl = document.createElement('div');
MutipleGetItemsEl.setAttribute('class', 'multiple-getItems');

let buttonMutipleGetItems = document.createElement('button');
buttonMutipleGetItems.innerHTML = 'Get Items';
buttonMutipleGetItems.setAttribute('class', 'get-items');
buttonMutipleGetItems.addEventListener('click', function () {
    alert(JSON.stringify(MutipleGetItems.getItems()))
})

MutipleGetItemsEl.appendChild(MutipleGetItems.render());
MutipleGetItemsEl.appendChild(buttonMutipleGetItems);
let MutipleGetItemsCell = testgrid.getCell(posConfig.Multiple_Choice.x, 9);
MutipleGetItemsCell.appendChild(MutipleGetItemsEl);


// Render() - get item index
let MutipleGetIndex = new kintoneUIComponent.MultipleChoice({
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
            isVisible: false
        }
    ],
});
let MutipleGetIndexEl = document.createElement('div');
MutipleGetIndexEl.setAttribute('class', 'multiple-getItemsIndex');

let buttonMutipleGetIndex = document.createElement('button');
buttonMutipleGetIndex.innerHTML = 'Get Items';
buttonMutipleGetIndex.setAttribute('class', 'get-items');
buttonMutipleGetIndex.addEventListener('click', function () {
    alert(JSON.stringify(MutipleGetIndex.getItem(1)))
})

MutipleGetIndexEl.appendChild(MutipleGetIndex.render());
MutipleGetIndexEl.appendChild(buttonMutipleGetIndex);
let MutipleGetIndexCell = testgrid.getCell(posConfig.Multiple_Choice.x, 10);
MutipleGetIndexCell.appendChild(MutipleGetIndexEl);


// Render() - get invisible item index
let MutipleGetInvisibleIndex = new kintoneUIComponent.MultipleChoice({
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
            isVisible: false
        }
    ],
});
let MutipleGetInvisibleIndexEl = document.createElement('div');
MutipleGetInvisibleIndexEl.setAttribute('class', 'multiple-getInvisibleIndex');

let buttonMutipleGetInvisibleIndex = document.createElement('button');
buttonMutipleGetInvisibleIndex.innerHTML = 'Get Items';
buttonMutipleGetInvisibleIndex.setAttribute('class', 'get-items-invisibleIndex');
buttonMutipleGetInvisibleIndex.addEventListener('click', function () {
    alert(JSON.stringify(MutipleGetIndex.getItem(0)))
})

MutipleGetInvisibleIndexEl.appendChild(MutipleGetInvisibleIndex.render());
MutipleGetInvisibleIndexEl.appendChild(buttonMutipleGetInvisibleIndex);
let MutipleGetInvisibleIndexCell = testgrid.getCell(posConfig.Multiple_Choice.x, 11);
MutipleGetInvisibleIndexCell.appendChild(MutipleGetInvisibleIndexEl);


// Render() - set value item index
let MutipleSetValue = new kintoneUIComponent.MultipleChoice({
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
            isVisible: false
        }
    ],
});
let MutipleSetValueEl = document.createElement('div');
MutipleSetValueEl.setAttribute('class', 'multiple-setValue');

let buttonMutipleSetValue = document.createElement('button');
buttonMutipleSetValue.innerHTML = 'Set Value';
buttonMutipleSetValue.setAttribute('class', 'set-value');
buttonMutipleSetValue.addEventListener('click', function () {
    MutipleSetValue.setValue(['Orange', 'Banana']);
})

MutipleSetValueEl.appendChild(MutipleSetValue.render());
MutipleSetValueEl.appendChild(buttonMutipleSetValue);
let MutipleSetValueCell = testgrid.getCell(posConfig.Multiple_Choice.x, 12);
MutipleSetValueCell.appendChild(MutipleSetValueEl);


// Render() - get value item index
let MutipleGetValue = new kintoneUIComponent.MultipleChoice({
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
            isVisible: false
        }
    ],
});
let MutipleGetValueEl = document.createElement('div');
MutipleGetValueEl.setAttribute('class', 'multiple-getValue');

let buttonMutipleGetValue = document.createElement('button');
buttonMutipleGetValue.innerHTML = 'Get Value';
buttonMutipleGetValue.setAttribute('class', 'get-value');
buttonMutipleGetValue.addEventListener('click', function () {
    alert(MutipleGetValue.getValue());
})

MutipleGetValueEl.appendChild(MutipleGetValue.render());
MutipleGetValueEl.appendChild(buttonMutipleGetValue);
let MutipleGetValueCell = testgrid.getCell(posConfig.Multiple_Choice.x, 13);
MutipleGetValueCell.appendChild(MutipleGetValueEl);


// Render() - disable item index
let MutipleDisableItems = new kintoneUIComponent.MultipleChoice({
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
});
let MutipleDisableItemsEl = document.createElement('div');
MutipleDisableItemsEl.setAttribute('class', 'multiple-disableItems');

let buttonMutipleDisableItems = document.createElement('button');
buttonMutipleDisableItems.innerHTML = 'Disabled Item';
buttonMutipleDisableItems.setAttribute('class', 'disable-items');
buttonMutipleDisableItems.addEventListener('click', function () {
    MutipleDisableItems.disableItem('Orange');
})

MutipleDisableItemsEl.appendChild(MutipleDisableItems.render());
MutipleDisableItemsEl.appendChild(buttonMutipleDisableItems);
let MutipleDisableItemsCell = testgrid.getCell(posConfig.Multiple_Choice.x, 14);
MutipleDisableItemsCell.appendChild(MutipleDisableItemsEl);


// Render() - enable item index
let MutipleEnableItems = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
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
});
let MutipleEnableItemsEl = document.createElement('div');
MutipleEnableItemsEl.setAttribute('class', 'multiple-enableItems');

let buttonMutipleEnableItems = document.createElement('button');
buttonMutipleEnableItems.innerHTML = 'Enabled Item';
buttonMutipleEnableItems.setAttribute('class', 'enable-items');
buttonMutipleEnableItems.addEventListener('click', function () {
    MutipleEnableItems.enableItem('Orange');
})

MutipleEnableItemsEl.appendChild(MutipleEnableItems.render());
MutipleEnableItemsEl.appendChild(buttonMutipleEnableItems);
let MutipleEnableItemsCell = testgrid.getCell(posConfig.Multiple_Choice.x, 15);
MutipleEnableItemsCell.appendChild(MutipleEnableItemsEl);



// Render() - enable item index
let InsvisibleMutipleEnableItems = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
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
    isVisible: false
});
let InsvisibleMutipleEnableItemsEl = document.createElement('div');
InsvisibleMutipleEnableItemsEl.setAttribute('class', 'invisibleMultiple-enableItems');

let buttonInsvisibleMutipleEnableItems = document.createElement('button');
buttonInsvisibleMutipleEnableItems.innerHTML = 'Enabled Item';
buttonInsvisibleMutipleEnableItems.setAttribute('class', 'enable-items');
buttonInsvisibleMutipleEnableItems.addEventListener('click', function () {
    InsvisibleMutipleEnableItems.enableItem('Orange');
    InsvisibleMutipleEnableItems.show()
})

InsvisibleMutipleEnableItemsEl.appendChild(InsvisibleMutipleEnableItems.render());
InsvisibleMutipleEnableItemsEl.appendChild(buttonInsvisibleMutipleEnableItems);
let InsvisibleMutipleEnableItemsCell = testgrid.getCell(posConfig.Multiple_Choice.x, 16);
InsvisibleMutipleEnableItemsCell.appendChild(InsvisibleMutipleEnableItemsEl);


// Render() - show
let MutipleShow = new kintoneUIComponent.MultipleChoice({
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
    isVisible: false
});
let MutipleShowEl = document.createElement('div');
MutipleShowEl.setAttribute('class', 'multiple-show');

let buttonMutipleShow = document.createElement('button');
buttonMutipleShow.innerHTML = 'Show Multiple';
buttonMutipleShow.setAttribute('class', 'show-multiple');
buttonMutipleShow.addEventListener('click', function () {
    MutipleShow.show()
})

MutipleShowEl.appendChild(MutipleShow.render());
MutipleShowEl.appendChild(buttonMutipleShow);
let MutipleShowCell = testgrid.getCell(posConfig.Multiple_Choice.x, 17);
MutipleShowCell.appendChild(MutipleShowEl);


// Render() - hide
let MutipleHide = new kintoneUIComponent.MultipleChoice({
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
    isVisible: true
});
let MutipleHideEl = document.createElement('div');
MutipleHideEl.setAttribute('class', 'multiple-hide');

let buttonMutipleHide = document.createElement('button');
buttonMutipleHide.innerHTML = 'Hide Multiple';
buttonMutipleHide.setAttribute('class', 'hide-multiple');
buttonMutipleHide.addEventListener('click', function () {
    MutipleHide.hide()
})

MutipleHideEl.appendChild(MutipleHide.render());
MutipleHideEl.appendChild(buttonMutipleHide);
let MutipleHideCell = testgrid.getCell(posConfig.Multiple_Choice.x, 18);
MutipleHideCell.appendChild(MutipleHideEl);


// Render() - enable
let MutipleEnable = new kintoneUIComponent.MultipleChoice({
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
    isDisabled: true
});
let MutipleEnableEL = document.createElement('div');
MutipleEnableEL.setAttribute('class', 'multiple-enable');

let buttonMutipleEnable = document.createElement('button');
buttonMutipleEnable.innerHTML = 'Enable Multiple';
buttonMutipleEnable.setAttribute('class', 'enable-multiple');
buttonMutipleEnable.addEventListener('click', function () {
    MutipleEnable.enable()
})

MutipleEnableEL.appendChild(MutipleEnable.render());
MutipleEnableEL.appendChild(buttonMutipleEnable);
let MutipleEnableCell = testgrid.getCell(posConfig.Multiple_Choice.x, 19);
MutipleEnableCell.appendChild(MutipleEnableEL);


// Render() - disable
let MutipleDisable = new kintoneUIComponent.MultipleChoice({
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
    isDisabled: false
});
let MutipleDisableEl = document.createElement('div');
MutipleDisableEl.setAttribute('class', 'multiple-disable');

let buttonMutipleDisable = document.createElement('button');
buttonMutipleDisable.innerHTML = 'Disable Multiple';
buttonMutipleDisable.setAttribute('class', 'disable-multiple');
buttonMutipleDisable.addEventListener('click', function () {
    MutipleDisable.disable()
})

MutipleDisableEl.appendChild(MutipleDisable.render());
MutipleDisableEl.appendChild(buttonMutipleDisable);
let MutipleDisableCell = testgrid.getCell(posConfig.Multiple_Choice.x, 20);
MutipleDisableCell.appendChild(MutipleDisableEl);


// Render() - trigger event
let MutipleOnCall = new kintoneUIComponent.MultipleChoice({
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
    isDisabled: false,
});
let MutipleOnCallEl = document.createElement('div');
MutipleOnCallEl.setAttribute('class', 'multiple-onCall');
MutipleOnCall.on('change', function (value) {
    alert('value: ' + value)
})
MutipleOnCallEl.appendChild(MutipleOnCall.render());
let MutipleOnCallCell = testgrid.getCell(posConfig.Multiple_Choice.x, 21);
MutipleOnCallCell.appendChild(MutipleOnCallEl);

















