const Login = require('../credentials/Login');
const Logout = require('../credentials/Logout');
const Helper = require('../../helper/main');
const CONFIG = require('../../config.js');
const CONSTANT = require('../../constant');

class Auth {
    login() {
        console.log('!!! Login !!!');
        Helper.BrowserHandler.navigate(CONSTANT.PATH.APP_INDEX);
        Login.submitLoginFormWithValidCred(CONFIG.credentials.username, CONFIG.credentials.password);
        Helper.ElementHandler.verifyURL(CONSTANT.PATH.APP_INDEX);
        return this;
    }

    logout() {
        console.log('!!! Logout !!!');
        Logout.navigateToLoginPage();
        return this;
    }
}

module.exports = new Auth();
