const $ = require('../../util/ReturnElement').singleElement;
const isVisibled = require('../../util/ReturnElement').waitUntilSelectorVisibled;
const common = require('../../util/common');
const expect = require('chai').expect;

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
    let checkHex = browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER);
    let checkColor = $(XPATH_CONSTRUCTOR_COLORPICKER).getCssProperty('background-color');
    expect(checkHex).to.equal('#ecd110');
    expect(checkColor.parsed.hex).to.equal('#ecd110');
    $(XPATH_CONSTRUCTOR_COLORPICKER).click();

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
        Rfield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_R_FIELD),
        Gfield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_G_FIELD),
        Bfield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_RGB_B_FIELD),
        Hfield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_H_FIELD),
        Ufield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_U_FIELD),
        Efield: browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER_HUE_E_FIELD),
      };
    }

    verify(getVerifyObj(), { r: '236', g: '209', b: '16', h: '0.1', u: '0.9', e: '0.9' });
    browser.leftClick(XPATH_CONSTRUCTOR_COLORPICKER_SATURATION, 82, 58);
    let getHexColor = $(XPATH_CONSTRUCTOR_COLORPICKER_HEX_FIELD).getValue();
    verify(getVerifyObj(), { r: '132', g: '124', b: '67', h: '0.1', u: '0.5', e: '0.5' });

    browser.leftClick(XPATH_CONSTRUCTOR_COLORPICKER_HUE, 10, 92);
    verify(getVerifyObj(), { r: '0', g: '183', b: '255', h: '0.5', u: '1.0', e: '1.0' });

    getHexColor = $(XPATH_CONSTRUCTOR_COLORPICKER_HEX_FIELD).getValue();
    checkHex = browser.getValue(XPATH_CONSTRUCTOR_COLORPICKER);
    checkColor = $(XPATH_CONSTRUCTOR_COLORPICKER).getCssProperty('background-color');
    expect(getHexColor).to.equal(checkHex);
    expect(checkColor.parsed.hex).to.equal('#00b7ff');
    $(XPATH_CONSTRUCTOR_COLORPICKER_CANCEL_BUTTON).click();
  });

  it('[Colorpicker-18] should get color of Colorpicker by using getColor()', () => {
    let hexField = browser.getValue(XPATH_GET_COLOR_COLORPICKER);
    $(XPATH_GET_COLOR_COLORPICKER_BUTTON).click();
    alertText = browser.alertText();
    browser.alertAccept();
    expect(alertText).to.equal(hexField);
  });

  it('[Colorpicker-23] should set color of Colorpicker by using setColor()', () => {
    let hexField = browser.getValue(XPATH_SET_COLOR_COLORPICKER);
    expect(hexField).to.equal('#00B7FF');
    $(XPATH_SET_COLOR_COLORPICKER_BUTTON).click();
    hexField = browser.getValue(XPATH_SET_COLOR_COLORPICKER);
    expect(hexField).to.equal('#e74c3c');
  });

  it('[Colorpicker-29] should show invisible Colorpicker', () => {
    let checkVisible = browser.isVisible(XPATH_SHOW_COLORPICKER);
    expect(checkVisible).to.equal(false);
    $(XPATH_SHOW_COLORPICKER_BUTTON).click();
    checkVisible = browser.isVisible(XPATH_SHOW_COLORPICKER);
    expect(checkVisible).to.equal(true);
  });

  it('[Colorpicker-30] should hide invisible Colorpicker', () => {
    let checkVisible = browser.isVisible(XPATH_HIDE_COLORPICKER);
    expect(checkVisible).to.equal(true);
    $(XPATH_HIDE_COLORPICKER_BUTTON).click();
    checkVisible = browser.isVisible(XPATH_HIDE_COLORPICKER);
    expect(checkVisible).to.equal(false);
  });

  it('[Colorpicker-32] should disable the current enabled Colorpicker', () => {
    let checkDisable = browser.isEnabled(XPATH_DISABLE_COLORPICKER);
    expect(checkDisable).to.equal(true);
    $(XPATH_DISABLE_COLORPICKER_BUTTON).click();
    checkDisable = browser.isEnabled(XPATH_DISABLE_COLORPICKER);
    expect(checkDisable).to.equal(false);
  });

  it('[Colorpicker-33] should enable the current disabled Colorpicker', () => {
    let checkDisable = browser.isEnabled(XPATH_ENABLE_COLORPICKER);
    expect(checkDisable).to.equal(false);
    $(XPATH_ENABLE_COLORPICKER_BUTTON).click();
    checkDisable = browser.isEnabled(XPATH_ENABLE_COLORPICKER);
    expect(checkDisable).to.equal(true);
  });

  it('[Colorpicker-34] should register a callback function for change event successfully', () => {
    $(XPATH_CALLBACK_COLORPICKER).click();
    $(XPATH_CALLBACK_COLORPICKER_BUTTON).click();
    alertText = browser.alertText();
    browser.alertAccept();
    expect(alertText).to.equal('onCallbackFunctionColorPicker has been clicked');
  });

  it('[Colorpicker-35] should callback function will be trigger when click on button OK in the HEX string', () => {
    $(XPATH_TRIGGER_COLORPICKER).click();
    $(XPATH_TRIGGER_COLORPICKER_BUTTON).click();
    alertText = browser.alertText();
    browser.alertAccept();
    expect(alertText).to.equal('onCallbackTriggerAlert has been clicked');
  });

})