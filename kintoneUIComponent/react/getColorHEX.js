(function () {
    "use strict";
    kintone.events.on('app.record.index.show', function (event) {
        const locatorSatur = document.getElementById("constructor-colorpicker").getElementsByTagName("canvas")[0];
        const textField = document.getElementById("hex-value");
        const locatorHue = document.getElementById('constructor-colorpicker').getElementsByTagName("canvas")[1];
        getHexValue(locatorSatur, textField);
        getHexValue(locatorHue, textField);

        function getHexValue(locator, textField) {
            locator.addEventListener('mousemove', function (e) {
                var pos = findPos(this);
                var x = e.pageX - pos.x;
                var y = e.pageY - pos.y;
                var coord = "x=" + x + ", y=" + y;
                var c = this.getContext('2d');
                var p = c.getImageData(x, y, 1, 1).data;
                var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
                textField.value = hex
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
    })
}())