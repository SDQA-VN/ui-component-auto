const UPDATE_APP_LOCATOR = '//button[contains(@class,"app-deploy-button")]';
const OK_LOCATOR = '//button[@name="ok"]';

class AppSettings {
    waitForButton(button, isVisible) {
        browser.waitUntil(() => {
            return $(button).isVisible() === isVisible;
        }, 30000, button + " is not " + isVisible);
    }

    updateApp() {
        this.waitForButton(UPDATE_APP_LOCATOR, true);
        $(UPDATE_APP_LOCATOR).click();
        this.waitForButton(OK_LOCATOR, true);
        $(OK_LOCATOR).click();
        browser.waitUntil(() => {
            return (browser.title().value !== "Settings");
        }, 30000, 'Cannot update app settings');
    };
}
module.exports = new AppSettings();