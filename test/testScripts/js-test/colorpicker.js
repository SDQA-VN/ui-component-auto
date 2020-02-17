const common = require('../../utils/Common.js');
const expect = require('chai').expect;
const Helper = require('../../helper/main')

const XPATH_CONSTRUCTOR_COLORPICKER = "//div[@id='constructor-colorpicker']//div/input";
const XPATH_CONSTRUCTOR_COLORPICKER_CANCEL_BUTTON = "//div[@id='constructor-colorpicker']//button[@class='kuc-btn normal']";
const XPATH_CONSTRUCTOR_COLORPICKER_SATURATION = "//div[@id='constructor-colorpicker']/div[position()=2]/div[position()=1]//canvas";
const XPATH_CONSTRUCTOR_COLORPICKER_HUE = "//div[@id='constructor-colorpicker']/div[position()=2]/div[position()=2]//canvas";
const XPATH_CONSTRUCTOR_COLORPICKER_HEX_FIELD = "//div[@id='colorpicker-content']//input[@id='hex-value']";
const XPATH_CONSTRUCTOR_COLORPICKER_RGB_R_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=1]//div[position()=1]//input";
const XPATH_CONSTRUCTOR_COLORPICKER_RGB_G_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=1]//div[position()=2]//input";
const XPATH_CONSTRUCTOR_COLORPICKER_RGB_B_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=1]//div[position()=3]//input";
const XPATH_CONSTRUCTOR_COLORPICKER_HUE_H_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=2]//div[position()=1]//input";
const XPATH_CONSTRUCTOR_COLORPICKER_HUE_U_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=2]//div[position()=2]//input";
const XPATH_CONSTRUCTOR_COLORPICKER_HUE_E_FIELD = "//div[@id='colorpicker-content']//div[position()=3]/div[position()=2]//div[position()=3]//input";
const XPATH_GET_COLOR_COLORPICKER = "//div[@id='get-color-colorpicker']//div/input";
const XPATH_GET_COLOR_COLORPICKER_BUTTON = "//button[contains(text(), 'Get Color of ColorPicker')]";
const XPATH_SET_COLOR_COLORPICKER = "//div[@id='set-color-colorpicker']//div/input";
const XPATH_SET_COLOR_COLORPICKER_BUTTON = "//button[contains(text(), 'Set Color of ColorPicker')]";
const XPATH_SHOW_COLORPICKER = "//div[@id='show-colorpicker']//div/input";
const XPATH_SHOW_COLORPICKER_BUTTON = "//button[contains(text(), 'Show ColorPicker')]";
const XPATH_HIDE_COLORPICKER = "//div[@id='hide-colorpicker']//div/input";
const XPATH_HIDE_COLORPICKER_BUTTON = "//button[contains(text(), 'Hide ColorPicker')]";
const XPATH_DISABLE_COLORPICKER = "//div[@id='disable-colorpicker']//div/input";
const XPATH_DISABLE_COLORPICKER_BUTTON = "//button[contains(text(), 'Disable ColorPicker')]";
const XPATH_ENABLE_COLORPICKER = "//div[@id='enable-colorpicker']//div/input";
const XPATH_ENABLE_COLORPICKER_BUTTON = "//button[contains(text(), 'Enable ColorPicker')]";
const XPATH_CALLBACK_COLORPICKER = "//div[@id='on-callback-colorpicker']//div/input";
const XPATH_CALLBACK_COLORPICKER_BUTTON = "//div[@id='on-callback-colorpicker']//button[@class='kuc-btn submit']"
const XPATH_TRIGGER_COLORPICKER = "//div[@id='callback-trigger-colorpicker']//div/input";
const XPATH_TRIGGER_COLORPICKER_BUTTON = "//div[@id='callback-trigger-colorpicker']//button[@class='kuc-btn submit']"

describe('kintoneUIComponent - Alert', () => {
  before(() => {
    common.logInSlash();
  });
  after(() => {
    common.logOutSlash();
  });

  it('[Colorpicker-2-3-4-7] should checking HEX input field, ColorPicker popup window displayed, operation of Saturation,Hue,RGB input, full option ColorPicker  ', function () {
    Helper.ElementHandler
      .verifyValue(XPATH_CONSTRUCTOR_COLORPICKER, '#ecd110')
      .verifyElementColor(XPATH_CONSTRUCTOR_COLORPICKER, 'background-color', '#ecd110')
      .click(XPATH_CONSTRUCTOR_COLORPICKER)

    const verify = (verifyObj, expectObj) => {
      expect(verifyObj.Rfield).to.equal(expectObj.r);
      expect(verifyObj.Gfield).to.equal(expectObj.g);
      expect(verifyObj.Bfield).to.equal(expectObj.b);
      expect(verifyObj.Hfield).to.equal(expectObj.h);
      expect(verifyObj.Ufield).to.equal(expectObj.u);
      expect(verifyObj.Efield).to.equal(expectObj.e);
    }

    const getVerifyObj = () => {
      return verifyObject = {
        Rfield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_R_FIELD),
        Gfield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_G_FIELD),
        Bfield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_B_FIELD),
        Hfield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_H_FIELD),
        Ufield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_U_FIELD),
        Efield: Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_E_FIELD),
      };
    }

    verify(getVerifyObj(), { r: '236', g: '209', b: '16', h: '0.1', u: '0.9', e: '0.9' });

    // verify click on saturation
    Helper.ElementHandler
      .moveToObject(XPATH_CONSTRUCTOR_COLORPICKER_SATURATION, 30, 40)
      .click(XPATH_CONSTRUCTOR_COLORPICKER_SATURATION)
    verify(getVerifyObj(), { r: '91', g: '84', b: '35', h: '0.1', u: '0.6', e: '0.4' });

    // verify click on hue
    Helper.ElementHandler
      .moveToObject(XPATH_CONSTRUCTOR_COLORPICKER_HUE, 10, 92)
      .click(XPATH_CONSTRUCTOR_COLORPICKER_HUE)
    verify(getVerifyObj(), { r: '0', g: '243', b: '255', h: '0.5', u: '1.0', e: '1.0' });

    let checkHex = Helper.ElementHandler.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HEX_FIELD)

    Helper.ElementHandler
      .verifyValue(XPATH_CONSTRUCTOR_COLORPICKER_HEX_FIELD, checkHex)
      .verifyElementColor(XPATH_CONSTRUCTOR_COLORPICKER, 'background-color', '#00f3ff')
      .click(XPATH_CONSTRUCTOR_COLORPICKER_CANCEL_BUTTON)
  });

  it('[Colorpicker-18] should get color of Colorpicker by using getColor()', () => {
    let hexField = Helper.ElementHandler.getValue(XPATH_GET_COLOR_COLORPICKER)
    Helper.ElementHandler
      .click(XPATH_GET_COLOR_COLORPICKER_BUTTON)
      .verifyAlertText(hexField)
  });

  it('[Colorpicker-23] should set color of Colorpicker by using setColor()', () => {
    Helper.ElementHandler
      .verifyValue(XPATH_SET_COLOR_COLORPICKER, '#00B7FF')
      .click(XPATH_SET_COLOR_COLORPICKER_BUTTON)
      .verifyValue(XPATH_SET_COLOR_COLORPICKER, '#e74c3c')
  });

  it('[Colorpicker-29] should show invisible Colorpicker', () => {
    Helper.ElementHandler
      .verifyElementNotDisplayed(XPATH_SHOW_COLORPICKER)
      .click(XPATH_SHOW_COLORPICKER_BUTTON)
      .verifyElementDisplayed(XPATH_SHOW_COLORPICKER)
  });

  it('[Colorpicker-30] should hide invisible Colorpicker', () => {
    Helper.ElementHandler
      .verifyElementDisplayed(XPATH_HIDE_COLORPICKER)
      .click(XPATH_HIDE_COLORPICKER_BUTTON)
      .verifyElementNotDisplayed(XPATH_HIDE_COLORPICKER)
  });

  it('[Colorpicker-32] should disable the current enabled Colorpicker', () => {
    Helper.ElementHandler
      .verifyElementEnabled(XPATH_DISABLE_COLORPICKER)
      .click(XPATH_DISABLE_COLORPICKER_BUTTON)
      .verifyElementDisabled(XPATH_DISABLE_COLORPICKER)
  });

  it('[Colorpicker-33] should enable the current disabled Colorpicker', () => {
    Helper.ElementHandler
      .verifyElementDisabled(XPATH_ENABLE_COLORPICKER)
      .click(XPATH_ENABLE_COLORPICKER_BUTTON)
      .verifyElementEnabled(XPATH_ENABLE_COLORPICKER)
  });

  it('[Colorpicker-34] should register a callback function for change event successfully', () => {
    Helper.ElementHandler
      .click(XPATH_CALLBACK_COLORPICKER)
      .click(XPATH_CALLBACK_COLORPICKER_BUTTON)
      .verifyAlertText('onCallbackFunctionColorPicker has been clicked')
  });

  it('[Colorpicker-35] should callback function will be trigger when click on button OK in the HEX string', () => {
    Helper.ElementHandler
      .click(XPATH_TRIGGER_COLORPICKER)
      .click(XPATH_TRIGGER_COLORPICKER_BUTTON)
      .verifyAlertText('onCallbackTriggerAlert has been clicked')
  });
})