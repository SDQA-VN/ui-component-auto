// constructor&render
let colorPicker_constructor = new kintoneUIComponent.ColorPicker({
    color: '#ecd110',
    isDisabled: false,
    isVisible: true
});
let colorPicker_constructorEl = colorPicker_constructor.render();
let canvas = document.createElement('div');
canvas.id='colorpicker-content';
colorPicker_constructorEl.id = 'constructor-colorpicker';
const textFields = document.createElement("INPUT");
textFields.id='hex-value';
textFields.setAttribute("type", "value");
let colorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 1);
canvas.appendChild(textFields);
canvas.appendChild(colorPicker_constructorEl);
colorPickerCell.appendChild(canvas);
const locatorSatur = document.getElementById('constructor-colorpicker').getElementsByTagName("canvas")[0];
getHexValue(locatorSatur, textFields);
const locatorHue = document.getElementById('constructor-colorpicker').getElementsByTagName("canvas")[1];
getHexValue(locatorHue, textFields);

function getHexValue(locator, textFields) {
    locator.addEventListener('mousemove', function (e) {
        var pos = findPos(this);
        var x = e.pageX - pos.x;
        var y = e.pageY - pos.y;
        var coord = "x=" + x + ", y=" + y;
        var c = this.getContext('2d');
        var p = c.getImageData(x, y, 1, 1).data;
        var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
        textFields.value = hex
        console.log(coord);
    })

    function findPos(obj) {
        var curleft = 0, curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: curleft, y: curtop };
        }
        return undefined;
    }

    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            // eslint-disable-next-line no-throw-literal
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }
}

//getColor of colorpicker
let getColor_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00b7ff',
    isDisabled: false,
    isVisible: true
});
let getColor_ColorPickerEl = getColor_ColorPicker.render();
getColor_ColorPickerEl.id = 'get-color-colorpicker';
let buttonGetColor = document.createElement('button');
buttonGetColor.innerHTML = 'Get Color of ColorPicker';
buttonGetColor.addEventListener('click',function(){
    alert(getColor_ColorPicker.getColor());
})
let getColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 2);
getColor_ColorPickerEl.appendChild(buttonGetColor);
getColorPickerCell.appendChild(getColor_ColorPickerEl);

//setColor of colorpicker
let setColor_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00B7FF',
    isDisabled: false,
    isVisible: true
});
let setColor_ColorPickerEl = setColor_ColorPicker.render();
setColor_ColorPickerEl.id = 'set-color-colorpicker';
let buttonSetColor = document.createElement('button');
buttonSetColor.innerHTML = 'Set Color of ColorPicker';
buttonSetColor.addEventListener('click',function(){
    setColor_ColorPicker.setColor('#e74c3c');
})
let setColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 3);
setColor_ColorPickerEl.appendChild(buttonSetColor);
setColorPickerCell.appendChild(setColor_ColorPickerEl);

//show Invisible Colorpicker
let show_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00b7ff',
    isVisible: false
});
let show_ColorPickerEl = show_ColorPicker.render();
show_ColorPickerEl.id = 'show-colorpicker';
let buttonShowColorPicker = document.createElement('button');
buttonShowColorPicker.innerHTML = 'Show ColorPicker';
buttonShowColorPicker.addEventListener('click',function(){
    show_ColorPicker.show();
})
let showColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 4);
showColorPickerCell.appendChild(show_ColorPickerEl);
showColorPickerCell.appendChild(buttonShowColorPicker);

//hide Visible Colorpicker
let hide_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00b7ff',
    isVisible: true
});
let hide_ColorPickerEl = hide_ColorPicker.render();
hide_ColorPickerEl.id = 'hide-colorpicker';
let buttonHideColorPicker = document.createElement('button');
buttonHideColorPicker.innerHTML = 'Hide ColorPicker';
buttonHideColorPicker.addEventListener('click',function(){
    hide_ColorPicker.hide();
})
let hideColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 5);
hideColorPickerCell.appendChild(hide_ColorPickerEl);
hideColorPickerCell.appendChild(buttonHideColorPicker);

//Disable the current enabled Colorpicker
let disable_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00b7ff',
    isDisabled: false
});
let disable_ColorPickerEl = disable_ColorPicker.render();
disable_ColorPickerEl.id = 'disable-colorpicker';
let buttonDisableColorPicker = document.createElement('button');
buttonDisableColorPicker.innerHTML = 'Disable ColorPicker';
buttonDisableColorPicker.addEventListener('click',function(){
    disable_ColorPicker.disable();
})
let disableColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 6);
disableColorPickerCell.appendChild(disable_ColorPickerEl);
disableColorPickerCell.appendChild(buttonDisableColorPicker);

//Enable the current disabled Colorpicker
let enable_ColorPicker = new kintoneUIComponent.ColorPicker({
    color: '#00b7ff',
    isDisabled: true
});
let enable_ColorPickerEl = enable_ColorPicker.render();
enable_ColorPickerEl.id = 'enable-colorpicker';
let buttonEnableColorPicker = document.createElement('button');
buttonEnableColorPicker.innerHTML = 'Enable ColorPicker';
buttonEnableColorPicker.addEventListener('click',function(){
    enable_ColorPicker.enable();
})
let enableColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 7);
enableColorPickerCell.appendChild(enable_ColorPickerEl);
enableColorPickerCell.appendChild(buttonEnableColorPicker);

//callback function
let onCallbackFunctionColorPicker = new kintoneUIComponent.ColorPicker({
    color:'#00b7ff'
});
let onCallbackFunctionEl = onCallbackFunctionColorPicker.render();
onCallbackFunctionEl.id = 'on-callback-colorpicker';
let callbackColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 8);
onCallbackFunctionColorPicker.on('change', function (event) {
    alert('onCallbackFunctionColorPicker has been clicked');
});
callbackColorPickerCell.appendChild(onCallbackFunctionEl);

//callback trigger
let onCallbackTriggerColorPicker = new kintoneUIComponent.ColorPicker({
    color:'#00b7ff'
});
let onCallbackTriggerEl = onCallbackTriggerColorPicker.render();
onCallbackTriggerEl.id = 'callback-trigger-colorpicker';
let callbackTriggerColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 9);
function triggerClick() {
    alert('onCallbackTriggerAlert has been clicked');
}
onCallbackTriggerColorPicker.on('change', triggerClick);
callbackTriggerColorPickerCell.appendChild(onCallbackTriggerEl);