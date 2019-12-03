const UPDATE_APP_LOCATOR = '//button[contains(@class,"app-deploy-button")]';
const OK_LOCATOR = '//button[@name="ok"]';
const Helper = require('../../helper/main')

class AppSettings {
    updateApp() {
        Helper.ElementHandler.waitForElement(UPDATE_APP_LOCATOR);
        $(UPDATE_APP_LOCATOR).click();
        Helper.ElementHandler.waitForElement(OK_LOCATOR);
        $(OK_LOCATOR).click();
        Helper.ElementHandler.verifyTitle("Settings");
        return this;
    };
}
module.exports = new AppSettings();