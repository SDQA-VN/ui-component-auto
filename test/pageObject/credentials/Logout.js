const ReturnElement = require('../../utils/ReturnElement');
const CONSTANT = require('../../constant');

class Logout {
    navigateToLoginPage() {
        browser.url(CONSTANT.PATH.LOGOUT_URL);
        ReturnElement.waitForURLCorrect(CONSTANT.PATH.LOGIN_URL);
        return this;
    }
}
module.exports = new Logout();