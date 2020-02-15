const expect = require('chai').expect;

class ElementHandler {
    /**
    * @param {string} locator    Element for wait
    */
    waitForElement(locator) {
        $(locator).waitForExist(30000, false);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does not exist").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotExisting(locator) {
        expect($(locator).isExisting(), "Element " + locator + " does exist").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisplayed(locator) {
        expect($(locator).isDisplayed(), "Element " + locator + " is not displayed").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementNotDisplayed(locator) {
        expect($(locator).isDisplayed(), "Element " + locator + " is displayed").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementEnabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not enabled").to.be.true;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    verifyElementDisabled(locator) {
        expect($(locator).isEnabled(), "Element " + locator + " is not disabled").to.be.false;
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} text       Text for verify
    */
    verifyText(locator, text) {
        expect($(locator).getText()).to.equal(text);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    getText(locator) {
        return $(locator).getText();
    }

    /**
    * @param {string} locator    Element for verify
    */
    getValue(locator) {
        return $(locator).getValue();
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} width    Element for verify
    * @param {number} height   Element for verify
    */
    verifyElementSize(locator, width, height) {
        let elementSize = $(locator).getSize();
        expect(elementSize.width).to.equal(width);
        expect(elementSize.height).to.equal(height);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} value    Color for verify
    */
    verifyElementColor(locator, attribute, value) {
        let elementColor = $(locator).getCSSProperty(attribute);
        expect(elementColor.parsed.hex).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} value    Position for verify
    */
    verifyElementPosition(locator, attribute, value) {
        let elementPosition = $(locator).getCSSProperty(attribute);
        expect(elementPosition.value).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator  Element for verify
    * @param {number} width    Element for verify
    * @param {number} height   Element for verify
    */

    verifyElementSizeDragAndDrop(locator, width, height) {
        let elementSize = $(locator).getSize();
        expect(elementSize.width >= width).to.equal(true);
        expect(elementSize.height >= height).to.equal(true);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} text       Text for verify
    */
    verifyTextContains(locator, text) {
        this.waitForElement(locator);
        expect($(locator).getText()).to.include(text);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    getAttribute(locator, attribute) {
        return $(locator).getAttribute(attribute);
    }


    /**
    * @param {string} title    Element for verify
    */
    verifyTitle(title) {
        browser.waitUntil(() => {
            return browser.getTitle() === title;
        }, 30000, `${title} is not correct`);
        return this;
    }

    /**
    * @param {string} url    URL for verify
    */
    verifyURL(url) {
        browser.waitUntil(() => {
            return browser.getUrl() === url;
        }, 30000, `${url} is not correct`);
        return this;
    }

    /**
    * @param {string} text    text for verify
    */
    verifyAlertText(text) {
        let alertText = browser.getAlertText()
        expect(alertText).to.equal(text);
        browser.acceptAlert();
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    setValue(locator, value) {
        this.waitForElement(locator);
        $(locator).setValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for set value
    * @param {string} value    Value for enter
    */
    addValue(locator, value) {
        this.waitForElement(locator);
        $(locator).addValue(value);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} value       Value for verify
    */
    verifyValue(locator, value) {
        expect($(locator).getValue()).to.equal(value);
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    * @param {number} value       Value for verify
    */

    verifyNumberOfElements(locator, value) {
        expect($$(locator).length).to.equal(value)
        return this
    }

    /**
    * @param {string} locator    Element for verify
    * @param {string} attribute    Attribute for verify
    * @param {string} value    Value for verify
    */
    verifyAttribute(locator, attribute, value) {
        let result = this.getAttribute(locator, attribute)
        expect(result).to.include(value);
        return this;
    }


    /**
    * @param {string} locator    Element for verify
    * @param {string} attribute    Attribute for verify
    * @param {string} value    Value for verify
    */
    verifyAttributeIsNotIncludeValue(locator, attribute, value) {
        let result = this.getAttribute(locator, attribute)
        expect(result).to.not.include(value);
        return this;
    }

    /**
   * @param {string} locator    Element for verify
   */
    waitForElementClickable(locator) {
        $(locator).waitForClickable({ timeout: 3000 });
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    click(locator) {
        this.waitForElementClickable(locator);
        $(locator).click();
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    moveToObject(locator) {
        $(locator).moveTo()
        return this;
    }

    /**
    * @param {string} sourceLocator    Element for verify
    * @param {string} destinationLocator    Element for verify
    */
    dragAndDrop(sourceLocator, destinationLocator) {
        this.waitForElement(sourceLocator)
        this.waitForElement(destinationLocator)
        $(sourceLocator).dragAndDrop(destinationLocator)
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    buttonUp() {
        browser.buttonUp()
        return this;
    }

    /**
    * @param {string} locator    Element for verify
    */
    buttonDown() {
        browser.buttonDown()
        return this;
    }
}


module.exports = new ElementHandler();