class ReturnElement {
    static singleElement(selector) {
        browser.waitForVisible(selector, 10000);
        return browser.$(selector);
    }

    static listOfElements(selector) {
        browser.waitForVisible(selector, 10000);
        return browser.$$(selector);
    }

    static waitForTitleDisplayed(title) {
        browser.waitUntil(() => {
            return browser.title().value === title;
        }, 10000, `${title} is not correct`);
    }

    static waitForURLCorrect(url) {
        browser.waitUntil(() => {
            return browser.getUrl() === url;
        }, 10000, `${url} is not correct`);
    }

    static waitUntilSelectorVisibled(xpath, condition) {
        let isVisibled = browser.isVisible(xpath);
        browser.waitUntil(function () {
            return isVisibled === condition
        }, 10000, `${xpath} is not visibled or displayed after 10s`);
        return isVisibled;
    }

    static waitUntilSelectorEnabled(xpath, condition) {
        let isEnabled = browser.isEnabled(xpath);
        browser.waitUntil(function () {
            return isEnabled === condition
        }, 5000, `${xpath} is not enabled after 5s`);
        return isEnabled;
    }

    static checkElementExistence(selector, timeout = 10000) {
        try {
            browser.waitForExist(selector, timeout);
        } catch (ex) {
            return false;
        }
        return true;
    }
}
module.exports = ReturnElement;
