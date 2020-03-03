import {ColorPicker} from '@kintone/kintone-ui-component/esm/js';

// constructor&render
let colorPicker_constructor = new ColorPicker({
    color: '#ecd110',
    isDisabled: false,
    isVisible: true
});
let colorPicker_constructorEl = colorPicker_constructor.render();
let canvas = document.createElement('div');
canvas.id='colorpicker-content';
colorPicker_constructorEl.id = 'full-option-colorpicker';
const textFields = document.createElement("INPUT");
textFields.id='hex-value';
textFields.setAttribute("type", "value");
canvas.appendChild(textFields);
canvas.appendChild(colorPicker_constructorEl);

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
let getColor_ColorPicker = new ColorPicker({
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
getColor_ColorPickerEl.appendChild(buttonGetColor);

//setColor of colorpicker
let setColor_ColorPicker = new ColorPicker({
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
setColor_ColorPickerEl.appendChild(buttonSetColor);

//show Invisible Colorpicker
let show_ColorPicker = new ColorPicker({
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
let showColorPickerDiv = document.createElement('div');
showColorPickerDiv.appendChild(show_ColorPickerEl);
showColorPickerDiv.appendChild(buttonShowColorPicker);

//hide Visible Colorpicker
let hide_ColorPicker = new ColorPicker({
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
let hideColorPickerDiv = document.createElement('div');
hideColorPickerDiv.appendChild(hide_ColorPickerEl);
hideColorPickerDiv.appendChild(buttonHideColorPicker);

//Disable the current enabled Colorpicker
let disable_ColorPicker = new ColorPicker({
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
let disableColorPickerDiv = document.createElement('div');
disableColorPickerDiv.appendChild(disable_ColorPickerEl);
disableColorPickerDiv.appendChild(buttonDisableColorPicker);

//Enable the current disabled Colorpicker
let enable_ColorPicker = new ColorPicker({
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
let enableColorPickerDiv = document.createElement('div');
enableColorPickerDiv.appendChild(enable_ColorPickerEl);
enableColorPickerDiv.appendChild(buttonEnableColorPicker);

//callback function
let onCallbackFunctionColorPicker = new ColorPicker({
    color:'#00b7ff'
});
let onCallbackFunctionEl = onCallbackFunctionColorPicker.render();
onCallbackFunctionEl.id = 'callback-function-colorpicker';
onCallbackFunctionColorPicker.on('change', function (event) {
    alert('onCallbackFunctionColorPicker has been clicked');
});

//callback trigger
let onCallbackTriggerColorPicker = new ColorPicker({
    color:'#00b7ff'
});
let onCallbackTriggerEl = onCallbackTriggerColorPicker.render();
onCallbackTriggerEl.id = 'callback-trigger-colorpicker';
function triggerClick() {
    alert('onCallbackTriggerAlert has been clicked');
}
onCallbackTriggerColorPicker.on('change', triggerClick);

export default {
    canvas,
    textFields,
    getHexValue,
    getColor_ColorPickerEl,
    setColor_ColorPickerEl,
    showColorPickerDiv,
    hideColorPickerDiv,
    disableColorPickerDiv,
    enableColorPickerDiv,
    onCallbackFunctionEl,
    onCallbackTriggerEl
}