// //kintone-ui-component Icon Button
// //https://sharedoc.atlassian.net/wiki/spaces/SC/pages/86737727/kintone-ui-component+IconButton
// 'use strict';

// Render() - full option value
let cons_full_value = new kintoneUIComponent.IconButton({
    type: 'insert',
    color: 'blue',
    size: 'small',
    isDisabled: false,
    isVisible: true
});
let iconFullOptionEl = document.createElement('div')
iconFullOptionEl.setAttribute("id", "icon-full-options");
iconFullOptionEl.appendChild(cons_full_value.render())
let iconFullOptionCell = testgrid.getCell(posConfig.Icon_Button.x, 1);
iconFullOptionCell.appendChild(iconFullOptionEl);


// only option.type = insert
let cons_type_insert = new kintoneUIComponent.IconButton({
    type: 'insert'
});
let iconTypeInsertEl = document.createElement('div')
iconTypeInsertEl.setAttribute("id", "icon-only-type");
iconTypeInsertEl.appendChild(cons_type_insert.render())
let iconTypeInsertCell = testgrid.getCell(posConfig.Icon_Button.x, 2);
iconTypeInsertCell.appendChild(iconTypeInsertEl);


// only option.color = green
let cons_color_green = new kintoneUIComponent.IconButton({
    color: 'green'
});
let iconColorGreenEl = document.createElement('div')
iconColorGreenEl.setAttribute("id", "icon-only-color");
iconColorGreenEl.appendChild(cons_color_green.render())
let iconColorGreenCell = testgrid.getCell(posConfig.Icon_Button.x, 3);
iconColorGreenCell.appendChild(iconColorGreenEl);


// only option.isDisabled = true
let cons_disabled = new kintoneUIComponent.IconButton({
    isDisabled: true
});
let iconDisabledEl = document.createElement('div')
iconDisabledEl.setAttribute("id", "icon-disabled");
// set disable
let buttonDisable = document.createElement('button')
buttonDisable.innerHTML = 'Disable Icon'
buttonDisable.addEventListener('click', function () {
    cons_disabled.disable();
})
// set enable
let buttonEnable = document.createElement('button')
buttonEnable.innerHTML = 'Enable Icon'
buttonEnable.addEventListener('click', function () {
    cons_disabled.enable();
})
// show
let buttonShow = document.createElement('button')
buttonShow.innerHTML = 'Show Icon'
buttonShow.addEventListener('click', function () {
    cons_disabled.show();
})
// hide
let buttonHide = document.createElement('button')
buttonHide.innerHTML = 'Hide Icon'
buttonHide.addEventListener('click', function () {
    cons_disabled.hide();
})
iconDisabledEl.appendChild(cons_disabled.render())
iconDisabledEl.appendChild(buttonDisable)
iconDisabledEl.appendChild(buttonEnable)
iconDisabledEl.appendChild(buttonShow)
iconDisabledEl.appendChild(buttonHide)
let iconDisabledCell = testgrid.getCell(posConfig.Icon_Button.x, 4);
iconDisabledCell.appendChild(iconDisabledEl);


// setType
let setTypeForIB = new kintoneUIComponent.IconButton({
    isDisabled: false
});
let iconSetTypeEl = document.createElement('div')
iconSetTypeEl.setAttribute("id", "icon-set-type");
// set type insert
let buttonSetTypeInsert = document.createElement('button')
buttonSetTypeInsert.innerHTML = 'Set Type Insert'
buttonSetTypeInsert.addEventListener('click', function () {
    setTypeForIB.setType('insert');
})
// set type remove
let buttonSetTypeRemove = document.createElement('button')
buttonSetTypeRemove.innerHTML = 'Set Type Remove'
buttonSetTypeRemove.addEventListener('click', function () {
    setTypeForIB.setType('remove');
})
// set type close
let buttonSetTypeClose = document.createElement('button')
buttonSetTypeClose.innerHTML = 'Set Type Close'
buttonSetTypeClose.addEventListener('click', function () {
    setTypeForIB.setType('close');
})
// set type file
let buttonSetTypeFile = document.createElement('button')
buttonSetTypeFile.innerHTML = 'Set Type File'
buttonSetTypeFile.addEventListener('click', function () {
    setTypeForIB.setType('file');
})
// set type right
let buttonSetTypeRight = document.createElement('button')
buttonSetTypeRight.innerHTML = 'Set Type Right'
buttonSetTypeRight.addEventListener('click', function () {
    setTypeForIB.setType('right');
})
// set type left
let buttonSetTypeLeft = document.createElement('button')
buttonSetTypeLeft.innerHTML = 'Set Type Left'
buttonSetTypeLeft.addEventListener('click', function () {
    setTypeForIB.setType('left');
})
// get icon type state
let buttonGetStateType = document.createElement('button')
buttonGetStateType.innerHTML = 'Get State Type'
buttonGetStateType.addEventListener('click', function () {
    let stateOFIB = setTypeForIB._props.type;
    alert(stateOFIB);
})

iconSetTypeEl.appendChild(setTypeForIB.render())
iconSetTypeEl.appendChild(buttonSetTypeInsert)
iconSetTypeEl.appendChild(buttonSetTypeRemove)
iconSetTypeEl.appendChild(buttonSetTypeClose)
iconSetTypeEl.appendChild(buttonSetTypeFile)
iconSetTypeEl.appendChild(buttonSetTypeRight)
iconSetTypeEl.appendChild(buttonSetTypeLeft)
iconSetTypeEl.appendChild(buttonGetStateType)
let iconSetTypeCell = testgrid.getCell(posConfig.Icon_Button.x, 5);
iconSetTypeCell.appendChild(iconSetTypeEl);


// set size
let icon_set_size = new kintoneUIComponent.IconButton({
    type: 'insert',
    isDisabled: false,
    isVisible: true
});
// set size normal
let buttonSetSizeNormal = document.createElement('button')
buttonSetSizeNormal.innerHTML = 'Set Size Normal'
buttonSetSizeNormal.addEventListener('click', function () {
    icon_set_size.setSize('normal');
})
// set size small
let buttonSetSizeSmall = document.createElement('button')
buttonSetSizeSmall.innerHTML = 'Set Size Small'
buttonSetSizeSmall.addEventListener('click', function () {
    icon_set_size.setSize('small');
})
let iconSetSizeEl = document.createElement('div')
iconSetSizeEl.setAttribute("id", "icon-set-size");
iconSetSizeEl.appendChild(icon_set_size.render());
iconSetSizeEl.appendChild(buttonSetSizeNormal);
iconSetSizeEl.appendChild(buttonSetSizeSmall);
let iconSetSizeCell = testgrid.getCell(posConfig.Icon_Button.x, 6);
iconSetSizeCell.appendChild(iconSetSizeEl);

// set shape
let icon_set_shape = new kintoneUIComponent.IconButton({
    type: 'insert',
    isDisabled: false,
    isVisible: true
});
// set shape circle
let buttonSetShapeCirle = document.createElement('button')
buttonSetShapeCirle.innerHTML = 'Set Shape Circle'
buttonSetShapeCirle.addEventListener('click', function () {
    icon_set_shape.setShape('circle');
})
// set shape normal
let buttonSetShapeNormal = document.createElement('button')
buttonSetShapeNormal.innerHTML = 'Set Shape Normal'
buttonSetShapeNormal.addEventListener('click', function () {
    icon_set_shape.setShape('normal');
})
let iconSetShapeEl = document.createElement('div')
iconSetShapeEl.setAttribute("id", "icon-set-shape");
iconSetShapeEl.appendChild(icon_set_shape.render());
iconSetShapeEl.appendChild(buttonSetShapeNormal);
iconSetShapeEl.appendChild(buttonSetShapeCirle);
let iconSetShapeCell = testgrid.getCell(posConfig.Icon_Button.x, 7);
iconSetShapeCell.appendChild(iconSetShapeEl);


// on trigger
let icon_on_trigger = new kintoneUIComponent.IconButton({
    type: 'insert',
    isDisabled: false,
    isVisible: true
});

let iconOnTriggerEl = document.createElement('div')
iconOnTriggerEl.setAttribute("id", "icon-on-trigger");
iconOnTriggerEl.appendChild(icon_on_trigger.render());
let iconOnTriggerCell = testgrid.getCell(posConfig.Icon_Button.x, 8);
iconOnTriggerCell.appendChild(iconOnTriggerEl);
icon_on_trigger.on('click', function(){
    alert('on_click_trigger has been clicked');
});


