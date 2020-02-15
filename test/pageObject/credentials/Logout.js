const Helper = require('../../helper/main');
const CONSTANT = require('../../constant');

class Logout {
    navigateToLoginPage() {
        browser.url(CONSTANT.PATH.LOGOUT_URL);
        Helper.ElementHandler.verifyURL(CONSTANT.PATH.LOGIN_URL);
        return this;
    }
}
module.exports = new Logout();